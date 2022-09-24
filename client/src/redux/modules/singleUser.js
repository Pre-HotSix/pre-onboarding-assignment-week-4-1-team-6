import { getUserApi } from 'apis/usersApi';

const GET_SINGLE_USER_START = 'singleUser/GET_SINGLE_USER_START';
function getSingleStart() {
  return {
    type: GET_SINGLE_USER_START
  };
};

const GET_SINGLE_USER_SUCCESS = 'singleUser/GET_SINGLE_USER_SUCCESS';
export function getSingleSuccess(data) {
  return {
    type: GET_SINGLE_USER_SUCCESS,
    data
  };
};

const GET_SINGLE_USER_FAIL = 'singleUser/GET_SINGLE_USER_FAIL';
function getSingleFail(error) {
  return {
    type: GET_SINGLE_USER_FAIL,
    error
  };
};

export function getSingleThunk(token, userId) {
  return async (dispatch) => {
    try {
      dispatch(getSingleStart());
      const data = await getUserApi(token, userId);
      dispatch(getSingleSuccess(data));
    } catch (error) {
      dispatch(getSingleFail(error));
    }
  };
};

const initialState = {
  loading: false,
  data: {},
  error: null
};
export function singleUserReducer(state = initialState, action) {
  switch (action.type) {
		case GET_SINGLE_USER_START:
			return {
        ...state,
        loading: true,
        error: null
      };
		case GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.data }
      };
    case GET_SINGLE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
};