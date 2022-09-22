import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { allAccountState } from 'recoil/account';
import { userSettingState } from 'recoil/userSetting';
import { Masking, Convert } from 'utils/ConvertData';

export default function USER_TABLE_COLUMNS() {
  const [allAccount] = useRecoilState(allAccountState);
  const [userSetting] = useRecoilState(userSettingState);

  const getOwnAccountNumber = (id) => {
    const filterData = allAccount.data.filter((data) => data.user_id === id);
    return filterData.length;
  };

  const getAllowMarketingPush = (uuid) => {
    const filterData = userSetting.filter((data) => data.uuid === uuid);
    return filterData[0].allow_marketing_push ? '동의' : '미동의';
  };

  const getIsActive = (uuid) => {
    const filterData = userSetting.filter((data) => data.uuid === uuid);
    return filterData[0].is_active ? '활성화' : '비활성화';
  };

  return [
    {
      title: '이름',
      dataIndex: 'name',
      render: (name) => <Link to={`?q=${name}`}>{Masking.text(name)}</Link>,
    },
    {
      title: '보유중인 계좌수',
      dataIndex: 'id',
      render: (id) => <span>{getOwnAccountNumber(id)}</span>,
    },
    {
      title: '이메일',
      dataIndex: 'email',
    },
    {
      title: '성별',
      dataIndex: 'gender_origin',
      render: (gender) => <span>{gender % 2 !== 0 ? '남성' : '여성'}</span>,
    },
    {
      title: '생년월일',
      dataIndex: 'birth_date',
      render: (date) => Convert.date(date),
    },
    {
      title: '휴대폰번호',
      dataIndex: 'phone_number',
      render: (phone) => Masking.phone(phone),
    },
    {
      title: '최근로그인',
      dataIndex: 'last_login',
      render: (date) => Convert.date(date),
    },
    {
      title: '혜택수신',
      dataIndex: 'uuid',
      render: (uuid) => <span>{getAllowMarketingPush(uuid)}</span>,
    },
    {
      title: '활성화',
      dataIndex: 'uuid',
      render: (uuid) => <span>{getIsActive(uuid)}</span>,
    },
    {
      title: '가입일',
      dataIndex: 'created_at',
      render: (date) => Convert.date(date),
    },
  ];
}
