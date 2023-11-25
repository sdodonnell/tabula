import dynamic from 'next/dynamic';

import CloseButton from '@/components/Feed/CloseButton';
import { getAssignment } from '@/lib/assignment';

const Document = dynamic(() => import('@/components/Document/Document'), {
  ssr: false
});

interface Props {
  params: {
    assignmentId: string;
  };
}

export default async function AssignmentModal({ params }: Props) {
  const { assignmentId: id } = params;
  const assignment = await getAssignment({ id: parseInt(id) });

  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className="flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-[100vw] md:inset-0 h-[100vh] bg-slate-500 bg-opacity-20"
    >
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-1/2">
        <CloseButton /> <h2>Assignment Modal</h2>
        <p>ID: {id}</p>
        <p>Name: {assignment?.name}</p>
        <p>
          Due:{' '}
          {assignment?.dueDate
            ? new Date(assignment.dueDate).toLocaleDateString('en-US')
            : ''}
        </p>
        {assignment?.body && <Document body={assignment.body} />}
      </div>
    </div>
  );
}
