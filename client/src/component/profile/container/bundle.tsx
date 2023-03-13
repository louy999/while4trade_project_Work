import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// };
const Bundle = (props) => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("3/20/2023 8:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bundle">
      <div className="title">Bundle</div>
      {partyTime ? (
        <>
          <h1>bundle is balh</h1>
        </>
      ) : (
        <>
          <div className="bundle">
            <span className="title-bundle">Bundle:</span>
            <span className="bundle">gold</span>
          </div>
          <CircularProgressbar
            value={days}
            text={`${days}days`}
            maxValue={30}
          />

          <div className="timer">
            <span className="s">days:</span>
            <span className="time">{days}</span>
            <span className="s">hours:</span>
            <span className="time">{hours}</span>
            <span className="s">minutes:</span>
            <span className="time">{minutes}</span>
            <span className="s">seconds:</span>
            <span className="time">{seconds}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Bundle;
