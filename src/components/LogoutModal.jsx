import React from 'react';
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set, child, get, remove } from "firebase/database";
import firebaseConfig from "./FirebaseConfig";

const Modal = ({ isOpen, onClose, children }) => {
  // Logs out the application and returns the user to the login modal
  const handleLogout = (e) => {
     // Retrieve username and counter values from local storage
    const storedUsername = localStorage.getItem("username");
    e.preventDefault()
    if (storedUsername === "admin") {
      // clear admin data at logout
      const app = initializeApp(firebaseConfig);
      const database = getDatabase(app);
      const db = getDatabase();
      const dbRef = ref(getDatabase());
      remove(ref(db, "users/admin"));
    }
    localStorage.setItem('countGiftAid', 0);
    localStorage.setItem('countNoGiftAid', 0);
    localStorage.setItem('suffix', 0);
    localStorage.setItem('username', "none");
    localStorage.setItem('name', "none");
    window.location.href = "/";
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className='logout modal-content'>
        {children}
        <h3>Are you sure you want to log out?</h3>
        <div className='logout'>
          <button className='btn logout-btn logout-cancel' onClick={onClose}>Cancel</button>
          <button className='btn logout-btn undo' onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
