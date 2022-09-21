import { Layout, Breadcrumb } from 'antd';
import { Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import FooterLayout from './FooterLayout';
import HeaderLayout from './HeaderLayout';
import SiderLayout from './SiderLayout';
import { getToken } from 'utils/Storage';

const { Content } = Layout;

export default function LayoutContainer() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return getToken() ? (
    <Layout className="h-full flex flex-row">
      <SiderLayout collapsed={collapsed} />
      <Layout>
        <HeaderLayout collapsed={collapsed} handleToggle={toggleCollapse} />
        <Content className="mx-4">
          <Breadcrumb className="my-2" />
          <div className="p-4 bg-white overflow-auto">
            <Outlet />
          </div>
        </Content>
        <FooterLayout />
      </Layout>
    </Layout>
  ) : <Navigate replace to={'/'} />
}
