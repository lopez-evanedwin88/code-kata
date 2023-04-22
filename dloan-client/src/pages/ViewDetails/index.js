import { Button, Layout, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { contentStyle, headerStyle, headerText } from '../LoanDetails/styles';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { footerStyle } from '../LandingPage/styles.js';
import { useLocation } from 'react-router-dom';
import { getBalanceSheet, getDecision } from '../../api/services';

const columns = [
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year'
  },
  {
    title: 'Month',
    dataIndex: 'month',
    key: 'month'
  },
  {
    title: 'Profile Or Loss',
    dataIndex: 'profitOrLoss',
    key: 'profitOrLoss'
  },
  {
    title: 'Assets Value',
    key: 'assetsValue',
    dataIndex: 'assetsValue'
  }
];

const ViewDetails = () => {
  const { state } = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      getBalanceSheet(state.data)
        .then((response) => response.json())
        .then((data) => {
          setData(data.sheet);
        });
    }
  }, []);

  return (
    <Space direction="vertical" style={{ width: '100%', height: '100%' }} size={[0, 64]}>
      <Layout>
        <Header style={headerStyle}>
          <div style={headerText}>Review Account</div>
        </Header>
        <Content style={contentStyle}>
          <div style={{ flexDirection: 'row' }}>
            <div>
              <Table columns={columns} dataSource={data} />
            </div>
            <div>
              <Button
                block
                onClick={() => {
                  const mapDecisionData = {
                    ...state.data,
                    sheet: data
                  };
                  getDecision(mapDecisionData)
                    .then((response) => response.data)
                    .then((data) => console.log('wews', data));
                }}>
                Submit Application
              </Button>
            </div>
          </div>
        </Content>
        <Footer style={footerStyle}>
          2023 All rights reserved. Development by Evan Edwin Lopez
        </Footer>
      </Layout>
    </Space>
  );
};

export default ViewDetails;
