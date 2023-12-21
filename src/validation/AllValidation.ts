import * as yup from "yup";

const ALL_REGEX = {
  emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

export const LoginValidationSchema = yup.object({
  emp_email: yup
    .string()

    .email("Enter a valid email")
    .matches(
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/,
      "Please enter valid email"
    )
    .required("Email is required"),
  emp_password: yup
    .string()

    .required("Password is required"),
});

export const ChangePasswordValidationSchema = yup.object({
  newPassword: yup
    .string()
    .min(8, "New Password should be of minimum 8 characters length")
    .required("new password is required"),
  oldPassword: yup.string().required("old Password is required"),
});

export const forgotPassValidationSchema = yup.object({
  emp_email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required "),
});

export const otpValidationSchema = yup.object({
  otp: yup.string().required("otp is required"),
});

export const resetPassValidationSchema = yup.object({
  newPassword: yup.string().required("New password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const SignupValidationSchema = yup.object({
  emp_name: yup
    .string()
    .max(20, "Name cannot exceed 20 characters")
    .matches(/^[A-Za-z]+$/, "Name should contain only letters")
    .required("Name is Required"),
  emp_mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Please enter valid mobile number"),
  emp_email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  emp_password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirm_Password: yup
    .string()
    .oneOf([yup.ref("emp_password")], "Passwords and confirm password is  should be match")
    .required("Confirm Password is required"),
});
