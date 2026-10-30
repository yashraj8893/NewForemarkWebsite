import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Code2, Users, CalendarClock, type LucideIcon } from 'lucide-react';

/**
 * Concept 7 — "Night Line" (journey · style 1: dark cinematic)
 * Same pinned horizontal journey, full-bleed near-black band: glowing orange
 * route with a travelling light head, grain + vignette + warm top glow. The
 * current station is lit, the ones ahead sit dimmed — the light finds each
 * stop as the line passes it. Below md / reduced-motion: a dark panel with
 * the vertical route. Each style lives in its own file per the loop rules.
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
const PIN_END = 0.85;

/* ── badge: lit when it's the current stop ─────────────────────── */
const Badge = ({ item, current, size = 'h-14 w-14 rounded-[14px]' }: { item: BlockItem; current?: boolean; size?: string }) => (
  <div
    className={`flex ${size} rotate-45 items-center justify-center transition-all duration-500 ${
      current
        ? 'bg-portfolio-gold text-white shadow-[0_16px_34px_-10px_rgba(234,112,8,0.75)]'
        : 'bg-white/[0.06] text-white/85 ring-1 ring-white/20 backdrop-blur-sm'
    }`}
  >
    <span className="-rotate-45">
      <item.Icon size={22} strokeWidth={2.2} />
    </span>
  </div>
);

/* ── vertical route inside a dark panel (mobile / reduced) ─────── */
const StationsVerticalDark = () => (
  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e0d0c] p-6 sm:p-8">
    <div
      className="pointer-events-none absolute inset-0"
      style={{ background: 'radial-gradient(120% 70% at 50% -15%, rgba(234,112,8,0.16), transparent 60%)' }}
      aria-hidden
    />
    <span
      className="pointer-events-none absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
      aria-hidden
    />
    <div className="relative">
      <span className="absolute bottom-7 left-[27px] top-7 border-l-2 border-dashed border-white/25" aria-hidden />
      <div className="space-y-10">
        {items.map((item, i) => (
          <div key={item.index} className="relative pl-[76px]">
            <span className="absolute left-0 top-0">
              <Badge item={item} current={i === 0} />
            </span>
            <div className="mb-1.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
              <span className="font-mono text-xs font-semibold text-portfolio-gold">{item.index}</span>
              <span className="rounded-full border border-white/20 px-2 py-0.5 font-mono text-[10px] tracking-[0.14em] text-white/55">
                {item.chip}
              </span>
            </div>
            <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-1.5 max-w-[46ch] text-sm leading-relaxed text-[#a8a29e]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const JourneyNightBlocks = () => {
  const reduced = !!useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start start', 'end end'] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(v >= PIN_END ? 2 : v >= 0.43 ? 1 : 0);
  });

  const x = useTransform(scrollYProgress, [0, PIN_END], ['0vw', '-200vw'], { clamp: true });
  const fill = useTransform(scrollYProgress, [0, 1], ['50vw', '250vw'], { clamp: true });
  const hintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0], { clamp: true });

  if (reduced) {
    return (
      <div className="mx-auto mt-12 w-full max-w-xl px-1">
        <StationsVerticalDark />
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
      {/* ── md+: pinned full-bleed dark band ───────────────────── */}
      <div ref={wrapRef} className="relative ml-[calc(50%_-_50vw)] hidden w-screen md:block" style={{ height: '400vh' }}>
        <div className="sticky top-0 h-screen overflow-hidden bg-[#0e0d0c]">
          {/* chrome: warm glow, grain, vignette */}
          <div
            className="pointer-events-none absolute inset-0 z-20"
            style={{ background: 'radial-gradient(115% 80% at 50% -18%, rgba(234,112,8,0.16), transparent 58%)' }}
            aria-hidden
          />
          <span
            className="pointer-events-none absolute inset-0 z-20 opacity-[0.05]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-20"
            style={{ boxShadow: 'inset 0 0 160px 50px rgba(0,0,0,0.65)' }}
            aria-hidden
          />

          <motion.div className="relative h-full w-[300vw]" style={{ x }}>
            {/* stations */}
            {items.map((item, i) => (
              <div
                key={item.index}
                className={`absolute top-0 flex h-full w-screen items-center ${
                  i % 2 === 1 ? 'justify-end pr-[7vw]' : 'pl-[7vw]'
                }`}
              >
                <div
                  className={`relative max-w-[560px] transition-opacity duration-700 ${
                    i === active ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -top-10 z-0 select-none font-display text-[clamp(7rem,15vw,12rem)] font-black leading-none text-transparent transition-all duration-700 [-webkit-text-stroke:2px_rgba(255,255,255,0.10)] ${
                      i % 2 === 1 ? '-right-6' : '-left-6'
                    }`}
                    style={i === active ? { WebkitTextStroke: '2px rgba(234,112,8,0.45)' } : undefined}
                  >
                    {item.index}
                  </span>
                  <item.Icon
                    aria-hidden
                    className={`pointer-events-none absolute bottom-0 z-0 text-white/[0.05] ${i % 2 === 1 ? '-left-24' : '-right-24'}`}
                    size={190}
                    strokeWidth={1}
                  />
                  <div className="relative z-10">
                    <div className="mb-6">
                      <Badge item={item} current={i === active} />
                    </div>
                    <h3 className="font-display text-[clamp(1.9rem,3.2vw,2.9rem)] font-bold leading-[1.08] tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-[44ch] text-base leading-relaxed text-[#a8a29e] lg:text-lg">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* glowing route + progress + stops */}
            <div className="absolute left-0 top-[74%] h-[7px] w-[300vw]">
              <div className="h-[7px] w-full rounded-full bg-white/12" />
              <motion.div
                className="absolute left-0 top-0 h-[7px] rounded-full bg-portfolio-gold shadow-[0_0_18px_rgba(234,112,8,0.85)]"
                style={{ width: fill }}
              >
                {/* travelling light head */}
                <span
                  className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.95)]"
                  aria-hidden
                />
              </motion.div>
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[7px]"
                style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.75) 0 14px, transparent 14px 30px)',
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
                        ? 'scale-110 border-portfolio-gold bg-portfolio-gold shadow-[0_0_14px_rgba(234,112,8,0.75)]'
                        : 'border-white/45 bg-[#0e0d0c]'
                    }`}
                    style={{ width: 18, height: 18, left: 0, top: '50%' }}
                    aria-hidden
                  />
                  <span
                    className={`absolute top-[16px] -translate-x-1/2 whitespace-nowrap rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.16em] transition-colors duration-300 ${
                      active >= i
                        ? 'border-portfolio-gold bg-portfolio-gold text-[#121110]'
                        : 'border-white/20 bg-[#0e0d0c]/80 text-white/55 backdrop-blur-sm'
                    }`}
                    style={{ left: 0 }}
                  >
                    {item.index} · {item.chip}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.span
            style={{ opacity: hintOpacity }}
            className="pointer-events-none absolute bottom-7 left-1/2 z-30 -translate-x-1/2 font-mono text-[11px] tracking-[0.3em] text-white/50"
          >
            SCROLL →
          </motion.span>
        </div>
      </div>

      {/* ── below md: dark panel, vertical route ───────────────── */}
      <div className="mx-auto mt-8 w-full max-w-xl px-4 md:hidden">
        <StationsVerticalDark />
      </div>
    </motion.div>
  );
};

export default JourneyNightBlocks;
