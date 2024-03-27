import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import Footer from "./Footer";
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set, child, get } from "firebase/database";
import firebaseConfig from "./FirebaseConfig";
import { writeUserData } from "./firebaseFunct.js";
import { TourComponent, TourSteps } from "./Tour";
import qmark from "../assets/qmark.svg";
import giftaidproject from "../assets/giftaidsales1.jpg";
// initialise vriable for firebase server
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
  // set initial hooks for giftAid variables with start pont from local storage

  const [GiftAid, setGiftAid] = useState(
    parseInt(localStorage.getItem("countGiftAid"))
  );
  const [noGiftAid, setNoGiftAid] = useState(
    parseInt(localStorage.getItem("countNoGiftAid"))
  );

  useEffect(() => {
    get(child(dbRef, `users/` + userId + "/" + date))
      .then((snapshot) => {
        let initialGiftAid;
        let initialNoGiftAid;
        if (snapshot.exists()) {
          // if there is user data for current date then update the variable with the one from server
          initialGiftAid = snapshot.val().gAid;
          // localStorage.setItem("countGiftAid", initialGiftAid);
          initialNoGiftAid = snapshot.val().noGAid;
          // localStorage.setItem("countNoGiftAid", initialNoGiftAid);
          setGiftAid(initialGiftAid);
          setNoGiftAid(initialNoGiftAid);
        } else {
          console.log("User data on specific date does not exist");
          // if there is no user data for today then create userdata for today
          if (localStorage.getItem("username") !== "admin") {
            // localStorage.setItem("countGiftAid", 0);
            // localStorage.setItem("countNoGiftAid", 0)
            // create data on server only if current user is not admin
            const name = localStorage.getItem("name");
            const gAid = 20;
            const noGAid = 20;
            const userId = name + localStorage.getItem("suffix");
            const date = new Date().toISOString().split("T")[0];
            console.log(name, gAid,noGAid,userId,date);
            // write data to server
            set(ref(db, "users/" + userId + "/" + date), {
              username: userId,
              name: name,
              GAid: gAid,
              noGAid: noGAid,
              date: date,
            });
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dbRef, userId, date]);

  const name = localStorage.getItem("name");
  // hooks to update the data on server when counter change the local data
  useEffect(() => {
    localStorage.setItem("countGiftAid", GiftAid);
    // write data to server
    writeUserData(userId, name, GiftAid, noGiftAid, date);
  }, [GiftAid]);

  useEffect(() => {
    localStorage.setItem("countNoGiftAid", noGiftAid);
    // write datat to server
    writeUserData(userId, name, GiftAid, noGiftAid, date);
  }, [noGiftAid]);

  // functions to update the data when clicked
  const incrementGiftAid = () => {
    // to prevent delay in serverdata receiving the last updated value:
    const updatedGiftAid = GiftAid + 1;
    setGiftAid(updatedGiftAid);
    writeUserData(userId, name, updatedGiftAid, noGiftAid, date);
  };
  const incrementNoGiftAid = () => {
    const updatedNoGiftAid = noGiftAid + 1;
    setNoGiftAid(updatedNoGiftAid);
    writeUserData(userId, name, GiftAid, updatedNoGiftAid, date);
  };
  const undoGiftAid = () => {
    if (GiftAid >= 1) {
      setGiftAid(GiftAid - 1);
      if (localStorage.getItem("username") !== "admin") {
      }}};
  const undoNotGiftAid = () => {
    if (noGiftAid >= 1) {
      setNoGiftAid(noGiftAid - 1);
      if (localStorage.getItem("username") !== "admin") {
      }}};
  // check to see if number are 0, if not calculate the percentage
  const percentage =
    GiftAid + noGiftAid !== 0 ? (GiftAid / (GiftAid + noGiftAid)) * 100 : 0;
  const roundPercentage = Math.round(percentage.toFixed(2));

  // Show the tour if it's the first login
  const [isTourOpen, setIsTourOpen] = useState(
    localStorage.getItem("hasShownTour") === null
  );
  useEffect(() => {
    if (isTourOpen) {
      localStorage.setItem("hasShownTour", true);
    }
  }, [isTourOpen]);

  return (
    <div>
      <TourComponent
        steps={TourSteps}
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)}
      />
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
      <div className="col">
        <img id="desc" src={giftaidproject} width={1000}></img>
      </div>
      <Footer />
      <img
        className="float-end mx-3 my-3"
        id="tour"
        src={qmark}
        width={75}
        onClick={() => setIsTourOpen(true)}
        alt="Start Tour"
      />
    </div>
  );
}

export default Home;
