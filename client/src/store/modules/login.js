import { loginApi } from 'apis/login';

const POST_LOGIN_START = 'loign/POST_LOGIN_START';
function postLoginStart() {
  return {
    type: POST_LOGIN_START,
  };
}

const POST_LOGIN_SUCCESS = 'login/POST_LOGIN_SUCCESS';
function postLoginSuccess(data) {
  return {
    type: POST_LOGIN_SUCCESS,
    data,
  };
}

const POST_LOGIN_FAIL = 'login/POST_LOGIN_FAIL';
function postLoginFail(error) {
  return {
    type: POST_LOGIN_FAIL,
    error,
  };
}

export function loginThunk(form) {
  return async (dispatch) => {
    try {
      dispatch(postLoginStart());
      const data = await loginApi(form);
      dispatch(postLoginSuccess(data));
    } catch (error) {
      dispatch(postLoginFail(error));
    }
  };
}

const initialState = {
  email: '',
  id: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case POST_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
