import Table from "components/Table";
import UserTableItem from "../UserTableItem";

const UserTable = () => {
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
        {Array.from(Array(10).keys()).map((user) => (
          <UserTableItem key={user} user={user} />
        ))}
      </tbody>
    </Table>
  );
};

export { UserTable };
