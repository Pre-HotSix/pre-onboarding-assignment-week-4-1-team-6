import { Layout  } from 'components';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { PAGE_URL_USERS, pageUrlUsers, BaseUrlAccounts } from 'constants';
import { UserList, UserDetail } from './components';
import { brokersThunk } from 'redux/modules/brokers';
import { brokerFormatThunk } from 'redux/modules/brokerFormat';
import { accountStatusThunk } from 'redux/modules/accountStatus';
import { getAccountsThunk } from 'redux/modules/accounts';
import { getSettingThunk } from 'redux/modules/userSetting';

function UserPage() {
  const parmas = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = sessionStorage.getItem('token');
  const CATEGORY = '사용자';

  useEffect(() => {
    if (location.pathname === '/users' && location.search === '') navigate(PAGE_URL_USERS);
    dispatch(brokersThunk(token));
    dispatch(brokerFormatThunk(token));
    dispatch(accountStatusThunk(token));

    dispatch(getAccountsThunk(token, BaseUrlAccounts('')));
    dispatch(getSettingThunk(token));
  }, []);


  return (
    <Layout cate={CATEGORY} chooseUrl={pageUrlUsers}>
      <main className="bg-gray-100">
        {parmas.id ? <UserDetail />: <UserList />}
      </main>
    </Layout>
  );
}

export default UserPage;