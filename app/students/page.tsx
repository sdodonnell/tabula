import { getUsers } from '@/lib/user';
import { User, UserParam } from '@/types/user';
import DataList from '@/components/DataList';

export default async function Students() {
  const users = await getUsers();
  const params: UserParam[] = ['firstName', 'lastName', 'email'];

  return <DataList<User> data={users} params={params} />;
}
