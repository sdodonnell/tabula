type UserParams = {
  id: number;
};

export default function Assignment({ params }: { params: UserParams }) {
  const { id } = params;
  return (
    <>
      <h2>User</h2>
      <p>ID: {id}</p>
    </>
  );
}
