import { Terminal, Database } from 'lucide-react';
import './GridBackground.css';

const GridBackground = () => (
    <div className="grid-background-container">
        {/* Grid Pattern */}
        <div className="grid-pattern"></div>

        {/* Radial Mask to fade edges */}
        <div className="grid-mask"></div>

        {/* Floating Tech Elements */}
        <div
            className="floating-icon top-right"
            style={{ animationDuration: '3s' }}
        >
            <Terminal size={64} />
        </div>
        <div
            className="floating-icon bottom-left"
            style={{ animationDuration: '4s' }}
        >
            <Database size={48} />
        </div>
    </div>
);

export default GridBackground;
