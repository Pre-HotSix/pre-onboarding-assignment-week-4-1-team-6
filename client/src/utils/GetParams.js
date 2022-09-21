import { useLocation } from 'react-router-dom';

export const getParameter = () => {
  const { pathname, search } = useLocation();
  return { pathname, search };
};
