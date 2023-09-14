import React from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
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
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="flex flex-col">
        <div className="inline-flex text-2xsm gap-5 font-semibold">
          <p>Days</p>
          <p>Hours</p>
          <p>Minutes</p>
          <p>Seconds</p>
        </div>
    <div className="text-4xl">
      <span>{days} </span>:<span> {hours} </span>:<span> {minutes} </span>:
      <span> {seconds} </span>
    </div>
    </div>
  );
}

export default function Stopwatch() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 705080); //
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
