import { Course } from '@/types/course';
import request, { gql } from 'graphql-request';
import { GQL_ENDPOINT } from './utils';

export type CourseInputVariables = {
  name: string;
  term: string;
  description?: string;
  syllabusUrl?: string;
};

const allCoursesSchema = gql`
  {
    allCourses {
      name
      term
      description
    }
  }
`;

const createCourseSchema = gql`
  mutation ($name: String!, $term: String!, $description: String!) {
    createCourse(
      data: { name: $name, term: $term, description: $description }
    ) {
      id
    }
  }
`;

export const getCourses = async (): Promise<Course[]> => {
  try {
    const res = await request<Record<'allCourses', Course[]>>(
      GQL_ENDPOINT,
      allCoursesSchema
    );
    return res.allCourses;
  } catch (error) {
    console.log('Could not fetch course data: ', error);
    return [];
  }
};

export const createCourse = async (
  variables: CourseInputVariables
): Promise<Partial<Course> | null> => {
  try {
    const course = await request<Record<'createCourse', Course>>(
      GQL_ENDPOINT,
      createCourseSchema,
      variables
    );

    return course.createCourse;
  } catch (error) {
    console.log('Could not create course: ', error);
    return null;
  }
};

export const updateCourse = () => {}
