import "./UserCard.scss";
import UserAvatar from "../../../../components/UserAvatar";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import { useState } from "react";
import ConfirmationModal from "../../../../components/ConfirmationModal";

const UserCard = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [removeModalOpen, setRemoveModalOpen] = useState(false);

  return (
    <div className="user-card">
      <div className="user-card__info">
        <UserAvatar />
        <span>John Doe</span>
      </div>
      <div className="user-card__buttons">
        <Button onClick={() => setEditModalOpen(true)}>Edit</Button>
        <Modal
          open={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          title="Edit user"
        >
          A form for editing user
        </Modal>
        <Button type="danger" onClick={() => setRemoveModalOpen(true)}>
          Remove
        </Button>
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
    </div>
  );
};

export default UserCard;
