import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { TimerWrapper } from "../styles/utils/timerStyles";
export const MyTimer = ({ expiryTimestamp, setEndQuizModal }) => {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => setEndQuizModal(true),
  });
  useEffect(() => {
    // pause();
  }, []);

  return (
    <TimerWrapper>
      <div className="timer-container">
        <span>{minutes} Min</span>
        &ensp;
        <span>{seconds} Sec</span>
      </div>
    </TimerWrapper>
  );
};
