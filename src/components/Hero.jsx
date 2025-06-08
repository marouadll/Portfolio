// src/components/Hero.js
import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Hero.css';
import { team } from '../data/team'; // Assurez-vous que ce fichier existe avec les données de l'équipe

const Hero = () => {
  return (
    <section className="hero" id="home">
      <h1>Développeuses Créatives</h1>
      <p>Nous sommes des développeuses passionnées qui créent des solutions uniques.</p>
      <div className="team-preview">
        {team.slice(0, 3).map((member, index) => (
          <div key={index} className="team-card">
            <div className="placeholder"></div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
      <Link to="team" smooth={true} duration={500} className="cta">
        Voir notre équipe
      </Link>
    </section>
  );
};

export default Hero;