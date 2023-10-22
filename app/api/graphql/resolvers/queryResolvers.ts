import { Role } from '@prisma/client';
import { GraphQLContext } from '../context';

export const userQueryResolver = (
  parent: unknown,
  args: { id: string },
  context: GraphQLContext
) => {
  return context.prisma.user.findUnique({
    where: {
      id: parseInt(args.id)
    }
  });
};

export const allUsersQueryResolver = (
  parent: unknown,
  args: { role: Role },
  context: GraphQLContext
) => {
  return context.prisma.user.findMany({
    where: {
      role: args.role
    }
  });
};

export const allCoursesQueryResolver = (
  parent: unknown,
  args: {},
  context: GraphQLContext
) => {
  return context.prisma.course.findMany();
};

export const allAssignmentsQueryResolver = (
  parent: unknown,
  args: {},
  context: GraphQLContext
) => {
  return context.prisma.assignment.findMany();
};
