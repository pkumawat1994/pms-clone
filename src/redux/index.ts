import { createAsyncThunk } from "@reduxjs/toolkit";
import { FormValues } from "../container/auth/adminAuth/login/ILogin";
import DataService from "../config/DataService";
import { forgotFormValues } from "../container/auth/adminAuth/forgotPassword/IForgotPassword";
import { NavigateFunction } from "react-router-dom";
import { resetPasswordT } from "../container/auth/adminAuth/resetPassword/IResetPassword";
import { otpObj } from "../container/auth/adminAuth/otpVerify/IOtpVerify";
import { ChangePasswordFormValues } from "../container/auth/adminAuth/changePassword/IChangepassword";

import { API } from "../config/Api";
import { AxiosError } from "axios";
import { appRoutes } from "../routes/appRoutes";
import { employeeIDT } from "../container/pages/admin/employee/employeeList/IEmployeeList";
import { signupFormValues } from "../container/pages/admin/employee/addEmployee/IAddEmployee";
import { addtaskFormValues } from "../container/pages/admin/task/addTask/IAddTask";
// import { signupFormValues } from "../container/auth/userAuth/signup/ISignup";

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError === true;
}

export const loginAdmin = createAsyncThunk(
  "auth/loginAdmin",
  async (
    { data, navigate }: { data: FormValues; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const response = await DataService.post(API.ADMIN_LOGIN, data);
      console.log("login-res", response);
      if (response.data.status == 200) {
        localStorage.setItem("adminToken", response?.data?.data?.token);
        navigate(appRoutes.ADMIN_DASHBOARD);
      }
      return response;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue((error as AxiosError).response?.data);
      } else {
        const responseData = (error as { response?: { data?: [] } })?.response
          ?.data;
        return rejectWithValue(responseData);
      }
    }
  }
);

export const getRoleList = createAsyncThunk(
  "getRoleList",
  async ({ navigate }: { navigate: NavigateFunction }, { rejectWithValue }) => {
    try {
      const response = await DataService.get(API.GET_ROLELIST);
      console.log(response, "GET_ROLELIST");

      return response;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue((error as AxiosError).response?.data);
      } else {
        const responseData = (error as { response?: { data?: [] } })?.response;
        return rejectWithValue(responseData);
      }
    }
  }
);

export const getEmployeeList = createAsyncThunk(
  "getEmployeeList",
  async ({ navigate }: { navigate: NavigateFunction }, { rejectWithValue }) => {
    try {
      const response = await DataService.get(API.GET_EMPLIST);
      console.log(response?.data?.message, "GET_EMP");

      return response;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue((error as AxiosError).response?.data);
      } else {
        const responseData = (error as { response?: { data?: [] } })?.response;
        return rejectWithValue(responseData);
      }
    }
  }
);

export const getTaskList = createAsyncThunk(
  "getTaskList",
  async ({ navigate }: { navigate: NavigateFunction }, { rejectWithValue }) => {
    try {
      const response = await DataService.get(API.GET_TASK_LIST);
      console.log(response?.data?.message, "GET_TASK_LIST");

      return response;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue((error as AxiosError).response?.data);
      } else {
        const responseData = (error as { response?: { data?: [] } })?.response;
        return rejectWithValue(responseData);
      }
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "deleteEmployee",
  async (
    { data, navigate }: { data: employeeIDT; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      let obj = { id: data };
      const response = await DataService.post(API.DELETE_EMP, obj);
      console.log(response?.data?.message, "DELETE_EMP");
      if (response?.data?.status == 200) {
        // navigate(appRoutes.EMPLOYEE_LIST);
      }
      return response;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue((error as AxiosError).response?.data);
      } else {
        const responseData = (error as { response?: { data?: [] } })?.response;
        return rejectWithValue(responseData);
      }
    }
  }
);

//ADMIN-FORGOT PASSWORD----
export const adminForgotPassword = createAsyncThunk(
  "adminForgotPassword",
  async (
    { data, navigate }: { data: forgotFormValues; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const response = await DataService.post(API.ADMIN_FORGOT_PASSWORD, data);
      console.log("forgot-pass", response);
      if (response?.data?.status == 200) {
        navigate(appRoutes.ADMIN_OTP_VERIFY, {
          state: { token: response?.data?.data?.token },
        });
      }
      return response;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue((error as AxiosError).response?.data);
      } else {
        const responseData = (error as { response?: { data?: [] } })?.response;
        return rejectWithValue(responseData);
      }
    }
  }
);

