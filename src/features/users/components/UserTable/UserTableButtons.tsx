import { useContext, useState } from "react";

import { Icon, Modal, Space } from "ebs-design";

import api from "api";
import { UsersContext } from "features/users/pages/Users";
import { UserContext } from "context/UserContext";

import { UserForm } from "../UserForm/UserForm";
import { User } from "models/user";
import { Button } from "components";

interface UserTableButtonsProps {
  user: User;
}

export const UserTableButtons = ({ user }: UserTableButtonsProps) => {
  const loggedUser = useContext(UserContext);
  const { refetch } = useContext(UsersContext);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [removeModalOpen, setRemoveModalOpen] = useState(false);

  return (
    <div className="user-card__buttons">
      <Space size="small" justify="center">
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
      </Space>
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
            <Button onClick={() => setRemoveModalOpen(false)}>Cancel</Button>
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
  );
};
