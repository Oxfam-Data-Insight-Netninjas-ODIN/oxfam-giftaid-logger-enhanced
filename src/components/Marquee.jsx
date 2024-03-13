import React from 'react'

function Marquee() {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });

  const currentTime = new Date().toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Europe/London",
  });

  return (
    <div>
    <marquee behavior="scroll" direction="left" scrollamount={10}>
    <div className="d-inline-flex align-items-baseline m-4">
        <h2>Welcome, CASHIER | TEMP</h2>
        <h6 className="ms-2">CITY NAME</h6>
        <h2 className='marqSpace'>Today is {currentDate}</h2>
        <h2 className='marqSpace'>The time is {currentTime}</h2>
  </div>
  </marquee>
</div>  
  )
}

export default Marquee