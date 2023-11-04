'use client';

import Editor from '@/components/Editor';
import { createAssignment, updateAssignment } from '@/lib/assignment';
import { Assignment, AssignmentInputVariables, EditorData } from '@/types';
import { Field, FieldInputProps, Form, Formik, FormikProps } from 'formik';
import { useRouter } from 'next/navigation';
import { startTransition, useState } from 'react';

interface Props {
  initialValues: Assignment;
  route: string;
}

const DateInput = ({
  field,
  form,
  ...rest
}: {
  field: FieldInputProps<string>;
  form: FormikProps<any>;
}) => {
  const formatDateTime = (date: string) => {
    const d = new Date(date);
    const year = d.getFullYear();

    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let hour = '' + d.getHours();
    let minutes = '' + d.getMinutes();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (hour.length < 2) hour = '0' + hour;
    if (minutes.length < 2) minutes = '0' + minutes;

    return `${year}-${month}-${day}T${hour}:${minutes}`;
  };

  return (
    <input
      type="datetime-local"
      {...field}
      {...rest}
      value={formatDateTime(field.value)}
    />
  );
};

export default function EditAssignmentForm({ initialValues, route }: Props) {
  const router = useRouter();
  const [editorValue, setValue] = useState<EditorData>();

  const submitForm = async (values: AssignmentInputVariables) => {
    if (editorValue) {
      values.body = editorValue;
    }

    startTransition(() => {
      try {
        if (initialValues?.id) {
          updateAssignment({ id: initialValues.id, data: values });
        } else {
          createAssignment(values);
        }
        router.push(route);
      } catch (error) {
        alert(error);
      }
    });
  };

  // Some values in the HTML form do not correspond to the types we expect in the database, namely Dates.
  // This transforms the relevant values so we render the right thing in the form inputs.
  const initialFormValues = {
    ...initialValues,
    dueDate: initialValues.dueDate.toISOString()
  };

  return (
    <Formik initialValues={initialFormValues} onSubmit={submitForm}>
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
          <Editor
            id="assignment-body"
            setValue={setValue}
            data={initialValues?.body}
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
