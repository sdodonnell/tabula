import { getUser } from '@/lib/user/user';

type Props = {
  params: {
    id: number;
  };
};

export default async function User({ params }: Props) {
  const { id } = params;
  const user = await getUser({ id });

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
