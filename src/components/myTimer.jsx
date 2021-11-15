import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

export const MyTimer = ({ expiryTimestamp, setEndQuizModal }) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => setEndQuizModal(true),
  });
  useEffect(() => {
    // pause();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {/* <h1>react-timer-hook </h1> */}
      {/* <p>Timer Demo</p> */}
      <div style={{ fontSize: "2rem", color: "#fff" }}>
        <span>{minutes} Min</span>
        &ensp;
        <span>{seconds} Sec</span>
      </div>
      {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
      {/* <button onClick={start}>Start</button> */}
      {/* <button onClick={pause}>Pause</button> */}
      {/* <button onClick={resume}>Resume</button> */}
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time);
        }}
      >
        Restart
      </button>
    </div>
  );
};
