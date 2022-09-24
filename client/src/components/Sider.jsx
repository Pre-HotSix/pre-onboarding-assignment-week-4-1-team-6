import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { COMPANY_NAME, PAGE_URL_USERS, PAGE_URL_ACCOUNTS } from 'constants';

function Sider() {
  // 마지막에 sider.json 파일 참고해서 재작성하기
  const location = useLocation();
  const [ active, setActive ] = useState({
    accounts: '',
    users: ''
  });
  const ACTIVE_HIGHLIGHT = 'bg-blue-700 text-white';
  const ACTIVE_DEFAULT = 'active:bg-blue-700';
  const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('worker');
  };

  useEffect(() => {
    if (location.pathname.includes('accounts')) setActive({ ...active, accounts: ACTIVE_HIGHLIGHT });
    else if (location.pathname.includes('users')) setActive({ ...active, users: ACTIVE_HIGHLIGHT });
  }, [])

  return (
    <nav className="w-1/5 py-0.5 max-w-xs">
      <p className="text-2xl py-3 px-4">{COMPANY_NAME}</p> 
      <ul className="menu w-full">
        <li className="pointer-events-none"><span>대시보드</span></li>
        <li className=""><Link to={PAGE_URL_ACCOUNTS} className={`${ACTIVE_DEFAULT} ${active.accounts}`}>계좌 목록</Link></li>
        <li className=""><Link to={PAGE_URL_USERS} className={`${ACTIVE_DEFAULT} ${active.users}`}>사용자</Link></li>
        <li className=""><Link onClick={logout} to="/" className={`${ACTIVE_DEFAULT}`}>로그아웃</Link></li>
      </ul>
    </nav>
  );
}

export default Sider;