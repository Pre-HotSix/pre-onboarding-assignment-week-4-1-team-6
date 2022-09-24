import { ChangeEvent, useState } from 'react';
import { message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { storage } from 'commons';
import { Input01 } from 'components';
import './style.css';
import { LoginApi } from 'apis';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const navigate = useNavigate();

  const onChangeUserEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (event.target.value !== '') {
      setErrorEmail('');
    }

    const CheckEmail = /^\w[0-9a-zA-Z]+@\w[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    if (!CheckEmail.test(event.target.value)) {
      setErrorEmail('이메일 형식에 올바르지 않습니다');
    }
  };

  const onChangeUserPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (event.target.value !== '') {
      setErrorPassword('');
    }

    const CheckPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,10}$/;
    if (!CheckPassword.test(event.target.value)) {
      setErrorPassword('8자 이내의 영문, 숫자로 입력하세요');
    }
  };

  const onClickLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (email !== '' && password !== '') {
      event.preventDefault();

      const result = await LoginApi({ email, password });
      console.log(result);
      storage.set({ key: 'accessToken', data: result });

      message.success('로그인되었습니다');
      navigate('/');
    }
  };

  return (
    <form className="loginWrapper" onSubmit={onClickLogin}>
      <div className="flex items-start justify-between w-full mt-5">
        <MailOutlined />
        <div className="w-full h-14 ml-3">
          <Input01
            type="text"
            placeholder="이메일"
            onChange={onChangeUserEmail}
          />
          <span className="text-red-700 pl-2.5">{errorEmail}</span>
        </div>
      </div>
      <div className="flex items-start justify-between w-full mt-5">
        <LockOutlined />
        <div className="w-full h-14 ml-3">
          <Input01
            type="password"
            placeholder="비밀번호"
            onChange={onChangeUserPassword}
            autoComplete="on"
          />
          <span className="text-red-700 pl-2.5">{errorPassword}</span>
        </div>
      </div>
      <button
        className="h-14 w-full rounded-2xl mt-12 outline-0 border-0 cursor-pointer bg-blue-900 text-white"
        onClick={() => onClickLogin}
      >
        로그인하기
      </button>
    </form>
  );
}
