'use server';

import request, { gql } from 'graphql-request';
import { GQL_ENDPOINT } from '../utils';
import { Course } from '@/types';

const courseSchema = gql`
  query ($id: ID!) {
    course(id: $id) {
      id
      name
      term
      description
      syllabus
    }
  }
`;

export const getCourse = async (variables: { id: number }) => {
  try {
    const res = await request<Record<'course', Course>>(
      GQL_ENDPOINT,
      courseSchema,
      variables
    );
    return res.course;
  } catch (error) {
    console.log('Could not fetch course data: ', error);
    return null;
  }
};
