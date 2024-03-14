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
      <button onClick={incrementGiftAid}>
  <img src={tick} alt="Tick"/>
  <span>Gift Aid</span>
</button>
</div>
    </div>
    <div className='col'>
      <div id='notBtn' className="circle-wrapper">
        <button onClick={incrementNoGiftAid}><img src={cross}/> Not Gift Aid</button>
      </div>
    </div>
    </div>
  </div>
    </>
  )
}

export default Counter