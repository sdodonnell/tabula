import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.submission.update({
    where: { id: 1 },
    data: { grade: 50, feedback: 'Just kidding, this is bad.' }
  });
  const allUsers = await prisma.user.findMany({
    include: {
      submittedAssignments: true
    }
  });
  console.dir(allUsers, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
