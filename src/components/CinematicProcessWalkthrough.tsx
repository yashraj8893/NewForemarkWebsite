import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  Pause, 
  Check,
  Layers, 
  ShieldCheck, 
  Sparkles,
  Database,
  Server,
  Cpu,
  Globe,
  Users
} from 'lucide-react';

interface DeliverableItem {
  icon: 'layers' | 'database' | 'server' | 'shield' | 'sparkles' | 'globe' | 'users' | 'cpu';
  line1: string;
  line2: string;
}

interface CockpitData {
  title: string;
  statusBadge: string;
  metric1: { label: string; value: string };
  metric2: { label: string; value: string };
  guarantee: string;
  footerLeft: string;
  footerRight: string;
}

interface ProcessStepData {
  step: string;
  phaseBadge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  deliverables: DeliverableItem[];
  cockpit: CockpitData;
}

const stepsData: ProcessStepData[] = [
  {
    step: '01',
    phaseBadge: 'PHASE 01 OF 05',
    titleLine1: 'Discovery &',
    titleLine2: 'Technical Scoping',
    description:
      'We unpack your target audience, commercial positioning, data models, API specs, and technical constraints before writing a single line of code.',
    deliverables: [
      {
        icon: 'layers',
        line1: 'Technical Architecture',
        line2: 'System Blueprint',
      },
      {
        icon: 'database',
        line1: 'Entity Relationship',
        line2: 'Normalized ERDs',
      },
      {
        icon: 'server',
        line1: 'Type-Safe API Contracts',
        line2: 'OpenAPI Specifications',
      },
      {
        icon: 'shield',
        line1: 'Security & Compliance',
        line2: 'Risk Mitigation Plan',
      },
    ],
    cockpit: {
      title: 'ARCHITECTURE SCOPING',
      statusBadge: 'STATUS: VALIDATED',
      metric1: { label: 'DATA SCHEMAS', value: 'ACID Normalized' },
      metric2: { label: 'API CONTRACTS', value: 'Strict Type-Safe' },
      guarantee: 'Comprehensive technical specification signed off.',
      footerLeft: 'Data Schemas: 100% Defined',
      footerRight: 'Zero Ambiguity',
    },
  },
  {
    step: '02',
    phaseBadge: 'PHASE 02 OF 05',
    titleLine1: 'Wireframing &',
    titleLine2: 'UI/UX Prototyping',
    description:
      'Iterative design sprints crafting interactive layout prototypes, design tokens, typography, and micro-interactions in Figma before front-end implementation.',
    deliverables: [
      {
        icon: 'sparkles',
        line1: 'Interactive Clickable',
        line2: 'Figma Prototype',
      },
      {
        icon: 'layers',
        line1: 'Design Token Architecture',
        line2: 'Color & Typography',
      },
      {
        icon: 'cpu',
        line1: 'Responsive Layouts',
        line2: 'Mobile to 4K Ultra',
      },
      {
        icon: 'shield',
        line1: 'Contrast & Usability',
        line2: 'WCAG 2.1 AA Certified',
      },
    ],
    cockpit: {
      title: 'DESIGN SYSTEM & TOKENS',
      statusBadge: 'STATUS: APPROVED',
      metric1: { label: 'RESPONSIVE RANGE', value: 'Mobile to 4K Ultra' },
      metric2: { label: 'ACCESSIBILITY', value: 'WCAG 2.1 AA Pass' },
      guarantee: 'Interactive Figma prototype & component library approved.',
      footerLeft: 'Design Sprints: Completed',
      footerRight: 'Design Locked',
    },
  },
  {
    step: '03',
    phaseBadge: 'PHASE 03 OF 05',
    titleLine1: 'Agile Full-Stack',
    titleLine2: 'Engineering',
    description:
      'Writing clean, typed TypeScript and React components with atomic CSS, typed API contracts, and database schema migrations in focused sprints.',
    deliverables: [
      {
        icon: 'cpu',
        line1: 'React 19 & Next.js',
        line2: 'Component Engine',
      },
      {
        icon: 'server',
        line1: 'Type-Safe Microservices',
        line2: 'Federated API Routes',
      },
      {
        icon: 'database',
        line1: 'PostgreSQL & Redis',
        line2: 'Optimized Schemas',
      },
      {
        icon: 'sparkles',
        line1: 'Bi-Weekly Sprints',
        line2: 'Interactive Demo Builds',
      },
    ],
    cockpit: {
      title: 'SPRINT EXECUTION ENGINE',
      statusBadge: 'STATUS: PASSING',
      metric1: { label: 'SPRINT CADENCE', value: 'Two-Week Demos' },
      metric2: { label: 'TYPE SAFETY', value: 'Strict TypeScript' },
      guarantee: 'Continuous automated testing & staging preview URLs active.',
      footerLeft: 'Git Main: Clean Deployment',
      footerRight: 'Staging Ready',
    },
  },
  {
    step: '04',
    phaseBadge: 'PHASE 04 OF 05',
    titleLine1: 'QA, Security Audit &',
    titleLine2: 'Web Vitals',
    description:
      'Rigorous cross-device testing, penetration audits, database query optimization, accessibility (WCAG 2.1), and Core Web Vitals stress tests.',
    deliverables: [
      {
        icon: 'sparkles',
        line1: 'Lighthouse Audit',
        line2: '100/100 Core Vitals',
      },
      {
        icon: 'shield',
        line1: 'OWASP Penetration',
        line2: 'Security Audit Pass',
      },
      {
        icon: 'server',
        line1: 'Stress Testing',
        line2: 'High-Concurrency Load',
      },
      {
        icon: 'cpu',
        line1: 'Cross-Browser QA',
        line2: 'Pixel-Perfect Verification',
      },
    ],
    cockpit: {
      title: 'AUDIT & SECURITY COCKPIT',
      statusBadge: 'STATUS: VERIFIED',
      metric1: { label: 'PENETRATION AUDIT', value: 'Zero Vulnerabilities' },
      metric2: { label: 'FIRST CONTENTFUL PAINT', value: '0.62s Speed' },
      guarantee: 'Full security penetration pass & sub-second latency verified.',
      footerLeft: 'Lighthouse Audit: 100/100',
      footerRight: 'Launch Approved',
    },
  },
  {
    step: '05',
    phaseBadge: 'PHASE 05 OF 05',
    titleLine1: 'Launch &',
    titleLine2: 'Hypercare Support',
    description:
      'Zero-downtime production deployment, CI/CD pipeline automation, team CMS onboarding, and dedicated 30-day hypercare support to ensure absolute reliability.',
    deliverables: [
      {
        icon: 'layers',
        line1: 'Zero-Downtime DNS',
        line2: 'Cutover Orchestration',
      },
      {
        icon: 'globe',
        line1: 'Global Edge CDN',
        line2: 'Caching & Telemetry',
      },
      {
        icon: 'users',
        line1: 'Editorial Team CMS',
        line2: 'Onboarding Video',
      },
      {
        icon: 'shield',
        line1: 'Dedicated 30-Day',
        line2: 'Hypercare Warranty',
      },
    ],
    cockpit: {
      title: 'PRODUCTION CUTOVER',
      statusBadge: 'STATUS: LIVE',
      metric1: { label: 'DNS CUTOVER', value: 'Zero Downtime' },
      metric2: { label: 'HYPERCARE', value: '30 Days Active' },
      guarantee: 'Full intellectual property & git repository transferred.',
      footerLeft: 'Team CMS Training: Completed',
      footerRight: 'Warranty in Effect',
    },
  },
];

