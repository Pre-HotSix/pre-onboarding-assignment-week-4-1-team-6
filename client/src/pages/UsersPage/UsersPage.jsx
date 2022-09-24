import MainLayout from 'components/Layout/MainLayout';
import React from 'react';
import { useEffect } from 'react';
import { userInfoThunk } from 'store/modules/userInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getPaginationThunk } from 'store/modules/paginationInfo';
import UserInfo from './UserInfo';

const UsersPage = () => {
  const dispatch = useDispatch();
  const paginationInfo = useSelector((state) => state.paginationInfo.data);

  const a = [1, 2];
  console.log(typeof a);

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(userInfoThunk(token));
    dispatch(getPaginationThunk(1, 'user', token));
  }, []);

  // useEffect(()=>{

  // },[paginationInfo])

  const main = () => {
    return (
      <div className="overflow-scroll">
        <div>
          {paginationInfo?.map((item) => (
            <UserInfo item={item} key={item.id}></UserInfo>
          ))}
        </div>
      </div>
    );
  };

  return <MainLayout mainRender={main}></MainLayout>;
};

export default UsersPage;
