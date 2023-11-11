import { getStudentsForTeacher } from '@/lib/user';
import { User, UserParam } from '@/types/user';
import DataList from '@/components/DataDisplay/DataList';
import { URLParams } from '@/types';

interface Props {
  params: URLParams;
}

export default async function Students({ params }: Props) {
  const { id } = params;
  const users = await getStudentsForTeacher({ id: parseInt(id) });
  const listParams: UserParam[] = ['firstName', 'lastName', 'email'];

  return <DataList<User> data={users} params={listParams} entityType="user" />;
}
