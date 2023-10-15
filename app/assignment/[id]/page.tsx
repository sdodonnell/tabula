type AssignmentParams = {
  id: number;
};

export default function Assignment({ params }: { params: AssignmentParams }) {
  const { id } = params;
  return (
    <>
      <h2>Assignment</h2>
      <p>ID: {id}</p>
    </>
  );
}
