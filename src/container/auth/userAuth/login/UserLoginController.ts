import { useFormik } from "formik";
import { FormValues } from "./IUserLogin"; 
import { LoginValidationSchema } from "../../../../validation/AllValidation";
import { useAppDispatch } from "../../../../redux/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../../redux";
// import { loginAdmin } from "../../../../redux";

export const UserLoginController = () => {
  const [showPassword, setShowPassword] = useState(false);
  let dispatch = useAppDispatch();
  let navigate = useNavigate();
  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidationSchema,
    onSubmit: (values: FormValues) => {
      console.log("admin-login-form",values)
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
