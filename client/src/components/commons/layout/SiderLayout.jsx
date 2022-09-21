import {
  LogoutOutlined,
  DashboardOutlined,
  BankOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { Link } from 'react-router-dom';
import { removeToken } from 'utils/Storage';
import PropTypes from 'prop-types';

const SIDE_MENU = [
  {
    id: 1,
    name: '대시보드',
    keyword: 'dashboard',
    icon: <DashboardOutlined />,
  },
  { id: 2, name: '계좌 목록', keyword: 'accounts', icon: <BankOutlined /> },
  { id: 3, name: '사용자 목록', keyword: 'users', icon: <UserOutlined /> },
];

SiderLayout.propTypes = {
  collapsed: PropTypes.bool,
};

const logout = () => {
  removeToken();
  window.location.reload();
};

export default function SiderLayout({ collapsed }) {
  const nav = "2"

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
