import { useEffect, useRef, useState } from "react";

export const usePressAndHold = (callback: () => void, delay: number) => {
  const [isHeld, setIsHeld] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
    };
  }, []);

  const onPressIn = () => {
    setIsHeld(true);
    timeoutRef.current = setTimeout(callback, delay);
  };

  const onPressOut = () => {
    setIsHeld(false);
    timeoutRef.current && clearTimeout(timeoutRef.current);
  };

  return {
    onPressIn,
    onPressOut,
    isHeld,
  };
};
