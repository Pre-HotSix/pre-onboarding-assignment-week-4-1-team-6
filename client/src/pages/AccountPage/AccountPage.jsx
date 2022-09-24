import MainLayout from 'components/Layout/MainLayout';
import React from 'react';
import { useEffect } from 'react';
import { userInfoThunk } from 'store/modules/userInfo';
import { useDispatch, useSelector } from 'react-redux';
import { paginationAction } from 'store/modules/pagination';
import { getPaginationThunk } from 'store/modules/paginationInfo';

const AccountPage = () => {
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.userInfo.data);
  const pagination = useSelector((state) => state.paginationInfo);

  useEffect(() => {
    dispatch(userInfoThunk(localStorage.getItem('token')));
  }, []);

  const main = () => {
    return <div>account라고합니다만</div>;
  };

  return <MainLayout mainRender={main}></MainLayout>;
};

export default AccountPage;
