import { getUsers, login } from 'apis';
import { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { getParameter } from 'utils/GetParams';
import { maskingName, maskingPhone } from 'utils/Masking';
import { setToken } from 'utils/Storage';
import UserInfo from './UserInfo';
import { Table, Button } from 'antd';

export default function Users() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <Link to={`?q=${text}`}>{maskingName(text)}</Link>,
    },
    {
      title: 'Phone',
      dataIndex: 'phone_number',
      render: (phone) => maskingPhone(phone),
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

  const params = getParameter();
  const [users, setUsers] = useState([]);
  const { mutate, status } = useMutation(
    ({ email, password }) => login(email, password),
    {
      onSuccess: ({ data }) => {
        setToken(data.accessToken);
      },
      onError: (error) => {
        alert(error.response?.data);
      },
    }
  );
  const { isLoading, isError, error } = useQuery('users', getUsers, {
    refetchOnWindowFocus: false,
    retry: 1,
    onSuccess: ({ data }) => {
      console.log('success', data);
      setUsers([...data]);
    },
    onError: (e) => {
      console.log(e.response.data);
      mutate({ email: 'dndud@test.com', password: '1234' });
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return !params ? (
    <Table rowKey={'id'} columns={columns} dataSource={users} />
  ) : (
    // <ul>
    //   {users.map(
    //     (user) =>
    //       user.name && (
    //         <li key={user.id}>
    //           <Link to={`?q=${user.name}`}>{maskingName(user.name)}</Link>
    //           {maskingPhone(user.phone_number)}
    //         </li>
    //       )
    //   )}
    // </ul>
    <UserInfo params={params} />
  );
}