export const adminResetPassword = createAsyncThunk(
  "adminResetPassword",
  async (
    { data, navigate }: { data: resetPasswordT; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      console.log(data, "comingData");
      DataService.defaults.headers.common["auth"] = data?.token;
      const response = await DataService.post(API.ADMIN_RESET_PASSWORD, {
        newPassword: data?.newPassword,
      });
      console.log("response-reset", response);
      if (response?.data?.status == 200) {
        navigate(appRoutes.ADMIN_LOGIN);
      }
      return response;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue((error as AxiosError).response?.data);
      } else {
        const responseData = (error as { response?: { data?: [] } })?.response;
        return rejectWithValue(responseData);
      }
    }
  }
);

export const userResetPassword = createAsyncThunk(
  "auth/userResetPassword",
  async (
    { data, navigate }: { data: resetPasswordT; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      console.log(data, "comingData");
      DataService.defaults.headers.common["auth"] = data?.token;
      const response = await DataService.post(API.ADMIN_RESET_PASSWORD, {
        newPassword: data?.newPassword,
      });
      console.log("response-reset", response);
      if (response?.data?.status == 200) {
        navigate(appRoutes.ADMIN_LOGIN);
      }
      return response;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue((error as AxiosError).response?.data);
      } else {
        const responseData = (error as { response?: { data?: [] } })?.response;
        return rejectWithValue(responseData);
      }
    }
  }
);

//USER FORGOT PASSWORD-------

export const userForgotPassword = createAsyncThunk(
  "auth/userForgotPassword",
  async (
    { data, navigate }: { data: forgotFormValues; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const response = await DataService.post(API.USER_FORGOT_PASSWORD, data);
      console.log("forgot-pass", response);
      if (response?.data?.status == 200) {
        navigate(appRoutes.EMPLOYEE_OTP_VERIFY, {
          state: { token: response?.data?.data?.token },
        });
      }
      return response;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue((error as AxiosError).response?.data);
      } else {
        const responseData = (error as { response?: { data?: [] } })?.response;
        return rejectWithValue(responseData);
      }
    }
  }
);

// export const changePassword = createAsyncThunk(
//   "changePassword",
//   async (
//     {
//       data,
//       navigate,
//     }: { data: ChangePasswordFormValues; navigate: NavigateFunction },
//     { rejectWithValue }
//   ) => {
//     try {
//       const response = await DataService.post(API.RESET_PASSWORD, data);
//       if (response?.data?.status == 200) {
//         navigate(appRoutes.ADMIN_LOGIN);
//       }
//       return response;
//     } catch (error: unknown) {
//       if (isAxiosError(error)) {
//         return rejectWithValue((error as AxiosError).response?.data);
//       } else {
//         const responseData = (error as { response?: { data?: [] } })?.response;
//         return rejectWithValue(responseData);
//       }
//     }
//   }
// );

// export const signUpUSer = createAsyncThunk(
//   "auth/signUpUSer",
//   async (
//     { data, navigate }: { data: signupFormValues; navigate: NavigateFunction },
//     { rejectWithValue }
//   ) => {
//     try {
//       const response = await DataService.post(API.ADD_EMP, data);
//       if (response.data.status == 201) {
//         navigate(appRoutes.ADMIN_LOGIN);
//       }
//       return response;
//     } catch (error: unknown) {
//       if (isAxiosError(error)) {
//         return rejectWithValue((error as AxiosError).response?.data);
//       } else {
//         const responseData = (error as { response?: { data?: [] } })?.response
//           ?.data;
//         return rejectWithValue(responseData);
//       }
//     }
//   }
// );

//UPDATE EMPLOYEE->>>
// export const updateEmployee = createAsyncThunk(
//   "auth/updateEmployee",
//   async (
//     { data, navigate }: { data: signupFormValues; navigate: NavigateFunction },
//     { rejectWithValue }
//   ) => {
//     try {
//       console.log("UPDATEDATAWITH_ID", data);
//       const response = await DataService.post(API.UPDATE_EMPLIST, data);
//       if (response.data.status == 201) {
//         console.log(response?.data);
//         navigate(appRoutes.EMPLOYEE_LIST);
//       }
//       return response;
//     } catch (error: unknown) {
//       if (isAxiosError(error)) {
//         return rejectWithValue((error as AxiosError).response?.data);
//       } else {
//         const responseData = (error as { response?: { data?: [] } })?.response
//           ?.data;
//         return rejectWithValue(responseData);
//       }
//     }
//   }
// );

