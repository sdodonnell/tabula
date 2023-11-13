'use server';

import { PrismaClient } from '@prisma/client';

import {
  Course,
  CourseInputVariables,
  Section,
  SectionInputVariables
} from '@/types/course';

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

export const getSectionsForTeacher = async (variables: {
  id: number;
}): Promise<Section[]> => {
  try {
    const sections = await prisma.section.findMany({
      where: {
        teacherId: variables.id
      },
      include: {
        course: true,
        teacher: true
      }
    });

    return sections;
  } catch (error) {
    console.log('Could not fetch user data: ', error);
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
      },
      include: {
        sections: true
      }
    });

    return course;
  } catch (error) {
    console.log('Could not create course: ', error);
    return null;
  }
};

export const updateCourse = async (variables: {
  id: number;
  data: CourseInputVariables;
}): Promise<number | null> => {
  try {
    const assignment = await prisma.course.update({
      where: { id: variables.id },
      data: variables.data
    });
    return assignment.id;
  } catch (error) {
    throw new Error(`Could not create course: ${error}`);
  }
};

export const createSection = async (variables: {
  data: SectionInputVariables;
}): Promise<number | null> => {
  try {
    const section = await prisma.section.create({
      data: {
        ...variables.data
      }
    });

    return section.id;
  } catch (error) {
    console.log('Could not create section: ', error);
    return null;
  }
};
