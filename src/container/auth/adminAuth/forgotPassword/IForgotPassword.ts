import { NavigateFunction } from "react-router-dom";

export interface forgotFormValues {
    email: string;
   
  }
  export type ForgotPasswordThunkParams = {
    data: forgotFormValues;
    navigate: NavigateFunction;
  };