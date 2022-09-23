import axios from 'axios';

const apiRoot = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

const getAllCommentsApi = async () => {
  const { data } = await apiRoot.get(`?${ORDER}&${SORT}`);
  return data;
};

const postCommentApi = async ({ profile_url, author, content, createdAt }) => {
  const { data } = await apiRoot.post('', {
    profile_url,
    author,
    content,
    createdAt,
  });

  return data;
};

export { getAllCommentsApi, postCommentApi };
