import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

export default function CourseLayout(props: Props) {
  return (
    <>
      {props.children}
      {props.modal}
    </>
  );
}
