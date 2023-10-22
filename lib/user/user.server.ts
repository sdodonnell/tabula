'use server';

import request, { gql } from 'graphql-request';
import { GQL_ENDPOINT } from '../utils';
import { revalidatePath } from 'next/cache';
import { User } from '@/types';

const deleteUserSchema = gql`
  mutation ($id: ID!) {
    deleteUser(id: $id)
  }
`;

export const deleteUser = async (variables: { id: number }, path: string) => {
  try {
    const user = await request<Record<'deleteUser', User>>(
      GQL_ENDPOINT,
      deleteUserSchema,
      variables
    );

    revalidatePath(path);

    return user.deleteUser;
  } catch (error) {
    console.log('Could not delete user: ', error);
    return null;
  }
};
