import { accountsApi } from 'apis/accountsApi';

const GET_ACCOUNTS_START = 'accounts/GET_ACCOUNTS_START';
function getAccountsStart() {
  return {
    type: GET_ACCOUNTS_START
  };
};

const GET_ACCOUNTS_SUCCESS = 'accounts/GET_ACCOUNTS_SUCCESS';
function getAccountsSuccess(data) {
  return {
    type: GET_ACCOUNTS_SUCCESS,
    data
  };
};

const GET_ACCOUNTS_FAIL = 'accounts/GET_ACCOUNTS_FAIL';
function getAccountsFail(error) {
  return {
    type: GET_ACCOUNTS_FAIL,
    error
  };
};

export function getAccountsThunk(token, search) {
  return async (dispatch) => {
    try {
      dispatch(getAccountsStart());
      const data = await accountsApi(token, search);
      dispatch(getAccountsSuccess(data));
    } catch (error) {
      dispatch(getAccountsFail(error));
    }
  };
};

const initialState = {
  loading: false,
  data: [],
  error: null
};
export function accountsReducer(state = initialState, action) {
  switch (action.type) {
		case GET_ACCOUNTS_START:
			return {
        ...state,
        loading: true,
        error: null
      };
		case GET_ACCOUNTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case GET_ACCOUNTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
};