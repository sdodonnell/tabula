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

export const deleteUserMutationResolver = async (
  parent: unknown,
  args: { id: string },
  context: GraphQLContext
) => {
  try {
    await context.prisma.user.delete({
      where: {
        id: parseInt(args.id)
      }
    });

    return true;
  } catch (error) {
    console.log(`Could not delete user ${args.id}:`, error);
    return false;
  }
};
