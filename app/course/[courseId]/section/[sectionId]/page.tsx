import Feed from '@/components/Feed/Feed';
import { getSection } from '@/lib/course';

interface Props {
  params: {
    sectionId: string;
  };
}

export default async function Section({ params }: Props) {
  const { sectionId: id } = params;
  const section = await getSection({ id: parseInt(id) });

  return (
    <>
      <h2>Course</h2>
      <p>ID: {id}</p>
      <p>Name: {section?.name}</p>
      <p> Teacher: {section?.teacher?.lastName}</p>
      <Feed sectionId={parseInt(id)} />
    </>
  );
}
