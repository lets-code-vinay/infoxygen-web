import React from "react";
import "./style.css";

const Footer = () => (
  <footer
    className="footer"
    style={{ boxShadow: "inset 0 4px 8px rgba(0, 0, 0, 0.2)" }}
  >
    <div
      className="footer-content"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Infoxygen. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
