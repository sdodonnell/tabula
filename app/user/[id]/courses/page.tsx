import { getSectionsForTeacher } from '@/lib/course';
import DataList from '@/components/DataDisplay/DataList';
import { Course } from '@/types';

interface Props {
  params: {
    id: string;
  };
}

export default async function Courses({ params }: Props) {
  const { id } = params;
  const sections = await getSectionsForTeacher({ id: parseInt(id) });
  const courses = sections
    .filter(section => !!section.active)
    .map(section => section.course);

  const listParams: Array<keyof Course> = ['name', 'term', 'description'];

  return (
    <DataList<Course> data={courses} params={listParams} entityType="course" />
  );
}
