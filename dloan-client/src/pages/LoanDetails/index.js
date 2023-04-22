import React from 'react';
import { Layout, Space } from 'antd';
import { contentStyle, footerStyle, headerStyle, headerText } from '../LandingPage/styles.js';
import { Content } from 'antd/es/layout/layout.js';

const { Header, Footer } = Layout;

const LoanDetails = () => {
  return (
    <Space direction="vertical" style={{ width: '100%', height: '100%' }} size={[0, 64]}>
      <Layout>
        <Header style={headerStyle}>
          <div style={headerText}>Get your business loan now!</div>
        </Header>
        <Content style={contentStyle}></Content>
        <Footer style={footerStyle}>
          2023 All rights reserved. Development by Evan Edwin Lopez
        </Footer>
      </Layout>
    </Space>
  );
};

export default LoanDetails;
