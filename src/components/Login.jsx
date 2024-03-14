import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

function Login() {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [area, setArea] = useState("");
  const [cityTown, setCityTown] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleAccess = () => {
    if (!username || !pin || !area || !cityTown) {
      alert("Please fill in all fields");
      return;
    }

    // Here you can perform your authentication logic
    console.log("Logging in:", { username, pin, area, cityTown });

    // For demonstration purposes, setting isLoggedIn to true
    setIsLoggedIn(true);
    sessionStorage.setItem("isLoggedIn", "true");
  };

  const handleClose = () => {
    setUsername("");
    setPin("");
    setArea("");
    setCityTown("");
  };

  if (isLoggedIn) {
    return null;
  }

  return (
    <Modal show={!isLoggedIn} backdrop="static" onHide={handleClose}>
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
            <input
              type="text"
              className="form-control"
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cityTown">City/Town:</label>
            <input
              type="text"
              className="form-control"
              id="cityTown"
              value={cityTown}
              onChange={(e) => setCityTown(e.target.value)}
              required
            />
          </div>
          <Button variant="primary" type="submit">
            Access
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
