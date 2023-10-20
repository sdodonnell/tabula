import { Node } from '@/types';
import Link from 'next/link';

type DataListProps<T> = {
  data: T[];
  params: Array<string & keyof T>;
};

export default function DataList<T extends Node>({
  data,
  params
}: DataListProps<T>) {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {params.map(param => (
            <th key={param} className="px-6 py-3">
              {param}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(node => (
          <tr
            key={node.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            {params.map(param => (
              <td key={`${node.id}_${param}`} className="px-6 py-4">
                <Link href={`/user/${node.id}`}>{node[param]}</Link>
              </td>
            ))}
            <td>
              <Link href={`/user/${node.id}/edit`}>Edit</Link>
              {' | '}
              <Link href={`/user/${node.id}/delete`}>Delete</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
