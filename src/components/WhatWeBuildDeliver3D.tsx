import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Layers,
  Sliders,
  ShoppingBag,
  Terminal,
  Gauge,
  ArrowRight
} from 'lucide-react';

interface DeliverableItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  topColor: string;
  sideLeftColor: string;
  sideRightColor: string;
  strokeColor: string;
  position: 'top' | 'bottom';
  // Geometry configuration for isometric 3D projection
  baseX: number;
  baseY: number;
  height: number;
}

const deliverablesData: DeliverableItem[] = [
  {
    id: '01',
    number: '01',
    title: 'Corporate Websites & Flagships',
    category: 'Brand Flagships',
    description: 'Bespoke digital flagships with custom interactive storytelling.',
    icon: Globe,
    topColor: '#ea7008', // Foremark Orange
    sideLeftColor: '#d66205',
    sideRightColor: '#f1882d',
    strokeColor: '#ea7008',
    position: 'top',
    baseX: 110,
    baseY: 480,
    height: 70,
  },
  {
    id: '02',
    number: '02',
    title: 'SaaS & Web Applications',
    category: 'Cloud Software',
    description: 'Scalable cloud platforms with billing, auth, and analytics.',
    icon: Layers,
    topColor: '#121110', // Brand Black
    sideLeftColor: '#1d1b19',
    sideRightColor: '#2b2825',
    strokeColor: '#3d3935',
    position: 'bottom',
    baseX: 300,
    baseY: 450,
    height: 105,
  },
  {
    id: '03',
    number: '03',
    title: 'Client Portals & Operations',
    category: 'Internal Systems',
    description: 'Secure client portals, custom ERPs, and automated workflows.',
    icon: Sliders,
    topColor: '#ea7008', // Foremark Orange
    sideLeftColor: '#d66205',
    sideRightColor: '#f1882d',
    strokeColor: '#ea7008',
    position: 'top',
    baseX: 490,
    baseY: 420,
    height: 140,
  },
  {
    id: '04',
    number: '04',
    title: 'Headless E-Commerce',
    category: 'Commerce Engine',
    description: 'High-converting storefronts engineered for sub-second checkouts.',
    icon: ShoppingBag,
    topColor: '#ffffff', // Crisp White
    sideLeftColor: '#e8e2db',
    sideRightColor: '#f5f0ea',
    strokeColor: '#ea7008',
    position: 'bottom',
    baseX: 680,
    baseY: 390,
    height: 175,
  },
  {
    id: '05',
    number: '05',
    title: 'APIs & Microservices',
    category: 'API Architecture',
    description: 'High-scale REST & GraphQL endpoints with robust integrations.',
    icon: Terminal,
    topColor: '#ea7008', // Foremark Orange
    sideLeftColor: '#d66205',
    sideRightColor: '#f1882d',
    strokeColor: '#ea7008',
    position: 'top',
    baseX: 870,
    baseY: 360,
    height: 210,
  },
  {
    id: '06',
    number: '06',
    title: 'Technical SEO & Performance',
    category: 'Core Web Vitals',
    description: 'Sub-second load times, 100/100 Vitals, and structured schemas.',
    icon: Gauge,
    topColor: '#121110', // Brand Black with Orange accent
    sideLeftColor: '#1d1b19',
    sideRightColor: '#2b2825',
    strokeColor: '#ea7008',
    position: 'bottom',
    baseX: 1060,
    baseY: 330,
    height: 245,
  },
];

