import { useNavigate } from "react-router-dom";
// import { useAppDispatch } from "../../../../redux/store";

import { useEffect, useState } from "react";
// import { logOut } from "../../../../redux/AllSlices/authSlices/AuthSlice";
import { useAppDispatch } from "../../../../../redux/store";
import { deleteEmployee, getEmployeeList, getTaskList } from "../../../../../redux";
import { appRoutes } from "../../../../../routes/appRoutes";
import { taskId } from "./IUserTaskList";

export const UserTaskListController = () => {
  const [taskData, setTaskData] = useState([]);
  let dispatch = useAppDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getTaskList({ navigate })).then((res: any) =>
    setTaskData(res?.payload?.data?.data)
    );
  }, []);
  console.log(taskData,"taskData")
  // /employee/delete-employee
  const handleDelete = (id: taskId) => {
    // dispatch(deleteEmployee({ data: id, navigate })).then((res:any) => {
    //     // console.log(res,"deleteEmployee-response")
    //   if (res.payload.data.status == 200) {
    //     dispatch(getEmployeeList({ navigate })).then((res:any) =>{
    //         console.log(res,"getEmployeeList-respomnse")
    //         setEmployeeData(res?.payload?.data?.data)
    //     }
    //     );
    //   }
    // });
  };
  const handleLogoutClick=()=>{
    // dispatch(logOut());
  }
  const handleEdit = (data: {}) => {
    // Handle edit logic with the provided ID
    console.log(data);
    // navigate("/dashboard/add-employee", { state: { data } });
  };

  const handledTaskDetail = (data:any) => {
    console.log(data,"viewSIngleData")
    navigate("/user/dashboard/task-detail",{state:data});
  };
  
  return {
    handleEdit,
    handleDelete,
    handledTaskDetail,
    taskData,
    handleLogoutClick
  };
};
