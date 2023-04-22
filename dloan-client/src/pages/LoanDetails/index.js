import React, { useEffect, useState } from 'react';
import { Layout, Space, Spin } from 'antd';
import { footerStyle } from '../LandingPage/styles.js';
import { Content } from 'antd/es/layout/layout.js';
import { contentStyle, headerStyle, headerText } from './styles.js';
import DetailsForm from '../../components/Form/index.js';
import { applicationId } from '../../api/services.js';

const { Header, Footer } = Layout;

const LoanDetails = () => {
  const [appToken, setAppToken] = useState('');

  useEffect(() => {
    applicationId()
      .then((response) => response.json())
      .then((data) => {
        setAppToken(data.appId);
      });
  });

  return appToken ? (
    <Space direction="vertical" style={{ width: '100%', height: '100%' }} size={[0, 64]}>
      <Layout>
        <Header style={headerStyle}>
          <div style={headerText}>Get your business loan now!</div>
        </Header>
        <Content style={contentStyle}>
          <DetailsForm />
        </Content>
        <Footer style={footerStyle}>
          2023 All rights reserved. Development by Evan Edwin Lopez
        </Footer>
      </Layout>
    </Space>
  ) : (
    <Space
      direction="vertical"
      style={{ width: '100%', height: '100%', justifyContent: 'center' }}
      size={[0, 64]}>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Space>
  );
};

export default LoanDetails;
