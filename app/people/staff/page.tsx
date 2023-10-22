import { USER_ROLES, getUsers } from '@/lib/user/user';
import { User, UserParam } from '@/types/user';
import DataList from '@/components/DataList';

export default async function Staff() {
  const users = await getUsers({ role: USER_ROLES.TEACHER });
  const params: UserParam[] = ['firstName', 'lastName', 'email'];

  return <DataList<User> data={users} params={params} entityType="user" />;
}
