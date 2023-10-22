'use client';

import { EntityType, deleteEntity } from '@/lib/entity';
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
      deleteEntity({ id }, entityType, pathname);
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
