import { useLocation } from 'react-router-dom';

export const getParameter = () => {
  const location = useLocation();
  return location.search;
};
