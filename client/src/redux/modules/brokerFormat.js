import { brokerFormatApi } from 'apis/brokerApi';

const GET_BROKER_FORMAT_START = 'brokerFormat/GET_BROKER_FORMAT_START';
function brokerFormatStart() {
  return {
    type: GET_BROKER_FORMAT_START
  };
};

const GET_BROKER_FORMAT_SUCCESS = 'brokerFormat/GET_BROKER_FORMAT_SUCCESS';
function brokerFormatSuccess(data) {
  return {
    type: GET_BROKER_FORMAT_SUCCESS,
    data
  };
};

const GET_BROKER_FORMAT_FAIL = 'brokerFormat/GET_BROKER_FORMAT_FAIL';
function brokerFormatFail(error) {
  return {
    type: GET_BROKER_FORMAT_FAIL,
    error
  };
};

export function brokerFormatThunk(token, userId) {
  return async (dispatch) => {
    try {
      dispatch(brokerFormatStart());
      const data = await brokerFormatApi(token);
      dispatch(brokerFormatSuccess(data));
    } catch (error) {
      dispatch(brokerFormatFail(error));
    }
  };
};

const initialState = {
  loading: false,
  data: {},
  error: null
};
export function brokerFormatReducer(state = initialState, action) {
  switch (action.type) {
		case GET_BROKER_FORMAT_START:
			return {
        ...state,
        loading: true,
        error: null
      };
		case GET_BROKER_FORMAT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.data }
      };
    case GET_BROKER_FORMAT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
};