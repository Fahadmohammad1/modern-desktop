import { Button, Layout, Menu, theme } from "antd";
import DropdownMenu from "../UI/DropdownMenu";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
import { useSession, signOut } from "next-auth/react";

const Home = ({ children }) => {
  const { data: session } = useSession();

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header className="lg:flex bg-white justify-between items-center">
        <div
          className="demo-logo"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Link href="/">
            <div>Modern Desktop</div>
          </Link>
          <div>
            <DropdownMenu />
          </div>
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
          {!session?.user ? (
            <Button className="mr-3" type="dashed">
              <Link href="/login">Login</Link>
            </Button>
          ) : (
            <Button onClick={() => signOut()} className="mr-3" type="dashed">
              LogOut
            </Button>
          )}
          <Button type="dashed">
            <Link href="/pc-builder">PC Builder</Link>
          </Button>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 0px",
        }}
      >
        <div
          className="site-layout-content bg-base-100"
          style={{
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Copyright ©2023 Created by Modern Desktop Bangladesh
      </Footer>
    </Layout>
  );
};
export default Home;
