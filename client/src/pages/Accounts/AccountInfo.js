import { getUserData } from 'apis';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { userState } from 'recoil/user';

UserInfo.propTypes = {
  params: PropTypes.string.isRequired,
};
export default function UserInfo({ params }) {
  const [user, setUser] = useRecoilState(userState);
  const { isLoading, isError, error } = useQuery(
    ['users', params],
    () => getUserData(params),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: ({ data }) => {
        setUser({ ...data[0] });
      },
      onError: (e) => {
        console.log(e.message);
      },
    }
  );
  return <div>hi</div>;
}
