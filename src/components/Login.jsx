import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./CustomModal.css"; // Import custom CSS file for modal styling
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set, child, get } from "firebase/database";
import firebaseConfig from './FirebaseConfig';
import AdminModal from './AdminModal'; // Import the AdminModal component


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function Login() {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false); // State to track admin status
  const [showAdminModal, setShowAdminModal] = useState(false); // State to show admin modal

  const handleAccess = (event) => {
    event.preventDefault();
    if (!username || !pin || !selectedArea) {
      alert("Please enter username, pin, and select an area");
      return;
    }
    // NEW CODE to retrieve the user and password from server and check if are same with input
    const dbRef = ref(getDatabase());
    const userId = username;
    // check if is and admin login
    get(child(dbRef, "admin"))
      .then ((snapshot) => {
        if (snapshot.exists()) {
          if (username === snapshot.val().name && pin === snapshot.val().pass) {
            const date = new Date().toISOString().split('T')[0];
            localStorage.setItem('countGiftAid', snapshot.val().gAid);
            localStorage.setItem('countNoGiftAid', snapshot.val().noGAid);
            localStorage.setItem('username', "admin");

            setIsAdmin(true);
            setShowAdminModal(true);

          }
        }
      });
    // login for normal user
    get(child(dbRef, `users/`+ userId))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // Check if "pass" exists and no other values are present
          if (snapshot.val().pass && Object.keys(snapshot.val()).length === 1) {
            // Update the value in local storage to false
            localStorage.setItem('hasShownTour', false);
          }
          const retrievedPassword = snapshot.val().pass.password;
          // set date in format yyyy-mm-dd
          const date = new Date().toISOString().split('T')[0];
          console.log(date);   
          
          // check if user is already in server db and update server data 
          get(child(dbRef, `users/`+ userId + '/'+ date))
              .then((snapshot) => {
                if (snapshot.exists()) {
                  console.log(snapshot.val().gAid);
                } 
                });
                  localStorage.setItem('countGiftAid', snapshot.val().gAid);
                  localStorage.setItem('countNoGiftAid', snapshot.val().noGAid);

          if (retrievedPassword === pin) {
            const retrievedSufix = snapshot.val().sufix.sufix;
            console.log("Admin logged in:", { username, pin, selectedArea });
            setShowModal(false);
            console.log(username);
            localStorage.setItem("username", username);
            localStorage.setItem("sufix", retrievedSufix);
            
            window.location.href = "/home"; // Redirect to home page
          } else {
            console.log("Passwords do not match");
            console.log("Logging in:", { username, pin, selectedArea });
            setShowModal(true);
          }
        } else {
          console.log("No data available");
          console.log(snapshot.val());
          setShowModal(true);
          return
        }
      })
      .catch((error) => {
       
        console.error(error);
      });

    // If not admin, close modal
    setShowModal(false);
  };

  const handleAdminModalClose = () => {
    setShowAdminModal(false);
    setShowModal(false); // show again the main login modal as well
    window.location.href = "/home"; //once admin modal is closed, is going to page
  };

  return (
    <>
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

      {isAdmin && <AdminModal show={showAdminModal} onClose={handleAdminModalClose} />}
    </>
  );
}

export default Login;