import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Team.css';
import { team } from '../data/team';

const Team = () => {
  const [activeMember, setActiveMember] = useState(0);

  return (
    <section className="team" id="team">
      <h2>Notre Équipe</h2>
      <div className="tabs">
        {team.map((member, index) => (
          <button
            key={index}
            className={`tab ${activeMember === index ? 'active' : ''}`}
            onClick={() => setActiveMember(index)}
          >
            {member.name}
          </button>
        ))}
      </div>
      <div className="member-details">
        <div className="placeholder"></div>
        <h3>{team[activeMember].name}</h3>
        <p className="role">{team[activeMember].role}</p>
        <p className="bio">{team[activeMember].bio}</p>
        <div className="skills">
          {team[activeMember].skills.map((skill, index) => (
            <span key={index} className="skill">{skill}</span>
          ))}
        </div>
        <div className="social-links">
          <a href={team[activeMember].github} className="social-link">
            <FaGithub className="icon" /> GitHub
          </a>
          <a href={team[activeMember].linkedin} className="social-link">
            <FaLinkedin className="icon" /> LinkedIn
          </a>
          <a href={`mailto:${team[activeMember].email}`} className="social-link">
            <FaEnvelope className="icon" /> Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;