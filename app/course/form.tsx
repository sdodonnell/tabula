'use client';

import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

import SectionList from '@/components/DataDisplay/SectionList';
import { createCourse, updateCourse } from '@/lib/course';
import { CourseInputVariables, Section } from '@/types';

interface Props {
  initialValues: CourseInputVariables;
  sections?: Section[];
  route: string;
}

const EditCourseForm = ({ initialValues, sections, route }: Props) => {
  const router = useRouter();
  const courseId = initialValues?.id;

  const submitForm = async (values: CourseInputVariables) => {
    startTransition(() => {
      try {
        if (courseId) {
          updateCourse({ id: courseId, data: values });
        } else {
          createCourse(values);
        }
        router.push(route);
      } catch (error) {
        alert(error);
      }
    });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submitForm}>
      <Form>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <Field
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="World History"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="term"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Term
          </label>
          <Field
            id="term"
            name="term"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Spring 2023"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <Field
            id="description"
            name="description"
            rows={4}
            as="textarea"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description goes here..."
          />
        </div>
        {courseId && (
          <div className="mb-6">
            <label
              htmlFor="course-sections"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sections
              <Link href={`/course/${courseId}/section/add`}>
                <span>+</span>
              </Link>
            </label>
            {sections && (
              <div id="course-sections">
                <SectionList sections={sections} />
              </div>
            )}
          </div>
        )}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default EditCourseForm;
