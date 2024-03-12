import React, { useState, useEffect } from 'react';
import Hero from "./Hero";
import Counter from './Counter';

function Home() {
  
  const [GiftAid, setGiftAid] = useState(() => {
    const savedCountYes = localStorage.getItem('countGiftAid');
    return savedCountYes ? parseInt(savedCountYes, 10) : 0;
  });
  useEffect(() => {
    localStorage.setItem('countGiftAid', GiftAid);
  }, [GiftAid]);  


  const [noGiftAid, setNoGiftAid] = useState(() => {
    const savedCountNo = localStorage.getItem('countNoGiftAid');
    return savedCountNo ? parseInt(savedCountNo, 10) : 0;
  });
  useEffect(() => {
    localStorage.setItem('countNoGiftAid', noGiftAid);
  }, [noGiftAid]); 

  const incrementGiftAid = () => {
    setGiftAid(GiftAid + 1);
  };

  const incrementNoGiftAid = () => {
    setNoGiftAid(noGiftAid + 1);
  };

  const percentage = (GiftAid/ (GiftAid+noGiftAid)) * 100;
  const roundPercentage = Math.round((percentage).toFixed(2));
  

  return (
<div>
  <Counter incrementGiftAid={incrementGiftAid} incrementNoGiftAid={incrementNoGiftAid} />
  <div id='score' className='container text-center'>
    <div className='row justify-content-center'>
      <div className='col-12 mb-2'>
        <p><span id='gaCount'>{GiftAid}</span>Gift Aided</p>
      </div>
      <div className='col-12 mb-2'>
        <p><span id='ngaCount'>{noGiftAid}</span> Not Gift Aided</p>
      </div>
      <div className='col-12 mb-2'>
        <p>{roundPercentage}% Total</p>
      </div>
      <div className='col-12'>
        <button className='btn'>Undo Gift Aid</button>
      </div>
    </div>
  </div>
</div>


  );
}

export default Home;
