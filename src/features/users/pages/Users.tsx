import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import api from "api";

import { LoadingSpinner, Button, Modal } from "components";
import { UserForm } from "../components/UserForm/UserForm";
import { UserTable } from "../components/UserTable/UserTable";
import { ContainerHeader } from "components/Container/ContainerHeader";

export const UsersContext = React.createContext({
  refetch: () => {},
});

export const Users = () => {
  const { isLoading, isError, data, error, refetch } = useQuery(
    ["users"],
    api.users.getAll
  );
  const [userModalOpen, setUserModalOpen] = useState(false);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    throw new Error(error instanceof Error ? error.message : "Unkown error ");
  }

  return (
    <>
      <ContainerHeader>
        <h2>Users</h2>
        <Button
          onClick={() => {
            setUserModalOpen(true);
          }}
        >
          + Add new user
        </Button>
        {userModalOpen && (
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
        )}
      </ContainerHeader>
      <UsersContext.Provider value={{ refetch: refetch }}>
        <UserTable users={data} />
      </UsersContext.Provider>
    </>
  );
};
