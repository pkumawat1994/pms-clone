
export const appRoutes = {
  USER_LOGIN:"/",
  ADMIN_LOGIN: "/admin/login",
  SIGNUP: "signup",
  EMPLOYEE_LIST:"employee-list",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  ADMIN_OTP_VERIFY: "/otp-verify",
  CHANGE_PASSWORD: "/change-password",
  ADMIN_DASHBOARD: "/dashboard"
} as const;

export type AppRouteKey = keyof typeof appRoutes;
export type AppRoutePath = (typeof appRoutes)[AppRouteKey];
