import UserTableItem from "../UserTableItem";
import "./UserTable.scss";

const UsersTable = () => {
  return (
    <table cellSpacing="0" className="table">
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
          <UserTableItem user={user} />
        ))}
      </tbody>
    </table>
  );
};

export { UsersTable };
