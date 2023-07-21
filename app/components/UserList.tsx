import { User, UserParam } from '@/types/user';

type UserListProps = {
  users: User[];
  params: UserParam[];
};

export default function UserList({
  users,
  params
}: UserListProps) {
  return (
    <table className="table">
      <thead>
        <tr>
          {params.map(param => (
            <th key={param}>{param}</th>
          ))}
        </tr>
        {users.map(user => (
          <tr key={user.firstName}>
            {params.map(param => (
              <td key={`${user.firstName}_${param}`}>{user[param]}</td>
            ))}
          </tr>
        ))}
      </thead>
    </table>
  );
}
