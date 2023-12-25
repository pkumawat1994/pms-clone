import { NavigateFunction } from "react-router-dom";

export interface UserforgotFormValues {
    email: string;
   
  }
  export type UserForgotPasswordThunkParams = {
    data: UserforgotFormValues;
    navigate: NavigateFunction;
  };