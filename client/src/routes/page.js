import Main from '../pages/MainPage/MainPage.jsx';
import Login from '../pages/LoginPage/LoginPage.jsx';
import AccountPage from 'pages/AccountPage/AccountPage.jsx';
import UsersPage from 'pages/UsersPage/UsersPage.jsx';
import Test from 'pages/test.jsx';

const pages = [
  { pathname: '/', element: <Main></Main>, isPublic: false },
  { pathname: '/login', element: <Login></Login>, isPublic: true },
  {
    pathname: '/account',
    element: <AccountPage></AccountPage>,
    isPublic: false,
  },
  { pathname: '/users', element: <UsersPage></UsersPage>, isPublic: false },
  { pathname: '/test', element: <Test></Test>, isPublic: true },
];

export default pages;
