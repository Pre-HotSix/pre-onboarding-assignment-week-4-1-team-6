import { apiRoot } from './index';
import { BaseUrlUsers } from 'constants';

// 활성화 여부 http://localhost:4000/userSetting (get)
// 임지원 여부 http://localhost:4000/userSetting (get)

export const usersApi = async (token, search) => {
  const { data } = await apiRoot.get(BaseUrlUsers(search), {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  return data;
};

export const usersPaginateApi = async (token, queryString) => {
  const { data } = await apiRoot.get(queryString, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  
  return data;
};

export const deleteUserApi = async (token, userId) => {
  const { data } = await apiRoot.delete(`/users/${userId}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  return data;
};

export const getUserApi = async (token, userId) => {
  const { data } = await apiRoot.get(`/users/${userId}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  return data;
};

export const editUserApi = async (token, userId, edit) => {
  const { data } = await apiRoot.patch(`/users/${userId}`, edit, {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  return data;
};

export const addUserApi = async (newUser) => {
  try {
    const { data } = await apiRoot.post('/users', newUser);
    return data;
  } catch (error) {
    throw error;
  }
};