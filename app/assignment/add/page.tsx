import { Assignment, AssignmentInputVariables } from '@/types';
import EditAssignmentForm from 'assignment/form';

export default function NewAssignment() {
  const initialValues: AssignmentInputVariables = {
    name: '',
    dueDate: new Date().toISOString()
  };

  return (
    <EditAssignmentForm initialValues={initialValues} route="/assignment/all" />
  );
}
