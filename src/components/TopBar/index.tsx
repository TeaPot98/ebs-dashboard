import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { UserAvatar, Button, Modal } from "components";
import "./TopBar.scss";

const TopBar = () => {
  const [userModalOpen, setUserModalOpen] = useState(false);
  const location = useLocation();

  const renderPageName = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";
      case "/users":
        return "Users";
      case "/posts":
        return "Posts";
      default:
        return "Dashboard";
    }
  };

  const saveNewUser = () => {
    console.log("New user saved");
    setUserModalOpen(false);
  };

  return (
    <div className="top-bar">
      <h2>{renderPageName()}</h2>
      <div className="top-bar__user-container">
        {location.pathname === "/users" && (
          <Button onClick={() => setUserModalOpen(true)}>Add new user</Button>
        )}
        <Modal
          open={userModalOpen}
          onClose={() => setUserModalOpen(false)}
          title="Edit user"
          actions={<Button onClick={saveNewUser}>Save</Button>}
        >
          A form for editing user
        </Modal>
        <UserAvatar />
        <span>John Doe</span>
      </div>
    </div>
  );
};

export { TopBar };
