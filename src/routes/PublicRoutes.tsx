import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../container/auth/login/Login'
import Signup from '../container/auth/signup/SignUp'
import ForgotPassword from '../container/auth/forgotPassword/ForgotPassword'
import ResetPassword from '../container/auth/resetPassword/ResetPassword'
import OtpVerify from '../container/auth/otpVerify/OtpVerify'
import ChangePassword from '../container/auth/changePassword/ChangePassword'
import EmployeeList from '../container/pages/employee/employeeList/EmployeeList'
import ProtectedRoutes from './ProtectedRoutes'
import { appRoutes } from './appRoutes'

const PublicRoutes = () => {
 
  return (
    <>
    <Routes>
        <Route  path={appRoutes.LOGIN} element={<Login/>}  />
        <Route  path={appRoutes.SIGNUP} element={<Signup/>}  />
        <Route  path={appRoutes.FORGOT_PASSWORD} element={<ForgotPassword/>}  />
        <Route  path={appRoutes.RESET_PASSWORD} element={<ResetPassword/>}  />
        <Route  path={appRoutes.OTP_VERIFY} element={<OtpVerify/>}  />
        <Route  path={appRoutes.CHANGE_PASSWORD} element={<ChangePassword/>}  />
        <Route element={<ProtectedRoutes/>}>
        <Route  path={appRoutes.EMPLOYEE_LIST} element={<EmployeeList/>}  />
        </Route>
    </Routes>
    </>
  )
}

export default PublicRoutes