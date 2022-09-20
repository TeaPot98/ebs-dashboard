import { useState } from "react";

import { MenuItem, Button } from "components";
import { HamburgerButton } from "components/HamburgerButton/HamburgerButton";

import "./SideMenu.scss";

export const SideMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`menu ${open && "menu--open"}`}>
      <HamburgerButton onClick={() => setOpen(!open)} />
      <div className="menu__header">
        <div className="menu__logo">
          <img src="https://www.yiiframework.com/image/design/logo/yii3_sign.png" />
          <h1>Metrix</h1>
        </div>
        <Button className="btn--back" onClick={() => setOpen(false)}>
          <img src="https://cdn-icons-png.flaticon.com/512/130/130882.png" />
        </Button>
      </div>
      <ul className="menu__body">
        <MenuItem
          icon="https://cdn-icons-png.flaticon.com/512/2948/2948037.png"
          route="/dashboard"
          onClick={() => setOpen(false)}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          icon="https://cdn-icons-png.flaticon.com/512/615/615075.png"
          route="/users"
          onClick={() => setOpen(false)}
        >
          Users
        </MenuItem>
        <MenuItem
          icon="https://cdn-icons-png.flaticon.com/512/3131/3131446.png"
          route="/posts"
          onClick={() => setOpen(false)}
        >
          Posts
        </MenuItem>
      </ul>
    </div>
  );
};
