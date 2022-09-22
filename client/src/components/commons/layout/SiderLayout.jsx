import { LogoutOutlined, BankOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { Link } from 'react-router-dom';
import { removeToken } from 'utils/Storage';
import PropTypes from 'prop-types';
import { getParameter } from 'utils/GetParams';
import { useGetAllData } from 'hooks';

SiderLayout.propTypes = {
  collapsed: PropTypes.bool,
};

export default function SiderLayout({ collapsed }) {
  const { pathname } = getParameter();
  useGetAllData();

  const logout = () => {
    removeToken();
    window.location.reload();
  };

  const items = [
    {
      key: '/accounts',
      label: (
        <Link to={'accounts?_page=1&_limit=10&q='}>
          <span>계좌 목록</span>
        </Link>
      ),
      icon: <BankOutlined />,
    },
    {
      key: '/users',
      label: (
        <Link to={'users?_page=1&_limit=10&q='}>
          <span>사용자 목록</span>
        </Link>
      ),
      icon: <UserOutlined />,
    },
    {
      key: 'logout',
      label: <span onClick={logout}>로그아웃</span>,
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Sider collapsed={collapsed}>
      <div className="h-10">로고</div>
      <Menu theme="dark" items={items} defaultSelectedKeys={[pathname]} />
    </Sider>
  );
}
