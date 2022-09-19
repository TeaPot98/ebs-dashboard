import "../UserCard/UserCard.scss";
import React, { useState, useContext } from "react";

import { Button, ConfirmationModal, Modal } from "components";
import { UserForm } from "../UserForm/UserForm";
import { User } from "types";
import { UsersContext } from "features/users/pages/Users";
import { removeUser } from "api/users";
import { UserContext } from "context/UserContext";

interface UserTableItemProps {
  user: User;
}

export const UserTableItem = ({ user }: UserTableItemProps) => {
  const loggedUser = useContext(UserContext);
  const { refetch } = useContext(UsersContext);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [removeModalOpen, setRemoveModalOpen] = useState(false);

  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.email}</td>
      <td>{user.gender}</td>
      <td>{user.role}</td>
      <td>
        <div className="user-card__buttons">
          <Button onClick={() => setEditModalOpen(true)}>Edit</Button>
          {user.id !== loggedUser.user?.id && (
            <Button type="danger" onClick={() => setRemoveModalOpen(true)}>
              Remove
            </Button>
          )}
          <Modal open={editModalOpen} onClose={() => setEditModalOpen(false)}>
            <Modal.Header>
              <Modal.Title>Edit user</Modal.Title>
              <Button onClick={() => setEditModalOpen(false)}>Close</Button>
            </Modal.Header>
            <Modal.Content>
              <UserForm
                user={user}
                onSubmit={() => {
                  refetch();
                  setEditModalOpen(false);
                }}
              />
            </Modal.Content>
          </Modal>
          <ConfirmationModal
            title="Remove user"
            open={removeModalOpen}
            onClose={() => setRemoveModalOpen(false)}
            onAccept={() => {
              console.log("User removed");
              removeUser(user.id.toString());
              refetch();
              setRemoveModalOpen(false);
            }}
          >
            Are your sure you want to remove
            <b>
              {" "}
              "{user.name} {user.surname}"{" "}
            </b>
            from users?
          </ConfirmationModal>
        </div>
      </td>
    </tr>
  );
};
