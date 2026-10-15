import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Layers,
  Sliders,
  ShoppingBag,
  Terminal,
  Gauge,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export interface DeliverableHexItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  color: 'orange' | 'white';
  side: 'left' | 'right';
  slotIndex: number; // 0 (top), 1 (middle), 2 (bottom)
  // Geometric parameters in SVG (1200 x 680)
  angleDeg: number;
  chevronAngleDeg: number;
}

export const deliverablesHexData: DeliverableHexItem[] = [
  // ─── LEFT SIDE DELIVERABLES (01, 02, 03) ───
  {
    id: '01',
    number: '01',
    title: 'Corporate Websites & Flagships',
    category: 'Brand Flagships',
    description: 'Bespoke digital flagships with custom interactive storytelling, micro-animations, and high-conversion UX.',
    highlights: ['Bespoke Storytelling', 'Micro-interactions', 'Sub-second Load'],
    icon: Globe,
    color: 'orange',
    side: 'left',
    slotIndex: 0,
    angleDeg: 240, // Top-Left
    chevronAngleDeg: 240,
  },
  {
    id: '02',
    number: '02',
    title: 'SaaS & Web Applications',
    category: 'Cloud Software',
    description: 'Scalable multi-tenant cloud platforms engineered with robust authentication, billing, and real-time data.',
    highlights: ['Multi-tenant Architecture', 'Type-safe APIs', 'Scalable Auth & Billing'],
    icon: Layers,
    color: 'white',
    side: 'left',
    slotIndex: 1,
    angleDeg: 180, // Middle-Left
    chevronAngleDeg: 180,
  },
  {
    id: '03',
    number: '03',
    title: 'Client Portals & Operations',
    category: 'Internal Systems',
    description: 'Secure enterprise portals, custom ERP dashboards, and automated mission-critical business workflows.',
    highlights: ['Granular RBAC Security', 'Automated Workflows', 'Audit Logging'],
    icon: Sliders,
    color: 'orange',
    side: 'left',
    slotIndex: 2,
    angleDeg: 120, // Bottom-Left
    chevronAngleDeg: 120,
  },

  // ─── RIGHT SIDE DELIVERABLES (04, 05, 06) ───
  {
    id: '04',
    number: '04',
    title: 'Headless E-Commerce',
    category: 'Commerce Engine',
    description: 'High-converting modern storefronts with sub-second page loads, headless checkouts, and seamless payment rails.',
    highlights: ['Headless Checkout', 'Instant Search', 'Global Edge CDN'],
    icon: ShoppingBag,
    color: 'white',
    side: 'right',
    slotIndex: 0,
    angleDeg: 300, // Top-Right
    chevronAngleDeg: 300,
  },
  {
    id: '05',
    number: '05',
    title: 'APIs & Microservices',
    category: 'API Architecture',
    description: 'High-throughput type-safe REST and GraphQL endpoints with caching, queue processing, and third-party integrations.',
    highlights: ['REST & GraphQL', 'Event-Driven Queues', 'Zero-Downtime CI/CD'],
    icon: Terminal,
    color: 'orange',
    side: 'right',
    slotIndex: 1,
    angleDeg: 0, // Middle-Right
    chevronAngleDeg: 0,
  },
  {
    id: '06',
    number: '06',
    title: 'Technical SEO & Performance',
    category: 'Core Web Vitals',
    description: 'Sub-second first contentful paint, 100/100 Google Web Vitals, rich JSON-LD schemas, and crawlability optimization.',
    highlights: ['100/100 Core Vitals', 'Structured Schemas', 'Indexation Tuning'],
    icon: Gauge,
    color: 'white',
    side: 'right',
    slotIndex: 2,
    angleDeg: 60, // Bottom-Right
    chevronAngleDeg: 60,
  },
];

