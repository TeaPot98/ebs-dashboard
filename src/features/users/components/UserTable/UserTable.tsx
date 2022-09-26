import models from "models";

import { Table } from "ebs-design";
import { UserTableButtons } from "./UserTableButtons";
import { User } from "models/user";

interface UserTableProps {
  users: models.User[];
}

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Surname",
    dataIndex: "surname",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
  },
  {
    title: "Role",
    dataIndex: "role",
  },
  {
    title: "Actions",
    render: (user: User) => <UserTableButtons user={user} />,
  },
];

export const UserTable = ({ users }: UserTableProps) => {
  return (
    <>
      <Table data={users} columns={columns} />
    </>
  );
};
