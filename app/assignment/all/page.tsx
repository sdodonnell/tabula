import DataList from '@/components/DataList';
import { getAssignments } from '@/lib/assignment/assignment';
import { Assignment } from '@prisma/client';

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
