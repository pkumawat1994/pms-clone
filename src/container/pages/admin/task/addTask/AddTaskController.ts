import { useFormik } from "formik";
import { addtaskFormValues } from "./IAddTask";


// import {  signUpUSer } from "../../../../redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../../redux/store";
import { SignupValidationSchema, addTaskValidationSchema } from "../../../../../validation/AllValidation";
import { addTask, getRoleList } from "../../../../../redux";


export const AddTaskController = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm_Password, setshowConfirm_Password] = useState(false);


  let dispatch = useAppDispatch();
  let navigate = useNavigate();
 
  let data = useLocation();
  console.log("edit-data",data)

  const formik = useFormik<addtaskFormValues>({
    initialValues: {
        title: data?.state?.data ? data?.state.data?.title : "",
        description: data?.state?.data ? data?.state?.data?.description : "",
        assignee: data?.state?.data ? data?.state?.data?.assignee : "",
        taskDuration: data?.state?.data ? data?.state?.data?.taskDuration : "",
        assignDate: data?.state?.data ? data?.state?.data?.assignDate : "",
        dueDate: data?.state?.data ? data?.state?.data?.dueDate : ""
   
    },
    validateOnChange: true,
    validationSchema: addTaskValidationSchema,

    onSubmit: async (values: addtaskFormValues, actions) => {

        console.log("singu-Userrr",values)
          await dispatch(addTask({ data: values, navigate }));

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

useEffect(()=>{
dispatch(getRoleList({ navigate }))
},[])
  return {
    formik,
    handleClickShowPassword,
    data,
    showConfirm_Password,
    handleClickConfirmShowPassword,
    showPassword
  };
};
