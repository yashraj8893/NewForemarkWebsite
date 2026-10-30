import { useRef } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { Code2, Users, CalendarClock, type LucideIcon } from 'lucide-react';

/**
 * Concept 8 — "Dark Band" (style 1: dark cinematic, NO roadmap)
 * Full-bleed near-black band on the white page: three free-standing columns
 * (no cards, no rails, no stops). Ghost numerals, glass icon tiles with warm
 * glow, hairline top rules, one-shot light sweep per column on reveal, grain
 * + vignette + warm top glow. Stacked mobile, instant under reduced motion.
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

const Column = ({ item, i, reduced }: { item: BlockItem; i: number; reduced: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden pt-7 ${i > 0 ? 'md:border-l md:border-white/10 md:pl-9' : ''}`}
    >
      {/* hairline top rule */}
      <span
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ea7008]/55 to-transparent"
        aria-hidden
      />

      {/* one-shot light sweep on reveal */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 -skew-x-12"
        style={{
          background:
            'linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.05) 45%, rgba(234,112,8,0.14) 55%, transparent 100%)',
        }}
        initial={{ x: '-60%', opacity: 0 }}
        animate={inView ? { x: '340%', opacity: [0, 1, 1, 0] } : {}}
        transition={{ duration: reduced ? 0 : 1.15, delay: reduced ? 0 : 0.3 + i * 0.16, ease: 'easeInOut' }}
      />

      {/* ghost numeral */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 right-0 select-none font-display text-[clamp(4.5rem,8vw,6.5rem)] font-black leading-none text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.09)] transition-all duration-500 group-hover:[-webkit-text-stroke:2px_rgba(234,112,8,0.4)]"
      >
        {item.index}
      </span>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.12 + i * 0.16, ease }}
        className="relative"
      >
        <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-portfolio-gold shadow-[0_0_28px_-8px_rgba(234,112,8,0.55)] backdrop-blur-sm transition-all duration-300 group-hover:border-portfolio-gold/45 group-hover:shadow-[0_0_34px_-6px_rgba(234,112,8,0.75)]">
          <item.Icon size={21} strokeWidth={2} />
        </div>
        <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-[#a8a29e] sm:text-[15px]">{item.text}</p>
      </motion.div>
    </div>
  );
};

const DarkBandBlocks = () => {
  const reduced = !!useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: reduced ? 0 : 0.7, ease }}
      className="mt-12 w-full"
    >
      <section className="relative ml-[calc(50%_-_50vw)] w-screen overflow-hidden bg-[#0d0c0b] py-16 sm:py-20 lg:py-24">
        {/* chrome: warm top glow, grain, vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(110% 75% at 50% -20%, rgba(234,112,8,0.15), transparent 60%)' }}
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
        <div
          className="pointer-events-none absolute inset-0"
          style={{ boxShadow: 'inset 0 0 140px 45px rgba(0,0,0,0.6)' }}
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 md:grid-cols-3 md:gap-9">
          {items.map((item, i) => (
            <Column key={item.index} item={item} i={i} reduced={reduced} />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default DarkBandBlocks;
