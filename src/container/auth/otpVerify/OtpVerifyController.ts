import { useFormik } from "formik";

import { otpValidationSchema } from "../../../validation/AllValidation";
import { useAppDispatch } from "../../../redux/store";
import { otpVerify } from "../../../redux";
import { useLocation, useNavigate } from "react-router-dom";

export const OtpVerifyController = () => {
  let dispatch = useAppDispatch();
  let navigate = useNavigate();
  let tokenFromNavigate = useLocation();

  let tokenFormRoutes = tokenFromNavigate.state.token;

  const handleOtpSubmit = (value: string) => {
    let newObj = { token: tokenFormRoutes, otp: value };
    dispatch(otpVerify({ data: newObj, navigate }));
  };

  return {
    handleOtpSubmit,
  };
};
