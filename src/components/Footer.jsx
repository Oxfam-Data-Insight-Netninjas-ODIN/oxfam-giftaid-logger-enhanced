import React from "react";
import "./styleComponents.css";
import FullscreenToggle from './ToggleFullscreen';

function Footer({}) {
  return (
    <footer className="footer">
      <FullscreenToggle />
    </footer>
  );
}

export default Footer;
