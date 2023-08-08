import { useState, useEffect } from 'react';
import styled from 'styled-components';
const CountdownTimer = () => {
    const [time, setTime] = useState(3600);
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
        <Timer>{formatTime(time)}</Timer>
    );
};
export default CountdownTimer;
const Timer = styled.div`
    font-size: 30px; 
    font-weight: bold;
`