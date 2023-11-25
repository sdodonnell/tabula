import Link from 'next/link';

import Feed from '@/components/Feed/Feed';
import { auth } from '@/lib/auth';
import { getSection } from '@/lib/course';

interface Props {
  params: {
    courseId: string;
    sectionId: string;
  };
}

export default async function Section({ params }: Props) {
  const { courseId, sectionId: id } = params;
  const session = await auth();
  const section = await getSection({ id: parseInt(id) });

  let loggedIn = false;
  if (session?.user?.email === section?.teacher?.email) {
    loggedIn = true;
  }

  return (
    <div className="relative">
      <h2>Course</h2>
      <p>ID: {id}</p>
      <p>Name: {section?.name}</p>
      <p> Teacher: {section?.teacher?.lastName}</p>
      <Feed sectionId={parseInt(id)} />
      {loggedIn && (
        <button className="absolute top-1 right-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <Link href={`/course/${courseId}/section/${id}/edit`}>Edit</Link>
        </button>
      )}
    </div>
  );
}
