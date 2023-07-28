import { Button, Layout, Menu, theme } from "antd";
import DropdownMenu from "../UI/DropdownMenu";
import Link from "next/link";
const { Header, Content, Footer } = Layout;

const Home = ({ children }) => {
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
          <Link href="/"><div>Modern Desktop</div></Link>
          <div>
            <DropdownMenu />
          </div>
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
          <Button type="dashed">PC Builder</Button>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
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
