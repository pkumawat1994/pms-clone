import { NavigateFunction } from "react-router-dom";

export interface forgotFormValues {
    emp_email: string;
   
  }
  export type ForgotPasswordThunkParams = {
    data: forgotFormValues;
    navigate: NavigateFunction;
  };