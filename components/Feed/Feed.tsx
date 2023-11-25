import Link from 'next/link';

import { getAssignmentsForSection } from '@/lib/assignment';
import { Assignment } from '@/types';

interface Props {
  sectionId: number;
}

const Feed = async ({ sectionId }: Props) => {
  // Get recent updates for course
  const assignments = await getAssignmentsForSection({ id: sectionId });

  return (
    <>
      {assignments.map((assignment: Assignment) => {
        // TODO: Extract this transformation into a more sophisticated helper function.
        const assignmentText = assignment.body.blocks[0].data.text;

        return (
          <Link
            href={`/assignment/${assignment.id}`}
            key={`assignment_${assignment.id}`}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="/docs/images/blog/image-4.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {assignment.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {assignmentText}
              </p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Feed;
