import React, { useState } from 'react';

// --- Technology Definition ---
interface TechItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops';
  role: string;
  floatClass: string;
  // Position percentages inside the visual canvas
  posDesktop: { left?: string; right?: string; top?: string; bottom?: string };
  posMobile: { left?: string; right?: string; top?: string; bottom?: string };
  icon: (props: { className?: string }) => React.ReactNode;
}

// Custom SVGs in strictly Orange (#ea7008), White (#ffffff), and Black (#121110)
const ReactIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="50" cy="50" rx="44" ry="17" stroke="#ffffff" strokeWidth="3" transform="rotate(0 50 50)" />
    <ellipse cx="50" cy="50" rx="44" ry="17" stroke="#ea7008" strokeWidth="3" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="44" ry="17" stroke="#ffffff" strokeWidth="3" transform="rotate(120 50 50)" />
    <circle cx="50" cy="50" r="7.5" fill="#ea7008" />
  </svg>
);

const NextIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="46" fill="#121110" stroke="#ea7008" strokeWidth="3" />
    <path d="M34 30V70M34 30L68 70M66 30V50" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M66 52V70" stroke="#ea7008" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

const TypeScriptIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#181614" stroke="#ffffff" strokeWidth="2.5" />
    <path d="M22 34H48M35 34V72" stroke="#ffffff" strokeWidth="6.5" strokeLinecap="round" />
    <path d="M54 62C57 69 64 74 74 70C81 66 80 57 73 54L64 51C56 48 54 41 60 36C66 32 74 34 78 40" stroke="#ea7008" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TailwindIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M28 44C31 32 40 28 50 32C44 38 45 43 51 47C56 50 63 53 66 64C69 76 60 80 50 76C56 70 55 65 49 61C44 58 37 55 28 44Z" fill="#ea7008" />
    <path d="M50 20C52 14 58 12 64 14C60 18 61 21 65 24C68 26 73 28 75 35C77 42 71 45 65 43C69 39 68 36 64 33C61 31 56 29 50 20Z" fill="#ffffff" />
  </svg>
);

const HTML5Icon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M18 14L24 82L50 90L76 82L82 14H18Z" fill="#181614" stroke="#ea7008" strokeWidth="3" />
    <path d="M50 24V81L69 75L74 24H50Z" fill="#ea7008" fillOpacity="0.25" />
    <path d="M50 34H33L35 48H50M50 62H36L37 72L50 76M50 34H67L64 62L50 66M50 48H66" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const JSIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#ea7008" />
    <path d="M30 42V68C30 76 22 76 18 70" stroke="#121110" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M48 68C53 74 62 76 72 73C80 69 78 59 71 56L61 52C52 48 50 40 57 34C64 29 73 31 78 37" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PythonIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M48 10C30 10 32 18 32 18V26H49V28H24C16 28 10 34 10 44C10 54 15 58 20 58H26V50C26 40 34 40 34 40H50C58 40 60 34 60 28V18C60 12 56 10 48 10Z" fill="#ffffff" />
    <circle cx="26" cy="18" r="3" fill="#ea7008" />
    <path d="M52 90C70 90 68 82 68 82V74H51V72H76C84 72 90 66 90 56C90 46 85 42 80 42H74V50C74 60 66 60 66 60H50C42 60 40 66 40 72V82C40 88 44 90 52 90Z" fill="#ea7008" />
    <circle cx="74" cy="82" r="3" fill="#ffffff" />
  </svg>
);

const NodeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 14L82 32V68L50 86L18 68V32L50 14Z" fill="#181614" stroke="#ea7008" strokeWidth="3" />
    <path d="M36 40V62M36 40L64 62M64 40V62" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="50" cy="51" r="5" fill="#ea7008" />
  </svg>
);

const GraphQLIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" stroke="#ea7008" strokeWidth="3" fill="none" />
    <polygon points="50,25 75,70 25,70" stroke="#ffffff" strokeWidth="2.5" fill="none" />
    <circle cx="50" cy="15" r="5" fill="#ffffff" />
    <circle cx="85" cy="35" r="5" fill="#ea7008" />
    <circle cx="85" cy="75" r="5" fill="#ffffff" />
    <circle cx="50" cy="95" r="5" fill="#ea7008" />
    <circle cx="15" cy="75" r="5" fill="#ffffff" />
    <circle cx="15" cy="35" r="5" fill="#ea7008" />
  </svg>
);

const GoIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#181614" stroke="#ffffff" strokeWidth="2" />
    <path d="M18 36H40M12 50H35M20 64H38" stroke="#ea7008" strokeWidth="4" strokeLinecap="round" />
    <circle cx="58" cy="50" r="14" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
    <path d="M58 50H72" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
    <circle cx="82" cy="50" r="10" stroke="#ea7008" strokeWidth="4.5" />
  </svg>
);

const PostgresIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 16C36 16 28 26 28 38C28 46 32 54 36 60C38 64 36 76 34 82C40 80 46 74 48 70C58 74 72 70 72 50C72 32 64 16 50 16Z" fill="#181614" stroke="#ffffff" strokeWidth="3" />
    <path d="M38 42C38 36 44 32 50 32C56 32 62 36 62 42C62 50 56 56 50 56C44 56 38 50 38 42Z" fill="#ea7008" fillOpacity="0.3" stroke="#ea7008" strokeWidth="2.5" />
    <circle cx="44" cy="40" r="2.5" fill="#ffffff" />
  </svg>
);

const DockerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="24" y="38" width="9" height="8" rx="1.5" fill="#ffffff" />
    <rect x="36" y="38" width="9" height="8" rx="1.5" fill="#ffffff" />
    <rect x="48" y="38" width="9" height="8" rx="1.5" fill="#ea7008" />
    <rect x="36" y="27" width="9" height="8" rx="1.5" fill="#ea7008" />
    <rect x="48" y="27" width="9" height="8" rx="1.5" fill="#ffffff" />
    <rect x="60" y="38" width="9" height="8" rx="1.5" fill="#ffffff" />
    <path d="M12 50C16 48 24 50 30 52C40 54 60 54 74 46C82 42 85 46 88 52C82 68 64 74 46 74C28 74 16 64 12 50Z" fill="#181614" stroke="#ffffff" strokeWidth="3" />
    <circle cx="80" cy="56" r="2.5" fill="#ea7008" />
  </svg>
);

const AWSIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#181614" stroke="#ea7008" strokeWidth="2.5" />
    <path d="M24 38L32 60H36L44 38M50 38V60M60 48C60 42 66 38 72 38C78 38 82 42 82 48V60" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M22 72C36 82 64 82 78 72M72 70L78 72L74 78" stroke="#ea7008" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RedisIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="50,18 82,32 50,46 18,32" fill="#ea7008" />
    <polygon points="18,34 50,48 50,56 18,42" fill="#ffffff" fillOpacity="0.8" />
    <polygon points="82,34 50,48 50,56 82,42" fill="#121110" stroke="#ea7008" strokeWidth="2" />
    <polygon points="18,50 50,64 50,72 18,58" fill="#ea7008" />
    <polygon points="82,50 50,64 50,72 82,58" fill="#ffffff" />
    <polygon points="18,66 50,80 50,88 18,74" fill="#ffffff" />
    <polygon points="82,66 50,80 50,88 82,74" fill="#ea7008" />
  </svg>
);

const SupabaseIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M52 14L22 56H48L44 86L76 44H50L52 14Z" fill="#181614" stroke="#ea7008" strokeWidth="3.5" strokeLinejoin="round" />
    <path d="M52 14L44 56H22L52 14Z" fill="#ea7008" />
    <path d="M48 86L54 44H76L48 86Z" fill="#ffffff" />
  </svg>
);

const GitHubIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="44" fill="#181614" stroke="#ffffff" strokeWidth="3" />
    <path d="M30 40C30 55 42 62 50 62C58 62 70 55 70 40C70 28 60 22 50 22C40 22 30 28 30 40Z" fill="#ffffff" />
    <circle cx="42" cy="40" r="3.5" fill="#ea7008" />
    <circle cx="58" cy="40" r="3.5" fill="#ea7008" />
    <path d="M38 68V78M62 68V78" stroke="#ea7008" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

