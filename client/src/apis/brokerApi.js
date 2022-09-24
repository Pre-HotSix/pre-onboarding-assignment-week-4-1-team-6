import { apiRoot } from './index';

export const brokersApi = async (token) => {
  const { data } = await apiRoot.get('/brokers', {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  
  return data;
};

export const brokerFormatApi = async (token) => {
  const { data } = await apiRoot.get('/brokerFormat', {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  
  return data;
};

export const accountStatusApi = async (token) => {
  const { data } = await apiRoot.get('/accountStatus', {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  
  return data;
};