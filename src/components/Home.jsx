import React, { useState, useEffect } from 'react';
import Counter from './Counter';
import Footer from './Footer';
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set, child, get } from "firebase/database";
import firebaseConfig from './FirebaseConfig';
import {writeUserData} from './firebaseFunct.js'

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


function Home() {
  // code here to retrieve user counter history from server for curent date if exist
  // and save it to local storage 
  const username = localStorage.getItem("username");
  const dbRef = ref(getDatabase());
  // create a constant date with current date in js standard format
  const date = new Date().toISOString().split('T')[0];

  // check if user is already in server db and update server data 
  const userId = username + "1234";
  get(child(dbRef, `users/`+ username+"1234" + '/'+ date))
      .then((snapshot) => {
        console.log(snapshot.key);
        if (snapshot.exists()) {
          console.log("server: " +  snapshot.val().gAid);
          const retrievedGAid = snapshot.val().gAid;
          localStorage.setItem('countGiftAid', retrievedGAid);
          const retrievedNoGAid = snapshot.val().noGAid;
          localStorage.setItem('countNoGiftAid', retrievedNoGAid);

        } else {
          console.log("User data on specific date does not exist");
          // !!!! == to define later the userId format == !!!!!!!
          // const userId = username + "1234"
          const password = "1234"
          console.log(userId, username, GiftAid, noGiftAid, date);
          // write data to server
          writeUserData(userId, username, GiftAid, noGiftAid, date);
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
    writeUserData(userId, username, GiftAid, noGiftAid, date);
  };

  const incrementNoGiftAid = () => {
    setNoGiftAid(noGiftAid + 1);
    writeUserData(userId, username, GiftAid, noGiftAid, date);
  };

  const undoGiftAid = () => {
    setGiftAid(GiftAid - 1);
    writeUserData(userId, username, GiftAid, noGiftAid, date);
  };

  const undoNotGiftAid = () => {
    setNoGiftAid(noGiftAid - 1);
    writeUserData(userId, username, GiftAid, noGiftAid, date);
  };
  // check to see if number are 0, if not calculate the percentage
  const percentage = (GiftAid + noGiftAid !== 0) ? (GiftAid / (GiftAid + noGiftAid)) * 100 : 0;
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
