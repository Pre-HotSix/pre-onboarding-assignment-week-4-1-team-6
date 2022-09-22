import { getAccounts, getUsers, getUserSetting } from 'apis';
import { useQueries } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { allAccountState } from 'recoil/account';
import { allUserState } from 'recoil/user';
import { userSettingState } from 'recoil/userSetting';
import { removeToken } from 'utils/Storage';

export default function useGetAllData() {
  const navigate = useNavigate();
  const setAllUser = useSetRecoilState(allUserState);
  const setAllAccount = useSetRecoilState(allAccountState);
  const setUserSetting = useSetRecoilState(userSettingState);
  const [getAllUser] = useQueries([
    {
      queryKey: ['all_users'],
      queryFn: () => getUsers(),
      staleTime: 10000,
      retry: 1,
      onSuccess: ({ data }) => {
        const filterData = data.filter((user) => user.name !== undefined);
        setAllUser({
          total: filterData.length,
          data: filterData,
        });
      },
      onError: (error) => {
        console.log('From Get Users => ', error);
        alert('재로그인을 해주세요.');
        removeToken();
        navigate('/');
      },
    },
    {
      queryKey: ['all_accounts'],
      queryFn: () => getAccounts(),
      staleTime: 10000,
      retry: 1,
      onSuccess: ({ data }) => {
        const filterData = data.filter((account) => account.uuid !== undefined);
        setAllAccount({
          total: filterData.length,
          data: filterData,
        });
      },
      onError: (error) => {
        console.log('From Get Accounts => ', error);
      },
    },
    {
      queryKey: ['user_setting'],
      queryFn: () => getUserSetting(),
      staleTime: 10000,
      onSuccess: ({ data }) => {
        setUserSetting([...data]);
      },
      onError: (error) => {
        console.log('From Get UserSetting => ', error);
      },
    },
  ]);
}
