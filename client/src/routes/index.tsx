import LayoutIndex from 'components/commons/layout';
import { Admin, Login, User, Account } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutIndex />}>
          <Route path="/" element={<Admin />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/user/:id" element={<User />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
