import {
  getUserData,
  deleteUser,
  editUserName,
  deleteAccount,
  createUsers,
} from 'apis';
import { useMutation, useQueries } from 'react-query';
import { Pagination, Table, Input, Space, Button } from 'antd';
import { useRecoilState } from 'recoil';
import { allUserState, usersState } from 'recoil/user';
import { USER_TABLE_COLUMNS } from 'constants';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { allAccountState } from 'recoil/account';

Users.propTypes = {
  params: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  limit: PropTypes.string.isRequired,
  searchName: PropTypes.string.isRequired,
};

export default function Users({ params, pathname, page, limit, searchName }) {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [allUser] = useRecoilState(allUserState);
  const [allAccount] = useRecoilState(allAccountState);
  const [users, setUsers] = useRecoilState(usersState);
  const { mutate: createMutate } = useMutation(
    ({ data }) => createUsers(data),
    {
      onSuccess: () => {
        getUsersPage.refetch();
      },
      onError: (error) => {
        alert(error.response?.data);
      },
    }
  );
  const { mutate: editMutate } = useMutation(
    ({ id, name }) => editUserName(id, name),
    {
      onSuccess: () => {
        getUsersPage.refetch();
      },
      onError: (error) => {
        alert(error.response?.data);
      },
    }
  );
  const { mutate: deleteMutate } = useMutation((id) => deleteUser(id), {
    onSuccess: () => {
      getUsersPage.refetch();
    },
    onError: (error) => {
      alert(error.response?.data);
    },
  });
  const { mutate: deleteAccountMutate } = useMutation(
    (id) => deleteAccount(id),
    {
      onError: (error) => {
        alert(error.response?.data);
      },
    }
  );
  const [getUsersPage] = useQueries([
    {
      queryKey: ['users', params],
      queryFn: () => getUserData(params),
      onSuccess: ({ data }) => {
        if (searchName.length > 0) setTotal(data.length);
        setUsers([...data.filter((user) => user.name !== undefined)]);
      },
      onError: (error) => {
        console.log('Users.js user data page => ', error);
      },
    },
  ]);

  const handlePagination = (clickPage) => {
    navigate(`${pathname}?_page=${clickPage}&_limit=${limit}&q=${searchName}`);
  };

  const handleSearch = ({ target }) => {
    const value = target.value;
    navigate(`${pathname}?_page=${page}&_limit=${limit}&q=${value}`);
  };

  const handleDelete = (id) => {
    deleteMutate(id);
    const filterData = allAccount.data.filter((data) => data.user_id === id);
    filterData.map((data) => {
      deleteAccountMutate(data.id);
    });
  };

  const handleEdit = (id, name) => {
    editMutate({ id, name });
  };

  const handleCreate = () => {
    const dummy_data = Math.random().toString(36).substr(2, 7);
    const data = {
      uuid: '899979f6-4539-41ed-aa15-99088367f985',
      photo:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/968.jpg',
      name: dummy_data,
      email: dummy_data + '@test.com',
      password: '1234',
      age: 29,
      gender_origin: 4,
      birth_date: '1957-06-28T16:44:00.871Z',
      phone_number: '010-0000-0000',
      address: 'Somalia 용산시',
      detail_address: '94895 구로읍 Suite 381',
      last_login: '2022-02-23T20:27:47.664Z',
      created_at: '2021-02-01T03:34:01.810Z',
      updated_at: '2020-10-22T11:52:37.629Z',
    };
    createMutate({ data });
  };

  return (
    <>
      <Input.Search
        allowClear
        placeholder="이름을 입력해주세요."
        className="mb-4 w-2/5"
        onPressEnter={handleSearch}
      />
      <Button className="ml-5" onClick={handleCreate}>
        테스트 계정 만들기
      </Button>
      <Table
        rowKey={'id'}
        columns={USER_TABLE_COLUMNS(handleEdit, handleDelete)}
        dataSource={users}
        pagination={false}
        scroll={{ x: 1300 }}
        bordered
      />
      <Pagination
        className="m-5 text-center"
        current={+page}
        total={searchName.length > 0 ? total : allUser.total}
        pageSize={+limit}
        onChange={handlePagination}
        responsive
        showSizeChanger={false}
      />
    </>
  );
}
