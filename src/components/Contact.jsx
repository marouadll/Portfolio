// src/components/Contact.js
import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Contact.css';
import { team } from '../data/team';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contactez-nous</h2>
      <p>Prêt à collaborer avec notre équipe ? Contactez-nous !</p>
      <div className="contact-grid">
        {team.map((member, index) => (
          <div key={index} className="contact-card">
            <div className="placeholder"></div>
            <h3>{member.name}</h3>
            <button className="contact-btn">Contacter</button>
          </div>
        ))}
      </div>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="cta"
      >
        Voir toutes les offres
      </Link>
    </section>
  );
};

export default Contact;