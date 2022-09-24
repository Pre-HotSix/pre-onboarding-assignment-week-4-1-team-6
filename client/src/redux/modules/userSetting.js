import { userSettingApi } from 'apis/userSettingApi';

const GET_SETTING_START = 'userSetting/GET_SETTING_START';
function getSettingStart() {
  return {
    type: GET_SETTING_START
  };
};

const GET_SETTING_SUCCESS = 'userSetting/GET_SETTING_SUCCESS';
function getSettingSuccess(data) {
  return {
    type: GET_SETTING_SUCCESS,
    data
  };
};

const GET_SETTING_FAIL = 'userSetting/GET_SETTING_FAIL';
function getSettingFail(error) {
  return {
    type: GET_SETTING_FAIL,
    error
  };
};

export function getSettingThunk(token) {
  return async (dispatch) => {
    try {
      dispatch(getSettingStart());
      const data = await userSettingApi(token);
      dispatch(getSettingSuccess(data));
    } catch (error) {
      dispatch(getSettingFail(error));
    }
  };
};

const initialState = {
  loading: false,
  data: [],
  error: null
};
export function userSettingReducer(state = initialState, action) {
  switch (action.type) {
		case GET_SETTING_START:
			return {
        ...state,
        loading: true,
        error: null
      };
		case GET_SETTING_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case GET_SETTING_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state
  }
};