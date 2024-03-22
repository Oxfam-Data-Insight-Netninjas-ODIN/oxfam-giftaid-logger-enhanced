import React, { useState } from 'react'
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

    // Thanks the user for logging the data
    const [gaText, setGaText] = useState('Gift Aid');
    const gaMessage = () => {
      setGaText('Thanks!');
      setTimeout(() => {
        setGaText('Gift Aid'); // Resets the message back after 1 second
      }, 1000);
    };

    const [ngaText, setNgaText] = useState('Not Gift Aid');
    const ngaMessage = () => {
      setNgaText('Thanks!');
      setTimeout(() => {
        setNgaText('Not Gift Aid'); // Resets the message back after 1 second
      }, 1000);
    };

  return (
    <>
    <div className="container">
      <div className="row">
        <div className='col px-4'>
          <div className="circle-wrapper" onClick={() => {
            gaClick();
            gaMessage();
          }}>
            <div className="content-wrapper">
              <img src={tick} alt="Tick icon" className="icon"/>
              <span>{gaText}</span>
            </div>
          </div>
        </div>
        <div className='col px-4'>
          <div id='notBtn' className="button circle-wrapper" onClick={() => {
            ngaClick();
            ngaMessage();
          }}>
            <div className="content-wrapper">
              <img src={cross} alt="Cross icon" className="icon"/>
              <span>{ngaText}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Counter