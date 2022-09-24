import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { LIMIT, pageUrlUsers } from 'constants';
import { getUsersThunk, deleteUserThunk } from 'redux/modules/users';
import { getUsersPageThunk, patchUserThunk } from 'redux/modules/usersPage';
import { getSingleThunk } from 'redux/modules/singleUser';
import { localTime } from 'constants';
import { basicButton, activeButton } from 'styles/theme';
import { addUserApi } from 'apis/usersApi';

function UserList() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = sessionStorage.getItem('token');
  const users = useSelector(state => state.users.data);
  const userspage = useSelector(state => state.userspage.data);
  const usersetting = useSelector(state => state.usersetting.data);
  const accounts = useSelector(state => state.accounts.data);
  const usersingle = useSelector(state => state.singleuser.data);

  const [hidden, setHidden] = useState('hidden');

  useEffect(() => {
    const value = location.state ? location.state.text: '';
    dispatch(getUsersThunk(token, value));
    dispatch(getUsersPageThunk(token, `${location.pathname}${location.search}`));
    setHidden('hidden');
  }, [location]);

  const pagination = (page) => {
    const value = location.state ? location.state.text: '';
    const queryString = pageUrlUsers(page, value);
    navigate(queryString,  {
      state: {
        text: value
      }
    });
  };

  const pageArr = [];
  for (let i = 1; i <= Math.ceil(users.length / LIMIT); i++) {
    pageArr.push(
      <button 
        key={i} 
        onClick={() => pagination(i)} 
        className={`btn btn-outline btn-circle border-0 ${basicButton} ${location.search.includes(`_page=${i}&_`) ? activeButton: ""}`}
      >
        {i}
      </button>
    );
  };

  const deleteUser = (token, userId) => {
    if (confirm('삭제하시겠습니까?') === true) {
      dispatch(deleteUserThunk(token, userId));
      const value = location.state ? location.state.text: '';
      const queryString = pageUrlUsers(1, value);
      navigate(queryString,  {
        state: {
          text: value
        }
      });
    }
  };

  const formRef = useRef();
  const getData = (token, userId) => {
    formRef.current.reset();
    dispatch(getSingleThunk(token, userId));
    setHidden('');
  };

  const editUser = (e) => {
    e.preventDefault();
    dispatch(patchUserThunk(token, usersingle.id, {
      name: e.target.name.value,
      phone_number: e.target.phonenumber.value,
    }));

    e.target.reset();
    setHidden('hidden');
  };

  const addUser = async (e) => {
    e.preventDefault();
    if (confirm('추가하시겠습니까?') === true) {
      const newUser = {
        "email": e.target.email.value,
        "password": e.target.password.value,
        "name": e.target.name.value,
        "phone_number": e.target.phonenumber.value,
        "last_login": new Date().toISOString(),
        "created_at": new Date().toISOString()
      };
      
      await addUserApi(newUser);
      const value = location.state ? location.state.text: '';
      const queryString = pageUrlUsers(1, value);
      navigate(queryString,  {
        state: {
          text: value
        }
      });

      e.target.reset();
    }
  };

  const dataTitle = () => {
    const titles = [ '고객명', '계좌수', '이메일', '성별', '생년월일', '휴대폰 번호', '최근로그인', '혜택 수신 동의', '활성화', '임직원', '가입일', ' ', ' '];
    return titles.map((item, index) => {
      return <th key={index}>{item}</th>
    });
  };

  const toDetail = (userId) => {
    navigate(`/users/${userId}`);
  };

  const usersData = () => {
    return userspage.map((item, index) => {
      const findUser = usersetting.filter((user) => {
        return (user.uuid === item.uuid);
      });

      const settingData = (data) => {
        if (findUser.length === 0) return null
        return (findUser[0][data]) ? 'O': 'X';
      };

      const findAccount = accounts.filter((account) => {
        return (account.user_id === item.id);
      });

      const hideName = (name) => {
        if (!name) return null;
        else if (name.length < 3) {
          return name[0] + '*';
        };
      
        const nameArr = [];
        for (let i = 0; i < name.length; i++) {
          if ((i === 0) || (i === name.length - 1)) nameArr.push(name[i]);
          else nameArr.push('*');
        };
      
        return nameArr.join('');
      };

      const hidePhoneNumber = (phonenumber) => {
        if (!phonenumber) return null;
        const phoneArr = (phonenumber).split('-');
        const masking = phoneArr.map((num, index) => {
          if (index === 1 && num.length === 4) return '****';
          else if (index === 1 && num.length === 3) return '***';
          return num;
        })

        return masking.join('-');
      };

      return (
        <tr key={index} className="border-b-2 border-solid border-gray-100">
          <th className="cursor-pointer" onClick={() => toDetail(item.id)}>{hideName(item.name)}</th>
          <td>{findAccount.length}</td>
          <td>{item.email}</td>
          <td>{item.gender_origin}</td>
          <td>{localTime(item.birth_date)}</td>
          <td>{hidePhoneNumber(item.phone_number)}</td>
          <td>{localTime(item.last_login)}</td>
          <td>{settingData('allow_marketing_push')}</td>
          <td>{settingData('is_active')}</td>
          <td>{settingData('is_staff')}</td>
          <td>{localTime(item.created_at)}</td>
          <td className="cursor-pointer" onClick={() => getData(token, item.id)}>수정</td>
          <td className="cursor-pointer" onClick={() => deleteUser(token, item.id)}>삭제</td>
        </tr>
      )
    })
  };

  // 활성화 여부
  // 임직원 여부
  // const filtering = (e) => {
  //   console.log(e.target.value);
  //   e.preventDefault();
  //   const value = e.target.search.value;


  //   navigate(chooseUrl(1, value), {
  //     state: {
  //       text: value
  //     }
  //   });
  // };


  return (
    <div className="px-4 py-8">
      {/* <select defaultValue={""} onChange={filtering} className="select select-bordered select-sm w-full max-w-xs">
        <option value="">전체</option>
        <option value="?is_active=true">활성화 O</option>
        <option value="?is_staff=true">임직원 O</option>
      </select> */}

      <form onSubmit={addUser} className="pb-6 text-right">
        <input type="text" name="email" placeholder="이메일" className="input input-bordered input-sm mr-4" required />
        <input type="password" name="password" placeholder="비밀번호" className="input input-bordered input-sm mr-4" required />
        <input type="text" name="name" placeholder="이름" className="input input-bordered input-sm mr-4" required />
        <input type="text" name="phonenumber" placeholder="휴대폰 번호" className="input input-bordered input-sm mr-4" required />
        <button type="submit" name="submit" className="btn btn-outline btn-sm border-0">추가</button>
      </form>

      <form onSubmit={editUser} className={`pb-6 text-right ${hidden}`} ref={formRef}>
        <input type="text" name="name" placeholder="이름" className="input input-bordered input-sm mr-4" defaultValue={usersingle.name} required />
        <input type="text" name="phonenumber" placeholder="휴대폰 번호" className="input input-bordered input-sm mr-4" defaultValue={usersingle.phone_number} required />
        <button type="submit" name="submit" className="btn btn-outline btn-sm border-0">수정</button>
      </form>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead><tr>{dataTitle()}</tr></thead> 
          <tbody>{usersData()}</tbody> 
          <tfoot><tr>{dataTitle()}</tr></tfoot>
        </table>
      </div>
      
      <div className="flex justify-center items-center pt-12">
        <div className="">{pageArr}</div>
      </div>
    </div>
  );
}

export default UserList;