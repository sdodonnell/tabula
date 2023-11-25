import Link from 'next/link';

import { getCourse } from '@/lib/course';

interface Props {
  params: {
    courseId: string;
  };
}

export default async function Course({ params }: Props) {
  const { courseId: id } = params;
  const course = await getCourse({ id: parseInt(id) });
  const sections = course?.sections?.length ? course.sections : null;

  return (
    <>
      <h2>Course</h2>
      <p>ID: {id}</p>
      <p>Name: {course?.name}</p>
      <p> Term: {course?.term}</p>
      <p> Description: {course?.description}</p>
      {sections && (
        <div className="">
          <h3 className="underline">Sections</h3>
          <ul>
            {sections.map(section => (
              <li key={section.id}>
                <Link
                  href={`/course/${id}/section/${section.id}`}
                  className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  {section.name}
                  <svg
                    className="w-4 h-4 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
