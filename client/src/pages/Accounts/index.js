import { getParameter } from 'utils/GetParams';
import AccountInfo from './AccountInfo';
import Accounts from './Accounts';

export default function AccountList() {
  const { pathname, search } = getParameter();

  if (search.includes('q=')) return <AccountInfo params={search} />;

  return <Accounts pathname={pathname} params={search} />;
}
