import { useFormik } from "formik";

import {adminForgotPassValidationSchema } from "../../../../validation/AllValidation";
import { useAppDispatch } from "../../../../redux/store";
import { adminForgotPassword } from "../../../../redux";
import { forgotFormValues } from "./IForgotPassword";
import { useNavigate } from "react-router-dom";

export const ForgotPasswordController = () => {
    let dispatch=useAppDispatch()
    let navigate=useNavigate();
  const formik = useFormik<forgotFormValues>({
    initialValues: {
        email: "",
    },
    validationSchema:adminForgotPassValidationSchema,
    onSubmit: (values:forgotFormValues) => {
        dispatch(adminForgotPassword({ data: values, navigate }));
    },
  });

  return {
    formik,
  };
};
