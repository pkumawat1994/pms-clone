import { useFormik } from "formik";

import {adminForgotPassValidationSchema, userForgotPassValidationSchema } from "../../../../validation/AllValidation";
import { useAppDispatch } from "../../../../redux/store";
// import { adminForgotPassword } from "../../../../redux";
import { UserforgotFormValues } from "./IUserForgotPassword";
import { useNavigate } from "react-router-dom";
import { userForgotPassword } from "../../../../redux";

export const UserForgotPasswordController = () => {
    let dispatch=useAppDispatch()
    let navigate=useNavigate();
  const formik = useFormik<UserforgotFormValues>({
    initialValues: {
        email: "",
    },
    validationSchema:userForgotPassValidationSchema,
    onSubmit: (values:UserforgotFormValues) => {
        dispatch(userForgotPassword({ data: values, navigate }));
    },
  });

  return {
    formik,
  };
};
