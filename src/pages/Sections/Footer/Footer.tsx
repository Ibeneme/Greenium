import React from "react";
import "./Footer.css"; // Import the CSS file for styling
//import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h1>GREENIUM RESOURCES LIMITED </h1>
          </div>
          <br />
          <div className="footer-social">
            <a
              href="https://linkedin.com/company/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
        <br />
        <br />
        <br /> <br />
        <div className="footer-bottom">
          <div className="footer-links">
            <ul>
              {/* <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/blog">News & Insights</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li> */}
            </ul>
          </div>
          <br />
          <br />
          <br />
          <div className="footer-terms">
            {/* <h2>Terms of Service</h2> 
          <p>
            <a href="/terms-of-service">
              Review our Terms of Service to understand the terms and conditions
              of using our services.
            </a>
          </p>*/}
          </div>
        </div>
        <div className="footer-bottom">
          <p style={{ fontSize: 12, color: "#f4f4f4" }}>
            &copy; {new Date().getFullYear()} Greenium. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
