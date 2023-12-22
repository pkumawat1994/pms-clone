import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../container/auth/adminAuth/login/Login'

import ForgotPassword from '../container/auth/adminAuth/forgotPassword/ForgotPassword'
import ResetPassword from '../container/auth/adminAuth/resetPassword/ResetPassword'
import OtpVerify from '../container/auth/adminAuth/otpVerify/OtpVerify'
import ChangePassword from '../container/auth/adminAuth/changePassword/ChangePassword'
import ProtectedRoutes from './ProtectedRoutes'
import { appRoutes } from './appRoutes'
import AdminDashboard from '../components/admin/dashboard/AdminDashboard'
import AdminLogin from '../container/auth/userAuth/login/UserLogin'
import Signup from '../container/pages/admin/employee/addEmployee/SignUp'

// import UserLogin from '../container/auth/userAuth/login/UserLogin'
// import Signup from '../container/auth/userAuth/signup/SignUp'

const PublicRoutes = () => {
 
  return (
    <>
    <Routes>
    {/* <Route  path={appRoutes.USER_LOGIN} element={<UserLogin/>}  /> */}
        <Route  path={appRoutes.FORGOT_PASSWORD} element={<ForgotPassword/>}  />
        <Route  path={appRoutes.RESET_PASSWORD} element={<ResetPassword/>}  />
        <Route  path={appRoutes.ADMIN_OTP_VERIFY} element={<OtpVerify/>}  />
        <Route  path={appRoutes.CHANGE_PASSWORD} element={<ChangePassword/>}  />
        <Route  path={appRoutes.ADMIN_LOGIN} element={<Login/>}  />
        <Route  path={appRoutes.USER_LOGIN} element={<AdminLogin/>}  />

        <Route path="dashboard" element={<AdminDashboard />}>
        <Route  path={appRoutes.SIGNUP} element={<Signup/>}  />
       


        </Route>

        
        {/* <Route element={<UserPrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<Home />} />
            <Route path="add-subAdmin" element={<AddSubAdmin />} />
            <Route path="edit-profile" element={<EditProfile />} />

            <Route path="add-team" element={<AddTeam />} /> 
            <Route path="team-list" element={<TeamList />} />
            </Route>
            </Route> */}

            
        {/* <Route element={<ProtectedRoutes/>}>
        <Route  path={appRoutes.EMPLOYEE_LIST} element={<EmployeeList/>}  />
        </Route> */}
    </Routes>
    </>
  )
}

export default PublicRoutes