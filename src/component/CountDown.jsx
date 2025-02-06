import React, { useEffect, useState } from 'react'

function CountDown() {
    const randomDays = Math.floor(Math.random() * (30 - 2 + 1)) + 2; // Random days between 2 and 30
  const initialTimeLeft = randomDays * 24 * 3600; // Convert days to seconds (1 day = 24 hours = 86400 seconds)

  const [timeLeft, setTimeLeft] = useState(initialTimeLeft); //time in seconds
  

  useEffect(() => {
    if (timeLeft === 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const days = Math.floor(timeLeft / 86400); // 1 day = 86400 seconds
  const hours = Math.floor((timeLeft % 86400) / 3600); // using remainder to see if we have any seconds left then converting it into hours 
    const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  return (
    <div className="limited-timer-container">
          <div className="time-date-container">
            <span>{days < 10 ? `0${days}` : days}</span>
            <p>Days</p>
          </div>
          <p id="colon">:</p>

          <div className="time-date-container">
            <span>{hours < 10 ? `0${hours}` : hours}</span>
            <p>hours</p>
          </div>
          <p id="colon">:</p>

          <div className="time-date-container">
            <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
            <p>mins</p>
          </div>
          <p id="colon">:</p>

          <div className="time-date-container">
            <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
            <p>sec</p>
          </div>
        </div>
        
  )
}

export default CountDown