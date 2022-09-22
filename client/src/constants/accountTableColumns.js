import { Link, useLocation, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { allUserState } from 'recoil/user';
import { maskingName, maskingPhone, convertDate } from 'utils/ConvertData';
import accountStatus from '../local_json/accountStatus.json';
import brokers from '../local_json/brokers.json';

export default function ACCOUNT_TABLE_COLUMNS() {
  const [allUser] = useRecoilState(allUserState);

  const getOwner = (user_id) => {
    const filterData = allUser.data.filter((data) => data.id === user_id);
    return filterData[0].name;
  };

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  return [
    {
      title: '고객명',
      dataIndex: 'user_id',
      render: (user_id) => (
        <Link to={`/users?q=${getOwner(user_id)}`}>{getOwner(user_id)}</Link>
      ),
    },
    {
      title: '브로커명',
      dataIndex: 'broker_id',
      render: (broker_id) => <span>{brokers[broker_id]}</span>,
    },
    {
      title: '계좌번호',
      dataIndex: 'number',
      render: (text) => maskingName(text),
    },
    {
      title: '계좌상태',
      dataIndex: 'status',
      render: (status) => <span>{getKeyByValue(accountStatus, status)}</span>,
    },
    {
      title: '계좌명',
      dataIndex: 'name',
    },
    {
      title: '평가금액',
      dataIndex: ['assets', 'payments'],
      render: (text, row) => {
        if (+row.assets > +row.payments)
          return (
            <span className="text-red-600">
              {(+row.assets).toLocaleString()}
            </span>
          );
        if (+row.assets < +row.payments)
          return (
            <span className="text-blue-600">
              {(+row.assets).toLocaleString()}
            </span>
          );
        return <span>{(+row.assets).toLocaleString()}</span>;
      },
    },
    {
      title: '입금금액',
      dataIndex: 'payments',
      render: (payment) => <span>{(+payment).toLocaleString()}</span>,
    },
    {
      title: '계좌활성화여부',
      dataIndex: 'is_active',
      render: (is_active) => <span>{is_active ? '활성화' : '비활성화'}</span>,
    },
    {
      title: '계좌개설일',
      dataIndex: 'created_at',
      render: (date) => convertDate(date),
    },
  ];
}
