// authSlice.ts

import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  otpVerify,
  resetPassword,
  signUpUSer,
  userForgotPassword,
} from "../..";
import { toast } from "react-toastify";
import { AuthState, rejectedPayload } from "../../IRedux";

const AuthSlice: any = createSlice({
  name: "auth",
  initialState: {} as AuthState,
  reducers: {
    logOut: (state) => {
      state.tokenFromRedux = "";
      localStorage.removeItem("userToken");
    },
  },
  extraReducers: (builder) => {
    //loginUSer------------

    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log(action?.payload?.data?.data?.token, "success-login-action");
      toast.success(action?.payload?.data?.message);
      state.tokenFromRedux = action?.payload?.data?.data?.token;
      state.loading = false;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      console.log(action, "login-user-rejected-action");
      const payload = action.payload as rejectedPayload | undefined;
      const errorMessage = payload?.message;
      toast.error(errorMessage);
      state.loading = false;
    });

    //userForgotPassword---------

    builder
      .addCase(userForgotPassword.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userForgotPassword.fulfilled, (state, action) => {
        console.log(action?.payload, "success-userforgot-action");
        state.loading = false;
        toast.success(action?.payload?.data?.message);
      })
      .addCase(userForgotPassword.rejected, (state, action) => {
        console.log(action?.payload, "rejected-userforgot-action");
        const payload = action.payload as rejectedPayload | undefined;
        const errorMessage = payload?.message;
        toast.error(errorMessage);
        state.loading = false;
      });

    //signUpUSer----------

    builder.addCase(signUpUSer.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signUpUSer.fulfilled, (state, action) => {
      state.loading = false;
      toast.success(action?.payload?.data?.message);
    });
    builder.addCase(signUpUSer.rejected, (state, action) => {
      state.loading = false;
      const payload = action.payload as rejectedPayload | undefined;
      const errorMessage = payload?.message;
      toast.error(errorMessage);
    });

    //otp-verify----------

    builder.addCase(otpVerify.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(otpVerify.fulfilled, (state, action) => {
      state.loading = false;
      toast.success(action?.payload?.data?.message);
    });
    builder.addCase(otpVerify.rejected, (state, action) => {
      const payload = action.payload as rejectedPayload | undefined;
      const errorMessage = payload?.message;
      toast.error(errorMessage);
      state.loading = false;
    });

    //reset-password-----------
    builder.addCase(resetPassword.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = false;
      toast.success(action?.payload?.data?.message);
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      const payload = action.payload as rejectedPayload | undefined;
      const errorMessage = payload?.message;
      toast.error(errorMessage);
      state.loading = false;
    });
  },
});
export const { logOut } = AuthSlice.actions;
export default AuthSlice.reducer;
