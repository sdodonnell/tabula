import Feed from '@/components/Feed';
import { getCourse } from '@/lib/course';
import { URLParams } from '@/types';

interface Props {
  params: URLParams;
}

export default async function Course({ params }: Props) {
  const { id } = params;
  const course = await getCourse({ id: parseInt(id) });

  return (
    <>
      <h2>Course</h2>
      <p>ID: {id}</p>
      <p>Name: {course?.name}</p>
      <p> Term: {course?.term}</p>
      <p> Description: {course?.description}</p>
      <Feed courseId={id} />
    </>
  );
}
