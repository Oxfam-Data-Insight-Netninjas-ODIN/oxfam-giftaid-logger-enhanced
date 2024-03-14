import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

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
    } else {
      console.log("Logging in:", { username, pin, selectedArea });
    }

    setShowModal(false);
  };

  return (
    <Modal show={showModal} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={(e) => { e.preventDefault(); handleAccess(); }}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
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
              className="form-control"
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
              className="form-control"
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
          <Button variant="primary" type="submit">Access</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
