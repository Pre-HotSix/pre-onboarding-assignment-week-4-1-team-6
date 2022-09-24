import {
  userInfoPaginationApi,
  accountInfoPaginationApi,
} from '../../apis/userInfo';

const GET_PAGINATIONINFO_START = 'info/GET_PAGINATION_START';
function getPaginationStart() {
  return {
    type: GET_PAGINATIONINFO_START,
  };
}

const GET_PAGINATIONINFO_SUCCESS = 'info/GET_PAGINATION_SUCCESS';
function getPaginationSuccess(data) {
  return {
    type: GET_PAGINATIONINFO_SUCCESS,
    data,
  };
}

const GET_PAGINATIONINFO_FAIL = 'info/GET_PAGINATION_FAIL';
function getPaginationFail(error) {
  return {
    type: GET_PAGINATIONINFO_FAIL,
    error,
  };
}

export function getPaginationThunk(page, where, token) {
  return async (dispatch) => {
    try {
      dispatch(getPaginationStart());
      const data = await (where === 'account'
        ? accountInfoPaginationApi(token, page)
        : userInfoPaginationApi(token, page));
      dispatch(getPaginationSuccess(data));
    } catch (error) {
      dispatch(getPaginationFail(error));
    }
  };
}

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const paginationInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAGINATIONINFO_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_PAGINATIONINFO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...action.data],
      };
    case GET_PAGINATIONINFO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
