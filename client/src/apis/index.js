import axios from 'axios';

const apiRoot = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

const getAllCommentsApi = async () => {
  const { data } = await apiRoot.get(``);
  return data;
};

export { getAllCommentsApi };
