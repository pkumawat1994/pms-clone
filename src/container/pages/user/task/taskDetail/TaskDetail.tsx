import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useStopwatch } from "react-timer-hook";
import { TimerProvider } from "./TimerContext";
import MyStopwatch from "./MyStopwatch";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const TaskDetail: React.FC = () => {
  const [taskDetail, setTaskDetail] = useState({});
  const [taskStatus, setTaskStatus] = useState("");
  const [value, setValue] = React.useState<number>(0);
  const singleTask = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  let interval: NodeJS.Timeout;




  const [wasTimerStopped, setWasTimerStopped] = useState<boolean>(false);

  useEffect(() => {
    

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => (prevSeconds === 59 ? 0 : prevSeconds + 1));
        if (seconds === 59) {
          setMinutes((prevMinutes) =>
            prevMinutes === 59 ? 0 : prevMinutes + 1
          );
          if (minutes === 59) {
            setHours((prevHours) => prevHours + 1);
          }
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
      if (!isRunning) {
        setWasTimerStopped(true);
      }
    };
  }, [isRunning, seconds, minutes, hours]);

  useEffect(() => {
    // If the timer was stopped when navigating away, reset the state
    if (wasTimerStopped) {
      setWasTimerStopped(false);
    }
  }, [wasTimerStopped]);








  useEffect(() => {
    return () => {
      // Cleanup code when the component is unmounted
      clearInterval(interval);
    };
  }, []);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleStart = () => {
    setIsRunning(true);
    let time = new Date().getTime();
    let timeObj = { startTime: time, taskId: singleTask?.state?._id };
    // dispatch(sendTimerData(timeObj));
  };

  const handleStop = () => {
    setIsRunning(false);
    let time = new Date().getTime();
    let timeObj = { stopTime: time, taskId: singleTask?.state?._id };
    // dispatch(sendTimerData(timeObj));
  };

  useEffect(() => {
    if (isRunning) {
      localStorage.setItem("timerSeconds", seconds.toString());
      localStorage.setItem("timerMinutes", minutes.toString());
      localStorage.setItem("timerHours", hours.toString());
    }
  }, [isRunning, seconds, minutes, hours]);

  const handleBack = () => {
    navigate("/admin/task-list");
  };

  const tabhandleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

      const handleChange = (event: SelectChangeEvent<string>) => {
            setTaskStatus(event.target.value);
          };

  return (
    <>
      <Box className="task-detail-wrapper">
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Box className="task-head">
              <Box className="task-head-data">
                <h3 style={{color:"#3498db",fontWeight:"bold"}}>React/Node-025</h3>
              </Box>
              <Box className="btn-box">
                <Button className="edit-btn" variant="contained">
                  <EditNoteIcon />
                </Button>
                <Button
                  color="warning"
                  className="edit-btn"
                  variant="contained"
                  onClick={handleBack}
                >
                  {<ArrowBackIcon />}Back
                </Button>
              </Box>
            </Box>
            <Box className="tast-title">
              <p>task management ,create task, user upload</p>
            </Box>

            <Box className="tast-description">
              <h3 style={{color:"#3498db",fontWeight:"bold"}}>Description</h3>
              <p>task management ,create task, user upload</p>
            </Box>
            <Box className="activity">Activity</Box>

            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={tabhandleChange} aria-label="basic tabs example">
                  <Tab label="Comment" {...a11yProps(0)} />
                  <Tab label="History" {...a11yProps(1)} />
                  <Tab label="Hours log" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Box className="activity">
                  <TextareaAutosize
                    minRows={10}
                    style={{ width: "100%" }} // Set the desired width here
                    // size="lg"
                    // variant="outlined"
                  />
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                Item Two
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Item Three
              </CustomTabPanel>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box className="progress-btn">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={taskStatus}
                    onChange={handleChange}
                    displayEmpty
                  >
                    <MenuItem disabled value="">
                      status
                    </MenuItem>
                    <MenuItem value={"inProgress"}>IN PROGRESS</MenuItem>
                    <MenuItem value={"developmentDone"}>
                      DEVELOPMENT DONE
                    </MenuItem>
                    <MenuItem value={"rejected"}>REJECTED</MenuItem>
                    <MenuItem value={"onHold"}>ON HOLD</MenuItem>
                    <MenuItem value={"readyForQA"}>READY FOR QA</MenuItem>
                    <MenuItem value={"reopen"}>REOPEN</MenuItem>
                    <MenuItem value={"readyForUAT"}>READY FOR UAT</MenuItem>
                    <MenuItem value={"close"}>CLOSE</MenuItem>
                  </Select>
                </Box>
                <Box className="timer-btn">
                <TimerProvider>
                  <MyStopwatch taskId={singleTask?.state?._id}/>
                  </TimerProvider>
                  {/* <Button variant="outlined" color="success" onClick={handleStartStop}>
                    {isRunning ? (
                      <PauseIcon onClick={handleStop} />
                    ) : (
                      <PlayArrowIcon onClick={handleStart} />
                    )}
                    {String(hours).padStart(2, "0")}:
                    {String(minutes).padStart(2, "0")}:
                    {String(seconds).padStart(2, "0")}
                  </Button> */}
                </Box>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={6}>
                <p style={{color:"#3498db",fontWeight:"bold"}}>Project Name</p>
              </Grid>
              <Grid item xs={6}>
                <p>React/Node R&D</p>
              </Grid>
              <Grid item xs={6}>
                <p style={{color:"#3498db",fontWeight:"bold"}}>Priority</p>
              </Grid>
              <Grid item xs={6}>
                <p>(Medium)</p>
              </Grid>
              <Grid item xs={6}>
                <p style={{color:"#3498db",fontWeight:"bold"}}>Assignees</p>
              </Grid>
              <Grid item xs={6}>
                <p>React/Node R&D</p>
              </Grid>
              <Grid item xs={6}>
                <p style={{color:"#3498db",fontWeight:"bold"}}>Reporter</p>
              </Grid>
              <Grid item xs={6}>
                <p>Durgesh sir</p>
              </Grid>
              <Grid item xs={6}>
                <p style={{color:"#3498db",fontWeight:"bold"}}>Sprint</p>
              </Grid>
              <Grid item xs={6}>
                <p>-</p>
              </Grid>
              <Grid item xs={6}>
                <p style={{color:"#3498db",fontWeight:"bold"}}>Assigned Date</p>
              </Grid>
              <Grid item xs={6}>
                <p>21-12-2023</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TaskDetail;




// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Select,
//   SelectChangeEvent,
//   TextareaAutosize,
//   Typography,
// } from "@mui/material";
// import EditNoteIcon from "@mui/icons-material/EditNote";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import PauseIcon from "@mui/icons-material/Pause";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { useDispatch } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// // import { sendTimerData } from "../../../../redux";
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// const CustomTabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// };

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// const TaskDetail: React.FC = () => {
//   const [taskDetail, setTaskDetail] = useState({});
//   const [taskStatus, setTaskStatus] = useState("");
//   const [value, setValue] = React.useState<number>(0);
//   const singleTask = useLocation();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [seconds, setSeconds] = useState<number>(0);
//   const [minutes, setMinutes] = useState<number>(0);
//   const [hours, setHours] = useState<number>(0);
//   const [isRunning, setIsRunning] = useState<boolean>(false);

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

//   const handleStartStop = () => {
//     setIsRunning((prevIsRunning) => !prevIsRunning);
//   };

//   const handleStart = () => {
//     setIsRunning(true);
//     let time = new Date().getTime();
//     let timeObj = { startTime: time, taskId: singleTask?.state?._id };
//     // dispatch(sendTimerData(timeObj));
//   };

//   const handleStop = () => {
//     setIsRunning(false);
//     let time = new Date().getTime();
//     let timeObj = { stopTime: time, taskId: singleTask?.state?._id };
//     // dispatch(sendTimerData(timeObj));
//   };

//   useEffect(() => {
//     if (isRunning) {
//       localStorage.setItem("timerSeconds", seconds.toString());
//       localStorage.setItem("timerMinutes", minutes.toString());
//       localStorage.setItem("timerHours", hours.toString());
//     }
//   }, [isRunning, seconds, minutes, hours]);

//   const handleBack = () => {
//     navigate("/admin/task-list");
//   };

//   const tabhandleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//     setValue(newValue);
//   };

//   function a11yProps(index: number) {
//         return {
//           id: `simple-tab-${index}`,
//           'aria-controls': `simple-tabpanel-${index}`,
//         };
//       }

//       const handleChange = (event: SelectChangeEvent<string>) => {
//             setTaskStatus(event.target.value);
//           };

//   return (
//     <>
//       <Box className="task-detail-wrapper">
//         <Grid container spacing={2}>
//           <Grid item xs={9}>
//             <Box className="task-head">
//               <Box className="task-head-data">
//                 <h3 style={{color:"#3498db",fontWeight:"bold"}}>React/Node-025</h3>
//               </Box>
//               <Box className="btn-box">
//                 <Button className="edit-btn" variant="contained">
//                   <EditNoteIcon />
//                 </Button>
//                 <Button
//                   color="warning"
//                   className="edit-btn"
//                   variant="contained"
//                   onClick={handleBack}
//                 >
//                   {<ArrowBackIcon />}Back
//                 </Button>
//               </Box>
//             </Box>
//             <Box className="tast-title">
//               <p>task management ,create task, user upload</p>
//             </Box>

//             <Box className="tast-description">
//               <h3 style={{color:"#3498db",fontWeight:"bold"}}>Description</h3>
//               <p>task management ,create task, user upload</p>
//             </Box>
//             <Box className="activity">Activity</Box>

//             <Box sx={{ width: '100%' }}>
//               <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                 <Tabs value={value} onChange={tabhandleChange} aria-label="basic tabs example">
//                   <Tab label="Comment" {...a11yProps(0)} />
//                   <Tab label="History" {...a11yProps(1)} />
//                   <Tab label="Hours log" {...a11yProps(2)} />
//                 </Tabs>
//               </Box>
//               <CustomTabPanel value={value} index={0}>
//                 <Box className="activity">
//                   <TextareaAutosize
//                     minRows={10}
//                     style={{ width: "100%" }} // Set the desired width here
//                     // size="lg"
//                     // variant="outlined"
//                   />
//                 </Box>
//               </CustomTabPanel>
//               <CustomTabPanel value={value} index={1}>
//                 Item Two
//               </CustomTabPanel>
//               <CustomTabPanel value={value} index={2}>
//                 Item Three
//               </CustomTabPanel>
//             </Box>
//           </Grid>
//           <Grid item xs={3}>
//             <Grid container spacing={2}>
//               <Grid item xs={6}>
//                 <Box className="progress-btn">
//                   <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={taskStatus}
//                     onChange={handleChange}
//                     displayEmpty
//                   >
//                     <MenuItem disabled value="">
//                       status
//                     </MenuItem>
//                     <MenuItem value={"inProgress"}>IN PROGRESS</MenuItem>
//                     <MenuItem value={"developmentDone"}>
//                       DEVELOPMENT DONE
//                     </MenuItem>
//                     <MenuItem value={"rejected"}>REJECTED</MenuItem>
//                     <MenuItem value={"onHold"}>ON HOLD</MenuItem>
//                     <MenuItem value={"readyForQA"}>READY FOR QA</MenuItem>
//                     <MenuItem value={"reopen"}>REOPEN</MenuItem>
//                     <MenuItem value={"readyForUAT"}>READY FOR UAT</MenuItem>
//                     <MenuItem value={"close"}>CLOSE</MenuItem>
//                   </Select>
//                 </Box>
//                 <Box className="timer-btn">
//                   <Button variant="outlined" color="success" onClick={handleStartStop}>
//                     {isRunning ? (
//                       <PauseIcon onClick={handleStop} />
//                     ) : (
//                       <PlayArrowIcon onClick={handleStart} />
//                     )}
//                     {String(hours).padStart(2, "0")}:
//                     {String(minutes).padStart(2, "0")}:
//                     {String(seconds).padStart(2, "0")}
//                   </Button>
//                 </Box>
//               </Grid>
//               <Grid item xs={6}></Grid>
//               <Grid item xs={6}>
//                 <p style={{color:"#3498db",fontWeight:"bold"}}>Project Name</p>
//               </Grid>
//               <Grid item xs={6}>
//                 <p>React/Node R&D</p>
//               </Grid>
//               <Grid item xs={6}>
//                 <p style={{color:"#3498db",fontWeight:"bold"}}>Priority</p>
//               </Grid>
//               <Grid item xs={6}>
//                 <p>(Medium)</p>
//               </Grid>
//               <Grid item xs={6}>
//                 <p style={{color:"#3498db",fontWeight:"bold"}}>Assignees</p>
//               </Grid>
//               <Grid item xs={6}>
//                 <p>React/Node R&D</p>
//               </Grid>
//               <Grid item xs={6}>
//                 <p style={{color:"#3498db",fontWeight:"bold"}}>Reporter</p>
//               </Grid>
//               <Grid item xs={6}>
//                 <p>Durgesh sir</p>
//               </Grid>
//               <Grid item xs={6}>
//                 <p style={{color:"#3498db",fontWeight:"bold"}}>Sprint</p>
//               </Grid>
//               <Grid item xs={6}>
//                 <p>-</p>
//               </Grid>
//               <Grid item xs={6}>
//                 <p style={{color:"#3498db",fontWeight:"bold"}}>Assigned Date</p>
//               </Grid>
//               <Grid item xs={6}>
//                 <p>21-12-2023</p>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default TaskDetail;

