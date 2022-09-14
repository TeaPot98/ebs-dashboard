import { useLocation } from "react-router-dom";
import UserAvatar from "../UserAvatar";
import "./TopBar.scss";

const TopBar = () => {
  const location = useLocation();

  const renderPageName = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";
      case "/users":
        return "Users";
      case "/posts":
        return "Posts";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="top-bar">
      <h2>{renderPageName()}</h2>
      <div className="top-bar__user-container">
        <UserAvatar />
        <span>John Doe</span>
      </div>
    </div>
  );
};

export default TopBar;
