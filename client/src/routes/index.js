import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, AccountPage, UserPage } from 'pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/accounts" element={<AccountPage />}>
          <Route path=":id" element={<AccountPage />} />
        </Route>
        <Route path="/users" element={<UserPage />}>
          <Route path=":id" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
