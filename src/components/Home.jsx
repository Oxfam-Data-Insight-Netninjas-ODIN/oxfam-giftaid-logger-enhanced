import React, { useState } from 'react';
import Hero from "./Hero";

function Home() {
  
  const [GiftAid, setGiftAid] = useState(0);
  const [noGiftAid, setNoGiftAid] = useState(0);

  const incrementGiftAid = () => {
    setGiftAid(GiftAid + 1);
  };

  const incrementNoGiftAid = () => {
    setNoGiftAid(noGiftAid + 1);
  };
  

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
    </div>
  );
}

export default Home;
