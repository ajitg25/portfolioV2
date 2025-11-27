import { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Hackathons from './components/Hackathons';
import Internships from './components/Internships';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import LandingCards from './components/LandingCards';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <Hero />
      <LandingCards />
      <Education />
      <Skills />
      <Hackathons />
      <Internships />
      <Contact />
    </div>
  );
}

export default App;
