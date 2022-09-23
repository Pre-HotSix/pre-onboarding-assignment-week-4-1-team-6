import { useContext, useEffect } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
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
import { IItem } from './type';
import { GlobalContext } from 'App';

export default function LayoutIndex() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { menuQuery, setMenuQuery } = useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {
    setMenuQuery(searchParams.getAll('menu'));
  }, [searchParams, setMenuQuery]);

  useEffect(() => {
    menuQuery;
  }, [menuQuery]);

  const selectMenuHandler = (index: number) => {
    setSearchParams({ menu: String(index) });
    navigate(`/?menu=${index}`);

    if (index === 2) {
      localStorage.removeItem('accessToken');
      alert('로그아웃 되었습니다.');
      navigate('/login');
    }
  };

  const items = [
    {
      key: `${MenuText.sider[1].id}`,
      icon: <AccountBookOutlined />,
      label: `${MenuText.sider[1].name}`,
    },
    {
      key: `${MenuText.sider[2].id}`,
      icon: <UnorderedListOutlined />,
      label: `${MenuText.sider[2].name}`,
    },
    {
      key: `${MenuText.sider[3].id}`,
      icon: <LogoutOutlined />,
      label: `${MenuText.sider[3].name}`,
    },
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible>
        {items.map((el: IItem, index: number) => (
          <li
            key={el.key}
            className={`menuList ${
              Number(menuQuery) === index ? 'focused' : 'submenu'
            }`}
            onClick={() => selectMenuHandler(index)}
          >
            {el.icon} <span className="pt-0.5 ml-1.5">{el.label}</span>
          </li>
        ))}
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background"></Header>
        <Content className="site-layout-background">
          <Outlet />
        </Content>
        <Footer>Copyright © December and Company Inc.</Footer>
      </Layout>
    </Layout>
  );
}
