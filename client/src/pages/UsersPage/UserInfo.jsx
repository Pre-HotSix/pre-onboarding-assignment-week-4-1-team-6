import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

const UserInfo = ({ item }) => {
  console.log(item);
  const maskingName = (strName) => {
    if (strName.length > 2) {
      const originName = strName.split('');
      originName.forEach(function (name, i) {
        if (i === 0 || i === originName.length - 1) return;
        originName[i] = '*';
      });
      const joinName = originName.join();
      return joinName.replace(/,/g, '');
    } else {
      var pattern = /.$/; // 정규식
      return strName.replace(pattern, '*');
    }
  };
  const dataSource = [
    {
      name: item.name,
      email: item.email,
      gender_origin: item.gender_origin,
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Gender_origin',
      dataIndex: 'gender_origin',
      key: 'gender_origin',
    },
  ];

  return (
    <div className="p-4 border-solid border-0 border-b border-blue-900">
      <div>
        <div></div>
      </div>
      <Table dataSource={dataSource} columns={columns}></Table>
    </div>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  item: PropTypes.any,
};
