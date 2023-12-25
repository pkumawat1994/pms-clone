import { useFormik } from "formik";

import {adminForgotPassValidationSchema } from "../../../../validation/AllValidation";
import { useAppDispatch } from "../../../../redux/store";
import { adminForgotPassword } from "../../../../redux";
import { UserforgotFormValues } from "./IUserForgotPassword";
import { useNavigate } from "react-router-dom";

export const ForgotPasswordController = () => {
    let dispatch=useAppDispatch()
    let navigate=useNavigate();
  const formik = useFormik<UserforgotFormValues>({
    initialValues: {
        email: "",
    },
    validationSchema:adminForgotPassValidationSchema,
    onSubmit: (values:UserforgotFormValues) => {
        dispatch(adminForgotPassword({ data: values, navigate }));
    },
  });

  return {
    formik,
  };
};
