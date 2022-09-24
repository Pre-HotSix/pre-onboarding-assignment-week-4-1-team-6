import { ChangeEvent, SetStateAction, useState } from 'react';
import './style.css';
import _ from 'lodash';
import List from './List';
import { IAccount } from 'types/Account.type';
import Account from '../../../../db.json';
import { IAccountList } from './type';
import { SearchBar } from 'components';

export default function AccountList({
  account,
  onClickMoveToUserDetail,
  onClickMoveToAccountDetail,
}: IAccountList) {
  const [accountData, setAccountData] = useState({});
  const [Toggle, setToggle] = useState(false);
  const [keyword, setKeyword] = useState<string>();
  const [searchList, setSearchList] = useState<boolean>(false);
  // const [clickPage, setClickPage] = useState(1);

  const getDebounce = _.debounce((data: SetStateAction<string | undefined>) => {
    setKeyword(data);
    setSearchList(true);
  }, 1000);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    switch (e.target.value) {
      case 'is_active':
        setToggle((prev) => !prev);
        if (Toggle) {
          setAccountData(
            account.sort(function (a, b) {
              return a.is_active - b.is_active;
            })
          );
        } else {
          setAccountData(
            account.sort(function (a, b) {
              return b.is_active - a.is_active;
            })
          );
        }
        break;
      case 'broker_id':
        if (value) {
          setAccountData(
            account
              .filter((el) => {
                return el.broker_id === id;
              })
              .sort(function (a, b) {
                return a.broker_id - b.broker_id;
              })
          );
        } else {
          setAccountData(
            account
              .filter((el) => {
                return el.broker_id === id;
              })
              .sort(function (a, b) {
                return b.broker_id - a.broker_id;
              })
          );
        }
        break;
      default:
        return setAccountData(account);
    }
    // }
  };

  return (
    <>
      <SearchBar placeholder="검색해주세요" onChange={onChangeSearch} />

      <table className="w-full">
        <thead className="w-full h-10 border-solid border-b-2 border-gray">
          <tr>
            <th className="w-10">No.</th>
            <th>Name</th>
            <th>Broker Name</th>
            <th className="leading-3">
              Account
              <br />
              Number
            </th>
            <th>Status</th>
            <th className="leading-3">
              Account
              <br />
              Name
            </th>
            <th>Assets</th>
            <th>Payments</th>
            <th>Is Active</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {!searchList &&
            account?.map((info: IAccount, index: number) => (
              <List
                key={info.uuid}
                info={info}
                index={index}
                User={Account.users}
                onClickMoveToUserDetail={onClickMoveToUserDetail}
                onClickMoveToAccountDetail={onClickMoveToAccountDetail}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}
