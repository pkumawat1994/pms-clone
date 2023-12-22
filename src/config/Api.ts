let ADMIN = "admin";
let EMPLOYEE = "employee";
let COMMON = "common";

export const API = {
  ADMIN_LOGIN: `${ADMIN}/login`,
  ADMIN_FORGOT_PASSWORD: `/${ADMIN}/forgot-password`,
  ADMIN_OTP_VERIFY: `${ADMIN}/verify-otp`,
  ADMIN_RESET_PASSWORD: `${ADMIN}/reset-password`,

// user----
USER_LOGIN: `${EMPLOYEE}/login`,
USER_REGISTER:`${EMPLOYEE}/register`,



  // -------
  GET_EMPLIST: `${ADMIN}/emp-list`,
  UPDATE_EMPLIST: `${ADMIN}/emp-list`,
  DELETE_EMP: `${ADMIN}/emp-delete`,
  CHANGE_PASSWORD: `${EMPLOYEE}/change-password`,
  ADD_EMP: `${EMPLOYEE}/add-emp`,
};
