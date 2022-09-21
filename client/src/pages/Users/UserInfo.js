import { getUserInfo } from 'apis';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';

UserInfo.propTypes = {
  params: PropTypes.string.isRequired,
};
export default function UserInfo({ params }) {
  const name = new URLSearchParams(params).get('q');
  const { isLoading, isError, error } = useQuery(
    `users/${name}`,
    () => getUserInfo(params),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: ({data}) => {
        console.log('user info', data);
      },
      onError: (e) => {
        console.log(e.message);
      },
    }
  );
  return <div>hi</div>;
}
