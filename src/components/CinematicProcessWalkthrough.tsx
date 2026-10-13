import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  Pause, 
  CheckCircle2, 
  Clock, 
  Layers, 
  ShieldCheck, 
  Rocket, 
  Sparkles,
  Database,
  Server,
  Cpu
} from 'lucide-react';

interface ProcessStepData {
  step: string;
  phaseNumber: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  keyDeliverables: string[];
  visualType: 'discovery' | 'design' | 'engineering' | 'qa' | 'launch';
}

const stepsData: ProcessStepData[] = [
  {
    step: '01',
    phaseNumber: 'PHASE 01',
    title: 'Discovery & Technical Scoping',
    subtitle: 'Architecture Scoping & Domain Modeling',
    description:
      'We unpack your target audience, commercial positioning, data models, API specs, and technical constraints before writing a single line of code.',
    duration: 'Week 1',
    keyDeliverables: [
      'Technical Architecture Blueprint',
      'Entity Relationship Diagrams (ERDs)',
      'Type-Safe API Contracts & Specs',
      'Security & Risk Mitigation Plan',
    ],
    visualType: 'discovery',
  },
  {
    step: '02',
    phaseNumber: 'PHASE 02',
    title: 'Wireframing & UI/UX Prototyping',
    subtitle: 'Interactive Design Sprints & Tokens',
    description:
      'Iterative design sprints crafting interactive layout prototypes, design tokens, typography, and micro-interactions in Figma before front-end implementation.',
    duration: 'Week 2 - 3',
    keyDeliverables: [
      'Interactive Clickable Prototype',
      'Design Token Architecture (Colors, Typography)',
      'Responsive Breakpoint Wireframes',
      'WCAG AA Contrast & Layout Verification',
    ],
    visualType: 'design',
  },
  {
    step: '03',
    phaseNumber: 'PHASE 03',
    title: 'Agile Full-Stack Engineering',
    subtitle: 'Bi-Weekly Sprints & Incremental Demos',
    description:
      'Writing clean, typed TypeScript and React components with atomic CSS, typed API contracts, and database schema migrations in focused sprints.',
    duration: 'Week 4 - 6',
    keyDeliverables: [
      'React 19 & Next.js 15 Component Engine',
      'Type-Safe Backend Microservices',
      'PostgreSQL & Redis Cache Schemas',
      'Bi-Weekly Interactive Demo Walkthroughs',
    ],
    visualType: 'engineering',
  },
  {
    step: '04',
    phaseNumber: 'PHASE 04',
    title: 'QA, Security Audit & Web Vitals',
    subtitle: 'Stress Testing & Sub-Second Latency',
    description:
      'Rigorous cross-device testing, penetration audits, database query optimization, accessibility (WCAG 2.1), and Core Web Vitals stress tests.',
    duration: 'Week 7',
    keyDeliverables: [
      '100/100 Core Web Vitals Lighthouse Audit',
      'OWASP Penetration & Sanitization Audit',
      'Database Stress & Concurrency Testing',
      'WCAG 2.1 AA Accessibility Testing',
    ],
    visualType: 'qa',
  },
  {
    step: '05',
    phaseNumber: 'PHASE 05',
    title: 'Launch & Hypercare Support',
    subtitle: 'Zero-Downtime Cutover & 30-Day Hypercare',
    description:
      'Zero-downtime production deployment, CI/CD pipeline automation, team CMS onboarding, and dedicated 30-day hypercare support to ensure absolute reliability.',
    duration: 'Week 8+',
    keyDeliverables: [
      'Zero-Downtime DNS Cutover Orchestration',
      'Global Edge CDN Caching & Telemetry',
      'Editorial Team CMS Onboarding Video',
      'Dedicated 30-Day Hypercare Warranty',
    ],
    visualType: 'launch',
  },
];

// ─── VISUAL INTERFACES FOR EACH STEP ─────────────────────────────────────────

