import React, { useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";

import { UserAvatar, Button, Modal } from "components";
import "./TopBar.scss";
import UserForm from "features/users/components/UserForm";
import { UserContext } from "context/UserContext";

const TopBar = () => {
  const [userModalOpen, setUserModalOpen] = useState(false);
  const location = useLocation();
  const { user } = useContext(UserContext);

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

  const renderCreateButton = () => {
    switch (location.pathname) {
      case "/":
        return;
      case "/users":
        return (
          <Button onClick={() => setUserModalOpen(true)}>Add new user</Button>
        );
      case "/posts":
        return (
          <Link to="create">
            <Button>Create new post</Button>
          </Link>
        );
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
        {renderCreateButton()}
        <Modal
          open={userModalOpen}
          onClose={() => setUserModalOpen(false)}
          title="Edit user"
          actions={<Button onClick={saveNewUser}>Save</Button>}
        >
          <UserForm />
        </Modal>
        {user && (
          <>
            <UserAvatar name={user.name} surname={user.surname} />
            <span>
              {user.name} {user.surname}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export { TopBar };
