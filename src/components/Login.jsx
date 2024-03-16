import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./CustomModal.css"; // Import custom CSS file for modal styling
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
// console.log(app);
// console.log(database);


function Login() {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [showModal, setShowModal] = useState(true);
  const handleAccess = () => {
    if (!username || !pin || !selectedArea) {
      alert("Please enter username, pin, and select an area");
      return;
    }
    // NEW CODE to retrieve the user and password from server and check if are same with input
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/`+ username +"/pass"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const retrievedPassword = snapshot.val().password;


          if (retrievedPassword === pin) {
            
            console.log("Admin logged in:", { username, pin, selectedArea });
            setShowModal(false);
            console.log(username);
            // Save username in local storage
            localStorage.setItem("username", username);
            window.location.href = "/home"; // Redirect to home page
          } else {
            console.log("Passwords do not match");
            console.log("Logging in:", { username, pin, selectedArea });
          }
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

  };

  return (
    <Modal show={showModal} backdrop="static" className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={(e) => { e.preventDefault(); handleAccess(); }}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control custom-input"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pin">Pin Number:</label>
            <input
              type="password"
              className="form-control custom-input"
              id="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="area">Area:</label>
            <select
              id="area"
              className="form-control custom-input"
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              required
            >
              <option value="">Select an Area</option>
              <option value="Yorkshire">Yorkshire</option>
              <option value="Derbyshire">Derbyshire</option>
              <option value="Shropshire">Shropshire</option>
              <option value="Nottingham">Nottingham</option>
              <option value="Wolverhampton">Wolverhampton</option>
            </select>
          </div>
          <div className="form-group mb-3"> {}
            <Button variant="primary" type="submit">Access</Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}


export default Login;
