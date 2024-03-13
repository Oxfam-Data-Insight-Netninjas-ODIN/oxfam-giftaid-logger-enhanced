import React from 'react'
import tick from '../assets/tick.svg'
import cross from '../assets/x.svg'

function Counter({incrementGiftAid, incrementNoGiftAid }) {
  return (
    <>
<div className="container">
  <div className="row">
    <div className="col-sm-4">
      <div className="circle-wrapper">
      <button id='ga-btn' className="circle circle-button m-4" onClick={incrementGiftAid}>
  <img src={tick} alt="Tick" width={150}/>
  <span>Gift Aid</span>
</button>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="circle-wrapper">
        <button id='nga-btn' className="circle circle-button m-4" onClick={incrementNoGiftAid}><img src={cross} width={75} className='mb-3'/>Not Gift Aid</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Counter