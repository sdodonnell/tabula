'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Sidebar() {
  const pathname = usePathname();

  const addClassName = (href: string) => {
    const lastPart = '/' + href.split('/').pop()
    if (lastPart === pathname) {
      return 'is-active';
    }

    return '';
  };

  return (
    <aside className="menu p-5">
      <ul className="menu-list">
        <li>
          <Link href="/dashboard" className={addClassName('/dashboard')}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/search" className={addClassName('/search')}>
            Search
          </Link>
        </li>
      </ul>
      <p className="menu-label">Academics</p>
      <ul className="menu-list">
        <li>
          <Link href="/my-classes" className={addClassName('/my-classes')}>
            My Classes
          </Link>
        </li>
        <li>
          <Link href="/classes" className={addClassName('/classes')}>
            All Classes
          </Link>
        </li>
      </ul>
      <p className="menu-label">People</p>
      <ul className="menu-list">
        <li>
          <Link href="/my-students" className={addClassName('/my-students')}>
            My Students
          </Link>
        </li>
        <li>
          <Link href="/students" className={addClassName('/students')}>
            All Students
          </Link>
        </li>
        <li>
          <Link href="/people" className={addClassName('/people')}>
            Faculty & Staff
          </Link>
        </li>
        <li>
          <Link href="/add-user" className={addClassName('/add-user')}>
            Add User
          </Link>
        </li>
      </ul>
    </aside>
  );
}
