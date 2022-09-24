import axios from 'axios';

interface ILogin {
  email: string;
  password: string;
}

const apiRoot = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

const LoginApi = async ({ email, password }: ILogin) => {
  const { data } = await apiRoot.post('/signin', {
    email: email,
    password: password,
  });

  return data;
};

export { LoginApi };