export const adminOtpVerify = createAsyncThunk(
  "auth/otpVerify",
  async (
    { data, navigate }: { data: otpObj; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      DataService.defaults.headers.common["auth"] = data.token;
      const response = await DataService.post(API.ADMIN_OTP_VERIFY, {
        otp: data?.otp,
      });
      console.log(response, "ressppToken");

      if (response?.data?.status == 200) {
        navigate(appRoutes.RESET_PASSWORD, {
          state: response?.data?.data?.token,
        });
      }
      return response;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue((error as AxiosError).response?.data);
      } else {
        const responseData = (error as { response?: { data?: [] } })?.response
          ?.data;
        return rejectWithValue(responseData);
      }
    }
  }
);

//USER-OTP-VERIFY---------------

export const userOtpVerify = createAsyncThunk(
  "auth/userOtpVerify",
  async (
    { data, navigate }: { data: otpObj; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      DataService.defaults.headers.common["auth"] = data.token;
      const response = await DataService.post(API.ADMIN_OTP_VERIFY, {
        otp: data?.otp,
      });
      console.log(response, "ressppToken");

      // if (response?.data?.status == 200) {
      //   navigate(appRoutes.RESET_PASSWORD, { state: response?.data?.data?.token });
      // }
      return response;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue((error as AxiosError).response?.data);
      } else {
        const responseData = (error as { response?: { data?: [] } })?.response
          ?.data;
        return rejectWithValue(responseData);
      }
    }
  }
);

// user-auth------------------------------------

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { data, navigate }: { data: FormValues; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const response = await DataService.post(API.USER_LOGIN, data);
      console.log("login-res", response);
      if (response.data.status == 200) {
        localStorage.setItem("userToken", response?.data?.data?.token);
        alert("navigate-on-page");
        // navigate(appRoutes.ADMIN_DASHBOARD);
      }
      return response;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue((error as AxiosError).response?.data);
      } else {
        const responseData = (error as { response?: { data?: [] } })?.response
          ?.data;
        return rejectWithValue(responseData);
      }
    }
  }
);

//SEND-TIMER-DATA----------------------

export const sendTimerData = createAsyncThunk(
  "sendTimerData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await DataService.post(API.UPDATE_TASK_STATUS, data);
      console.log(response, "response-timer");
      return response;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue((error as AxiosError).response?.data);
      } else {
        const responseData = (error as { response?: { data?: [] } })?.response
          ?.data;
        return rejectWithValue(responseData);
      }
    }
  }
);

export const addEmployee = createAsyncThunk(
  "auth/addEmployee",
  async (
    { data, navigate }: { data: signupFormValues; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const response = await DataService.post(API.USER_REGISTER, data);
      console.log("login-res", response);
      if (response.data.status == 201) {
        navigate("/admin/dashboard/employee-list");
      }
      return response;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue((error as AxiosError).response?.data);
      } else {
        const responseData = (error as { response?: { data?: [] } })?.response
          ?.data;
        return rejectWithValue(responseData);
      }
    }
  }
);

export const addTask = createAsyncThunk(
  "auth/addTask",
  async (
    { data, navigate }: { data: addtaskFormValues; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const response = await DataService.post(API.ADD_TASK, data);
      console.log("ADD_TASK", response);
      if (response.data.status == 200) {
        // localStorage.setItem("userToken", response?.data?.data?.token);
        // alert("navigate-to-login")
        navigate(appRoutes.TASK_LIST);
      }
      return response;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue((error as AxiosError).response?.data);
      } else {
        const responseData = (error as { response?: { data?: [] } })?.response
          ?.data;
        return rejectWithValue(responseData);
      }
    }
  }
);

//get-employee------
// export const getEmployeeList = createAsyncThunk(
//   "auth/otpVerify",
//   async (
//     {  navigate }: {  navigate: NavigateFunction },
//     { rejectWithValue }
//   ) => {
//     try {
//       // DataService.defaults.headers.common["auth"] = data.token;
//       const response = await DataService.get(API.ADMIN_OTP_VERIFY);
//       console.log(response, "ressppToken");

//       if (response?.data?.status == 200) {
//         navigate(appRoutes.RESET_PASSWORD, { state: response?.data?.data?.token });
//       }
//       return response;
//     } catch (error: unknown) {
//       if (isAxiosError(error)) {
//         return rejectWithValue((error as AxiosError).response?.data);
//       } else {
//         const responseData = (error as { response?: { data?: [] } })?.response
//           ?.data;
//         return rejectWithValue(responseData);
//       }
//     }
//   }
// );
