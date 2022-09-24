import { IAccountDetail } from '../List/type';
import AccountStatus from '../../../../accountStatus.json';
import Broker from '../../../../brokers.json';
import BrokerFormat from '../../../../brokerFormat.json';
import { GetAccountFormat, GetDate, GetStatus } from 'commons';
import { IUser } from 'types/User.type';

export default function AccountDetail({ account, user }: IAccountDetail) {
  const Brokers: { [key: string]: string } = Broker;
  const BrokersFormat: { [key: string]: string } = BrokerFormat;

  return (
    <>
      {user?.map(
        (el: IUser) =>
          account.user_id === el.id && (
            <p key={el.uuid} className="w-full font-bold text-2xl mb-3">
              {el.name}
              {"'"}s Account
            </p>
          )
      )}
      <table className="w-full h-full">
        <tr className="flex w-full h-16 border-b border-black">
          <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
            Broker Name
          </th>
          <td className="flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
            {Brokers[account.broker_id]}
          </td>
        </tr>
        <tr className="flex w-full h-16 border-b border-black">
          <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
            Account Name
          </th>
          <td className="flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
            {account?.name}
          </td>
        </tr>
        <tr className="flex w-full h-16 border-b border-black">
          <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
            Account Number
          </th>
          <td className="flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
            {GetAccountFormat(
              BrokersFormat[account.broker_id],
              account?.number
            )}
          </td>
        </tr>
        <tr className="flex w-full h-16 border-b border-black">
          <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
            Assets
          </th>
          <td className="flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
            {Math.floor(Number(account?.assets)).toLocaleString()}
          </td>
        </tr>
        <tr className="flex w-full h-16 border-b border-black">
          <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
            Payments
          </th>
          <td className="flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
            {Math.floor(Number(account?.payments)).toLocaleString()}
          </td>
        </tr>
        <tr className="flex w-full h-16 border-b border-black">
          <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
            Status
          </th>
          <td className="flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
            {GetStatus(AccountStatus, account?.status)}
          </td>
        </tr>
        <tr className="flex w-full h-16 border-b border-black">
          <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
            Is Active
          </th>
          <td className="flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
            {account?.is_active === true ? '동의' : '거절'}
          </td>
        </tr>
        <tr className="flex w-full h-16 border-b border-black">
          <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
            Created At
          </th>
          <td className="flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
            {GetDate(account?.created_at)}
          </td>
        </tr>
        <tr className="flex w-full h-16 border-black">
          <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
            Updated At
          </th>
          <td className="flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
            {GetDate(account?.updated_at)}
          </td>
        </tr>
      </table>
    </>
  );
}
