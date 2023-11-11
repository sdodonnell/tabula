'use client';

import { CourseInputVariables } from '@/types';
import EditCourseForm from 'course/form';

export default function NewCourse() {
  const initialValues: CourseInputVariables = {
    name: '',
    term: ''
  };

  return <EditCourseForm initialValues={initialValues} route="/course/all" />;
}
