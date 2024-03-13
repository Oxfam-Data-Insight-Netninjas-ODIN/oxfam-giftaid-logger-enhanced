import React from 'react'
import tick from '../assets/tick.svg'
import cross from '../assets/x.svg'

function Counter({incrementGiftAid, incrementNoGiftAid }) {
  return (
    <>
<div className="container">
  <div className="row">
    <div className='col'>
      <div className="circle-wrapper">
      <button className="m-4" onClick={incrementGiftAid}>
  <img src={tick} alt="Tick"/>
  <span>Gift Aid</span>
</button>
</div>
    </div>
    <div className='col'>
      <div id='notBtn' className="circle-wrapper">
        <button className="m-4" onClick={incrementNoGiftAid}><img src={cross} className='mb-3'/>Not Gift Aid</button>
      </div>
    </div>
    </div>
  </div>
    </>
  )
}

export default Counter