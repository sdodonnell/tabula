import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLContext } from './context';
import { Role, Section, User } from '@prisma/client';

const typeDefinitions = `
    type Query {
      user(id: ID!): User
      allUsers: [User!]!
    }

    type Mutation {
      addUser(firstName: String, lastName: String, gender: String, email: String, role: Role): User!
    }

    type User {
      id: ID!
      firstName: String!
      lastName: String!
      gender: String
      email: String
      role: Role
      sections: [Section!]!
    }

    type Course {
      id: ID!
      name: String
      term: String
      description: String
      syllabus: String
      sections: [Section!]!
    }

    type Section {
      id: ID!
      active: Boolean
      teacher: User
      students: [User!]!
      assignments: [Assignment!]!
      course: Course!
    }

    type Assignment {
      id: ID!
      name: String
      description: String
      file: String
      dueDate: Date
      createdDate: Date
      createdBy: User
      submissions: [Submission!]!
      section: Section
    }

    type Submission {
      id: ID!
      grade: Int
      submittedDate: Date
      feedback: String
      assignment: Assignment!
      student: User!
    }

    scalar Date 
      @specifiedBy(url: "https://scalars.graphql.org/andimarek/date-time")

    enum Role {
      STUDENT
      TEACHER
      ADMIN
      PARENT
    }
`;

const resolvers = {
  Query: {
    user: (parent: unknown, args: { id: string }, context: GraphQLContext) =>
      context.prisma.user.findUnique({
        where: {
          id: parseInt(args.id)
        }
      }),
    allUsers: (parent: unknown, args: {}, context: GraphQLContext) =>
      context.prisma.user.findMany()
  },
  Mutation: {
    addUser: async (
      parent: unknown,
      args: {
        firstName: string;
        lastName: string;
        gender: string;
        email: string;
        role: Role;
      },
      context: GraphQLContext
    ) => {
      const newUser = await context.prisma.user.create({
        data: { ...args }
      });

      return newUser;
    }
  },
  User: {
    sections: (parent: User, args: {}, context: GraphQLContext) => {
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
    }
  },
  Section: {
    course: (parent: Section, args: {}, context: GraphQLContext) => {
      context.prisma.course.findUnique({
        where: {
          id: parent.courseId
        }
      });
    }
  }
};

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
});
