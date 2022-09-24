export const LIMIT = 20;

import { apiRoot } from 'apis';

export const userInfoApi = async (token) => {
  const { data } = await apiRoot.get('/users', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const userInfoPaginationApi = async (token, page) => {
  console.log(token);
  const { data } = await apiRoot.get(`/users?_page=${page}&_limit=${LIMIT}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const userInfoSearchApi = async (token, south) => {
  const { data } = await apiRoot.get(`/users?q=${south}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const accountInfoApi = async (token) => {
  const { data } = await apiRoot.get('/accounts', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const accountInfoPaginationApi = async (token, page) => {
  const { data } = await apiRoot.get(
    `/accounts?_page=${page}&_limit=${LIMIT}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
};

export const accountInfoSearchApi = async (token, south) => {
  const { data } = await apiRoot.get(`/accounts?q=${south}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
