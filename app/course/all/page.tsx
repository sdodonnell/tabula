import DataList from '@/components/DataDisplay/DataList';
import { getCourses } from '@/lib/course';
import { Course } from '@/types';

export default async function Courses() {
  const users = await getCourses();
  const params: Array<keyof Course> = ['name', 'term', 'description'];

  return <DataList<Course> data={users} params={params} entityType="course" />;
}
