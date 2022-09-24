import { accountsPaginateApi } from 'apis/accountsApi';

const GET_ACCOUNTSPAGE_START = 'accountsPage/GET_ACCOUNTSPAGE_START';
function getAccountsPageStart() {
  return {
    type: GET_ACCOUNTSPAGE_START
  };
};

const GET_ACCOUNTSPAGE_SUCCESS = 'accountsPage/GET_ACCOUNTSPAGE_SUCCESS';
function getAccountsPageSuccess(data) {
  return {
    type: GET_ACCOUNTSPAGE_SUCCESS,
    data
  };
};

const GET_ACCOUNTSPAGE_FAIL = 'accountsPage/GET_ACCOUNTSPAGE_FAIL';
function getAccountsPageFail(error) {
  return {
    type: GET_ACCOUNTSPAGE_FAIL,
    error
  };
};

export function getAccountsPageThunk(token, queryString) {
  return async (dispatch) => {
    try {
      dispatch(getAccountsPageStart());
      const data = await accountsPaginateApi(token, queryString);
      dispatch(getAccountsPageSuccess(data));
    } catch (error) {
      dispatch(getAccountsPageFail(error));
    }
  };
};

const initialState = {
  loading: false,
  data: [],
  error: null
};
export function accountsPageReducer(state = initialState, action) {
  switch (action.type) {
		case GET_ACCOUNTSPAGE_START:
			return {
        ...state,
        loading: true,
        error: null
      };
		case GET_ACCOUNTSPAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case GET_ACCOUNTSPAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
};