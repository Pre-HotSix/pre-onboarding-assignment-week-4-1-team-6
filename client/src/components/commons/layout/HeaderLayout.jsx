import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import PropTypes from 'prop-types';

HeaderLayout.propTypes = {
  collapsed: PropTypes.bool,
  handleToggle: PropTypes.func,
};

export default function HeaderLayout({ collapsed, handleToggle }) {
  return (
    <Header className="bg-white p-0">
      {collapsed ? (
        <MenuUnfoldOutlined className="text-lg" onClick={handleToggle} />
      ) : (
        <MenuFoldOutlined className="text-lg" onClick={handleToggle} />
      )}
    </Header>
  );
}
