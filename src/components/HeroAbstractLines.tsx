import React from 'react';
import { motion } from 'framer-motion';

/**
 * HeroAbstractLines
 * Features the signature Foremark Orange line with shade in every multi-track band.
 * - Symmetrical palette: Cream -> Khaki Olive -> Dark Moss -> FOREMARK ORANGE (hero with shade) -> Dark Moss -> Khaki Olive -> Cream
 * - Flowing smoothly behind the navbar, logo, and headline
 * - Shaded orange hero line with physical cast shadow and luminous amber radiance
 * - Confined cleanly to the upper hero copy area (fades out completely above the carousel)
 * - Zero overlap onto the carousel banners
 * - GPU-accelerated, locked 60-120 FPS
 */
export const HeroAbstractLines: React.FC = () => {
  // Refined track palette: increased inter-strip spacing (step of 28px) and crisp, elegant stroke widths
  const trackPalette = [
    { offset: -84, stroke: '#e4d5be', width: 8, opacity: 0.38, id: 'cream-1' },
    { offset: -56, stroke: '#6c6953', width: 9, opacity: 0.52, id: 'olive-1' },
    { offset: -28, stroke: '#444e3d', width: 10, opacity: 0.68, id: 'moss-1' },
    { offset: 0,   stroke: 'url(#hero-orange-grad)', width: 16, opacity: 1.0, isOrange: true, id: 'orange-hero' },
    { offset: 28,  stroke: '#444e3d', width: 10, opacity: 0.68, id: 'moss-2' },
    { offset: 56,  stroke: '#6c6953', width: 9, opacity: 0.52, id: 'olive-2' },
    { offset: 84,  stroke: '#e4d5be', width: 8, opacity: 0.38, id: 'cream-2' },
    { offset: 112, stroke: '#e4d5be', width: 2.5, opacity: 0.22, id: 'hairline' },
  ];

  // --- 1. Diagonal Highway (Positioned further left to frame the left flank & clear the headline) ---
  const getDiagonalPath = (offset: number) => {
    const perpX = -0.615 * offset;
    const perpY = 0.788 * offset;

    const xStart = -1120 + perpX;
    const yStart = -600 + perpY;
    const xEnd = 1280 + perpX;
    const yEnd = 900 + perpY;

    return `M ${xStart.toFixed(1)} ${yStart.toFixed(1)} L ${xEnd.toFixed(1)} ${yEnd.toFixed(1)}`;
  };

  // --- 2. Upper-Right U-Bend Scoop (Separated by 270px+ from Diagonal Highway) ---
  const cx = 1180;
  const cy = 60;
  const rBase = 125;
  const cos45 = 0.70710678;
  const sin45 = 0.70710678;

  const getScoopPath = (offset: number) => {
    const r = rBase + offset;
    const x1 = cx - r * cos45;
    const y1 = cy + r * sin45;
    const x2 = cx + r * cos45;
    const y2 = cy + r * sin45;

    const xStart = x1 - 1800;
    const yStart = y1 - 1800;
    const xEnd = x2 + 1800;
    const yEnd = y2 - 1800;

    return `M ${xStart.toFixed(1)} ${yStart.toFixed(1)} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 0 0 ${x2.toFixed(1)} ${y2.toFixed(1)} L ${xEnd.toFixed(1)} ${yEnd.toFixed(1)}`;
  };

  return (
    <div 
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 w-full h-full"
      style={{
        maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 72%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 72%)',
      }}
    >
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full object-cover will-change-transform"
        aria-hidden="true"
      >
        <defs>
          {/* Shaded Foremark Orange Gradient (Highlights to deep shaded burnt tone) */}
          <linearGradient id="hero-orange-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffaa44" />
            <stop offset="28%" stopColor="#ea7008" />
            <stop offset="72%" stopColor="#f37312" />
            <stop offset="100%" stopColor="#9c3200" />
          </linearGradient>

          {/* Ambient radial glows behind the curves */}
          <radialGradient id="ubend-ambient-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ea7008" stopOpacity="0.28" />
            <stop offset="60%" stopColor="#ea7008" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#0a0805" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="tl-ambient-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ea7008" stopOpacity="0.24" />
            <stop offset="60%" stopColor="#ea7008" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#0a0805" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient background warm light pools */}
        <circle cx={cx} cy={cy + 130} r={360} fill="url(#ubend-ambient-glow)" />
        <circle cx={150} cy={170} r={360} fill="url(#tl-ambient-glow)" />

        {/* ======================================================== */}
        {/* GROUP 1: DIAGONAL HIGHWAY (With Signature Foremark Orange)*/}
        {/* ======================================================== */}
        <g id="hero-diagonal-span">
          {/* Companion tracks */}
          {trackPalette
            .filter((t) => !t.isOrange)
            .map((t) => (
              <motion.path
                key={`diag-${t.id}`}
                d={getDiagonalPath(t.offset)}
                stroke={t.stroke}
                strokeWidth={t.width}
                strokeOpacity={t.opacity}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: t.opacity }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              />
            ))}

          {/* FOREMARK ORANGE HERO LINE WITH PHYSICAL SHADE & GLOW */}
          {trackPalette
            .filter((t) => t.isOrange)
            .map((t) => (
              <React.Fragment key={`frag-diag-${t.id}`}>
                {/* Physical under-path shadow casting down */}
                <path
                  d={getDiagonalPath(t.offset)}
                  stroke="#000000"
                  strokeWidth={t.width + 6}
                  strokeOpacity={0.70}
                  strokeLinecap="round"
                  transform="translate(0, 8)"
                />
                {/* Standout Glowing Shaded Orange Line */}
                <motion.path
                  d={getDiagonalPath(t.offset)}
                  stroke={t.stroke}
                  strokeWidth={t.width}
                  strokeLinecap="round"
                  style={{
                    filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 16px rgba(234, 112, 8, 0.75))',
                  }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
                />
              </React.Fragment>
            ))}
        </g>

        {/* ======================================================== */}
        {/* GROUP 2: UPPER-RIGHT U-BEND SCOOP                        */}
        {/* ======================================================== */}
        <g id="hero-ubend-group" opacity={0.9}>
          {trackPalette
            .filter((t) => !t.isOrange)
            .map((t) => (
              <motion.path
                key={`scoop-${t.id}`}
                d={getScoopPath(t.offset)}
                stroke={t.stroke}
                strokeWidth={t.width}
                strokeOpacity={t.opacity}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: t.opacity }}
                transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              />
            ))}

          {trackPalette
            .filter((t) => t.isOrange)
            .map((t) => (
              <React.Fragment key={`frag-scoop-${t.id}`}>
                <path
                  d={getScoopPath(t.offset)}
                  stroke="#000000"
                  strokeWidth={t.width + 6}
                  strokeOpacity={0.70}
                  strokeLinecap="round"
                  transform="translate(0, 8)"
                />
                <motion.path
                  d={getScoopPath(t.offset)}
                  stroke={t.stroke}
                  strokeWidth={t.width}
                  strokeLinecap="round"
                  style={{
                    filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 16px rgba(234, 112, 8, 0.70))',
                  }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                />
              </React.Fragment>
            ))}
        </g>
      </svg>
    </div>
  );
};