export const WhatWeBuildDeliver3D = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(0);

  // Isometric Block dimensions:
  const RADIUS_X = 46; // half width of isometric top rhombus
  const RADIUS_Y = 24; // half height of isometric top rhombus

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
      {/* Ambient Radial Orange Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#ea7008]/[0.06] via-[#ea7008]/[0.03] to-transparent blur-[120px] pointer-events-none rounded-full z-0" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 relative z-10">
        
        {/* ─── SECTION HEADER ─── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl text-left">
            <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-3">
              Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#121110] tracking-tight leading-tight mb-3">
              What We Build & <span className="text-[#ea7008]">Deliver</span>
            </h2>
            <p className="text-[#5c544d] text-sm sm:text-base leading-relaxed">
              Ascending from bespoke brand flagships to multi-tenant SaaS engines and high-throughput microservices.
            </p>
          </div>

          {/* Isometric 3D Legend Pill */}
          <div className="hidden sm:flex items-center gap-2 self-start sm:self-auto px-3.5 py-1.5 rounded-full border border-[#ebe5df] bg-white shadow-xs font-mono text-xs text-[#6b635b]">
            <span className="w-2 h-2 rounded-full bg-[#ea7008] animate-pulse" />
            <span>Interactive 3D Pedestals (01 — 06)</span>
          </div>
        </div>

        {/* ─── DESKTOP PANORAMA: 3D ISOMETRIC STAIRCASE STAGE (>= 1024px) ─── */}
        <div className="hidden lg:block relative w-full h-[660px] overflow-visible">

          {/* SVG Canvas for the 6 Isometric Cubes & Dotted Guidelines */}
          <svg
            viewBox="0 0 1180 660"
            className="absolute inset-0 w-full h-full overflow-visible z-10 pointer-events-none"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Floor Shadow Filter */}
              <filter id="cube-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
                <feOffset dx="0" dy="8" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.16" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Orange Glow Filter */}
              <filter id="orange-glow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="4" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Render 6 Isometric Cubes in Staircase Formation */}
            {deliverablesData.map((item) => {
              const isHovered = hoveredId === item.id;
              const lift = isHovered ? 12 : 0; // 3D Elevation on hover

              const cx = item.baseX;
              const cyBase = item.baseY;
              const H = item.height + lift;

              // Top face vertices
              const topY = cyBase - H;
              const pTop = `${cx},${topY - RADIUS_Y}`;
              const pRight = `${cx + RADIUS_X},${topY}`;
              const pBottom = `${cx},${topY + RADIUS_Y}`;
              const pLeft = `${cx - RADIUS_X},${topY}`;

              // Left face polygon vertices
              const leftFacePoints = `${pLeft} ${pBottom} ${cx},${cyBase + RADIUS_Y} ${cx - RADIUS_X},${cyBase}`;

              // Right face polygon vertices
              const rightFacePoints = `${pBottom} ${pRight} ${cx + RADIUS_X},${cyBase} ${cx},${cyBase + RADIUS_Y}`;

              // Connection line coordinates
              const lineStartY = item.position === 'top' ? 165 : topY + RADIUS_Y;
              const lineEndY = item.position === 'top' ? topY - RADIUS_Y : 448;

              return (
                <g key={item.id} className="transition-all duration-300">
                  
                  {/* Floor Ambient Drop Shadow underneath the cube */}
                  <ellipse
                    cx={cx}
                    cy={cyBase + RADIUS_Y + 8}
                    rx={RADIUS_X + 6}
                    ry={RADIUS_Y + 3}
                    fill={isHovered ? 'rgba(234,112,8,0.25)' : 'rgba(0,0,0,0.08)'}
                    className="transition-all duration-300"
                  />

                  {/* Vertical Dotted Connector Line connecting to Callout */}
                  <line
                    x1={cx}
                    y1={lineStartY}
                    x2={cx}
                    y2={lineEndY}
                    stroke={isHovered ? '#ea7008' : '#d2cbbf'}
                    strokeWidth={isHovered ? 2 : 1.5}
                    strokeDasharray="4 4"
                    className="transition-all duration-200"
                  />

                  {/* LEFT FACE OF ISOMETRIC CUBE */}
                  <polygon
                    points={leftFacePoints}
                    fill={item.sideLeftColor}
                    stroke={item.strokeColor}
                    strokeWidth="0.8"
                    strokeOpacity="0.3"
                    className="transition-all duration-300"
                  />

                  {/* RIGHT FACE OF ISOMETRIC CUBE */}
                  <polygon
                    points={rightFacePoints}
                    fill={item.sideRightColor}
                    stroke={item.strokeColor}
                    strokeWidth="0.8"
                    strokeOpacity="0.3"
                    className="transition-all duration-300"
                  />

                  {/* TOP FACE OF ISOMETRIC CUBE (RHOMBUS / DIAMOND) */}
                  <polygon
                    points={`${pTop} ${pRight} ${pBottom} ${pLeft}`}
                    fill={item.topColor}
                    stroke={item.topColor === '#ffffff' ? '#ea7008' : item.strokeColor}
                    strokeWidth={item.topColor === '#ffffff' ? '2' : '1'}
                    strokeOpacity={item.topColor === '#ffffff' ? '0.9' : '0.4'}
                    className="transition-all duration-300"
                  />

                  {/* Interactive Glowing Center Beacon Dot on Top Face */}
                  <g className="transition-transform duration-300">
                    {/* Pulsing ring on hover */}
                    {isHovered && (
                      <circle
                        cx={cx}
                        cy={topY}
                        r="12"
                        fill="#ea7008"
                        fillOpacity="0.25"
                        filter="url(#orange-glow)"
                      />
                    )}

                    <circle
                      cx={cx}
                      cy={topY}
                      r="4.5"
                      fill="#ffffff"
                      stroke="#ea7008"
                      strokeWidth="2.5"
                    />
                  </g>

                  {/* Vertical Light Pillar on Hover */}
                  {isHovered && (
                    <line
                      x1={cx}
                      y1={topY}
                      x2={cx}
                      y2={topY - 50}
                      stroke="#ea7008"
                      strokeWidth="2"
                      strokeOpacity="0.6"
                      strokeLinecap="round"
                      filter="url(#orange-glow)"
                    />
                  )}

                  {/* Interactive Hotspot target covering the cube */}
                  <polygon
                    points={`${pTop} ${pRight} ${cx + RADIUS_X},${cyBase} ${cx},${cyBase + RADIUS_Y} ${cx - RADIUS_X},${cyBase} ${pLeft}`}
                    fill="transparent"
                    className="cursor-pointer pointer-events-auto"
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  />
                </g>
              );
            })}
          </svg>

          {/* ─── 6 CALLOUT CARDS (ALTERNATING TOP AND BOTTOM) ─── */}
          {deliverablesData.map((item) => {
            const isHovered = hoveredId === item.id;
            const Icon = item.icon;

            // Positioning calculations
            const isTop = item.position === 'top';
            const leftOffset = `${(item.baseX / 1180) * 100}%`;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  left: leftOffset,
                  top: isTop ? '28px' : '460px',
                  transform: 'translateX(-50%)',
                }}
                className={`absolute w-[192px] z-20 cursor-pointer transition-all duration-300 ${
                  isHovered ? (isTop ? '-translate-y-1.5' : 'translate-y-1.5') : ''
                }`}
              >
                {/* Connection Line Indicator Dot on Top of Bottom Cards */}
                {!isTop && (
                  <div className="flex justify-center mb-1.5">
                    <div
                      className={`w-2 h-2 rounded-full border transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#ea7008] border-white ring-2 ring-[#ea7008]'
                          : 'bg-white border-[#d2cbbf]'
                      }`}
                    />
                  </div>
                )}

                {/* Callout Card */}
                <div
                  className={`p-3.5 rounded-2xl border transition-all duration-300 text-left ${
                    isHovered
                      ? 'bg-white border-[#ea7008] shadow-[0_10px_30px_rgba(234,112,8,0.2)] scale-[1.02]'
                      : 'bg-white border-[#dcd6ce] shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-[#ea7008]/60'
                  }`}
                >
                  {/* Top Bar: Icon + Step Number */}
                  <div className="flex items-center justify-between mb-2.5">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                        isHovered
                          ? 'bg-[#ea7008] text-white shadow-[0_2px_8px_rgba(234,112,8,0.3)]'
                          : 'bg-[#faf8f5] text-[#ea7008] border border-[#ebe5df]'
                      }`}
                    >
                      <Icon size={16} strokeWidth={2.2} />
                    </div>

                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full border transition-colors ${
                        isHovered
                          ? 'bg-[#ea7008] text-white border-[#ea7008]'
                          : 'bg-[#ea7008]/10 text-[#ea7008] border-[#ea7008]/30'
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Title (High-contrast solid dark black font) */}
                  <h4 className="text-[13px] font-bold text-[#121110] leading-snug tracking-tight mb-1 font-sans">
                    {item.title}
                  </h4>

                  {/* Description (Dark, high-contrast readable font) */}
                  <p className="text-[12px] text-[#2d2824] leading-relaxed font-sans font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Connection Line Indicator Dot on Bottom of Top Cards */}
                {isTop && (
                  <div className="flex justify-center mt-1.5">
                    <div
                      className={`w-2 h-2 rounded-full border transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#ea7008] border-white ring-2 ring-[#ea7008]'
                          : 'bg-white border-[#d2cbbf]'
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ─── MOBILE & TABLET RESPONSIVE 3D SHOWCASE (< 1024px) ─── */}
        <div className="lg:hidden flex flex-col gap-6">
          
          {/* Mobile Phase Pill Carousel Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            {deliverablesData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveMobileIndex(idx)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeMobileIndex === idx
                    ? 'bg-[#ea7008] text-white shadow-sm'
                    : 'bg-white text-[#6b635b] border border-[#ebe5df] hover:border-[#ea7008]/40'
                }`}
              >
                {item.number} · {item.category}
              </button>
            ))}
          </div>

          {/* Active Mobile Step 3D Card */}
          <AnimatePresence mode="wait">
            {(() => {
              const activeItem = deliverablesData[activeMobileIndex];
              const Icon = activeItem.icon;

              return (
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-[#ebe5df] bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden text-left"
                >
                  {/* Subtle Corner Glow */}
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#ea7008]/15 blur-3xl pointer-events-none rounded-full" />

                  {/* Top Bar: Icon + Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#ea7008]/10 border border-[#ea7008]/20 text-[#ea7008] flex items-center justify-center">
                      <Icon size={24} strokeWidth={2.2} />
                    </div>

                    <span className="text-sm font-mono font-bold px-3 py-1 rounded-full bg-[#ea7008]/10 text-[#ea7008] border border-[#ea7008]/25">
                      STEP {activeItem.number} OF 06
                    </span>
                  </div>

                  {/* Category & Title */}
                  <span className="text-[11px] font-mono text-[#8a8077] uppercase tracking-wider block mb-1">
                    {activeItem.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#121110] mb-3">
                    {activeItem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#5c544d] text-sm leading-relaxed mb-6">
                    {activeItem.description}
                  </p>

                  {/* Bottom Navigation */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#f2eee9]">
                    <span className="text-xs font-mono text-[#8a8077]">
                      Pedestal Elevation: Level {activeItem.number}
                    </span>

                    <button
                      onClick={() =>
                        setActiveMobileIndex((prev) => (prev + 1) % deliverablesData.length)
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ea7008] hover:text-[#d66205] cursor-pointer"
                    >
                      <span>Next Deliverable</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>

          {/* Mobile Dot Indicators */}
          <div className="flex items-center justify-center gap-2 py-1">
            {deliverablesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMobileIndex(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeMobileIndex === idx ? 'w-6 bg-[#ea7008]' : 'w-2 bg-[#ebe5df]'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhatWeBuildDeliver3D;
