let ADMIN = "admin";
let EMPLOYEE = "emp";
let COMMON = "common";
export const API = {
  GET_EMPLIST:`${ADMIN}/emp-list`,
  UPDATE_EMPLIST:`${ADMIN}/emp-list`,
  DELETE_EMP:`${ADMIN}/emp-delete`,
  USER_LOGIN: `${EMPLOYEE}/login`,
  FORGOT_PASSWORD: `${EMPLOYEE}/forgot-password`,
  RESET_PASSWORD: `${EMPLOYEE}/reset-password`,
  CHANGE_PASSWORD: `${EMPLOYEE}/change-password`,
  ADD_EMP: `${EMPLOYEE}/add-emp`,
  OTP_VERIFY: `${EMPLOYEE}/otp-verify`,
};
