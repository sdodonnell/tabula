import { getCourse } from '@/lib/course';

type Props = {
  params: {
    id: number;
  };
};

export default async function Course({ params }: Props) {
  const { id } = params;
  const course = await getCourse({ id });

  return (
    <>
      <h2>Course</h2>
      <p>ID: {id}</p>
      <p>Name: {course?.name}</p>
      <p> Term: {course?.term}</p>
      <p> Description: {course?.description}</p>
    </>
  );
}
