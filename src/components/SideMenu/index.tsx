import "./SideMenu.scss";
import MenuItem from "../MenuItem";

const SideMenu = () => {
  return (
    <div className="menu">
      <div className="menu__header">
        <img src="https://www.yiiframework.com/image/design/logo/yii3_sign.png" />
        <h1>Metrix</h1>
      </div>
      <ul className="menu__body">
        <MenuItem route="/">Dashboard</MenuItem>
        <MenuItem route="/users">Users</MenuItem>
        <MenuItem route="/posts">Posts</MenuItem>
      </ul>
    </div>
  );
};

export default SideMenu;
