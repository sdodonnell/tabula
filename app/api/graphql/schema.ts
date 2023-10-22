import { makeExecutableSchema } from '@graphql-tools/schema';
import {
  allAssignmentsQueryResolver,
  allCoursesQueryResolver,
  allUsersQueryResolver,
  userQueryResolver
} from './resolvers/queryResolvers';
import {
  createAssignmentMutationResolver,
  createCourseMutationResolver,
  createSectionMutationResolver,
  createSubmissionMutationResolver,
  createUserMutationResolver,
  deleteAssignmentMutationResolver,
  deleteCourseMutationResolver,
  deleteUserMutationResolver
} from './resolvers/mutationResolvers';
import {
  sectionCourseResolver,
  userSectionsResolver
} from './resolvers/typeResolvers';

const queryDefinitions = `
  type Query {
    user(id: ID!): User
    allUsers(role: Role!): [User!]!
    allCourses: [Course!]!
    allAssignments: [Assignment!]!
  }
`;

const mutationDefinitions = `
  type Mutation {
    createUser(data: UserCreateInput!): User!
    createCourse(data: CourseCreateInput!): Course!
    createSection(courseId: ID!, teacherId: ID!, active: Boolean): Section!
    createAssignment(data: AssignmentCreateInput!, createdByUserId: ID, courseId: ID): Assignment!
    createSubmission(data: SubmissionCreateInput, assignmentId: ID!, studentID: ID!): Submission!
    deleteUser(id: ID!): Boolean!
    deleteCourse(id: ID!): Boolean!
    deleteAssignment(id: ID!): Boolean!
  }
`;

const typeDefinitions = `
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
      course: Course
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

const inputDefinitions = `
  input UserCreateInput {
    firstName: String, 
    lastName: String, 
    gender: String, 
    email: String, 
    role: Role
  }

  input CourseCreateInput {
    name: String!,
    term: String!, 
    description: String,
    syllabusUrl: String
  }

  input AssignmentCreateInput {
    name: String!,
    description: String!,
    filePath: String,
    dueDate: Date,
    createdDate: Date
  }

  input SubmissionCreateInput {
    grade: Int,
    submittedDate: Date,
    feedback: String
  }
`;

const resolvers = {
  Query: {
    user: userQueryResolver,
    allUsers: allUsersQueryResolver,
    allCourses: allCoursesQueryResolver,
    allAssignments: allAssignmentsQueryResolver
  },
  Mutation: {
    createUser: createUserMutationResolver,
    createCourse: createCourseMutationResolver,
    createSection: createSectionMutationResolver,
    createAssignment: createAssignmentMutationResolver,
    createSubmission: createSubmissionMutationResolver,
    deleteUser: deleteUserMutationResolver,
    deleteCourse: deleteCourseMutationResolver,
    deleteAssignment: deleteAssignmentMutationResolver
  },
  User: {
    sections: userSectionsResolver
  },
  Section: {
    course: sectionCourseResolver
  }
};

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [
    queryDefinitions,
    mutationDefinitions,
    typeDefinitions,
    inputDefinitions
  ]
});
