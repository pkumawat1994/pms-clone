import { createAsyncThunk } from "@reduxjs/toolkit";
import { FormValues } from "../container/auth/login/ILogin";
import DataService from "../config/DataService";
import { forgotFormValues } from "../container/auth/forgotPassword/IForgotPassword";
import { NavigateFunction } from "react-router-dom";
import { resetPasswordT } from "../container/auth/resetPassword/IResetPassword";
import { otpObj } from "../container/auth/otpVerify/IOtpVerify";
import { ChangePasswordFormValues } from "../container/auth/changePassword/IChangepassword";
import { signupFormValues } from "../container/auth/signup/ISignup";
import { API } from "../config/Api";
import { employeeIDT } from "../container/pages/employee/employeeList/IEmployeeList";
import { AxiosError } from "axios";
import { appRoutes } from "../routes/appRoutes";

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError === true;
}

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { data, navigate }: { data: FormValues; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const response = await DataService.post(API.USER_LOGIN, data);
      if (response.data.status == 200) {
        localStorage.setItem("userToken", response?.data?.data?.token);
        navigate(appRoutes.EMPLOYEE_LIST);
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

export const deleteEmployee = createAsyncThunk(
  "deleteEmployee",
  async (
    { data, navigate }: { data: employeeIDT; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      let obj = { empId: data };
      const response = await DataService.post(API.DELETE_EMP, obj);
      console.log(response?.data?.message, "DELETE_EMP");
      if (response?.data?.status == 200) {
        navigate(appRoutes.EMPLOYEE_LIST);
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
export const userForgotPassword = createAsyncThunk(
  "userForgotPassword",
  async (
    { data, navigate }: { data: forgotFormValues; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const response = await DataService.post(API.FORGOT_PASSWORD, data);
      console.log("forgot-pass", response);
      if (response?.data?.status == 200) {
        navigate(appRoutes.OTP_VERIFY, {
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

export const resetPassword = createAsyncThunk(
  "resetPassword",
  async (
    { data, navigate }: { data: resetPasswordT; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      console.log(data, "comingData");
      DataService.defaults.headers.common["auth"] = data?.token;
      const response = await DataService.post(API.RESET_PASSWORD, {
        newPassword: data?.newPassword,
      });
      console.log("response-reset", response);
      if (response?.data?.status == 200) {
        navigate(appRoutes.LOGIN);
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

export const changePassword = createAsyncThunk(
  "changePassword",
  async (
    {
      data,
      navigate,
    }: { data: ChangePasswordFormValues; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const response = await DataService.post(API.RESET_PASSWORD, data);
      if (response?.data?.status == 200) {
        navigate(appRoutes.LOGIN);
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

export const signUpUSer = createAsyncThunk(
  "auth/signUpUSer",
  async (
    { data, navigate }: { data: signupFormValues; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      const response = await DataService.post(API.ADD_EMP, data);
      if (response.data.status == 201) {
        navigate(appRoutes.LOGIN);
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

//UPDATE EMPLOYEE->>>
export const updateEmployee = createAsyncThunk(
  "auth/updateEmployee",
  async (
    { data, navigate }: { data: signupFormValues; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      console.log("UPDATEDATAWITH_ID", data);
      const response = await DataService.post(API.UPDATE_EMPLIST, data);
      if (response.data.status == 201) {
        console.log(response?.data);
        navigate(appRoutes.EMPLOYEE_LIST);
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

export const otpVerify = createAsyncThunk(
  "auth/otpVerify",
  async (
    { data, navigate }: { data: otpObj; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    try {
      DataService.defaults.headers.common["auth"] = data.token;
      const response = await DataService.post(API.OTP_VERIFY, {
        otp: data?.otp,
      });
      console.log(response, "ressppToken");

      if (response?.data?.status == 200) {
        navigate(appRoutes.RESET_PASSWORD, { state: response?.data?.data?.token });
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
