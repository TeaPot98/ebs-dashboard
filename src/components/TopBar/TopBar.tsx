import { useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";

import { UserAvatar, Button, Modal } from "components";
import "./TopBar.scss";
import { UserForm } from "features/users/components/UserForm/UserForm";
import { UserContext } from "context/UserContext";

export const TopBar = () => {
  const location = useLocation();
  const { user, logOut } = useContext(UserContext);

  return (
    <div className="top-bar">
      <div className="top-bar__user-container">
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
