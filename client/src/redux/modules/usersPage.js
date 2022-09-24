import { usersPaginateApi, editUserApi } from 'apis/usersApi';

const GET_USERSPAGE_START = 'usersPage/GET_USERSPAGE_START';
function getUsersPageStart() {
  return {
    type: GET_USERSPAGE_START
  };
};

const GET_USERSPAGE_SUCCESS = 'usersPage/GET_USERSPAGE_SUCCESS';
function getUsersPageSuccess(data) {
  return {
    type: GET_USERSPAGE_SUCCESS,
    data
  };
};

const GET_USERSPAGE_FAIL = 'usersPage/GET_USERSPAGE_FAIL';
function getUsersPageFail(error) {
  return {
    type: GET_USERSPAGE_FAIL,
    error
  };
};

// edit
const PATCH_USER_START = 'usersPage/PATCH_USER_START';
function patchUserStart() {
  return {
    type: PATCH_USER_START
  };
};

const PATCH_USER_SUCCESS = 'usersPage/PATCH_USER_SUCCESS';
function patchUserSuccess(data, userId) {
  return {
    type: PATCH_USER_SUCCESS,
    data,
    userId
  };
};

const PATCH_USER_FAIL = 'usersPage/PATCH_USER_FAIL';
function patchUserFail(error) {
  return {
    type: PATCH_USER_FAIL,
    error
  };
};

export function getUsersPageThunk(token, queryString) {
  return async (dispatch) => {
    try {
      dispatch(getUsersPageStart());
      const data = await usersPaginateApi(token, queryString);
      dispatch(getUsersPageSuccess(data));
    } catch (error) {
      dispatch(getUsersPageFail(error));
    }
  };
};

export function patchUserThunk(token, userId, edit) {
  return async (dispatch) => {
    try {
      dispatch(patchUserStart());
      const data = await editUserApi(token, userId, edit);
      dispatch(patchUserSuccess(data, userId));
    } catch (error) {
      dispatch(patchUserFail(error));
    }
  };
};

const initialState = {
  loading: false,
  data: [],
  error: null
};
export function usersPageReducer(state = initialState, action) {
  switch (action.type) {
		case GET_USERSPAGE_START:
			return {
        ...state,
        loading: true,
        error: null
      };
		case GET_USERSPAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case GET_USERSPAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case PATCH_USER_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case PATCH_USER_SUCCESS: {
      const actionData = state.data.map(user => {
        if (user.id === action.userId) return action.data;
        return user;
      });
      return {
        ...state,
        loading: false,
        data: [ ...actionData ]
      };
    }
    case PATCH_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
};