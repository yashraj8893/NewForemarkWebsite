import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ContactShadows, Environment, Float, Lightformer, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Users, CalendarClock, type LucideIcon } from 'lucide-react';

/**
 * Concept 5 — "Foundry Stage 3D" (v2: theme-fitted, boxes choreographed in)
 * Light exhibit stage matching the site's warm-white/gold language: dark
 * pedestals with orange rims, glass product cubes with glowing cores, token
 * on the floor rail. The exhibit cards are part of the sequence — per-column
 * rise in 3D → connector hairline draws down into each card → card lands.
 * Performance: three.js loads only in this route's async chunk; the Canvas
 * mounts ONLY while the section is in view (frameloop off-screen = no GPU);
 * dpr capped; static local environment (no network HDRIs); reduced motion →
 * one-shot static frame, no float/parallax/glide.
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

const PED_X = [-3.5, 0, 3.5] as const;
const ease = [0.22, 1, 0.36, 1] as const;

/* ── radial glow sprite texture (procedural, no assets) ────────── */
const useGlowTexture = () =>
  useMemo(() => {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d')!;
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(255,178,120,1)');
    g.addColorStop(0.35, 'rgba(255,130,60,0.4)');
    g.addColorStop(1, 'rgba(255,120,50,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  }, []);

/* ── pedestal: dark body + brand-orange rim (pops on light floor) ─ */
const Pedestal = () => (
  <group>
    <mesh position={[0, 0.06, 0]}>
      <cylinderGeometry args={[1.2, 1.26, 0.12, 64]} />
      <meshStandardMaterial color="#23201b" metalness={0.3} roughness={0.55} />
    </mesh>
    <mesh position={[0, 0.38, 0]}>
      <cylinderGeometry args={[0.98, 1.05, 0.52, 64]} />
      <meshStandardMaterial color="#1a1713" metalness={0.25} roughness={0.5} />
    </mesh>
    <mesh position={[0, 0.645, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.99, 0.015, 12, 72]} />
      <meshStandardMaterial color="#ea7008" emissive="#ea7008" emissiveIntensity={1.7} roughness={0.4} />
    </mesh>
  </group>
);

/* ── glass cube with glowing core ──────────────────────────────── */
const GlassCube = ({ speed }: { speed: number }) => {
  const glowTex = useGlowTexture();
  useEffect(() => () => glowTex.dispose(), [glowTex]);

  const body = (
    <group position={[0, 1.8, 0]}>
      <RoundedBox args={[1.28, 1.28, 1.28]} radius={0.14} smoothness={5}>
        <meshPhysicalMaterial
          transmission={0.94}
          thickness={1.1}
          roughness={0.07}
          ior={1.45}
          clearcoat={1}
          clearcoatRoughness={0.06}
          color="#ffffff"
          metalness={0}
        />
      </RoundedBox>
      <RoundedBox args={[0.56, 0.56, 0.56]} radius={0.07} smoothness={4}>
        <meshStandardMaterial color="#ea7008" emissive="#ff7a1a" emissiveIntensity={2.4} roughness={0.35} />
      </RoundedBox>
      <pointLight color="#ff9347" intensity={8} distance={5.5} decay={2} />
      <sprite scale={[3.6, 3.6, 1]}>
        <spriteMaterial
          map={glowTex}
          color="#ff8a3d"
          transparent
          opacity={0.55}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </sprite>
    </group>
  );

  if (speed < 0) return <>{body}</>;
  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.5} floatingRange={[-0.07, 0.12]}>
      {body}
    </Float>
  );
};

/* ── one column: pedestal + cube, staggered rise on mount ──────── */
const Column = ({ index, reduced, speed }: { index: number; reduced: boolean; speed: number }) => {
  const ref = useRef<THREE.Group>(null);
  const t = useRef(0);

  useFrame((_, dt) => {
    if (!ref.current) return;
    const d = Math.min(dt, 0.05);
    if (reduced) {
      ref.current.position.y = 0;
      return;
    }
    t.current += d;
    const risen = t.current > 0.18 + index * 0.16;
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, risen ? 0 : -1.1, 3.4, d);
  });

  return (
    <group ref={ref} position={[PED_X[index], reduced ? 0 : -1.1, 0]}>
      <Pedestal />
      <GlassCube speed={reduced ? -1 : speed} />
    </group>
  );
};

