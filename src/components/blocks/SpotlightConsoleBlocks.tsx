import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import { Rocket, Users, Clock, type LucideIcon } from 'lucide-react';

/**
 * Concept 3 — "Dark spotlight console"
 * Three near-black console cards on the white section. A warm sheen tracks the
 * pointer across each face, an orange hairline draws across the top on hover,
 * and a single light sweep plays once as each card enters. Restrained by design.
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
    Icon: Rocket,
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
    Icon: Clock,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const ConsoleCard = ({ item, order, reduced }: { item: BlockItem; order: number; reduced: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const sx = useSpring(px, { stiffness: 140, damping: 20, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 140, damping: 20, mass: 0.4 });
  const sheen = useMotionTemplate`radial-gradient(430px circle at ${sx}% ${sy}%, rgba(255,243,232,0.085), rgba(255,243,232,0.03) 42%, transparent 68%)`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width) * 100);
    py.set(((e.clientY - r.top) / r.height) * 100);
  };

  const d = order * 0.14;

  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: reduced ? 0 : 0.75, delay: reduced ? 0 : d, ease }}
      className="flex-1 min-w-0"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#141210] p-6 sm:p-7 shadow-[0_24px_50px_-28px_rgba(18,17,16,0.6)] transition-transform duration-300 hover:-translate-y-1 cursor-target"
      >
        {/* one-shot light sweep on entrance */}
        {!reduced && (
          <motion.span
            aria-hidden="true"
            initial={{ x: '-45%' }}
            whileInView={{ x: '150%' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.05, delay: d + 0.35, ease }}
            className="pointer-events-none absolute -inset-y-8 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
          />
        )}

        {/* pointer-tracked warm sheen */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: sheen }}
        />

        {/* hover: orange hairline draws across the top */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#ea7008] to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100"
        />

        {/* ghost number */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-4 right-3 select-none text-[5.5rem] font-black leading-none font-display text-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90 [-webkit-text-stroke:1.5px_rgba(255,255,255,0.16)]"
        >
          {item.index}
        </span>

        {/* icon */}
        <div className="relative mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-[#8a8077] transition-all duration-300 group-hover:border-portfolio-gold/60 group-hover:bg-portfolio-gold/10 group-hover:text-portfolio-gold">
          <item.Icon size={21} strokeWidth={2.1} />
        </div>

        <h3 className="relative mb-2 flex items-baseline gap-2 text-base font-bold font-display tracking-tight text-white sm:text-lg">
          <span className="shrink-0 font-mono text-sm font-semibold text-portfolio-gold">{item.index}</span>
          <span>{item.title}</span>
        </h3>
        <p className="relative text-sm leading-relaxed text-[#a89f91]">{item.text}</p>
      </div>
    </motion.div>
  );
};

const SpotlightConsoleBlocks = () => {
  const reduced = !!useReducedMotion();

  return (
    <div className="mt-12 w-full max-w-6xl">
      <div className="flex flex-col gap-4 sm:gap-5 md:flex-row md:gap-5">
        {items.map((item, i) => (
          <ConsoleCard key={item.title} item={item} order={i} reduced={reduced} />
        ))}
      </div>
    </div>
  );
};

export default SpotlightConsoleBlocks;
