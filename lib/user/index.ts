'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

import { auth } from '@/lib/auth';
import { Role, Section, User, UserInputVariables, UserSession } from '@/types';

const prisma = new PrismaClient();

export const getLoggedInUser = async () => {
  const session: UserSession | null = await auth();

  if (session?.user?.email) {
    try {
      return prisma.user.findUnique({
        where: {
          email: session.user.email
        }
      });
    } catch (error) {
      console.log('Could not fetch user data: ', error);
      return null;
    }
  }

  return null;
};

export const getUser = async (variables: { id: number }) => {
  try {
    return prisma.user.findUnique({
      where: {
        id: variables.id
      }
    });
  } catch (error) {
    console.log('Could not fetch user data: ', error);
    return null;
  }
};

export const getUsers = async (variables: { role: Role }): Promise<User[]> => {
  try {
    return prisma.user.findMany({
      where: {
        role: variables.role
      }
    });
  } catch (error) {
    console.log('Could not fetch user data: ', error);
    return [];
  }
};

export const getStudentsForTeacher = async (variables: {
  id: number;
}): Promise<User[]> => {
  try {
    const sections = await prisma.section.findMany({
      where: {
        teacherId: variables.id
      }
    });

    const students = await prisma.user.findMany({
      where: {
        sectionsEnrolled: {
          some: {
            sectionId: {
              in: sections.map(section => section.id)
            }
          }
        }
      }
    });

    return students;
  } catch (error) {
    console.log('Could not fetch user data: ', error);
    return [];
  }
};

export const createUser = async (
  variables: UserInputVariables
): Promise<number | null> => {
  try {
    const newUser = await prisma.user.create({ data: variables });

    return newUser.id;
  } catch (error) {
    console.log('Could not create user: ', error);
    return null;
  }
};

export const deleteUser = async (variables: { id: number }, path: string) => {
  try {
    await prisma.user.delete({ where: { id: variables.id } });

    revalidatePath(path);
  } catch (error) {
    console.log('Could not delete user: ', error);
    return null;
  }
};

export const updateUser = async (variables: {
  id: number;
  data: UserInputVariables;
}): Promise<number | null> => {
  try {
    const user = await prisma.user.update({
      where: { id: variables.id },
      data: variables.data
    });
    return user.id;
  } catch (error) {
    throw new Error(`Could not create course: ${error}`);
  }
};

export const getSidebarItemsForUser = async (variables: {
  id: number;
}): Promise<{
  sectionsTaught: Section[];
  sectionsEnrolled: Section[];
}> => {
  try {
    const data = await prisma.user.findUnique({
      where: { id: variables.id },
      include: {
        sectionsEnrolled: {
          select: { section: true }
        },
        sectionsTaught: true
      }
    });

    return {
      sectionsEnrolled: data?.sectionsEnrolled.map(el => el.section) || [],
      sectionsTaught: data?.sectionsTaught || []
    };
  } catch (error) {
    console.log(`Could not fetch data for user ${variables.id}`, error);
    return {
      sectionsTaught: [],
      sectionsEnrolled: []
    };
  }
};
