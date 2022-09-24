import { GlobalContext } from 'App';
import { storage } from 'commons';
import { Account, User } from 'pages';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Admin() {
  const { menuQuery, setDetailId, setUserInfo } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!storage.get('accessToken')) {
      navigate('/login');
    } else {
      const userData = storage.get('accessToken');
      if (!userData) {
        throw new Error('No saved userData');
      }
      const saveUser = JSON.parse(userData);

      setUserInfo(saveUser);
    }
  }, [navigate, setUserInfo]);

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
