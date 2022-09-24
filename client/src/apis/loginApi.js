import { apiRoot } from './index';
// {
//   "email": "hello@naver.com",
//   "password": "hello",
//   "id": 101
// }

export const signinApi = async (email, password) => {
  try {
    const { data } = await apiRoot.post('/signin', {
      "email": email,
      "password": password,
    });

    return data;
  } catch (error) {
    if (error.response.status === 400) {
      const data = await signupApi(email, password);
      return data;
    } else {
      throw error;
    }
  }
};

const signupApi = async (email, password) => {
  try {
    const { data } = await apiRoot.post('/signup', {
      "email": email,
      "password": password,
    });
    
    return data;
  } catch (error) {
    throw error;
  }
};