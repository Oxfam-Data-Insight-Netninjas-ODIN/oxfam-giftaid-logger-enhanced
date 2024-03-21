import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./AdminModal.css"; // Import AdminModal.css file
import { writeNewUserData } from "./firebaseFunct.js";
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set, child, get, remove } from "firebase/database";
import firebaseConfig from "./FirebaseConfig";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const db = getDatabase();
const dbRef = ref(getDatabase());


function AdminModal({ show, onClose }) {
  const [modifyname, setModifyName] = useState("");
  const [password, setPassword] = useState("");
  const [sufix, setSufix] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  // create a variable for the need to change userid
  const addUserId = modifyname + sufix

  const handleAddUser = () => {
    
    get(child(dbRef, `users/`+ addUserId))
      .then((snapshot) => {
        if (!snapshot.exists()) {
          console.log(modifyname);
          console.log(password);
          console.log(sufix);
          writeNewUserData(sufix, modifyname, password);
          // Reset error message when user is successfully added
          setErrorMessage("User added !");
        } else {
          setErrorMessage("User already exists");
        }
      });
  };

  const handleRemoveUser = () => {
    setShowConfirmation(true);
  };
  const confirmRemoveUser = () => {
    remove(ref(db, `users/${addUserId}`));
    setErrorMessage(`User ${addUserId} was deleted !`);
    setShowConfirmation(false);
  };

  const cancelRemoveUser = () => {
    setShowConfirmation(false);
  };
  // const handleRemoveUser = () => {
  //   const confirmed = window.confirm("Are you sure you want to remove this user?");
  //   if (confirmed) {
  //     remove(ref(db, `users/${addUserId}`));
  //     setErrorMessage(`User ${addUserId} was deleted !`);
  //   }
  // };

  const handleNameChange = (event) => {
    setModifyName(event.target.value);
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
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
              value={modifyname}
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
        {showConfirmation && (
          <div className="confirmation-dialog">
            <p>Are you sure you want to remove this user?</p>
            <Button variant="primary" onClick={confirmRemoveUser}>
              Yes
            </Button>
            <Button variant="secondary" onClick={cancelRemoveUser}>
              No
            </Button>
          </div>
        )}
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