/* ── token gliding along the front rail ────────────────────────── */
const Token = ({ reduced }: { reduced: boolean }) => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current || reduced) return;
    const t = (state.clock.elapsedTime % 11) / 11;
    const x = -6.2 + t * 12.4;
    ref.current.position.x = x;
    const mesh = ref.current.children[0] as THREE.Mesh | undefined;
    const mat = mesh?.material as THREE.MeshStandardMaterial | undefined;
    if (mat) mat.opacity = 1 - THREE.MathUtils.smoothstep(Math.abs(x), 4.8, 6.2);
  });

  return (
    <group ref={ref} position={[-4.6, 0.26, 2.35]}>
      <mesh>
        <boxGeometry args={[0.42, 0.42, 0.42]} />
        <meshStandardMaterial
          color="#ff9347"
          emissive="#ea7008"
          emissiveIntensity={1.8}
          roughness={0.3}
          transparent
          opacity={0}
        />
      </mesh>
    </group>
  );
};

/* ── camera rig: damped pointer parallax + aspect framing ──────── */
const CameraRig = ({ reduced }: { reduced: boolean }) => {
  const { camera } = useThree();

  useFrame((state, dt) => {
    const d = Math.min(dt, 0.05);
    const aspect = state.size.width / Math.max(1, state.size.height);
    const zTarget = aspect < 1.35 ? 15.5 : aspect < 1.7 ? 12.6 : aspect < 2 ? 11 : 10.2;
    camera.position.z = THREE.MathUtils.damp(camera.position.z, zTarget, 3, d);
    const px = reduced ? 0 : state.pointer.x * 0.7;
    const py = reduced ? 0 : state.pointer.y * 0.35;
    camera.position.x = THREE.MathUtils.damp(camera.position.x, px, 3, d);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, 2.05 + py, 3, d);
    camera.lookAt(0, 1.0, 0);
  });

  return null;
};

const Scene = ({ reduced }: { reduced: boolean }) => (
  <>
    <fog attach="fog" args={['#f3eee7', 20, 46]} />
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 7, 4]} intensity={1.3} color="#fff6ec" />
    <directionalLight position={[-6, 3, -4]} intensity={0.5} color="#c3d4ff" />
    <pointLight position={[0, 5.5, 2]} intensity={12} distance={16} decay={2} color="#ffe3cc" />

    <Suspense fallback={null}>
      <Environment resolution={128} frames={1}>
        <Lightformer form="rect" intensity={3} position={[0, 4.5, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[9, 5, 1]} color="#ffffff" />
        <Lightformer form="rect" intensity={1.8} position={[-4.5, 2, 3]} rotation={[0, Math.PI / 3, 0]} scale={[4, 6, 1]} color="#ffd2ae" />
        <Lightformer form="rect" intensity={1.2} position={[4.5, 1.5, -3]} rotation={[0, -Math.PI / 3, 0]} scale={[4, 4, 1]} color="#cfe0ff" />
      </Environment>
    </Suspense>

    {/* warm light floor, fogged into the chamber background */}
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[70, 70]} />
      <meshStandardMaterial color="#f1ece4" roughness={0.92} metalness={0} />
    </mesh>

    <CameraRig reduced={reduced} />
    <Column index={0} reduced={reduced} speed={1.0} />
    <Column index={1} reduced={reduced} speed={1.3} />
    <Column index={2} reduced={reduced} speed={1.1} />

    <ContactShadows position={[0, 0.012, 0]} opacity={0.4} scale={22} blur={2.4} far={0.85} color="#121110" />
    <Token reduced={reduced} />
  </>
);

