import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { currentPageAction } from 'store/modules/pageInfo';
import Pagination from 'components/Pagination/Pagination';

const MainLayout = ({ mainRender }) => {
  const { SubMenu } = Menu;
  const { Header, Content, Sider, Footer } = Layout;
  const [collapseState, setCollapseState] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pageInfos = useSelector((state) => state.pageInfo);
  const currentPage = location.href.split('/')[3];
  console.log(pageInfos);

  useEffect(() => {
    dispatch(currentPageAction(currentPage));
  }, []);

  const handleOnCollapse = () => {
    setCollapseState((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.clear();
    location.reload();
  };

  const handleDashboard = () => {
    navigate('/');
  };

  const handleAccount = () => {
    navigate('/account');
  };

  const handleUsers = () => {
    navigate('/users');
  };

  const changeClass = () => {
    if (pageInfos === '') {
      return '대시보드';
    } else if (pageInfos === 'account') {
      return '투자계좌';
    } else {
      return `승모님의 계좌 목록`;
    }
  };

  const headerTitle = () => {
    if (pageInfos === '') {
      return '대시보드';
    } else if (pageInfos === 'account') {
      return '투자계좌';
    } else {
      return `승모님의 계좌 목록`;
    }
  };
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapseState}
        onCollapse={handleOnCollapse}
      >
        <div className="App-logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item className={``} onClick={handleDashboard} key="1">
            <span>대시보드</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <span>계좌 목록</span>
              </span>
            }
          >
            <Menu.Item onClick={handleAccount} className="block" key="3">
              투자 계좌
            </Menu.Item>
          </SubMenu>
          <Menu.Item onClick={handleUsers} key="4">
            <span>사용자</span>
          </Menu.Item>
          <Menu.Item onClick={handleLogout} key="5">
            <span>로그아웃</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="text-gray-900 text-base flex items-center"
          style={{ background: '#fff', padding: 0 }}
        >
          <MenuFoldOutlined className="ml-4 mr-2" />
          {headerTitle()}
        </Header>
        <Content style={{ margin: '8px 16px' }}>
          <div
            style={{
              padding: 24,
              background: '#fff',
              height: 800,
              overflow: 'scroll',
            }}
          >
            {mainRender()}
            {pageInfos.currentUrl === 'accounts' || 'users' ? (
              <Pagination></Pagination>
            ) : (
              ''
            )}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Copyright © December and Company Inc.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  mainRender: PropTypes.func,
};
