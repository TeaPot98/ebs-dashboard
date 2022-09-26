import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Icon, Layout, Sidebar, AvatarInline } from "ebs-design";

import { UserContext } from "context/UserContext";
// import { TopBar, SideMenu, Container } from "components";
import "./Layout.scss";
import { UserAvatar } from "components/UserAvatar";
import { Button, Container } from "components";

const MyLayout = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Layout>
      <Layout.Topbar>
        <Layout.Topbar.Toggler />
        <Layout.Topbar.Title>Metrix</Layout.Topbar.Title>
        <Layout.Topbar.RightSide>
          <AvatarInline
            alt={`${user!.name} ${user!.surname}`}
            description={`${user!.role}`}
            status="active"
            type="regular"
            size="small"
          />
          <Button type="primary" color="danger" onClick={() => {}}>
            {/* <Icon type="edit" /> */}
            Log Out
          </Button>
        </Layout.Topbar.RightSide>
      </Layout.Topbar>
      <Sidebar>
        {/* <Sidebar.TopMenu> */}
        <Sidebar.Item
          onClick={() => navigate("/dashboard")}
          prefix={
            <Icon
              // className=".menu-item__icon"
              type="apps"
              style={{ width: "20px", height: "20px" }}
            />
          }
          text="Dashboard"
        />
        <Sidebar.Item
          onClick={() => navigate("/users")}
          prefix={
            <Icon
              // className=".menu-item__icon"
              type="users"
              style={{ width: "20px", height: "20px" }}
            />
          }
          text="Users"
        />
        <Sidebar.Item
          onClick={() => navigate("/posts")}
          prefix={
            <Icon
              // className=".menu-item__icon"
              type="edit"
              style={{ width: "20px", height: "20px" }}
            />
          }
          text="Posts"
        />
      </Sidebar>
      <Layout.Content style={{ height: "100%", paddingBottom: "0px" }}>
        <Container />
      </Layout.Content>
    </Layout>
  );
};

export { MyLayout as Layout };
