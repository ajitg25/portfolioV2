import { useEffect, useRef } from 'react';
import './Freelance.css';

const Freelance = () => {
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
            name: 'Database Migration System',
            client: 'Prowiz (Remote)',
            type: 'DevOps & Automation 🚀',
            description:
                'Developed an automated database migration system using GitHub Actions that streamlines SQL deployment workflows. SQL developers commit .sql scripts to their repository within the queries folder, which triggers a central repository workflow via repository_dispatch events. The system listens for trigger-central-repository-workflow events and automatically applies SQL scripts to respective databases(BigQuery, Postgres, MySQL) using project-specific credentials, eliminating manual deployment processes.',
            technologies: ['GitHub Actions', 'CI/CD', 'SQL', 'DevOps', 'Automation', 'Repository Dispatch'],
            achievements: [
                'Automated database migration workflow using GitHub Actions',
                'Implemented central repository pattern with repository_dispatch triggers',
                'Enabled secure, automated SQL script deployment with project-specific credentials',
                'Streamlined developer workflow - commit SQL scripts and auto-deploy',
            ],
            link: '#',
            githubLink: '#',
        },
        {
            name: 'Dashboard Validator',
            client: 'Prowiz (Remote)',
            type: 'AI & Automation 🤖',
            description:
                'Built an end-to-end AI-powered automation system that extracts inventory metrics from email dashboard images, validates against database records, and generates reports for stakeholders. The tool monitors Gmail for specific sender emails, downloads dashboard attachments, uses OpenAI Vision API to extract structured JSON metrics (on-hand quantity, allocated stock, valuation, cost), validates extracted data against AWS MySQL database, and generates validation reports. Deployed on AWS EC2 with cron scheduling (every 6 hours) for continuous automated monitoring.',
            technologies: ['Python', 'OpenAI API', 'Gmail API', 'AWS EC2', 'AWS RDS MySQL', 'Cron', 'OAuth 2.0', 'GPG Encryption'],
            achievements: [
                'Automated email → extract → validate → store → report lifecycle using AI',
                'Implemented OpenAI Vision for image-to-structured-data extraction',
                'Built modular architecture: gmail.py, text.py, connection.py, main.py',
                'Deployed production-ready system on AWS EC2 with secure credential management',
                'Enabled CI/CD deployment using SSH keys and Git-based deploys',
            ],
            link: '#',
            githubLink: '#',
        },
        {
            name: 'SQL Migration Tool',
            client: 'Prowiz (Remote)',
            type: 'Backend & Security 🔐',
            description:
                'Developed a comprehensive NestJS-based backend service for managing SQL migration workflows across multiple clients, services, environments (DEV, QA, PROD), and databases. Implemented JWT authentication with granular Role-Based Access Control (RBAC) ensuring users can only upload and execute SQL scripts on authorized client/database/environment combinations. Features include SQL validation for security and compatibility (BigQuery restrictions), GitHub integration for version control and rollback, comprehensive audit logging, and Swagger/OpenAPI documentation. Built with modular architecture using TypeORM, custom NestJS guards, and Docker support.',
            technologies: ['NestJS', 'TypeORM', 'JWT', 'RBAC', 'PostgreSQL', 'GitHub API', 'Docker', 'Swagger/OpenAPI', 'Security'],
            achievements: [
                'Implemented granular RBAC with JWT - users scoped to specific clients/databases/environments',
                'Built secure SQL upload & execution with validation and PROD environment protection',
                'Integrated GitHub for version control, audit trails, and rollback capabilities',
                'Designed modular architecture: auth, client, service, database, environment, upload modules',
                'Created comprehensive API documentation with Swagger and full audit logging',
            ],
            link: '#',
            githubLink: '#',
        },
        // Add more projects as needed
    ];

    return (
        <section id="freelance" className="freelance section" ref={sectionRef}>
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <h2>Freelance Projects</h2>
                    <p className="section-description">
                        Professional client work and custom solutions
                    </p>
                </div>

                <div className="freelance-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="freelance-card glass-card animate-on-scroll"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="card-header">
                                <div className="project-badge">{project.type}</div>
                                <div className="project-links">
                                    {project.githubLink && project.githubLink !== '#' && (
                                        <a
                                            href={project.githubLink}
                                            className="project-link github-link"
                                            aria-label="View on GitHub"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    )}
                                    {project.link && project.link !== '#' && (
                                        <a href={project.link} className="project-link" aria-label="View project">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="project-name">{project.name}</h3>
                            <div className="project-client">{project.client}</div>
                            <p className="project-description">{project.description}</p>

                            <div className="project-technologies">
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className="badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="project-achievements">
                                {project.achievements.map((achievement, idx) => (
                                    <div key={idx} className="achievement-item">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                        <span>{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Freelance;
