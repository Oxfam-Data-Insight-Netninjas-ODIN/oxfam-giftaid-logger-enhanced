import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./CustomModal.css"; // Import custom CSS file for modal styling
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, get } from "firebase/database";
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

    // Check if the user is an admin
    const adminUsername = "ADMIN01";
    const adminPassword = "5678";

    if (username === adminUsername && pin === adminPassword) {
      setIsAdmin(true);
      setShowAdminModal(true);
      return;
    }

    // If not admin, close modal
    setShowModal(false);
  };

  const handleAdminModalClose = () => {
    setShowAdminModal(false);
    setShowModal(false); // Close the main login modal as well
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