const DiscoveryVisual = () => (
  <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between font-mono text-xs">
    {/* Topology Header */}
    <div className="flex items-center justify-between pb-3 border-b border-[#ebe5df]">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#ea7008] animate-ping" />
        <span className="font-bold text-[#121110] text-[11px]">DOMAIN TOPOLOGY MAP</span>
      </div>
      <span className="text-[10px] text-[#ea7008] bg-[#ea7008]/10 px-2 py-0.5 rounded border border-[#ea7008]/20">
        STATUS: VALIDATED
      </span>
    </div>

    {/* Connected Interactive Architecture Nodes */}
    <div className="grid grid-cols-2 gap-3 my-auto py-2">
      <div className="p-3 rounded-xl bg-white border border-[#ebe5df] shadow-xs flex flex-col gap-1 hover:border-[#ea7008]/60 transition-colors">
        <div className="flex items-center justify-between text-[11px] font-bold text-[#121110]">
          <span className="flex items-center gap-1.5"><Cpu size={13} className="text-[#ea7008]" /> Core Domain</span>
          <span className="text-[9px] text-[#ea7008]">OK</span>
        </div>
        <p className="text-[10px] text-[#6b635b] font-sans">Business logic, schemas & identity</p>
      </div>

      <div className="p-3 rounded-xl bg-white border border-[#ebe5df] shadow-xs flex flex-col gap-1 hover:border-[#ea7008]/60 transition-colors">
        <div className="flex items-center justify-between text-[11px] font-bold text-[#121110]">
          <span className="flex items-center gap-1.5"><Server size={13} className="text-[#ea7008]" /> API Gateway</span>
          <span className="text-[9px] text-[#ea7008]">&lt;15ms</span>
        </div>
        <p className="text-[10px] text-[#6b635b] font-sans">Typed GraphQL & REST federation</p>
      </div>

      <div className="p-3 rounded-xl bg-white border border-[#ebe5df] shadow-xs flex flex-col gap-1 hover:border-[#ea7008]/60 transition-colors">
        <div className="flex items-center justify-between text-[11px] font-bold text-[#121110]">
          <span className="flex items-center gap-1.5"><Database size={13} className="text-[#ea7008]" /> Database ACID</span>
          <span className="text-[9px] text-[#ea7008]">99.99%</span>
        </div>
        <p className="text-[10px] text-[#6b635b] font-sans">PostgreSQL normalized relations</p>
      </div>

      <div className="p-3 rounded-xl bg-white border border-[#ebe5df] shadow-xs flex flex-col gap-1 hover:border-[#ea7008]/60 transition-colors">
        <div className="flex items-center justify-between text-[11px] font-bold text-[#121110]">
          <span className="flex items-center gap-1.5"><Sparkles size={13} className="text-[#ea7008]" /> Edge Cache</span>
          <span className="text-[9px] text-[#ea7008]">HIT</span>
        </div>
        <p className="text-[10px] text-[#6b635b] font-sans">Redis in-memory sub-millisecond</p>
      </div>
    </div>

    {/* Verification Footer Banner */}
    <div className="flex items-center justify-between pt-2.5 border-t border-[#ebe5df] text-[10px] text-[#6b635b]">
      <span>Security Boundaries: Checked</span>
      <span className="text-[#121110] font-bold font-mono">Zero Ambiguity</span>
    </div>
  </div>
);

const DesignVisual = () => (
  <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between font-mono text-xs">
    {/* Studio Header */}
    <div className="flex items-center justify-between pb-3 border-b border-[#ebe5df]">
      <div className="flex items-center gap-2">
        <Layers size={14} className="text-[#ea7008]" />
        <span className="font-bold text-[#121110] text-[11px]">FIGMA DESIGN SYSTEM</span>
      </div>
      <span className="text-[10px] text-[#121110] bg-[#faf8f5] px-2 py-0.5 rounded border border-[#ebe5df]">
        TOKENS: 48 / 48
      </span>
    </div>

    {/* Wireframe Canvas Preview */}
    <div className="p-3.5 rounded-xl bg-white border border-[#ebe5df] shadow-xs my-auto space-y-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#ea7008]" />
          <span className="w-2 h-2 rounded-full bg-[#121110]" />
          <span className="w-2 h-2 rounded-full bg-[#ebe5df]" />
        </div>
        <span className="text-[10px] text-[#6b635b] font-sans">Responsive 1440px / 375px</span>
      </div>

      <div className="w-full h-2.5 bg-[#faf8f5] rounded border border-[#ebe5df]" />
      <div className="grid grid-cols-3 gap-2">
        <div className="h-10 bg-[#faf8f5] rounded border border-[#ebe5df] flex items-center justify-center text-[10px] text-[#ea7008] font-bold">
          NAVBAR
        </div>
        <div className="h-10 bg-[#121110] text-white rounded flex items-center justify-center text-[10px] font-bold">
          HERO CTA
        </div>
        <div className="h-10 bg-[#faf8f5] rounded border border-[#ebe5df] flex items-center justify-center text-[10px] text-[#6b635b]">
          METRICS
        </div>
      </div>
      <div className="w-3/4 h-2 bg-[#ea7008]/15 rounded" />
    </div>

    <div className="flex items-center justify-between pt-2.5 border-t border-[#ebe5df] text-[10px] text-[#6b635b]">
      <span>Interactive Prototype: Ready</span>
      <span className="text-[#ea7008] font-bold">Validated with Client</span>
    </div>
  </div>
);

