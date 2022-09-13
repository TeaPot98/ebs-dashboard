import { Link } from "react-router-dom";

import "./MenuItem.scss";

const MenuItem = ({
  children,
  route,
}: React.PropsWithChildren<MenuItemProps>) => {
  return (
    <li className="menu-item">
      {/* <Link to={route}>{children}</Link> */}
      {children}
    </li>
  );
};

export default MenuItem;

interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  route: string;
}
