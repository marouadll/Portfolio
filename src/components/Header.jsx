import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

const Header = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fermer le menu quand la taille de l'écran change
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
        className="menu-toggle" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      
      <nav className={menuOpen ? 'active' : ''}>
        <Link 
          to="home" 
          smooth={true} 
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Accueil
        </Link>
        <Link 
          to="team" 
          smooth={true} 
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Équipe
        </Link>
        <Link 
          to="projects" 
          smooth={true} 
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Projets
        </Link>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;