import React, { useContext } from 'react';
import AuthContext  from './AuthContext';
import { Navigate, Route, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {

  const useAuth = () => {
    return useContext(AuthContext);
  };

  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute
