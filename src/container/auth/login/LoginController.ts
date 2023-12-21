import { useFormik } from "formik";
import { FormValues } from "./ILogin";
import { LoginValidationSchema } from "../../../validation/AllValidation";
import { useAppDispatch } from "../../../redux/store";
import {  loginUser } from "../../../redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginController = () => {
  const [showPassword, setShowPassword] = useState(false);
  let dispatch = useAppDispatch();
  let navigate = useNavigate();
  const formik = useFormik<FormValues>({
    initialValues: {
      emp_email: "",
      emp_password: "",
    },
    validationSchema: LoginValidationSchema,
    onSubmit: (values: FormValues) => {
      dispatch(loginUser({ data: values,   navigate }));
    },
  });
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return {
    formik,
    handleClickShowPassword,
    showPassword,
  };
};
