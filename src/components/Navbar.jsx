import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styleComponents.css';


function NavTabs() {
  return (
    <ul className="nav nav-tabs" style={{ border: '1px solid black' , marginTop : '10px', padding : '10px', backgroundColor : '#f4f3ef'}}>
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="StoreData"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          StoreData
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="Leaderboard"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Leaderboard
        </NavLink>
      </li>


    </ul>
  );
}

export default NavTabs;
