import { getUser } from '@/lib/user';
import { URLParams } from '@/types';

interface Props {
  params: URLParams;
}

export default async function User({ params }: Props) {
  const { id } = params;
  const user = await getUser({ id: parseInt(id) });

  return (
    <>
      <h2>User</h2>
      <p>ID: {id}</p>
      <p>
        Name: {user?.firstName} {user?.lastName}
      </p>
      <p> Email: {user?.email}</p>
      <p> Gender: {user?.gender || 'none'}</p>
    </>
  );
}
