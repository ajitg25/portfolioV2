import { useState, useEffect, useRef } from 'react';
import './Hobbies.css';
import { PenTool, Droplet, Gamepad2, ChessPawn, Eye } from 'lucide-react';

const Hobbies = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-up');
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) {
            const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
            elements.forEach((el) => observer.observe(el));
        }
        return () => observer.disconnect();
    }, []);

    // Lock body scroll when gallery is open
    useEffect(() => {
        if (isGalleryOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isGalleryOpen]);

    const hobbies = [
        {
            name: 'Sketching',
            icon: <PenTool size={32} />,
            desc: "Visualizing ideas and bringing them to life on paper, much like architectural design.",
            hasGallery: true
        },
        {
            name: 'Swimming',
            icon: <Droplet size={32} />,
            desc: "Building endurance and maintaining flow state, essential for long coding sessions."
        },
        {
            name: 'Badminton',
            icon: <Gamepad2 size={32} />,
            desc: "Fast-paced strategic reactions and agility, keeping the mind sharp and active."
        },
        {
            name: 'Chess',
            icon: <ChessPawn size={32} />,
            desc: "Pattern recognition and forward thinking, the ultimate exercise in logic and strategy."
        },
    ];

    return (
        <section id="hobbies" className="hobbies section" ref={sectionRef}>
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <h2>Hobbies & Interests</h2>
                    <p className="section-description">Beyond the code, here's how I recharge and stay creative.</p>
                </div>
                <div className="hobbies-grid grid">
                    {hobbies.map((hobby, idx) => (
                        <div
                            key={idx}
                            className="hobby-card glass-card animate-on-scroll"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            <div className="hobby-icon-wrapper">
                                {hobby.icon}
                            </div>
                            <h3 className="hobby-name">{hobby.name}</h3>
                            <p className="hobby-desc">{hobby.desc}</p>

                            {hobby.hasGallery && (
                                <button
                                    className="view-gallery-btn"
                                    onClick={() => setIsGalleryOpen(true)}
                                >
                                    <Eye size={18} />
                                    <span>View Sketches</span>
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Digital Sketchbook Modal */}
            {isGalleryOpen && (
                <DigitalSketchbook onClose={() => setIsGalleryOpen(false)} />
            )}
        </section>
    );
};

export default Hobbies;
