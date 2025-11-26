import { useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
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

    const education = [
        {
            degree: 'Bachelor of Technology in Electrical and Electronics Engineering',
            institution: 'BMS College of Engineering',
            location: 'Bangalore, India',
            period: '2020 - 2024',
            grade: 'CGPA: 9.2/10',
            highlights: [
                'Relevant Coursework: Data Structures, Algorithms, Machine Learning',
                'Active participant in hackathons and technical competitions',
                'Built projects related to computer Vision and Machine Learning',
                'Core member of Robotics club and Pentagram-The Mathematical society'
            ],
            color: 'primary',
        },
        {
            degree: 'Higher Secondary Certificate (HSC - Class XII)',
            institution: 'Kendriya Vidyalaya',
            location: 'Silvassa, DNH',
            period: '2018 - 2020',
            grade: 'Aggregate: 93%',
            highlights: [
                'Science Stream with focus on Mathematics and Physics',
                'Excelled in academics with 93% aggregate score',
                'Developed strong foundation in analytical and problem-solving skills',
                'Participated in SGFI national level chess competitions',
            ],
            color: 'secondary',
        },
    ];

    return (
        <section id="education" className="education section" ref={sectionRef}>
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <h2>Education</h2>
                    <p className="section-description">
                        My academic journey and qualifications
                    </p>
                </div>

                <div className="education-timeline">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className={`education-item animate-on-scroll ${edu.color}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="timeline-marker">
                                <div className="marker-dot"></div>
                                <div className="marker-line"></div>
                            </div>

                            <div className="education-card glass-card">
                                <div className="education-header">
                                    <div>
                                        <h3 className="education-degree">{edu.degree}</h3>
                                        <div className="education-institution">
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                                <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                            </svg>
                                            {edu.institution}
                                        </div>
                                        <div className="education-location">
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
                                            {edu.location}
                                        </div>
                                    </div>

                                    <div className="education-meta">
                                        <div className="education-period">{edu.period}</div>
                                        <div className="education-grade">{edu.grade}</div>
                                    </div>
                                </div>

                                <div className="education-highlights">
                                    {edu.highlights.map((highlight, idx) => (
                                        <div key={idx} className="highlight-item">
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span>{highlight}</span>
                                        </div>
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

export default Education;
