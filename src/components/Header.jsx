import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Link 
        to="home" 
        smooth={true} 
        duration={500} 
        className="logo"
        onClick={() => setMenuOpen(false)}
      >
        DevTeam
      </Link>

      <button 
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <Link to="home" smooth onClick={() => setMenuOpen(false)}>Accueil</Link>
        <Link to="team" smooth onClick={() => setMenuOpen(false)}>Équipe</Link>
        <Link to="projects" smooth onClick={() => setMenuOpen(false)}>Projets</Link>
        <Link to="contact" smooth onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;