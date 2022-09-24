import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserInfo from './UsersPage/UserInfo';

const Test = () => {
  const a = [1, 2, 3, 4, 5];
  return (
    <div>
      di
      {a.map((item) => (
        <UserInfo key={item} item={item}></UserInfo>
      ))}
    </div>
  );
};

export default Test;
