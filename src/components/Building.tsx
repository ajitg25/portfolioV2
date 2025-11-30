import { useEffect, useRef } from 'react';
import './Building.css';

const Building = () => {
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

    const projects = [
        {
            role: 'Creator & Developer',
            name: 'LetsCopy',
            location: 'Remote',
            period: '2025',
            type: 'Productivity Tool',
            description:
                'A seamless cross-device clipboard synchronization tool designed to eliminate the friction of transferring text between devices. It solves the common problem of "emailing yourself" by enabling instant copy-paste functionality across all devices connected to the same WiFi network.',
            responsibilities: [
                'Developed a real-time clipboard synchronization engine using Python and socket programming',
                'Implemented a lightweight background service that monitors clipboard changes and broadcasts them to connected peers',
                'Designed a secure local network discovery mechanism to automatically find and connect devices without manual configuration',
                'Created a unified experience for users working across multiple ecosystems (Windows, Mac, Mobile)',
            ],
            technologies: ['Python', 'Networking', 'Sockets', 'Cross-platform', 'Automation'],
            logo: '📋',
        },
        {
            role: 'Ideator & Developer',
            name: 'Twitter-X Analytics',
            location: 'Remote',
            period: '2025',
            type: 'Web Application',
            link: 'https://twitter-x-analytics.streamlit.app',
            description:
                'An analytics platform designed to democratize access to Twitter/X insights. This tool empowers non-premium users with detailed engagement metrics and performance analysis that are typically locked behind paywalls, helping creators understand their audience better.',
            responsibilities: [
                'Built an interactive dashboard using Streamlit to visualize engagement metrics and tweet performance',
                'Developed data processing pipelines to analyze user activity and generate actionable insights',
                'Implemented a user-friendly interface that simplifies complex data into easy-to-understand charts and graphs',
                'Deployed the application on Streamlit Cloud ensuring high availability and easy public access',
            ],
            technologies: ['Python', 'Streamlit', 'Pandas', 'Data Visualization', 'Analytics'],
            logo: '📊',
        },
        {
            role: 'Technical Partner',
            name: 'Your Next Big Idea',
            location: 'Global',
            period: 'Future',
            type: 'Collaboration',
            isCollaboration: true,
            description:
                'Have a visionary idea but need the technical expertise to bring it to life? I am actively looking for partners to build impactful solutions with. Whether it\'s a SaaS product, an AI tool, or a mobile app, let\'s team up and turn your concept into reality.',
            responsibilities: [
                'End-to-end technical implementation of your idea',
                'Rapid MVP development to validate market fit',
                'Scalable architecture design for long-term growth',
                'Collaborative problem solving and product strategy',
            ],
            technologies: ['Your Vision', '+', 'My Engineering', '=', 'Innovation'],
            logo: '🤝',
        },
    ];

    return (
        <section id="building" className="building section" ref={sectionRef}>
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <h2>Building</h2>
                    <p className="section-description">
                        My solo projects and entrepreneurial endeavors
                    </p>
                </div>

                <div className="building-list">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`building-card glass-card animate-on-scroll ${
                                // @ts-ignore
                                project.isCollaboration ? 'collaboration-card' : ''
                                }`}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="building-header">
                                <div className="project-logo">{project.logo}</div>
                                <div className="building-title-section">
                                    <h3 className="building-role">{project.name}</h3>
                                    <div className="project-info">
                                        <span className="project-name">{project.role}</span>
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
                                            {project.location}
                                        </span>
                                    </div>
                                </div>
                                <div className="building-meta">
                                    <div className="period-badge">{project.period}</div>
                                    <div className="type-badge">{project.type}</div>
                                </div>
                            </div>

                            <p className="building-description">{project.description}</p>

                            {/* @ts-ignore */}
                            {project.link && (
                                <div className="project-external-link">
                                    <span className="link-label">Website:</span>
                                    <a
                                        // @ts-ignore
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="website-link"
                                    >
                                        {/* @ts-ignore */}
                                        {project.link}
                                    </a>
                                </div>
                            )}

                            <div className="responsibilities-section">
                                <h4 className="section-subtitle">
                                    {/* @ts-ignore */}
                                    {project.isCollaboration ? 'What I Bring to the Table' : 'Key Features'}
                                </h4>
                                <ul className="responsibilities-list">
                                    {project.responsibilities.map((responsibility, idx) => (
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
                                <h4 className="section-subtitle">
                                    {/* @ts-ignore */}
                                    {project.isCollaboration ? 'The Formula' : 'Technologies Used'}
                                </h4>
                                <div className="technologies-list">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* @ts-ignore */}
                            {project.isCollaboration && (
                                <div className="collaboration-action">
                                    <a
                                        href="#contact"
                                        className="btn btn-primary pulse-button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        Let's Build It 🚀
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Building;
