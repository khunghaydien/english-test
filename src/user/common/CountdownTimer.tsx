import classNames from "classnames";
import { useState, useEffect } from "react";
import styled from "styled-components";
type Props = {
  started: number;
  className?: string;
};
const CountdownTimer = ({ started, className }: Props) => {
  const [time, setTime] = useState(started);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className={classNames(className, "timer")}>
      <Timer>{formatTime(time)}</Timer>
    </div>
  );
};
export default CountdownTimer;
const Timer = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
