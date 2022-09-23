import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { allAccountState } from 'recoil/account';
import { userSettingState } from 'recoil/userSetting';
import { Masking, Convert } from 'utils/ConvertData';

export default function USER_TABLE_COLUMNS() {
  const [allAccount] = useRecoilState(allAccountState);
  const [userSetting] = useRecoilState(userSettingState);

  return [
    {
      title: '이름',
      dataIndex: 'name',
      render: (name) => <Link to={`?q=${name}`}>{Masking.text(name)}</Link>,
      width: 120,
      fixed: 'left',
      align: 'center',
    },
    {
      title: '보유중인 계좌수',
      dataIndex: 'id',
      render: (id) => (
        <span>{Convert.accountData(allAccount.data, id).length}</span>
      ),
      align: 'center',
    },
    {
      title: '이메일',
      dataIndex: 'email',
      align: 'center',
    },
    {
      title: '성별',
      dataIndex: 'gender_origin',
      render: (gender) => <span>{Convert.gender(gender)}</span>,
      align: 'center',
    },
    {
      title: '생년월일',
      dataIndex: 'birth_date',
      render: (date) => <span>{Convert.date(date)}</span>,
      align: 'center',
    },
    {
      title: '휴대폰번호',
      dataIndex: 'phone_number',
      render: (phone) => <span>{Masking.phone(phone)}</span>,
      align: 'center',
    },
    {
      title: '최근로그인',
      dataIndex: 'last_login',
      render: (date) => <span>{Convert.date(date)}</span>,
      align: 'center',
    },
    {
      title: '혜택수신',
      dataIndex: 'uuid',
      render: (uuid) => (
        <span>{Convert.allowMarketingPush(userSetting, uuid)}</span>
      ),
      align: 'center',
    },
    {
      title: '활성화',
      dataIndex: 'uuid',
      render: (uuid) => (
        <span>{Convert.isActiveFromUserSetting(userSetting, uuid)}</span>
      ),
      align: 'center',
      filters: [
        {
          text: '활성화',
          value: '활성화',
        },
        {
          text: '비활성화',
          value: '비활성화',
        },
      ],
      onFilter: (value, record) =>
        Convert.isActiveFromUserSetting(userSetting, record.uuid) === value,
    },
    {
      title: '가입일',
      dataIndex: 'created_at',
      render: (date) => <span>{Convert.date(date)}</span>,
      align: 'center',
    },
  ];
}
