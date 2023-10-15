import { request, gql } from 'graphql-request';
import { User } from '@/types/user';

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

export const getUser = async () => {
  return {
    firstName: 'Hello'
  };
};

export const getUsers = async (): Promise<User[]> => {
  try {
    const res = await request<Record<'allUsers', User[]>>(
      'http://localhost:3000/api/graphql',
      allUsersSchema
    );
    return res.allUsers;
  } catch (error) {
    console.log('Could not fetch user data: ', error);
    return [];
  }
};
