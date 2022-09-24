import { useContext, useEffect } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
import './style.css';
import { GlobalContext } from 'App';
import { storage } from 'commons';
import Sider from './Sider/Sider';

export default function LayoutIndex() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { menuQuery, setMenuQuery, userInfo, setUserInfo } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!storage.get('accessToken')) {
      navigate('/login');
    } else {
      const userData = storage.get('accessToken');
      if (!userData) {
        throw new Error('No saved userData');
      }
      const saveUser = JSON.parse(userData);

      setUserInfo(saveUser);
    }
  }, [navigate, setUserInfo]);

  useEffect(() => {
    setMenuQuery(searchParams.getAll('menu'));
  }, [searchParams, setMenuQuery]);

  useEffect(() => {
    menuQuery;
  }, [menuQuery]);

  return (
    <Layout>
      <Sider setSearchParams={setSearchParams} />
      <Layout className="site-layout">
        <Header className="site-layout-background">
          {userInfo?.user?.email.split('@')[0]}님 환영합니다
        </Header>
        <Content className="site-layout-background">
          <Outlet />
        </Content>
        <Footer>Copyright © December and Company Inc.</Footer>
      </Layout>
    </Layout>
  );
}
