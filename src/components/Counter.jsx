import React from 'react'
import tick from '../assets/tick.svg'
import cross from '../assets/x.svg'

function Counter({incrementGiftAid, incrementNoGiftAid }) {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className='col'>
          <div className="circle-wrapper" onClick={incrementGiftAid}>
            <div className="content-wrapper">
              <img src={tick} alt="Tick" className="icon"/>
              <span>Gift Aid</span>
            </div>
          </div>
        </div>
        <div className='col'>
          <div id='notBtn' className="circle-wrapper" onClick={incrementNoGiftAid}>
            <div className="content-wrapper">
              <img src={cross} alt="Cross" className="icon"/>
              <span>Not Gift Aid</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Counter