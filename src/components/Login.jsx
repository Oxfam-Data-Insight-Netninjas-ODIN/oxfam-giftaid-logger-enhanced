import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./CustomModal.css"; // Import custom CSS file for modal styling

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

    if (username === "Test" && pin === "1234") {
      console.log("Admin logged in:", { username, pin, selectedArea });
      setShowModal(false);
      window.location.href = "/home"; // Redirect to home page
    } else {
      console.log("Logging in:", { username, pin, selectedArea });
    }
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
