import DataList from '@/components/DataList';
import { getAssignments } from '@/lib/assignment';
import { Assignment } from '@/types';

export default async function Assignments() {
  const assignments = await getAssignments();
  const params: Array<keyof Assignment> = ['name', 'description', 'dueDate'];

  return (
    <DataList<Assignment>
      data={assignments}
      params={params}
      entityType="assignment"
    />
  );
}
