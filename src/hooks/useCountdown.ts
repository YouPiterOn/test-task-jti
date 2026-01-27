import { useEffect, useRef, useState } from "react";

export const useCountdown = (initialTime: number) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
    return () => {
      intervalRef.current && clearInterval(intervalRef.current)
    };
  }, [timeLeft, isRunning]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => setTimeLeft(initialTime);

  return { timeLeft, isRunning, start, pause, reset };
};
