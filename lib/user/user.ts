import { request, gql } from 'graphql-request';
import { Role, User } from '@/types/user';
import { GQL_ENDPOINT } from '../utils';

export enum USER_ROLES {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER'
}

export type UserInputVariables = {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  role: Role;
};

const userSchema = gql`
  query ($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
      role
      gender
    }
  }
`;

const allUsersSchema = gql`
  query ($role: Role!) {
    allUsers(role: $role) {
      id
      firstName
      lastName
      email
      role
      gender
    }
  }
`;

const createUserSchema = gql`
  mutation (
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
      id
    }
  }
`;

export const getUser = async (variables: { id: number }) => {
  try {
    const res = await request<Record<'user', User>>(
      GQL_ENDPOINT,
      userSchema,
      variables
    );
    return res.user;
  } catch (error) {
    console.log('Could not fetch user data: ', error);
    return null;
  }
};

export const getUsers = async (variables: { role: Role }): Promise<User[]> => {
  try {
    const res = await request<Record<'allUsers', User[]>>(
      GQL_ENDPOINT,
      allUsersSchema,
      variables
    );
    return res.allUsers;
  } catch (error) {
    console.log('Could not fetch user data: ', error);
    return [];
  }
};

export const createUser = async (
  variables: UserInputVariables
): Promise<Partial<User> | null> => {
  try {
    const user = await request<Record<'createUser', User>>(
      GQL_ENDPOINT,
      createUserSchema,
      variables
    );

    return user.createUser;
  } catch (error) {
    console.log('Could not create user: ', error);
    return null;
  }
};

export const updateUser = () => {};
