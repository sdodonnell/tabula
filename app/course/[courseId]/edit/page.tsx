import { getCourse } from '@/lib/course';
import { CourseInputVariables, URLParams } from '@/types';

import EditCourseForm from '../../form';

interface Props {
  params: URLParams;
}

export default async function EditCourse({ params }: Props) {
  const { id } = params;
  const course = await getCourse({ id: parseInt(id) });

  if (!course) return null;

  const initialValues: CourseInputVariables = {
    ...course,
    description: course.description || '',
    syllabus: course.syllabus || ''
  };

  // TODO: Wrap in Suspense
  return (
    <EditCourseForm
      initialValues={initialValues}
      route={`/course/${id}/edit`}
      sections={course.sections}
    />
  );
}
