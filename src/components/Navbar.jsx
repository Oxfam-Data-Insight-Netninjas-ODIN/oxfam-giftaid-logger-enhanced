import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import "./styleComponents.css";
import account from '../assets/account.svg'
import logo from '../assets/oxfam_logo.png';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary container-fluid">
    <Link className="navbar-brand" to="/Home">
      <img src={logo} width={150} alt="Oxfam logo." />
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
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" id="myButtonHistory" aria-current="page" to="/Home">
            Logger
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="myButtonHistory" to="/StoreData">
            Store Data
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="myButtonScores" to="/Leaderboard">
            Leaderboard
          </Link>
        </li>
        <li className="nav-item dropdown">
          <img src={account} width={40}></img>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
