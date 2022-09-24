import { Layout  } from 'components';
import { useEffect, useLayoutEffect } from 'react';
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { PAGE_URL_ACCOUNTS, pageUrlAccounts } from 'constants';
import { AccountList, AccountDetail } from './components';
import { brokersThunk } from 'redux/modules/brokers';
import { brokerFormatThunk } from 'redux/modules/brokerFormat';
import { accountStatusThunk } from 'redux/modules/accountStatus';
import { getUsersThunk } from 'redux/modules/users';

function AccountPage() {
  const parmas = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = sessionStorage.getItem('token');
  const CATEGORY = '계좌목록';

  useEffect(() => {
    if (location.pathname === '/accounts' && location.search === '') navigate(PAGE_URL_ACCOUNTS);
    dispatch(brokersThunk(token));
    dispatch(brokerFormatThunk(token));
    dispatch(accountStatusThunk(token));

    dispatch(getUsersThunk(token, ''));
  }, []);


  return (
    <Layout cate={CATEGORY} chooseUrl={pageUrlAccounts}>
      <main className="bg-gray-100">
        {parmas.id ? <AccountDetail />: <AccountList />}
      </main>
    </Layout>
  );
}

export default AccountPage;