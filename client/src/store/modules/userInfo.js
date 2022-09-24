import { userInfoApi } from 'apis/userInfo';

const GET_USERINFO_START = 'loign/GET_USERINFO_START';
function getUserInfoStart() {
  return {
    type: GET_USERINFO_START,
  };
}

const GET_USERINFO_SUCCESS = 'login/GET_USERINFO_SUCCESS';
function getUserInfoSuccess(data) {
  return {
    type: GET_USERINFO_SUCCESS,
    data,
  };
}

const GET_USERINFO_FAIL = 'login/GET_USERINFO_FAIL';
function getUserInfoFail(error) {
  return {
    type: GET_USERINFO_FAIL,
    error,
  };
}

export function userInfoThunk(token) {
  return async (dispatch) => {
    try {
      dispatch(getUserInfoStart());
      const data = await userInfoApi(token);
      dispatch(getUserInfoSuccess(data));
    } catch (error) {
      dispatch(getUserInfoFail(error));
    }
  };
}

const initialState = {
  id: 0,
  uuid: '',
  photo: '',
  name: '',
  email: '_',
  age: 0,
  gender_origin: 0,
  birth_date: '',
  phone_number: '',
  address: '',
  detail_address: '',
  last_login: '',
  created_at: '',
  updated_at: '',
};

export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERINFO_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USERINFO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case GET_USERINFO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
