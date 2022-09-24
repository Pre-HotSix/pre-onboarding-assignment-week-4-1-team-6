import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LIMIT } from 'apis/userInfo';
import styled from 'styled-components';
import { paginationAction } from 'store/modules/pagination';
import { getPaginationThunk } from 'store/modules/paginationInfo';

const Pagination = () => {
  const pageArray = [];
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.userInfo.data);
  const pagination = useSelector((state) => state.pagination);

  const handlePagination = (i) => {
    dispatch(paginationAction(i));
    dispatch(getPaginationThunk(i));
  };

  for (let i = 1; i <= Math.ceil(userInfos?.length / LIMIT); i++) {
    pageArray.push(
      <Page
        active={i === pagination}
        key={i}
        onClick={() => handlePagination(i)}
      >
        {i}
      </Page>
    );
  }
  return <PageListStyle>{pageArray}</PageListStyle>;
};

export default Pagination;

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
`;
