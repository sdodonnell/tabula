import { Assignment } from '@prisma/client';
import request, { gql } from 'graphql-request';
import { GQL_ENDPOINT } from '../utils';

// TODO: Add relations as required to this input schema
export type AssignmentInputVariables = {
  name: string;
  description?: string | null;
  filePath?: string | null;
  dueDate: Date;
  createdDate: Date;
  createdById?: string;
  courseId?: string;
};


const allAssignmentsSchema = gql`
  {
    allAssignments {
      id
      name
      createdDate
      description
      dueDate
    }
  }
`;

const createAssignmentSchema = gql`
  mutation (
    $name: String!
    $description: String!
    $filePath: String
    $dueDate: Date!
    $createdDate: Date!
  ) {
    createAssignment(
      data: {
        name: $name
        description: $description
        filePath: $filePath
        dueDate: $dueDate
        createdDate: $createdDate
      }
    ) {
      id
    }
  }
`;

export const getAssignments = async (): Promise<Assignment[]> => {
  try {
    const res = await request<Record<'allAssignments', Assignment[]>>(
      GQL_ENDPOINT,
      allAssignmentsSchema
    );
    return res.allAssignments;
  } catch (error) {
    console.log('Could not fetch course data: ', error);
    return [];
  }
};

export const createAssignment = async (
  variables: AssignmentInputVariables
): Promise<Partial<Assignment> | null> => {
  try {
    const course = await request<Record<'createAssignment', Assignment>>(
      GQL_ENDPOINT,
      createAssignmentSchema,
      variables
    );

    return course.createAssignment;
  } catch (error) {
    throw new Error(`Could not create course: ${error}`)
  }
};

export const updateAssignment = () => {};

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
