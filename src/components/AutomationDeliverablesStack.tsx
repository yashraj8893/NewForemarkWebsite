import React, { useState } from 'react';
import {
  MessageSquare,
  FileCheck,
  Workflow,
  DollarSign,
  Database,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface ArchitectureTier {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  bullets: string[];
  protocol: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  planeTheme: {
    topBg: string;
    sideLeft: string;
    sideRight: string;
    border: string;
    accent: string;
  };
}

const architectureTiers: ArchitectureTier[] = [
  {
    id: 'chatops',
    number: '01',
    title: 'Slack & Teams Operations Bots',
    category: 'Interaction & ChatOps',
    description:
      'Interactive chat bots for team approvals, daily metric summaries, automated alert triage, and incident war-rooms.',
    bullets: ['One-click executive sign-offs', 'Automated revenue briefings', 'Real-time error escalation'],
    protocol: 'Slack Block-Kit & MS Graph Webhooks',
    icon: MessageSquare,
    planeTheme: {
      topBg: '#ffffff',
      sideLeft: '#e8e2db',
      sideRight: '#f5f0ea',
      border: '#ea7008',
      accent: '#ea7008',
    },
  },
  {
    id: 'ai-ocr',
    number: '02',
    title: 'AI Document Processing & Extraction',
    category: 'Cognitive Intelligence',
    description:
      'Extraction of key structured data from vendor PDFs, receipts, client intake forms, and legal agreements directly into your database.',
    bullets: ['99.9% OCR accuracy on complex PDFs', 'Automated contract summaries', 'Schema-guaranteed JSON output'],
    protocol: 'GPT-4o Vision & Claude 3.5 Sonnet RAG',
    icon: FileCheck,
    planeTheme: {
      topBg: 'url(#orangeGradient)',
      sideLeft: '#c85d03',
      sideRight: '#dc6d0a',
      border: '#ffffff',
      accent: '#ffffff',
    },
  },
  {
    id: 'crm-pipeline',
    number: '03',
    title: 'CRM & Lead Pipeline Automation',
    category: 'Revenue & Growth Engine',
    description:
      'Instant lead capture, AI qualification, routing to sales reps, and automated calendar scheduling with zero delay.',
    bullets: ['Sub-second lead notification to reps', 'Dynamic round-robin assignment', 'HubSpot & Salesforce sync'],
    protocol: 'HubSpot & Salesforce REST API v3',
    icon: Workflow,
    planeTheme: {
      topBg: '#121110',
      sideLeft: '#1d1b19',
      sideRight: '#2b2825',
      border: '#ea7008',
      accent: '#ea7008',
    },
  },
  {
    id: 'billing',
    number: '04',
    title: 'Billing & Invoicing Workflows',
    category: 'Financial Automation',
    description:
      'Automated Stripe, Razorpay, or QuickBooks invoice generation, bank reconciliation, and smart payment reminders.',
    bullets: ['Automated payment reconciliation', 'Smart failed-charge dunning', 'Multi-currency invoice delivery'],
    protocol: 'Stripe & QuickBooks Instant Webhooks',
    icon: DollarSign,
    planeTheme: {
      topBg: '#faf5f0',
      sideLeft: '#e5ddd3',
      sideRight: '#f0e8de',
      border: '#ea7008',
      accent: '#ea7008',
    },
  },
  {
    id: 'sync-infrastructure',
    number: '05',
    title: 'Cross-Platform Sync & Webhook Bus',
    category: 'Core Data & Microservices',
    description:
      'Two-way data synchronizations between ERPs, databases, spreadsheets, and lightweight Node.js/Python microservices.',
    bullets: ['Zero data-loss retry queues', 'BullMQ & Redis persistent state', 'Self-hosted privacy on your infrastructure'],
    protocol: 'Redis BullMQ & PostgreSQL Event Streams',
    icon: Database,
    planeTheme: {
      topBg: '#ffffff',
      sideLeft: '#e2dcd4',
      sideRight: '#f0eae2',
      border: '#121110',
      accent: '#ea7008',
    },
  },
];

export const AutomationDeliverablesStack: React.FC = () => {
  const [activeTierId, setActiveTierId] = useState<string>('chatops');

  // Isometric Diamond Dimensions for each row's plate
  const cx = 290;
  const cy = 65;
  const w = 260;
  const h = 90;
  const t = 10; // 3D Extrusion Depth

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-transparent">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-portfolio-gold/10 border border-portfolio-gold/25 mb-3">
            <span className="w-2 h-2 rounded-full bg-portfolio-gold animate-pulse" />
            <span className="text-portfolio-gold text-[11px] font-bold uppercase tracking-widest font-mono">
              Architecture & Deliverables
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold font-display tracking-tight text-[#121110] mb-3 leading-tight">
            What We Build & <span className="text-portfolio-gold">Deliver</span>
          </h2>
          <p className="text-[#5c544d] text-sm sm:text-base leading-relaxed">
            A cohesive 5-tier automation architecture connecting frontline team interactions down to secure, fail-safe background microservices.
          </p>
        </div>

        {/* ─── 5 PAIRED ARCHITECTURE ROWS: EACH BOX BESIDE ITS RESPECTIVE STACK LAYER ─── */}
        <div className="relative space-y-4 sm:space-y-6">
          
          {/* Subtle vertical dashed technical axis down the center of the right column */}
          <div className="hidden lg:block absolute right-[230px] xl:right-[230px] top-10 bottom-10 w-px border-r border-dashed border-[#ebe5df] pointer-events-none z-0" />

          {architectureTiers.map((tier) => {
            const isActive = activeTierId === tier.id;
            const IconComp = tier.icon;
            const { planeTheme } = tier;

            return (
              <div
                key={tier.id}
                onMouseEnter={() => setActiveTierId(tier.id)}
                onClick={() => setActiveTierId(tier.id)}
                className="group relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-0 items-center transition-all duration-300"
              >
                {/* ─── LEFT COLUMN: THE BOX / DELIVERABLE CARD ─── */}
                <div className="lg:col-span-6 xl:col-span-6">
                  <div
                    className={`relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-white border-portfolio-gold shadow-[0_8px_30px_rgba(234,112,8,0.12)] -translate-y-0.5'
                        : 'bg-white/90 hover:bg-white border-[#ebe5df] hover:border-portfolio-gold/50 shadow-xs'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon Badge */}
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 border ${
                          isActive
                            ? 'bg-portfolio-gold text-white border-portfolio-gold shadow-sm scale-105'
                            : 'bg-[#faf8f5] text-[#121110] border-[#ebe5df] group-hover:text-portfolio-gold'
                        }`}
                      >
                        <IconComp size={20} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-portfolio-gold uppercase">
                            LAYER {tier.number} // {tier.category}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold font-display text-[#121110] tracking-tight leading-snug">
                          {tier.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#5c544d] leading-relaxed mt-1.5 font-normal">
                          {tier.description}
                        </p>

                        {/* Bullet Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#f0eae2]">
                          {tier.bullets.map((bullet, idx) => (
                            <span
                              key={idx}
                              className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-mono transition-colors duration-200 ${
                                isActive
                                  ? 'bg-[#faf8f5] border border-portfolio-gold/30 text-[#121110]'
                                  : 'bg-[#faf8f5] border border-[#ebe5df] text-[#5c544d]'
                              }`}
                            >
                              <CheckCircle2 size={11} className={isActive ? 'text-portfolio-gold' : 'text-[#a89f91]'} />
                              {bullet}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right-edge indicator dot on desktop */}
                    <div className="hidden lg:block absolute -right-1.5 top-1/2 -translate-y-1/2">
                      <div
                        className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
                          isActive
                            ? 'bg-portfolio-gold shadow-[0_0_10px_rgba(234,112,8,0.8)] scale-125'
                            : 'bg-[#d8d0c7] group-hover:bg-portfolio-gold/60'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* ─── RIGHT COLUMN: THE CONNECTOR LINE & ISOMETRIC STACK LAYER ─── */}
                <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-start">
                  <div className="w-full max-w-[460px] relative select-none">
                    
                    <svg
                      viewBox="0 0 460 140"
                      className="w-full h-auto overflow-visible cursor-pointer"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        {/* Foremark Orange Plane Gradient */}
                        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f38426" />
                          <stop offset="100%" stopColor="#ea7008" />
                        </linearGradient>

                        {/* Shadows */}
                        <filter id="planeShadow" x="-20%" y="-20%" width="140%" height="150%">
                          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#121110" floodOpacity="0.08" />
                        </filter>
                        <filter id="planeShadowActive" x="-20%" y="-20%" width="140%" height="150%">
                          <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#ea7008" floodOpacity="0.22" />
                        </filter>
                        <filter id="lineGlow" x="-20%" y="-50%" width="140%" height="200%">
                          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#ea7008" floodOpacity="0.6" />
                        </filter>
                      </defs>

                      {/* ─── HORIZONTAL CONNECTOR POINTER LINE (DESKTOP) ─── */}
                      <g className="hidden lg:block transition-all duration-300">
                        {/* Connecting line from box edge (x=0) to plate apex (x=160) */}
                        <line
                          x1="0"
                          y1={cy}
                          x2="160"
                          y2={cy}
                          stroke={isActive ? '#ea7008' : '#d8d0c7'}
                          strokeWidth={isActive ? '2' : '1.5'}
                          strokeDasharray={isActive ? 'none' : '4 3'}
                          filter={isActive ? 'url(#lineGlow)' : undefined}
                          className="transition-colors duration-300"
                        />
                        {/* Connection Dot touching the Left Vertex of the Diamond */}
                        <circle
                          cx="160"
                          cy={cy}
                          r={isActive ? 4.5 : 3}
                          fill={isActive ? '#ea7008' : '#a89f91'}
                          className="transition-all duration-300"
                        />
                        {/* Animated Signal Packet when Active */}
                        {isActive && (
                          <circle cx="80" cy={cy} r="3" fill="#ffffff" stroke="#ea7008" strokeWidth="1.5">
                            <animate attributeName="cx" values="0;160" dur="1.8s" repeatCount="indefinite" />
                          </circle>
                        )}
                      </g>

                      {/* ─── ISOMETRIC 3D PLATE CONTAINER ─── */}
                      <g
                        transform={isActive ? 'translate(0, -5)' : 'translate(0, 0)'}
                        className="transition-transform duration-300 ease-out"
                      >
                        {/* 1. Dotted Outline Isometric Corner Brackets (Reference style) */}
                        <g opacity={isActive ? 0.9 : 0.4} className="transition-opacity duration-300">
                          {/* Top Corner Bracket */}
                          <path
                            d={`M 270 12 L 290 3 L 310 12`}
                            stroke={isActive ? '#ea7008' : '#a89f91'}
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                          />
                          {/* Left Corner Bracket */}
                          <path
                            d={`M 150 56 L 142 65 L 150 74`}
                            stroke={isActive ? '#ea7008' : '#a89f91'}
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                          />
                          {/* Right Corner Bracket */}
                          <path
                            d={`M 430 56 L 438 65 L 430 74`}
                            stroke={isActive ? '#ea7008' : '#a89f91'}
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                          />
                          {/* Bottom Corner Bracket */}
                          <path
                            d={`M 270 128 L 290 137 L 310 128`}
                            stroke={isActive ? '#ea7008' : '#a89f91'}
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                          />
                        </g>

                        {/* 2. Side 3D Extrusion Faces */}
                        {/* Left Thickness Face */}
                        <path
                          d={`M ${cx - w / 2} ${cy} L ${cx} ${cy + h / 2} L ${cx} ${cy + h / 2 + t} L ${cx - w / 2} ${cy + t} Z`}
                          fill={planeTheme.sideLeft}
                          stroke="#000000"
                          strokeOpacity="0.08"
                          strokeWidth="1"
                        />
                        {/* Right Thickness Face */}
                        <path
                          d={`M ${cx} ${cy + h / 2} L ${cx + w / 2} ${cy} L ${cx + w / 2} ${cy + t} L ${cx} ${cy + h / 2 + t} Z`}
                          fill={planeTheme.sideRight}
                          stroke="#000000"
                          strokeOpacity="0.08"
                          strokeWidth="1"
                        />

                        {/* 3. Top Isometric Rhombus Surface */}
                        <path
                          d={`M ${cx} ${cy - h / 2} L ${cx + w / 2} ${cy} L ${cx} ${cy + h / 2} L ${cx - w / 2} ${cy} Z`}
                          fill={planeTheme.topBg}
                          stroke={isActive ? '#ea7008' : '#e5dfd8'}
                          strokeWidth={isActive ? 2 : 1}
                          filter={isActive ? 'url(#planeShadowActive)' : 'url(#planeShadow)'}
                          className="transition-all duration-300"
                        />

                        {/* 4. TECHNICAL LINE ARTWORK ON EACH PLANE SURFACE */}
                        {/* TIER 1: CHATOPS / TEAMS & SLACK ICONS */}
                        {tier.id === 'chatops' && (
                          <g className="pointer-events-none">
                            {/* Isometric Chat Bubble 1 */}
                            <path
                              d={`M ${cx - 45} ${cy - 7} L ${cx - 15} ${cy - 22} L ${cx + 10} ${cy - 10} L ${cx - 20} ${cy + 5} Z`}
                              fill="#faf6f0"
                              stroke="#ea7008"
                              strokeWidth="1.4"
                            />
                            <line x1={cx - 30} y1={cy - 13} x2={cx - 10} y2={cy - 20} stroke="#ea7008" strokeWidth="1.4" strokeLinecap="round" />
                            <line x1={cx - 26} y1={cy - 7} x2={cx - 4} y2={cy - 15} stroke="#a89f91" strokeWidth="1.4" strokeLinecap="round" />

                            {/* Interactive Approval Checkmark Pill */}
                            <path
                              d={`M ${cx + 10} ${cy + 4} L ${cx + 55} ${cy - 14} L ${cx + 70} ${cy - 7} L ${cx + 25} ${cy + 12} Z`}
                              fill="#121110"
                              stroke="#ea7008"
                              strokeWidth="1.2"
                            />
                            <circle cx={cx + 30} cy={cy + 4} r="2.5" fill="#4ade80" />
                            <line x1={cx + 38} y1={cy + 1} x2={cx + 60} y2={cy - 9} stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
                          </g>
                        )}

                        {/* TIER 2: AI DOCUMENT PROCESSING & OCR */}
                        {tier.id === 'ai-ocr' && (
                          <g className="pointer-events-none">
                            {/* Invoice Document Isometric Tile */}
                            <path
                              d={`M ${cx - 42} ${cy - 4} L ${cx - 8} ${cy - 22} L ${cx + 28} ${cy - 4} L ${cx - 8} ${cy + 14} Z`}
                              fill="#ffffff"
                              stroke="#ffffff"
                              strokeWidth="1"
                            />
                            {/* Document Content Lines */}
                            <line x1={cx - 28} y1={cy - 12} x2={cx + 4} y2={cy - 20} stroke="#ea7008" strokeWidth="1.4" strokeLinecap="round" />
                            <line x1={cx - 24} y1={cy - 5} x2={cx + 12} y2={cy - 14} stroke="#121110" strokeWidth="1.2" strokeLinecap="round" />
                            <line x1={cx - 16} y1={cy + 3} x2={cx + 20} y2={cy - 8} stroke="#121110" strokeWidth="1.2" strokeLinecap="round" />

                            {/* Glowing AI Scanner Beam */}
                            <line x1={cx - 40} y1={cy - 5} x2={cx + 24} y2={cy - 5} stroke="#ffffff" strokeWidth="2" strokeDasharray="3 3" opacity="0.95" />

                            {/* AI Sparkle Node */}
                            <circle cx={cx + 50} cy={cy - 4} r="4.5" fill="#121110" stroke="#ffffff" strokeWidth="1.5" />
                            <path d={`M ${cx + 50} ${cy - 8} L ${cx + 50} ${cy} M ${cx + 46} ${cy - 4} L ${cx + 54} ${cy - 4}`} stroke="#ea7008" strokeWidth="1.5" />
                          </g>
                        )}

                        {/* TIER 3: CRM PIPELINE & LEAD ROUTING */}
                        {tier.id === 'crm-pipeline' && (
                          <g className="pointer-events-none">
                            {/* Funnel Stage 1 */}
                            <path
                              d={`M ${cx - 50} ${cy} L ${cx - 24} ${cy - 14} L ${cx - 8} ${cy - 6} L ${cx - 34} ${cy + 8} Z`}
                              fill="#ea7008"
                              stroke="#ea7008"
                              strokeWidth="1"
                            />
                            {/* Funnel Stage 2 */}
                            <path
                              d={`M ${cx - 28} ${cy + 4} L ${cx} ${cy - 10} L ${cx + 16} ${cy - 2} L ${cx - 12} ${cy + 12} Z`}
                              fill="#ffffff"
                              stroke="#ea7008"
                              strokeWidth="1"
                            />
                            {/* Funnel Stage 3 (Lead Closed Won) */}
                            <path
                              d={`M ${cx - 4} ${cy + 8} L ${cx + 24} ${cy - 6} L ${cx + 40} ${cy + 2} L ${cx + 12} ${cy + 16} Z`}
                              fill="#ea7008"
                              stroke="#ffffff"
                              strokeWidth="1"
                            />

                            {/* Pipeline Connector Line */}
                            <line x1={cx - 40} y1={cy - 4} x2={cx + 28} y2={cy + 6} stroke="#ea7008" strokeWidth="1.5" strokeDasharray="3 3" />
                            <circle cx={cx + 32} cy={cy + 8} r="2.8" fill="#4ade80" />
                          </g>
                        )}

                        {/* TIER 4: BILLING & INVOICING WORKFLOWS */}
                        {tier.id === 'billing' && (
                          <g className="pointer-events-none">
                            {/* Isometric Payment Card */}
                            <path
                              d={`M ${cx - 48} ${cy + 4} L ${cx - 12} ${cy - 14} L ${cx + 20} ${cy + 2} L ${cx - 16} ${cy + 20} Z`}
                              fill="#121110"
                              stroke="#ea7008"
                              strokeWidth="1.2"
                            />
                            {/* Card Chip & Magnetic Band */}
                            <rect x={cx - 28} y={cy - 4} width="8" height="5" rx="1" fill="#ea7008" />
                            <line x1={cx - 36} y1={cy + 6} x2={cx + 4} y2={cy + 6} stroke="#ffffff" strokeWidth="1" opacity="0.6" />

                            {/* Currency Coin Token */}
                            <circle cx={cx + 45} cy={cy + 2} r="12" fill="#ea7008" stroke="#ffffff" strokeWidth="1.8" />
                            <text x={cx + 45} y={cy + 6} textAnchor="middle" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
                              $
                            </text>
                          </g>
                        )}

                        {/* TIER 5: CROSS-PLATFORM SYNC & WEBHOOK BUS */}
                        {tier.id === 'sync-infrastructure' && (
                          <g className="pointer-events-none">
                            {/* Database Cylinder 1 */}
                            <ellipse cx={cx - 36} cy={cy - 6} rx="14" ry="6" fill="#faf6f0" stroke="#121110" strokeWidth="1.3" />
                            <path d={`M ${cx - 50} ${cy - 6} V ${cy + 4} A 14 6 0 0 0 ${cx - 22} ${cy + 4} V ${cy - 6}`} fill="#faf6f0" stroke="#121110" strokeWidth="1.3" />
                            <path d={`M ${cx - 50} ${cy + 4} V ${cy + 14} A 14 6 0 0 0 ${cx - 22} ${cy + 14} V ${cy + 4}`} fill="#faf6f0" stroke="#121110" strokeWidth="1.3" />

                            {/* Database Cylinder 2 */}
                            <ellipse cx={cx + 36} cy={cy - 6} rx="14" ry="6" fill="#faf6f0" stroke="#121110" strokeWidth="1.3" />
                            <path d={`M ${cx + 22} ${cy - 6} V ${cy + 4} A 14 6 0 0 0 ${cx + 50} ${cy + 4} V ${cy - 6}`} fill="#faf6f0" stroke="#121110" strokeWidth="1.3" />
                            <path d={`M ${cx + 22} ${cy + 4} V ${cy + 14} A 14 6 0 0 0 ${cx + 50} ${cy + 14} V ${cy + 4}`} fill="#faf6f0" stroke="#121110" strokeWidth="1.3" />

                            {/* Webhook Bus Bridge */}
                            <line x1={cx - 22} cy={cy + 4} x2={cx + 22} y2={cy + 4} stroke="#ea7008" strokeWidth="1.8" strokeDasharray="3 3" />
                            <circle cx={cx} cy={cy + 4} r="3.5" fill="#ea7008" stroke="#ffffff" strokeWidth="1.5" />
                          </g>
                        )}
                      </g>
                    </svg>

                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* ─── BOTTOM ENTERPRISE GUARANTEE & ARCHITECTURE PIPELINE STRIP ─── */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-6 rounded-2xl bg-white border border-[#ebe5df] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-portfolio-gold/10 border border-portfolio-gold/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="text-portfolio-gold" size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold font-display text-[#121110]">
                Enterprise-Grade Fail-Safe Architecture
              </h4>
              <p className="text-xs text-[#5c544d] mt-0.5">
                Every tier runs with automated retry queues, rate-limit governance, and encrypted payload storage.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end md:self-auto text-[11px] font-mono font-bold text-portfolio-gold uppercase">
            <span>EXPLORE INTEGRATION SPECS</span>
            <ArrowRight size={14} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AutomationDeliverablesStack;
