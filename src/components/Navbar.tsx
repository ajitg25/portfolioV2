import { useState, useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
    scrolled: boolean;
    onNavigate: (section: string) => void;
}

const Navbar = ({ scrolled, onNavigate }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'Education', id: 'education' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'hackathons' },
        { name: 'Experience', id: 'internships' },
        { name: 'Contact', id: 'contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setIsOpen(false);
        onNavigate(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
                    <span className="logo-text">Ajit Gupta</span>
                    <span className="logo-dot">.</span>
                </a>

                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={`#${item.id}`}
                            className="nav-link"
                            onClick={(e) => handleNavClick(e, item.id)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <button
                    className={`hamburger ${isOpen ? 'open' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
