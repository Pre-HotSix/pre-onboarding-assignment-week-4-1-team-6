import { LayoutContainer } from 'components';
import { Login, UserList, AccountList } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<LayoutContainer />}>
          <Route path="/accounts" element={<AccountList />} />
          <Route path="/users" element={<UserList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
