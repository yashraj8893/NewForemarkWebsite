import { useState } from 'react';
import { motion, useReducedMotion, type MotionStyle } from 'framer-motion';
import { Code2, Users, CalendarClock, type LucideIcon } from 'lucide-react';

/**
 * Concept 4 — "The Foundry Line" (v3: one box per pedestal)
 * Composition: three generous isometric pedestals stepping gently toward the
 * viewer (back-left → front-right). ONE copy box stands squarely on each
 * pedestal's top face — the face is wider than the box, so the rim always
 * shows and the box reads as planted, not floating. Station diamonds are
 * mounted on each pedestal's front corner like plaques (never near text).
 * A foreground delivery rail runs along the front; on scroll: pedestals rise
 * → rail draws → orange token travels 01→03 → boxes land on top.
 * lg+ = anchored layout; below lg = scene + stacked cards.
 */

interface BlockItem {
  index: string;
  title: string;
  text: string;
  Icon: LucideIcon;
}

const items: BlockItem[] = [
  {
    index: '01',
    title: 'Launch-ready builds',
    text: 'Production-grade software engineered for high availability and zero runtime compromise.',
    Icon: Code2,
  },
  {
    index: '02',
    title: 'Senior engineers',
    text: 'Direct engagement with seasoned architects and engineers from kickoff to deployment.',
    Icon: Users,
  },
  {
    index: '03',
    title: 'Deterministic timelines',
    text: 'Transparent sprint cadences, honest scopes, and delivery dates you can rely on.',
    Icon: CalendarClock,
  },
];

const RAIL_D = 'M90 640 L1110 640';
const ease = [0.22, 1, 0.36, 1] as const;

/* pedestal geometry — viewBox "0 -80 1200 780" (top face half-w 170 > box half-w 132) */
const stations = [
  {
    x: 235, y: 245,
    cx: '19.6%', boxBottom: '59.6%', badgeY: '55.1%',
    tone: 'orange' as const, delay: 0.5,
  },
  {
    x: 600, y: 355,
    cx: '50%', boxBottom: '45.5%', badgeY: '69.2%',
    tone: 'dark' as const, delay: 1.3,
  },
  {
    x: 965, y: 465,
    cx: '80.4%', boxBottom: '31.4%', badgeY: '83.3%',
    tone: 'orange' as const, delay: 2.25,
  },
];

/* ── pedestal: glow + slab (top face wider than the box) ─────── */
const Pedestal = ({ order, reduced }: { order: number; reduced: boolean }) => {
  const st = stations[order];
  return (
    <g transform={`translate(${st.x},${st.y})`}>
      <motion.g
        initial={{ y: 52, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: reduced ? 0 : 0.85, delay: reduced ? 0 : order * 0.14, ease }}
      >
        <ellipse cx="0" cy="66" rx="215" ry="62" fill="url(#fgGlow)" />
        <polygon points="0,-85 170,0 0,85 -170,0" fill="#f8f5f0" stroke="#e9e2d8" strokeWidth="1.5" />
        <polygon points="-170,0 0,85 0,125 -170,40" fill="#e7e0d5" />
        <polygon points="0,85 170,0 170,40 0,125" fill="#d9d0c2" />
        {/* warm rim along the front top edges */}
        <path d="M-170 0 L0 85 L170 0" fill="none" stroke="#ea7008" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
      </motion.g>
    </g>
  );
};

/* ── copy box (stands on a pedestal / stacks on mobile) ──────── */
const Callout = ({
  item,
  delay,
  reduced,
  className,
  style,
}: {
  item: BlockItem;
  delay: number;
  reduced: boolean;
  className?: string;
  style?: MotionStyle;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : delay, ease }}
    className={className}
    style={style}
  >
    <div className="relative overflow-hidden rounded-2xl border border-portfolio-gold/30 bg-gradient-to-b from-white to-[#faf8f5] p-4 shadow-[0_28px_60px_-20px_rgba(18,17,16,0.5)] transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/50 before:to-transparent hover:-translate-y-1 hover:border-portfolio-gold/60 sm:p-5">
      <h3 className="mb-1.5 flex items-baseline gap-2 font-display text-[15px] font-bold tracking-tight text-[#121110] sm:text-base">
        <span className="shrink-0 font-mono text-sm font-semibold text-portfolio-gold">{item.index}</span>
        <span>{item.title}</span>
      </h3>
      <p className="text-[13px] leading-relaxed text-[#5c544d]">{item.text}</p>
      {/* orange caret plugging the box into the pedestal face */}
      <span className="absolute -bottom-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border border-portfolio-gold/30 bg-white" aria-hidden />
    </div>
  </motion.div>
);

