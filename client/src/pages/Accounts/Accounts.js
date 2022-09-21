import { getAccountData, getAccounts, getUserData, getUsers } from 'apis';
import { useQueries } from 'react-query';
import { Pagination, Table } from 'antd';
import { useRecoilState } from 'recoil';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { accountsState } from 'recoil/accounts';
import { ACCOUNT_TABLE_COLUMNS } from 'constants';
import { removeToken } from 'utils/Storage';

Accounts.propTypes = {
  params: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default function Accounts({ params, pathname }) {
  const navigate = useNavigate();
  const search = new URLSearchParams(params);
  const limit = search.get('_limit');
  const page = search.get('_page');
  const [total, setTotal] = useState(0);
  const [accounts, setAccounts] = useRecoilState(accountsState);
  const [getAllUser, getUsersPage] = useQueries([
    {
      queryKey: ['all_accounts'],
      queryFn: () => getAccounts(),
      onSuccess: ({ data }) => {
        setTotal(data.length);
      },
      onError: (error) => {
        console.log('Accounts.js => ', error);
        alert('재로그인을 해주세요.');
        removeToken();
        navigate('/');
      },
    },
    {
      queryKey: ['accounts', params],
      queryFn: () => getAccountData(params),
      onSuccess: ({ data }) => {
        setAccounts([...data]);
      },
      onError: (error) => {
        console.log('Accounts.js user data page => ', error);
      },
    },
  ]);

  const handlePagination = (clickPage) => {
    navigate(`${pathname}?_page=${clickPage}&_limit=${limit}`);
  };

  return (
    <>
      <Table
        rowKey={'uuid'}
        columns={ACCOUNT_TABLE_COLUMNS}
        dataSource={accounts}
        pagination={false}
      />
      <Pagination
        className="m-5 text-center"
        defaultCurrent={page}
        total={total}
        defaultPageSize={limit}
        onChange={handlePagination}
        responsive
        showSizeChanger={false}
      />
    </>
  );
}
