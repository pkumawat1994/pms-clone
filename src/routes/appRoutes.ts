
export const appRoutes = {
  LOGIN: "/",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  OTP_VERIFY: "/otp-verify",
  CHANGE_PASSWORD: "/change-password",
  EMPLOYEE_LIST: "/employee-list"
} as const;

export type AppRouteKey = keyof typeof appRoutes;
export type AppRoutePath = (typeof appRoutes)[AppRouteKey];
