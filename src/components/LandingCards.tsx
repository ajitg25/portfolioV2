import React from 'react';
import './LandingCards.css';

const LandingCards = () => {
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
        {
            emoji: '🏃‍♂️',
            question: 'Does he has a life or only tech?',
            subtitle: 'Hobbies & Interests',
            id: 'hobbies',
            gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
        },
    ];

    return (
        <section className="landing-cards-simple">
            <div className="container">
                <div className="section-header">
                    <h2>Explore My World 🌍</h2>
                    <p className="section-description">
                        Click a card to navigate
                    </p>
                </div>

                <div className="cards-grid">
                    {cards.map((card, index) => (
                        <a
                            key={index}
                            href={`#${card.id}`}
                            className="simple-card"
                            style={{
                                '--card-gradient': card.gradient,
                                textDecoration: 'none'
                            } as React.CSSProperties}
                        >
                            <div className="card-content glass-card">
                                <div className="card-emoji">{card.emoji}</div>
                                <h3 className="card-question">{card.question}</h3>
                                <p className="card-subtitle">{card.subtitle}</p>
                                <div className="card-arrow">Click to View</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LandingCards;
