import { Linkedin, Github, Code2, Cpu, Globe, Terminal } from 'lucide-react';
import './teammates.css';

const TeammatesCameraRoll = () => {
    // Mock data - Replace with your actual teammates
    const teammates = [
        {
            id: 1,
            name: "Akash Malasetty",
            role: "SDE @sprinklr",
            hackathon: "Teammate",
            desc: "</>.",
            icon: <Globe size={24} />,
            color: "color-cyan",
            linkedin: "https://www.linkedin.com/in/akash-malasetty-862588a4"
        },
        {
            id: 2,
            name: "Chirag Manjeshwar",
            role: "Graduate Student @ASU",
            hackathon: "Teammate",
            desc: "Fine-tuned the LLaMA model.",
            icon: <Cpu size={24} />,
            color: "color-purple",
            linkedin: "https://www.linkedin.com/in/chirumer"
        },
        {
            id: 3,
            name: "Ayush Sharma",
            role: "Data Scientist @Johnson & Johnson",
            hackathon: "Teammate",
            desc: "Handled auth & smart contracts.",
            icon: <Code2 size={24} />,
            color: "color-emerald",
            linkedin: "https://www.linkedin.com/in/ayush-sharma-2666a1196"
        },
        {
            id: 4,
            name: "Ninad Sonawane",
            role: "AI retial @Oracle",
            hackathon: "Teammate",
            desc: "Created the entire design system.",
            icon: <Terminal size={24} />,
            color: "color-orange",
            linkedin: "https://www.linkedin.com/in/ninadsonawanework/"
        },
        {
            id: 5,
            name: "Pranshu Gupta",
            role: "SWE @Hinge Health",
            hackathon: "Teammate",
            desc: "Scaled the API to 10k req/s.",
            icon: <Cpu size={24} />,
            color: "color-indigo",
            linkedin: "https://www.linkedin.com/in/pranshugupta01/"
        },
        {
            id: 6,
            name: "Nayan Agarwalla",
            role: "Engineering @Goldman Sachs",
            hackathon: "Teammate",
            desc: "Scaled the API to 10k req/s.",
            icon: <Cpu size={24} />,
            color: "color-indigo",
            linkedin: "https://www.linkedin.com/in/nayan-agarwalla-1369521b0/"
        }
    ];

    // We duplicate the list to create a seamless infinite loop
    const seamlessList = [...teammates, ...teammates, ...teammates];

    return (
        <div className="teammates-camera-roll-section">

            {/* Background Gradients for ambience */}
            <div className="teammates-bg-gradient"></div>

            <div className="teammates-header">
                <h2 className="teammates-main-title">
                    Code Comrades
                </h2>
                <p className="teammates-subtitle">
                    The brilliant minds I've hacked, caffeinated, and shipped code with across various competitions.
                </p>
            </div>

            {/* Camera Roll Container */}
            <div className="teammates-film-container">

                {/* Film Strip Holes Decoration - Top */}
                <div className="film-strip-holes top">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <div key={`hole-top-${i}`} className="film-hole"></div>
                    ))}
                </div>

                {/* The Scrolling Marquee Track */}
                <div className="teammates-marquee-wrapper">
                    {/* The Sliding Content */}
                    <div className="teammates-marquee-track">
                        {seamlessList.map((mate, index) => (
                            <TeammateCard key={`${mate.id}-${index}`} teammate={mate} />
                        ))}
                    </div>
                </div>

                {/* Film Strip Holes Decoration - Bottom */}
                <div className="film-strip-holes bottom">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <div key={`hole-bottom-${i}`} className="film-hole"></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

interface Teammate {
    id: number;
    name: string;
    role: string;
    hackathon: string;
    desc: string;
    icon: React.ReactNode;
    color: string;
    linkedin: string;
}

const TeammateCard = ({ teammate }: { teammate: Teammate }) => {
    return (
        <div className="teammate-card-wrapper">
            {/* Card Content */}
            <div className="teammate-card-inner">

                {/* Abstract Background blob */}
                <div className={`card-bg-blob ${teammate.color}`}></div>

                {/* Header: Icon & Hackathon Name */}
                <div className="card-header-row">
                    <div className="card-icon-box">
                        {teammate.icon}
                    </div>
                    <span className="card-hackathon-tag">
                        {teammate.hackathon}
                    </span>
                </div>

                {/* Photo Placeholder / Avatar Area */}
                <div className="card-avatar-section">
                    <div className={`card-avatar-ring ${teammate.color}`}>
                        <div className="card-avatar-inner">
                            <span className="card-avatar-initials">
                                {teammate.name.split(' ').map(n => n[0]).join('')}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Text Details */}
                <div className="card-text-section">
                    <h3 className="card-teammate-name">
                        {teammate.name}
                    </h3>
                    <p className={`card-teammate-role ${teammate.color}`}>
                        {teammate.role}
                    </p>
                    <p className="card-teammate-desc">
                        "{teammate.desc}"
                    </p>
                </div>

                {/* Footer Actions */}
                <div className="card-footer-actions">
                    <a href={teammate.linkedin} className="card-social-link linkedin">
                        <Linkedin size={18} />
                    </a>
                    <a href="#" className="card-social-link github">
                        <Github size={18} />
                    </a>
                </div>

                {/* Bottom shine effect */}
                <div className="card-bottom-shine"></div>
            </div>
        </div>
    );
};

export default TeammatesCameraRoll;