import axios from 'axios';
import { getToken } from 'utils/Storage';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

instance.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${getToken()}`;

    return config;
  },
  (error) => {
    console.log('api interceptors error', error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      originalRequest.headers['Authorization'] = `Bearer ${getToken()}`;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

export const login = async (email, password) => {
  return await instance.post('/signin', {
    email: email,
    password: password,
  });
};

export const getUsers = async () => {
  return await instance.get(`/users`);
};

export const getUserData = async (params) => {
  return await instance.get(`/users${params}`);
};

export const getAccounts = async () => {
  return await instance.get(`/accounts`);
};

export const getAccountData = async (params) => {
  return await instance.get(`/accounts${params}`);
};
