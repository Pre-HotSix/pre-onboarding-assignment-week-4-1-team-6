import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  // UserOutlined,
  AccountBookOutlined,
  LogoutOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';
const { Header, Sider, Content, Footer } = Layout;
import './style.css';
import MenuText from '../../../sider.json';
import AccountList from 'components/Admin/AccountList';
import UserList from 'components/Admin/UserList';

export default function LayoutIndex() {
  const [searchParams, setSearchParams] = useSearchParams();
  const menuQuery = searchParams.getAll('menu');
  const [currentTab, setCurrentTab] = useState(Number(menuQuery));

  const navigate = useNavigate();

  const selectMenuHandler = (index: number) => {
    setCurrentTab(index);
    setSearchParams({ menu: String(index) });

    if (index === 2) {
      localStorage.removeItem('accessToken');
      alert('로그아웃 되었습니다.');
      navigate('/1');
    }
  };

  const items = [
    {
      key: `${MenuText[1].id}`,
      icon: <AccountBookOutlined />,
      label: `${MenuText[1].name}`,
      content: <AccountList />,
    },
    {
      key: `${MenuText[2].id}`,
      icon: <UnorderedListOutlined />,
      label: `${MenuText[2].name}`,
      content: <UserList />,
    },
    {
      key: `${MenuText[3].id}`,
      icon: <LogoutOutlined />,
      label: `${MenuText[3].name}`,
    },
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible>
        {items.map((el, index) => (
          <li
            key={index}
            id="menuList"
            className={currentTab === index ? 'focused' : 'submenu'}
            onClick={() => selectMenuHandler(index)}
          >
            {el.icon} <span className="pt-0.5 ml-1.5">{el.label}</span>
          </li>
        ))}
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background"></Header>
        <Content className="site-layout-background">
          {items[currentTab].label}
        </Content>
        <Footer>Copyright © December and Company Inc.</Footer>
      </Layout>
    </Layout>
  );
}
