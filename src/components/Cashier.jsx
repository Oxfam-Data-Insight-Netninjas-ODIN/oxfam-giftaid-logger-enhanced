import React, { useEffect, useState } from "react";
import axios from "axios";

const Cashiers = []; // Initially empty, to be populated from the database later

function generateUserCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}

function CashierData() {
  const [userName, setUserName] = useState("anonymous");
  const [userCode, setUserCode] = useState("");
  const [totalGiftAidClicksToday, setTotalGiftAidClicksToday] = useState(0);
  const [totalClicksToday, setTotalClicksToday] = useState(0);

  useEffect(() => {
    // Fetch user data from the database for demonstration purposes, we will set the user name directly here replace this with your actual logic to fetch user data
    axios.get("/api/cashiers")
      .then(response => {
        // Assuming response.data is an array of cashier objects
        setCashiers(response.data);
      })
      .catch(error => {
        console.error("Error fetching cashiers:", error);
      });
  }, []);

  useEffect(() => {
    // Perform any necessary side effects when user data changes, for example, update the user interface or make API calls this useEffect hook will be triggered whenever userName or userCode changes
  }, [userName, userCode]);

  const handleUserChange = (newUserName) => {
    // Handle user selection change here
    setUserName(newUserName);
    setUserCode(generateUserCode());
    // Perform any other necessary actions, like fetching user-specific data
  };

  // We need to define other functions like localDataWork, incrementCounter, updateTable, etc.

  return (
    <div>
      <ul id="users">
        {Cashiers.map((cashier, index) => (
          <li key={index} className="cashier" onClick={() => handleUserChange(cashier.firstName)}>
            {cashier.firstName}
          </li>
        ))}
      </ul>
      <div id="percent-count"></div>
      {/* Other JSX elements if required */}
    </div>
  );
}

export default CashierData;