import { useContext } from "react";

import { UserContext } from "context/UserContext";

import { UserAvatar, Button } from "components";
import "./TopBar.scss";

export const TopBar = () => {
  const { user, logOut } = useContext(UserContext);

  return (
    <div className="top-bar">
      <div id="hamburger-container"></div>
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
