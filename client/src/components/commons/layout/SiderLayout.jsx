import { LogoutOutlined, BankOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { Link } from 'react-router-dom';
import { removeToken } from 'utils/Storage';
import PropTypes from 'prop-types';
import { getParameter } from 'utils/GetParams';

const SIDE_MENU = [
  {
    id: 1,
    name: '계좌 목록',
    keyword: 'accounts?_page=1&_limit=10',
    icon: <BankOutlined />,
  },
  {
    id: 2,
    name: '사용자 목록',
    keyword: 'users?_page=1&_limit=10',
    icon: <UserOutlined />,
  },
];

SiderLayout.propTypes = {
  collapsed: PropTypes.bool,
};

const logout = () => {
  removeToken();
  window.location.reload();
};

export default function SiderLayout({ collapsed }) {
  const paramData = getParameter();
  const nav = paramData.pathname === '/accounts' ? '1' : '2';

  return (
    <Sider collapsed={collapsed}>
      <div className="h-10">로고</div>
      <Menu theme="dark" defaultSelectedKeys={[nav]} mode="inline">
        {SIDE_MENU.map((item) => (
          <Menu.Item key={item.id}>
            <Link to={item.keyword}>
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </Menu.Item>
        ))}
        <Menu.Item key="9999" onClick={logout}>
          <LogoutOutlined />
          <span>로그아웃</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
