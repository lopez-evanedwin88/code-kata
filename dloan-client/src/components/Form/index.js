import { Card, Space, Button, Form, Input, DatePicker, Select } from 'antd';
import React from 'react';
const { Option } = Select;

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const onAccountingChange = (value) => {
  switch (value) {
    case 'xero':
      //set xero as accounting provider
      break;
    case 'myob':
      //set myob as accounting provider
      break;
    default:
  }
};

const DetailsForm = () => {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex', width: '60%' }}>
      <Card title="Start by telling us your business:" size="small">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 700 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item label="Name">
            <Input />
          </Form.Item>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
          <Form.Item label="Contact No.">
            <Input />
          </Form.Item>
          <Form.Item label="Business Name">
            <Input />
          </Form.Item>
          <Form.Item label="Business Address">
            <Input />
          </Form.Item>
          <Form.Item label="Year Established">
            <DatePicker picker="year" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Loan Amount">
            <Input />
          </Form.Item>
          <Form.Item label="Accounting Provider">
            <Select
              placeholder="Select a Accounting Provider"
              onChange={onAccountingChange}
              allowClear>
              <Option value="xero">Xero</Option>
              <Option value="myob">MYOB</Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  );
};

export default DetailsForm;
