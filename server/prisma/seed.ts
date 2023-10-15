import { PrismaClient, PrismaPromise, Role } from '@prisma/client';
import data from './seed-data.json';

interface MockData {
  users: User[];
  courses: Course[];
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  role: Role;
}

interface Course {
  name: string;
  term: string;
  description: string;
  sections: {
    create: [
      {
        active: boolean;
      }
    ];
  };
}

const prisma = new PrismaClient();

async function main() {
  const transactions: PrismaPromise<any>[] = [];
  transactions.push(prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 0;`);

  const tablenames = await prisma.$queryRaw<
    Array<{ TABLE_NAME: string }>
  >`SELECT TABLE_NAME from information_schema.TABLES WHERE TABLE_SCHEMA = 'tests';`;

  for (const { TABLE_NAME } of tablenames) {
    if (TABLE_NAME !== '_prisma_migrations') {
      try {
        transactions.push(prisma.$executeRawUnsafe(`TRUNCATE ${TABLE_NAME};`));
      } catch (error) {
        console.log({ error });
      }
    }
  }

  transactions.push(prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 1;`);

  try {
    await prisma.$transaction(transactions);

    const { users, courses } = data as MockData;

    await Promise.all([
      prisma.user.createMany({ data: users }),
      prisma.course.create({ data: courses[0] })
    ]);
  } catch (error) {
    console.log({ error });
  }
}

main().then(() => {
  console.log('Data seeded...');
});
