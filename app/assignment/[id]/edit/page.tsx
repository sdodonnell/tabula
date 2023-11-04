import { getAssignment } from '@/lib/assignment';
import EditAssignmentForm from '../../form';
import { AssignmentInputVariables, URLParams } from '@/types';

interface Props {
  params: URLParams;
}

export default async function EditAssignment({ params }: Props) {
  const { id } = params;
  const assignment = await getAssignment({ id: parseInt(id) });

  if (!assignment) return null;

  const initialValues: AssignmentInputVariables = {
    ...assignment,
    dueDate: assignment.dueDate.toISOString()
  };

  // TODO: Wrap in Suspense
  return (
    <EditAssignmentForm
      initialValues={initialValues}
      route={`/assignment/${id}/edit`}
    />
  );
}