const EngineeringVisual = () => (
  <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between font-mono text-xs bg-[#121110] text-white rounded-xl">
    {/* Terminal Header */}
    <div className="flex items-center justify-between pb-2.5 border-b border-white/10 text-[10px]">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#ea7008]" />
        <span className="w-2 h-2 rounded-full bg-white/40" />
        <span className="w-2 h-2 rounded-full bg-white/20" />
        <span className="text-[#ea7008] font-bold ml-1.5">foremark-engine</span>
      </div>
      <span className="text-white/50">git:main (sprint-03)</span>
    </div>

    {/* Terminal Code Streams */}
    <div className="space-y-1.5 my-auto text-[11px] leading-relaxed">
      <p className="text-white/60">
        <span className="text-[#ea7008]">$</span> npm run build:production
      </p>
      <p className="text-white/90">
        <span className="text-emerald-400">✓</span> 2190 modules transformed [clean]
      </p>
      <p className="text-[#ea7008]">
        <span className="text-white">⚡</span> tsc --strict [0 errors found]
      </p>
      <div className="p-2 rounded bg-white/5 border border-white/10 text-[10px] text-white/80 mt-1 flex items-center justify-between">
        <span>Sprint Velocity: 42 pts shipped</span>
        <span className="text-emerald-400 font-bold">100% PASS</span>
      </div>
    </div>

    <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-white/50">
      <span>Docker Container: Built</span>
      <span className="text-[#ea7008] font-bold">Live Staging Ready</span>
    </div>
  </div>
);

const QAVisual = () => (
  <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between font-mono text-xs">
    {/* Vitals Header */}
    <div className="flex items-center justify-between pb-3 border-b border-[#ebe5df]">
      <div className="flex items-center gap-2">
        <ShieldCheck size={14} className="text-[#ea7008]" />
        <span className="font-bold text-[#121110] text-[11px]">CORE WEB VITALS AUDIT</span>
      </div>
      <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
        LIGHTHOUSE: 100/100
      </span>
    </div>

    {/* 4 Performance Metric Badges */}
    <div className="grid grid-cols-2 gap-2.5 my-auto">
      <div className="p-3 rounded-xl bg-white border border-[#ebe5df] shadow-xs flex flex-col">
        <span className="text-[10px] text-[#6b635b]">Largest Contentful Paint</span>
        <div className="flex items-baseline gap-1.5 mt-0.5">
          <span className="text-base font-bold text-[#121110]">0.62s</span>
          <span className="text-[9px] text-emerald-600 font-bold">EXCELLENT</span>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-white border border-[#ebe5df] shadow-xs flex flex-col">
        <span className="text-[10px] text-[#6b635b]">Cumulative Layout Shift</span>
        <div className="flex items-baseline gap-1.5 mt-0.5">
          <span className="text-base font-bold text-[#121110]">0.000</span>
          <span className="text-[9px] text-emerald-600 font-bold">ZERO SHIFT</span>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-white border border-[#ebe5df] shadow-xs flex flex-col">
        <span className="text-[10px] text-[#6b635b]">Interaction to Next Paint</span>
        <div className="flex items-baseline gap-1.5 mt-0.5">
          <span className="text-base font-bold text-[#121110]">14ms</span>
          <span className="text-[9px] text-emerald-600 font-bold">&lt;50ms</span>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-white border border-[#ebe5df] shadow-xs flex flex-col">
        <span className="text-[10px] text-[#6b635b]">WCAG 2.1 Accessibility</span>
        <div className="flex items-baseline gap-1.5 mt-0.5">
          <span className="text-base font-bold text-[#ea7008]">AA PASS</span>
          <span className="text-[9px] text-[#ea7008] font-bold">AUDITED</span>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between pt-2.5 border-t border-[#ebe5df] text-[10px] text-[#6b635b]">
      <span>Penetration Test: Passed</span>
      <span className="text-emerald-600 font-bold">Zero Vulnerabilities</span>
    </div>
  </div>
);

const LaunchVisual = () => (
  <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between font-mono text-xs">
    {/* Launch Header */}
    <div className="flex items-center justify-between pb-3 border-b border-[#ebe5df]">
      <div className="flex items-center gap-2">
        <Rocket size={14} className="text-[#ea7008]" />
        <span className="font-bold text-[#121110] text-[11px]">PRODUCTION CUTOVER</span>
      </div>
      <span className="text-[10px] text-[#ea7008] bg-[#ea7008]/10 px-2 py-0.5 rounded border border-[#ea7008]/20 font-bold">
        STATUS: LIVE
      </span>
    </div>

    {/* Cockpit Card */}
    <div className="p-4 rounded-xl bg-white border border-[#ebe5df] shadow-xs my-auto space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-[#121110]">GLOBAL EDGE TRAFFIC</span>
        </div>
        <span className="text-[10px] text-emerald-600 font-bold">99.99% UPTIME</span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[11px]">
        <div className="p-2 rounded bg-[#faf8f5] border border-[#ebe5df]">
          <span className="text-[9px] text-[#6b635b] block">DNS CUTOVER</span>
          <span className="font-bold text-[#121110]">Zero Downtime</span>
        </div>
        <div className="p-2 rounded bg-[#faf8f5] border border-[#ebe5df]">
          <span className="text-[9px] text-[#6b635b] block">HYPERCARE</span>
          <span className="font-bold text-[#ea7008]">30 Days Active</span>
        </div>
      </div>
      
      <div className="text-[10px] text-[#6b635b] flex items-center gap-1.5 font-sans">
        <CheckCircle2 size={12} className="text-[#ea7008]" />
        Full intellectual property & git repository transferred.
      </div>
    </div>

    <div className="flex items-center justify-between pt-2.5 border-t border-[#ebe5df] text-[10px] text-[#6b635b]">
      <span>Team CMS Training: Completed</span>
      <span className="text-[#ea7008] font-bold">Warranty in Effect</span>
    </div>
  </div>
);

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export const CinematicProcessWalkthrough = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  const timerRef = useRef<number | null>(null);
  const progressIntervalRef = useRef<number | null>(null);
  const STEP_DURATION = 6000; // 6 seconds per step

  const activeStep = stepsData[activeIndex];

  const goToStep = useCallback((index: number, newDirection?: number) => {
    setDirection(newDirection ?? (index > activeIndex ? 1 : -1));
    setActiveIndex(index);
    setProgress(0);
  }, [activeIndex]);

  const nextStep = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % stepsData.length);
    setProgress(0);
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + stepsData.length) % stepsData.length);
    setProgress(0);
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextStep();
      if (e.key === 'ArrowLeft') prevStep();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextStep, prevStep]);

  // Auto-play timer and smooth progress bar
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const intervalTime = 50; // update progress every 50ms
    const stepIncrement = (intervalTime / STEP_DURATION) * 100;

    progressIntervalRef.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextStep();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalTime);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, nextStep]);

  // Cinematic Slide Variants
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 35 : -35,
      opacity: 0,
      filter: 'blur(5px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -35 : 35,
      opacity: 0,
      filter: 'blur(5px)',
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="py-16 sm:py-24 border-t border-[#ebe5df] relative overflow-hidden bg-transparent">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-16 relative z-10">
        
        {/* Section Header with Minimal Phase Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="max-w-2xl text-left">
            <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-2 font-mono">
              // DELIVERY LIFECYCLE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121110] tracking-tight leading-tight mb-2">
              How We Deliver <span className="text-[#ea7008]">High-Impact Software</span>
            </h2>
            <p className="text-[#5c544d] text-sm sm:text-base leading-relaxed">
              A transparent, phased lifecycle with constant feedback loops and zero surprises.
            </p>
          </div>

          {/* Minimal 5-Step Story Dash Indicators */}
          <div className="flex items-center gap-1.5 select-none self-start sm:self-auto py-1">
            {stepsData.map((s, idx) => (
              <button
                key={s.step}
                onClick={() => goToStep(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                  idx === activeIndex
                    ? 'w-8 bg-[#ea7008]'
                    : idx < activeIndex
                    ? 'w-4 bg-[#ea7008]/40'
                    : 'w-4 bg-[#ebe5df] hover:bg-[#ea7008]/30'
                }`}
                title={`Jump to ${s.title}`}
              />
            ))}
          </div>
        </div>

        {/* ─── CINEMATIC STAGE CONTAINER ─── */}
        <div 
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          className="relative rounded-3xl border border-[#ebe5df] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.03)] p-6 sm:p-10 md:p-12 overflow-hidden"
        >
          {/* Top Edge Ambient Progress Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#ebe5df]/40">
            <div
              className="h-full bg-[#ea7008] transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#ea7008]/[0.05] blur-[120px] pointer-events-none rounded-full" />

          {/* Huge Faint Watermark Step Number in Background */}
          <div className="absolute top-2 right-6 sm:right-12 text-[140px] sm:text-[200px] font-bold font-display text-[#121110]/[0.025] select-none pointer-events-none leading-none">
            {activeStep.step}
          </div>

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeStep.step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10"
            >
              {/* Left Column: Step Details */}
              <div className="lg:col-span-7 flex flex-col justify-between text-left">
                <div>
                  {/* Phase Pill Header */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ea7008]/10 text-[#ea7008] border border-[#ea7008]/25 text-[11px] font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008]" />
                      {activeStep.phaseNumber} OF 05
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#6b635b] font-mono">
                      <Clock size={12} className="text-[#ea7008]" />
                      {activeStep.duration}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121110] tracking-tight leading-tight mb-2">
                    {activeStep.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#ea7008] font-semibold mb-4">
                    // {activeStep.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[#5c544d] text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                    {activeStep.description}
                  </p>

                  {/* Key Deliverables in This Phase */}
                  <div className="space-y-2 mb-8">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#121110] block mb-2.5">
                      KEY PHASE DELIVERABLES:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeStep.keyDeliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-xs sm:text-[13px] text-[#3d3832]"
                        >
                          <CheckCircle2 size={15} className="text-[#ea7008] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation & Auto-Play Controls */}
                <div className="flex items-center justify-between pt-6 border-t border-[#ebe5df]">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevStep}
                      className="p-2 sm:px-3.5 sm:py-2 rounded-full border border-[#ebe5df] text-[#5c544d] hover:text-[#121110] hover:border-[#ea7008]/50 hover:bg-[#faf8f5] transition-all flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                      title="Previous Step (Left Arrow)"
                    >
                      <ArrowLeft size={14} />
                      <span className="hidden sm:inline">Previous</span>
                    </button>

                    <button
                      onClick={nextStep}
                      className="p-2 sm:px-4 sm:py-2 rounded-full bg-[#121110] text-white hover:bg-[#252320] transition-all flex items-center gap-1.5 text-xs font-bold shadow-sm cursor-pointer"
                      title="Next Step (Right Arrow)"
                    >
                      <span>Next Phase</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  {/* Play/Pause & Hover Info */}
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="flex items-center gap-1.5 text-[11px] font-mono text-[#6b635b] hover:text-[#121110] px-2.5 py-1 rounded-full border border-[#ebe5df] hover:border-[#ea7008]/40 transition-colors cursor-pointer"
                    >
                      {isPlaying ? (
                        <>
                          <Pause size={11} className="text-[#ea7008]" />
                          <span>PAUSE</span>
                        </>
                      ) : (
                        <>
                          <Play size={11} className="text-[#ea7008]" />
                          <span>RESUME</span>
                        </>
                      )}
                    </button>
                    <span className="text-[11px] font-mono text-[#8a8077] hidden md:inline">
                      (Pauses on hover)
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Cinematic Dynamic Visual Panel */}
              <div className="lg:col-span-5">
                <div className="w-full aspect-[4/3] rounded-2xl bg-[#faf8f5] border border-[#ebe5df] shadow-xs overflow-hidden flex items-center justify-center relative">
                  {activeStep.visualType === 'discovery' && <DiscoveryVisual />}
                  {activeStep.visualType === 'design' && <DesignVisual />}
                  {activeStep.visualType === 'engineering' && <EngineeringVisual />}
                  {activeStep.visualType === 'qa' && <QAVisual />}
                  {activeStep.visualType === 'launch' && <LaunchVisual />}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

export default CinematicProcessWalkthrough;
