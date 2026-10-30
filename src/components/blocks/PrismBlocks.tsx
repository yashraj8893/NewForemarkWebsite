import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { Code2, Users, CalendarClock, type LucideIcon } from 'lucide-react';

/**
 * Concept 9 — "Prism" (style 2: glass + gradient, no roadmap)
 * Full-bleed warm gradient field: slow-drifting blurred orange/amber orbs,
 * film grain, and a pointer-following lens light (fine pointers, desktop).
 * Three frosted-glass panels float on top — blur-in entrance, specular top
 * edge, lift + brighten on hover. Reduced motion → static field, no lens.
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

const ease = [0.22, 1, 0.36, 1] as const;

/* drifting blurred orbs */
const orbs = [
  { cls: '-left-24 -top-28 h-[440px] w-[440px]', color: 'rgba(234,112,8,0.55)', dur: 21 },
  { cls: '-right-28 top-1/4 h-[400px] w-[400px]', color: 'rgba(245,158,11,0.45)', dur: 25 },
  { cls: 'bottom-[-30%] left-[28%] h-[480px] w-[480px]', color: 'rgba(194,65,12,0.38)', dur: 29 },
  { cls: 'left-[38%] top-[-22%] h-[300px] w-[300px]', color: 'rgba(255,214,170,0.75)', dur: 19 },
];

const GlassPanel = ({ item, i, reduced }: { item: BlockItem; i: number; reduced: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: reduced ? 0 : 0.75, delay: reduced ? 0 : i * 0.14, ease }}
    className="group relative"
  >
    <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/55 p-6 shadow-[0_24px_60px_-28px_rgba(18,17,16,0.45)] ring-1 ring-inset ring-white/50 backdrop-blur-xl transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/95 before:to-transparent hover:-translate-y-1.5 hover:bg-white/65 hover:shadow-[0_32px_70px_-26px_rgba(18,17,16,0.5)] sm:p-7">
      <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-white/80 bg-white/70 text-portfolio-gold shadow-[0_10px_24px_-12px_rgba(234,112,8,0.55)] transition-transform duration-300 group-hover:-translate-y-0.5">
        <item.Icon size={21} strokeWidth={2} />
      </div>
      <div className="mb-1.5 flex items-baseline gap-2.5">
        <span className="font-mono text-xs font-semibold text-portfolio-gold">{item.index}</span>
        <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-[#121110] sm:text-xl">
          {item.title}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-[#5c544d]">{item.text}</p>
    </div>
  </motion.div>
);

const PrismBlocks = () => {
  const reduced = !!useReducedMotion();
  const bandRef = useRef<HTMLElement>(null);

  /* pointer lens light (spring-tracked, desktop fine pointers only) */
  const lx = useMotionValue(-500);
  const ly = useMotionValue(-500);
  const lensX = useSpring(lx, { stiffness: 130, damping: 22, mass: 0.6 });
  const lensY = useSpring(ly, { stiffness: 130, damping: 22, mass: 0.6 });

  const onMove = (e: React.PointerEvent) => {
    if (reduced || e.pointerType !== 'mouse') return;
    const r = bandRef.current?.getBoundingClientRect();
    if (!r) return;
    lx.set(e.clientX - r.left);
    ly.set(e.clientY - r.top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: reduced ? 0 : 0.7, ease }}
      className="mt-12 w-full"
    >
      <section
        ref={bandRef}
        onPointerMove={onMove}
        className="relative ml-[calc(50%_-_50vw)] w-screen overflow-hidden bg-[#faf6f0] py-16 sm:py-20 lg:py-24"
      >
        {/* drifting orbs */}
        {!reduced &&
          orbs.map((o, i) => (
            <motion.span
              key={i}
              aria-hidden
              className={`pointer-events-none absolute rounded-full blur-[80px] ${o.cls}`}
              style={{ background: o.color }}
              animate={{ x: [0, 70, -50, 0], y: [0, -50, 40, 0], scale: [1, 1.14, 0.94, 1] }}
              transition={{ duration: o.dur, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        {reduced &&
          orbs.map((o, i) => (
            <span
              key={i}
              aria-hidden
              className={`pointer-events-none absolute rounded-full blur-[80px] ${o.cls}`}
              style={{ background: o.color }}
            />
          ))}

        {/* pointer lens light */}
        {!reduced && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 hidden h-[420px] w-[420px] rounded-full md:block"
            style={{
              x: lensX,
              y: lensY,
              marginLeft: -210,
              marginTop: -210,
              background: 'radial-gradient(circle, rgba(255,255,255,0.65), rgba(255,255,255,0) 65%)',
            }}
          />
        )}

        {/* grain */}
        <span
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-6xl gap-5 px-6 sm:gap-6 sm:px-8 md:grid-cols-3">
          {items.map((item, i) => (
            <GlassPanel key={item.index} item={item} i={i} reduced={reduced} />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default PrismBlocks;
