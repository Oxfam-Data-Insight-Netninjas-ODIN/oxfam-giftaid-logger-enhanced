import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import Footer from "./Footer";
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set, child, get } from "firebase/database";
import firebaseConfig from "./FirebaseConfig";
import { writeUserData } from "./firebaseFunct.js";
import { TourComponent, TourSteps } from './Tour';
import qmark from '../assets/qmark.svg';

import giftaidproject from "../assets/giftaidsales1.jpg";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function Home() {
  // code here to retrieve user counter history from server for curent date if exist
  // and save it to local storage
  const username = localStorage.getItem("username");
  const dbRef = ref(getDatabase());
  const db = getDatabase();

  // create a constant date with current date in js standard format
  const date = new Date().toISOString().split("T")[0];
  // check if user is already in server db and update server data
  const userId = username;

  const [GiftAid, setGiftAid] = useState(0);
  const [noGiftAid, setNoGiftAid] = useState(0);
  // ==============testin retrieve object ===============

  // ++++++++++++++++++end of test area  +++++++++++++++++

  useEffect(() => {
    get(child(dbRef, `users/` + userId + "/" + date))
      .then((snapshot) => {
        let initialGiftAid = 0;
        let initialNoGiftAid = 0;
        if (snapshot.exists()) {
          initialGiftAid = snapshot.val().gAid;
          localStorage.setItem("countGiftAid", initialGiftAid);
          initialNoGiftAid = snapshot.val().noGAid;
          localStorage.setItem("countNoGiftAid", initialNoGiftAid);
          setGiftAid(initialGiftAid);
          setNoGiftAid(initialNoGiftAid);
        } else {
          console.log("User data on specific date does not exist");
          // !!!! == to define later the userId format == !!!!!!!
          // const userId = username + "1234"
            if (localStorage.getItem("username") !== "admin") {
              const username = localStorage.getItem("username")
              const gAid = 0;
              const noGAid = 0;
              const userId = username + localStorage.getItem("suffix");
              const date = new Date().toISOString().split("T")[0];
              // write data to server
              set(ref(db, "users/" + userId + "/" + date), {
                username : userId,
                name: username,
                GiftAid: gAid,
                noGiftAid: noGAid,
                date: date
              });
            }
              // writeUserData(userId, username, GiftAid, noGiftAid, date);
            };

        })
     
      .catch((error) => {
        console.error(error);
      });
  }, [dbRef, userId, date]);

  useEffect(() => {
    localStorage.setItem("countGiftAid", GiftAid);
    // write data to server
    writeUserData(userId, username, GiftAid, noGiftAid, date);
  }, [GiftAid]);

  useEffect(() => {
    localStorage.setItem("countNoGiftAid", noGiftAid);
    // write datat to server
    writeUserData(userId, username, GiftAid, noGiftAid, date);
  }, [noGiftAid]);

  const incrementGiftAid = () => {
    // to prevent delay in serverdata receiving the last updated value:
    const updatedGiftAid = GiftAid + 1;
    setGiftAid(updatedGiftAid);
 
    writeUserData(userId, username, updatedGiftAid, noGiftAid, date);
  };

  const incrementNoGiftAid = () => {
    const updatedNoGiftAid = noGiftAid + 1;
    setNoGiftAid(updatedNoGiftAid);

    writeUserData(userId, username, GiftAid, updatedNoGiftAid, date);
  };

  const undoGiftAid = () => {
    if (GiftAid >= 1) {
      setGiftAid(GiftAid - 1);
      if (localStorage.getItem("username") !== "admin") {

      };

    }
  };

  const undoNotGiftAid = () => {
    if (noGiftAid >= 1){
      setNoGiftAid(noGiftAid - 1);
      if (localStorage.getItem("username") !== "admin") {

      };

    }
  };
  // check to see if number are 0, if not calculate the percentage
  const percentage =
    GiftAid + noGiftAid !== 0 ? (GiftAid / (GiftAid + noGiftAid)) * 100 : 0;
  const roundPercentage = Math.round(percentage.toFixed(2));

  // Show the tour if it's the first login
  const [isTourOpen, setIsTourOpen] = useState(localStorage.getItem('hasShownTour') === null)
  useEffect(() => {
    if (isTourOpen) {
      localStorage.setItem('hasShownTour', true);
    }
  }, [isTourOpen]);
  

  return (
    <div>
      <TourComponent steps={TourSteps} isOpen={isTourOpen} onRequestClose={() => setIsTourOpen(false)} />
      <Counter
        incrementGiftAid={incrementGiftAid}
        incrementNoGiftAid={incrementNoGiftAid}
      />
      <div id="score" className="container text-center">
        <div className="row justify-content-center">
          <div className="col-6 mb-2">
            <p>
              <span id="gaCount">{GiftAid}</span> Gift Aided
            </p>
            <button className="btn undo" onClick={undoGiftAid}>
              Undo Gift Aid
            </button>
          </div>
          <div className="col-6 mb-2">
            <p>
              <span id="ngaCount">{noGiftAid}</span> Not Gift Aided
            </p>
            <button className="btn undo" onClick={undoNotGiftAid}>
              Undo Not Gift Aid
            </button>
          </div>
          <div id="total" className="col-12 mb-2">
            <p>{roundPercentage}% Total</p>
          </div>
        </div>
      </div>
      <div className="col"><img id="desc" src={giftaidproject} width={1000}></img></div>
      <Footer />
        <img className='float-end mx-3 my-3' id='tour' src={qmark} width={75} onClick={() => setIsTourOpen(true)} alt="Start Tour" />
    </div>

  );
}

export default Home;
