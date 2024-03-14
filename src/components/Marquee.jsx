import React, { useState, useEffect } from 'react';

function Marquee() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function getCurrentTime() {
    return new Date().toLocaleTimeString("en-GB", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZone: "Europe/London",
    });
  }

  const currentDay = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
  });

  const currentDate = new Date().toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <marquee behavior="scroll" direction="left" scrollamount={10}>
        <div className="d-inline-flex align-items-baseline m-4">
          <h2>Welcome, (User)</h2>
          <h6 className="ms-2">CITY NAME</h6>
          <h2 className='marqSpace'>Today is {currentDay} {currentDate}</h2>
          <h2 className='marqSpace'>The time is {currentTime}</h2>
        </div>
      </marquee>
    </div>  
  );
}

export default Marquee;
