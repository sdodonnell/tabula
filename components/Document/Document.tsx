'use client';

import { useEditor } from '@/lib/hooks';
import { EditorData } from '@/types';
import { useId } from 'react';

const Document = ({ body }: { body: EditorData | null }) => {
  const id = useId();
  const editor = useEditor({
    id,
    readOnly: true,
    data: body
  });

  return <div id={id} />;
};

export default Document;
