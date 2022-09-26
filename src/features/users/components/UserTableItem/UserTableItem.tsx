import { useState, useContext } from "react";
import { Icon, Modal, Space } from "ebs-design";

import models from "models";
import { UsersContext } from "features/users/pages/Users";
import api from "api";
import { UserContext } from "context/UserContext";

import { Button, ConfirmationModal } from "components";
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
            {/* <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
            /> */}
            <Icon type="edit" style={{ width: "16px", height: "16px" }} />
          </Button>
          {user.id !== loggedUser.user?.id && (
            <Button color="danger" onClick={() => setRemoveModalOpen(true)}>
              {/* <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/542/542724.png"
              /> */}
              <Icon type="error" style={{ width: "16px", height: "16px" }} />
            </Button>
          )}
          <Modal
            open={editModalOpen}
            // defaultOpen={true}
            title="Edit User"
            onClose={() => setEditModalOpen(false)}
          >
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
          <Modal
            title="Remove user"
            open={removeModalOpen}
            onClose={() => setRemoveModalOpen(false)}
          >
            <Modal.Content>
              Are your sure you want to remove
              <b>
                {" "}
                "{user.name} {user.surname}"{" "}
              </b>
              from users?
            </Modal.Content>
            <Modal.Footer>
              <Space justify="space-between">
                <Button onClick={() => setRemoveModalOpen(false)}>
                  Cancel
                </Button>
                <Button
                  color="danger"
                  onClick={async () => {
                    console.log("User removed");
                    await api.users.remove(user.id.toString());
                    refetch();
                    setRemoveModalOpen(false);
                  }}
                >
                  Accept
                </Button>
              </Space>
            </Modal.Footer>
          </Modal>
        </div>
      </td>
    </tr>
  );
};
