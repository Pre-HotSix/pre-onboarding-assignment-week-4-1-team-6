import { GlobalContext } from 'App';
import { UserDetail, UserList } from 'pages';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router';
import User from '../../../db.json';

export default function UserPage({ onClickMoveToUserDetail }: any) {
  const { detailId, setDetailId } = useContext(GlobalContext);

  const location = useLocation();
  const params = location.pathname.split('/');

  useEffect(() => {
    setDetailId(params[2]);
  }, []);

  return (
    <>
      {params[1] === 'user' ? (
        <UserDetail user={User.users[detailId]} account={User.accounts} />
      ) : (
        <UserList
          user={User.users}
          onClickMoveToUserDetail={onClickMoveToUserDetail}
        />
      )}
    </>
  );
}
