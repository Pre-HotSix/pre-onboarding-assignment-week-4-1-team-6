import { GlobalContext } from 'App';
import { AccountList, AccountDetail } from 'pages';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Account from '../../../db.json';

export default function AccountPage({ onClickMoveToUserDetail }: any) {
  const { detailId, setDetailId } = useContext(GlobalContext);

  const navigate = useNavigate();
  const location = useLocation();
  const params = location.pathname.split('/');

  const onClickMoveToAccountDetail = (id: number) => {
    navigate(`/account/${id}`);
    setDetailId(id);
  };

  return (
    <>
      {params[1] !== 'account' ? (
        <AccountList
          account={Account?.accounts}
          onClickMoveToUserDetail={onClickMoveToUserDetail}
          onClickMoveToAccountDetail={onClickMoveToAccountDetail}
        />
      ) : (
        <AccountDetail
          account={Account?.accounts[detailId]}
          user={Account.users}
        />
      )}
    </>
  );
}
