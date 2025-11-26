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
                'Designed and optimized PySpark pipelines to transform large-scale event data from raw to curated layers, enabling real-time marketing automation via Iterable. Led modernization efforts migrating from monolithic Ruby on Rails to event-driven microservices architecture.',
            responsibilities: [
                'Designed optimized PySpark pipelines transforming large-scale event data for real-time marketing automation via Iterable',
                'Replaced 10-minute batch job (~$600/month) with optimized PySpark streaming, reducing latency by 90% and saving 60% in costs',
                'Built and maintained TypeScript + Nest.js microservice processing 1M+ user events daily from Kafka topics',
                'Orchestrated batch and streaming ETL workflows using Apache Airflow with SLA tracking, retries, and dependency management',
                'Led migration from monolithic Ruby on Rails architecture to scalable, event-driven microservices',
                'Wrote comprehensive unit tests using Pytest for core video processing and batch tracking components',
                'Integrated Kafka event streaming for personalized user updates in Iterable marketing platform',
            ],
            technologies: ['PySpark', 'Kafka', 'Snowflake', 'Apache Airflow', 'AWS', 'ETL', 'TypeScript', 'Nest.js', 'Iterable', 'Pytest', 'Ruby on Rails'],
            logo: '🚀',
        },
        {
            role: 'SDE Intern, Hinge Health',
            company: 'Hinge Health',
            location: 'Remote',
            period: 'Aug 2023 - June 2024',
            type: 'Internship',
            description:
                'Developed and maintained FastAPI-based computer vision microservice processing 10,000+ exercise videos weekly for near real-time batch tracking. Architected scalable AWS infrastructure supporting multi-version CV engine deployment with auto-scaling ECS clusters handling up to 500 concurrent jobs during peak loads.',
            responsibilities: [
                'Developed FastAPI-based computer vision microservice processing 10,000+ exercise videos weekly',
                'Integrated third-party CV engine (wrnch) for pose estimation with scalable parallel worker architecture',
                'Architected AWS infrastructure using CloudFormation for multi-version CV engine deployment',
                'Built auto-scaling ECS clusters handling up to 500 concurrent jobs during peak loads',
                'Reduced video processing time through optimized batch sizing and parallel processing',
                'Implemented near real-time batch tracking across AWS ECS environments',
                'Designed scalable worker architecture for efficient video processing pipeline',
            ],
            technologies: ['FastAPI', 'Computer Vision', 'AWS ECS', 'Python', 'Microservices', 'Docker', 'CloudFormation', 'wrnch', 'Auto-scaling'],
            logo: '💻',
        },
        {
            role: 'R&D Intern, SAMSUNG',
            company: 'SAMSUNG',
            location: 'Bangalore',
            period: 'Dec 2022 - Jun 2023',
            type: 'Internship',
            description:
                'Built a machine learning model to predict the optimal WiFi access point, solving the "sticky band" problem by automatically switching to the best available network. Developed end-to-end solution including Android app for data collection, MongoDB for storage, ETL pipeline for data processing, and Flask API for model deployment.',
            responsibilities: [
                'Built ML model to predict optimal WiFi access points and solve "sticky band" problem',
                'Developed Android application (Java) to scan nearby WiFi networks and push structured signal data to MongoDB in real-time',
                'Designed and implemented backend ETL service to clean and transform raw WiFi scan data',
                'Extracted relevant features and prepared high-quality datasets for model training and inference',
                'Exposed ML model via Flask-based REST API for seamless client integration',
                'Enabled automatic switching to best available network for high-quality connectivity',
            ],
            technologies: ['Python', 'Machine Learning', 'Flask', 'REST API', 'Android', 'Java', 'MongoDB', 'ETL', 'WiFi Networks'],
            logo: '⚡',
        },
        {
            role: 'ML Research Intern',
            company: 'Indian Institute of Science (IISc)',
            location: 'Bangalore',
            period: 'Jun 2023 - Jul 2023',
            type: 'Research Internship',
            description:
                'Research internship at India\'s premier research institution. Focused on improving auto-encoder algorithms for enhanced accuracy and performance in machine learning applications.',
            responsibilities: [
                'Worked on auto-encoder algorithms to increase accuracy and performance',
                'Conducted research on deep learning architectures and optimization techniques',
                'Experimented with various auto-encoder configurations and hyperparameters',
                'Analyzed model performance and implemented improvements',
            ],
            technologies: ['Python', 'Auto-encoders', 'Deep Learning', 'Machine Learning', 'Research', 'Neural Networks'],
            logo: '🔬',
        },
        {
            role: 'ML Intern',
            company: 'G-KnowMe',
            location: 'Remote',
            period: 'Nov 2022 - Dec 2022',
            type: 'Internship',
            description:
                'Internship opportunity received from KnowMyRecord hackathon project. Focused on building OCR solutions for medical report digitization, extracting structured data from complex medical documents including tables and forms.',
            responsibilities: [
                'Developed OCR module using Tesseract to extract relevant details from medical reports',
                'Specialized in table extraction - preserving exact structure and formatting to Excel sheets',
                'Created Flask REST API for medical report processing with image-to-JSON conversion',
                'Implemented data extraction pipeline for automated medical record digitization',
            ],
            technologies: ['Python', 'Tesseract OCR', 'Flask', 'REST API', 'Medical Data Processing', 'Table Extraction'],
            logo: '🏥',
        },
        {
            role: 'R&D Intern',
            company: 'Dassault Systèmes La Foundation',
            location: 'Bengaluru, Karnataka, India',
            period: 'Mar 2022 - Aug 2022',
            type: 'Hybrid Internship',
            description:
                'First internship through college-company collaboration. Worked on cutting-edge computer vision projects for aquaculture applications, focusing on optimizing object detection models and deploying them on edge devices.',
            responsibilities: [
                'Explored and compared different YOLO models and experimented with CNN-based approaches to optimize object detection performance',
                'Developed and deployed ML models on Raspberry Pi for real-time shrimp identification and disease prediction',
                'Enabled real-time decision-making in aquaculture through edge computing solutions',
                'Conducted performance benchmarking across multiple object detection architectures',
            ],
            technologies: ['YOLO', 'CNN', 'Python', 'Raspberry Pi', 'Computer Vision', 'Edge Computing', 'Aquaculture Tech'],
            logo: '🔬',
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
