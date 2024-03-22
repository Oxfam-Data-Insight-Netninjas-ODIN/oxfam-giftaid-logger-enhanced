import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./styleComponents.css";
import logo from '../assets/oxfam_logo.png';
import logout from '../assets/logout.svg';
import LogoutModal from './LogoutModal';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary container-fluid">
      <Link className="navbar-brand mx-2" to="/Home">
        <img src={logo} width={200} alt="Oxfam logo." />
      </Link>
      <button
        className="navbar-toggler navbar-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse mx-2" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/Home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/StoreData">
              Store Data
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Leaderboard">
              Leaderboard
            </Link>
          </li>
          <li className="nav-item">
            <div className='logout' onClick={handleLogoutClick}>
            <img src={logout} alt='An arrow going through a door.'/>
            <span id='logoutText' className='nav-link'>Logout</span>
            </div>
          </li>
        </ul>
      </div>
      <LogoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
}

export default Navbar;