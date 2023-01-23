import { useState, useEffect, useRef } from "react";

type useResendOtpProps = {
  onTimerComplete?: () => void
  onResendClick?: (remainingTime:boolean) => void
}

const useResendOTP = ({
  onTimerComplete,
  onResendClick
}: useResendOtpProps) => {

  const timeout = useRef();

  const [remainingTime, setRemainingTime] = useState(60);
  const [timeInterval] = useState(1000);

  useEffect(() => {
    if (remainingTime === 0) {
      clearTimeout(timeout.current);
      if (onTimerComplete) {
        onTimerComplete();
      }
    } else {
      setTimeout(() => {
        setRemainingTime(t => t - 1);
      }, timeInterval);
    }
  }, [onTimerComplete, remainingTime, timeInterval]);

  const handelResendClick = () => {
    if (onResendClick) {
      onResendClick(remainingTime === 0);
    }
    setRemainingTime(60);
  };

  return {
    handelResendClick,
    remainingTime
  };
};

export default useResendOTP;
