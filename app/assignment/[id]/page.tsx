import { getAssignment } from '@/lib/assignment';

type Props = {
  params: {
    id: number;
  };
};

export default async function Assignment({ params }: Props) {
  const { id } = params;
  const assignment = await getAssignment({ id });

  return (
    <>
      <h2>Assignment</h2>
      <p>ID: {id}</p>
      <p>Name: {assignment?.name}</p>
      <p>
        Due:{' '}
        {assignment?.dueDate ? new Date(assignment.dueDate).toLocaleDateString('en-US') : ''}
      </p>
      <p> Description: {assignment?.description}</p>
    </>
  );
}
