import { apiRoot } from './index';
import { BaseUrlAccounts } from 'constants';

// export const accountsApi = async (token, search) => {
  // const { data } = await apiRoot.get(BaseUrlAccounts(search), {
export const accountsApi = async (token, queryString) => {
  const { data } = await apiRoot.get(queryString, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  
  return data;
};

export const accountsPaginateApi = async (token, queryString) => {
  const { data } = await apiRoot.get(queryString, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  
  return data;
};

export const getAccountApi = async (token, number) => {
  const { data } = await apiRoot.get(`/accounts?number=${number}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  return data;
};
