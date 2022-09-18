import Link from 'next/link';
import React from 'react';

const MenuBar = () => {
  return (
    <div>
      <Link href="/">
        <a>Dashboard</a>
      </Link>
      <Link href="/gradebook">
        <a>Gradebook</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
      <Link href="/addUser">
        <a>Add User</a>
      </Link>
    </div>
  );
};

export default MenuBar;
