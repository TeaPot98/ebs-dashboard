import { useState } from "react";
import { Button, Modal, Table } from "components";
import { User } from "types";
import { UserForm } from "../UserForm/UserForm";
import { UserTableItem } from "../UserTableItem/UserTableItem";

interface UserTableProps {
  users: User[];
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
