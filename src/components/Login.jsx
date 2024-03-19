import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./CustomModal.css"; // Import custom CSS file for modal styling
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set, child, get } from "firebase/database";
import firebaseConfig from './FirebaseConfig';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


function Login() {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [showModal, setShowModal] = useState(true);
  const handleAccess = (event) => {
    event.preventDefault()
    if (!username || !pin || !selectedArea) {
      alert("Please enter username, pin, and select an area");
      return;
    }
    // NEW CODE to retrieve the user and password from server and check if are same with input
    const dbRef = ref(getDatabase());
    const userId = username + "1234";
    get(child(dbRef, `users/`+ userId))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const retrievedPassword = snapshot.val().pass.password;
          console.log(snapshot.val().pass.password);
          const date = new Date().toISOString().split('T')[0];
          console.log(date);   
          // check if user is already in server db and update server data 
          get(child(dbRef, `users/`+ userId + '/'+ date))
              .then((snapshot) => {
                if (snapshot.exists()) {
                  console.log(snapshot.val().gAid);}});
                  localStorage.setItem('countGiftAid', snapshot.val().gAid);
                  localStorage.setItem('countNoGiftAid', snapshot.val().noGAid);

          if (retrievedPassword === pin) {
            console.log("Admin logged in:", { username, pin, selectedArea });
            setShowModal(false);
            console.log(username);
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
        <form onSubmit={(e) => { e.preventDefault(); handleAccess(e); }}>
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
              <option value="Chesterfield">Chesterfield</option>
              <option value="Leek">Leek</option>
              <option value="Derby">Derby</option>
              <option value="Macclesfield">Macclesfield</option>
              <option value="Buxton">Buxton</option>
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
