import { getAccountApi } from 'apis/accountsApi';

const GET_SINGLE_ACCOUNT_START = 'singleAccount/GET_SINGLE_ACCOUNT_START';
function getSingleAccountStart() {
  return {
    type: GET_SINGLE_ACCOUNT_START
  };
};

const GET_SINGLE_ACCOUNT_SUCCESS = 'singleAccount/GET_SINGLE_ACCOUNT_SUCCESS';
function getSingleAccountSuccess(data) {
  return {
    type: GET_SINGLE_ACCOUNT_SUCCESS,
    data
  };
};

const GET_SINGLE_ACCOUNT_FAIL = 'singleAccount/GET_SINGLE_ACCOUNT_FAIL';
function getSingleAccountFail(error) {
  return {
    type: GET_SINGLE_ACCOUNT_FAIL,
    error
  };
};

export function getSingleAccountThunk(token, number) {
  return async (dispatch) => {
    try {
      dispatch(getSingleAccountStart());
      const data = await getAccountApi(token, number);
      dispatch(getSingleAccountSuccess(data));
    } catch (error) {
      dispatch(getSingleAccountFail(error));
    }
  };
};

const initialState = {
  loading: false,
  data: {},
  error: null
};
export function singleAccountReducer(state = initialState, action) {
  switch (action.type) {
		case GET_SINGLE_ACCOUNT_START:
			return {
        ...state,
        loading: true,
        error: null
      };
		case GET_SINGLE_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data[0]
      };
    case GET_SINGLE_ACCOUNT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
};