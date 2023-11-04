import { AssignmentInputVariables } from '@/types';
import EditAssignmentForm from 'assignment/form';

export default function NewAssignment() {
  const initialValues: AssignmentInputVariables = {
    name: '',
    createdDate: new Date(),
    dueDate: new Date()
  };

  return (
    <EditAssignmentForm initialValues={initialValues} route="/assignment/all" />
  );
}
