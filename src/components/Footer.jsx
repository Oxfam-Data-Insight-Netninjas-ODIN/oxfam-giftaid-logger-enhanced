import React from "react";
import "./styleComponents.css";

function Footer({ currentDate, currentTime }) {
  return (
    <footer className="footer">
      <span>Updated {currentDate} {currentTime}</span>
    </footer>
  );
}

export default Footer;
