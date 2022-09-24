import axios from 'axios';

const apiRoot = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

const LoginApi = async ({ email, password }) => {
  const { data } = await apiRoot.post('/login', {
    email,
    password,
  });

  return data;
};

export { LoginApi };
