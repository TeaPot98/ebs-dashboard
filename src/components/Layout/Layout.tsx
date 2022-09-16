import { TopBar, SideMenu, DashboardContainer } from "components";
import "./Layout.scss";

export const Layout = () => {
  return (
    <div className="layout">
      <SideMenu />
      <div className="layout__container">
        <TopBar />
        <DashboardContainer />
      </div>
    </div>
  );
};
