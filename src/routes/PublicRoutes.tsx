import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from '../container/auth/userAuth/login/UserLogin'
import AdminLogin from '../container/auth/adminAuth/login/AdminLogin'
import ForgotPassword from '../container/auth/adminAuth/forgotPassword/ForgotPassword'
import ResetPassword from '../container/auth/adminAuth/resetPassword/ResetPassword'
import OtpVerify from '../container/auth/adminAuth/otpVerify/OtpVerify'
import ChangePassword from '../container/auth/adminAuth/changePassword/ChangePassword'
import { appRoutes } from './appRoutes'
import AdminDashboard from '../components/admin/dashboard/AdminDashboard'
import Signup from '../container/pages/admin/employee/addEmployee/AddEmployee'
import EmployeeList from '../container/pages/admin/employee/employeeList/EmployeeList'
import TaskList from '../container/pages/admin/task/taskList/TaskList'
import AddTask from '../container/pages/admin/task/addTask/AddTask'
import UserForgotPassword from '../container/auth/userAuth/UserForgotPassword/UserForgotPassword'
import UserOtpVerify from '../container/auth/userAuth/userOtpVerify/UserOtpVerify'
import UserResetPassword from '../container/auth/userAuth/userResetPassword/UserResetPassword'
import UserDashboard from '../components/user/userDashboard/UserDashboard'
import UserTaskList from '../container/pages/user/task/userTaskList/UserTaskList'
import TaskDetail from '../container/pages/user/task/taskDetail/TaskDetail'
import UserProfileUpdate from '../container/auth/userAuth/profileUpdate/UserProfileUpdate'
import UserTaskEdit from '../container/pages/user/task/updateTask/UserTaskEdit'
import UserChangePassword from '../container/auth/userAuth/UserChangePassword/UserChangePassword'
import UserProtectedRoutes from './UserProtectedRoutes'
import AdminProtectedRoutes from './AdminProtectedRoutes'


const PublicRoutes = () => {
  const [isUserAuthenticated, setUserAuthenticated] = useState(false);


  return (
    <>
      <Routes>
        <Route path={appRoutes.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={appRoutes.USER_FORGOT_PASSWORD} element={<UserForgotPassword />} />
        <Route path={appRoutes.RESET_PASSWORD} element={<ResetPassword />} />
        <Route path={appRoutes.USER_RESET_PASSWORD} element={<UserResetPassword />} />
        <Route path={appRoutes.ADMIN_OTP_VERIFY} element={<OtpVerify />} />
        <Route path={appRoutes.EMPLOYEE_OTP_VERIFY} element={<UserOtpVerify />} />
        <Route path={appRoutes.CHANGE_PASSWORD} element={<ChangePassword />} />
        <Route path={appRoutes.ADMIN_LOGIN} element={<AdminLogin  />} />
        <Route path={appRoutes.USER_LOGIN} element={<UserLogin setUserAuthenticated={setUserAuthenticated} />} />

        <Route element={<AdminProtectedRoutes />}>
          <Route path="admin/dashboard" element={<AdminDashboard />}>
            <Route path={appRoutes.ADD_EMPLOYEE} element={<Signup />} />
            <Route path={appRoutes.EMPLOYEE_LIST} element={<EmployeeList />} />
            <Route path={appRoutes.TASK_LIST} element={<TaskList />} />
            <Route path={appRoutes.ADD_TASK} element={<AddTask />} />
          </Route>
        </Route>

        <Route element={<UserProtectedRoutes />}>
          <Route path="user/dashboard" element={<UserDashboard />}>
            <Route path={appRoutes.TASK_LIST} element={<UserTaskList />} />
            <Route path={appRoutes.USER_TASK_DETAIL} element={<TaskDetail />} />
            <Route path={appRoutes.USER_UPDATE_PROFILE} element={<UserProfileUpdate />} />
            <Route path={appRoutes.USER_CHANGE_PASSWORD} element={<UserChangePassword />} />
            <Route path={appRoutes.USER_TASK_EDIT} element={<UserTaskEdit />} />
          </Route>
        </Route>


        {/* <Route element={<ProtectedRoutes/>}>
        <Route  path={appRoutes.EMPLOYEE_LIST} element={<EmployeeList/>}  />
        </Route> */}
      </Routes>
    </>
  )
}

export default PublicRoutes