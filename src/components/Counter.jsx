import React from 'react'
import tick from '../assets/tick.svg'
import cross from '../assets/x.svg'
import gaSound from '../assets/ga.wav'
import ngaSound from '../assets/nga.wav'

function Counter({incrementGiftAid, incrementNoGiftAid }) {

  function playSound(sound) {
    const audio = new Audio(sound);
    audio.play();
  }

  function gaClick() {
    playSound(gaSound);
    incrementGiftAid();
  }
  
  function ngaClick() {
    playSound(ngaSound);
    incrementNoGiftAid();
  }

  return (
    <>
    <div className="container">
      <div className="row">
        <div className='col'>
          <div className="circle-wrapper" onClick={gaClick}>
            <div className="content-wrapper">
              <img src={tick} alt="Tick" className="icon"/>
              <span>Gift Aid</span>
            </div>
          </div>
        </div>
        <div className='col'>
          <div id='notBtn' className="button circle-wrapper" onClick={ngaClick}>
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