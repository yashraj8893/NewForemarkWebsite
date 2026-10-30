import { motion, useReducedMotion } from 'framer-motion';
import { Rocket, Users, Clock, type LucideIcon } from 'lucide-react';

/**
 * Concept 2 — "Circuit pulse"
 * Three node cards wired together by PCB-style traces. On scroll, each trace
 * draws itself and an orange signal pulse runs across it, powering up the next
 * node as it arrives. Motion only ever enhances a fully-readable resting state.
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

/* ── choreography ─────────────────────────────────────────────── */
const cardDelay = (i: number) => 0.15 + i * 0.6; // 0.15 / 0.75 / 1.35
const connDelay = (i: number) => 0.45 + i * 0.6; // 0.45 / 1.05

/* ── trace geometry ───────────────────────────────────────────── */
const H_PATH = 'M2 24 H22 L38 10 H58 L74 24 H94';
const V_PATH = 'M20 2 V26 L34 42 V66 L20 82 V94';

const ease = [0.22, 1, 0.36, 1] as const;

/* ── the wire between two nodes ───────────────────────────────── */
const Connector = ({ order, reduced }: { order: number; reduced: boolean }) => {
  const d = connDelay(order);
  const pulse = (
    <circle
      r={3.5}
      fill="#ea7008"
      style={{
        offsetPath: `path("${H_PATH}")`,
        animation: reduced ? 'none' : `conn-pulse 0.62s cubic-bezier(0.4,0,0.2,1) ${d}s both`,
        filter: 'drop-shadow(0 0 5px rgba(234,112,8,0.85))',
      }}
    />
  );
  const pulseV = (
    <circle
      r={3.5}
      fill="#ea7008"
      style={{
        offsetPath: `path("${V_PATH}")`,
        animation: reduced ? 'none' : `conn-pulse 0.62s cubic-bezier(0.4,0,0.2,1) ${d}s both`,
        filter: 'drop-shadow(0 0 5px rgba(234,112,8,0.85))',
      }}
    />
  );

  return (
    <>
      {/* horizontal trace (md+) */}
      <div className="hidden md:block md:w-14 lg:w-20 shrink-0 self-stretch relative" aria-hidden="true">
        <svg width="96" height="48" viewBox="0 0 96 48" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible">
          <path d={H_PATH} fill="none" stroke="#ded7cd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <motion.path
            d={H_PATH}
            fill="none"
            stroke="#ea7008"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : d, ease }}
          />
          <circle cx="2" cy="24" r="3" fill="#fff" stroke="#ded7cd" strokeWidth="2" />
          <circle cx="94" cy="24" r="3" fill="#fff" stroke="#ded7cd" strokeWidth="2" />
          {!reduced && pulse}
        </svg>
      </div>

      {/* vertical trace (mobile) */}
      <div className="flex md:hidden justify-center h-10 shrink-0 relative" aria-hidden="true">
        <svg width="40" height="96" viewBox="0 0 40 96" className="absolute left-1/2 -translate-x-1/2 overflow-visible">
          <path d={V_PATH} fill="none" stroke="#ded7cd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <motion.path
            d={V_PATH}
            fill="none"
            stroke="#ea7008"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : d, ease }}
          />
          <circle cx="20" cy="2" r="3" fill="#fff" stroke="#ded7cd" strokeWidth="2" />
          <circle cx="20" cy="94" r="3" fill="#fff" stroke="#ded7cd" strokeWidth="2" />
          {!reduced && pulseV}
        </svg>
      </div>
    </>
  );
};

/* ── one node card ────────────────────────────────────────────── */
const Node = ({ item, order, reduced }: { item: BlockItem; order: number; reduced: boolean }) => {
  const d = reduced ? 0 : cardDelay(order);

  return (
    <motion.div
      custom={order}
      initial="armed"
      whileInView="fired"
      viewport={{ once: true, margin: '-40px' }}
      variants={{ armed: {}, fired: {} }}
      transition={{ duration: 0.01, delay: d }}
      className="flex-1 min-w-0"
    >
      <div className="group relative h-full rounded-2xl border border-[#ebe5df] bg-white p-6 sm:p-7 shadow-[0_10px_30px_-16px_rgba(18,17,16,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-portfolio-gold/50 hover:shadow-[0_24px_48px_-24px_rgba(234,112,8,0.35)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/35 before:to-transparent">
        {/* header row: node tag + status LED */}
        <div className="mb-5 flex items-center justify-between">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a8a094] transition-colors duration-500 group-hover:text-portfolio-gold">
            node {item.index}
          </span>
          <span className="relative flex h-2.5 w-2.5">
            <motion.span
              variants={{
                armed: { backgroundColor: '#d6cec3', boxShadow: '0 0 0 0 rgba(234,112,8,0)' },
                fired: {
                  backgroundColor: '#ea7008',
                  boxShadow: '0 0 0 0 rgba(234,112,8,0.45)',
                  transition: { duration: 0.4, delay: d },
                },
              }}
              className="h-2.5 w-2.5 rounded-full"
            />
            {!reduced && (
              <motion.span
                variants={{
                  armed: { scale: 1, opacity: 0 },
                  fired: {
                    scale: [1, 2.4],
                    opacity: [0.55, 0],
                    transition: { duration: 1.6, repeat: Infinity, delay: d + 0.3, ease: 'easeOut' },
                  },
                }}
                className="absolute inset-0 rounded-full bg-portfolio-gold"
              />
            )}
          </span>
        </div>

        {/* icon + copy */}
        <motion.div
          variants={{
            armed: { backgroundColor: 'rgba(234,112,8,0)', borderColor: 'rgba(234,112,8,0.3)', color: '#b4ab9d' },
            fired: {
              backgroundColor: 'rgba(234,112,8,0.1)',
              borderColor: 'rgba(234,112,8,1)',
              color: '#ea7008',
              transition: { duration: 0.5, delay: d },
            },
          }}
          className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border"
        >
          <item.Icon size={21} strokeWidth={2.1} />
        </motion.div>

        <motion.h3
          variants={{
            armed: { color: '#4b453f' },
            fired: { color: '#121110', transition: { duration: 0.5, delay: d } },
          }}
          className="mb-2 flex items-baseline gap-2 text-base font-bold font-display tracking-tight sm:text-lg"
        >
          <span className="shrink-0 font-mono text-sm font-semibold text-portfolio-gold">{item.index}</span>
          <span>{item.title}</span>
        </motion.h3>
        <p className="text-sm leading-relaxed text-[#5c544d]">{item.text}</p>
      </div>
    </motion.div>
  );
};

const CircuitPulseBlocks = () => {
  const reduced = !!useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: reduced ? 0 : 0.7, ease }}
      className="mt-12 w-full max-w-6xl"
    >
      <div className="flex flex-col items-stretch md:flex-row md:items-center">
        <Node item={items[0]} order={0} reduced={reduced} />
        <Connector order={0} reduced={reduced} />
        <Node item={items[1]} order={1} reduced={reduced} />
        <Connector order={1} reduced={reduced} />
        <Node item={items[2]} order={2} reduced={reduced} />
      </div>
    </motion.div>
  );
};

export default CircuitPulseBlocks;
