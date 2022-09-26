import { useState, useContext } from "react";
import classNames from "classnames";

import { Button } from "components";
import { MenuItem } from "./MenuItem/MenuItem";
import { HamburgerButton } from "components/HamburgerButton/HamburgerButton";

import "./SideMenu.scss";
import { UserContext } from "context/UserContext";
import { Roles } from "utils";
import { Icon } from "ebs-design";

export const SideMenu = () => {
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  return (
    <div className={`menu ${classNames({ "menu--open": open })}`}>
      <HamburgerButton onClick={() => setOpen(!open)} />
      <div className="menu__header">
        <div className="menu__logo">
          <img
            alt=""
            src="https://www.yiiframework.com/image/design/logo/yii3_sign.png"
          />
          <h1>Metrix</h1>
        </div>
        <Button id="close-menu-btn" color="icon" onClick={() => setOpen(false)}>
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/130/130882.png"
          />
        </Button>
      </div>
      <ul className="menu__body">
        <MenuItem
          // icon="https://cdn-icons-png.flaticon.com/512/2948/2948037.png"
          route="/dashboard"
          onClick={() => setOpen(false)}
        >
          <Icon
            // className=".menu-item__icon"
            type="apps"
            style={{ width: "20px", height: "20px" }}
          />
          Dashboard
        </MenuItem>
        {user!.role === Roles.Administrator && (
          <MenuItem
            // icon="https://cdn-icons-png.flaticon.com/512/615/615075.png"
            route="/users"
            onClick={() => setOpen(false)}
          >
            <Icon
              // className=".menu-item__icon"
              type="users"
              style={{ width: "20px", height: "20px" }}
            />
            Users
          </MenuItem>
        )}
        <MenuItem
          // icon="https://cdn-icons-png.flaticon.com/512/3131/3131446.png"
          route="/posts"
          onClick={() => setOpen(false)}
        >
          <Icon
            // className=".menu-item__icon"
            type="edit"
            style={{ width: "20px", height: "20px" }}
          />
          Posts
        </MenuItem>
      </ul>
    </div>
  );
};
