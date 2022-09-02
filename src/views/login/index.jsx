import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Input, Button, message, Spin } from "antd";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import "./index.less";
import { login, getUserInfo } from "@/store/actions";
import {LockOutlined, UserAddOutlined} from "@ant-design/icons";

const Login = (props) => {
  const { token, login, getUserInfo } = props;
  const [loading, setLoading] = useState(false);

  const handleLogin = (username, password) => {
    // 登录完成后 发送请求 调用接口获取用户信息
    setLoading(true);
    login(username, password).then((data) => {
        message.success("登录成功");
        handleUserInfo(data.token);
      })
      .catch((error) => {
        setLoading(false);
        message.error(error);
      });
  };

  const handleFailed = e =>{
    console.log('Failed:', e);
  }

  // 获取用户信息
  const handleUserInfo = (token) => {
    getUserInfo(token)
      .then((data) => {})
      .catch((error) => {
        message.error(error);
      });
  };

  const handleSubmit = (values) => {
    // 阻止事件的默认行为
    // event.preventDefault();
    const { username, password } = values;
    handleLogin(username, password);
  };

  if (token) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <DocumentTitle title={"用户登录"}>
      <div className="login-container">
        <Form
            className="content"
            onFinish={handleSubmit}
            onFinishFailed={handleFailed}
        >
          <div className="title">
            <h2>用户登录</h2>
          </div>
          <Spin spinning={loading} tip="登录中...">
            <Form.Item
                label={'用户名'}
                name={'username'}
                rules={[{ required: true, message: 'Please input your 用户名!' }]}
            >
              <Input
                  prefix={
                    <UserAddOutlined />
                  }
                  placeholder="用户名"
                />
            </Form.Item>
            <Form.Item
                label={'密码'}
                name={'password'}
                rules={[{ required: true, message: 'Please input your 密码!' }]}>
                <Input
                  prefix={
                    <LockOutlined style={{ color: "rgba(0,0,0,.25)" }}/>
                  }
                  type="password"
                  placeholder="密码"
                />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
            <Form.Item>
              <span>账号 : admin 密码 : 随便填</span>
              <br />
              <span>账号 : editor 密码 : 随便填</span>
              <br />
              <span>账号 : guest 密码 : 随便填</span>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    </DocumentTitle>
  );
};

const WrapLogin = Login;

export default connect((state) => state.user, { login, getUserInfo })(
  WrapLogin
);
