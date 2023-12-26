
export const appRoutes = {
  USER_LOGIN:"/",
  ADMIN_LOGIN: "/admin/login",
  ADD_EMPLOYEE:"add-employee",
  TASK_LIST:"task-list",
  
  ADD_TASK:"add-task",
  
  
  USER_TASK_DETAIL:"task-detail",
  EMPLOYEE_LIST:"employee-list",
  FORGOT_PASSWORD: "/forgot-password",
  USER_FORGOT_PASSWORD: "/user-forgot-password",

  RESET_PASSWORD: "/reset-password",
  USER_RESET_PASSWORD:"/emp-reset-password",
  ADMIN_OTP_VERIFY: "/otp-verify",
  EMPLOYEE_OTP_VERIFY:"/emp-otp-verify",
  CHANGE_PASSWORD: "/change-password",
  ADMIN_DASHBOARD: "/admin/dashboard"
} as const;

export type AppRouteKey = keyof typeof appRoutes;
export type AppRoutePath = (typeof appRoutes)[AppRouteKey];