// List of all 16 Technologies arranged in a panoramic floating cloud around the laptop
const techItems: TechItem[] = [
  // ─── LEFT FLANK (Frontend Dominant) ───
  {
    id: 'html5',
    name: 'HTML5 Semantic',
    category: 'frontend',
    role: 'Clean Semantics',
    floatClass: 'animate-tech-float-1',
    posDesktop: { left: '3%', top: '13%' },
    posMobile: { left: '2%', top: '12%' },
    icon: HTML5Icon,
  },
  {
    id: 'react',
    name: 'React 19',
    category: 'frontend',
    role: 'Concurrent UI',
    floatClass: 'animate-tech-float-2',
    posDesktop: { left: '11%', top: '23%' },
    posMobile: { left: '18%', top: '16%' },
    icon: ReactIcon,
  },
  {
    id: 'ts',
    name: 'TypeScript',
    category: 'frontend',
    role: 'Strict Type Safety',
    floatClass: 'animate-tech-float-3',
    posDesktop: { left: '2%', top: '42%' },
    posMobile: { left: '4%', top: '38%' },
    icon: TypeScriptIcon,
  },
  {
    id: 'next',
    name: 'Next.js 15',
    category: 'frontend',
    role: 'Edge App Router',
    floatClass: 'animate-tech-float-4',
    posDesktop: { left: '12%', top: '56%' },
    posMobile: { left: '16%', top: '52%' },
    icon: NextIcon,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    role: 'Design Tokens',
    floatClass: 'animate-tech-float-5',
    posDesktop: { left: '3%', top: '72%' },
    posMobile: { left: '3%', top: '72%' },
    icon: TailwindIcon,
  },
  {
    id: 'js',
    name: 'ESNext / JS',
    category: 'frontend',
    role: 'Modern Engine',
    floatClass: 'animate-tech-float-6',
    posDesktop: { left: '15%', top: '84%' },
    posMobile: { left: '18%', top: '84%' },
    icon: JSIcon,
  },

  // ─── TOP ARC (Languages & APIs) ───
  {
    id: 'python',
    name: 'Python 3',
    category: 'backend',
    role: 'AI & Data Services',
    floatClass: 'animate-tech-float-2',
    posDesktop: { left: '24%', top: '4%' },
    posMobile: { left: '32%', top: '6%' },
    icon: PythonIcon,
  },
  {
    id: 'node',
    name: 'Node.js',
    category: 'backend',
    role: 'High-Concurrency I/O',
    floatClass: 'animate-tech-float-4',
    posDesktop: { left: '43%', top: '1%' },
    posMobile: { left: '48%', top: '2%' },
    icon: NodeIcon,
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'backend',
    role: 'Federated APIs',
    floatClass: 'animate-tech-float-1',
    posDesktop: { left: '60%', top: '3%' },
    posMobile: { left: '66%', top: '6%' },
    icon: GraphQLIcon,
  },
  {
    id: 'go',
    name: 'Go Engine',
    category: 'backend',
    role: 'Microservices',
    floatClass: 'animate-tech-float-3',
    posDesktop: { right: '21%', top: '9%' },
    posMobile: { right: '18%', top: '14%' },
    icon: GoIcon,
  },

  // ─── RIGHT FLANK (Databases & Cloud DevOps) ───
  {
    id: 'postgres',
    name: 'PostgreSQL',
    category: 'database',
    role: 'Relational Core',
    floatClass: 'animate-tech-float-5',
    posDesktop: { right: '9%', top: '20%' },
    posMobile: { right: '8%', top: '22%' },
    icon: PostgresIcon,
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    role: 'Containers',
    floatClass: 'animate-tech-float-1',
    posDesktop: { right: '2%', top: '34%' },
    posMobile: { right: '2%', top: '38%' },
    icon: DockerIcon,
  },
  {
    id: 'aws',
    name: 'AWS Cloud',
    category: 'devops',
    role: 'Elastic Infra',
    floatClass: 'animate-tech-float-3',
    posDesktop: { right: '11%', top: '48%' },
    posMobile: { right: '14%', top: '52%' },
    icon: AWSIcon,
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    role: 'In-Memory Cache',
    floatClass: 'animate-tech-float-6',
    posDesktop: { right: '2%', top: '64%' },
    posMobile: { right: '3%', top: '66%' },
    icon: RedisIcon,
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'database',
    role: 'Realtime Serverless DB',
    floatClass: 'animate-tech-float-2',
    posDesktop: { right: '13%', top: '76%' },
    posMobile: { right: '15%', top: '78%' },
    icon: SupabaseIcon,
  },
  {
    id: 'github',
    name: 'GitHub CI/CD',
    category: 'devops',
    role: 'Automated CI/CD',
    floatClass: 'animate-tech-float-4',
    posDesktop: { right: '3%', top: '86%' },
    posMobile: { right: '4%', top: '86%' },
    icon: GitHubIcon,
  },
];

