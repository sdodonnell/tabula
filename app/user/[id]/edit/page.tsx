import { URLParams } from '@/types';
import EditUserForm from './form';
import { getUser } from '@/lib/user';

interface Props {
  params: URLParams;
}

export default async function EditAssignment({ params }: Props) {
  const { id } = params;
  const user = await getUser({ id: parseInt(id) });

  if (!user) return null;

  // TODO: Wrap in Suspense
  return <EditUserForm initialValues={user} />;
}
