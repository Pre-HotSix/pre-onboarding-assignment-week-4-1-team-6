import { getUserData } from 'apis';
import { useMutation, useQueries } from 'react-query';
import { Pagination, Table, Input } from 'antd';
import { useRecoilState } from 'recoil';
import { allUserState, usersState } from 'recoil/user';
import { USER_TABLE_COLUMNS } from 'constants';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { userSettingState } from 'recoil/userSetting';

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
  const [userSetting] = useRecoilState(userSettingState);
  const [users, setUsers] = useRecoilState(usersState);
  const { mutate } = useMutation((name) => login(name), {
    onSuccess: ({ data }) => {
      console.log('이름 업데이트 ==> ', data);
      alert('이름이 업데이트 되었습니다.');
    },
    onError: (error) => {
      alert(error.response?.data);
    },
  });
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

  return (
    <>
      <Input.Search
        allowClear
        placeholder="이름을 입력해주세요."
        className="mb-4 w-2/5"
        onPressEnter={handleSearch}
      />
      <Table
        rowKey={'id'}
        columns={USER_TABLE_COLUMNS()}
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
