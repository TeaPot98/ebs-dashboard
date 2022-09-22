import { useState, useContext } from "react";

import models from "models";
import { UsersContext } from "features/users/pages/Users";
import api from "api";
import { UserContext } from "context/UserContext";

import { Button, ConfirmationModal, Modal } from "components";
import { UserForm } from "../UserForm/UserForm";
import "../UserCard/UserCard.scss";

interface UserTableItemProps {
  user: models.User;
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
          <Button onClick={() => setEditModalOpen(true)}>
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
            />
          </Button>
          {user.id !== loggedUser.user?.id && (
            <Button type="danger" onClick={() => setRemoveModalOpen(true)}>
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/542/542724.png"
              />
            </Button>
          )}
          {editModalOpen && (
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
          )}
          <ConfirmationModal
            title="Remove user"
            open={removeModalOpen}
            onClose={() => setRemoveModalOpen(false)}
            onAccept={async () => {
              console.log("User removed");
              await api.users.remove(user.id.toString());
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
