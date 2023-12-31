import { useFormik } from "formik";
import { signupFormValues } from "./IAddEmployee";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../../redux/store";
import { SignupValidationSchema, UpdateEmployeeValidationSchema } from "../../../../../validation/AllValidation";
import { addEmployee, getRoleList } from "../../../../../redux";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";


export const SignupController = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm_Password, setshowConfirm_Password] = useState(false);
  const [rolelist,setRoleList]=useState([])


  let dispatch = useAppDispatch();
  let navigate = useNavigate();
 
  let data = useLocation();
  console.log("data",data?.state?.data?.emp_role?.roleName)

  const formik = useFormik<signupFormValues>({
    initialValues: {
        emp_name: data?.state?.data ? data?.state.data?.emp_name : "",
        emp_phoneNumber: data?.state?.data ? data?.state?.data?.emp_phoneNumber : "",
        emp_email: data?.state?.data ? data?.state?.data?.emp_email : "",
        emp_password: data?.state?.data ? data?.state?.data?.emp_password : "",
        confirm_Password: data?.state?.data ? data?.state?.data?.confirm_Password : "",
        emp_role: data?.state?.data ? data?.state?.data?.emp_role?._id : "",
        emp_dateofbirth:  data?.state?.data ? data?.state?.data?.emp_dateofbirth :""

        // emp_profileImage: "",
    },
    validateOnChange: true,
    validationSchema:data?.state?.data ? UpdateEmployeeValidationSchema :SignupValidationSchema ,

    onSubmit: async (values: signupFormValues, actions) => {

        console.log("singu-Userrr",values)

      try {
        actions.setSubmitting(true);

        if (data?.state?.data) {
          alert("hello Update");
          console.log(90,data?.state?.data?._id)
          const updateObj={...values,id:data?.state?.data?._id}
          // await dispatch(updateEmployee({ data: values, navigate }));
        } else {
            // console.log("singu-Userrr",values)
                  await dispatch(addEmployee({ data: values, navigate }));

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

useEffect(()=>{
dispatch(getRoleList({ navigate })).then((res :any)=>setRoleList(res?.payload?.data?.data))
},[])

//name-validate-------
function processName (nameInput:string) {
  const inputValue = nameInput.trim();
  const isValidFormat = /^\S+\s+\S+$/.test(inputValue);

  if (!isValidFormat) {
      // Invalid input format, prevent further typing
      nameInput = inputValue.slice(0, -1);
  }
}

  return {
    formik,
    rolelist,
    handleClickShowPassword,
    data,
    showConfirm_Password,
    handleClickConfirmShowPassword,
    showPassword,
    processName
  };
};
