import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { allUserState } from 'recoil/user';
import { Masking, Convert } from 'utils/ConvertData';
import accountStatus from '../local_json/accountStatus.json';
import brokers from '../local_json/brokers.json';

export default function ACCOUNT_TABLE_COLUMNS() {
  const [allUser] = useRecoilState(allUserState);

  return [
    {
      title: '고객명',
      dataIndex: 'user_id',
      render: (user_id) => (
        <Link to={`/users?q=${Convert.owner(allUser.data, user_id)}`}>
          {Masking.text(Convert.owner(allUser.data, user_id))}
        </Link>
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
      render: (number) => (
        <Link to={`/accounts?q=${number}`}>{Masking.text(number)}</Link>
      ),
    },
    {
      title: '계좌상태',
      dataIndex: 'status',
      render: (status) => (
        <span>{Convert.valueToKey(accountStatus, status)}</span>
      ),
    },
    {
      title: '계좌명',
      dataIndex: 'name',
    },
    {
      title: '평가금액',
      dataIndex: ['assets', 'payments'],
      render: (text, row) => Convert.assets(row.assets, row.payments),
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
      render: (date) => Convert.date(date),
    },
  ];
}
