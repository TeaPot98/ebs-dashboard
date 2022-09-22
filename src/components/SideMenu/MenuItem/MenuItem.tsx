import { Link, useLocation } from "react-router-dom";

import "./MenuItem.scss";

interface MenuItemProps {
  icon?: string;
  onClick?: () => void;
  route: string;
}

export const MenuItem = ({
  icon,
  children,
  route,
  onClick,
}: MenuItemProps & JSX.IntrinsicElements["li"]) => {
  const location = useLocation();

  return (
    <Link to={route} onClick={onClick}>
      <li
        className={`menu-item ${
          route === location.pathname && "menu-item--active"
        }`}
      >
        <img alt="" src={icon} />
        {children}
      </li>
    </Link>
  );
};
