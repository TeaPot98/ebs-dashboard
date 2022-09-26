import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Modal } from "ebs-design";

import api from "api";

import { LoadingSpinner, Button } from "components";
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
          type="primary"
          onClick={() => {
            setUserModalOpen(true);
          }}
        >
          + Add new user
        </Button>
        <Modal
          open={userModalOpen}
          onClose={() => setUserModalOpen(false)}
          title="Add New User"
        >
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
