import React, {useEffect, useState} from "react";
import { Redirect } from "react-router-dom";
import {Form, Input, Button, message, Spin, Tabs} from "antd";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import "./index.less";
import { login, getUserInfo } from "@/store/actions";
import {LockOutlined, UserAddOutlined} from "@ant-design/icons";
const {TabPane} =  Tabs

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
    const { username, password } = values;
    handleLogin(username, password);
  };

  if (token) {
    return <Redirect to="/dashboard" />;
  }
  return (
      <div className="login-container">
        <img className="img" src={require('@/assets/images/login-overlay.svg')}/>
        <Tabs defaultActiveKey="1" className="content">
          <TabPane tab="账号密码登录" key="1">
            <Form
                onFinish={handleSubmit}
                onFinishFailed={handleFailed}
            >
              <Spin spinning={loading} tip="登录中...">
                <Form.Item
                    className="form"
                    name={'username'}
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                  <Input
                      prefix={
                        <UserAddOutlined />
                      }
                      placeholder="请输入用户名"
                  />
                </Form.Item>
                <Form.Item
                    name={'password'}
                    rules={[{ required: true, message: '请输入密码!' }]}>
                  <Input
                      prefix={
                        <LockOutlined style={{ color: "rgba(0,0,0,.25)" }}/>
                      }
                      type="password"
                      placeholder="请输入密码"
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
                  <span>账号 : admin/editor/guest 密码 : 随便填</span>
                </Form.Item>
              </Spin>
            </Form>
          </TabPane>
        </Tabs>
      </div>
  );
};

export default connect((state) => state.user, { login, getUserInfo })(
  Login
);
