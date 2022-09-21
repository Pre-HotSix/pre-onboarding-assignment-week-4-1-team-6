import { getParameter } from 'utils/GetParams';
import UserInfo from './UserInfo';
import Users from './Users';

export default function UserList() {
  const {pathname,search} = getParameter();

  if (search.includes('q=')) return <UserInfo params={search} />;

  return <Users pathname={pathname} params={search} />;
}
