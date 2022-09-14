import "../UserCard/UserCard.scss";
import React, { useState } from "react";

import { Button, ConfirmationModal, Modal } from "components";
import UserForm from "../UserForm";

const UserTableItem = ({ user }: { user: number }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [removeModalOpen, setRemoveModalOpen] = useState(false);

  return (
    <tr key={user}>
      <td>{user}</td>
      <td>John</td>
      <td>Doe</td>
      <td>example@gmail.com</td>
      <td>Male</td>
      <td>Administrator</td>
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
            <UserForm />
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
            Are your sure you want to remove this user?
          </ConfirmationModal>
        </div>
      </td>
    </tr>
  );
};

export default UserTableItem;
