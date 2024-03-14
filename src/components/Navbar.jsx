import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import "./styleComponents.css";
import account from '../assets/account.svg'
import logo from '../assets/oxfam_logo.png';
import { Dropdown } from 'react-bootstrap';
import DropMenu from './DropMenu';
import * as bootstrap from 'bootstrap';


function Navbar() {
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
            Logger
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

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
             <img src={account} alt="Account" onClick={DropMenu} />
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#" onClick={DropMenu}>User1</a></li>
            <li><a className="dropdown-item" href="#" onClick={DropMenu}>User2</a></li>
            <li><a className="dropdown-item" href="#" onClick={DropMenu}>User3</a></li>
          </ul>
        </li>

      </ul>
    </div>
  </nav>
  )
}

export default Navbar
