import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./AdminModal.css"; // Import AdminModal.css file
import { writeUserData } from "./firebaseFunct.js";
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set, child, get, remove } from "firebase/database";
import firebaseConfig from "./FirebaseConfig";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const db = getDatabase();


function AdminModal({ show, onClose }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [sufix, setSufix] = useState("");

  const handleAddUser = () => {
    console.log(name);
    console.log(password);
    console.log(sufix);
    writeUserData(sufix, name, password)
  };

  const handleRemoveUser = () => {
    const userId = name+sufix;
    console.log("username to be deleted: "  + userId);
    remove(ref(db, `users/${userId}`));
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSufixChange = (event) => {
    setSufix(event.target.value);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Admin Panel</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button variant="primary" onClick={handleAddUser}>
          Add User
        </Button>

        <Button variant="danger" onClick={handleRemoveUser}>
          Remove User
        </Button>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>

          <Form.Group controlId="sufix">
            <Form.Label>Sufix:</Form.Label>
            <Form.Control
              type="text"
              value={sufix}
              onChange={handleSufixChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AdminModal;
