// import React, { useEffect } from 'react'
// import DataService from '../config/DataService';
// import { RootState } from '../redux/rootReducer';
// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';

// // const AdminProtectedRoutes = () => {
// //   const { tokenFromRedux } = useSelector((state: RootState) => state.user);
// //   const tokenFromLocalStorage = localStorage.getItem('adminToken');


// //   const isValidToken = (userToken: string | null) => {
// //     if (!userToken) {
// //       return false;
// //     }

// //     // const finalToken = userToken || tokenFromLocalStorage;
// //     DataService.defaults.headers.common.auth = userToken;
// //     return true;
// //   };
// //   return isValidToken(tokenFromLocalStorage) ? <Outlet /> : <Navigate to="/" />;
// // }
  
// // export default AdminProtectedRoutes


// const isValidToken = (adminToken: string | null) => {
//   if (!adminToken) {
//     return false;
//   }
//   // Set the token in the request headers
//   // DataService.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
//   DataService.defaults.headers.common.auth = adminToken;
//   return true;
// };

// const AdminProtectedRoutes = () => {
//   const { tokenFromRedux } = useSelector((state: RootState) => state.user);
//   const tokenFromLocalStorage = localStorage.getItem('adminToken');

//   return isValidToken(tokenFromLocalStorage) ? <Outlet /> : <Navigate to="/admin/login" />;
// };

// export default AdminProtectedRoutes;

import React from 'react';
import DataService from '../config/DataService';
import { RootState } from '../redux/rootReducer';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const isValidToken = (adminToken:string|null) => {
  if (!adminToken) {
    return false;
  }

  // Set the token in the request headers
  DataService.defaults.headers.common.auth = adminToken;
  return true;
};

const AdminProtectedRoutes = () => {
  const { tokenFromRedux } = useSelector((state: RootState) => state.user);
  const tokenFromLocalStorage = localStorage.getItem('adminToken');

  // If logged in, allow access to the protected routes
  if (isValidToken(tokenFromLocalStorage) || isValidToken(tokenFromRedux)) {
    return <Outlet />;
  }

  // If not logged in, redirect to the login page
  return <Navigate to="/admin/login" />;
};

export default AdminProtectedRoutes;

