import { GraphQLContext } from '../context';
import { CourseInputVariables } from '@/lib/course/course';
import { UserInputVariables } from '@/lib/user';
import { AssignmentInputVariables } from '@/lib/assignment/assignment';

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
  args: { data: CourseInputVariables },
  context: GraphQLContext
) => {
  const newCourse = await context.prisma.course.create({ data: args.data });

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
  args: { data: AssignmentInputVariables },
  context: GraphQLContext
) => {
  const newAssignment = await context.prisma.assignment.create({
    data: args.data
  });

  return newAssignment;
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

export const deleteCourseMutationResolver = async (
  parent: unknown,
  args: { id: string },
  context: GraphQLContext
) => {
  try {
    await context.prisma.course.delete({
      where: {
        id: parseInt(args.id)
      }
    });

    return true;
  } catch (error) {
    console.log(`Could not delete course ${args.id}:`, error);
    return false;
  }
};

export const deleteAssignmentMutationResolver = async (
  parent: unknown,
  args: { id: string },
  context: GraphQLContext
) => {
  try {
    await context.prisma.assignment.delete({
      where: {
        id: parseInt(args.id)
      }
    });

    return true;
  } catch (error) {
    console.log(`Could not delete assignment ${args.id}:`, error);
    return false;
  }
};
