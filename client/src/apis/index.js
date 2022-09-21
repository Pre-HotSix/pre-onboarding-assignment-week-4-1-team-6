import axios from 'axios';
import { getToken } from 'utils/Storage';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`,
  },
});

export const login = async (email, password) => {
  return await api.post('/signin', {
    email: email,
    password: password,
  });
};

export const getUsers = async () => {
  return await api.get(`/users`);
};

export const getUserInfo = async (params) => {
  return await api.get(`/users${params}`);
};
