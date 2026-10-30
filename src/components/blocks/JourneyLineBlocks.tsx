import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Code2, Users, CalendarClock, type LucideIcon } from 'lucide-react';

/**
 * Concept 6 — "The Journey Line"
 * Road-timeline family, new axis: the section pins for 400vh while a 300vw
 * track pans horizontally past three stations. A route line runs beneath the
 * stations; its orange fill always reaches screen-centre (you are here), and
 * station dots/chips light up as the line passes them. Ghost numerals +
 * watermark icons parallax subtly behind each station (outer speed tweak).
 * Below md — and under prefers-reduced-motion — the same stations render as
 * a vertical dashed route (no pin, zero jank).
 */

interface BlockItem {
  index: string;
  title: string;
  text: string;
  chip: string;
  Icon: LucideIcon;
}

const items: BlockItem[] = [
  {
    index: '01',
    title: 'Launch-ready builds',
    text: 'Production-grade software engineered for high availability and zero runtime compromise.',
    chip: 'KICKOFF',
    Icon: Code2,
  },
  {
    index: '02',
    title: 'Senior engineers',
    text: 'Direct engagement with seasoned architects and engineers from kickoff to deployment.',
    chip: 'TEAM',
    Icon: Users,
  },
  {
    index: '03',
    title: 'Deterministic timelines',
    text: 'Transparent sprint cadences, honest scopes, and delivery dates you can rely on.',
    chip: 'DELIVERY',
    Icon: CalendarClock,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;
const PIN_END = 0.85; /* pan completes, remaining scroll dwells on stop 03 */

/* ── station badge (road family diamond) ───────────────────────── */
const Badge = ({ item, i, size = 'h-14 w-14 rounded-[14px]' }: { item: BlockItem; i: number; size?: string }) => (
  <div
    className={`flex ${size} rotate-45 items-center justify-center shadow-[0_14px_28px_-10px_rgba(234,112,8,0.5)] ${
      i % 2 === 0 ? 'bg-portfolio-gold text-white' : 'bg-[#16130f] text-white ring-2 ring-[#16130f]/20'
    }`}
  >
    <span className="-rotate-45">
      <item.Icon size={22} strokeWidth={2.2} />
    </span>
  </div>
);

/* ── vertical route (mobile / reduced-motion fallback) ─────────── */
const StationsVertical = () => (
  <div className="relative">
    {/* dashed route line running behind the badges */}
    <span className="absolute bottom-7 left-[27px] top-7 border-l-2 border-dashed border-[#121110]/25" aria-hidden />
    <div className="space-y-10">
      {items.map((item, i) => (
        <div key={item.index} className="relative pl-[76px]">
          <span className="absolute left-0 top-0">
            <Badge item={item} i={i} />
          </span>
          <div className="mb-1.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <span className="font-mono text-xs font-semibold text-portfolio-gold">{item.index}</span>
            <span className="rounded-full border border-[#121110]/20 px-2 py-0.5 font-mono text-[10px] tracking-[0.14em] text-[#5c544d]">
              {item.chip}
            </span>
          </div>
          <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-[#121110] sm:text-2xl">
            {item.title}
          </h3>
          <p className="mt-1.5 max-w-[46ch] text-sm leading-relaxed text-[#5c544d]">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
);

const JourneyLineBlocks = () => {
  const reduced = !!useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start start', 'end end'] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(v >= PIN_END ? 2 : v >= 0.43 ? 1 : 0);
  });

  /* pan: 0 → 85% of the pin, then dwell on the last station */
  const x = useTransform(scrollYProgress, [0, PIN_END], ['0vw', '-200vw'], { clamp: true });
  /* orange fill: always reaches screen-centre from the left edge */
  const fill = useTransform(scrollYProgress, [0, 1], ['50vw', '250vw'], { clamp: true });
  const hintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0], { clamp: true });

  if (reduced) {
    return (
      <div className="mx-auto mt-12 w-full max-w-xl px-1">
        <StationsVertical />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.7, ease }}
      className="mt-12 w-full"
    >
      {/* ── md+: pinned horizontal journey ─────────────────────── */}
      <div ref={wrapRef} className="relative hidden md:block" style={{ height: '400vh' }}>
        <div className="sticky top-0 flex h-screen overflow-hidden">
          <motion.div className="relative h-full w-[300vw]" style={{ x }}>
            {/* stations */}
            {items.map((item, i) => (
              <div
                key={item.index}
                className={`absolute top-0 flex h-full w-screen items-center ${
                  i % 2 === 1 ? 'justify-end pr-[7vw]' : 'pl-[7vw]'
                }`}
              >
                <div className="relative max-w-[560px]">
                  {/* ghost numeral behind the copy */}
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -top-10 z-0 select-none font-display text-[clamp(7rem,15vw,12rem)] font-black leading-none text-transparent [-webkit-text-stroke:2px_rgba(18,17,16,0.12)] ${
                      i % 2 === 1 ? '-right-6' : '-left-6'
                    }`}
                  >
                    {item.index}
                  </span>
                  {/* watermark icon, outer-bottom */}
                  <item.Icon
                    aria-hidden
                    className={`pointer-events-none absolute bottom-0 z-0 text-portfolio-gold/[0.07] ${
                      i % 2 === 1 ? '-left-24' : '-right-24'
                    }`}
                    size={190}
                    strokeWidth={1}
                  />
                  <div className="relative z-10">
                    <div className="mb-6">
                      <Badge item={item} i={i} />
                    </div>
                    <h3 className="font-display text-[clamp(1.9rem,3.2vw,2.9rem)] font-bold leading-[1.08] tracking-tight text-[#121110]">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-[44ch] text-base leading-relaxed text-[#5c544d] lg:text-lg">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* route line + progress + stations */}
            <div className="absolute left-0 top-[74%] h-[7px] w-[300vw]">
              <div className="h-[7px] w-full rounded-full bg-[#121110]" />
              <motion.div
                className="absolute left-0 top-0 h-[7px] rounded-full bg-portfolio-gold shadow-[0_0_14px_rgba(234,112,8,0.55)]"
                style={{ width: fill }}
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[7px]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(90deg, rgba(255,255,255,0.9) 0 14px, transparent 14px 30px)',
                  backgroundSize: 'auto 2px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'repeat-x',
                }}
                aria-hidden
              />
              {items.map((item, i) => (
                <div key={item.index} className="absolute top-0" style={{ left: `${(i + 0.5) * 100}vw` }}>
                  <span
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[5px] border-[3px] transition-all duration-300 ${
                      active >= i
                        ? 'scale-110 border-portfolio-gold bg-portfolio-gold shadow-[0_0_12px_rgba(234,112,8,0.6)]'
                        : 'border-[#121110] bg-white'
                    }`}
                    style={{ width: 18, height: 18, left: 0, top: '50%' }}
                    aria-hidden
                  />
                  <span
                    className={`absolute top-[16px] -translate-x-1/2 whitespace-nowrap rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.16em] transition-colors duration-300 ${
                      active >= i
                        ? 'border-portfolio-gold bg-[#121110] text-white'
                        : 'border-[#121110]/25 bg-white text-[#5c544d]'
                    }`}
                    style={{ left: 0 }}
                  >
                    {item.index} · {item.chip}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* scroll hint, fades as soon as the journey starts */}
          <motion.span
            style={{ opacity: hintOpacity }}
            className="pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.3em] text-[#5c544d]"
          >
            SCROLL →
          </motion.span>
        </div>
      </div>

      {/* ── below md: vertical route ───────────────────────────── */}
      <div className="mx-auto mt-8 w-full max-w-xl px-4 md:hidden">
        <StationsVertical />
      </div>
    </motion.div>
  );
};

export default JourneyLineBlocks;
