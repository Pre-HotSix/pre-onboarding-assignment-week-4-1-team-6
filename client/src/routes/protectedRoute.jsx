import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children, isPublic }) => {
  const validation = isPublic || localStorage?.getItem('token');
  if (!validation) {
    return <Navigate to="/login" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isPublic: PropTypes.bool,
};

export default ProtectedRoute;
