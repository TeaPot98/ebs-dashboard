import { Link } from "react-router-dom";

import "./MenuItem.scss";

const MenuItem = ({
  icon,
  children,
  route,
}: React.PropsWithChildren<MenuItemProps>) => {
  return (
    <li className="menu-item">
      {/* <Link to={route}>{children}</Link> */}
      <img src={icon} />
      {children}
    </li>
  );
};

export default MenuItem;

interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  icon?: string;
  route: string;
}
