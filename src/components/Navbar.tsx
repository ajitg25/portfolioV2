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
        { name: 'Home', href: '#home' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#hackathons' },
        { name: 'Experience', href: '#internships' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
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
                            href={item.href}
                            className="nav-link"
                            onClick={(e) => handleNavClick(e, item.href)}
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
