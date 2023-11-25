import { getAssignment } from '@/lib/assignment';
import { getCourses } from '@/lib/course';
import { AssignmentInputVariables, URLParams } from '@/types';

import EditAssignmentForm from '../../form';

interface Props {
  params: URLParams;
}

export default async function EditAssignment({ params }: Props) {
  const { id } = params;
  const assignment = await getAssignment({ id: parseInt(id) });

  if (!assignment) return null;

  // TODO: Narrow these courses down to the ones editable by the current user
  const activeCourses = (await getCourses()).map(course => ({
    name: course.name,
    id: course.id
  }));

  const initialValues: AssignmentInputVariables = {
    ...assignment,
    dueDate: assignment.dueDate.toISOString()
  };

  // TODO: Wrap in Suspense
  return (
    <EditAssignmentForm
      initialValues={initialValues}
      route={`/assignment/${id}/edit`}
      activeCourses={activeCourses}
    />
  );
}
