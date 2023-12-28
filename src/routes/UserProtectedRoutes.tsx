import React, { useEffect } from 'react'
import DataService from '../config/DataService';
import { RootState } from '../redux/rootReducer';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const isValidToken = (userToken: string | null) => {
    if (!userToken) {
      return false;
    }
  
    // TODO: Implement token expiration check if applicable
  
    // Set the token in the request headers
    DataService.defaults.headers.common.auth = userToken;
    
    return true;
  };
  
  
  
const UserProtectedRoutes = () => {
    const { tokenFromRedux } = useSelector((state: RootState) => state.user);
    const tokenFromLocalStorage = localStorage.getItem('userToken');
  
    return isValidToken(tokenFromLocalStorage) ? <Outlet /> : <Navigate to="/" />;
  };
  
  export default UserProtectedRoutes;


