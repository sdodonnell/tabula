'use client';

import { useId } from 'react';

import { useEditor } from '@/lib/hooks';
import { EditorData } from '@/types';

const Document = ({ body }: { body: EditorData | null }) => {
  const id = useId();
  // const editor = useEditor({
  //   id,
  //   readOnly: true,
  //   data: body
  // });

  return <div id={id} />;
};

export default Document;
