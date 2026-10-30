import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from 'framer-motion';
import { Rocket, Users, Clock, type LucideIcon } from 'lucide-react';

/**
 * Concept 1 — "Isometric floating slabs"
 * Three perspective-tilted slabs on a shared isometric plane, extruded edges,
 * pointer-tracking specular glare, staggered fly-in on scroll.
 * One of three candidate designs for the Services "why us" blocks.
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

const Slab = ({ item, order }: { item: BlockItem; order: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Pointer position (0..1) → tilt + glare
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), { stiffness: 160, damping: 18 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-8, 8]), { stiffness: 160, damping: 18 });
  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(340px circle at ${glareX} ${glareY}, rgba(234,112,8,0.13), rgba(234,112,8,0.04) 42%, transparent 68%)`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 72 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.85, delay: order * 0.16, ease: [0.22, 1, 0.36, 1] }}
      className="flex-1"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        whileHover={{ y: -10 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative cursor-target"
      >
        {/* extruded underside — the "thickness" of the slab */}
        <div
          className="absolute inset-0 rounded-[1.35rem] bg-[#ddd4c6] shadow-[0_36px_70px_-28px_rgba(18,17,16,0.45)]"
          style={{ transform: 'translateZ(-18px)' }}
          aria-hidden="true"
        />
        {/* orange under-glow on hover */}
        <div
          className="absolute -inset-1 rounded-[1.6rem] bg-portfolio-gold/0 blur-xl transition-all duration-500 group-hover:bg-portfolio-gold/25"
          style={{ transform: 'translateZ(-26px)' }}
          aria-hidden="true"
        />

        {/* card face */}
        <div
          className="relative overflow-hidden rounded-[1.35rem] border border-portfolio-gold/30 bg-white p-6 sm:p-7 shadow-[0_18px_40px_-18px_rgba(18,17,16,0.25)] transition-shadow duration-500 group-hover:shadow-[0_44px_80px_-30px_rgba(234,112,8,0.4)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/50 before:to-transparent"
        >
          {/* ghost engraved number */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-3 right-3 select-none text-[5.5rem] font-black leading-none font-display text-transparent opacity-70 [-webkit-text-stroke:1.5px_rgba(234,112,8,0.35)]"
          >
            {item.index}
          </span>

          {/* floating icon chip (pops out of the plane) */}
          <div
            className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-portfolio-gold/40 bg-portfolio-gold/10 text-portfolio-gold shadow-[0_10px_22px_-8px_rgba(234,112,8,0.5)] transition-all duration-300 group-hover:bg-portfolio-gold group-hover:text-white"
            style={{ transform: 'translateZ(46px)' }}
          >
            <item.Icon size={22} strokeWidth={2.2} />
          </div>

          <div style={{ transform: 'translateZ(24px)' }}>
            <h3 className="mb-2 flex items-baseline gap-2 text-base font-bold font-display tracking-tight text-[#121110] sm:text-lg">
              <span className="shrink-0 font-mono text-sm font-semibold text-portfolio-gold">
                {item.index}
              </span>
              <span>{item.title}</span>
            </h3>
            <p className="text-sm leading-relaxed text-[#5c544d]">{item.text}</p>
          </div>

          {/* pointer-tracking specular glare */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[1.35rem]"
            style={{ background: glare }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const IsometricBlocks = () => {
  return (
    <div className="[perspective:1600px] mt-12 max-w-6xl w-full">
      {/* shared isometric plane */}
      <div
        className="flex flex-col gap-6 sm:flex-row sm:gap-5 md:gap-6 [transform-style:preserve-3d]"
        style={{ transform: 'rotateX(11deg) rotateZ(-1.2deg)' }}
      >
        {items.map((item, i) => (
          <Slab key={item.title} item={item} order={i} />
        ))}
      </div>
    </div>
  );
};

export default IsometricBlocks;
