import React from 'react';
import { Link } from 'react-router-dom';

const DropDownMenu = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Cashier
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <Link className="dropdown-item" to="/option1">
            Option 1
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/option2">
            Option 2
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/option3">
            Option 3
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;