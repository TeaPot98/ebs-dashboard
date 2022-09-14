import React, { useState } from "react";

import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import "./NewUserButton.scss";

const NewUserButton = () => {
  const [newUserOpen, setNewUserOpen] = useState(false);

  const openForm = () => {
    setNewUserOpen(true);
  };

  const saveNewUser = () => {
    console.log("New user saved!");
    setNewUserOpen(false);
  };

  return (
    <>
      <button onClick={openForm} className="new-user-button">
        + Add New User
      </button>
      <Modal
        title="Add new user"
        open={newUserOpen}
        onClose={() => setNewUserOpen(false)}
        actions={<Button onClick={saveNewUser}>Save</Button>}
      >
        Adding user form
      </Modal>
    </>
  );
};

export default NewUserButton;
