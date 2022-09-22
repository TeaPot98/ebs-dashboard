import models from "models";

import { UserTableItem } from "../UserTableItem/UserTableItem";
import { Table } from "components";

interface UserTableProps {
  users: models.User[];
}

export const UserTable = ({ users }: UserTableProps) => {
  return (
    <>
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
    </>
  );
};
