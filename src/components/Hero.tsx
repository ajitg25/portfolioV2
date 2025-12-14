import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);

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

        if (heroRef.current) {
            const elements = heroRef.current.querySelectorAll('.animate-on-scroll');
            elements.forEach((el) => observer.observe(el));
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="home" className="hero section" ref={heroRef}>


            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge animate-on-scroll">
                        <span className="badge-dot"></span>
                        Available for opportunities
                    </div>

                    <h1 className="hero-title animate-on-scroll">
                        Hi, I'm <span className="gradient-text">Ajit Gupta</span>
                    </h1>

                    <p className="hero-subtitle animate-on-scroll">
                        Software Development Engineer passionate about building scalable solutions
                    </p>

                    <p className="hero-description animate-on-scroll">
                        Have over 1.5 years of experience in backend development, AWS, data engineering, and machine learning. Experienced in building
                        production-grade applications and optimizing large-scale data pipelines.
                    </p>

                    <div className="hero-actions animate-on-scroll">
                        <div className="hero-buttons">
                            <a href="#contact" className="btn btn-primary">
                                Get In Touch
                            </a>
                            <a href="#hackathons" className="btn btn-outline">
                                View Projects
                            </a>
                        </div>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-number">10+</div>
                                <div className="stat-label">Hackathons</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">10+</div>
                                <div className="stat-label">Projects</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">5</div>
                                <div className="stat-label">Internships</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual animate-on-scroll">
                    <div className="visual-card float">
                        <div className="code-snippet">
                            <div className="code-line">
                                <span className="code-keyword">const</span>{' '}
                                <span className="code-variable">developer</span> ={' '}
                                <span className="code-bracket">{'{'}</span>
                            </div>
                            <div className="code-line code-indent">
                                <span className="code-property">name</span>:{' '}
                                <span className="code-string">'Ajit Gupta'</span>,
                            </div>
                            <div className="code-line code-indent">
                                <span className="code-property">role</span>:{' '}
                                <span className="code-string">'SDE'</span>,
                            </div>
                            <div className="code-line code-indent">
                                <span className="code-property">skills</span>:{' '}
                                <span className="code-bracket">['</span>
                                <span className="code-string">PySpark, Kafka, AWS</span>
                                <span className="code-bracket">']</span>,
                            </div>
                            <div className="code-line">
                                <span className="code-bracket">{'}'}</span>;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
