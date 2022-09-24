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
  const [createMode, setCreateMode] = useState(false);
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

  const createNewUser = (e) => {
    e.preventDefault();
    console.log(e);
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      phone_number: e.target[3].value,
      last_login: new Date().toISOString(),
      created_at: new Date().toISOString(),
    };
    setCreateMode(false);
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
      <Button className="ml-5" onClick={() => setCreateMode(true)}>
        신규 사용자 추가
      </Button>
      {createMode ? (
        <form onSubmit={createNewUser} className="mb-4">
          <input
            className="border text-xs p-2 mr-4"
            type={'text'}
            placeholder="이름"
          ></input>
          <input
            className="border text-xs p-2 mr-4"
            type={'text'}
            placeholder="이메일"
          ></input>
          <input
            type={'text'}
            placeholder="비밀번호"
            className="border text-xs p-2 mr-4"
          ></input>
          <input
            type={'text'}
            placeholder="휴대폰번호"
            className="border text-xs p-2 mr-4"
          ></input>
          <button className="ml-2 rounded p-2 hover:bg-sky-200 border">
            제출
          </button>
        </form>
      ) : (
        ''
      )}
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
