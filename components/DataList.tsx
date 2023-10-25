import { Node } from '@/types';
import Link from 'next/link';
import ListActions from './ListActions';
import { EntityType } from '@/lib/entity';
import startCase from 'lodash/startCase';

type DataListProps<T> = {
  data: T[];
  entityType: EntityType;
  params: Array<string & keyof T>;
};

const stringify = (param: any): string => {
  if (param instanceof Date) {
    return param.toDateString();
  } else {
    return param;
  }
};

export default function DataList<T extends Node>({
  data = [],
  entityType,
  params
}: DataListProps<T>) {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {params.map(param => (
            <th key={param} className="px-6 py-3">
              {startCase(param)}
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
                <Link href={`/${entityType}/${node.id}`}>
                  {stringify(node[param])}
                </Link>
              </td>
            ))}
            <td>
              <ListActions id={node.id} entityType={entityType} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
