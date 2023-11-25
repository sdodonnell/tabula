'use client';

import Link from 'next/link';
import { SyntheticEvent, useState } from 'react';

import { Section } from '@/types';

interface Props {
  sections: Section[];
  userId?: number;
}

const SidebarDropdown = ({ sections, userId }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsExpanded(prev => !prev);
  };

  return (
    <div>
      <button
        type="button"
        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls="academics-dropdown"
        onClick={handleClick}
      >
        <span className="flex-1 ml-3 text-left whitespace-nowrap">
          My Sections
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
      <ul
        id="academics-dropdown"
        className={`${!isExpanded && 'hidden'} py-2 space-y-2`}
      >
        {sections.map(section => (
          <li key={`sidebar_section_${section.id}`}>
            <Link
              href={`/course/${section.courseId}/section/${section.id}`}
              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              {section.name}
            </Link>
          </li>
        ))}
        {userId && (
          <li>
            <Link
              href={`/user/${userId}/courses`}
              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              All Courses
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SidebarDropdown;
