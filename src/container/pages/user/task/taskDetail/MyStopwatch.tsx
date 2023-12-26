// MyStopwatch.tsx
import React, { useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import { useStopwatch } from 'react-timer-hook';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useTimer } from './TimerContext'; // Adjust the path accordingly

interface MyStopwatchProps {
  taskId: string;
}

const MyStopwatch: React.FC<MyStopwatchProps> = ({ taskId }) => {
  const { getTimer, setTimer } = useTimer();
  const storedTimer = getTimer(taskId);

  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
  } = useStopwatch();

  const startTimeRef = useRef<number | null>(null);

  const hourTime = hours < 10 ? `0${hours}` : `${hours}`;
  const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;

  useEffect(() => {
    if (storedTimer && storedTimer.isRunning) {
      const elapsedMilliseconds = new Date().getTime() - storedTimer.offsetTimestamp.getTime();
      startTimeRef.current = elapsedMilliseconds;
      start();
    }
  }, [start, storedTimer]);

  const handleStop = () => {
    pause();
    setTimer(taskId, { offsetTimestamp: new Date(), isRunning: false });
  };

  const handleStart = () => {
    start();
    if (!isRunning) {
      setTimer(taskId, { offsetTimestamp: new Date(), isRunning: true });
    }
  };

  return (
    <>
      <Button variant="outlined" color="success">
        {isRunning ? (
          <PauseIcon onClick={handleStop} />
        ) : (
          <PlayArrowIcon onClick={handleStart} />
        )}
        {`${hourTime}:${minuteTime}:${secondTime}`}
      </Button>
    </>
  );
};

export default MyStopwatch;
