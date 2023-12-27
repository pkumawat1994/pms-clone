import { useFormik } from "formik";



// import {  signUpUSer } from "../../../../redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../../redux/store";
import { SignupValidationSchema, addTaskValidationSchema } from "../../../../../validation/AllValidation";
import { addTask, getAssigneeList, getRoleList, updateTask } from "../../../../../redux";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { userEdittaskFormValues } from "./IUserTaskEdit";


export const UserTaskEditController = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm_Password, setshowConfirm_Password] = useState(false);
  const [assigneeList,setAssigneeList]=useState([])


  let dispatch = useAppDispatch();
  let navigate = useNavigate();
 
  let data = useLocation();
  // console.log("lova",data?.state?.data)
  useEffect(()=>{
// dispatch(getAssigneeList({navigate})).then((res:any)=>{setAssigneeList(res?.payload?.data?.data)})
// ADMIN_GET_ALL_ASSIGNEE_LIST
  },[])

  const formik = useFormik<userEdittaskFormValues>({
    initialValues: {
        title: data?.state?.data ? data?.state.data?.title : "",
        description: data?.state?.data ? data?.state?.data?.description : "",
        assignee: data?.state?.data ? data?.state?.data?.assignee?._id : "",
        taskDuration: data?.state?.data ? data.state.data.taskDuration: "",
        assignDate: data?.state?.data ? data?.state?.data?.assignDate : "",
        dueDate: data?.state?.data ? data?.state?.data?.dueDate : ""
    },
    validateOnChange: true,
    validationSchema: addTaskValidationSchema,

    onSubmit: async (values: userEdittaskFormValues, actions) => {
        console.log("singu-Userrr",values)

      try {
        actions.setSubmitting(true);

        if (data?.state?.data) {
          const newData=values;
          const newObj={...newData,id:data?.state?.data?._id}
          await dispatch(updateTask({ data: newObj, navigate }));
        } else {
           
            await dispatch(addTask({ data: values, navigate }));
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

// useEffect(()=>{
// dispatch(getRoleList({ navigate }))
// },[])
  return {
    formik,
    handleClickShowPassword,
    data,
    assigneeList,
  
   
  
  };
};
