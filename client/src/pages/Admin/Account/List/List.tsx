import { IUser } from 'types/User.type';
import { IInfo } from './type';
import SwitchButton from 'components/SwitchButton/SwitchButton';
import Broker from '../../../../brokers.json';
import AccountStatus from '../../../../accountStatus.json';
import { AccountNumber, GetDate, GetStatus } from 'commons';

export default function List({
  info,
  index,
  User,
  onClickMoveToUserDetail,
  onClickMoveToAccountDetail,
}: IInfo) {
  const Brokers: { [key: string]: string } = Broker;

  const onChangeActive = (e: any) => {
    console.log(e);
  };

  return (
    <tr>
      <td className="text-center w-5 py-1.5">{index + 1}</td>
      {User?.map(
        (el: IUser) =>
          info.user_id === el.id && (
            <td
              key={el.uuid}
              className="text-center p-1 w-24"
              onClick={() => onClickMoveToUserDetail(el.id)}
            >
              {el.name}
            </td>
          )
      )}
      <td className="text-center px-1">{Brokers[info?.broker_id]}</td>
      <td
        className="text-center px-1"
        onClick={() => onClickMoveToAccountDetail(info?.id)}
      >
        {AccountNumber(info?.number)}
      </td>
      <td className="text-center px-1">
        {GetStatus(AccountStatus, info.status)}
      </td>
      <td className="text-center px-1">{info.name}</td>
      <td className="text-center px-1">
        {Math.floor(Number(info.assets)).toLocaleString()}
      </td>
      <td
        className={`text-center px-1 ${
          info.payments < info.assets
            ? 'text-blue-700'
            : info.payments === info.assets
            ? 'text-black'
            : 'text-red-500'
        }`}
      >
        {Math.floor(Number(info.payments)).toLocaleString()}
      </td>
      <td className="text-center px-1">
        <SwitchButton
          active={info.is_active}
          // onChangeActive={onChangeActive}
        />
      </td>
      <td className="text-center px-1">{GetDate(info.created_at)}</td>
    </tr>
  );
}
