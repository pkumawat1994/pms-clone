// import { useLocation, useNavigate } from "react-router-dom";
// // import { useAppDispatch } from "../../../../redux/store";

// import { useEffect, useState } from "react";
// // import { logOut } from "../../../../redux/AllSlices/authSlices/AuthSlice";
// import { useAppDispatch } from "../../../../../redux/store";
// import {
//   deleteEmployee,
//   getEmployeeList,
//   getTaskList,
// } from "../../../../../redux";
// import { appRoutes } from "../../../../../routes/appRoutes";
// import { SelectChangeEvent } from '@mui/material/Select';
// import { useDispatch } from "react-redux";

// export const TaskDetailController = () => {
//   const [taskData, setTaskData] = useState([]);
//   const [taskDetail, setTaskDetail] = useState<Record<string, unknown>>({});
//   const [taskStatus, setTaskStatus] = useState<string>("");
//   const [value, setValue] = useState<number>(0);
//   //timer-state-------------------------------------
//   const initialSeconds = parseInt(
//     localStorage.getItem("timerSeconds") || "0",
//     10
//   );
//   const initialMinutes = parseInt(
//     localStorage.getItem("timerMinutes") || "0",
//     10
//   );
//   const initialHours = parseInt(localStorage.getItem("timerHours") || "0", 10);

//   const [seconds, setSeconds] = useState<number>(initialSeconds);
//   const [minutes, setMinutes] = useState<number>(initialMinutes);
//   const [hours, setHours] = useState<number>(initialHours);
//   const [isRunning, setIsRunning] = useState<boolean>(false);

//   let singleTask = useLocation();
//   let dispatch = useDispatch();
//   let navigate = useNavigate();

//   useEffect(() => {
//     let interval: NodeJS.Timeout;

//     if (isRunning) {
//       interval = setInterval(() => {
//         setSeconds((prevSeconds) => (prevSeconds === 59 ? 0 : prevSeconds + 1));
//         if (seconds === 59) {
//           setMinutes((prevMinutes) =>
//             prevMinutes === 59 ? 0 : prevMinutes + 1
//           );
//           if (minutes === 59) {
//             setHours((prevHours) => prevHours + 1);
//           }
//         }
//       }, 1000);
//     }

//     return () => clearInterval(interval);
//   }, [isRunning, seconds, minutes, hours]);

//   useEffect(() => {
//     const wasTimerRunning = localStorage.getItem("isStatrtTimer") === "true";

//     if (wasTimerRunning) {
//       setIsRunning(true);
//     }
//   }, []);

//   //   const handleChange = (event: SelectChangeEvent<string>) => {
//   //     setTaskStatus(event.target.value);
//   //   };

//   //   const handleStartStop = () => {
//   //     setIsRunning((prevIsRunning) => !prevIsRunning);
//   //   };

//   useEffect(() => {
//     if (isRunning) {
//       localStorage.setItem("timerSeconds", seconds.toString());
//       localStorage.setItem("timerMinutes", minutes.toString());
//       localStorage.setItem("timerHours", hours.toString());
//       localStorage.setItem("isStatrtTimer", isRunning.toString());
//     }
//   }, [isRunning, seconds, minutes, hours]);

//   const handleBack = () => {
//     navigate("/user/dashboard/task-list");
//   };

//   useEffect(() => {
//     let interval: NodeJS.Timeout;

//     if (isRunning) {
//       interval = setInterval(() => {
//         setSeconds((prevSeconds) => (prevSeconds === 59 ? 0 : prevSeconds + 1));
//         if (seconds === 59) {
//           setMinutes((prevMinutes) =>
//             prevMinutes === 59 ? 0 : prevMinutes + 1
//           );
//           if (minutes === 59) {
//             setHours((prevHours) => prevHours + 1);
//           }
//         }
//       }, 1000);
//     }

//     return () => clearInterval(interval);
//   }, [isRunning, seconds, minutes, hours]);

//   useEffect(() => {
//     const wasTimerRunning = localStorage.getItem("isStatrtTimer") === "true";

//     if (wasTimerRunning) {
//       setIsRunning(true);
//     }
//   }, []);

//   const handleChange = (event: SelectChangeEvent<string>) => {
//     setTaskStatus(event.target.value);
//   };

//   const handleStartStop = () => {
//     setIsRunning((prevIsRunning) => !prevIsRunning);
//   };

//   const handleStart = () => {
//     setIsRunning(true);
//     localStorage.setItem("isStatrtTimer", "true");
//     let time = new Date().getTime();
//     let timeObj = { startTime: time, taskId: singleTask?.state?._id };
//     // dispatch(sendTimerData(timeObj));
//   };

//   const handleStop = () => {
//     setIsRunning(false);
//     localStorage.setItem("isStatrtTimer", "false");
//     let time = new Date().getTime();
//     let timeObj = { stopTime: time, taskId: singleTask?.state?._id };
//     // dispatch(sendTimerData(timeObj));
//   };

//   useEffect(() => {
//     if (isRunning) {
//       localStorage.setItem("timerSeconds", seconds.toString());
//       localStorage.setItem("timerMinutes", minutes.toString());
//       localStorage.setItem("timerHours", hours.toString());
//       localStorage.setItem("isStatrtTimer", isRunning.toString());
//     }
//   }, [isRunning, seconds, minutes, hours]);

//   //   const handleBack = () => {
//   //     navigate("/user/dashboard/task-list");
//   //   };

//   const tabhandleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   //timer-end----------------------------

//   //   useEffect(() => {
//   //     dispatch(getTaskList({ navigate })).then((res: any) =>
//   //     setTaskData(res?.payload?.data?.data)
//   //     );
//   //   }, []);

//   const handledTaskDetail = (data: any) => {
//     console.log(data, "viewSIngleData");
//     navigate("/user/dashboard/task-detail", { state: data });
//   };


  
//   //timer-----------
//   function a11yProps(index: number) {
//     return {
//       id: `simple-tab-${index}`,
//       'aria-controls': `simple-tabpanel-${index}`,
//     };
//   }
//   return {
//     handledTaskDetail,
//     taskData,
//     tabhandleChange,
//     handleChange,
//     handleStop,
//     handleStartStop,
//     handleStart,
//     singleTask,
//     dispatch,
//     hours,
//     value,
//     taskStatus,
//     navigate,
//     minutes
//     ,seconds,
//     isRunning,a11yProps
//   };
// };


