import EditUserForm from './form';
import { getUser } from '@/lib/user';

type Props = {
  params: {
    id: number;
  };
};

export default async function EditAssignment({ params }: Props) {
  const { id } = params;
  const user = await getUser({ id });

  if (!user) return null;

  // TODO: Wrap in Suspense
  return <EditUserForm initialValues={user} />;
}
