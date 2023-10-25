'use server';

import { PrismaClient, Role } from '@prisma/client';
import { User, UserInputVariables } from '@/types/user';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

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

export const updateUser = async () => {};
