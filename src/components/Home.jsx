import React, { useState, useEffect } from 'react';
import Hero from "./Hero";

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
      <Hero>
        <h1>Title here</h1>
      </Hero>
      <h1>Welcome !</h1>
      <p>text here</p>

      <button style={{ fontSize: '2em', padding: '10px 20px', marginRight: '10px' }} onClick={incrementGiftAid}>
        Increase GiftAid
      </button>
      <button style={{ fontSize: '2em', padding: '10px 20px' }} onClick={incrementNoGiftAid}>
        Increase noGiftAid
      </button>
      <p>GiftAid: {GiftAid}</p>
      <p>noGiftAid: {noGiftAid}</p>
      <p>Percentage: {roundPercentage}%</p>
    </div>
  );
}

export default Home;
