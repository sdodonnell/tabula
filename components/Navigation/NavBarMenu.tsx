'use client';

import { SessionProvider } from 'next-auth/react';
import { SyntheticEvent, useState } from 'react';

import { UserSession } from '@/types';

import AppDropdown from './AppDropdown';
import Notifications from './Notifications';
import UserMenu from './UserMenu';

interface Props {
  session: UserSession | null;
}

const NavBarMenu = ({ session }: Props) => {
  // TODO: Consolidate into custom hook once you figure out why
  // importing the custom hook breaks SSR
  const [isVisible, setIsVisible] = useState(false);
  const clickHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsVisible(prev => !prev);
  };

  return (
    <SessionProvider session={session}>
      <div className="flex items-center lg:order-2">
        <button
          id="dropdownDefaultButton"
          onClick={clickHandler}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Add
          <svg
            className="w-2.5 h-2.5 ml-2.5"
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

        <div
          id="add-dropdown"
          className={`${
            !isVisible && 'hidden'
          } absolute top-[60px] right-[100px] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="/user/add"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                User
              </a>
            </li>
            <li>
              <a
                href="/course/add"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Course
              </a>
            </li>
            <li>
              <a
                href="/assignment/add"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Assignment
              </a>
            </li>
          </ul>
        </div>

        <Notifications />
        <AppDropdown />
        <UserMenu />
      </div>
    </SessionProvider>
  );
};

export default NavBarMenu;
