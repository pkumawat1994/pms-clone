let ADMIN = "admin";
let EMPLOYEE = "employee";
let COMMON = "common";

export const API = {
  ADMIN_LOGIN: `${ADMIN}/login`,
  GET_ROLELIST:`${EMPLOYEE}/get-role-list`,
  ADMIN_FORGOT_PASSWORD: `/${ADMIN}/forgot-password`,
  ADMIN_OTP_VERIFY: `${ADMIN}/verify-otp`,
  ADMIN_RESET_PASSWORD: `${ADMIN}/reset-password`,
  GET_EMPLIST: `${EMPLOYEE}/get-all-employees`,
  DELETE_EMP: `${EMPLOYEE}/delete-employee`,
  GET_TASK_LIST:`${COMMON}/get-all-task`,
  ADD_TASK:`${COMMON}/create-task`,

// user----

USER_LOGIN: `${EMPLOYEE}/login`,
USER_REGISTER:`${EMPLOYEE}/register`,



  // -------

  UPDATE_EMPLIST: `${ADMIN}/emp-list`,
  CHANGE_PASSWORD: `${EMPLOYEE}/change-password`,
  ADD_EMP: `${EMPLOYEE}/add-emp`,
};
