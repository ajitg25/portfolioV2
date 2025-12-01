import { useState, useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
    scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
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
        { name: 'Building', id: 'building' },
        { name: 'Hackathons', id: 'hackathons' },
        { name: 'Freelance', id: 'freelance' },
        { name: 'Experience', id: 'internships' },
        { name: 'Hobbies', id: 'hobbies' },
        { name: 'Contact', id: 'contact' },
    ];

    const handleNavClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#home" className="logo" onClick={handleNavClick}>
                    <span className="logo-text">Ajit Gupta</span>
                    <span className="logo-dot">.</span>
                </a>

                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={`#${item.id}`}
                            className="nav-link"
                            onClick={handleNavClick}
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
