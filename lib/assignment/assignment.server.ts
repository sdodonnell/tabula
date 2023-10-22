'use server';

import request, { gql } from 'graphql-request';
import { GQL_ENDPOINT } from '../utils';
import { Assignment } from '@/types';

const assignmentSchema = gql`
  query ($id: ID!) {
    assignment(id: $id) {
      id
      name
      description
      filePath
      dueDate
      createdDate
    #   createdBy
    #   course
    #   submissions
    }
  }
`;

export const getAssignment = async (variables: { id: number }) => {
  try {
    // The return type here should probably be from the lib types, not the prisma types
    const res = await request<Record<'assignment', Assignment>>(
      GQL_ENDPOINT,
      assignmentSchema,
      variables
    );
    return res.assignment;
  } catch (error) {
    console.log('Could not fetch assignment data: ', error);
    return null;
  }
};
