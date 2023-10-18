import { Role } from '@prisma/client';
import { GraphQLContext } from '../context';

export const createUserMutationResolver = async (
  parent: unknown,
  {
    data
  }: {
    data: {
      firstName: string;
      lastName: string;
      gender: string;
      email: string;
      role: Role;
    };
  },
  context: GraphQLContext
) => {
  const newUser = await context.prisma.user.create({ data });

  return newUser;
};

export const createCourseMutationResolver = async (
  parent: unknown,
  args: {},
  context: GraphQLContext
) => {
  console.log('hello', args);
};
export const createSectionMutationResolver = async (
  parent: unknown,
  args: {},
  context: GraphQLContext
) => {
  console.log('hello', args);
};
export const createAssignmentMutationResolver = async (
  parent: unknown,
  args: {},
  context: GraphQLContext
) => {
  console.log('hello', args);
};
export const createSubmissionMutationResolver = async (
  parent: unknown,
  args: {},
  context: GraphQLContext
) => {
  console.log('hello', args);
};