export const WhatWeBuildDeliver3D = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(0);

  // SVG Geometry constants
  const CX = 600;
  const CY = 340;
  const RING_R = 126;
  const HEX_R = 64;

  // Calculate coordinates for the 6 hexagons
  const hexGeometry = deliverablesHexData.map((item) => {
    const rad = (item.angleDeg * Math.PI) / 180;
    const hx = CX + RING_R * Math.cos(rad);
    const hy = CY + RING_R * Math.sin(rad);

    // Flat-topped hexagon vertices (angles 0, 60, 120, 180, 240, 300)
    const points: [number, number][] = [];
    for (let k = 0; k < 6; k++) {
      const a = (k * 60 * Math.PI) / 180;
      points.push([hx + HEX_R * Math.cos(a), hy + HEX_R * Math.sin(a)]);
    }
    const pointsStr = points.map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`).join(' ');

    // Outward pointing chevron bracket wrapping the outward vertex
    const cRad = (item.chevronAngleDeg * Math.PI) / 180;
    const tipDist = HEX_R + 10;
    const tipX = hx + tipDist * Math.cos(cRad);
    const tipY = hy + tipDist * Math.sin(cRad);

    const armLength = 36;
    const leftArmAngle = cRad + (120 * Math.PI) / 180;
    const rightArmAngle = cRad - (120 * Math.PI) / 180;

    const leftArmX = tipX + armLength * Math.cos(leftArmAngle);
    const leftArmY = tipY + armLength * Math.sin(leftArmAngle);

    const rightArmX = tipX + armLength * Math.cos(rightArmAngle);
    const rightArmY = tipY + armLength * Math.sin(rightArmAngle);

    const chevronPath = `M ${leftArmX.toFixed(1)},${leftArmY.toFixed(1)} L ${tipX.toFixed(1)},${tipY.toFixed(1)} L ${rightArmX.toFixed(1)},${rightArmY.toFixed(1)}`;

    // Connection wire endpoint
    const wireTipX = tipX;
    const wireTipY = tipY;

    // Terminal wire start on left cards (x = 340) or right cards (x = 860)
    let cardX = 340;
    let cardY = 120;
    let wirePath = '';

    if (item.side === 'left') {
      cardX = 340;
      if (item.slotIndex === 0) cardY = 120;
      if (item.slotIndex === 1) cardY = 340;
      if (item.slotIndex === 2) cardY = 560;

      // Smooth S-curve into chevron tip
      const cp1X = cardX + 90;
      const cp1Y = cardY;
      const cp2X = wireTipX - 60;
      const cp2Y = wireTipY;
      wirePath = `M ${cardX},${cardY} C ${cp1X},${cp1Y} ${cp2X},${cp2Y} ${wireTipX.toFixed(1)},${wireTipY.toFixed(1)}`;
    } else {
      cardX = 860;
      if (item.slotIndex === 0) cardY = 120;
      if (item.slotIndex === 1) cardY = 340;
      if (item.slotIndex === 2) cardY = 560;

      // Smooth S-curve from chevron tip into right card
      const cp1X = wireTipX + 60;
      const cp1Y = wireTipY;
      const cp2X = cardX - 90;
      const cp2Y = cardY;
      wirePath = `M ${wireTipX.toFixed(1)},${wireTipY.toFixed(1)} C ${cp1X},${cp1Y} ${cp2X},${cp2Y} ${cardX},${cardY}`;
    }

    return {
      ...item,
      hx,
      hy,
      points,
      pointsStr,
      chevronPath,
      wireTipX,
      wireTipY,
      cardX,
      cardY,
      wirePath,
    };
  });

  const leftItems = deliverablesHexData.filter((d) => d.side === 'left');
  const rightItems = deliverablesHexData.filter((d) => d.side === 'right');

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-transparent">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-[#ea7008]/[0.08] via-[#ea7008]/[0.03] to-transparent blur-[140px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* ─── SECTION HEADER ─── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl text-left">
            <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-3">
              Deliverables &amp; Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#121110] tracking-tight leading-tight mb-3 font-display">
              What We Build &amp; <span className="text-[#ea7008]">Deliver</span>
            </h2>
            <p className="text-[#5c544d] text-sm sm:text-base leading-relaxed">
              An integrated constellation of bespoke flagships, high-scale SaaS architectures, and automated operational engines.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-full border border-[#ebe5df] bg-white shadow-xs text-xs text-[#6b635b]">
            <span className="w-2 h-2 rounded-full bg-[#ea7008] animate-pulse" />
            <span className="font-medium">Interactive Hexagonal Architecture</span>
          </div>
        </div>

        {/* ─── DESKTOP VIEWPORT: 6-HEXAGON CONSTELLATION WITH LEFT & RIGHT CARDS (>= 1024px) ─── */}
        <div className="hidden lg:block relative w-full h-[680px] select-none">
          
          {/* SVG Canvas for Hexagons, Wires, Glows, and Orbits */}
          <svg
            viewBox="0 0 1200 680"
            className="absolute inset-0 w-full h-full overflow-visible z-10 pointer-events-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Center Ambient Orange Glow */}
              <radialGradient id="center-ambient-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ea7008" stopOpacity="0.32" />
                <stop offset="35%" stopColor="#ea7008" stopOpacity="0.16" />
                <stop offset="70%" stopColor="#ea7008" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#ea7008" stopOpacity="0" />
              </radialGradient>

              {/* Orange Hexagon Linear Gradient */}
              <linearGradient id="hex-orange-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f77810" />
                <stop offset="50%" stopColor="#ea7008" />
                <stop offset="100%" stopColor="#cf5e02" />
              </linearGradient>

              {/* Orange Hexagon Bevel Specular Gradient */}
              <linearGradient id="hex-orange-bevel" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#ea7008" stopOpacity="0.0" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
              </linearGradient>

              {/* White Hexagon Linear Gradient */}
              <linearGradient id="hex-white-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#fdfbf8" />
                <stop offset="100%" stopColor="#f1eae1" />
              </linearGradient>

              {/* White Hexagon Bevel Specular Gradient */}
              <linearGradient id="hex-white-bevel" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#ffffff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#d5ccc1" stopOpacity="0.45" />
              </linearGradient>

              {/* Soft Drop Shadow Filter for Hexagons */}
              <filter id="hex-drop-shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#1a1816" floodOpacity="0.12" />
              </filter>

              {/* Glowing Aura Filter for Active Hexagon */}
              <filter id="hex-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.6" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Terminal Dot Glow Filter */}
              <filter id="dot-glow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* ─── CENTER AMBIENT GLOW & ORBIT RINGS ─── */}
            <circle cx={CX} cy={CY} r="220" fill="url(#center-ambient-glow)" />

            {/* Concentric faint orbital tracks matching the reference */}
            <circle cx={CX} cy={CY} r="72" fill="none" stroke="#ea7008" strokeOpacity="0.16" strokeDasharray="4 4" />
            <circle cx={CX} cy={CY} r="188" fill="none" stroke="#ea7008" strokeOpacity="0.12" />
            <circle cx={CX} cy={CY} r="260" fill="none" stroke="#ea7008" strokeOpacity="0.08" strokeDasharray="6 6" />
            <circle cx={CX} cy={CY} r="320" fill="none" stroke="#ea7008" strokeOpacity="0.04" />

            {/* ─── 6 BEZIER CONNECTOR WIRES (FROM CARDS TO HEXAGONS) ─── */}
            {hexGeometry.map((item) => {
              const isHovered = hoveredId === item.id;
              const isOrange = item.color === 'orange';
              
              const defaultStroke = isOrange ? '#ea7008' : '#b8b0a5';
              const activeStroke = isOrange ? '#ea7008' : '#6b635b';

              return (
                <g key={`wire-${item.id}`}>
                  {/* Subtle wide glow line behind when hovered */}
                  {isHovered && (
                    <path
                      d={item.wirePath}
                      fill="none"
                      stroke={isOrange ? '#ea7008' : '#948a7e'}
                      strokeWidth="6"
                      strokeOpacity="0.3"
                      strokeLinecap="round"
                    />
                  )}

                  {/* Base Wire Track */}
                  <path
                    d={item.wirePath}
                    fill="none"
                    stroke={isHovered ? activeStroke : defaultStroke}
                    strokeWidth={isHovered ? 2.5 : 1.8}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />

                  {/* Flowing animated dash pulse when hovered */}
                  {isHovered && (
                    <path
                      d={item.wirePath}
                      fill="none"
                      stroke={isOrange ? '#ffffff' : '#ea7008'}
                      strokeWidth="2.5"
                      strokeDasharray="8 12"
                      strokeLinecap="round"
                      className="animate-[dash_1s_linear_infinite]"
                    />
                  )}

                  {/* Terminal Node Circle & Dot on Card Border */}
                  <g className="cursor-pointer" onClick={() => setHoveredId(item.id)}>
                    {/* Outer halo when hovered */}
                    {isHovered && (
                      <circle
                        cx={item.cardX}
                        cy={item.cardY}
                        r="14"
                        fill={isOrange ? 'rgba(234,112,8,0.22)' : 'rgba(107,99,91,0.18)'}
                      />
                    )}

                    {/* Outer white ring */}
                    <circle
                      cx={item.cardX}
                      cy={item.cardY}
                      r="9"
                      fill="#ffffff"
                      stroke={isHovered ? (isOrange ? '#ea7008' : '#6b635b') : (isOrange ? '#ea7008' : '#d2cbbf')}
                      strokeWidth="1.5"
                    />

                    {/* Inner Colored Dot */}
                    <circle
                      cx={item.cardX}
                      cy={item.cardY}
                      r={isHovered ? 4.5 : 3.5}
                      fill={isOrange ? '#ea7008' : '#8c8275'}
                      filter={isOrange ? 'url(#dot-glow)' : undefined}
                      className="transition-all duration-300"
                    />
                  </g>
                </g>
              );
            })}

            {/* ─── 6 INTERLOCKING HEXAGONS & CHEVRON ACCENTS ─── */}
            {hexGeometry.map((item) => {
              const isHovered = hoveredId === item.id;
              const isOrange = item.color === 'orange';
              const Icon = item.icon;

              return (
                <g
                  key={`hex-${item.id}`}
                  className="cursor-pointer transition-transform duration-300 group"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setHoveredId(item.id === hoveredId ? null : item.id)}
                  style={{
                    transformOrigin: `${item.hx}px ${item.hy}px`,
                    transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                  }}
                >
                  {/* Outer Chevron Bracket Accent wrapping the vertex */}
                  <path
                    d={item.chevronPath}
                    fill="none"
                    stroke={
                      isOrange
                        ? (isHovered ? '#ff841f' : '#ea7008')
                        : (isHovered ? '#ffffff' : '#e6e0d8')
                    }
                    strokeWidth={isHovered ? 6 : 5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter={isOrange ? 'url(#hex-glow)' : 'url(#hex-drop-shadow)'}
                    className="transition-all duration-300"
                  />

                  {/* Hexagon Body with Shadow */}
                  <polygon
                    points={item.pointsStr}
                    fill={isOrange ? 'url(#hex-orange-grad)' : 'url(#hex-white-grad)'}
                    stroke={
                      isOrange
                        ? (isHovered ? '#ff9a47' : '#ea7008')
                        : (isHovered ? '#ea7008' : '#ebe5df')
                    }
                    strokeWidth={isHovered ? 2.5 : 1.5}
                    filter="url(#hex-drop-shadow)"
                    className="transition-all duration-300"
                  />

                  {/* 3D Facet Bevel Highlight Overlay */}
                  <polygon
                    points={item.pointsStr}
                    fill={isOrange ? 'url(#hex-orange-bevel)' : 'url(#hex-white-bevel)'}
                    stroke="none"
                    pointerEvents="none"
                  />

                  {/* Subtle Radial Center Bevel Line */}
                  <line
                    x1={item.hx}
                    y1={item.hy}
                    x2={item.wireTipX}
                    y2={item.wireTipY}
                    stroke={isOrange ? '#ffffff' : '#d8d1c7'}
                    strokeWidth="1"
                    strokeOpacity={isHovered ? 0.45 : 0.25}
                    pointerEvents="none"
                  />

                  {/* Hexagon Content (Number & Icon) */}
                  <g pointerEvents="none">
                    {/* Deliverable Number */}
                    <text
                      x={item.hx}
                      y={item.hy - 8}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={isOrange ? '#ffffff' : '#121110'}
                      fontSize="14"
                      fontWeight="bold"
                      fontFamily="var(--font-sans), sans-serif"
                      letterSpacing="0.05em"
                    >
                      {item.number}
                    </text>

                    {/* Deliverable Icon Component inside foreignObject */}
                    <foreignObject
                      x={item.hx - 12}
                      y={item.hy + 4}
                      width="24"
                      height="24"
                      className="overflow-visible"
                    >
                      <div
                        className={`w-6 h-6 flex items-center justify-center transition-colors duration-300 ${
                          isOrange ? 'text-white' : 'text-[#ea7008]'
                        }`}
                      >
                        <Icon size={16} strokeWidth={2.4} />
                      </div>
                    </foreignObject>
                  </g>
                </g>
              );
            })}
          </svg>

          {/* ─── LEFT COLUMN: 3 CARDS (01, 02, 03) ─── */}
          <div className="absolute left-0 top-0 bottom-0 w-[340px] flex flex-col justify-between py-2 z-20 pointer-events-auto">
            {leftItems.map((item) => {
              const isHovered = hoveredId === item.id;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setHoveredId(item.id === hoveredId ? null : item.id)}
                  className={`relative p-5 rounded-2xl bg-white border transition-all duration-300 cursor-target cursor-pointer text-left ${
                    isHovered
                      ? 'border-[#ea7008] shadow-[0_16px_36px_rgba(234,112,8,0.14)] -translate-y-1'
                      : 'border-[#ebe5df] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#ea7008]/40'
                  }`}
                >
                  {/* Active Orange Glow Bar */}
                  {isHovered && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 bg-[#ea7008] rounded-r-full" />
                  )}

                  {/* Header: Icon + Number + Category */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                          isHovered
                            ? 'bg-[#ea7008] text-white'
                            : 'bg-[#faf8f5] border border-[#ebe5df] text-[#ea7008]'
                        }`}
                      >
                        <Icon size={14} strokeWidth={2.2} />
                      </div>
                      <span className="text-[11px] font-semibold text-[#8a8077] uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>

                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full border transition-colors ${
                        isHovered
                          ? 'bg-[#ea7008] text-white border-[#ea7008]'
                          : 'bg-[#faf8f5] text-[#5c544d] border-[#ebe5df]'
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-[#121110] leading-snug mb-1.5 font-display tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#5c544d] leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[10px] font-medium text-[#6b635b] bg-[#f8f6f3] px-2 py-0.5 rounded-md border border-[#eee9e3]"
                      >
                        <CheckCircle2 size={10} className="text-[#ea7008]" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ─── RIGHT COLUMN: 3 CARDS (04, 05, 06) ─── */}
          <div className="absolute right-0 top-0 bottom-0 w-[340px] flex flex-col justify-between py-2 z-20 pointer-events-auto">
            {rightItems.map((item) => {
              const isHovered = hoveredId === item.id;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setHoveredId(item.id === hoveredId ? null : item.id)}
                  className={`relative p-5 rounded-2xl bg-white border transition-all duration-300 cursor-target cursor-pointer text-left ${
                    isHovered
                      ? 'border-[#ea7008] shadow-[0_16px_36px_rgba(234,112,8,0.14)] -translate-y-1'
                      : 'border-[#ebe5df] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#ea7008]/40'
                  }`}
                >
                  {/* Active Orange Glow Bar */}
                  {isHovered && (
                    <div className="absolute right-0 top-3 bottom-3 w-1 bg-[#ea7008] rounded-l-full" />
                  )}

                  {/* Header: Icon + Number + Category */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                          isHovered
                            ? 'bg-[#ea7008] text-white'
                            : 'bg-[#faf8f5] border border-[#ebe5df] text-[#ea7008]'
                        }`}
                      >
                        <Icon size={14} strokeWidth={2.2} />
                      </div>
                      <span className="text-[11px] font-semibold text-[#8a8077] uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>

                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full border transition-colors ${
                        isHovered
                          ? 'bg-[#ea7008] text-white border-[#ea7008]'
                          : 'bg-[#faf8f5] text-[#5c544d] border-[#ebe5df]'
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-[#121110] leading-snug mb-1.5 font-display tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#5c544d] leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[10px] font-medium text-[#6b635b] bg-[#f8f6f3] px-2 py-0.5 rounded-md border border-[#eee9e3]"
                      >
                        <CheckCircle2 size={10} className="text-[#ea7008]" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ─── MOBILE & TABLET RESPONSIVE VIEW (< 1024px) ─── */}
        <div className="lg:hidden flex flex-col gap-6">
          
          {/* Mobile Hexagon Ring Visualizer */}
          <div className="relative w-full max-w-[420px] mx-auto aspect-square flex items-center justify-center my-2">
            <svg viewBox="350 120 500 440" className="w-full h-full overflow-visible">
              <defs>
                <radialGradient id="m-center-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ea7008" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ea7008" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx={CX} cy={CY} r="180" fill="url(#m-center-glow)" />
              <circle cx={CX} cy={CY} r="70" fill="none" stroke="#ea7008" strokeOpacity="0.18" strokeDasharray="4 4" />
              <circle cx={CX} cy={CY} r="180" fill="none" stroke="#ea7008" strokeOpacity="0.12" />

              {hexGeometry.map((item, idx) => {
                const isSelected = activeMobileIndex === idx;
                const isOrange = item.color === 'orange';
                const Icon = item.icon;

                return (
                  <g
                    key={`m-hex-${item.id}`}
                    className="cursor-pointer"
                    onClick={() => setActiveMobileIndex(idx)}
                  >
                    {/* Outer Chevron */}
                    <path
                      d={item.chevronPath}
                      fill="none"
                      stroke={isOrange ? '#ea7008' : (isSelected ? '#ea7008' : '#e6e0d8')}
                      strokeWidth={isSelected ? 6 : 4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Polygon Body */}
                    <polygon
                      points={item.pointsStr}
                      fill={isOrange ? '#ea7008' : (isSelected ? '#fff7ed' : '#ffffff')}
                      stroke={isSelected ? '#ea7008' : (isOrange ? '#ea7008' : '#ebe5df')}
                      strokeWidth={isSelected ? 3 : 1.5}
                      filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))"
                    />

                    {/* Text / Icon */}
                    <text
                      x={item.hx}
                      y={item.hy - 6}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={isOrange ? '#ffffff' : '#121110'}
                      fontSize="14"
                      fontWeight="bold"
                    >
                      {item.number}
                    </text>

                    <foreignObject
                      x={item.hx - 10}
                      y={item.hy + 4}
                      width="20"
                      height="20"
                    >
                      <div className={`w-5 h-5 flex items-center justify-center ${isOrange ? 'text-white' : 'text-[#ea7008]'}`}>
                        <Icon size={14} strokeWidth={2.4} />
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Mobile Phase Pill Carousel Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            {deliverablesHexData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveMobileIndex(idx)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeMobileIndex === idx
                    ? 'bg-[#ea7008] text-white shadow-sm'
                    : 'bg-white text-[#6b635b] border border-[#ebe5df] hover:border-[#ea7008]/40'
                }`}
              >
                {item.number} · {item.category}
              </button>
            ))}
          </div>

          {/* Active Mobile Step Card */}
          <AnimatePresence mode="wait">
            {(() => {
              const activeItem = deliverablesHexData[activeMobileIndex];
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
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#ea7008]/15 blur-3xl pointer-events-none rounded-full" />

                  {/* Top Bar: Icon + Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#ea7008]/10 border border-[#ea7008]/20 text-[#ea7008] flex items-center justify-center">
                      <Icon size={24} strokeWidth={2.2} />
                    </div>

                    <span className="text-sm font-bold px-3 py-1 rounded-full bg-[#ea7008]/10 text-[#ea7008] border border-[#ea7008]/25">
                      DELIVERABLE {activeItem.number} OF 06
                    </span>
                  </div>

                  <span className="text-xs text-[#8a8077] uppercase tracking-wider block mb-1 font-semibold">
                    {activeItem.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#121110] mb-3">
                    {activeItem.title}
                  </h3>

                  <p className="text-[#5c544d] text-sm leading-relaxed mb-4">
                    {activeItem.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeItem.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6b635b] bg-[#faf8f5] px-3 py-1 rounded-lg border border-[#eee9e3]"
                      >
                        <CheckCircle2 size={12} className="text-[#ea7008]" />
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Navigation */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#f2eee9]">
                    <span className="text-xs text-[#8a8077]">
                      {activeItem.color === 'orange' ? 'High-Performance Node' : 'Core Architecture Node'}
                    </span>

                    <button
                      onClick={() =>
                        setActiveMobileIndex((prev) => (prev + 1) % deliverablesHexData.length)
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
            {deliverablesHexData.map((_, idx) => (
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
