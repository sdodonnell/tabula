import DataList from '@/components/DataDisplay/DataList';
import { getSectionsForTeacher } from '@/lib/course';
import { Section } from '@/types';

interface Props {
  params: {
    id: string;
  };
}

export default async function Courses({ params }: Props) {
  const { id } = params;
  const sections = await getSectionsForTeacher({ id: parseInt(id) });
  const courses = sections.filter(section => !!section.active);

  const listParams: Array<keyof Section> = ['name', 'active'];

  return (
    <DataList<Section>
      data={courses}
      params={listParams}
      entityType="section"
    />
  );
}
