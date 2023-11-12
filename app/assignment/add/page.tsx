import EditAssignmentForm from 'assignment/form';

import type { AssignmentInputVariables } from '@/types';

export default function NewAssignment() {
  const initialValues: AssignmentInputVariables = {
    name: '',
    dueDate: new Date().toISOString()
  };

  return (
    <EditAssignmentForm initialValues={initialValues} route="/assignment/all" />
  );
}
