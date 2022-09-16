import { Table } from "components";
import { User } from "types";
import UserTableItem from "../UserTableItem";

interface UserTableProps {
  users: User[];
}

const UserTable = ({ users }: UserTableProps) => {
  return (
    <Table cellSpacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserTableItem key={user.id} user={user} />
        ))}
      </tbody>
    </Table>
  );
};

export { UserTable };
