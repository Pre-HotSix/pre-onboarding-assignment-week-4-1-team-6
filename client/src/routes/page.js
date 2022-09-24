import { UserList, AccountList } from 'pages';

const pages = [
  {
    pathname: '/accounts',
    element: <AccountList></AccountList>,
    isPublic: false,
  },
  { pathname: '/users', element: <UserList></UserList>, isPublic: false },
];

export default pages;
