import { Grid } from "components";
import UserCard from "../components/UserCard";
import { UserTable } from "../components/UserTable";

const Users = () => {
  return (
    <>
      {/* <Grid columns={1}>
        {Array.from(Array(10).keys()).map((post, i) => (
          <UserCard key={i} />
        ))}
      </Grid> */}
      <UserTable />
    </>
  );
};

export default Users;
