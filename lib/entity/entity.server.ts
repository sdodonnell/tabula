'use server';

import request, { gql } from 'graphql-request';
import { GQL_ENDPOINT } from '../utils';
import { Assignment, Course, User } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export type EntityType = 'user' | 'course' | 'assignment';

type ActionName = 'deleteUser' | 'deleteCourse' | 'deleteAssignment';
type Entity = User | Course | Assignment;

const deleteUserSchema = gql`
  mutation ($id: ID!) {
    deleteUser(id: $id)
  }
`;

const deleteCourseSchema = gql`
  mutation ($id: ID!) {
    deleteCourse(id: $id)
  }
`;

const deleteAssignmentSchema = gql`
  mutation ($id: ID!) {
    deleteAssignment(id: $id)
  }
`;

export const deleteEntity = async (
  variables: { id: number },
  entityType: EntityType,
  path: string
) => {
  let deleteSchema;

  switch (entityType) {
    case 'user':
      deleteSchema = deleteUserSchema;
      break;
    case 'course':
      deleteSchema = deleteCourseSchema;
      break;
    case 'assignment':
      deleteSchema = deleteAssignmentSchema;
      break;
  }

  if (!deleteSchema) return;

  try {
    await request<Record<ActionName, Entity>>(
      GQL_ENDPOINT,
      deleteUserSchema,
      variables
    );

    revalidatePath(path);
  } catch (error) {
    console.log('Could not delete user: ', error);
    return null;
  }
};
