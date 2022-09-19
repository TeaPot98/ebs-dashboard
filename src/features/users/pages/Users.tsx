import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "api/users";
import { LoadingSpinner, Button, Modal } from "components";
import { UserForm } from "../components/UserForm/UserForm";

import { UserTable } from "../components/UserTable/UserTable";
import { ContainerHeader } from "components/Container/ContainerHeader/ContainerHeader";

// interface UsersContextProps {
//   refetch: () => void;
// }

export const UsersContext = React.createContext({
  refetch: () => {},
});

export const Users = () => {
  const { isLoading, isError, data, error, refetch } = useQuery(
    ["users"],
    getAllUsers
  );
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
        <Modal open={userModalOpen} onClose={() => setUserModalOpen(false)}>
          <Modal.Header>
            <Modal.Title>Add new user</Modal.Title>
            <Button onClick={() => setUserModalOpen(false)}>Close</Button>
          </Modal.Header>
          <Modal.Content>
            <UserForm
              onSubmit={() => {
                refetch();
                setUserModalOpen(false);
              }}
            />
          </Modal.Content>
        </Modal>
      </ContainerHeader>
      <UsersContext.Provider value={{ refetch: refetch }}>
        <UserTable users={data} />
      </UsersContext.Provider>
    </>
  );
};
