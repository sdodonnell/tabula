import Link from 'next/link';

import { getSidebarItemsForUser } from '@/lib/user';
import { User } from '@/types';

import SidebarDropdown from './SidebarDropdown';

interface Props {
  currentUser: Partial<User> & { id: number };
}

export default async function Sidebar({ currentUser }: Props) {
  const { sectionsEnrolled, sectionsTaught } = await getSidebarItemsForUser({
    id: currentUser.id
  });

  const sections = [...sectionsEnrolled, ...sectionsTaught];

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
            {sections.length > 0 && (
              <SidebarDropdown sections={sections} userId={currentUser.id} />
            )}
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
