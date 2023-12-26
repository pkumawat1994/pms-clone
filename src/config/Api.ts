let ADMIN = "admin";
let EMPLOYEE = "employee";
let COMMON = "common";

export const API = {
  UPDATE_TASK_STATUS:`${COMMON}/update-status`,
  ADMIN_LOGIN: `${ADMIN}/login`,
  USER_LOGIN: `${EMPLOYEE}/login`,
  ADMIN_FORGOT_PASSWORD: `/${ADMIN}/forgot-password`,
  USER_FORGOT_PASSWORD: `/${EMPLOYEE}/forgot-password`,
  USER_OTP_VERIFY:`${EMPLOYEE}/verify-otp`,
  ADMIN_OTP_VERIFY: `${ADMIN}/verify-otp`,
  ADMIN_RESET_PASSWORD: `${ADMIN}/reset-password`,
  USER_RESET_PASSWORD: `${EMPLOYEE}/reset-password`,

  GET_EMPLIST: `${EMPLOYEE}/get-all-employees`,
  DELETE_EMP: `${EMPLOYEE}/delete-employee`,
  GET_TASK_LIST:`${COMMON}/get-all-task`,
  DELETE_TASK:`${COMMON}/delete-task`,
  ADD_TASK:`${COMMON}/create-task`,
  
  GET_ROLELIST:`${COMMON}/get-role-list`,
// user----


USER_REGISTER:`${EMPLOYEE}/register`,


//task-----
// UPDATE_TASK_STATUS:`${COMMON}/update-status`,
  

  // -------

  UPDATE_EMPLIST: `${ADMIN}/emp-list`,
  CHANGE_PASSWORD: `${EMPLOYEE}/change-password`,
  ADD_EMP: `${EMPLOYEE}/add-emp`,
};
