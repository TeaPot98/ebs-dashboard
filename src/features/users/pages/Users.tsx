import Table from "../../../components/Table";
import NewUserButton from "../components/NewUserButton";
import UserCard from "../components/UserCard";

const Users = () => {
  return (
    <>
      <NewUserButton />
      <Table columns={1}>
        {Array.from(Array(10).keys()).map((post, i) => (
          <UserCard key={i} />
        ))}
      </Table>
    </>
  );
};

export default Users;
