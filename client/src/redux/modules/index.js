import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { usersPageReducer } from './usersPage';
import { singleUserReducer } from './singleUser';
import { userSettingReducer } from './userSetting';
import { accountsReducer } from './accounts';
import { accountsPageReducer } from './accountsPage';
import { singleAccountReducer } from './singleAccount';
import { brokersReducer } from './brokers';
import { brokerFormatReducer } from './brokerFormat';
import { accountStatusReducer } from './accountStatus';

const rootReducer = combineReducers({
  users: usersReducer,
  userspage: usersPageReducer,
  singleuser: singleUserReducer,
  usersetting: userSettingReducer,
  accounts: accountsReducer,
  accountspage: accountsPageReducer,
  singleaccount: singleAccountReducer,
  brokers: brokersReducer,
  brokerFormat: brokerFormatReducer,
  accountStatus: accountStatusReducer
})

export default rootReducer;