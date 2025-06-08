import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} DevTeam - Made with <FaHeart className="heart-icon" /> by us
        </p>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;