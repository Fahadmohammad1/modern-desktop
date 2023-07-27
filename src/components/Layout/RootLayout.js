import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import DropdownMenu from '../DropdownMenu';
const { Header, Content, Footer } = Layout;
const RootLayout = ({children}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <Content
        style={{
          padding: '0 40px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '10px 0',
            width : "100%",
            padding : "20px",
            boxShadow : "1px 2px 9px #F4AAB9"
          }}
        >
          <Breadcrumb.Item><DropdownMenu/></Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            minHeight : "100vh"
          }}
        >
         {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default RootLayout;
