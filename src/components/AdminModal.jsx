import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./AdminModal.css"; // Import AdminModal.css file
import { writeUserData } from "./firebaseFunct.js";
import { deleteUser } from "./firebaseFunct.js";


function AdminModal({ show, onClose }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [sufix, setSufix] = useState("");
 

  const handleAddUser = () => {
    console.log(name);
    console.log(password);
    console.log(sufix);
    writeUserData(sufix, name, password);
  };

  const handleRemoveUser = () => {
    const deleteUser = name+sufix;
    console.log("user to be deleted: "+deleteUser);
    deleteUser(deleteUser);
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
