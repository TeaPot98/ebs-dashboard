import { TopBar, SideMenu, Container } from "components";
import "./Layout.scss";

export const Layout = () => {
  return (
    <div className="layout">
      <SideMenu />
      <div className="layout__container">
        <TopBar />
        <Container />
      </div>
    </div>
  );
};