export const TechStackLaptopVisual = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'devops'>('all');

  const categories = [
    { id: 'all', label: 'All Stacks (16)' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Databases & Cache' },
    { id: 'devops', label: 'DevOps & Cloud' },
  ] as const;

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-transparent">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Header Block matching User Reference */}
        <div className="flex flex-col items-center max-w-2xl mb-4 sm:mb-6 relative z-20">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-portfolio-gold border border-portfolio-gold/30 bg-portfolio-gold/10 rounded-full px-3 py-0.5 mb-2.5 font-mono">
            // TECH STACK ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#121110] mb-2.5 leading-tight">
            Right Technology Stacks For{' '}
            <span className="text-portfolio-gold">Web App Development</span>
          </h2>
          <p className="text-[#5c544d] text-xs sm:text-sm leading-relaxed max-w-lg font-normal">
            Production-grade modern frameworks, high-throughput backend services, and cloud-native infrastructure selected for maximum velocity.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#121110] text-white shadow-[0_4px_14px_rgba(18,17,16,0.18)] border border-[#121110]'
                    : 'bg-white text-[#5c544d] hover:text-[#121110] border border-[#ebe5df] hover:border-portfolio-gold/50 shadow-xs'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ─── VISUAL STAGE (Laptop + Moving Background + Floating Badges) ─── */}
        <div className="relative w-full max-w-[940px] h-[400px] sm:h-[450px] md:h-[490px] flex items-center justify-center select-none overflow-hidden my-1">
          
          {/* 1. Ambient Background Core & Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[220px] sm:h-[320px] bg-portfolio-gold/[0.08] blur-[100px] rounded-full pointer-events-none" />

          {/* 2. Rotating Engineering Gears & Tech Circuit Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40">
            {/* Gear 1: Clockwise Rotation */}
            <svg
              width="500"
              height="500"
              viewBox="0 0 640 640"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-tech-spin-slow w-[320px] sm:w-[440px] h-[320px] sm:h-[440px]"
            >
              {/* Center Gear Teeth */}
              <circle cx="320" cy="320" r="190" stroke="#ea7008" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.5" />
              <circle cx="320" cy="320" r="230" stroke="#121110" strokeWidth="1" strokeDasharray="3 14" opacity="0.25" />
              <circle cx="320" cy="320" r="270" stroke="#ea7008" strokeWidth="1.5" strokeDasharray="12 18" opacity="0.45" />
              {/* Planetary nodes */}
              <circle cx="320" cy="90" r="4" fill="#ea7008" />
              <circle cx="550" cy="320" r="4" fill="#121110" opacity="0.4" />
              <circle cx="320" cy="550" r="4" fill="#ea7008" />
              <circle cx="90" cy="320" r="4" fill="#121110" opacity="0.4" />
            </svg>
          </div>

          {/* Gear 2: Reverse Counter-Clockwise Rotation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-35">
            <svg
              width="400"
              height="400"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-tech-spin-reverse w-[240px] sm:w-[350px] h-[240px] sm:h-[350px]"
            >
              <circle cx="250" cy="250" r="150" stroke="#121110" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.25" />
              <path d="M250 50 V450 M50 250 H450" stroke="#ea7008" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.4" />
              {/* Tech node coordinates */}
              <circle cx="250" cy="100" r="3" fill="#ea7008" />
              <circle cx="400" cy="250" r="3" fill="#121110" opacity="0.4" />
              <circle cx="250" cy="400" r="3" fill="#ea7008" />
              <circle cx="100" cy="250" r="3" fill="#121110" opacity="0.4" />
            </svg>
          </div>

          {/* 3. LAPTOP ONLY (Scaled down for compact view) */}
          <div className="relative z-20 flex flex-col items-center scale-[0.62] sm:scale-[0.72] md:scale-[0.80] transition-transform duration-500">
            
            {/* Laptop Screen (Lid) */}
            <div className="w-[380px] sm:w-[460px] md:w-[500px] h-[230px] sm:h-[280px] md:h-[305px] bg-[#161412] border-2 border-[#2b2723] rounded-t-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-2.5 sm:p-3 relative overflow-hidden flex flex-col">
              
              {/* Camera dot & sensor */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3a352f]" />
                <div className="w-1 h-1 rounded-full bg-portfolio-gold/70 animate-pulse" />
              </div>

              {/* Screen Bezel Inner Display */}
              <div className="w-full h-full bg-[#0d0c0b] rounded-lg border border-white/5 relative overflow-hidden flex flex-col p-3 font-mono text-[11px] sm:text-xs">
                
                {/* Editor Window Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ea7008]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-0.5 rounded text-[10px] text-[#a89f91] border border-white/5">
                    <span className="text-portfolio-gold font-bold">TS</span>
                    <span>ForemarkArchitecture.ts</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-portfolio-gold font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-portfolio-gold animate-ping" />
                    <span>LIVE</span>
                  </div>
                </div>

                {/* Active Animated Code Window */}
                <div className="flex-1 flex flex-col justify-center space-y-1.5 text-left text-[11px] sm:text-[12px] leading-relaxed relative z-10">
                  <p className="text-[#6e665d]">
                    <span className="text-portfolio-gold">1</span> <span className="text-portfolio-gold">import</span> {'{'} <span className="text-white">StackEngine</span>, <span className="text-white">ScaleCloud</span> {'}'} <span className="text-portfolio-gold">from</span> <span className="text-[#d4883d]">'@foremark/core'</span>;
                  </p>
                  <p className="text-white">
                    <span className="text-portfolio-gold">2</span> <span className="text-portfolio-gold">export const</span> <span className="text-white font-bold">ProductionPlatform</span> = <span className="text-portfolio-gold">defineApp</span>({'{'}
                  </p>
                  <p className="pl-4 text-[#a89f91]">
                    <span className="text-portfolio-gold">3</span> frontend: [<span className="text-white">'Next.js 15'</span>, <span className="text-portfolio-gold">'React 19'</span>, <span className="text-white">'TypeScript'</span>],
                  </p>
                  <p className="pl-4 text-[#a89f91]">
                    <span className="text-portfolio-gold">4</span> backend:  [<span className="text-portfolio-gold">'Node.js'</span>, <span className="text-white">'Go Microservices'</span>, <span className="text-portfolio-gold">'GraphQL'</span>],
                  </p>
                  <p className="pl-4 text-[#a89f91]">
                    <span className="text-portfolio-gold">5</span> database: [<span className="text-white">'PostgreSQL'</span>, <span className="text-portfolio-gold">'Redis Cache'</span>, <span className="text-white">'Supabase'</span>],
                  </p>
                  <p className="pl-4 text-[#a89f91]">
                    <span className="text-portfolio-gold">6</span> devops:   [<span className="text-portfolio-gold">'AWS Cloud'</span>, <span className="text-white">'Docker'</span>, <span className="text-portfolio-gold">'Edge CDN'</span>],
                  </p>
                  <p className="pl-4 text-[#d4883d]">
                    <span className="text-portfolio-gold">7</span> telemetry: {'{'} latency: <span className="text-white font-bold">'&lt;80ms'</span>, uptime: <span className="text-white font-bold">'99.99%'</span> {'}'}
                  </p>
                  <p className="text-white flex items-center">
                    <span className="text-portfolio-gold">8</span> {'}'});
                    <span className="inline-block w-2 h-4 bg-portfolio-gold ml-1 animate-tech-cursor" />
                  </p>
                </div>

                {/* Horizontal Continuous Laser Beam Sweep Across Screen */}
                <div className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-portfolio-gold/25 to-transparent pointer-events-none animate-tech-scan" />

                {/* Subtle Screen CRT Scanlines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_3px] pointer-events-none" />
              </div>
            </div>

            {/* Laptop Hinge */}
            <div className="w-[120px] sm:w-[150px] h-2 bg-[#25211d] rounded-t border-t border-[#3a352f]" />

            {/* Laptop Keyboard Deck (Base) */}
            <div className="w-[450px] sm:w-[540px] md:w-[600px] h-[34px] sm:h-[40px] bg-gradient-to-b from-[#1f1d1a] to-[#121110] rounded-b-xl border-t border-[#3a352f] shadow-[0_20px_45px_rgba(0,0,0,0.25)] relative flex items-center justify-center">
              {/* Thumb notch */}
              <div className="w-14 sm:w-16 h-1.5 bg-[#0d0c0b] rounded-b-sm border-x border-b border-white/10" />
              
              {/* Soft ambient orange backlight reflection below keyboard */}
              <div className="absolute inset-x-8 -bottom-1 h-3 bg-portfolio-gold/20 blur-md pointer-events-none" />
            </div>

            {/* Deep Desk Drop Shadow */}
            <div className="w-[420px] sm:w-[500px] h-6 bg-[#121110]/12 blur-lg -mt-1 pointer-events-none rounded-full" />
          </div>

          {/* 4. FLOATING TECH BADGES (Compact formation) */}
          {techItems.map((tech) => {
            const IconComp = tech.icon;
            const isFiltered = activeCategory !== 'all' && tech.category !== activeCategory;
            const isMatch = activeCategory === tech.category;

            return (
              <div
                key={tech.id}
                style={{
                  left: tech.posDesktop.left,
                  right: tech.posDesktop.right,
                  top: tech.posDesktop.top,
                  bottom: tech.posDesktop.bottom,
                }}
                className={`absolute z-30 transition-all duration-500 cursor-pointer ${tech.floatClass} ${
                  isFiltered
                    ? 'opacity-25 grayscale scale-90'
                    : isMatch
                    ? 'opacity-100 scale-105 z-40'
                    : 'opacity-100 scale-100'
                }`}
              >
                {/* Badge Card Container in strictly Orange, White & Black */}
                <div
                  className={`group relative flex items-center gap-2 sm:gap-2.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border transition-all duration-300 shadow-[0_3px_14px_rgba(0,0,0,0.06)] ${
                    isMatch
                      ? 'border-portfolio-gold bg-[#fffaf5] shadow-[0_6px_22px_rgba(234,112,8,0.22)] ring-1 ring-portfolio-gold/30'
                      : 'border-[#ebe5df] hover:border-portfolio-gold hover:bg-white hover:shadow-[0_8px_24px_rgba(234,112,8,0.22)] hover:scale-105'
                  }`}
                >
                  {/* Glowing Accent Orb */}
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#121110] border border-[#2b2723] flex items-center justify-center p-1 shrink-0 group-hover:border-portfolio-gold/60 shadow-xs transition-colors">
                    <IconComp className="w-full h-full object-contain" />
                  </div>

                  {/* Badge Text Details */}
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] sm:text-xs font-bold text-[#121110] group-hover:text-portfolio-gold transition-colors leading-tight whitespace-nowrap">
                      {tech.name}
                    </span>
                    <span className="text-[9px] font-mono text-[#6b635b] group-hover:text-[#121110] transition-colors uppercase tracking-wider leading-tight mt-0.5">
                      {tech.role}
                    </span>
                  </div>

                  {/* Subtle micro orange dot indicator */}
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-gold/70 group-hover:bg-portfolio-gold group-hover:animate-ping" />
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default TechStackLaptopVisual;
