import { useFormik } from "formik";

import { resetPassValidationSchema } from "../../../../validation/AllValidation";
import { adminResetPassword, adminForgotPassword } from "../../../../redux";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPasswordT } from "./IResetPassword";
import { useAppDispatch } from "../../../../redux/store";
import { useState } from "react";

export const ResetPasswordController = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showCPassword, setShowCPassword] = useState<boolean>(false);
    let dispatch=useAppDispatch()
    let navigate=useNavigate();
    let stateFromRoutes=useLocation();
    console.log(stateFromRoutes.state,"stateFromRoutes-reset")
    const tokenFormRoute=stateFromRoutes.state
   
  const formik = useFormik<resetPasswordT>({
    initialValues: {
        newPassword : "",
        confirmPassword:"",
       
    },
    validationSchema:resetPassValidationSchema,
    onSubmit: (values:resetPasswordT) => {
      let addTokenInObj={...values,token:tokenFormRoute}
        dispatch(adminResetPassword({ data: addTokenInObj, navigate }));
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowCPassword = () => {
    setShowCPassword(!showCPassword);
  };
  return {
    formik,
    showPassword,
    showCPassword,
    handleClickShowPassword,
    handleClickShowCPassword
  };
};
