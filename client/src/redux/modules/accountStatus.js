import { accountStatusApi } from 'apis/brokerApi';

const GET_ACCOUNT_STATUS_START = 'accountStatus/GET_ACCOUNT_STATUS_START';
function accountStatusStart() {
  return {
    type: GET_ACCOUNT_STATUS_START
  };
};

const GET_ACCOUNT_STATUS_SUCCESS = 'accountStatus/GET_ACCOUNT_STATUS_SUCCESS';
function accountStatusSuccess(data) {
  return {
    type: GET_ACCOUNT_STATUS_SUCCESS,
    data
  };
};

const GET_ACCOUNT_STATUS_FAIL = 'accountStatus/GET_ACCOUNT_STATUS_FAIL';
function accountStatusFail(error) {
  return {
    type: GET_ACCOUNT_STATUS_FAIL,
    error
  };
};

export function accountStatusThunk(token, userId) {
  return async (dispatch) => {
    try {
      dispatch(accountStatusStart());
      const data = await accountStatusApi(token);
      dispatch(accountStatusSuccess(data));
    } catch (error) {
      dispatch(accountStatusFail(error));
    }
  };
};

const initialState = {
  loading: false,
  data: {},
  error: null
};
export function accountStatusReducer(state = initialState, action) {
  switch (action.type) {
		case GET_ACCOUNT_STATUS_START:
			return {
        ...state,
        loading: true,
        error: null
      };
		case GET_ACCOUNT_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.data }
      };
    case GET_ACCOUNT_STATUS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
};