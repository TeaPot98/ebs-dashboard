import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Posts from "../../features/posts/pages/Posts";
import Users from "../../features/users/pages/Users";

import "./DashboardContainer.scss";

const DashboardContainer = () => {
  const location = useLocation();
  console.log(location.pathname);

  const renderContent = () => {
    switch (location.pathname) {
      case "/":
        return <div>Dashboard</div>;
      case "/users":
        return <Users />;
      case "/posts":
        return <Posts />;
      default:
        return <div>No such route</div>;
    }
  };

  return <div className="container">{renderContent()}</div>;
};

export { DashboardContainer };
