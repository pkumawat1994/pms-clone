import { boolean } from "yup";

export interface updateFormValues {
    emp_name:string;
    emp_phoneNumber:string;
    emp_email: string;
    // emp_password: string;
    // confirm_Password: string;
    emp_role:string;
    // emp_profileImage:string;
    emp_dateofbirth:string;
  }

export interface rolelistMap {
  
    _id: string;
    roleName: string;
    isDeleted: boolean

}

//   emp_name,
//   emp_email,
//   emp_password,
//   emp_phoneNumber,
//   emp_role,
// emp_dateofbirth, 
//    admin auth(token)