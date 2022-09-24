import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import _ from 'lodash';
import { getAccountsThunk } from 'redux/modules/accounts';
import { getAccountsPageThunk } from 'redux/modules/accountsPage';
import { LIMIT, pageUrlAccounts, localTime, BaseUrlAccounts } from 'constants';
import { basicButton, activeButton } from 'styles/theme';

function AccountList() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = sessionStorage.getItem('token');
  const accounts = useSelector(state => state.accounts.data);
  const accountspage = useSelector(state => state.accountspage.data);
  const users = useSelector(state => state.users.data);
  const brokers = useSelector(state => state.brokers.data);
  const brokerFormat = useSelector(state => state.brokerFormat.data);
  const accountStatus = useSelector(state => state.accountStatus.data);

  useEffect(() => {
    const value = (location.state && location.state.text) ? location.state.text: '';
    const plusUrl = (location.state && location.state.plus) ? location.state.plus: '';
    const query = BaseUrlAccounts(value) + plusUrl
    dispatch(getAccountsThunk(token, query));
    dispatch(getAccountsPageThunk(token, `${location.pathname}${location.search}`));
  }, [location]);

  const pagination = (page) => {
    // const value = location.state ? location.state.text: '';
    // const queryString = pageUrlAccounts(page, value);
    // navigate(queryString,  {
    //   state: {
    //     text: value
    //   }
    // });

    const value = (location.state && location.state.text) ? location.state.text: '';
    const plusUrl = (location.state && location.state.plus) ? location.state.plus: '';
    const queryString = pageUrlAccounts(page, value);
    navigate(queryString + plusUrl,  {
      state: {
        text: value,
        plus: plusUrl
      }
    });
  };

  const pageArr = [];
  for (let i = 1; i <= Math.ceil(accounts.length / LIMIT); i++) {
    pageArr.push(
      <button 
        key={i} 
        onClick={() => pagination(i)} 
        className={`btn btn-outline btn-circle border-0 ${basicButton} ${location.search.includes(`_page=${i}&_`) ? activeButton: ""}`}
      >
        {i}
      </button>
    );
  };

  const toDetail = (number, name) => {
    navigate(`/accounts/${number}`, {
      state: {
        userName: name
      }
    });
  };
  const toUser = (userId) => {
    navigate(`/users/${userId}`);
  };

  const accountDataTitle = () => {
    const titles = [ '고객명', '브로커명', '계좌번호', '계좌상태', '계좌명', '평가금액', '입금금액', '계좌활성화', '계좌개설일' ];
    return titles.map((item, index) => {
      return <th key={index}>{item}</th>
    });
  };

  const accountData = () => {
    if (_.isEmpty(users) || _.isEmpty(accountspage) || _.isEmpty(brokerFormat)) return [];
    return accountspage.map((account, index) => {
      const findUser = users.find(user => account.user_id === user.id);
      const settingData = (data) =>(account[data]) ? 'O': 'X';
      const localMoney = (data) => Number(account[data]).toLocaleString();

      const settingStatus = (status) => {
        for (const key in accountStatus) {
          if (accountStatus[key] === status) return key;
        }
      };

      const assetsStyle = () => {
        if (account.payments < account.assets) return "text-red-700";
        else if (account.payments > account.assets) return "text-blue-700";
        return "text-black";
      };
      
      const hideNumber = (number) => {
        if (!number) return null;
        const numberArr = [];
        for (let i = 0; i < number.length; i++) {
          if ((i === 0) || (i === number.length - 1)) numberArr.push(number[i]);
          else numberArr.push('*');
        };
        
        const format = brokerFormat[account.broker_id];
        format.split('').forEach((num, index) => {
          if (num === '-') numberArr.splice(index, 0, '-');
        });
      
        return numberArr.join('');
      };

      return (
        <tr key={index} className="border-b-2 border-solid border-gray-100">
          <th className="cursor-pointer" onClick={() => toUser(account.user_id)}>{findUser.name}</th>
          <td>{brokers[account.broker_id]}</td>
          <td className="cursor-pointer" onClick={() => toDetail(account.number, findUser.name)}>
            {hideNumber(account.number)}
          </td>
          <td>{settingStatus(account.status)}</td>
          <td>{account.name}</td>
          <td className={assetsStyle()}>{localMoney('assets')}</td>
          <td>{localMoney('payments')}</td>
          <td>{settingData('is_active')}</td>
          <td>{localTime(account.created_at)}</td>
        </tr>
      );
    });
  };

  const filterBrokerId = (plusUrl) => {
    const value = (location.state && location.state.text) ? location.state.text: '';
    const queryString = pageUrlAccounts(1, value);
    navigate(queryString + plusUrl,  {
      state: {
        text: value,
        plus: plusUrl
      }
    });
  };


  return (
    <div className="px-4 py-8">
      <button onClick={() => filterBrokerId('&broker_id=292')}>브로커명</button>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead><tr>{accountDataTitle()}</tr></thead>
          <tbody>{accountData()}</tbody>
          <tfoot><tr>{accountDataTitle()}</tr></tfoot>
        </table>
      </div>

      <div className="flex justify-center items-center pt-12">
        <div className="">{pageArr}</div>
      </div>
    </div>
  );
}

export default AccountList;