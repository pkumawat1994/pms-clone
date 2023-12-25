export type UserResetPasswordT = {
    newPassword : string;
    confirmPassword:string;
    token?:string;
  };