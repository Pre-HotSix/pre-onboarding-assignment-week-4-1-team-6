import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import PropTypes from 'prop-types';
import { getParameter } from 'utils/GetParams';

HeaderLayout.propTypes = {
  collapsed: PropTypes.bool,
  handleToggle: PropTypes.func,
};

export default function HeaderLayout({ collapsed, handleToggle }) {
  const paramData = getParameter();
  return (
    <Header className="bg-white p-0 pl-5">
      {collapsed ? (
        <MenuUnfoldOutlined
          className="text-lg align-baseline"
          onClick={handleToggle}
        />
      ) : (
        <MenuFoldOutlined
          className="text-lg align-baseline"
          onClick={handleToggle}
        />
      )}
      {paramData.pathname==='/accounts' && <span className="ml-10">계좌목록</span>}
      {paramData.pathname==='/users' && <span className="ml-10">사용자목록</span>}
    </Header>
  );
}
