import "./SideMenu.scss";
import { MenuItem } from "components";

export const SideMenu = () => {
  return (
    <div className="menu">
      <div className="menu__header">
        <img src="https://www.yiiframework.com/image/design/logo/yii3_sign.png" />
        <h1>Metrix</h1>
      </div>
      <ul className="menu__body">
        <MenuItem
          icon="https://cdn-icons-png.flaticon.com/512/2948/2948037.png"
          route="/"
        >
          Dashboard
        </MenuItem>
        <MenuItem
          icon="https://cdn-icons-png.flaticon.com/512/615/615075.png"
          route="/users"
        >
          Users
        </MenuItem>
        <MenuItem
          icon="https://cdn-icons-png.flaticon.com/512/3131/3131446.png"
          route="/posts"
        >
          Posts
        </MenuItem>
      </ul>
    </div>
  );
};
