// @ts-nocheck

import { useEffect, useRef } from 'react';
import Header from '@editorjs/header';
import Checklist from '@editorjs/checklist';
import SimpleImage from '@editorjs/simple-image';

import EditorJS from '@editorjs/editorjs';
import { EditorData } from '@/types';

interface Props {
  id: string,
  setValue?: Function | null,
  readOnly?: boolean
  data?: EditorData | null
}

export const useEditor = ({ id, setValue, readOnly = false, data = null }: Props) => {
  const editor = useRef(null);

  useEffect(() => {
    if (!editor?.current) {
      editor.current = new EditorJS({
        holder: id,
        tools: {
          header: Header,
          checklist: Checklist,
          image: SimpleImage
        },
        data,
        readOnly,
        onChange: readOnly
          ? null
          : async (api, event) => {
              const data = await api.saver.save();
              setValue(data);
            }
      });
    }
    return () => {
      if (editor?.current && editor.current.destroy) {
        console.log('destroying');
        editor.current.destroy();
      }
    };
  }, [id, setValue]);

  return editor;
};
