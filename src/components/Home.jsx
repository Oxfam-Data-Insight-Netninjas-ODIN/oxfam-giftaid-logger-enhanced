import React, { useState, useEffect } from 'react';
import Counter from './Counter';
import Footer from './Footer';
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCFPnbo7r2xIKUqW0I-2vqQS8Cz9G9M_tA",
  authDomain: "oxfamlogger.firebaseapp.com",
  databaseURL:
    "https://oxfamlogger-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "oxfamlogger",
  storageBucket: "oxfamlogger.appspot.com",
  messagingSenderId: "142768490360",
  appId: "1:142768490360:web:24e86a272d49e2ded82a8d",
  measurementId: "G-KY1EJ33Z6G",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


function Home() {
  // code here to retrieve user counter history from server for curent date if exist
  // and save it to local storage 
  const username = localStorage.getItem("username");
  const dbRef = ref(getDatabase());
  const currentDate = new Date().toISOString().split('T')[0];
  console.log(currentDate);
  get(child(dbRef, `users/`+ username + '/'+ currentDate))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("server: " +  snapshot.val());
          const retrievedGAid = snapshot.val().gAid;
          localStorage.setItem('countGiftAid', retrievedGAid);
          const retrievedNoGAid = snapshot.val().NogAid;
          localStorage.setItem('countNoGiftAid', retrievedNoGAid);

        }

      })
      .catch((error) => {
        console.error(error);
      });

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

  const undoGiftAid = () => {
    setGiftAid(GiftAid - 1);
  };

  const undoNotGiftAid = () => {
    setNoGiftAid(noGiftAid - 1);
  };

  const percentage = (GiftAid/ (GiftAid+noGiftAid)) * 100;
  const roundPercentage = Math.round((percentage).toFixed(2));

  return (
<div>
  <Counter incrementGiftAid={incrementGiftAid} incrementNoGiftAid={incrementNoGiftAid} />
  <div id='score' className='container text-center'>
    <div className='row justify-content-center'>
      <div className='col-6 mb-2'>
        <p><span id='gaCount'>{GiftAid}</span> Gift Aided</p>
        <button className='btn undo' onClick={undoGiftAid}>Undo Gift Aid</button>
      </div>
      <div className='col-6 mb-2'>
        <p><span id='ngaCount'>{noGiftAid}</span> Not Gift Aided</p>
        <button className='btn undo' onClick={undoNotGiftAid}>Undo Not Gift Aid</button>
      </div>
      <div id='total' className='col-12 mb-2'>
        <p>{roundPercentage}% Total</p>
      </div>
    </div>
  </div>
  <Footer />
</div>


  );
}

export default Home;
