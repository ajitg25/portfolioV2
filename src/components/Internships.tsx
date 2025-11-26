import { useEffect, useRef } from 'react';
import './Internships.css';

const Internships = () => {
    const sectionRef = useRef<HTMLElement>(null);

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

    const internships = [
        {
            role: 'SDE, Hinge Health',
            company: 'Hinge Health',
            location: 'Remote',
            period: 'Jul 2024 - Ongoing',
            type: 'Full-time',
            description:
                'Designed and optimized PySpark pipelines to transform large-scale event data from Kafka to Snowflake, reducing latency by 60%. Replaced batch jobs with optimized PySpark streaming solution, reducing costs by $600/month.',
            responsibilities: [
                'Designed optimized PySpark pipelines for large-scale data transformation',
                'Reduced data processing latency by 60% through streaming solutions',
                'Replaced 10-minute batch job with optimized PySpark streaming, saving $600/month',
                'Integrated Kafka to Snowflake data pipeline for real-time analytics',
                'Wrote unit tests and implemented streaming ETL workflows using Apache Airflow',
            ],
            technologies: ['PySpark', 'Kafka', 'Snowflake', 'Apache Airflow', 'AWS', 'ETL'],
            logo: '🚀',
        },
        {
            role: 'SDE Intern, Hinge Health',
            company: 'Hinge Health',
            location: 'Remote',
            period: 'Aug 2023 - June 2024',
            type: 'Internship',
            description:
                'Developed self-service FastAPI-based computer vision microservice for pose estimation. Integrated video processing across AWS ECS environments, enabling real-time tracking with SLA tracking, retries, and dependency management.',
            responsibilities: [
                'Developed FastAPI-based computer vision microservice for pose estimation',
                'Integrated video processing across AWS ECS environments',
                'Architected scalable multi-version CV engine with batch video processing',
                'Implemented real-time tracking with SLA monitoring and retries',
                'Reduced video processing time through optimized batch sizing',
            ],
            technologies: ['FastAPI', 'Computer Vision', 'AWS ECS', 'Python', 'Microservices', 'Docker'],
            logo: '💻',
        },
        {
            role: 'R&D Intern, SASMOS',
            company: 'SASMOS',
            location: 'Bangalore',
            period: 'Dec 2022 - Jan 2023',
            type: 'Internship',
            description:
                'Built a machine learning model to predict the optimal WiFi access point and high-quality WiFi networks. Exposed the model via a Flask-based REST API for integration with WiFi networks.',
            responsibilities: [
                'Built ML model to predict optimal WiFi access points',
                'Developed Flask-based REST API for model deployment',
                'Automatically switched to best available network for high-quality connectivity',
                'Implemented WiFi network quality prediction algorithms',
                'Integrated solution with existing WiFi infrastructure',
            ],
            technologies: ['Python', 'Machine Learning', 'Flask', 'REST API', 'WiFi Networks'],
            logo: '⚡',
        },
    ];

    return (
        <section id="internships" className="internships section" ref={sectionRef}>
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <h2>Work Experience</h2>
                    <p className="section-description">
                        Professional experience and skills gained through internships
                    </p>
                </div>

                <div className="internships-list">
                    {internships.map((internship, index) => (
                        <div
                            key={index}
                            className="internship-card glass-card animate-on-scroll"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="internship-header">
                                <div className="company-logo">{internship.logo}</div>
                                <div className="internship-title-section">
                                    <h3 className="internship-role">{internship.role}</h3>
                                    <div className="company-info">
                                        <span className="company-name">{internship.company}</span>
                                        <span className="separator">•</span>
                                        <span className="location">
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            {internship.location}
                                        </span>
                                    </div>
                                </div>
                                <div className="internship-meta">
                                    <div className="period-badge">{internship.period}</div>
                                    <div className="type-badge">{internship.type}</div>
                                </div>
                            </div>

                            <p className="internship-description">{internship.description}</p>

                            <div className="responsibilities-section">
                                <h4 className="section-subtitle">Key Responsibilities</h4>
                                <ul className="responsibilities-list">
                                    {internship.responsibilities.map((responsibility, idx) => (
                                        <li key={idx} className="responsibility-item">
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <polyline points="9 11 12 14 22 4" />
                                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                            </svg>
                                            <span>{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="technologies-section">
                                <h4 className="section-subtitle">Technologies Used</h4>
                                <div className="technologies-list">
                                    {internship.technologies.map((tech, idx) => (
                                        <span key={idx} className="badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Internships;
