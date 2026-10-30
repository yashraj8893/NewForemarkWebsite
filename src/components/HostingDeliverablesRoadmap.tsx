import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cloud,
  Server,
  Database,
  GitBranch,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

interface JourneyStep {
  id: string;
  stepNumber: number;
  title: string;
  shortDesc: string;
  detail: string;
  isCurrent?: boolean;
  position: 'top' | 'bottom';
  icon: React.ComponentType<{ size?: number; className?: string }>;
  stationX: number;
  stationY: number;
  theme: {
    bg: string;
    border: string;
    iconColor: string;
    accentGlow: string;
  };
}

const journeySteps: JourneyStep[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    title: '1. Make the Case for Cloud Architecture',
    shortDesc: 'Multi-Tier VPC Topologies & Networks',
    detail: 'Multi-tier isolated VPC topologies engineered for zero downtime and cost efficiency.',
    isCurrent: true,
    position: 'bottom',
    icon: Cloud,
    stationX: 145,
    stationY: 260,
    theme: {
      bg: '#ea7008', // Foremark Orange
      border: '#ffffff',
      iconColor: '#ffffff',
      accentGlow: 'rgba(234, 112, 8, 0.45)',
    },
  },
  {
    id: 'step-2',
    stepNumber: 2,
    title: '2. Deploy Managed Server Hosting',
    shortDesc: 'Dedicated Bare-Metal & Kubernetes',
    detail: 'Dedicated Linux and container environments tuned for maximum throughput and autoscaling.',
    position: 'top',
    icon: Server,
    stationX: 370,
    stationY: 260,
    theme: {
      bg: '#121110', // Obsidian Black
      border: '#ea7008',
      iconColor: '#ffffff',
      accentGlow: 'rgba(234, 112, 8, 0.35)',
    },
  },
  {
    id: 'step-3',
    stepNumber: 3,
    title: '3. Cluster Databases with Auto-Failover',
    shortDesc: 'Zero-Data-Loss Replication & Replicas',
    detail: 'High-availability database clusters with instant failover and point-in-time recovery.',
    position: 'bottom',
    icon: Database,
    stationX: 595,
    stationY: 260,
    theme: {
      bg: '#ea7008', // Foremark Orange
      border: '#ffffff',
      iconColor: '#ffffff',
      accentGlow: 'rgba(234, 112, 8, 0.45)',
    },
  },
  {
    id: 'step-4',
    stepNumber: 4,
    title: '4. Deliver Releases via CI/CD Pipelines',
    shortDesc: 'Blue/Green Releases & Automated Health',
    detail: 'Zero-downtime blue/green deployment automation with instant rollback triggers.',
    position: 'top',
    icon: GitBranch,
    stationX: 820,
    stationY: 260,
    theme: {
      bg: '#121110', // Obsidian Black
      border: '#ea7008',
      iconColor: '#ffffff',
      accentGlow: 'rgba(234, 112, 8, 0.35)',
    },
  },
  {
    id: 'step-5',
    stepNumber: 5,
    title: '5. Shield Origins & Enforce Disaster Drills',
    shortDesc: 'Global Anycast WAF, Snapshots & 15m RPO',
    detail: 'Enterprise edge WAF defense, offsite snapshot vaults, and guaranteed 15-min recovery SLA.',
    position: 'bottom',
    icon: ShieldCheck,
    stationX: 1045,
    stationY: 260,
    theme: {
      bg: '#ea7008', // Foremark Orange
      border: '#ffffff',
      iconColor: '#ffffff',
      accentGlow: 'rgba(234, 112, 8, 0.45)',
    },
  },
];

