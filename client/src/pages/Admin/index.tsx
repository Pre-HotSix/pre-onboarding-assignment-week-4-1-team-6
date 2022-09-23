import { GlobalContext } from 'App';
import { Account, User } from 'pages';
import { useContext } from 'react';
import { useNavigate } from 'react-router';

export default function Admin() {
  const { menuQuery, setDetailId } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onClickMoveToUserDetail = (id: number) => {
    navigate(`/user/${id - 1}`);
    setDetailId(id - 1);
  };

  return (
    <>
      {Number(menuQuery) === 0 && (
        <Account onClickMoveToUserDetail={onClickMoveToUserDetail} />
      )}
      {Number(menuQuery) === 1 && (
        <User onClickMoveToUserDetail={onClickMoveToUserDetail} />
      )}
      {/* {params[1] === 'user' && <UserDetail />} */}
    </>
  );
}
