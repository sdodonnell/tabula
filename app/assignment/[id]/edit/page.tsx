import { getAssignment } from '@/lib/assignment';
import EditAssignmentForm from '../../form';
import { URLParams } from '@/types';

interface Props {
  params: URLParams;
}

export default async function EditAssignment({ params }: Props) {
  const { id } = params;
  const assignment = await getAssignment({ id: parseInt(id) });

  if (!assignment) return null;

  // TODO: Wrap in Suspense
  return (
    <EditAssignmentForm initialValues={assignment} route="/assignment/all" />
  );
}
