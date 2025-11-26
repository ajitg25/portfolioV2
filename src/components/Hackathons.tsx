import { useEffect, useRef } from 'react';
import './Hackathons.css';

const Hackathons = () => {
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

    const hackathons = [
        {
            name: 'SmartLens',
            event: 'GirlGeekHack - First Hackathon',
            position: 'First Prize 🏆',
            description:
                'Developed an assistive technology solution for visually impaired individuals using smart glasses equipped with object detection capabilities. The system uses OpenCV-based computer vision models to detect objects in real-time and converts visual information into audio feedback through text-to-speech synthesis, enabling blind users to navigate their environment independently.',
            technologies: ['Python', 'OpenCV', 'Computer Vision', 'Text-to-Speech', 'Object Detection'],
            achievements: [
                'Won First Prize at GirlGeekHack - my first hackathon victory',
                'Implemented real-time object detection without using LLMs or OpenAI',
                'Created accessible technology for visually impaired community',
            ],
            link: '#',
            githubLink: 'https://github.com/ajitg25/all_hackathons_college_life/tree/main/GirlGeekHack',
        },
        {
            name: 'KnowMyRecord',
            event: 'Blockchain Healthcare Hackathon',
            position: 'First Internship Offer 🎯',
            description:
                'Developed a blockchain-based medical records management system that revolutionizes patient data storage and accessibility. Implemented Tesseract OCR to extract data from medical reports and store it securely on a blockchain network. The solution ensures tamper-proof medical records and provides doctors with complete patient medical history throughout their lifetime, enhancing healthcare delivery and patient privacy.',
            technologies: ['Blockchain', 'Tesseract OCR', 'Python', 'Smart Contracts', 'Healthcare Tech', 'Data Security'],
            achievements: [
                'Received first internship offer from this hackathon project',
                'Built tamper-proof medical records system using blockchain',
                'Implemented OCR for automated data extraction from medical reports',
            ],
            link: '#',
            githubLink: 'https://github.com/ajitg25/all_hackathons_college_life/tree/main/KnowMyRecord',
        },
        {
            name: 'Thera-Buddy',
            event: 'Mental Health Hackathon',
            position: 'Second Prize 🥈',
            description:
                'Developed a proactive mental health monitoring system using a Chrome extension that analyzes user typing patterns in real-time. The extension sends completed sentences to a separately hosted NLP model (no data persistence for privacy) to detect depression indicators. When concerning patterns are detected, an integrated GCP-powered chatbot appears, offering empathetic support and allowing users to share their concerns in a safe, private environment.',
            technologies: ['Chrome Extension', 'NLP', 'Python', 'GCP Chatbot', 'Mental Health', 'Real-time Analysis'],
            achievements: [
                'Won Second Prize at Mental Health Hackathon',
                'Built privacy-focused Chrome extension with no data persistence',
                'Implemented real-time NLP-based depression detection and GCP chatbot integration',
            ],
            link: '#',
            githubLink: 'https://github.com/ajitg25/all_hackathons_college_life/tree/main/Thera-Buddy',
        },
        {
            name: 'Commission-Free Ride Tracking',
            event: 'REVA-Hack',
            position: 'Sponsor Track Prize 🏅',
            description:
                'Developed an innovative ride-sharing solution to eliminate dependency on Ola and Uber by removing commission fees. The system automatically tracks ride distance and duration to calculate fair pricing without any middleman charges. Implemented secure authentication using Auth0/Okta, which earned us the sponsor track prize for best use of authentication technology.',
            technologies: ['Auth0/Okta', 'Ride Tracking', 'GPS', 'Authentication', 'Mobile App'],
            achievements: [
                'Won Sponsor Track Prize for Auth0/Okta implementation',
                'Built commission-free ride fare calculation system',
                'Automated distance and time-based pricing without platform fees',
            ],
            link: '#',
            githubLink: 'https://github.com/ajitg25/all_hackathons_college_life/tree/main/REVA-Hack',
        },
        {
            name: 'Customer Segmentation for Online Retail',
            event: 'BuilderCamp - Intel oneAPI',
            position: 'Learning Experience 📚',
            description:
                'Collaborated with a senior engineer on an advanced ML project implementing customer segmentation using KMeans and DBSCAN clustering algorithms. Leveraged Intel® oneAPI AI toolkit optimizations to achieve up to 9.66x performance improvement. The solution analyzes customer behavior patterns to enable personalized marketing campaigns and targeted customer experiences.',
            technologies: ['Python', 'Scikit-Learn', 'Intel oneAPI', 'KMeans', 'DBSCAN', 'ML Clustering'],
            achievements: [
                'Learned from senior engineer - valuable mentorship experience',
                'Implemented hyperparameter cluster analysis with Intel optimizations',
                'Achieved 3.65x speedup with KMeans and 9.66x with DBSCAN using Intel® Scikit-Learn Extension',
            ],
            link: '#',
            githubLink: 'https://github.com/ajitg25/all_hackathons_college_life/tree/main/BuilderCamp/customer-segmentation',
        },
        {
            name: 'Sentinel Security System',
            event: 'Sentinel Hackathon - State Level',
            position: 'Third Prize 🥉',
            description:
                'Secured third prize at state level hackathon Sentinel organized in Bangalore. Developed an innovative security and monitoring solution using IoT devices and real-time data processing.',
            technologies: ['IoT', 'Security', 'Real-time Monitoring', 'Cloud Services'],
            achievements: [
                'Third Prize at state level competition',
                'Sentinel Hackathon, Bangalore',
                'Built comprehensive security monitoring system',
            ],
            link: '#',
            githubLink: 'https://github.com/ajitg25/all_hackathons_college_life/tree/main/sentinelHack',
        },
        {
            name: 'AYUSH Hospital Locator',
            event: 'Smart India Hackathon - AYUSH Ministry',
            position: 'College Level Selection 🎓',
            description:
                'Selected at college level for Smart India Hackathon, India\'s biggest hackathon initiative. Worked on a problem statement from the AYUSH Ministry to develop a web platform for locating nearest AYUSH (Ayurveda, Yoga, Unani, Siddha, Homeopathy) hospitals. The solution aimed to improve accessibility to traditional medicine healthcare facilities across India.',
            technologies: ['Web Development', 'Maps Integration', 'Geolocation', 'Healthcare'],
            achievements: [
                'Selected from college for national-level SIH competition',
                'Worked on AYUSH Ministry problem statement',
                'Built hospital locator with geolocation features',
            ],
            link: '#',
            githubLink: 'https://github.com/ajitg25/all_hackathons_college_life/tree/main/SIH',
        },
        {
            name: 'YouTube Learning Gamification',
            event: 'Warpspeed Hackathon - Lightspeed Ventures',
            position: 'EdTech Innovation 🎓',
            description:
                'Developed a Chrome extension to gamify the YouTube learning experience and verify knowledge retention. The extension automatically detects when a YouTube video ends, extracts the video transcript, and generates contextual MCQs based on the content. Users can test their understanding immediately, transforming passive video watching into active learning with instant feedback on comprehension.',
            technologies: ['Chrome Extension', 'YouTube API', 'Transcript Processing', 'MCQ Generation', 'EdTech'],
            achievements: [
                'Built automated MCQ generation from YouTube video transcripts',
                'Created gamified learning verification system',
                'Transformed passive video consumption into active learning experience',
            ],
            link: '#',
            githubLink: 'https://github.com/ajitg25/all_hackathons_college_life/tree/main/Warpspeed',
        },
        {
            name: 'Multi-Feature Computer Vision System',
            event: 'iNeuron Hackathon',
            position: 'Second Prize 🥈',
            description:
                'Developed a comprehensive computer vision solution combining three key features: pothole detection for road safety, book reading assistance for visually impaired users, and general object detection. The integrated system addressed multiple real-world problems using advanced CV techniques, demonstrating versatility in applying computer vision to solve diverse challenges.',
            technologies: ['Computer Vision', 'Object Detection', 'OCR', 'Python', 'OpenCV', 'Deep Learning'],
            achievements: [
                'Won Second Prize at iNeuron Hackathon',
                'Built multi-feature CV system: pothole detection + book reading + object detection',
                'Integrated three distinct computer vision applications into one solution',
            ],
            link: '#',
            githubLink: 'https://github.com/ajitg25/all_hackathons_college_life/tree/main/ineuron-hackathon',
        },
        {
            name: 'Malicious Link Detector',
            event: 'SecureHack - Cybersecurity Hackathon',
            position: 'Security Innovation 🔒',
            description:
                'Developed a proactive cybersecurity solution using a Chrome extension that detects malicious links before users click them. The extension intercepts link clicks, analyzes URLs using a custom-trained ML model (trained on open-source malicious link datasets), and only redirects users if the link is verified as safe. This prevents phishing attacks and malware infections by blocking threats at the source.',
            technologies: ['Chrome Extension', 'Machine Learning', 'Cybersecurity', 'Python', 'Link Analysis', 'Threat Detection'],
            achievements: [
                'Built real-time malicious link detection system',
                'Trained custom ML model using open-source security datasets',
                'Created proactive security layer preventing phishing and malware attacks',
            ],
            link: '#',
            githubLink: 'https://github.com/ajitg25/all_hackathons_college_life/tree/main/securehack',
        },
        {
            name: 'PharmaBot',
            event: 'e-Yantra Robotics Competition - IIT Bombay',
            position: 'Top 25 Nationally 🏅',
            description:
                'Competed in e-Yantra, IIT Bombay\'s prestigious national robotics competition. Developed an autonomous delivery robot using computer vision to recognize roads, start/end points, and dynamically route unique packages to their destinations. Tested and evaluated the complete system in CoppeliaSim simulation environment.',
            technologies: ['OpenCV', 'Computer Vision', 'CoppeliaSim', 'Robotics', 'Python', 'Path Planning', 'Autonomous Systems'],
            achievements: [
                'Ranked in Top 25 nationally in e-Yantra robotics competition',
                'Implemented OpenCV for road recognition and navigation',
                'Built dynamic package delivery routing system',
                'Utilized CoppeliaSim for simulation and testing',
            ],
            link: '#',
            demoLinks: [
                { label: 'Demo-1', url: 'https://youtu.be/tuV2Gui9nZ4' },
                { label: 'Demo-2', url: 'https://youtu.be/oBnQIZAN21g' },
            ],
            githubLink: 'https://github.com/ajitg25/all_hackathons_college_life',
        },
        {
            name: 'Additional Hackathon Participations',
            event: 'Multiple Hackathons',
            position: 'Active Participant 🎯',
            description:
                'Actively participated in numerous other hackathons throughout college, gaining diverse experience in problem-solving, teamwork, and rapid prototyping. Each hackathon provided unique learning opportunities and exposure to different technologies and domains.',
            technologies: ['Full Stack', 'Problem Solving', 'Team Collaboration', 'Rapid Prototyping'],
            achievements: [
                'Hack4Soc - Social impact hackathon',
                'IC Hack - Innovation challenge',
                'Second-Byte-Success - Tech competition',
                'Silicon Rush - Silicon Valley themed hackathon',
                'Hackverse - Multi-domain hackathon',
                'And many more...',
            ],
            link: '#',
            githubLink: 'https://github.com/ajitg25/all_hackathons_college_life',
        },
    ];

    return (
        <section id="hackathons" className="hackathons section" ref={sectionRef}>
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <h2>Projects & Hackathons</h2>
                    <p className="section-description">
                        Innovative solutions and competitive achievements
                    </p>
                </div>

                <div className="hackathons-grid grid grid-2">
                    {hackathons.map((project, index) => (
                        <div
                            key={index}
                            className="hackathon-card glass-card animate-on-scroll"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="card-header">
                                <div className="project-badge">{project.position}</div>
                                <div className="project-links">
                                    {project.githubLink && (
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
                                    {(project as any).demoLinks ? (
                                        <div className="demo-dropdown">
                                            <div className="project-link demo-trigger">
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <polygon points="5 3 19 12 5 21 5 3" />
                                                </svg>
                                            </div>
                                            <div className="demo-menu">
                                                {(project as any).demoLinks.map((demo: any, idx: number) => (
                                                    <a
                                                        key={idx}
                                                        href={demo.url}
                                                        className="demo-menu-item"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <svg
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                        >
                                                            <polygon points="5 3 19 12 5 21 5 3" />
                                                        </svg>
                                                        {demo.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        project.link && project.link !== '#' && (
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
                                        )
                                    )}
                                </div>
                            </div>

                            <h3 className="project-name">{project.name}</h3>
                            <div className="project-event">{project.event}</div>
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

export default Hackathons;
