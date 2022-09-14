import { Grid } from "components";
import UserCard from "../components/UserCard";
import { UsersTable } from "../components/UserTable";

const Users = () => {
  return (
    <>
      {/* <Grid columns={1}>
        {Array.from(Array(10).keys()).map((post, i) => (
          <UserCard key={i} />
        ))}
      </Grid> */}
      <UsersTable />
    </>
  );
};

export default Users;