/* ── exhibit card: original site language + choreographed entry ── */
const ExhibitCard = ({ item, i, reduced }: { item: BlockItem; i: number; reduced: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-30px' }}
    transition={{ duration: reduced ? 0 : 0.65, delay: reduced ? 0 : 0.62 + i * 0.18, ease }}
    className="relative min-w-0"
  >
    {/* connector: draws down from the stage into the card */}
    <motion.span
      aria-hidden
      className="absolute -top-7 left-1/2 h-7 w-px origin-top bg-gradient-to-b from-[#ea7008] via-[#ea7008]/70 to-[#ea7008]/15"
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: reduced ? 0 : 0.35, delay: reduced ? 0 : 0.42 + i * 0.18, ease }}
    />
    <div className="relative flex h-full items-start gap-3 overflow-hidden rounded-2xl border border-portfolio-gold/30 bg-white p-4 shadow-[0_18px_44px_-22px_rgba(18,17,16,0.35)] transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/45 before:to-transparent hover:-translate-y-1 hover:border-portfolio-gold/60 sm:p-5">
      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
          <span className="font-mono text-xs font-semibold text-portfolio-gold">{item.index}</span>
          <h3 className="font-display text-[15px] font-bold leading-snug tracking-tight text-[#121110] sm:text-base">
            {item.title}
          </h3>
        </div>
        <p className="text-[13px] leading-relaxed text-[#5c544d]">{item.text}</p>
      </div>
      <span
        className="grid shrink-0 place-items-center rounded-lg border border-portfolio-gold/25 bg-portfolio-gold/10 p-2 text-portfolio-gold"
        aria-hidden
      >
        <item.Icon size={16} strokeWidth={2} />
      </span>
    </div>
  </motion.div>
);

const FoundryStage3D = () => {
  const reduced = !!useReducedMotion();
  /* live gates BOTH the choreography and the WebGL context itself:
     off-screen → Canvas unmounted → zero GPU/CPU cost */
  const [live, setLive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setLive(true)}
      onViewportLeave={() => setLive(false)}
      viewport={{ once: false, margin: '140px' }}
      transition={{ duration: reduced ? 0 : 0.7, ease }}
      className="mt-12 w-full max-w-6xl"
    >
      {/* chamber chrome — light, on-theme */}
      <div className="relative overflow-hidden rounded-3xl border border-portfolio-gold/25 bg-gradient-to-b from-[#fbf9f6] to-[#f1ece4] shadow-[0_34px_70px_-34px_rgba(18,17,16,0.35)]">
        {/* warm top glow */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{ background: 'radial-gradient(115% 80% at 50% -18%, rgba(234,112,8,0.14), rgba(234,112,8,0) 58%)' }}
          aria-hidden
        />
        {/* film grain */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-[0.045]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
          aria-hidden
        />
        {/* soft vignette */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{ boxShadow: 'inset 0 0 70px rgba(18,17,16,0.06)' }}
          aria-hidden
        />

        {/* 3D stage — mounted only while in view */}
        <div className="relative h-[320px] sm:h-[400px] lg:h-[500px]">
          {live && (
            <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 1.75]} camera={{ position: [0, 2.05, 11], fov: 30 }}>
              <Scene reduced={reduced} />
            </Canvas>
          )}
          {!live && (
            <div className="absolute inset-0 flex items-end justify-center pb-10" aria-hidden>
              <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-portfolio-gold/40 to-transparent" />
            </div>
          )}
        </div>

        {/* exhibit cards — one per pedestal, choreographed with their column */}
        <div className="relative z-20 grid grid-cols-1 gap-4 border-t border-[#e7e0d5] bg-white/55 p-4 pt-7 sm:p-5 sm:pt-8 md:grid-cols-3">
          {items.map((item, i) => (
            <ExhibitCard key={item.title} item={item} i={i} reduced={reduced} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FoundryStage3D;
