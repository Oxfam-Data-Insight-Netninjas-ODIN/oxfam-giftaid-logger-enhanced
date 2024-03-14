import React from 'react'
import tick from '../assets/tick.svg'
import cross from '../assets/x.svg'

function Counter({incrementGiftAid, incrementNoGiftAid }) {
  return (
    <>
<div className="container">
  <div className="row">
    <div className='col'>
      <button className="circle-wrapper" onClick={incrementGiftAid}>
      <button >
  <img src={tick} alt="Tick"/>
  <span>Gift Aid</span>
</button>
</button>
    </div>
    <div className='col'>
      <button id='notBtn' className="circle-wrapper" onClick={incrementNoGiftAid}>
        <button><img src={cross}/> Not Gift Aid</button>
      </button>
    </div>
    </div>
  </div>
    </>
  )
}

export default Counter