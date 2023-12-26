import { useFormik } from "formik";
import { ChangePasswordValidationSchema, LoginValidationSchema } from "../../../../validation/AllValidation";
import { useAppDispatch } from "../../../../redux/store";

// import { changePassword } from "../../../../redux";
import { useNavigate } from "react-router-dom";
import { UserChangePasswordFormValues } from "./IUserChangepassword";

export const UserChangePasswordController = () => {
    let dispatch=useAppDispatch();
    let navigate=useNavigate();
  const formik = useFormik<UserChangePasswordFormValues>({
    initialValues: {
        newPassword: "",
        oldPassword : "",
    },
    validationSchema:ChangePasswordValidationSchema,
    onSubmit: (values:UserChangePasswordFormValues) => {
        // dispatch(changePassword( {data: values, navigate}))
    },
  });

  return {
    formik,
  };
};
