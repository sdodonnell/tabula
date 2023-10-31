import { useEditor } from '@/lib/hooks';
import { Field } from 'formik';
import { useState } from 'react';

const Editor = ({ id, setValue }: { id: string; setValue: Function }) => {
  const editor = useEditor(id, setValue);

  return (
    <Field
      id={id}
      name="body"
      as="div"
      rows={4}
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Description goes here..."
    />
  );
};

export default Editor;
