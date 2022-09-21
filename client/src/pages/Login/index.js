import { Button, Form, Input } from 'antd';
import { login } from 'apis';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { getToken, setToken } from 'utils/Storage';
import { useMutation } from 'react-query';

export default function Login() {
  const navigate = useNavigate();
  const { mutate, status } = useMutation(
    ({ email, password }) => login(email, password),
    {
      onSuccess: ({ data }) => {
        setToken(data.accessToken);
        navigate('/dashboard');
      },
      onError: (error) => {
        alert(error.response?.data);
      },
    }
  );

  const handleLogin = ({ email, password }) => {
    mutate({ email, password });
  };

  return !getToken() ? (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      onFinish={handleLogin}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Email을 입력해주세요.',
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
            message: '비밀번호를 입력해주세요.',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          로그인
        </Button>
      </Form.Item>
    </Form>
  ) : (
    <Navigate replace to={'/dashboard'} />
  );
}
