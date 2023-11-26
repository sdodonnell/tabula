import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';

import { auth } from '@/lib/auth';
import { UserSession } from '@/types';

import NavBarMenu from './NavBarMenu';
import SearchBar from './SearchBar';

interface Props {
  children: ReactNode;
}

const NavBar = async ({ children }: Props) => {
  const session: UserSession | null = await auth();

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center">
          <Link href="/" className="flex items-center justify-between mr-4">
            <Image
              src="/tabula.svg"
              width="32"
              height="32"
              className="mr-3 h-8"
              alt="Tabula Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Tabula
            </span>
          </Link>
          <SearchBar />
          {children}
        </div>
        <NavBarMenu session={session} />
      </div>
    </nav>
  );
};

export default NavBar;
