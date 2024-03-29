import DataList from '@/components/DataDisplay/DataList';
import { getAssignments } from '@/lib/assignment';
import { Assignment } from '@/types';

export default async function Assignments() {
  const assignments = await getAssignments();
  const params: Array<keyof Assignment> = ['name', 'dueDate'];

  console.log(assignments)

  return (
    <DataList<Assignment>
      data={assignments}
      params={params}
      entityType="assignment"
    />
  );
}