const renderDeliverableIcon = (icon: DeliverableItem['icon']) => {
  switch (icon) {
    case 'layers':
      return <Layers size={18} strokeWidth={2.2} />;
    case 'globe':
      return <Globe size={18} strokeWidth={2.2} />;
    case 'users':
      return <Users size={18} strokeWidth={2.2} />;
    case 'shield':
      return <ShieldCheck size={18} strokeWidth={2.2} />;
    case 'database':
      return <Database size={18} strokeWidth={2.2} />;
    case 'server':
      return <Server size={18} strokeWidth={2.2} />;
    case 'cpu':
      return <Cpu size={18} strokeWidth={2.2} />;
    case 'sparkles':
      return <Sparkles size={18} strokeWidth={2.2} />;
    default:
      return <Layers size={18} strokeWidth={2.2} />;
  }
};

// ─── 5 DISTINCT VISUAL PANELS FOR EACH PHASE COCKPIT ─────────────────────────

// Phase 01: Distributed Domain Topology Map
const DiscoveryCockpit = () => (
  <div className="space-y-3">
    <div className="p-3.5 rounded-xl border border-[#ebe5df] bg-[#faf8f5]/60">
      <div className="flex items-center justify-between mb-2.5 font-mono text-xs">
        <span className="text-[11px] font-bold tracking-wider text-[#121110]">
          DISTRIBUTED DOMAIN TOPOLOGY
        </span>
        <span className="text-[10px] text-[#ea7008] font-bold bg-[#ea7008]/10 px-2 py-0.5 rounded border border-[#ea7008]/20">
          ACID COMPLIANT
        </span>
      </div>

      {/* 4 Interactive Topology Nodes */}
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2.5 rounded-lg bg-white border border-[#ebe5df] flex flex-col gap-1 shadow-xs hover:border-[#ea7008]/50 transition-colors">
          <div className="flex items-center justify-between text-[11px] font-bold text-[#121110]">
            <span className="flex items-center gap-1.5"><Cpu size={12} className="text-[#ea7008]" /> Core Domain</span>
            <span className="text-[9px] text-[#ea7008] font-mono">ACTIVE</span>
          </div>
          <span className="text-[10px] text-[#6b635b]">Schemas &amp; Identity</span>
        </div>

        <div className="p-2.5 rounded-lg bg-white border border-[#ebe5df] flex flex-col gap-1 shadow-xs hover:border-[#ea7008]/50 transition-colors">
          <div className="flex items-center justify-between text-[11px] font-bold text-[#121110]">
            <span className="flex items-center gap-1.5"><Server size={12} className="text-[#ea7008]" /> API Gateway</span>
            <span className="text-[9px] text-[#ea7008] font-mono">&lt;12ms</span>
          </div>
          <span className="text-[10px] text-[#6b635b]">GraphQL &amp; REST</span>
        </div>

        <div className="p-2.5 rounded-lg bg-white border border-[#ebe5df] flex flex-col gap-1 shadow-xs hover:border-[#ea7008]/50 transition-colors">
          <div className="flex items-center justify-between text-[11px] font-bold text-[#121110]">
            <span className="flex items-center gap-1.5"><Database size={12} className="text-[#ea7008]" /> PostgreSQL</span>
            <span className="text-[9px] text-[#ea7008] font-mono">NORMALIZED</span>
          </div>
          <span className="text-[10px] text-[#6b635b]">Relations &amp; Indexes</span>
        </div>

        <div className="p-2.5 rounded-lg bg-white border border-[#ebe5df] flex flex-col gap-1 shadow-xs hover:border-[#ea7008]/50 transition-colors">
          <div className="flex items-center justify-between text-[11px] font-bold text-[#121110]">
            <span className="flex items-center gap-1.5"><Sparkles size={12} className="text-[#ea7008]" /> Redis Cache</span>
            <span className="text-[9px] text-[#ea7008] font-mono">99.8% HIT</span>
          </div>
          <span className="text-[10px] text-[#6b635b]">Sub-ms Memory</span>
        </div>
      </div>
    </div>
  </div>
);

// Phase 02: Design System & Tokens Architecture (Clean & Aesthetic)
const DesignCockpit = () => (
  <div className="space-y-3">
    <div className="p-3.5 rounded-xl border border-[#ebe5df] bg-[#faf8f5]/60 space-y-2.5">
      <div className="flex items-center justify-between font-mono text-xs">
        <span className="text-[11px] font-bold tracking-wider text-[#121110]">
          DESIGN SYSTEM ARCHITECTURE
        </span>
        <span className="text-[10px] text-[#ea7008] font-bold bg-[#ea7008]/10 px-2 py-0.5 rounded border border-[#ea7008]/20">
          FIGMA TOKENS v2.4
        </span>
      </div>

      {/* 2x2 Clean Aesthetic Token Pillars */}
      <div className="grid grid-cols-2 gap-2">
        {/* Token 1: Color Palette */}
        <div className="p-2.5 rounded-lg bg-white border border-[#ebe5df] flex flex-col justify-between gap-1.5 shadow-xs hover:border-[#ea7008]/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#8a8077] uppercase tracking-wider font-semibold">
              Color Tokens
            </span>
            <span className="text-[9px] font-mono text-[#ea7008] font-bold">LOCKED</span>
          </div>
          <div className="flex items-center gap-1.5 py-0.5">
            <div className="w-4 h-4 rounded-full bg-[#ea7008] shadow-xs ring-1 ring-black/5" title="Primary Orange" />
            <div className="w-4 h-4 rounded-full bg-[#121110] shadow-xs ring-1 ring-black/5" title="Obsidian Black" />
            <div className="w-4 h-4 rounded-full bg-[#faf8f5] border border-[#ebe5df] shadow-xs" title="Warm Surface" />
            <div className="w-4 h-4 rounded-full bg-[#ffffff] border border-[#ebe5df] shadow-xs" title="Pure Surface" />
          </div>
          <span className="text-[10px] text-[#6b635b] font-medium">48 Atomic Variables</span>
        </div>

        {/* Token 2: Typography Hierarchy */}
        <div className="p-2.5 rounded-lg bg-white border border-[#ebe5df] flex flex-col justify-between gap-1.5 shadow-xs hover:border-[#ea7008]/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#8a8077] uppercase tracking-wider font-semibold">
              Type Scale
            </span>
            <span className="text-[9px] font-mono text-[#ea7008] font-bold">FLUID</span>
          </div>
          <div className="text-[12px] font-bold text-[#121110] font-display tracking-tight leading-tight">
            Syne &amp; Jakarta
          </div>
          <span className="text-[10px] text-[#6b635b] font-medium">1.25 Modular Ratio</span>
        </div>

        {/* Token 3: Spatial Architecture */}
        <div className="p-2.5 rounded-lg bg-white border border-[#ebe5df] flex flex-col justify-between gap-1.5 shadow-xs hover:border-[#ea7008]/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#8a8077] uppercase tracking-wider font-semibold">
              Spatial Grid
            </span>
            <span className="text-[9px] font-mono text-[#ea7008] font-bold">8PT SYSTEM</span>
          </div>
          <div className="text-[12px] font-bold text-[#121110] font-sans leading-tight">
            Auto-Layout 5.0
          </div>
          <span className="text-[10px] text-[#6b635b] font-medium">Responsive Bounds</span>
        </div>

        {/* Token 4: Interactive Prototype */}
        <div className="p-2.5 rounded-lg bg-white border border-[#ebe5df] flex flex-col justify-between gap-1.5 shadow-xs hover:border-[#ea7008]/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#8a8077] uppercase tracking-wider font-semibold">
              Prototype
            </span>
            <span className="text-[9px] font-mono text-[#ea7008] font-bold">100% HI-FI</span>
          </div>
          <div className="text-[12px] font-bold text-[#121110] font-sans leading-tight">
            Clickable Flows
          </div>
          <span className="text-[10px] text-[#6b635b] font-medium">State Micro-motion</span>
        </div>
      </div>
    </div>
  </div>
);

// Phase 03: Full-Stack Engineering Architecture (Clean & Aesthetic)
const EngineeringCockpit = () => (
  <div className="space-y-3">
    <div className="p-3.5 rounded-xl border border-[#ebe5df] bg-[#faf8f5]/60 space-y-2.5">
      <div className="flex items-center justify-between font-mono text-xs">
        <span className="text-[11px] font-bold tracking-wider text-[#121110]">
          ENGINEERING ARCHITECTURE
        </span>
        <span className="text-[10px] text-[#ea7008] font-bold bg-[#ea7008]/10 px-2 py-0.5 rounded border border-[#ea7008]/20">
          SPRINT CADENCE
        </span>
      </div>

      {/* 2x2 Clean Aesthetic Architecture Pillars */}
      <div className="grid grid-cols-2 gap-2">
        {/* Pillar 1: Frontend Engine */}
        <div className="p-2.5 rounded-lg bg-white border border-[#ebe5df] flex flex-col justify-between gap-1.5 shadow-xs hover:border-[#ea7008]/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#8a8077] uppercase tracking-wider font-semibold">
              Frontend Engine
            </span>
            <span className="text-[9px] font-mono text-[#ea7008] font-bold">REACT 19</span>
          </div>
          <div className="text-[12px] font-bold text-[#121110] font-sans leading-tight">
            Next.js App Router
          </div>
          <span className="text-[10px] text-[#6b635b] font-medium">Server Components &amp; SSR</span>
        </div>

        {/* Pillar 2: Type System */}
        <div className="p-2.5 rounded-lg bg-white border border-[#ebe5df] flex flex-col justify-between gap-1.5 shadow-xs hover:border-[#ea7008]/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#8a8077] uppercase tracking-wider font-semibold">
              Type Safety
            </span>
            <span className="text-[9px] font-mono text-[#ea7008] font-bold">STRICT</span>
          </div>
          <div className="text-[12px] font-bold text-[#121110] font-sans leading-tight">
            End-to-End TypeScript
          </div>
          <span className="text-[10px] text-[#6b635b] font-medium">Zero Runtime Type Drift</span>
        </div>

        {/* Pillar 3: Data Layer */}
        <div className="p-2.5 rounded-lg bg-white border border-[#ebe5df] flex flex-col justify-between gap-1.5 shadow-xs hover:border-[#ea7008]/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#8a8077] uppercase tracking-wider font-semibold">
              Data Layer
            </span>
            <span className="text-[9px] font-mono text-[#ea7008] font-bold">OPTIMIZED</span>
          </div>
          <div className="text-[12px] font-bold text-[#121110] font-sans leading-tight">
            Postgres &amp; Redis Cache
          </div>
          <span className="text-[10px] text-[#6b635b] font-medium">ACID Schemas &amp; Pooled DB</span>
        </div>

        {/* Pillar 4: CI/CD & Staging */}
        <div className="p-2.5 rounded-lg bg-white border border-[#ebe5df] flex flex-col justify-between gap-1.5 shadow-xs hover:border-[#ea7008]/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[#8a8077] uppercase tracking-wider font-semibold">
              CI/CD Pipeline
            </span>
            <span className="text-[9px] font-mono text-[#ea7008] font-bold">AUTOMATED</span>
          </div>
          <div className="text-[12px] font-bold text-[#121110] font-sans leading-tight">
            Preview Deployments
          </div>
          <span className="text-[10px] text-[#6b635b] font-medium">Branch Testing on PRs</span>
        </div>
      </div>
    </div>
  </div>
);

// Phase 04: Core Web Vitals & Security Speedometer Cards
const QACockpit = () => (
  <div className="space-y-3">
    <div className="p-3.5 rounded-xl border border-[#ebe5df] bg-[#faf8f5]/60 space-y-2">
      <div className="flex items-center justify-between font-mono text-xs mb-1">
        <span className="text-[11px] font-bold tracking-wider text-[#121110]">
          CORE WEB VITALS AUDIT
        </span>
        <span className="text-[10px] text-[#ea7008] font-bold bg-[#ea7008]/10 px-2 py-0.5 rounded border border-[#ea7008]/20">
          LIGHTHOUSE: 100/100
        </span>
      </div>

      {/* 4 Web Vitals cards */}
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2.5 rounded-lg bg-white border border-[#ebe5df] flex flex-col justify-between shadow-xs">
          <span className="text-[10px] text-[#8a8077] font-medium">Contentful Paint (LCP)</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-sm font-bold text-[#121110]">0.62s</span>
            <span className="text-[8px] font-bold font-mono text-[#ea7008] bg-[#ea7008]/10 px-1 py-0.5 rounded">FAST</span>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-white border border-[#ebe5df] flex flex-col justify-between shadow-xs">
          <span className="text-[10px] text-[#8a8077] font-medium">Layout Shift (CLS)</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-sm font-bold text-[#121110]">0.000</span>
            <span className="text-[8px] font-bold font-mono text-[#ea7008] bg-[#ea7008]/10 px-1 py-0.5 rounded">ZERO</span>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-white border border-[#ebe5df] flex flex-col justify-between shadow-xs">
          <span className="text-[10px] text-[#8a8077] font-medium">Next Paint (INP)</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-sm font-bold text-[#121110]">14ms</span>
            <span className="text-[8px] font-bold font-mono text-[#ea7008] bg-[#ea7008]/10 px-1 py-0.5 rounded">&lt;50ms</span>
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-white border border-[#ebe5df] flex flex-col justify-between shadow-xs">
          <span className="text-[10px] text-[#8a8077] font-medium">Lighthouse Vitals</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-sm font-bold text-[#ea7008]">100 / 100</span>
            <span className="text-[8px] font-bold font-mono text-[#ea7008] bg-[#ea7008]/10 px-1 py-0.5 rounded">PERFECT</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Phase 05: Live Global Edge Telemetry Wave Chart (From Screenshot)
const LaunchCockpit = () => (
  <div className="space-y-3">
    <div className="p-4 rounded-xl border border-[#ebe5df] bg-white">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-mono font-bold tracking-wider text-[#121110]">
          GLOBAL EDGE TRAFFIC
        </span>
        <div className="text-right">
          <div className="text-base sm:text-lg font-bold font-display text-[#ea7008] leading-none">
            99.99%
          </div>
          <div className="text-[9px] font-mono font-bold text-[#ea7008] tracking-wider mt-0.5">
            UPTIME
          </div>
        </div>
      </div>

      {/* Smooth Wave SVG with Faint Guidelines & Glowing Indicator Dot */}
      <div className="w-full h-16 sm:h-20 relative mt-2">
        <svg
          viewBox="0 0 360 65"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chart-grad-05" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ea7008" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#ea7008" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Faint vertical guidelines */}
          {[50, 95, 140, 185, 230, 275, 320].map((xVal) => (
            <line
              key={xVal}
              x1={xVal}
              y1="0"
              x2={xVal}
              y2="65"
              stroke="#ebe5df"
              strokeWidth="0.8"
              strokeDasharray="2 3"
            />
          ))}

          {/* Soft Orange Area Gradient Fill */}
          <path
            d="M 10 46 Q 40 18, 75 42 T 145 38 T 215 20 T 285 30 T 350 12 L 350 70 L 10 70 Z"
            fill="url(#chart-grad-05)"
          />

          {/* Sharp Foremark Orange Stroke */}
          <path
            d="M 10 46 Q 40 18, 75 42 T 145 38 T 215 20 T 285 30 T 350 12"
            fill="none"
            stroke="#ea7008"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Glowing Peak Dot Marker */}
          <circle
            cx={350}
            cy={12}
            r="8"
            fill="#ea7008"
            fillOpacity="0.2"
          />
          <circle
            cx={350}
            cy={12}
            r="4"
            fill="#ffffff"
            stroke="#ea7008"
            strokeWidth="2.5"
          />
        </svg>
      </div>
    </div>
  </div>
);

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export const CinematicProcessWalkthrough = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  const progressIntervalRef = useRef<number | null>(null);
  const STEP_DURATION = 6500; // 6.5 seconds per step

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

  // Auto-play timer with smooth progress bar
  useEffect(() => {
    if (!isPlaying) {
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

  // Cinematic Slide Animation Variants
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
      filter: 'blur(4px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      filter: 'blur(4px)',
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-16 relative z-10">
        
        {/* Section Header with Phase Jump Indicators */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="max-w-2xl text-left">
            <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-3">
              Delivery Lifecycle
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
                title={`Jump to ${s.titleLine1} ${s.titleLine2}`}
              />
            ))}
          </div>
        </div>

        {/* ─── MAIN STAGE CARD CONTAINER ─── */}
        <div 
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          className="relative rounded-[32px] sm:rounded-[36px] border border-[#ebe5df] bg-white shadow-[0_12px_45px_rgba(0,0,0,0.03)] p-6 sm:p-10 md:p-12 lg:p-14 overflow-hidden"
        >
          {/* Top Edge Ambient Progress Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#ebe5df]/40 z-20">
            <div
              className="h-full bg-[#ea7008] transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Soft warm orange ambient sweep in bottom-right corner as shown in screenshot */}
          <div className="absolute -bottom-24 -right-24 w-[500px] h-[400px] bg-gradient-to-tl from-[#ea7008]/20 via-[#ea7008]/8 to-transparent blur-[70px] pointer-events-none rounded-full" />
          <div className="absolute -bottom-8 -right-8 w-[280px] h-[240px] bg-gradient-to-tl from-[#ea7008]/15 via-[#ea7008]/5 to-transparent blur-[40px] pointer-events-none rounded-full" />

          {/* Delicate subtle warm corner arcs matching screenshot */}
          <div className="absolute -bottom-20 -right-20 w-[420px] h-[420px] rounded-full border border-[#ea7008]/10 pointer-events-none" />
          <div className="absolute -bottom-36 -right-36 w-[560px] h-[560px] rounded-full border border-[#ea7008]/10 pointer-events-none" />

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
              {/* ─── LEFT COLUMN: STEP CONTENT & DELIVERABLES ─── */}
              <div className="lg:col-span-7 flex flex-col justify-between text-left">
                <div>
                  {/* Header Pill: [● PHASE 0X OF 05] (Weeks removed as requested) */}
                  <div className="flex items-center gap-3 mb-5 sm:mb-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ea7008]/10 border border-[#ea7008]/25 text-[#ea7008] text-xs font-mono font-bold tracking-wide">
                      <span className="w-2 h-2 rounded-full bg-[#ea7008]" />
                      {activeStep.phaseBadge}
                    </div>
                  </div>

                  {/* Two-Tone Heading (Line 1 Dark + Line 2 Foremark Orange) */}
                  <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-display tracking-tight leading-[1.08] mb-4 text-[#121110]">
                    {activeStep.titleLine1} <br />
                    <span className="text-[#ea7008]">{activeStep.titleLine2}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-[#5c544d] text-sm sm:text-[15px] leading-relaxed mb-7 max-w-xl">
                    {activeStep.description}
                  </p>

                  {/* Key Phase Deliverables Section */}
                  <div className="mb-8">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#8a8077] block mb-3.5">
                      KEY PHASE DELIVERABLES
                    </span>

                    {/* 2x2 Grid of Deliverable Capsules with Orange Circular Icons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                      {activeStep.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3.5 p-3 sm:px-4 sm:py-3.5 rounded-2xl bg-white hover:bg-[#faf8f5]/80 border border-[#ebe5df] shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#ea7008]/10 border border-[#ea7008]/20 flex items-center justify-center text-[#ea7008] shrink-0">
                            {renderDeliverableIcon(item.icon)}
                          </div>
                          <div className="text-xs sm:text-[13px] leading-snug">
                            <div className="font-bold text-[#121110]">{item.line1}</div>
                            <div className="text-[#6b635b] font-medium">{item.line2}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevStep}
                      className="px-5 py-2.5 rounded-full border border-[#ebe5df] bg-white text-[#121110] hover:bg-[#faf8f5] hover:border-[#ea7008]/40 transition-all flex items-center gap-2 text-xs sm:text-sm font-semibold shadow-xs cursor-pointer"
                      title="Previous Step"
                    >
                      <ArrowLeft size={15} />
                      <span>Previous</span>
                    </button>

                    <button
                      onClick={nextStep}
                      className="px-6 py-2.5 rounded-full bg-[#121110] text-white hover:bg-[#22201d] transition-all flex items-center gap-2 text-xs sm:text-sm font-semibold shadow-[0_4px_18px_rgba(234,112,8,0.22)] cursor-pointer group"
                      title="Next Step"
                    >
                      <span>Next Phase</span>
                      <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                  {/* Auto-advance pause/play indicator */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-1.5 text-[11px] font-mono text-[#8a8077] hover:text-[#121110] px-3 py-1.5 rounded-full border border-[#ebe5df] hover:border-[#ea7008]/40 transition-colors cursor-pointer bg-white"
                    title={isPlaying ? "Pause auto-advance" : "Resume auto-advance"}
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
                </div>
              </div>

              {/* ─── RIGHT COLUMN: COCKPIT DASHBOARD CARD (CUSTOMIZED PER PHASE) ─── */}
              <div className="lg:col-span-5">
                <div className="relative rounded-[24px] bg-white border border-[#ebe5df] p-5 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] flex flex-col justify-between">
                  
                  {/* Top Bar: Vertical Orange Bar + Cockpit Title + Orange Status Badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#f2eee9]">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 bg-[#ea7008] rounded-full" />
                      <span className="font-bold text-[#121110] text-xs font-mono tracking-wider">
                        {activeStep.cockpit.title}
                      </span>
                    </div>
                    {/* Orange status pill (all green converted to Foremark orange) */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ea7008]/10 border border-[#ea7008]/20 text-[#ea7008] text-[10px] font-mono font-bold tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008]" />
                      {activeStep.cockpit.statusBadge}
                    </div>
                  </div>

                  {/* Custom Distinct Visual Content for Each Phase */}
                  <div className="mt-4">
                    {activeStep.step === '01' && <DiscoveryCockpit />}
                    {activeStep.step === '02' && <DesignCockpit />}
                    {activeStep.step === '03' && <EngineeringCockpit />}
                    {activeStep.step === '04' && <QACockpit />}
                    {activeStep.step === '05' && <LaunchCockpit />}
                  </div>

                  {/* 2 Metric Boxes Side-by-Side */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-3">
                    <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#ebe5df]">
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#8a8077] font-semibold tracking-wider block mb-1">
                        {activeStep.cockpit.metric1.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#121110] block">
                        {activeStep.cockpit.metric1.value}
                      </span>
                    </div>
                    <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-[#ebe5df]">
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#8a8077] font-semibold tracking-wider block mb-1">
                        {activeStep.cockpit.metric2.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#ea7008] block">
                        {activeStep.cockpit.metric2.value}
                      </span>
                    </div>
                  </div>

                  {/* Orange Circle Checkmark Line */}
                  <div className="mt-3.5 flex items-center gap-2.5 text-xs text-[#5c544d] font-sans">
                    <div className="w-4 h-4 rounded-full bg-[#ea7008] flex items-center justify-center shrink-0">
                      <Check size={10} className="text-white stroke-[3]" />
                    </div>
                    <span className="leading-tight text-[11px] sm:text-xs">
                      {activeStep.cockpit.guarantee}
                    </span>
                  </div>

                  {/* Bottom Footer Line (Left Note + Orange Right Status) */}
                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#f2eee9] text-[11px] font-mono">
                    <span className="text-[#8a8077]">
                      {activeStep.cockpit.footerLeft}
                    </span>
                    <span className="font-semibold text-[#ea7008]">
                      {activeStep.cockpit.footerRight}
                    </span>
                  </div>
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
