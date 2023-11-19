'use client';

import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

import { createSection } from '@/lib/course';
import { SectionInputVariables, Teacher } from '@/types';

interface Props {
  initialValues: SectionInputVariables;
  teachers: Teacher[];
  route: string;
}

export default function EditSectionForm({
  initialValues,
  teachers,
  route
}: Props) {
  const router = useRouter();
  //   const [editorValue, setValue] = useState<EditorData>();

  const submitForm = async (values: SectionInputVariables) => {
    // if (editorValue) {
    //   values.body = editorValue;
    // }

    if (!values.teacherId) return;

    startTransition(() => {
      try {
        // if (initialValues?.id) {
        // updateAssignment({ id: initialValues.id, data: values });
        // } else {
        createSection({ data: values });
        // }
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
            placeholder="World History, Fall 2023"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="teacher-name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Teacher
          </label>
          <Field
            id="teacher-name"
            name="teacher"
            as="select"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            defaultValue={initialValues.teacherId ?? ''}
          >
            <option value="" disabled hidden>
              Select Teacher
            </option>
            {teachers.map(teacher => {
              return (
                <option key={`teacher_select_${teacher.id}`} value={teacher.id}>
                  {teacher.firstName} {teacher.lastName}
                </option>
              );
            })}
          </Field>
        </div>
        <div className="mb-6">
          <label
            htmlFor="active"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Active?
          </label>
          <Field
            id="active"
            name="active"
            type="checkbox"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
}
