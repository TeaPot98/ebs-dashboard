import DashboardContainer from "../DashboardContainer";
import SideMenu from "../SideMenu";
import TopBar from "../TopBar";
import "./Layout.scss";

const Layout = () => {
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

export default Layout;
