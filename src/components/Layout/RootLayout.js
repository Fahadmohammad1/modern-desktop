import { Button, Layout, Menu, theme } from "antd";
import DropdownMenu from "../UI/DropdownMenu";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
import { useSession, signOut } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";

const Home = ({ children }) => {
  const { data: session } = useSession();
  const [user, loading] = useAuthState(auth);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <Layout className="layout bg-white">
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
            <div className="decoration-transparent lg:text-2xl text-base md:text-lg font-bold font-serif">Modern Desktop</div>
          </Link>
          <div>
            <DropdownMenu />
          </div>
        </div>
        
        <Menu  mode="horizontal" className="sm:flex justify-center">
          {(!session?.user | !user?.email) ? (
            <Button className="mr-3 font-bold" type="dashed">
              <Link href="/login">Login</Link>
            </Button>
          ) : (
            <Button onClick={() => signOut()} className="mr-3 font-bold" type="dashed">
              LogOut
            </Button>
          )}
          <Button className="font-bold" type="dashed">
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
          className="site-layout-content bg-white"
          style={{
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        className="text-center my-5"
      >
        Copyright ©2023 Created by Modern Desktop Bangladesh
      </Footer>
    </Layout>
  );
};
export default Home;
