import { useFormik } from "formik";
import { ChangePasswordValidationSchema, LoginValidationSchema } from "../../../../validation/AllValidation";
import { useAppDispatch } from "../../../../redux/store";

// import { changePassword } from "../../../../redux";
import { useNavigate } from "react-router-dom";
import { ChangePasswordFormValues } from "./IChangepassword";

export const ChangePasswordController = () => {
    let dispatch=useAppDispatch();
    let navigate=useNavigate();
  const formik = useFormik<ChangePasswordFormValues>({
    initialValues: {
        newPassword: "",
        oldPassword : "",
    },
    validationSchema:ChangePasswordValidationSchema,
    onSubmit: (values:ChangePasswordFormValues) => {
        // dispatch(changePassword( {data: values, navigate}))
    },
  });

  return {
    formik,
  };
};
