'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { startTransition } from 'react';

import { deleteAssignment } from '@/lib/assignment';
import { deleteCourse, deleteSection } from '@/lib/course';
import { deleteUser } from '@/lib/user';
import { EntityType } from '@/types/utils';

interface Props {
  id: number;
  entityType: EntityType;
}

const ListActions = ({ id, entityType }: Props) => {
  const pathname = usePathname();

  const handleDelete = () => {
    // TODO: Add a transition state here so the user knows this is working.
    startTransition(() => {
      switch (entityType) {
        case 'user':
          // TODO: Add a warning here for the user, since deleting a user will delete
          // all the user's assignments, etc.
          deleteUser({ id }, pathname);
          break;
        case 'course':
          // TODO: Add a warning here for the user, since deleting a course will delete
          // all its sections as well.
          deleteCourse({ id }, pathname);
          break;
        case 'section':
          deleteSection({ id }, pathname);
          break;
        case 'assignment':
          deleteAssignment({ id }, pathname);
          break;
        default:
          break;
      }
    });
  };

  return (
    <>
      <Link href={`/${entityType}/${id}/edit`}>Edit</Link>
      {' | '}
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default ListActions;
