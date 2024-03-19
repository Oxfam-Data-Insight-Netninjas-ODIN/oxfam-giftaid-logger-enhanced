import React, { useState, useEffect } from "react";
import "./styleComponents.css";
import GlobalUserData from './globalUserData.json'
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set, child, get } from "firebase/database";
import firebaseConfig from "./FirebaseConfig";
import { writeUserData } from "./firebaseFunct.js";

const app = initializeApp(firebaseConfig);
const dbRef = ref(getDatabase());

// Fetch and filter data from server
const fetchData = () => {
  return new Promise((resolve, reject) => {
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
      // add procentage to database array
      filteredData.forEach((item) => {
        item.proc = Math.round((item.gAid * 100) / (item.gAid + item.noGAid)) || 0;
      });
      // Sort filteredData in descending order based on the 'proc' key
      filteredData.sort((a, b) => b.proc - a.proc);

      resolve(filteredData);
    }).catch((error) => {
      reject(error);
    });

  });
};

// Usage
fetchData().then((filteredData) => {
  console.log("no errors"); // Access filteredData here
}).catch((error) => {
  console.error(error);
});

function TopScores() {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setFilteredData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome !</h1>
      <p>text here</p>
      <div className="localScores">
        <h3>Local Scores here</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>User Code</th>
              <th>Name</th>
              <th>Gift Aid</th>
              <th>No Gift Aid</th>
              <th>Percentage</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
          {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.username}</td>
                <td>{item.name}</td>
                <td>{item.gAid}</td>
                <td>{item.noGAid}</td>
                <td>{item.proc}%</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopScores;
