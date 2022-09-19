import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "api/users";
import { LoadingSpinner, Button, Modal } from "components";
import { UserForm } from "../components/UserForm/UserForm";

import { UserTable } from "../components/UserTable/UserTable";
import { ContainerHeader } from "components/Container/ContainerHeader/ContainerHeader";

export const Users = () => {
  const { isLoading, isError, data, error } = useQuery(["users"], getAllUsers);
  const [userModalOpen, setUserModalOpen] = useState(false);

  const saveNewUser = () => {
    console.log("New user saved");
    setUserModalOpen(false);
  };

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
      <ContainerHeader>
        <h2>Users</h2>
        <Button onClick={() => setUserModalOpen(true)}>Add new user</Button>
        <Modal
          open={userModalOpen}
          onClose={() => setUserModalOpen(false)}
          title="Add new user"
          actions={<Button onClick={saveNewUser}>Save</Button>}
        >
          <UserForm />
        </Modal>
      </ContainerHeader>
      <UserTable users={data} />
    </>
  );
};
