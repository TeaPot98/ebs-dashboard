import "../UserCard/UserCard.scss";
import React, { useState } from "react";

import { Button, ConfirmationModal, Modal } from "components";
import { UserForm } from "../UserForm/UserForm";
import { User } from "types";

export const UserTableItem = ({ user }: { user: User }) => {
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
          <Button type="danger" onClick={() => setRemoveModalOpen(true)}>
            Remove
          </Button>
          <Modal
            open={editModalOpen}
            onClose={() => setEditModalOpen(false)}
            title="Edit user"
            actions={
              <Button
                onClick={() => {
                  console.log("User saved!");
                  setEditModalOpen(false);
                }}
              >
                Save
              </Button>
            }
          >
            <UserForm user={user} />
          </Modal>
          <ConfirmationModal
            title="Remove user"
            open={removeModalOpen}
            onClose={() => setRemoveModalOpen(false)}
            onAccept={() => {
              console.log("User removed");
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
