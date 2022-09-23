import { IAccount } from 'types/Account.type';
import { IUser } from 'types/User.type';

export interface IUserDetail {
  user: IUser;
  account: IAccount[];
}
export interface IUsers {
  user: IUser[];
  onClickMoveToUserDetail?: (id: number) => void;
}

export interface IInfo {
  user: IUser;
  onClickMoveToUserDetail?: any;
}
