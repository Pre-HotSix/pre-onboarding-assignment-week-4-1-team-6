import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getSingleThunk } from 'redux/modules/singleUser';
import { localTime } from 'constants';

function UserDetail() {
  const parmas = useParams();
  const dispatch = useDispatch();
  const token = sessionStorage.getItem('token');
  const usersingle = useSelector(state => state.singleuser.data);
  const usersetting = useSelector(state => state.usersetting.data);
  const accounts = useSelector(state => state.accounts.data);
  const brokers = useSelector(state => state.brokers.data);
  const brokerFormat = useSelector(state => state.brokerFormat.data);
  const accountStatus = useSelector(state => state.accountStatus.data);

  useEffect(() => {
    dispatch(getSingleThunk(token, parmas.id));
  }, []);

  const detailData = () => {
    const findUser = usersetting.filter((user) => {
      return (user.uuid === usersingle.uuid);
    });

    const settingData = (data) => {
      if (findUser.length === 0) return null
      return (findUser[0][data]) ? 'O': 'X';
    };

    return (
      <div>
        <p className="text-base font-bold pb-4">사용자 정보</p>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead><tr><th className="text-base">이름</th></tr></thead>
            <tbody>
              <tr><td>{usersingle.name}</td></tr>
              <tr><td>성별</td></tr>
              <tr><td>{usersingle.gender_origin}</td></tr>
              <tr><td>생년월일</td></tr>
              <tr><td>{localTime(usersingle.birth_date)}</td></tr>
              <tr><td>주소</td></tr>
              <tr><td>{usersingle.address ? `${usersingle.address} ${usersingle.detail_address}`: null}</td></tr>
              <tr><td>이메일</td></tr>
              <tr><td>{usersingle.email}</td></tr>
              <tr><td>핸드폰</td></tr>
              <tr><td>{usersingle.phone_number}</td></tr>
              <tr><td>가입날짜</td></tr>
              <tr><td>{localTime(usersingle.created_at)}</td></tr>
              <tr><td>최근로그인</td></tr>
              <tr><td>{localTime(usersingle.last_login)}</td></tr>
              <tr><td>혜택 정보 수신</td></tr>
              <tr><td>{settingData('allow_marketing_push')}</td></tr>
              <tr><td>활성화</td></tr>
              <tr><td>{settingData('is_active')}</td></tr>
              <tr><td>임직원</td></tr>
              <tr><td>{settingData('is_staff')}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const accountDataTitle = () => {
    const titles = [ '고객명', '브로커명', '계좌번호', '계좌상태', '계좌명', '평가금액', '입금금액', '계좌활성화', '계좌개설일' ];
    return titles.map((item, index) => {
      return <th key={index}>{item}</th>
    });
  };

  const accountData = () => {
    const findAccount = accounts.filter((account) => {
      return (account.user_id === usersingle.id);
    });

    return findAccount.map((account, index) => {
      const settingData = (data) =>(account[data]) ? 'O': 'X';
      const localMoney = (data) => Number(account[data]).toLocaleString();

      const formatNumber = (number) => {
        if (!number) return null;
        const numberArr = number.split('');
        const format = brokerFormat[account.broker_id];
      
        format.split('').forEach((num, index) => {
          if (num === '-') numberArr.splice(index, 0, '-');
        });
      
        return numberArr.join('');
      };

      const settingStatus = (status) => {
        for (const key in accountStatus) {
          if (accountStatus[key] === status) return key;
        }
      };

      return (
        <tr key={index}>
          <th>{usersingle.name}</th>
          <td>{brokers[account.broker_id]}</td>
          <td>{formatNumber(account.number)}</td>
          <td>{settingStatus(account.status)}</td>
          <td>{account.name}</td>
          <td>{localMoney('assets')}</td>
          <td>{localMoney('payments')}</td>
          <td>{settingData('is_active')}</td>
          <td>{localTime(account.created_at)}</td>
        </tr>
      );
    });
  };


  return (
    <div className="px-4 py-8">
      {detailData()}
      <div className="py-8">
        <p className="text-base font-bold pb-8">증권 계좌 목록</p>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead><tr>{accountDataTitle()}</tr></thead>
            <tbody>{accountData()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;