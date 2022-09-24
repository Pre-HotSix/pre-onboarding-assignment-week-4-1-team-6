import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'store/modules/login';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const logindatas = useSelector((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = (values) => {
    console.log('Received values of form: ', values);
    const form = { email: values.username, password: values.password };
    dispatch(loginThunk(form));
  };

  useEffect(() => {
    console.log(logindatas);
    if (logindatas.data) {
      localStorage.setItem('token', logindatas.data.accessToken);
      navigate('/');
    }
  }, [logindatas]);
  return (
    <div className="flex flex-col align-content-center h-screen rounded-[12px]">
      <div className="w-96 m-auto bg-slate-100 ">
        <header className="w-full bg-slate-400 text-center text-slate-50 text-xl p-2">
          Login
        </header>
        <Form
          name="normal_login"
          className="p-4 w-full flex flex-col"
          initialValues={{
            remember: true,
          }}
          onFinish={handleLogin}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="w-full" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="w-full" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button className="w-full" type="primary-100" htmlType="submit">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
