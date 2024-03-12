import React from 'react'

function Marquee() {
  return (
    <div>
    <marquee behavior="scroll" direction="left" scrollamount={10}>
    <div className="d-inline-flex align-items-baseline m-4">
        <h2>Welcome, CASHIER | TEMP</h2>
        <h6 className="ms-2">CITY NAME</h6>
        <h2 id='date'>Today is DATE</h2>
  </div>
  </marquee>
</div>  
  )
}

export default Marquee