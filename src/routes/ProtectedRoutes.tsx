import React, { useEffect } from 'react'
import DataService from '../config/DataService';
import { RootState } from '../redux/rootReducer';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { tokenFromRedux } = useSelector((state: RootState) => state.user);
  const tokenFromLocalStorage = localStorage.getItem('userToken');


  const isValidToken = (userToken: string | null) => {
    if (!userToken && tokenFromLocalStorage === null) {
      return false;
    }

    const finalToken = userToken || tokenFromLocalStorage;
    DataService.defaults.headers.common.auth = finalToken;
    return true;
  };
  return isValidToken(tokenFromRedux) ? <Outlet /> : <Navigate to="/" />;
}
  
export default ProtectedRoutes




