import { request, gql } from 'graphql-request';
import { User } from '@/types/user';
import { Role } from '@prisma/client';

const endpoint = 'http://localhost:3000/api/graphql';

const allUsersSchema = gql`
  {
    allUsers {
      firstName
      lastName
      email
      role
      gender
    }
  }
`;

const createUserSchema = gql`
  mutation CreateUser(
    $firstName: String
    $lastName: String
    $gender: String
    $email: String
    $role: Role
  ) {
    createUser(
      data: {
        firstName: $firstName
        lastName: $lastName
        gender: $gender
        email: $email
        role: $role
      }
    ) {
      firstName
      lastName
    }
  }
`;

export const getUser = async () => {
  return {
    firstName: 'Hello'
  };
};

export const getUsers = async (): Promise<User[]> => {
  try {
    const res = await request<Record<'allUsers', User[]>>(
      endpoint,
      allUsersSchema
    );
    return res.allUsers;
  } catch (error) {
    console.log('Could not fetch user data: ', error);
    return [];
  }
};

export const createUser = async (variables: {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  role: Role;
}): Promise<User | null> => {
  try {
    const user = await request<Record<'createUser', User>>(
      endpoint,
      createUserSchema,
      variables
    );

    return user.createUser;
  } catch (error) {
    console.log('Could not create user: ', error);
    return null;
  }
};
