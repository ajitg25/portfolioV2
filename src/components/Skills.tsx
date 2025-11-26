import { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
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

    const skillCategories = [
        {
            title: 'Languages',
            icon: '💻',
            skills: ['C++', 'Python', 'TypeScript', 'SQL', 'Terraform'],
        },
        {
            title: 'Frameworks',
            icon: '🛠️',
            skills: ['Next.js', 'Flask', 'FastAPI', 'Pytest'],
        },
        {
            title: 'Databases',
            icon: '🗄️',
            skills: ['MySQL', 'Postgres', 'MongoDB'],
        },
        {
            title: 'Tools & Technologies',
            icon: '⚙️',
            skills: ['AWS', 'DataBricks', 'PySpark', 'Airflow', 'Kafka', 'Docker'],
        },
    ];

    return (
        <section id="skills" className="skills section" ref={sectionRef}>
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <h2>Technical Skills</h2>
                    <p className="section-description">
                        Technologies and tools I work with
                    </p>
                </div>

                <div className="skills-grid grid grid-2">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="skill-category glass-card animate-on-scroll"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3 className="category-title">{category.title}</h3>
                            </div>
                            <div className="skills-list">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-badge badge">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
