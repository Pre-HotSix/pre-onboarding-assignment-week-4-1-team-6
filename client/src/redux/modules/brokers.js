import { brokersApi } from 'apis/brokerApi';

const GET_BROKERS_START = 'brokers/GET_BROKERS_START';
function brokersStart() {
  return {
    type: GET_BROKERS_START
  };
};

const GET_BROKERS_SUCCESS = 'brokers/GET_BROKERS_SUCCESS';
function brokersSuccess(data) {
  return {
    type: GET_BROKERS_SUCCESS,
    data
  };
};

const GET_BROKERS_FAIL = 'brokers/GET_BROKERS_FAIL';
function brokersFail(error) {
  return {
    type: GET_BROKERS_FAIL,
    error
  };
};

export function brokersThunk(token, userId) {
  return async (dispatch) => {
    try {
      dispatch(brokersStart());
      const data = await brokersApi(token);
      dispatch(brokersSuccess(data));
    } catch (error) {
      dispatch(brokersFail(error));
    }
  };
};

const initialState = {
  loading: false,
  data: {},
  error: null
};
export function brokersReducer(state = initialState, action) {
  switch (action.type) {
		case GET_BROKERS_START:
			return {
        ...state,
        loading: true,
        error: null
      };
		case GET_BROKERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.data }
      };
    case GET_BROKERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
};