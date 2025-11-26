import { useEffect, useRef, useState } from 'react';
import './LandingCards.css';

interface LandingCardsProps {
    onNavigate: (section: string) => void;
}

const LandingCards = ({ onNavigate }: LandingCardsProps) => {
    const [rotation, setRotation] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startRotation, setStartRotation] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Auto-rotate effect
    useEffect(() => {
        if (!isDragging) {
            const interval = setInterval(() => {
                setRotation(prev => prev - 0.2);
            }, 20);
            return () => clearInterval(interval);
        }
    }, [isDragging]);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX);
        setStartRotation(rotation);
        if (carouselRef.current) {
            carouselRef.current.style.cursor = 'grabbing';
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const diff = e.pageX - startX;
        setRotation(startRotation + diff * 0.5);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (carouselRef.current) {
            carouselRef.current.style.cursor = 'grab';
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX);
        setStartRotation(rotation);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const diff = e.touches[0].pageX - startX;
        setRotation(startRotation + diff * 0.5);
    };

    const cards = [
        {
            emoji: '🎓',
            question: 'Where did this guy study?',
            subtitle: 'Educational Background',
            id: 'education',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        {
            emoji: '🏆',
            question: 'Has he won any hackathons?',
            subtitle: 'Projects & Competitions',
            id: 'hackathons',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        },
        {
            emoji: '💼',
            question: 'What\'s his work experience?',
            subtitle: 'Internships & Jobs',
            id: 'internships',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        },
        {
            emoji: '⚡',
            question: 'What can he actually do?',
            subtitle: 'Technical Skills',
            id: 'skills',
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        },
    ];

    return (
        <section className="landing-cards-3d">
            <div className="container">
                <div className="section-header">
                    <h2>Explore My World 🌍</h2>
                    <p className="section-description">
                        Drag to rotate and explore different aspects of my journey
                    </p>
                </div>

                <div
                    className="scene"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleMouseUp}
                    ref={carouselRef}
                >
                    <div
                        className="carousel"
                        style={{ transform: `rotateY(${rotation}deg)` }}
                    >
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="carousel-card"
                                onClick={() => {
                                    if (!isDragging) { // Prevent click when dragging
                                        onNavigate(card.id);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }
                                }}
                                style={{
                                    '--i': index,
                                    '--total': cards.length,
                                    '--card-gradient': card.gradient
                                } as React.CSSProperties}
                            >
                                <div className="card-content glass-card">
                                    <div className="card-emoji">{card.emoji}</div>
                                    <h3 className="card-question">{card.question}</h3>
                                    <p className="card-subtitle">{card.subtitle}</p>
                                    <div className="card-arrow">Click to View</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingCards;
