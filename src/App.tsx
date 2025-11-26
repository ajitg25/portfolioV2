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
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            <LandingCards onNavigate={setCurrentView} />
          </>
        );
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'hackathons':
        return <Hackathons />;
      case 'internships':
        return <Internships />;
      case 'contact':
        return <Contact />; // Contact is also shown at bottom, but if clicked from nav, show it specifically? 
      // Actually, let's keep Contact at bottom of all views or just Home?
      // User said "simple cards... open respective ones".
      // Let's just render the specific component.
      default:
        return <Hero />;
    }
  };

  return (
    <div className="app">
      <Navbar scrolled={scrolled} onNavigate={setCurrentView} />
      {renderView()}
      {currentView !== 'contact' && <Contact />}
    </div>
  );
}

export default App;
