import React from 'react'

function Counter({incrementGiftAid, incrementNoGiftAid }) {
  return (
    <>
<div className="container">
  <div className="row">
    <div className="col-sm-4">
      <div className="circle-wrapper">
        <button id='ga-btn' className="circle m-4" onClick={incrementGiftAid}><span>Gift Aid</span></button>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="circle-wrapper">
        <button id='nga-btn' className="circle m-4" onClick={incrementNoGiftAid}><span>Not Gift Aid</span></button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Counter