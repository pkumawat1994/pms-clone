// authSlice.ts

import { createSlice } from "@reduxjs/toolkit";
import {
  adminForgotPassword,
  loginAdmin,
  adminOtpVerify,
  adminResetPassword,
  // signUpUSer,
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

    builder.addCase(loginAdmin.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(loginAdmin.fulfilled, (state, action) => {
      console.log(action?.payload?.data?.data?.data?.name, "success-login-action");
      // toast.success(action?.payload?.data?.message);

      setTimeout(() => {
        toast.success(
          `Welcome Mr.   ${action?.payload?.data?.data?.data?.name}`,
          { position: "top-center", hideProgressBar: true }
        );
      }, 1000);
      state.tokenFromRedux = action?.payload?.data?.data?.token;
      state.loading = false;
    });

    builder.addCase(loginAdmin.rejected, (state, action) => {
      console.log(action, "login-user-rejected-action");
      const payload = action.payload as rejectedPayload | undefined;
      const errorMessage = payload?.message;
      toast.error(errorMessage);
      state.loading = false;
    });

    //userForgotPassword---------

    builder
      .addCase(adminForgotPassword.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(adminForgotPassword.fulfilled, (state, action) => {
        console.log(action?.payload, "success-userforgot-action");
        state.loading = false;
        toast.success(action?.payload?.data?.message);
      })
      .addCase(adminForgotPassword.rejected, (state, action) => {
        console.log(action?.payload, "rejected-userforgot-action");
        const payload = action.payload as rejectedPayload | undefined;
        const errorMessage = payload?.message;
        toast.error(errorMessage);
        state.loading = false;
      });

    //signUpUSer----------

    // builder.addCase(signUpUSer.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(signUpUSer.fulfilled, (state, action) => {
    //   state.loading = false;
    //   toast.success(action?.payload?.data?.message);
    // });
    // builder.addCase(signUpUSer.rejected, (state, action) => {
    //   state.loading = false;
    //   const payload = action.payload as rejectedPayload | undefined;
    //   const errorMessage = payload?.message;
    //   toast.error(errorMessage);
    // });

    //otp-verify----------

    builder.addCase(adminOtpVerify.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(adminOtpVerify.fulfilled, (state, action) => {
      state.loading = false;
      toast.success(action?.payload?.data?.message);
    });
    builder.addCase(adminOtpVerify.rejected, (state, action) => {
      const payload = action.payload as rejectedPayload | undefined;
      const errorMessage = payload?.message;
      toast.error(errorMessage);
      state.loading = false;
    });

    //reset-password-----------
    builder.addCase(adminResetPassword.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(adminResetPassword.fulfilled, (state, action) => {
      state.loading = false;
      toast.success(action?.payload?.data?.message);
    });
    builder.addCase(adminResetPassword.rejected, (state, action) => {
      const payload = action.payload as rejectedPayload | undefined;
      const errorMessage = payload?.message;
      toast.error(errorMessage);
      state.loading = false;
    });
  },
});
export const { logOut } = AuthSlice.actions;
export default AuthSlice.reducer;
