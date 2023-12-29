import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation()

  if (isLoggedIn) {
    return <Navigate  to={location.state?.from || '/'} />;
  }
  return children;
};
export default PublicRoute;
