import EditAssignmentForm from 'assignment/form';

import { getCourses } from '@/lib/course';
import type { AssignmentInputVariables } from '@/types';

export default async function NewAssignment() {
  const initialValues: AssignmentInputVariables = {
    name: '',
    dueDate: new Date().toISOString(),
    sectionId: null
  };

  // TODO: Narrow these courses down to the ones editable by the current user
  const activeCourses = (await getCourses()).map(course => ({
    name: course.name,
    id: course.id
  }));

  return (
    <EditAssignmentForm
      initialValues={initialValues}
      activeCourses={activeCourses}
      route="/assignment/all"
    />
  );
}
