'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

import { Assignment, AssignmentInputVariables } from '@/types';

const prisma = new PrismaClient();

export const getAssignments = async (): Promise<Assignment[]> => {
  try {
    const assignments = (await prisma.assignment.findMany()) as Assignment[];
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
    const assignment = (await prisma.assignment.findUnique({
      where: { id: variables.id }
    })) as Assignment;
    return assignment;
  } catch (error) {
    console.log('Could not fetch assignment data: ', error);
    return null;
  }
};

export const getAssignmentsForSection = async (variables: {
  id: number;
}): Promise<Assignment[]> => {
  try {
    const section = await prisma.section.findFirst({
      where: { id: variables.id },
      include: { assignments: true }
    });
    return (section?.assignments as Assignment[]) || [];
  } catch (error) {
    console.log('Could not fetch course data: ', error);
    return [];
  }
};

export const createAssignment = async (
  variables: AssignmentInputVariables
): Promise<number | null> => {
  // values.dueDate comes through as a string, so we have to convert it to Date object
  const createAssignmentVariables = {
    ...variables,
    dueDate: new Date(variables.dueDate),
    createdDate: new Date()
  };

  try {
    const assignment = await prisma.assignment.create({
      data: createAssignmentVariables
    });
    return assignment.id;
  } catch (error) {
    throw new Error(`Could not create course: ${error}`);
  }
};

export const updateAssignment = async (variables: {
  id: number;
  data: AssignmentInputVariables;
}): Promise<number | null> => {
  // values.dueDate comes through as a string, so we have to convert it to Date object
  const updateAssignmentVariables = {
    ...variables.data,
    dueDate: new Date(variables.data.dueDate),
    createdDate: new Date()
  };

  try {
    const assignment = await prisma.assignment.update({
      where: { id: variables.id },
      data: updateAssignmentVariables
    });

    revalidatePath(`/assignment/${variables.id}`);

    return assignment.id;
  } catch (error) {
    throw new Error(`Could not create course: ${error}`);
  }
};
