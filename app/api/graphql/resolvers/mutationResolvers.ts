import { GraphQLContext } from '../context';
import { CourseInputVariables } from '@/lib/course';
import { UserInputVariables } from '@/lib/user';

export const createUserMutationResolver = async (
  parent: unknown,
  {
    data
  }: {
    data: UserInputVariables;
  },
  context: GraphQLContext
) => {
  const newUser = await context.prisma.user.create({ data });

  return newUser;
};

export const createCourseMutationResolver = async (
  parent: unknown,
  {
    data
  }: {
    data: CourseInputVariables;
  },
  context: GraphQLContext
) => {
  const newCourse = await context.prisma.course.create({ data });

  return newCourse;
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