const FoundryLineBlocks = () => {
  const reduced = !!useReducedMotion();
  const [live, setLive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setLive(true)}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: reduced ? 0 : 0.7, ease }}
      className="mt-12 w-full max-w-6xl"
    >
      <div className={`foundry-line relative ${live || reduced ? 'live' : ''}`}>
        {/* ── scene ─────────────────────────────────────────────── */}
        <svg
          viewBox="0 -80 1200 780"
          className="block h-auto w-full"
          role="img"
          aria-label="Isometric illustration of the Foremark production line: three pedestals, each carrying one product box, joined by a delivery rail"
        >
          <defs>
            <radialGradient id="fgGlow">
              <stop offset="0%" stopColor="#ea7008" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#ea7008" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="fgStage">
              <stop offset="0%" stopColor="#121110" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#121110" stopOpacity="0" />
            </radialGradient>
            <pattern id="fgA" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(26.57)">
              <line x1="0" y1="0" x2="0" y2="48" stroke="#eee8e0" strokeWidth="1" />
            </pattern>
            <pattern id="fgB" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(-26.57)">
              <line x1="0" y1="0" x2="0" y2="48" stroke="#eee8e0" strokeWidth="1" />
            </pattern>
          </defs>

          <ellipse cx="600" cy="380" rx="560" ry="300" fill="url(#fgStage)" />
          <rect x="0" y="-80" width="1200" height="780" fill="url(#fgA)" opacity="0.75" />
          <rect x="0" y="-80" width="1200" height="780" fill="url(#fgB)" opacity="0.75" />

          {/* pedestals */}
          <Pedestal order={0} reduced={reduced} />
          <Pedestal order={1} reduced={reduced} />
          <Pedestal order={2} reduced={reduced} />

          {/* foreground delivery rail: glow → base → drawn signal line */}
          <path d={RAIL_D} fill="none" stroke="rgba(234,112,8,0.16)" strokeWidth="22" strokeLinecap="round" />
          <path d={RAIL_D} fill="none" stroke="#211e1a" strokeWidth="11" strokeLinecap="round" />
          <path d={RAIL_D} fill="none" stroke="#f8f5f0" strokeWidth="2" strokeLinecap="round" strokeDasharray="9 13" opacity="0.9" />
          <motion.path
            d={RAIL_D}
            fill="none"
            stroke="#ea7008"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: reduced ? 0 : 1.1, delay: reduced ? 0 : 0.25, ease }}
          />

          {/* orange token riding the rail (offset-path in CSS) */}
          <g className="foundry-pkg">
            <polygon points="0,-13 22,0 0,13 -22,0" fill="#ffb36b" />
            <polygon points="-22,0 0,13 0,34 -22,21" fill="#ea7008" />
            <polygon points="0,13 22,0 22,21 0,34" fill="#b45309" />
            <line x1="-11" y1="-6.5" x2="11" y2="6.5" stroke="#fff" strokeWidth="2" opacity="0.85" />
          </g>
        </svg>

        {/* ── station plaques: mounted on each pedestal's front corner ── */}
        {stations.map((st, i) => {
          const Icon = items[i].Icon;
          return (
            <div
              key={i}
              className="foundry-badge absolute z-10"
              style={{ left: st.cx, top: st.badgeY, '--bob-delay': `${i * 0.55}s` } as React.CSSProperties}
            >
              <div
                className={`flex h-10 w-10 rotate-45 items-center justify-center rounded-[10px] shadow-[0_14px_28px_-10px_rgba(234,112,8,0.55)] lg:h-14 lg:w-14 lg:rounded-[14px] ${
                  st.tone === 'orange'
                    ? 'bg-portfolio-gold text-white'
                    : 'bg-[#16130f] text-white ring-2 ring-[#16130f]/20'
                }`}
              >
                <span className="-rotate-45">
                  <Icon size={17} strokeWidth={2.2} className="lg:hidden" />
                  <Icon size={22} strokeWidth={2.2} className="hidden lg:block" />
                </span>
              </div>
            </div>
          );
        })}

        {/* ── lg+: ONE box standing on EACH pedestal ───────────── */}
        {stations.map((st, i) => (
          <Callout
            key={i}
            item={items[i]}
            delay={st.delay}
            reduced={reduced}
            className="absolute z-20 hidden w-[22%] max-w-[264px] lg:block"
            style={{ left: st.cx, bottom: st.boxBottom, x: '-50%' }}
          />
        ))}
      </div>

      {/* ── below lg: scene on top, cards stacked ──────────────── */}
      <div className="mt-6 flex flex-col gap-4 lg:hidden">
        {items.map((item, i) => (
          <Callout key={item.title} item={item} delay={0.2 + i * 0.15} reduced={reduced} />
        ))}
      </div>
    </motion.div>
  );
};

export default FoundryLineBlocks;
