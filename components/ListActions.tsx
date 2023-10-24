'use client';

import { EntityType } from '@/lib/entity';
import { deleteUser } from '@/lib/user';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTransition } from 'react';

interface Props {
  id: number;
  entityType: EntityType;
}

const ListActions = ({ id, entityType }: Props) => {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const handleDelete = () => {
    startTransition(() => {
      deleteUser({ id }, pathname);
    });
  };

  return (
    <> 
      <Link as="button" href={`/user/${id}/edit`}>
        Edit
      </Link>
      {' | '}
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default ListActions;
