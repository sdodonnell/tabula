import { User, UserParam } from '@/types/user';

type UserListProps = {
  users: User[];
  params: UserParam[];
};

export default function UserList({ users, params }: UserListProps) {
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
        {users.map(user => (
          <tr
            key={`${user.firstName}_${user.lastName}`}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            {params.map(param => (
              <td key={`${user.firstName}_${param}`} className="px-6 py-4">
                {user[param]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
