import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Login() {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !pin) {
      alert("Please enter username and pin");
      return;
    }

    console.log("Logging in:", { username, pin });
  };

  return (
    <Modal
      show={true}
      onHide={() => console.log("Modal closed")}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
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
          <Button variant="primary" type="submit">
            Access
          </Button>{" "}
          {}
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
