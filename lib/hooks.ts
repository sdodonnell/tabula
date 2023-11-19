// @ts-nocheck
'use client';

import Checklist from '@editorjs/checklist';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import SimpleImage from '@editorjs/simple-image';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';

import { EditorData } from '@/types';

// @ts-nocheck

interface Props {
  id: string;
  setValue?: Function | null;
  readOnly?: boolean;
  data?: EditorData | null;
}

/**
 * Takes a DOM node ID and a callback and creates an EditorJS instance.
 * This will be attached to the DOM node referenced by the ID, and the
 * callback will be invoked to save the data as a user interacts with
 * the editor.
 */
export const useEditor = ({
  id,
  setValue,
  readOnly = false,
  data = null
}: Props) => {
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

/**
 * Returns a React ref and a click handler. Triggering the click handler
 * will toggle the visibility of the DOM node that the ref is attached to.
 */
// export const useClickToggle = () => {
// const [isVisible, setIsVisible] = useState(false);
// const clickHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
//   e.preventDefault();

//   setIsVisible(prev => !prev);
// };

// return { isVisible, clickHandler };
// };
