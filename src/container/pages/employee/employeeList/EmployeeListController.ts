import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../redux/store";
import { deleteEmployee, getEmployeeList } from "../../../../redux";
import {  employeeIDT } from "./IEmployeeList";
import { useEffect, useState } from "react";
import { logOut } from "../../../../redux/AllSlices/authSlices/AuthSlice";
import { appRoutes } from "../../../../routes/appRoutes";

export const EmployeeListController = () => {
  const [employeeData, setEmployeeData] = useState([]);
  let dispatch = useAppDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getEmployeeList({ navigate })).then((res: any) =>
      setEmployeeData(res?.payload?.data?.data)
    );
  }, []);

  const handleDelete = (id: employeeIDT) => {
    dispatch(deleteEmployee({ data: id, navigate })).then((res:any) => {
        // console.log(res,"deleteEmployee-response")
      if (res.payload.data.status == 200) {
        dispatch(getEmployeeList({ navigate })).then((res:any) =>{
            console.log(res,"getEmployeeList-respomnse")
            setEmployeeData(res?.payload?.data?.data)
        }
        );
      }
    });
  };
  const handleLogoutClick=()=>{
    dispatch(logOut());
  }
  const handleEdit = (data: {}) => {
    // Handle edit logic with the provided ID
    console.log(data);
    navigate(appRoutes.SIGNUP, { state: { data } });
  };
  const handleBack = () => {
    navigate("/");
  };
  return {
    handleEdit,
    handleDelete,
    employeeData,
    handleBack,
    handleLogoutClick
  };
};
