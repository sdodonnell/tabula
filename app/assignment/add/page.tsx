'use client';

import { createAssignment } from '@/lib/assignment';
import { AssignmentInputVariables, EditorBlock } from '@/types';
import { Field, FieldInputProps, Form, Formik, FormikProps } from 'formik';
import { useRouter } from 'next/navigation';
import { startTransition, useState } from 'react';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('@/components/Editor'), {
  ssr: false
});

const DateInput = ({
  field,
  form,
  ...rest
}: {
  field: FieldInputProps<string>;
  form: FormikProps<any>;
}) => {
  return <input type="date" {...field} {...rest} />;
};

export default function NewAssignment() {
  const router = useRouter();
  const [editorValue, setValue] = useState<EditorBlock[]>([]);

  const initialValues: AssignmentInputVariables = {
    name: '',
    createdDate: new Date(),
    dueDate: new Date()
  };

  const submitForm = async (values: AssignmentInputVariables) => {
    if (editorValue) {
      values.body = editorValue;
    }

    startTransition(() => {
      // values.dueDate comes through as a string, so we have to convert it to Date object
      if (typeof values.dueDate === 'string') {
        values.dueDate = new Date(values.dueDate);
      }

      console.log(values);

      try {
        createAssignment(values);
        router.push('/assignment/all');
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
            placeholder="Midterm Exam"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="dueDate"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Due Date
          </label>
          <Field
            id="dueDate"
            name="dueDate"
            component={DateInput}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Spring 2023"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="assignment-body"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <Editor id="assignment-body" setValue={setValue} />
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
