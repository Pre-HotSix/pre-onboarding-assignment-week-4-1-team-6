import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getSingleAccountThunk } from 'redux/modules/singleAccount';
import { localTime } from 'constants';

function AccountDetail() {
  const parmas = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const token = sessionStorage.getItem('token');
  const singleaccount = useSelector(state => state.singleaccount.data);
  const brokers = useSelector(state => state.brokers.data);
  const brokerFormat = useSelector(state => state.brokerFormat.data);
  const accountStatus = useSelector(state => state.accountStatus.data);

  useEffect(() => {
    dispatch(getSingleAccountThunk(token, parmas.id));
  }, []);

  const detailData = () => {
    const settingData = (data) =>(singleaccount[data]) ? 'O': 'X';
    const localMoney = (data) => Number(singleaccount[data]).toLocaleString();

    const settingStatus = (status) => {
      for (const key in accountStatus) {
        if (accountStatus[key] === status) return key;
      }
    };

    const formatNumber = (number) => {
      if (!number) return null;
      const numberArr = number.split('');
      const format = brokerFormat[singleaccount.broker_id];
    
      format.split('').forEach((num, index) => {
        if (num === '-') numberArr.splice(index, 0, '-');
      });
    
      return numberArr.join('');
    };

    return (
      <div>
        <p className="text-base font-bold pb-4">계좌 정보</p>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead><tr><th className="text-base">고객명</th></tr></thead>
            <tbody>
              <tr><td>{location.state.userName}</td></tr>
              <tr><td>브로커명</td></tr>
              <tr><td>{brokers[singleaccount.broker_id]}</td></tr>
              <tr><td>계좌번호</td></tr>
              <tr><td>{formatNumber(singleaccount.number)}</td></tr>
              <tr><td>계좌상태</td></tr>
              <tr><td>{settingStatus(singleaccount.status)}</td></tr>
              <tr><td>계좌명</td></tr>
              <tr><td>{singleaccount.name}</td></tr>
              <tr><td>평가금액</td></tr>
              <tr><td>{localMoney('assets')}</td></tr>
              <tr><td>입금금액</td></tr>
              <tr><td>{localMoney('payments')}</td></tr>
              <tr><td>계좌활성화</td></tr>
              <tr><td>{settingData('is_active')}</td></tr>
              <tr><td>계좌계설일</td></tr>
              <tr><td>{localTime(singleaccount.created_at)}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };


  return (
    <div className="px-4 py-8">
      {detailData()}
    </div>
  );
}

export default AccountDetail;