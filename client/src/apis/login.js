import { apiRoot } from 'apis';

export const loginApi = async (form) => {
  const { data } = await apiRoot.post('/login', form);
  return data;
};
