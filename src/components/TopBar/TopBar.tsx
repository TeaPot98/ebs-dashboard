import { useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";

import { UserContext } from "context/UserContext";

import { UserAvatar, Button, Modal } from "components";
import "./TopBar.scss";
import { UserForm } from "features/users/components/UserForm/UserForm";

export const TopBar = () => {
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
