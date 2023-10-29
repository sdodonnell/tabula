import { getLoggedInUser } from '@/lib/user';
import Link from 'next/link';

export default async function Sidebar() {
  const currentUser = await getLoggedInUser();

  if (!currentUser) return null;

  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Search</span>
            </Link>
          </li>
        </ul>
        {/* <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="academics-dropdown"
              data-collapse-toggle="academics-dropdown"
            >
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Academics
              </span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul id="academics-dropdown" className="hidden py-2 space-y-2">
              <li>
                <Link
                  href={`/user/${currentUser.id}/students`}
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  My Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  All Classes
                </Link>
              </li>
            </ul>
          </li> */}
        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
          <li>
            <Link
              href={`/user/${currentUser.id}/students`}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">My Students</span>
            </Link>
          </li>
          <li>
            <Link
              href={`/user/${currentUser.id}/courses`}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">My Courses</span>
            </Link>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
          <li>
            <Link
              href="/people/students"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">
                All Students
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/people/staff"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">
                Faculty & Staff
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
