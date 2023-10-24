'use server';

import { Assignment, AssignmentInputVariables } from '@/types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAssignments = async (): Promise<Assignment[]> => {
  try {
    const assignments = await prisma.assignment.findMany();
    return assignments;
  } catch (error) {
    console.log('Could not fetch course data: ', error);
    return [];
  }
};

export const getAssignment = async (variables: {
  id: number;
}): Promise<Assignment | null> => {
  try {
    const assignment = await prisma.assignment.findUnique({
      where: { id: variables.id }
    });
    return assignment;
  } catch (error) {
    console.log('Could not fetch assignment data: ', error);
    return null;
  }
};

export const createAssignment = async (
  variables: AssignmentInputVariables
): Promise<number | null> => {
  try {
    const assignment = await prisma.assignment.create({ data: variables });
    return assignment.id;
  } catch (error) {
    throw new Error(`Could not create course: ${error}`);
  }
};

export const updateAssignment = async () => {};
