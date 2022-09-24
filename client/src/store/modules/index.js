import { combineReducers } from 'redux';
import { loginReducer } from './login';
import { pageInfoReducer } from './pageInfo';
import { paginationReducer } from './pagination';
import { paginationInfoReducer } from './paginationInfo';
import { userInfoReducer } from './userInfo';

const rootReducer = combineReducers({
  login: loginReducer,
  userInfo: userInfoReducer,
  pageInfo: pageInfoReducer,
  pagination: paginationReducer,
  paginationInfo: paginationInfoReducer,
});

export default rootReducer;
