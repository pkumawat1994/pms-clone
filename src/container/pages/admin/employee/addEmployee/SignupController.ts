import { useFormik } from "formik";
import { signupFormValues } from "./ISignup";


// import {  signUpUSer } from "../../../../redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from "../../../../../redux/store";
import { SignupValidationSchema } from "../../../../../validation/AllValidation";
import { signUpUSer } from "../../../../../redux";




export const SignupController = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm_Password, setshowConfirm_Password] = useState(false);


  let dispatch = useAppDispatch();
  let navigate = useNavigate();
  let data = useLocation();

  const formik = useFormik<signupFormValues>({
    initialValues: {
        emp_name: data?.state?.data ? data?.state.data?.emp_name : "",
        emp_phoneNumber: data?.state?.data ? data?.state?.data?.emp_phoneNumber : "",
        emp_email: data?.state?.data ? data?.state?.data?.emp_email : "",
        emp_password: data?.state?.data ? data?.state?.data?.emp_password : "",
        confirm_Password: data?.state?.data ? data?.state?.data?.confirm_Password : "",
        emp_role: data?.state?.data ? data?.state?.data?.emp_role : "",
        emp_dateofbirth: ""

        // emp_profileImage: "",
    },
    validateOnChange: true,
    validationSchema: SignupValidationSchema,

    onSubmit: async (values: signupFormValues, actions) => {

        console.log("singu-Userrr",values)
          await dispatch(signUpUSer({ data: values, navigate }));

      try {
        actions.setSubmitting(true);

        if (data?.state?.data) {
          alert("hello Update");
        } else {
            // console.log("singu-Userrr",values)
          // await dispatch(signUpUSer({ data: values, navigate }));
        }
        actions.resetForm();
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        actions.setSubmitting(false);
      }
      actions.resetForm();
    },
  });
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickConfirmShowPassword = () => {
    setshowConfirm_Password(!showConfirm_Password);
  };


  return {
    formik,
    handleClickShowPassword,
    data,
    showConfirm_Password,
    handleClickConfirmShowPassword,
    showPassword
  };
};
