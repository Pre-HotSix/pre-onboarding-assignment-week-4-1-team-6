import { Link } from 'react-router-dom';
import { maskingName, maskingPhone, convertDate } from 'utils/ConvertData';

export const USER_TABLE_COLUMNS = [
  {
    title: '이름',
    dataIndex: 'name',
    render: (text) => <Link to={`?q=${text}`}>{maskingName(text)}</Link>,
  },
  {
    title: '이메일',
    dataIndex: 'email',
  },
  {
    title: '성별',
    dataIndex: 'gender_origin',
  },
  {
    title: '생년월일',
    dataIndex: 'birth_date',
    render: (date) => convertDate(date),
  },
  {
    title: '휴대폰번호',
    dataIndex: 'phone_number',
    render: (phone) => maskingPhone(phone),
  },
  {
    title: '최근로그인',
    dataIndex: 'last_login',
    render: (date) => convertDate(date),
  },
  {
    title: '가입일',
    dataIndex: 'created_at',
    render: (date) => convertDate(date),
  },
  // {
  //   title: 'Address',
  //   dataIndex: ['address', 'detail_address'],
  //   render: (text, row) => (
  //     <span>{row['address'] + ' ' + row['detail_address']}</span>
  //   ),
  // },
];

export const ACCOUNT_TABLE_COLUMNS = [
  {
    title: '계좌번호',
    dataIndex: 'number',
    render: (text) => maskingName(text),
  },
  {
    title: '계좌상태',
    dataIndex: 'status',
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
          <span className="text-red-600">{(+row.assets).toLocaleString()}</span>
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
  },
  {
    title: '계좌개설일',
    dataIndex: 'created_at',
    render: (date) => convertDate(date),
  },
];
