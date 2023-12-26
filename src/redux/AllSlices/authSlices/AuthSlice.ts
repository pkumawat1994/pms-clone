// authSlice.ts

import { createSlice } from "@reduxjs/toolkit";
import {
  adminForgotPassword,
  loginAdmin,
  adminOtpVerify,
  adminResetPassword,
  loginUser,
  userForgotPassword,
  userOtpVerify,
  addEmployee,
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

    //loginAdmin------------

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


    //    LOGIN USER------



    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
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

    builder.addCase(loginUser.rejected, (state, action) => {
      console.log(action, "login-user-rejected-action");
      const payload = action.payload as rejectedPayload | undefined;
      const errorMessage = payload?.message;
      toast.error(errorMessage);
      state.loading = false;
    });



    //adminForgotPassword---------

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

      //userForgotPassword-----------------


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

    //add-employee----------

    builder.addCase(addEmployee.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addEmployee.fulfilled, (state, action) => {
      state.loading = false;
      toast.success(action?.payload?.data?.message);
    });
    builder.addCase(addEmployee.rejected, (state, action) => {
      state.loading = false;
      const payload = action.payload as rejectedPayload | undefined;
      const errorMessage = payload?.message;
      toast.error(errorMessage);
    });

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


    

    //USER-OTP-VERIFY--------
    builder.addCase(userOtpVerify.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(userOtpVerify.fulfilled, (state, action) => {
      state.loading = false;
      toast.success(action?.payload?.data?.message);
    });
    builder.addCase(userOtpVerify.rejected, (state, action) => {
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
