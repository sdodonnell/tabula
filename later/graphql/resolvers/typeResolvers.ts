import { Section, User } from '@prisma/client';
import { GraphQLContext } from '../context';

export const userSectionsResolver = (
  parent: User,
  args: {},
  context: GraphQLContext
) => {
  return parent.role === 'TEACHER'
    ? context.prisma.section.findMany({
        where: {
          teacherId: parent.id
        }
      })
    : context.prisma.section.findMany({
        where: {
          students: {
            some: {
              studentId: parent.id
            }
          }
        }
      });
};

export const sectionCourseResolver = (
  parent: Section,
  args: {},
  context: GraphQLContext
) => {
  context.prisma.course.findUnique({
    where: {
      id: parent.courseId
    }
  });
};
