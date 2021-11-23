import React from "react";
import { useTimer } from "react-timer-hook";
import { TimerWrapper } from "../styles/utils/timerStyles";
export const MyTimer = ({ expiryTimestamp, setSuccessModal }) => {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => setSuccessModal(true),
  });

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
