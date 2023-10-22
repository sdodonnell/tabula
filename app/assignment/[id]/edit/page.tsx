import { getAssignment } from '@/lib/assignment';
import EditAssignmentForm from './form';

type Props = {
  params: {
    id: number;
  };
};

export default async function EditAssignment({ params }: Props) {
  const { id } = params;
  const assignment = await getAssignment({ id });

  if (!assignment) return null;

  // TODO: Wrap in Suspense
  return <EditAssignmentForm initialValues={assignment} />;
}
