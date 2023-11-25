'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

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

export const getSections = async () => {
  try {
    const sections = await prisma.section.findMany();

    return sections;
  } catch (error) {
    console.log('Could not fetch sections: ', error);
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
        sections: {
          include: {
            teacher: true
          }
        }
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
    const course = await prisma.course.update({
      where: { id: variables.id },
      data: variables.data
    });

    revalidatePath(`/course/${variables.id}`);

    return course.id;
  } catch (error) {
    throw new Error(`Could not update course: ${error}`);
  }
};

export const deleteCourse = async (variables: { id: number }, path: string) => {
  try {
    await prisma.section.deleteMany({
      where: {
        courseId: variables.id
      }
    });

    await prisma.course.delete({ where: { id: variables.id } });

    revalidatePath(path);
  } catch (error) {
    console.log('Could not delete course: ', error);
    return null;
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

export const updateSection = async (variables: {
  id: number;
  courseId: number;
  data: SectionInputVariables;
}): Promise<number | null> => {
  const { id, courseId, data } = variables;

  try {
    const section = await prisma.section.update({
      where: { id },
      data: {
        name: data.name,
        teacherId: data.teacherId,
        active: data.active
      }
    });

    if (id && courseId) {
      revalidatePath(`/course/${courseId}/section/${id}`);
    }

    return section.id;
  } catch (error) {
    throw new Error(`Could not update section: ${error}`);
  }
};

export const getSection = async (variables: {
  id: number;
}): Promise<Section | null> => {
  try {
    const section = await prisma.section.findUnique({
      where: {
        id: variables.id
      },
      include: {
        teacher: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        }
      }
    });

    return section;
  } catch (error) {
    console.log('Could not get section: ', error);
    return null;
  }
};

export const deleteSection = async (
  variables: { id: number },
  path: string
) => {
  try {
    await prisma.section.delete({ where: { id: variables.id } });

    revalidatePath(path);
  } catch (error) {
    console.log('Could not delete section: ', error);
    return null;
  }
};
