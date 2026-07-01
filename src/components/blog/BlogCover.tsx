import React from 'react';

interface BlogCoverProps {
  theme: 'engineering' | 'design' | 'case-studies' | 'cloud' | 'culture';
  className?: string;
}

export const BlogCover: React.FC<BlogCoverProps> = ({ theme, className = "" }) => {
  const baseClasses = "relative w-full h-full overflow-hidden flex items-center justify-center bg-portfolio-dark selection:bg-transparent";

  // Category specific cover visuals using premium inline SVGs
  switch (theme) {
    case 'engineering':
      return (
        <div className={`${baseClasses} ${className}`}>
          {/* Engineering telemetry & grid theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#020617] opacity-90" />

          {/* Grid Background */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="eng-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(127, 152, 250, 0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#eng-grid)" />
          </svg>

          {/* Abstract SVG Circuit / Telemetry elements */}
          <svg className="relative w-4/5 h-4/5 text-portfolio-blue/20" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Concentric Telemetry Circles */}
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" />
            <circle cx="100" cy="100" r="60" stroke="var(--color-portfolio-blue)" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="20" stroke="var(--color-portfolio-green)" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 2" />

            {/* Glowing Nodes */}
            <circle cx="100" cy="20" r="4" fill="var(--color-portfolio-gold)" className="animate-pulse" />
            <circle cx="100" cy="180" r="4" fill="var(--color-portfolio-gold)" />
            <circle cx="20" cy="100" r="3" fill="var(--color-portfolio-blue)" />
            <circle cx="180" cy="100" r="3" fill="var(--color-portfolio-green)" />

            {/* Connecting lines */}
            <path d="M 100 20 L 100 60" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 100 140 L 100 180" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 20 100 L 60 100" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 140 100 L 180 100" stroke="currentColor" strokeWidth="0.75" />

            {/* Diagonal metrics */}
            <path d="M 43 43 L 71 71" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <path d="M 157 157 L 129 129" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>

          {/* Decorative label */}
          <div className="absolute bottom-4 right-4 font-mono text-[9px] text-portfolio-blue/40 tracking-widest uppercase">
            [SYS_OBSERVABILITY_0x8F]
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-portfolio-blue/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-portfolio-green/10 rounded-full blur-2xl pointer-events-none" />
        </div>
      );

    case 'design':
      return (
        <div className={`${baseClasses} ${className}`}>
          {/* Design grid & layout system theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#271203] via-[#0d0d0d] to-[#120701] opacity-95" />

          {/* Blueprint Dot grid */}
          <div className="absolute inset-0 opacity-[0.07]" style={{
            backgroundImage: 'radial-gradient(var(--color-portfolio-gold) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }} />

          {/* Figma-like wireframe blueprint layout */}
          <svg className="relative w-4/5 h-4/5 text-portfolio-gold/30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer bounds */}
            <rect x="15" y="15" width="170" height="170" rx="12" stroke="currentColor" strokeWidth="0.5" />

            {/* Crosshair guidelines */}
            <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="0.25" strokeDasharray="4 4" />
            <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="0.25" strokeDasharray="4 4" />

            {/* Simulated UI components */}
            <rect x="30" y="30" width="60" height="40" rx="6" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="150" cy="50" r="20" stroke="var(--color-portfolio-gold)" strokeWidth="1" strokeOpacity="0.5" />

            {/* Layout guides */}
            <path d="M 30 90 L 170 90" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 30 110 L 130 110" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 30 130 L 150 130" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 30 150 L 90 150" stroke="currentColor" strokeWidth="0.75" />

            {/* Responsive handles */}
            <rect x="181" y="96" width="8" height="8" rx="2" fill="var(--color-portfolio-gold)" stroke="currentColor" strokeWidth="0.5" />
            <rect x="96" y="181" width="8" height="8" rx="2" fill="var(--color-portfolio-gold)" stroke="currentColor" strokeWidth="0.5" />
          </svg>

          {/* Decorative tag */}
          <div className="absolute bottom-4 right-4 font-mono text-[9px] text-portfolio-gold/40 tracking-widest uppercase">
            [LAYOUT_GUIDE_V2.1]
          </div>

          <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-portfolio-gold/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      );

    case 'case-studies':
      return (
        <div className={`${baseClasses} ${className}`}>
          {/* Case studies architectural framework */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c0f1d] via-[#05060b] to-portfolio-dark opacity-95" />

          {/* Geometric lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="var(--color-portfolio-gold)" strokeWidth="0.5" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="var(--color-portfolio-gold)" strokeWidth="0.5" />
          </svg>

          {/* Abstract structural grid */}
          <svg className="relative w-3/4 h-3/4 text-white/10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Grid structure showing growth/isometric cubes */}
            <path d="M 100 20 L 170 60 L 170 140 L 100 180 L 30 140 L 30 60 Z" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 100 20 L 100 180" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 30 60 L 100 100 L 170 60" stroke="currentColor" strokeWidth="0.75" />
            <path d="M 30 140 L 100 100 L 170 140" stroke="currentColor" strokeWidth="0.75" />

            {/* Highlighted segment */}
            <polygon points="100,100 170,140 100,180 30,140" fill="var(--color-portfolio-gold)" fillOpacity="0.04" />

            {/* Metric markers */}
            <circle cx="100" cy="100" r="3.5" fill="var(--color-portfolio-gold)" />
            <circle cx="170" cy="60" r="2.5" fill="currentColor" />
            <circle cx="30" cy="60" r="2.5" fill="currentColor" />
          </svg>

          <div className="absolute bottom-4 right-4 font-mono text-[9px] text-white/30 tracking-widest uppercase">
            [METRIC_CASE_STUDY]
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        </div>
      );

    case 'cloud':
      return (
        <div className={`${baseClasses} ${className}`}>
          {/* Cloud and infrastructure deployment pipeline theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c2340] via-[#051120] to-[#02070f] opacity-95" />

          {/* Continuous sine wave paths for pipelines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <path d="M -100 80 Q 100 -20 300 80 T 700 80 T 1100 80" fill="none" stroke="var(--color-portfolio-blue)" strokeWidth="1" />
            <path d="M -100 120 Q 100 220 300 120 T 700 120 T 1100 120" fill="none" stroke="var(--color-portfolio-blue)" strokeWidth="1.5" />
          </svg>

          {/* Cloud Nodes */}
          <svg className="relative w-4/5 h-4/5 text-portfolio-blue/30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Deployment server racks abstract */}
            <rect x="40" y="40" width="120" height="25" rx="4" stroke="currentColor" strokeWidth="0.75" />
            <rect x="40" y="85" width="120" height="25" rx="4" stroke="var(--color-portfolio-blue)" strokeWidth="1" strokeOpacity="0.6" />
            <rect x="40" y="130" width="120" height="25" rx="4" stroke="currentColor" strokeWidth="0.75" />

            {/* Connection nodes on servers */}
            <circle cx="55" cy="52.5" r="2" fill="var(--color-portfolio-green)" className="animate-pulse" />
            <circle cx="55" cy="97.5" r="2" fill="var(--color-portfolio-gold)" />
            <circle cx="55" cy="142.5" r="2" fill="var(--color-portfolio-green)" />

            <circle cx="70" cy="52.5" r="1.5" fill="currentColor" />
            <circle cx="70" cy="97.5" r="1.5" fill="currentColor" />
            <circle cx="70" cy="142.5" r="1.5" fill="currentColor" />

            {/* Connecting lines for deployment flow */}
            <path d="M 160 52.5 L 180 52.5 L 180 97.5 L 160 97.5" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <path d="M 40 97.5 L 20 97.5 L 20 142.5 L 40 142.5" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>

          <div className="absolute bottom-4 right-4 font-mono text-[9px] text-portfolio-blue/40 tracking-widest uppercase">
            [CLOUD_DEPLOY_IAAC]
          </div>

          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-portfolio-blue/15 rounded-full blur-2xl pointer-events-none" />
        </div>
      );

    case 'culture':
      return (
        <div className={`${baseClasses} ${className}`}>
          {/* Company culture & engineering-first core theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2e0854] via-[#0f021c] to-portfolio-dark opacity-95" />

          {/* Glowing diagonal shapes */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 200,0 0,500" fill="var(--color-portfolio-gold)" />
            <polygon points="500,500 300,500 500,200" fill="var(--color-portfolio-gold)" />
          </svg>

          {/* Large dynamic visual numeral & tagline */}
          <div className="relative text-center selection:bg-transparent">
            <span className="block text-[110px] font-black tracking-tighter text-white/5 select-none leading-none">
              #01
            </span>
            <span className="block text-[10px] font-mono tracking-[0.3em] text-portfolio-gold uppercase -mt-4 opacity-80">
              Engineering First
            </span>
          </div>

          {/* Floating particle SVGs */}
          <svg className="absolute inset-0 w-full h-full text-white/10" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25%" cy="30%" r="2" fill="currentColor" />
            <circle cx="75%" cy="25%" r="3" fill="var(--color-portfolio-gold)" fillOpacity="0.4" />
            <circle cx="80%" cy="70%" r="1.5" fill="currentColor" />
            <circle cx="20%" cy="80%" r="2.5" fill="currentColor" />
          </svg>

          <div className="absolute bottom-4 right-4 font-mono text-[9px] text-white/20 tracking-widest uppercase">
            [CULTURE_PHILOSOPHY]
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-portfolio-gold/5 rounded-full blur-3xl pointer-events-none" />
        </div>
      );

    default:
      return (
        <div className={`${baseClasses} ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-portfolio-gold/20 via-portfolio-dark to-portfolio-dark" />
        </div>
      );
  }
};
