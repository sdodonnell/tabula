import { getUsers } from '@/lib/user';
import { UserParam } from '@/types/user';
import UserList from '@/components/UserList';

export default async function Students() {
  const users = await getUsers();
  const params: UserParam[] = ['firstName', 'lastName', 'email'];

  return <UserList users={users} params={params} />;
}
