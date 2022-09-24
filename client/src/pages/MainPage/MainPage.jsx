import React from 'react';
import { Breadcrumb } from 'antd';
import MainLayout from 'components/Layout/MainLayout';

const MainPage = () => {
  const main = () => {
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', height: 360 }}>
          Bill is a cat.
        </div>
      </div>
    );
  };
  return <MainLayout mainRender={main}></MainLayout>;
};

export default MainPage;
