import { Link, useLocation } from "react-router-dom";

import "./MenuItem.scss";

interface MenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  icon?: string;
  route: string;
}

const MenuItem = ({
  icon,
  children,
  route,
}: React.PropsWithChildren<MenuItemProps>) => {
  const location = useLocation();

  return (
    <Link to={route}>
      <li
        className={`menu-item ${
          route === location.pathname && "menu-item--active"
        }`}
      >
        <img src={icon} />
        {children}
      </li>
    </Link>
  );
};

export { MenuItem };
