import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "api/users";
import { LoadingSpinner } from "components";

import { UserTable } from "../components/UserTable";

const Users = () => {
  const { isLoading, isError, data, error } = useQuery(["users"], getAllUsers);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    if (error instanceof Error) {
      return <span>Error: {error.message}</span>;
    }
    return <span>An unknown error occured</span>;
  }

  if (!data) {
    return <span>Data is missing</span>;
  }

  return (
    <>
      <UserTable users={data} />
    </>
  );
};

export default Users;
