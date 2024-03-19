import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  // Logs out the application and returns the user to the login modal
  const handleLogout = (e) => {
     // Retrieve username and counter values from local storage
    const storedUsername = localStorage.getItem("username");
    e.preventDefault()
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
