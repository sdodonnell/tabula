'use client';

import {
  AssignmentInputVariables,
  createAssignment
} from '@/lib/assignment';
import { Field, FieldInputProps, Form, Formik, FormikProps } from 'formik';
import { useRouter } from 'next/navigation';

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

  const initialValues: AssignmentInputVariables = {
    name: '',
    createdDate: new Date(),
    dueDate: new Date(),
    createdById: '',
    courseId: ''
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async values => {
        // values.dueDate comes through as a string, so we have to convert it to Date object
        if (typeof values.dueDate === 'string') {
          values.dueDate = new Date(values.dueDate);
        }

        try {
          await createAssignment(values);
          router.push('/assignment/all');
        } catch (error) {
          alert(error);
        }
      }}
    >
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
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <Field
            id="description"
            name="description"
            as="textarea"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description goes here..."
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
