export interface FormValues {
  email: string;
  password: string;
}

export interface UserLoginProps {
  setUserAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}