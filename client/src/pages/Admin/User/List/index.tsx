import { ChangeEvent, SetStateAction, useState } from 'react';
import './style.css';
import _ from 'lodash';
import List from './List';
import { IUser } from 'types/User.type';
import { IUsers } from './type';
import { SearchBar } from 'components';

export default function UserList({ user, onClickMoveToUserDetail }: IUsers) {
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

  return (
    <>
      <SearchBar placeholder="검색해주세요" onChange={onChangeSearch} />

      {!searchList && (
        <table className="w-full table">
          <thead className="w-full h-10">
            <tr>
              <th colSpan={2}>Name</th>
              <th>Account Count</th>
              <th>Email</th>
              <th className="leading-3">
                Gender
                <br />
                Origin
              </th>
              <th>Birth Date</th>
              <th>Phone Number</th>
              <th>Last Login</th>
              <th className="leading-3">
                Allow
                <br />
                Marketing
              </th>
              <th>Is Active</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {user?.map((info: IUser) => (
              <List
                key={info.uuid}
                user={info}
                onClickMoveToUserDetail={onClickMoveToUserDetail}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
