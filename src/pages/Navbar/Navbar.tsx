import React, { useState } from "react";
import "./Navbar.css";

// Import the Greenium logo from assets
import greeniumLogo from "../../assets/images/logo.png";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Use the Greenium logo image */}

        <a href="/" onClick={closeMobileMenu}>
          <img
            src={greeniumLogo}
            alt="Greenium Logo"
            style={{ width: 36, height: 36, marginLeft: 0 }}
          />
        </a>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        {isMobileMenuOpen && (
          <div className="close-icon" onClick={closeMobileMenu}>
            &times; {/* Close Icon */}
          </div>
        )}
        <li>
          <a href="/" onClick={closeMobileMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="/about-us" onClick={closeMobileMenu}>
            About Us
          </a>
        </li>
        <li>
          <a href="/services" onClick={closeMobileMenu}>
            Our Services
          </a>
        </li>{" "}
        <li>
          <a href="/projects" onClick={closeMobileMenu}>
            Our Projects
          </a>
        </li>
        <li>
          <a href="/partners" onClick={closeMobileMenu}>
            Our Partners
          </a>
        </li>
      </ul>

      <div className="burger-icon" onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
