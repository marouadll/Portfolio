import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

const Header = ({ scrolled }) => {
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Link to="home" smooth={true} duration={500} className="logo">DevTeam</Link>
      <nav>
        <Link to="home" smooth={true} duration={500}>Accueil</Link>
        <Link to="team" smooth={true} duration={500}>Équipe</Link>
        <Link to="projects" smooth={true} duration={500}>Projets</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;