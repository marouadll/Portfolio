import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Team from './components/Team';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header scrolled={scrolled} />
      <main>
        <Hero id="home" />
        <Team id="team" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
        <Footer /> 
    </div>
  );
}

export default App;