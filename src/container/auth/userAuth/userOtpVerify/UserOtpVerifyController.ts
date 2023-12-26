import { useFormik } from "formik";

import { otpValidationSchema } from "../../../../validation/AllValidation";
import { useAppDispatch } from "../../../../redux/store";
import { adminOtpVerify, userOtpVerify } from "../../../../redux";
import { useLocation, useNavigate } from "react-router-dom";

export const UserOtpVerifyController = () => {
  let dispatch = useAppDispatch();
  let navigate = useNavigate();
  let tokenFromNavigate = useLocation();

  let tokenFormRoutes = tokenFromNavigate.state.token;
  console.log("tokenFormRoutes",tokenFormRoutes)

  const handleOtpSubmit = (value: string) => {
    let newObj = { token: tokenFormRoutes, otp: value };
    dispatch(userOtpVerify({ data: newObj, navigate }));
  };

  return {
    handleOtpSubmit,
  };
};
