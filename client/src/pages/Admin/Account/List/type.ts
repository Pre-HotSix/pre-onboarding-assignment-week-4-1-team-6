import { IAccount } from 'types/Account.type';
import { IUser } from 'types/User.type';

export interface IAccountList {
  account: IAccount[];
  onClickMoveToUserDetail?: (id: number) => void;
  onClickMoveToAccountDetail?: (id: number) => void;
}
export interface IAccountDetail {
  account: IAccount;
  user: IUser[];
}

export interface IInfo {
  User: IUser[];
  info: IAccount;
  index: number;
  onClickMoveToUserDetail: any;
  onClickMoveToAccountDetail: any;
}
