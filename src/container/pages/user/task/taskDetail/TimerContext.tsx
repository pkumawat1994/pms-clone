// TimerContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TimerContextProps {
  getTimer: (taskId: string) => TimerState | undefined;
  setTimer: (taskId: string, timer: TimerState) => void;
}

interface TimerState {
  offsetTimestamp: Date;
  isRunning: boolean;
}

const TimerContext = createContext<TimerContextProps | undefined>(undefined);

interface TimerProviderProps {
  children: ReactNode;
}

export const TimerProvider: React.FC<TimerProviderProps> = ({ children }) => {
  const [taskTimers, setTaskTimers] = useState<Record<string, TimerState>>({});

  const getTimer = (taskId: string) => {
    return taskTimers[taskId];
  };

  const setTimer = (taskId: string, timer: TimerState) => {
    setTaskTimers((prevTimers) => ({
      ...prevTimers,
      [taskId]: timer,
    }));
  };

  return (
    <TimerContext.Provider value={{ getTimer, setTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = (): TimerContextProps => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};
