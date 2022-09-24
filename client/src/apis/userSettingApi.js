import { apiRoot } from './index';

export const userSettingApi = async (token) => {
  const { data } = await apiRoot.get('/userSetting', {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  return data;
};

export const filterSettingApi = async (token, query) => {
  try {
    const { data } = await apiRoot.get(`userSetting${query}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return data;
  } catch (error) {
    throw error;
  }
};
