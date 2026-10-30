import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, useSpring, useMotionTemplate } from 'framer-motion';
import { Rocket, Users, Clock, type LucideIcon } from 'lucide-react';

/**
 * Concept 10 — "Halo Cards" (v4)
 * v2-approved look kept (white page, halos, pointer tilt, glare, layered Z,
 * slab edge), ghost numerals removed — the inline mono index already carries
 * them. Revert point for v2 (with numerals):
 * blocks-archive/HaloCardsBlocks-v2-3d-approved.tsx
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
const tilts = [-1.5, 0, 1.5] as const;  /* roll mirrors: L leans left, middle straight, R leans right */
const restY = [-5, 0, 6] as const;      /* yaw: right leans a touch more for proportion */
const restX = [2, 0, 2] as const;       /* pitch: middle flat too */

const HaloCard = ({ item, i, reduced }: { item: BlockItem; i: number; reduced: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  /* float only while the card is near the viewport — zero cost off-screen */
  const visible = useInView(ref, { margin: '150px', once: false });
  const [hot, setHot] = useState(false);
  const [ripple, setRipple] = useState<{ k: number; x: number; y: number } | null>(null);

  const rotateX = useSpring(restX[i], { stiffness: 160, damping: 17, mass: 0.5 });
  const rotateY = useSpring(restY[i], { stiffness: 160, damping: 17, mass: 0.5 });
  const glareX = useSpring(200, { stiffness: 130, damping: 20, mass: 0.5 });
  const glareY = useSpring(120, { stiffness: 130, damping: 20, mass: 0.5 });
  const haloX = useSpring(0, { stiffness: 90, damping: 18, mass: 0.7 });
  const haloY = useSpring(0, { stiffness: 90, damping: 18, mass: 0.7 });
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}px ${glareY}px, rgba(255,255,255,0.45), rgba(255,255,255,0.10) 40%, transparent 62%)`;

  const onMove = (e: React.PointerEvent) => {
    if (reduced || e.pointerType !== 'mouse') return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rotateY.set(restY[i] + (px - 0.5) * 16);
    rotateX.set(restX[i] - (py - 0.5) * 12);
    glareX.set(e.clientX - r.left);
    glareY.set(e.clientY - r.top);
    haloX.set((px - 0.5) * -26); /* halo drifts opposite the pointer */
    haloY.set((py - 0.5) * -16);
  };

  const onLeave = () => {
    setHot(false);
    rotateY.set(restY[i]);
    rotateX.set(restX[i]);
    haloX.set(0);
    haloY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 44, rotate: tilts[i] + 5, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilts[i], scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : i * 0.14, ease }}
      whileHover={reduced ? undefined : { y: -8, rotate: 0, transition: { duration: 0.35, ease } }}
      whileTap={reduced ? undefined : { scale: 0.985 }}
      className={`group relative cursor-target ${i !== 1 ? 'md:mt-9' : ''}`}
      style={{ perspective: 1000 }}
    >
      {/* halo pooled beneath the card — drifts opposite the pointer */}
      <motion.span
        aria-hidden
        className="absolute inset-x-6 -bottom-5 h-24 rounded-full bg-gradient-to-r from-portfolio-gold/30 via-amber-400/25 to-portfolio-gold/30 blur-3xl transition-all duration-500 group-hover:from-portfolio-gold/40 group-hover:via-amber-400/32 group-hover:to-portfolio-gold/40"
        style={{ x: haloX, y: haloY }}
      />

      {/* 3D unit: rotates toward pointer, holds slab + face in depth */}
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerEnter={(e) => {
          if (e.pointerType === 'mouse') setHot(true);
        }}
        onPointerLeave={onLeave}
        onPointerDown={(e) => {
          if (reduced) return;
          const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
          setRipple({ k: Date.now(), x: e.clientX - r.left, y: e.clientY - r.top });
        }}
        animate={visible && !reduced ? { y: [0, -5, 0] } : false}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: -i * 1.8 }}
        style={
          reduced
            ? { rotateX: restX[i], rotateY: restY[i], transformStyle: 'preserve-3d' }
            : { rotateX, rotateY, transformStyle: 'preserve-3d' }
        }
        className="relative"
      >
        {/* slab edge — the card's physical thickness */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-[28px] bg-[#efe3d2] shadow-[0_26px_50px_-28px_rgba(180,83,9,0.55)] transition-shadow duration-300 group-hover:shadow-[0_34px_62px_-26px_rgba(180,83,9,0.6)]"
          style={{ transform: 'translateY(8px) translateZ(-16px)' }}
        />

        {/* rotating ember beam (border) — soft at rest, spins on hover */}
        <span
          aria-hidden
          className="halo-beam absolute -inset-[1.5px] opacity-40 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* card face */}
        <div
          className="relative overflow-hidden rounded-[28px] border border-[#f3e8db] bg-gradient-to-b from-white to-[#fdf6ec] p-6 shadow-[0_28px_60px_-30px_rgba(234,112,8,0.42),0_10px_28px_-16px_rgba(234,112,8,0.28)] transition-[border-color,box-shadow] duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/90 before:to-transparent group-hover:border-portfolio-gold/55 group-hover:shadow-[0_36px_74px_-28px_rgba(234,112,8,0.55),0_12px_32px_-16px_rgba(234,112,8,0.35)] sm:p-7"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* click ripple */}
          {ripple && (
            <motion.span
              key={ripple.k}
              aria-hidden
              className="pointer-events-none absolute z-[15] h-8 w-8 rounded-full bg-portfolio-gold/50"
              style={{ left: ripple.x - 16, top: ripple.y - 16 }}
              initial={{ scale: 0, opacity: 0.75 }}
              animate={{ scale: 13, opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              onAnimationComplete={() => setRipple(null)}
            />
          )}

          {/* bottom hairline draws left→right on hover */}
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 z-[15] h-[3px] origin-left scale-x-0 bg-gradient-to-r from-portfolio-gold via-amber-400 to-transparent transition-transform duration-500 group-hover:scale-x-100"
          />

          {/* icon chip — centered */}
          <div
            className="relative z-10 mx-auto mb-7 grid h-12 w-12 place-items-center rounded-2xl border border-[#f7e3cd] bg-[#fff3e3] text-portfolio-gold shadow-[0_8px_18px_-10px_rgba(234,112,8,0.45)] transition-all duration-300 group-hover:border-[#ff9a4d] group-hover:bg-gradient-to-br group-hover:from-[#ff9a4d] group-hover:to-[#ea7008] group-hover:text-white group-hover:shadow-[0_12px_26px_-10px_rgba(234,112,8,0.7)]"
            style={{ transform: 'translateZ(34px)' }}
          >
            <span aria-hidden className="chip-pulse pointer-events-none absolute inset-0 rounded-2xl border-2 border-portfolio-gold/70" />
            <item.Icon size={21} strokeWidth={2.1} className="transition-transform duration-300 group-hover:rotate-6" />
          </div>

          <div className="relative z-10 flex items-baseline gap-2.5" style={{ transform: 'translateZ(24px)' }}>
            <span className="shrink-0 bg-gradient-to-r from-[#ea7008] to-[#f59e0b] bg-clip-text font-mono text-sm font-semibold text-transparent">{item.index}</span>
            <h3 className="font-display text-lg font-bold leading-[1.2] tracking-tight text-[#121110] sm:text-xl">
              {item.title}
            </h3>
          </div>
          <p className="relative z-10 mt-3 text-sm leading-relaxed text-[#6b635b] sm:text-[15px]" style={{ transform: 'translateZ(18px)' }}>
            {item.text}
          </p>

          {/* pointer glare */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[5] transition-opacity duration-300"
            style={{ background: glareBg, opacity: hot ? 1 : 0 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const HaloCardsBlocks = () => {
  const reduced = !!useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: reduced ? 0 : 0.6, ease }}
      className="mx-auto mt-12 w-full max-w-6xl"
    >
      <div className="grid gap-7 md:grid-cols-3 md:gap-8">
        {items.map((item, i) => (
          <HaloCard key={item.index} item={item} i={i} reduced={reduced} />
        ))}
      </div>
    </motion.div>
  );
};

export default HaloCardsBlocks;
