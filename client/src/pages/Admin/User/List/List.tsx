import { DateToString, GetDate, NameMasking } from 'commons';
import PhonNumber from 'commons/utils/PhoneNumber';
import SwitchButton from 'components/SwitchButton/SwitchButton';
import { IInfo } from './type';

export default function List({ user, onClickMoveToUserDetail }: IInfo) {
  return (
    <tr onClick={() => onClickMoveToUserDetail(user.id)}>
      <td className="py-1">
        <img
          src={user.photo}
          className="rounded-full overflow-hidden min-w-[1.5rem] min-h-[1.5rem] w-6 h-6 mr-px"
        />
      </td>
      <td className="px-0.5 w-24">{NameMasking(user.name)}</td>
      <td className="text-center px-1">{/* {user.account_count} */}</td>
      <td className="text-center px-1">{user.email}</td>
      <td className="text-center px-1">{user.gender_origin}</td>
      <td className="text-center px-1">{GetDate(user.birth_date)}</td>
      <td className="text-center px-1">{PhonNumber(user.phone_number)}</td>
      <td className="text-center px-1">{DateToString(user.last_login)}</td>
      <td className="text-center px-1">
        <SwitchButton
        // active={user.allow_marketing_push}
        // onChangeActive={onChangeActive}
        />
      </td>
      <td className="text-center px-1">
        <SwitchButton
        // active={user.is_active}
        // onChangeActive={onChangeActive}
        />
      </td>
      <td className="text-center px-1">{GetDate(user.created_at)}</td>
    </tr>
  );
}
