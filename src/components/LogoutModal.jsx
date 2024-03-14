import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  // Logs out the application and returns the user to the login modal
  const handleLogout = () => {
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
          <button className='btn logout-btn logoutCancel' onClick={onClose}>Cancel</button>
          <button className='btn logout-btn undo' onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
