import { useFormik } from "formik";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// import { SignupValidationSchema, UpdateEmployeeValidationSchema } from "../../../../../validation/AllValidation";

import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../../redux/store";
import { updateFormValues } from "./IUserProfileUpdate";
import { UpdateUserProfileValidationSchema } from "../../../../validation/AllValidation";
import { getRoleList, updateEmployeeProfile } from "../../../../redux";


export const UserProfileUpdateController = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm_Password, setshowConfirm_Password] = useState(false);
  const [rolelist,setRoleList]=useState([])


  let dispatch = useAppDispatch();
  let navigate = useNavigate();
 
  let data = useLocation();
  console.log("data",data?.state?.data?.emp_role?.roleName)

  const formik = useFormik<updateFormValues>({
    initialValues: {
        emp_name: data?.state?.data ? data?.state.data?.emp_name : "",
        emp_phoneNumber: data?.state?.data ? data?.state?.data?.emp_phoneNumber : "",
        emp_email: data?.state?.data ? data?.state?.data?.emp_email : "",
        // emp_password: data?.state?.data ? data?.state?.data?.emp_password : "",
        // confirm_Password: data?.state?.data ? data?.state?.data?.confirm_Password : "",
        emp_role: data?.state?.data ? data?.state?.data?.emp_role?._id : "",
        emp_dateofbirth:  data?.state?.data ? data?.state?.data?.emp_dateofbirth :""

        // emp_profileImage: "",
    },
    validateOnChange: true,
    validationSchema: UpdateUserProfileValidationSchema,  

    onSubmit: async (values: updateFormValues, actions) => {

        console.log("Update-Profile",values)
        await dispatch(updateEmployeeProfile({ data: values, navigate }));

     
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
  return {
    formik,
    rolelist,
    handleClickShowPassword,
    data,
   
  };
};