export const HostingDeliverablesRoadmap = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [activeMobileIdx, setActiveMobileIdx] = useState<number>(0);

  // Exact Undulating Road Path weaving smoothly OVER and UNDER each diamond:
  // Starts on bottom-left (30, 500) -> curves OVER #1 (145, 175) -> dips UNDER #2 (370, 345) ->
  // curves OVER #3 (595, 175) -> dips UNDER #4 (820, 345) -> curves OVER #5 (1045, 175) -> exits bottom-right (1160, 500)
  const roadPath = `
    M 30,500
    L 30,240
    C 30,190 95,175 145,175
    C 225,175 290,345 370,345
    C 450,345 515,175 595,175
    C 675,175 740,345 820,345
    C 900,345 965,175 1045,175
    C 1095,175 1160,190 1160,240
    L 1160,500
  `;

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-transparent select-none">
      {/* Ambient Radial Orange Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#ea7008]/[0.06] via-[#ea7008]/[0.03] to-transparent blur-[140px] pointer-events-none rounded-full z-0" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 relative z-10">
        
        {/* ─── SECTION HEADER (Faithful to Reference Image) ─── */}
        <div className="text-left mb-10 sm:mb-14">
          <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-2 font-mono">
            // INFRASTRUCTURE TRANSFORMATION ROADMAP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#121110] tracking-tight leading-tight mb-3">
            Your Cloud Transformation <span className="text-[#ea7008]">Journey</span>
          </h2>
          <p className="text-[#5c544d] text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            A battle-tested phased roadmap: from foundational VPC network topology to high-availability compute, automated pipelines, and continuous disaster recovery.
          </p>
        </div>

        {/* ─── DESKTOP PANORAMA: EXACT WEAVING ROAD & DIAMONDS (>= 1024px) ─── */}
        <div className="hidden lg:block relative w-full h-[540px] overflow-visible">

          <svg
            viewBox="0 0 1190 520"
            className="absolute inset-0 w-full h-full overflow-visible z-10 pointer-events-none"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Soft Road Shadow */}
              <filter id="highway-blur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* Road Metallic Gradient Fill */}
              <linearGradient id="highwaySurface" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1c1a17" />
                <stop offset="50%" stopColor="#121110" />
                <stop offset="100%" stopColor="#1c1a17" />
              </linearGradient>

              {/* Highway Light Pulse Keyframe */}
              <style>{`
                @keyframes highwayBeamFlow {
                  0% { stroke-dashoffset: 420; }
                  100% { stroke-dashoffset: 0; }
                }
                .highway-beam-pulse {
                  animation: highwayBeamFlow 4s linear infinite;
                }
              `}</style>
            </defs>

            {/* 1. Ambient Road Glow (Orange) */}
            <path
              d={roadPath}
              stroke="#ea7008"
              strokeWidth="50"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.18"
              filter="url(#highway-blur)"
              fill="none"
            />

            {/* 2. Outer Road Ribbon (Obsidian Metallic) */}
            <path
              d={roadPath}
              stroke="#26231f"
              strokeWidth="42"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* 3. Orange Road Curb Rails */}
            <path
              d={roadPath}
              stroke="#ea7008"
              strokeWidth="36"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
              fill="none"
            />

            {/* 4. Core Dark Highway Asphalt */}
            <path
              d={roadPath}
              stroke="url(#highwaySurface)"
              strokeWidth="32"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* 5. Center White Dashed Lane Divider (Faithful to Image) */}
            <path
              d={roadPath}
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
              fill="none"
            />

            {/* 6. Flowing Orange Light Pulse Packet */}
            <path
              d={roadPath}
              stroke="#ea7008"
              strokeWidth="3"
              strokeDasharray="28 200"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="highway-beam-pulse"
              fill="none"
            />

            {/* 7. The 5 Diamond Milestones Nested In The Road Curves */}
            {journeySteps.map((step) => {
              const isHovered = hoveredStep === step.stepNumber;
              const cx = step.stationX;
              const cy = step.stationY;

              return (
                <g
                  key={`diamond-${step.id}`}
                  className="cursor-pointer pointer-events-auto transition-transform duration-300"
                  onMouseEnter={() => setHoveredStep(step.stepNumber)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Ambient Diamond Glow on Hover */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isHovered ? 48 : 38}
                    fill={isHovered ? step.theme.accentGlow : 'rgba(0,0,0,0.14)'}
                    className="transition-all duration-300"
                  />

                  {/* Pulsing Outer Ping Ring */}
                  {isHovered && (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={52}
                      stroke="#ea7008"
                      strokeWidth="1.5"
                      fill="none"
                      className="animate-ping"
                      opacity="0.6"
                    />
                  )}

                  {/* Main Rotated Diamond (Rounded Rhombus exactly like image) */}
                  <rect
                    x={cx - 36}
                    y={cy - 36}
                    width="72"
                    height="72"
                    rx="16"
                    transform={`rotate(45 ${cx} ${cy})`}
                    fill={step.theme.bg}
                    stroke={isHovered ? '#ea7008' : step.theme.border}
                    strokeWidth={isHovered ? 3.5 : 2}
                    className="transition-all duration-300 drop-shadow-md"
                  />

                  {/* Inner Thin Inset Diamond Ring */}
                  <rect
                    x={cx - 28}
                    y={cy - 28}
                    width="56"
                    height="56"
                    rx="11"
                    transform={`rotate(45 ${cx} ${cy})`}
                    fill="none"
                    stroke={step.theme.iconColor}
                    strokeWidth="1.2"
                    strokeOpacity={isHovered ? 0.75 : 0.35}
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}
          </svg>

          {/* ─── HTML OVERLAY: DIAMOND ICONS (Centered precisely inside each diamond) ─── */}
          {journeySteps.map((step) => {
            const IconComp = step.icon;
            const isHovered = hoveredStep === step.stepNumber;

            return (
              <div
                key={`diamond-icon-${step.id}`}
                style={{
                  left: `${(step.stationX / 1190) * 100}%`,
                  top: `${(step.stationY / 520) * 100}%`,
                }}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300"
              >
                <div className={`transition-transform duration-300 ${isHovered ? 'scale-115' : 'scale-100'}`}>
                  <IconComp
                    size={28}
                    className={
                      step.theme.iconColor === '#ffffff'
                        ? 'text-white'
                        : 'text-[#121110]'
                    }
                  />
                </div>
              </div>
            );
          })}

          {/* ─── HTML OVERLAY: 5 TYPOGRAPHIC MILESTONE BLOCKS (Alternating Top & Bottom) ─── */}
          
          {/* STEP 1 (BOTTOM) — With Dashed Border Box and "We are here" Badge (Exact from Reference Image!) */}
          <div
            style={{
              left: `${(journeySteps[0].stationX / 1190) * 100}%`,
              top: '335px',
            }}
            onMouseEnter={() => setHoveredStep(1)}
            onMouseLeave={() => setHoveredStep(null)}
            className="absolute z-25 -translate-x-1/2 w-[205px] transition-all duration-300 cursor-pointer"
          >
            <div
              className={`p-3.5 rounded-xl border-2 border-dashed transition-all duration-300 text-center ${
                hoveredStep === 1
                  ? 'border-[#ea7008] bg-[#ea7008]/[0.08] shadow-[0_4px_20px_rgba(234,112,8,0.2)]'
                  : 'border-[#ea7008]/60 bg-[#ea7008]/[0.03] hover:border-[#ea7008]'
              }`}
            >
              <h3 className="text-sm sm:text-[14.5px] font-bold text-[#121110] leading-snug tracking-tight mb-1.5">
                {journeySteps[0].title}
              </h3>
              <p className="text-xs text-[#5c544d] leading-relaxed mb-2.5 font-normal">
                {journeySteps[0].detail}
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#ea7008] text-white text-[11px] font-bold tracking-wide uppercase shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>We are here</span>
              </div>
            </div>
          </div>

          {/* STEP 2 (TOP) — Pure Clean Typography Directly on Website (Exact from Reference Image) */}
          <div
            style={{
              left: `${(journeySteps[1].stationX / 1190) * 100}%`,
              top: '42px',
            }}
            onMouseEnter={() => setHoveredStep(2)}
            onMouseLeave={() => setHoveredStep(null)}
            className="absolute z-25 -translate-x-1/2 w-[205px] transition-all duration-300 cursor-pointer text-center"
          >
            <h3 className={`text-sm sm:text-[14.5px] font-bold leading-snug tracking-tight mb-1.5 transition-colors ${
              hoveredStep === 2 ? 'text-[#ea7008]' : 'text-[#121110]'
            }`}>
              {journeySteps[1].title}
            </h3>
            <p className="text-xs text-[#5c544d] leading-relaxed font-normal">
              {journeySteps[1].detail}
            </p>
          </div>

          {/* STEP 3 (BOTTOM) — Pure Clean Typography (Exact from Reference Image) */}
          <div
            style={{
              left: `${(journeySteps[2].stationX / 1190) * 100}%`,
              top: '345px',
            }}
            onMouseEnter={() => setHoveredStep(3)}
            onMouseLeave={() => setHoveredStep(null)}
            className="absolute z-25 -translate-x-1/2 w-[205px] transition-all duration-300 cursor-pointer text-center"
          >
            <h3 className={`text-sm sm:text-[14.5px] font-bold leading-snug tracking-tight mb-1.5 transition-colors ${
              hoveredStep === 3 ? 'text-[#ea7008]' : 'text-[#121110]'
            }`}>
              {journeySteps[2].title}
            </h3>
            <p className="text-xs text-[#5c544d] leading-relaxed font-normal">
              {journeySteps[2].detail}
            </p>
          </div>

          {/* STEP 4 (TOP) — Pure Clean Typography (Exact from Reference Image) */}
          <div
            style={{
              left: `${(journeySteps[3].stationX / 1190) * 100}%`,
              top: '42px',
            }}
            onMouseEnter={() => setHoveredStep(4)}
            onMouseLeave={() => setHoveredStep(null)}
            className="absolute z-25 -translate-x-1/2 w-[205px] transition-all duration-300 cursor-pointer text-center"
          >
            <h3 className={`text-sm sm:text-[14.5px] font-bold leading-snug tracking-tight mb-1.5 transition-colors ${
              hoveredStep === 4 ? 'text-[#ea7008]' : 'text-[#121110]'
            }`}>
              {journeySteps[3].title}
            </h3>
            <p className="text-xs text-[#5c544d] leading-relaxed font-normal">
              {journeySteps[3].detail}
            </p>
          </div>

          {/* STEP 5 (BOTTOM) — Pure Clean Typography (Exact from Reference Image) */}
          <div
            style={{
              left: `${(journeySteps[4].stationX / 1190) * 100}%`,
              top: '345px',
            }}
            onMouseEnter={() => setHoveredStep(5)}
            onMouseLeave={() => setHoveredStep(null)}
            className="absolute z-25 -translate-x-1/2 w-[205px] transition-all duration-300 cursor-pointer text-center"
          >
            <h3 className={`text-sm sm:text-[14.5px] font-bold leading-snug tracking-tight mb-1.5 transition-colors ${
              hoveredStep === 5 ? 'text-[#ea7008]' : 'text-[#121110]'
            }`}>
              {journeySteps[4].title}
            </h3>
            <p className="text-xs text-[#5c544d] leading-relaxed font-normal">
              {journeySteps[4].detail}
            </p>
          </div>

        </div>

        {/* ─── TABLET & MOBILE EXPERIENCE (< 1024px) ─── */}
        <div className="block lg:hidden w-full">
          {/* Milestone Step Selector Buttons */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
            {journeySteps.map((step, idx) => {
              const isActive = activeMobileIdx === idx;
              const IconComp = step.icon;

              return (
                <button
                  key={`mobile-btn-${step.id}`}
                  onClick={() => setActiveMobileIdx(idx)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-mono font-semibold transition-all duration-300 shrink-0 ${
                    isActive
                      ? 'bg-[#121110] text-white border-[#ea7008] shadow-[0_4px_16px_rgba(234,112,8,0.25)]'
                      : 'bg-white text-[#5c544d] border-[#ebe5df] hover:border-[#ea7008]/40'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] ${
                      isActive ? 'bg-[#ea7008] text-white' : 'bg-[#faf8f5] text-[#121110]'
                    }`}
                  >
                    <IconComp size={12} />
                  </span>
                  <span>Step {step.stepNumber}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {(() => {
                const step = journeySteps[activeMobileIdx];
                const IconComp = step.icon;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 rounded-2xl bg-white border-2 border-[#ea7008]/40 shadow-[0_8px_30px_rgba(234,112,8,0.15)] text-left"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-[#121110] border border-[#ea7008] flex items-center justify-center text-white">
                          <IconComp size={20} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#ea7008] font-bold">
                            PHASE 0{step.stepNumber}
                          </span>
                          <span className="text-xs text-[#8a8077] font-mono">
                            {step.shortDesc}
                          </span>
                        </div>
                      </div>

                      {step.isCurrent && (
                        <span className="text-[10px] font-mono font-bold uppercase text-white bg-[#ea7008] px-2.5 py-0.5 rounded-full shadow-xs">
                          We are here
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-[#121110] tracking-tight mb-2">
                      {step.title}
                    </h3>

                    <p className="text-sm text-[#5c544d] leading-relaxed mb-6">
                      {step.detail}
                    </p>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#ebe5df]">
                      <div className="flex gap-1.5">
                        {journeySteps.map((_, dotIdx) => (
                          <span
                            key={dotIdx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              dotIdx === activeMobileIdx
                                ? 'w-6 bg-[#ea7008]'
                                : 'w-1.5 bg-[#ebe5df]'
                            }`}
                          />
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          disabled={activeMobileIdx === 0}
                          onClick={() => setActiveMobileIdx((prev) => Math.max(0, prev - 1))}
                          className="w-8 h-8 rounded-full border border-[#ebe5df] flex items-center justify-center text-[#121110] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#faf8f5]"
                        >
                          <ArrowLeft size={14} />
                        </button>
                        <button
                          disabled={activeMobileIdx === journeySteps.length - 1}
                          onClick={() =>
                            setActiveMobileIdx((prev) =>
                              Math.min(journeySteps.length - 1, prev + 1)
                            )
                          }
                          className="w-8 h-8 rounded-full bg-[#121110] text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#ea7008] transition-colors"
                        >
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HostingDeliverablesRoadmap;
