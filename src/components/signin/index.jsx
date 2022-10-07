import React from 'react';
import { Card, Button, Form, Input } from 'antd';
import './index.scss';

const Signin = ({ onSignIn }) => {
  return (
    <div className="auth-signin">
      <div className="site-card-border-less-wrapper">
        <Card title="Auth Signin" className="signin-card">
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
            className="signin-form"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>

          <Button key="btn-signin" type="primary" className="signin-btn" onClick={() => onSignIn()}>
            Signin
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Signin;
