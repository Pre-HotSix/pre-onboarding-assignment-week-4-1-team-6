import { GetAccountFormat, GetDate, GetStatus } from 'commons';
import { IUserDetail } from '../List/type';
import Broker from '../../../../brokers.json';
import AccountStatus from '../../../../accountStatus.json';
import BrokerFormat from '../../../../brokerFormat.json';

export default function UserDetail({ user, account }: IUserDetail) {
  const Brokers: { [key: string]: string } = Broker;
  const BrokersFormat: { [key: string]: string } = BrokerFormat;

  return (
    <>
      <table className="w-full">
        <thead className="w-full font-bold text-2xl">
          <tr>
            <th className="text-left pb-3">
              {user?.name}
              {"'"}s Information
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex w-full h-16 border-b border-black">
            <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
              Phone Number
            </th>
            <td className="hover:cursor-default flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
              {user.phone_number}
            </td>
            <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
              Email
            </th>
            <td className="hover:cursor-default flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
              {user.email}
            </td>
          </tr>
          <tr className="flex w-full h-16 border-b border-black">
            <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
              Age
            </th>
            <td className="hover:cursor-default flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
              {user.age}
            </td>
            <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
              Birth-day
            </th>
            <td className="hover:cursor-default flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
              {GetDate(user.birth_date)}
            </td>
          </tr>
          <tr className="flex w-full h-16 border-b border-black">
            <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
              Address
            </th>
            <td className="hover:cursor-default flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
              {user.address}
            </td>
            <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
              Detail Address
            </th>
            <td className="hover:cursor-default flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
              {user.detail_address}
            </td>
          </tr>
          <tr className="flex w-full h-16 border-b border-black">
            <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
              Created At
            </th>
            <td className="hover:cursor-default flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
              {GetDate(user.created_at)}
            </td>
            <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
              Updated At
            </th>
            <td className="hover:cursor-default flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
              {GetDate(user.updated_at)}
            </td>
          </tr>
          <tr className="flex w-full h-16">
            <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
              Gender Origin
            </th>
            <td className="hover:cursor-default flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
              {user.gender_origin}
            </td>
            <th className="flex justify-center items-center h-full w-[50%] pr-2 bg-blue-100">
              Last Login
            </th>
            <td className="hover:cursor-default flex justify-center items-center h-full w-[50%] bg-slate-50 text-center">
              {GetDate(user.last_login)}
            </td>
          </tr>
        </tbody>
      </table>

      <table className="w-full mt-3">
        <thead className="border-b border-black h-10">
          <tr>
            <th>Broker Name</th>
            <th>Account Number</th>
            <th>Status</th>
            <th>Account Name</th>
            <th>Assets</th>
            <th>Payments</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {account
            .filter((el) => {
              return el.user_id === user.id;
            })
            .map((info) => (
              <tr key={info.uuid}>
                <td className="text-center px-1 h-8">
                  {Brokers[info?.broker_id]}
                </td>
                <td className="text-center px-1 h-8">
                  {GetAccountFormat(
                    BrokersFormat[info.broker_id],
                    info?.number
                  )}
                </td>
                <td className="text-center px-1 h-8">
                  {GetStatus(AccountStatus, info.status)}
                </td>
                <td className="text-center px-1 h-8">{info.name}</td>
                <td className="text-center px-1 h-8">
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
                <td className="text-center px-1 h-8">
                  {GetDate(info.created_at)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
