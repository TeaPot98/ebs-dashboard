import classNames from "classnames";
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
        className={`menu-item ${classNames({
          "menu-item--active": route === location.pathname,
        })}`}
      >
        <img alt="" src={icon} />
        {children}
      </li>
    </Link>
  );
};
