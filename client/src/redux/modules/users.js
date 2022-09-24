import { usersApi, deleteUserApi } from 'apis/usersApi';

const GET_USERS_START = 'users/GET_USERS_START';
function getUsersStart() {
  return {
    type: GET_USERS_START
  };
};

const GET_USERS_SUCCESS = 'users/GET_USERS_SUCCESS';
function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data
  };
};

const GET_USERS_FAIL = 'users/GET_USERS_FAIL';
function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error
  };
};

export const DELETE_USER_START = 'users/DELETE_USER_START';
function deleteUserStart() {
  return {
    type: DELETE_USER_START
  };
};

export const DELETE_USER_SUCCESS = 'users/DELETE_USER_SUCCESS';
function deleteUserSuccess(userId) {
  return {
    type: DELETE_USER_SUCCESS,
    userId
  };
};

export const DELETE_USER_FAIL = 'users/DELETE_USER_FAIL';
function deleteUserFail(error) {
  return {
    type: DELETE_USER_FAIL,
    error
  };
};

export function getUsersThunk(token, search) {
  return async (dispatch) => {
    try {
      dispatch(getUsersStart());
      const data = await usersApi(token, search);
      dispatch(getUsersSuccess(data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
};

export function deleteUserThunk(token, userId) {
  return async (dispatch) => {
    try {
      dispatch(deleteUserStart());
      await deleteUserApi(token, userId);
      dispatch(deleteUserSuccess(userId));
    } catch (error) {
      dispatch(deleteUserFail(error));
    }
  };
};

const initialState = {
  loading: false,
  data: [],
  error: null
};
export function usersReducer(state = initialState, action) {
  switch (action.type) {
		case GET_USERS_START:
			return {
        ...state,
        loading: true,
        error: null
      };
		case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case DELETE_USER_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case DELETE_USER_SUCCESS: {
      const actionData = state.data.filter(user => user.id !== action.userId);
      return {
        ...state,
        loading: false,
        data: [ ...actionData ]
      };
    }
    case DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
};