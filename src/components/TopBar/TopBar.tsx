import { useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";

import { UserAvatar, Button, Modal } from "components";
import "./TopBar.scss";
import { UserForm } from "features/users/components/UserForm/UserForm";
import { UserContext } from "context/UserContext";

export const TopBar = () => {
  const [userModalOpen, setUserModalOpen] = useState(false);
  const location = useLocation();
  const { user, logOut } = useContext(UserContext);

  const renderPageName = () => {
    switch (location.pathname) {
      case "/":
        return <h2>Dashboard</h2>;
      case "/users":
        return <h2>Users</h2>;
      case "/posts":
        return <h2>Posts</h2>;
      default:
        return <h2>Dashboard</h2>;
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
      {renderPageName()}
      <div className="top-bar__user-container">
        {renderCreateButton()}
        <Modal
          open={userModalOpen}
          onClose={() => setUserModalOpen(false)}
          title="Add new user"
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
            <Button type="danger" onClick={logOut}>
              Log Out
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
