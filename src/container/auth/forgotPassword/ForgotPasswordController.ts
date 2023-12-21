import { useFormik } from "formik";

import {forgotPassValidationSchema } from "../../../validation/AllValidation";
import { useAppDispatch } from "../../../redux/store";
import { userForgotPassword } from "../../../redux";
import { forgotFormValues } from "./IForgotPassword";
import { useNavigate } from "react-router-dom";

export const ForgotPasswordController = () => {
    let dispatch=useAppDispatch()
    let navigate=useNavigate();
  const formik = useFormik<forgotFormValues>({
    initialValues: {
        emp_email: "",
    },
    validationSchema:forgotPassValidationSchema,
    onSubmit: (values:forgotFormValues) => {
        dispatch(userForgotPassword({ data: values, navigate }));
    },
  });

  return {
    formik,
  };
};
