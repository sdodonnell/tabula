'use server';

import { Course, CourseInputVariables } from '@/types/course';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCourses = async (): Promise<Course[]> => {
  try {
    const courses = await prisma.course.findMany();
    return courses;
  } catch (error) {
    console.log('Could not fetch course data: ', error);
    return [];
  }
};

export const createCourse = async (
  variables: CourseInputVariables
): Promise<number | null> => {
  try {
    const course = await prisma.course.create({
      data: variables
    });

    return course.id;
  } catch (error) {
    console.log('Could not create course: ', error);
    return null;
  }
};

export const getCourse = async (variables: {
  id: number;
}): Promise<Course | null> => {
  try {
    const course = await prisma.course.findUnique({
      where: {
        id: variables.id
      }
    });

    return course;
  } catch (error) {
    console.log('Could not create course: ', error);
    return null;
  }
};

export const updateCourse = async () => {};
