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
import Hobbies from './components/Hobbies';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveSection(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Set initial state based on current hash
    handleHashChange();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'hackathons':
        return <Hackathons />;
      case 'internships':
        return <Internships />;
      case 'contact':
        return <Contact />;
      case 'hobbies':
        return <Hobbies />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <LandingCards />
          </>
        );
    }
  };

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      {renderContent()}
      {/* Show Contact section as footer on all pages except Contact page itself */}
      {activeSection !== 'contact' && <Contact />}
    </div>
  );
}

export default App;
