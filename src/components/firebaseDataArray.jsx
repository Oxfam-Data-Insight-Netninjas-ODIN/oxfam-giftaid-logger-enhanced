import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set, child, get } from "firebase/database";
import firebaseConfig from "./FirebaseConfig";
import { writeUserData } from "./firebaseFunct.js";

const app = initializeApp(firebaseConfig);
const dbRef = ref(getDatabase());

// Fetch and filter data
get(child(dbRef, `users/`)).then((snapshot) => {
  let storageData = snapshot.val();
  let historyData = [];
  Object.keys(storageData).forEach((key) => {
    const newObject = storageData[key];
    Object.values(newObject).forEach((nestedValue) => {
      historyData.unshift(nestedValue);
    });
  });
  const filteredData = historyData.filter(
    (obj) => !Object.keys(obj).includes("password")
  );
  return filteredData
});


export default filteredData;