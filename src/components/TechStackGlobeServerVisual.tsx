import React, { useState } from 'react';

// --- Technology Definition ---
interface TechItem {
  id: string;
  name: string;
  category: 'cloud' | 'devops' | 'edge' | 'observability';
  role: string;
  floatClass: string;
  posDesktop: { left?: string; right?: string; top?: string; bottom?: string };
  posMobile: { left?: string; right?: string; top?: string; bottom?: string };
  icon: (props: { className?: string }) => React.ReactNode;
}

// Custom SVGs in strictly Foremark Orange (#ea7008), Crisp White (#ffffff), and Obsidian Black (#121110)

const AWSIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#181614" stroke="#ea7008" strokeWidth="2.5" />
    <path d="M24 38L32 60H36L44 38M50 38V60M60 48C60 42 66 38 72 38C78 38 82 42 82 48V60" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M22 72C36 82 64 82 78 72M72 70L78 72L74 78" stroke="#ea7008" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GCPIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="46" fill="#121110" stroke="#ea7008" strokeWidth="3" />
    <path d="M50 22L74 36V64L50 78L26 64V36L50 22Z" stroke="#ffffff" strokeWidth="3.5" strokeLinejoin="round" />
    <path d="M50 36L62 43V57L50 64L38 57V43L50 36Z" fill="#ea7008" fillOpacity="0.25" stroke="#ea7008" strokeWidth="3" />
    <circle cx="50" cy="50" r="4" fill="#ffffff" />
  </svg>
);

const DigitalOceanIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#181614" stroke="#ffffff" strokeWidth="2" />
    <path d="M50 18C32 18 18 32 18 50C18 68 32 82 50 82C68 82 82 68 82 50H66C66 59 59 66 50 66C41 66 34 59 34 50C34 41 41 34 50 34V18Z" fill="#ea7008" />
    <rect x="50" y="66" width="10" height="10" fill="#ffffff" />
    <rect x="40" y="76" width="7" height="7" fill="#ffffff" opacity="0.6" />
  </svg>
);

const HetznerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#121110" stroke="#ea7008" strokeWidth="2.5" />
    <path d="M28 26V74M72 26V74M28 50H72" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
    <circle cx="50" cy="50" r="4.5" fill="#ea7008" />
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

const KubernetesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="46" fill="#181614" stroke="#ffffff" strokeWidth="2.5" />
    <polygon points="50,18 78,34 78,66 50,82 22,66 22,34" stroke="#ea7008" strokeWidth="3.5" fill="none" />
    <path d="M50 18V50M78 34L50 50M78 66L50 50M50 82V50M22 66L50 50M22 34L50 50" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="50" cy="50" r="6" fill="#ea7008" stroke="#ffffff" strokeWidth="2" />
  </svg>
);

const TerraformIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#121110" stroke="#ea7008" strokeWidth="2.5" />
    <polygon points="22,20 44,33 44,58 22,45" fill="#ffffff" opacity="0.9" />
    <polygon points="48,35 70,48 70,73 48,60" fill="#ea7008" />
    <polygon points="48,8 70,21 70,46 48,33" fill="#ffffff" opacity="0.65" />
    <polygon points="22,50 44,63 44,88 22,75" fill="#ea7008" opacity="0.8" />
  </svg>
);

const AnsibleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="46" fill="#181614" stroke="#ea7008" strokeWidth="3" />
    <path d="M28 72L50 24L72 72M38 56H62" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="62" cy="56" r="3" fill="#ea7008" />
    <circle cx="50" cy="24" r="3" fill="#ea7008" />
  </svg>
);

const CloudflareIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#181614" stroke="#ffffff" strokeWidth="2" />
    <path d="M68 40C66 30 57 24 47 26C39 28 33 34 33 42C25 43 19 50 20 58C21 66 28 71 36 71H68C76 71 82 65 82 57C82 48 76 41 68 40Z" fill="#121110" stroke="#ea7008" strokeWidth="3.5" />
    <path d="M48 42L42 56H52L46 70L62 52H52L58 42H48Z" fill="#ffffff" />
  </svg>
);

const NginxIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="50,14 82,32 82,68 50,86 18,68 18,32" fill="#121110" stroke="#ea7008" strokeWidth="3" />
    <path d="M34 32V68L66 32V68" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="50" cy="50" r="3.5" fill="#ea7008" />
  </svg>
);

const LetsEncryptIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#181614" stroke="#ea7008" strokeWidth="2.5" />
    <rect x="28" y="44" width="44" height="34" rx="8" fill="#121110" stroke="#ffffff" strokeWidth="3" />
    <path d="M36 44V34C36 26 42 20 50 20C58 20 64 26 64 34V44" stroke="#ea7008" strokeWidth="5" strokeLinecap="round" />
    <circle cx="50" cy="58" r="4" fill="#ea7008" />
    <path d="M50 62V69" stroke="#ea7008" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const AWSWAFIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="46" fill="#121110" stroke="#ffffff" strokeWidth="3" />
    <path d="M50 18L76 28V50C76 66 65 77 50 82C35 77 24 66 24 50V28L50 18Z" fill="#ea7008" fillOpacity="0.2" stroke="#ea7008" strokeWidth="3.5" strokeLinejoin="round" />
    <path d="M36 44H64M40 56H60M50 34V66" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const PrometheusIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#181614" stroke="#ffffff" strokeWidth="2" />
    <circle cx="50" cy="56" r="26" stroke="#ea7008" strokeWidth="3.5" />
    <path d="M50 22C46 30 42 34 42 42C42 48 46 52 50 52C54 52 58 48 58 42C58 34 54 30 50 22Z" fill="#ea7008" />
    <path d="M50 28C48 33 46 36 46 41C46 44 48 47 50 47C52 47 54 44 54 41C54 36 52 33 50 28Z" fill="#ffffff" />
    <line x1="30" y1="78" x2="70" y2="78" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

const GrafanaIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="46" fill="#121110" stroke="#ea7008" strokeWidth="3" />
    <path d="M50 20C66 20 80 34 80 50C80 66 66 80 50 80C34 80 20 66 20 50" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
    <circle cx="50" cy="50" r="14" stroke="#ea7008" strokeWidth="4" />
    <circle cx="50" cy="50" r="5" fill="#ffffff" />
    <path d="M50 36V22M64 50H78" stroke="#ea7008" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const SentryIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#181614" stroke="#ea7008" strokeWidth="2.5" />
    <path d="M50 22C34 22 22 34 22 50C22 66 34 78 50 78C60 78 69 73 74 65L64 59C61 64 56 68 50 68C40 68 32 60 32 50C32 40 40 32 50 32C56 32 61 35 64 40L74 34C69 26 60 22 50 22Z" fill="#ffffff" />
    <circle cx="70" cy="50" r="6" fill="#ea7008" />
  </svg>
);

const CloudWatchIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="46" fill="#121110" stroke="#ffffff" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="26" stroke="#ea7008" strokeWidth="2" strokeDasharray="4 4" />
    <path d="M24 50H36L44 32L54 68L62 44L68 50H76" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="54" cy="68" r="3" fill="#ea7008" />
  </svg>
);

// --- 16 Real Technologies Symmetrically Surrounding the Globe & Servers ---
const hostingTechItems: TechItem[] = [
  // ─── LEFT FLANK (8 ITEMS) ───
  {
    id: 'aws',
    name: 'AWS Cloud',
    category: 'cloud',
    role: 'Multi-Region VPCs & EC2',
    floatClass: 'animate-tech-float-1',
    posDesktop: { left: '1%', top: '4%' },
    posMobile: { left: '2%', top: '4%' },
    icon: AWSIcon,
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    role: 'Containers & Compose',
    floatClass: 'animate-tech-float-3',
    posDesktop: { left: '12%', top: '15%' },
    posMobile: { left: '13%', top: '16%' },
    icon: DockerIcon,
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    category: 'edge',
    role: 'Edge CDN & Anycast WAF',
    floatClass: 'animate-tech-float-5',
    posDesktop: { left: '2%', top: '27%' },
    posMobile: { left: '3%', top: '28%' },
    icon: CloudflareIcon,
  },
  {
    id: 'prometheus',
    name: 'Prometheus',
    category: 'observability',
    role: 'Time-Series Telemetry',
    floatClass: 'animate-tech-float-2',
    posDesktop: { left: '13%', top: '39%' },
    posMobile: { left: '14%', top: '40%' },
    icon: PrometheusIcon,
  },
  {
    id: 'gcp',
    name: 'Google Cloud',
    category: 'cloud',
    role: 'Global Network & GKE',
    floatClass: 'animate-tech-float-4',
    posDesktop: { left: '1%', top: '51%' },
    posMobile: { left: '2%', top: '52%' },
    icon: GCPIcon,
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'devops',
    role: 'Self-Healing Clusters',
    floatClass: 'animate-tech-float-6',
    posDesktop: { left: '12%', top: '63%' },
    posMobile: { left: '13%', top: '64%' },
    icon: KubernetesIcon,
  },
  {
    id: 'nginx',
    name: 'Nginx Proxy',
    category: 'edge',
    role: 'HTTP/3 Reverse Proxy',
    floatClass: 'animate-tech-float-1',
    posDesktop: { left: '2%', top: '75%' },
    posMobile: { left: '3%', top: '76%' },
    icon: NginxIcon,
  },
  {
    id: 'grafana',
    name: 'Grafana',
    category: 'observability',
    role: 'Live System Dashboards',
    floatClass: 'animate-tech-float-3',
    posDesktop: { left: '13%', top: '87%' },
    posMobile: { left: '14%', top: '88%' },
    icon: GrafanaIcon,
  },

  // ─── RIGHT FLANK (8 ITEMS) ───
  {
    id: 'digitalocean',
    name: 'DigitalOcean',
    category: 'cloud',
    role: 'Managed NVMe Droplets',
    floatClass: 'animate-tech-float-2',
    posDesktop: { right: '1%', top: '4%' },
    posMobile: { right: '2%', top: '4%' },
    icon: DigitalOceanIcon,
  },
  {
    id: 'terraform',
    name: 'Terraform IaC',
    category: 'devops',
    role: 'Declarative Cloud Code',
    floatClass: 'animate-tech-float-4',
    posDesktop: { right: '12%', top: '15%' },
    posMobile: { right: '13%', top: '16%' },
    icon: TerraformIcon,
  },
  {
    id: 'letsencrypt',
    name: "Let's Encrypt",
    category: 'edge',
    role: 'Automated SSL/TLS Certs',
    floatClass: 'animate-tech-float-6',
    posDesktop: { right: '2%', top: '27%' },
    posMobile: { right: '3%', top: '28%' },
    icon: LetsEncryptIcon,
  },
  {
    id: 'sentry',
    name: 'Sentry',
    category: 'observability',
    role: 'Real-Time Error Triage',
    floatClass: 'animate-tech-float-1',
    posDesktop: { right: '13%', top: '39%' },
    posMobile: { right: '14%', top: '40%' },
    icon: SentryIcon,
  },
  {
    id: 'hetzner',
    name: 'Hetzner Cloud',
    category: 'cloud',
    role: 'Dedicated Bare-Metal',
    floatClass: 'animate-tech-float-3',
    posDesktop: { right: '1%', top: '51%' },
    posMobile: { right: '2%', top: '52%' },
    icon: HetznerIcon,
  },
  {
    id: 'ansible',
    name: 'Ansible',
    category: 'devops',
    role: 'Zero-Downtime Config',
    floatClass: 'animate-tech-float-5',
    posDesktop: { right: '12%', top: '63%' },
    posMobile: { right: '13%', top: '64%' },
    icon: AnsibleIcon,
  },
  {
    id: 'awswaf',
    name: 'AWS WAF',
    category: 'edge',
    role: 'Layer 7 Bot Mitigation',
    floatClass: 'animate-tech-float-2',
    posDesktop: { right: '2%', top: '75%' },
    posMobile: { right: '3%', top: '76%' },
    icon: AWSWAFIcon,
  },
  {
    id: 'cloudwatch',
    name: 'AWS CloudWatch',
    category: 'observability',
    role: 'Log Alarms & Auditing',
    floatClass: 'animate-tech-float-4',
    posDesktop: { right: '13%', top: '87%' },
    posMobile: { right: '14%', top: '88%' },
    icon: CloudWatchIcon,
  },
];

export const TechStackGlobeServerVisual = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cloud' | 'devops' | 'edge' | 'observability'>('all');
  const [hoveredTechId, setHoveredTechId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Infrastructure (16)' },
    { id: 'cloud', label: 'Cloud Providers' },
    { id: 'devops', label: 'Containerization & IaC' },
    { id: 'edge', label: 'Edge & Security' },
    { id: 'observability', label: 'Monitoring & Logs' },
  ] as const;

  // 16 Symmetrical Fiber Optic Conduits connecting Globe/Servers Hub to Badges (Canvas: 1000 x 680)
  const connectingConduits = [
    // LEFT FLANK
    { id: 'aws', d: 'M 430 310 C 310 240, 230 110, 170 55', endX: 170, endY: 55, startX: 430, startY: 310 },
    { id: 'docker', d: 'M 405 325 C 330 280, 300 180, 275 125', endX: 275, endY: 125, startX: 405, startY: 325 },
    { id: 'cloudflare', d: 'M 385 345 C 295 315, 225 240, 175 205', endX: 175, endY: 205, startX: 385, startY: 345 },
    { id: 'prometheus', d: 'M 375 365 C 330 345, 300 310, 265 285', endX: 265, endY: 285, startX: 375, startY: 365 },
    { id: 'gcp', d: 'M 385 385 C 295 385, 225 390, 175 375', endX: 175, endY: 375, startX: 385, startY: 385 },
    { id: 'kubernetes', d: 'M 405 405 C 345 420, 305 450, 265 455', endX: 265, endY: 455, startX: 405, startY: 405 },
    { id: 'nginx', d: 'M 430 425 C 320 460, 225 515, 170 535', endX: 170, endY: 535, startX: 430, startY: 425 },
    { id: 'grafana', d: 'M 455 445 C 380 495, 330 575, 265 615', endX: 265, endY: 615, startX: 455, startY: 445 },

    // RIGHT FLANK
    { id: 'digitalocean', d: 'M 570 310 C 690 240, 770 110, 830 55', endX: 830, endY: 55, startX: 570, startY: 310 },
    { id: 'terraform', d: 'M 595 325 C 670 280, 700 180, 725 125', endX: 725, endY: 125, startX: 595, startY: 325 },
    { id: 'letsencrypt', d: 'M 615 345 C 705 315, 775 240, 825 205', endX: 825, endY: 205, startX: 615, startY: 345 },
    { id: 'sentry', d: 'M 625 365 C 670 345, 700 310, 735 285', endX: 735, endY: 285, startX: 625, startY: 365 },
    { id: 'hetzner', d: 'M 615 385 C 705 385, 775 390, 825 375', endX: 825, endY: 375, startX: 615, startY: 385 },
    { id: 'ansible', d: 'M 595 405 C 655 420, 695 450, 735 455', endX: 735, endY: 455, startX: 595, startY: 405 },
    { id: 'awswaf', d: 'M 570 425 C 680 460, 775 515, 830 535', endX: 830, endY: 535, startX: 570, startY: 425 },
    { id: 'cloudwatch', d: 'M 545 445 C 620 495, 670 575, 735 615', endX: 735, endY: 615, startX: 545, startY: 445 },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-transparent">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Header Block matching Site Style */}
        <div className="flex flex-col items-center max-w-4xl mb-4 sm:mb-6 relative z-20">
          <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-3 font-mono">
            Technology Stack
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold font-display tracking-tight text-[#121110] mb-3 leading-tight">
            Mission-Critical Infrastructure For{' '}
            <span className="text-portfolio-gold">Web Servers & Hosting</span>
          </h2>
          <p className="text-[#5c544d] text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-normal">
            High-availability cloud providers, container orchestration, global edge CDNs, and proactive 24/7 observability pipelines.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 flex-wrap mt-5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all duration-300 cursor-pointer ${
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

        {/* ─── VISUAL STAGE (Globe + 3 Stacked Rack Servers + Fiber Conduits + 16 Real Technologies) ─── */}
        <div className="relative w-full max-w-[1040px] h-[540px] sm:h-[620px] md:h-[680px] flex items-center justify-center select-none overflow-hidden my-2">
          
          {/* 1. Ambient Warm Core Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[560px] h-[300px] sm:h-[440px] bg-portfolio-gold/[0.12] blur-[120px] rounded-full pointer-events-none" />

          {/* 2. Rotating Engineering Rings in Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40">
            <svg
              width="620"
              height="620"
              viewBox="0 0 640 640"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-tech-spin-slow w-[360px] sm:w-[540px] h-[360px] sm:h-[540px]"
            >
              <circle cx="320" cy="320" r="190" stroke="#ea7008" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.45" />
              <circle cx="320" cy="320" r="240" stroke="#121110" strokeWidth="1" strokeDasharray="3 14" opacity="0.25" />
              <circle cx="320" cy="320" r="285" stroke="#ea7008" strokeWidth="1.5" strokeDasharray="12 18" opacity="0.35" />
              <circle cx="320" cy="80" r="4" fill="#ea7008" />
              <circle cx="560" cy="320" r="4" fill="#121110" opacity="0.5" />
              <circle cx="320" cy="560" r="4" fill="#ea7008" />
              <circle cx="80" cy="320" r="4" fill="#121110" opacity="0.5" />
            </svg>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30">
            <svg
              width="460"
              height="460"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-tech-spin-reverse w-[280px] sm:w-[400px] h-[280px] sm:h-[400px]"
            >
              <circle cx="250" cy="250" r="150" stroke="#121110" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.25" />
              <path d="M250 40 V460 M40 250 H460" stroke="#ea7008" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.3" />
              <circle cx="250" cy="100" r="3" fill="#ea7008" />
              <circle cx="400" cy="250" r="3" fill="#121110" opacity="0.4" />
              <circle cx="250" cy="400" r="3" fill="#ea7008" />
              <circle cx="100" cy="250" r="3" fill="#121110" opacity="0.4" />
            </svg>
          </div>

          {/* ─── 3. BEAUTIFUL LIGHT ORANGE CONDUIT LINES (CONNECTING TO CORE) ─── */}
          <div className="absolute inset-0 pointer-events-none z-15">
            <svg
              viewBox="0 0 1000 680"
              preserveAspectRatio="none"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="globeCableGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                <linearGradient id="globeConduitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffb066" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#ea7008" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#ff9933" stopOpacity="0.95" />
                </linearGradient>

                <style>{`
                  @keyframes globeCablePulse {
                    from { stroke-dashoffset: 48; }
                    to { stroke-dashoffset: 0; }
                  }
                  .globe-cable-flow {
                    animation: globeCablePulse 2.4s linear infinite;
                  }
                  @keyframes globeOrbitData {
                    0% { stroke-dashoffset: 240; }
                    100% { stroke-dashoffset: 0; }
                  }
                  .globe-orbit-pulse {
                    animation: globeOrbitData 4s linear infinite;
                  }
                  @keyframes serverLedBlink {
                    0%, 100% { opacity: 0.35; }
                    50% { opacity: 1; }
                  }
                  .server-led-1 { animation: serverLedBlink 1.2s infinite ease-in-out; }
                  .server-led-2 { animation: serverLedBlink 0.9s infinite ease-in-out 0.3s; }
                  .server-led-3 { animation: serverLedBlink 1.5s infinite ease-in-out 0.6s; }
                  .server-led-4 { animation: serverLedBlink 0.7s infinite ease-in-out 0.15s; }
                `}</style>
              </defs>

              {connectingConduits.map((conduit) => {
                const tech = hostingTechItems.find((t) => t.id === conduit.id);
                const isFiltered = activeCategory !== 'all' && tech?.category !== activeCategory;
                const isHovered = hoveredTechId === conduit.id;
                const isDimmed = isFiltered || (hoveredTechId !== null && !isHovered);

                return (
                  <g
                    key={conduit.id}
                    className="transition-opacity duration-500"
                    opacity={isDimmed ? 0.12 : isHovered ? 1 : 0.75}
                  >
                    {/* Layer 1: Soft Ambient Glow */}
                    <path
                      d={conduit.d}
                      stroke="#ea7008"
                      strokeWidth={isHovered ? 4.5 : 3}
                      strokeLinecap="round"
                      opacity={0.35}
                      filter="url(#globeCableGlow)"
                    />

                    {/* Layer 2: Radiant Orange Conduit */}
                    <path
                      d={conduit.d}
                      stroke="url(#globeConduitGrad)"
                      strokeWidth={isHovered ? 2.2 : 1.5}
                      strokeLinecap="round"
                    />

                    {/* Layer 3: Flowing Light Pulse */}
                    <path
                      d={conduit.d}
                      stroke="#ffffff"
                      strokeWidth={1.2}
                      strokeDasharray="6 22"
                      strokeLinecap="round"
                      className="globe-cable-flow"
                      opacity={0.8}
                    />

                    {/* Terminal Node at Badge End */}
                    <circle
                      cx={conduit.endX}
                      cy={conduit.endY}
                      r={isHovered ? 4 : 2.5}
                      fill="#ea7008"
                      className="transition-all duration-300"
                    />
                    <circle
                      cx={conduit.endX}
                      cy={conduit.endY}
                      r={isHovered ? 2 : 1.2}
                      fill="#ffffff"
                    />

                    {/* Terminal Node at Core End */}
                    <circle
                      cx={conduit.startX}
                      cy={conduit.startY}
                      r={2.5}
                      fill="#ea7008"
                      opacity={0.7}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* ─── 4. CENTERPIECE: ANIMATED GLOBE + 3 STACKED SERVER BLADES (FAITHFUL TO USER ATTACHED IMAGE) ─── */}
          <div className="relative z-20 flex flex-col items-center justify-center transition-transform duration-500 scale-[0.76] sm:scale-[0.88] md:scale-[1.0]">
            
            {/* Stage wrapper for Globe and Server Rack */}
            <div className="relative w-[360px] sm:w-[400px] md:w-[440px] h-[340px] sm:h-[380px] md:h-[410px] flex items-center justify-center">

              {/* ─── A. THE ANIMATED GLOBE (In Background) ─── */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg
                  viewBox="0 0 380 380"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[320px] sm:w-[360px] md:w-[390px] h-[320px] sm:h-[360px] md:h-[390px] overflow-visible drop-shadow-[0_12px_30px_rgba(234,112,8,0.2)]"
                >
                  <defs>
                    <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ea7008" stopOpacity="0.22" />
                      <stop offset="70%" stopColor="#121110" stopOpacity="0.04" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="globeRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ea7008" />
                      <stop offset="50%" stopColor="#121110" />
                      <stop offset="100%" stopColor="#ea7008" />
                    </linearGradient>
                    <linearGradient id="globeGridGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ea7008" stopOpacity="0.75" />
                      <stop offset="50%" stopColor="#121110" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#ea7008" stopOpacity="0.75" />
                    </linearGradient>
                  </defs>

                  {/* Soft sphere core fill */}
                  <circle cx="190" cy="190" r="172" fill="url(#globeGlow)" />

                  {/* Outer Sphere Dual Rings (Faithful to image's bold double border) */}
                  <circle cx="190" cy="190" r="172" stroke="#121110" strokeWidth="5" />
                  <circle cx="190" cy="190" r="176" stroke="#ea7008" strokeWidth="1.5" opacity="0.65" strokeDasharray="4 6" />

                  {/* Latitudinal Curved Grid Lines (Horizontal Rings from Image) */}
                  <path d="M 54 95 Q 190 125, 326 95" stroke="url(#globeGridGrad)" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M 26 142 Q 190 180, 354 142" stroke="url(#globeGridGrad)" strokeWidth="2.6" strokeLinecap="round" />
                  <path d="M 18 190 Q 190 225, 362 190" stroke="#121110" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                  <path d="M 26 238 Q 190 272, 354 238" stroke="url(#globeGridGrad)" strokeWidth="2.6" strokeLinecap="round" />
                  <path d="M 54 285 Q 190 315, 326 285" stroke="url(#globeGridGrad)" strokeWidth="2.4" strokeLinecap="round" />

                  {/* Longitudinal Meridian Arcs (Vertical Curves from Image) */}
                  <line x1="190" y1="18" x2="190" y2="362" stroke="#ea7008" strokeWidth="2.8" strokeDasharray="8 6" opacity="0.75" />
                  
                  <ellipse cx="190" cy="190" rx="62" ry="172" stroke="#121110" strokeWidth="2.4" fill="none" opacity="0.8" />
                  <ellipse cx="190" cy="190" rx="120" ry="172" stroke="url(#globeGridGrad)" strokeWidth="2.6" fill="none" />
                  <ellipse cx="190" cy="190" rx="160" ry="172" stroke="#121110" strokeWidth="2.2" fill="none" opacity="0.5" />

                  {/* Pulsing Global Edge Datacenter Nodes (POPs) on the Globe */}
                  <g>
                    <circle cx="128" cy="152" r="4.5" fill="#ea7008" />
                    <circle cx="128" cy="152" r="9.5" stroke="#ea7008" strokeWidth="1.2" opacity="0.75" className="animate-ping" />
                  </g>
                  <g>
                    <circle cx="225" cy="126" r="4" fill="#ffffff" stroke="#ea7008" strokeWidth="1.5" />
                    <circle cx="225" cy="126" r="8.5" stroke="#ffffff" strokeWidth="1" opacity="0.8" className="animate-ping" style={{ animationDelay: '0.6s' }} />
                  </g>
                  <g>
                    <circle cx="296" cy="148" r="4" fill="#ea7008" />
                    <circle cx="296" cy="148" r="8.5" stroke="#ea7008" strokeWidth="1.2" opacity="0.65" className="animate-ping" style={{ animationDelay: '1.2s' }} />
                  </g>
                  <g>
                    <circle cx="82" cy="162" r="3.5" fill="#ffffff" />
                  </g>
                  <g>
                    <circle cx="260" cy="216" r="4" fill="#ea7008" />
                  </g>

                  {/* Tilted Orbital Satellite Ring with circulating data packet */}
                  <ellipse
                    cx="190"
                    cy="190"
                    rx="192"
                    ry="66"
                    stroke="#ea7008"
                    strokeWidth="1.5"
                    strokeDasharray="8 12"
                    transform="rotate(-22 190 190)"
                    opacity="0.6"
                  />
                  <ellipse
                    cx="190"
                    cy="190"
                    rx="192"
                    ry="66"
                    stroke="#ffffff"
                    strokeWidth="2.4"
                    strokeDasharray="22 230"
                    transform="rotate(-22 190 190)"
                    className="globe-orbit-pulse"
                  />
                </svg>
              </div>

              {/* ─── B. THE 3 STACKED RACK SERVERS (In Front of the Globe) ─── */}
              {/* Center foreground placement directly matching the user's attached image */}
              <div className="relative z-30 flex flex-col items-center gap-2 sm:gap-2.5 mt-16 sm:mt-20">

                {/* ─── SERVER BLADE 1 (TOP) ─── */}
                <div className="group/s1 relative w-[250px] sm:w-[280px] md:w-[310px] h-[54px] sm:h-[60px] bg-gradient-to-r from-[#1c1a17] via-[#121110] to-[#1c1a17] border-2 border-[#121110] rounded-xl shadow-[0_8px_22px_rgba(0,0,0,0.38)] p-1.5 flex items-center justify-between overflow-hidden transition-all duration-300 hover:border-portfolio-gold/90 hover:shadow-[0_12px_32px_rgba(234,112,8,0.35)]">
                  
                  {/* Rack Ears (Left & Right Mounting Screws) */}
                  <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-xs bg-[#2e2a25] flex flex-col justify-between py-0.5">
                    <span className="w-1 h-1 rounded-full bg-[#ea7008]" />
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                  </div>
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-xs bg-[#2e2a25] flex flex-col justify-between py-0.5">
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span className="w-1 h-1 rounded-full bg-[#ea7008]" />
                  </div>

                  {/* Left Compartment: Status LED Drive Slot (from image) */}
                  <div className="ml-3 flex-1 h-[38px] sm:h-[44px] bg-[#0c0b0a] border border-white/10 rounded-lg px-2.5 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-portfolio-gold/25 to-transparent pointer-events-none animate-tech-scan" />
                    
                    {/* Telemetry micro-tag */}
                    <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-[#8a8077] mb-1">
                      <span className="flex items-center gap-1 font-bold text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
                        EDGE-ROUTER
                      </span>
                      <span className="text-[#ea7008] font-semibold">1.4ms · 99.99%</span>
                    </div>

                    {/* The 14-LED indicator dots (from image) */}
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] server-led-1" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] server-led-2" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] server-led-3" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] server-led-1" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white server-led-4" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] server-led-2" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70 server-led-3" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] server-led-1" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] server-led-4" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white server-led-2" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] server-led-3" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 server-led-1" />
                    </div>
                  </div>

                  {/* Right Compartment: Oval Pod with 4 Status Dots (from image) */}
                  <div className="mr-3 ml-2.5 w-[56px] sm:w-[64px] h-[38px] sm:h-[44px] bg-[#0c0b0a] border border-[#ea7008]/40 rounded-full flex items-center justify-center gap-1 sm:gap-1.5 px-2 relative shadow-inner">
                    <span className="w-2 h-2 rounded-full bg-[#ea7008] server-led-1" />
                    <span className="w-2 h-2 rounded-full bg-white server-led-2" />
                    <span className="w-2 h-2 rounded-full bg-[#ea7008] server-led-3" />
                    <span className="w-2 h-2 rounded-full bg-white server-led-4" />
                  </div>
                </div>

                {/* ─── SERVER BLADE 2 (MIDDLE) ─── */}
                <div className="group/s2 relative w-[250px] sm:w-[280px] md:w-[310px] h-[54px] sm:h-[60px] bg-gradient-to-r from-[#1c1a17] via-[#121110] to-[#1c1a17] border-2 border-[#121110] rounded-xl shadow-[0_8px_22px_rgba(0,0,0,0.38)] p-1.5 flex items-center justify-between overflow-hidden transition-all duration-300 hover:border-portfolio-gold/90 hover:shadow-[0_12px_32px_rgba(234,112,8,0.35)]">
                  
                  {/* Rack Ears */}
                  <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-xs bg-[#2e2a25] flex flex-col justify-between py-0.5">
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span className="w-1 h-1 rounded-full bg-[#ea7008]" />
                  </div>
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-xs bg-[#2e2a25] flex flex-col justify-between py-0.5">
                    <span className="w-1 h-1 rounded-full bg-[#ea7008]" />
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                  </div>

                  {/* Left Compartment: Compute & Container Matrix (from image) */}
                  <div className="ml-3 flex-1 h-[38px] sm:h-[44px] bg-[#0c0b0a] border border-white/10 rounded-lg px-2.5 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-portfolio-gold/25 to-transparent pointer-events-none animate-tech-scan" style={{ animationDelay: '1.5s' }} />
                    
                    <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-[#8a8077] mb-1">
                      <span className="flex items-center gap-1 font-bold text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] animate-ping" />
                        K8S-CLUSTER
                      </span>
                      <span className="text-white font-semibold">48 PODS · 100% HEALTH</span>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] server-led-2" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] server-led-4" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white server-led-1" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] server-led-3" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] server-led-2" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80 server-led-4" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] server-led-1" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] server-led-3" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white server-led-2" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] server-led-4" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] server-led-1" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] server-led-3" />
                    </div>
                  </div>

                  {/* Right Compartment: Oval Pod with 4 Status Dots (from image) */}
                  <div className="mr-3 ml-2.5 w-[56px] sm:w-[64px] h-[38px] sm:h-[44px] bg-[#0c0b0a] border border-[#ea7008]/40 rounded-full flex items-center justify-center gap-1 sm:gap-1.5 px-2 relative shadow-inner">
                    <span className="w-2 h-2 rounded-full bg-white server-led-3" />
                    <span className="w-2 h-2 rounded-full bg-[#ea7008] server-led-1" />
                    <span className="w-2 h-2 rounded-full bg-white server-led-4" />
                    <span className="w-2 h-2 rounded-full bg-[#ea7008] server-led-2" />
                  </div>
                </div>

                {/* ─── SERVER BLADE 3 (BOTTOM) ─── */}
                <div className="group/s3 relative w-[250px] sm:w-[280px] md:w-[310px] h-[54px] sm:h-[60px] bg-gradient-to-r from-[#1c1a17] via-[#121110] to-[#1c1a17] border-2 border-[#121110] rounded-xl shadow-[0_8px_22px_rgba(0,0,0,0.38)] p-1.5 flex items-center justify-between overflow-hidden transition-all duration-300 hover:border-portfolio-gold/90 hover:shadow-[0_12px_32px_rgba(234,112,8,0.35)]">
                  
                  {/* Rack Ears */}
                  <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-xs bg-[#2e2a25] flex flex-col justify-between py-0.5">
                    <span className="w-1 h-1 rounded-full bg-[#ea7008]" />
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                  </div>
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-xs bg-[#2e2a25] flex flex-col justify-between py-0.5">
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span className="w-1 h-1 rounded-full bg-[#ea7008]" />
                  </div>

                  {/* Left Compartment: NVMe Storage & Database Array (from image) */}
                  <div className="ml-3 flex-1 h-[38px] sm:h-[44px] bg-[#0c0b0a] border border-white/10 rounded-lg px-2.5 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-portfolio-gold/25 to-transparent pointer-events-none animate-tech-scan" style={{ animationDelay: '3s' }} />
                    
                    <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-[#8a8077] mb-1">
                      <span className="flex items-center gap-1 font-bold text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
                        HA-DATABASE
                      </span>
                      <span className="text-[#ea7008] font-semibold">REPL: 0.0s LAG</span>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white server-led-1" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] server-led-3" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] server-led-2" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white server-led-4" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] server-led-1" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] server-led-3" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/70 server-led-2" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] server-led-4" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] server-led-1" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] server-led-3" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white server-led-2" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] server-led-4" />
                    </div>
                  </div>

                  {/* Right Compartment: Oval Pod with 4 Status Dots (from image) */}
                  <div className="mr-3 ml-2.5 w-[56px] sm:w-[64px] h-[38px] sm:h-[44px] bg-[#0c0b0a] border border-[#ea7008]/40 rounded-full flex items-center justify-center gap-1 sm:gap-1.5 px-2 relative shadow-inner">
                    <span className="w-2 h-2 rounded-full bg-[#ea7008] server-led-2" />
                    <span className="w-2 h-2 rounded-full bg-white server-led-4" />
                    <span className="w-2 h-2 rounded-full bg-[#ea7008] server-led-1" />
                    <span className="w-2 h-2 rounded-full bg-[#16a34a] server-led-3" />
                  </div>
                </div>

                {/* Soft Datacenter Floor Underglow & Drop Shadow */}
                <div className="w-[270px] sm:w-[310px] h-4 bg-[#ea7008]/20 blur-md -mt-1 pointer-events-none rounded-full" />
                <div className="w-[290px] sm:w-[330px] h-6 bg-[#121110]/15 blur-lg -mt-2 pointer-events-none rounded-full" />
              </div>

            </div>
          </div>

          {/* ─── 5. FLOATING TECH BADGES (16 Real Infrastructure Stacks) ─── */}
          {hostingTechItems.map((tech) => {
            const IconComp = tech.icon;
            const isFiltered = activeCategory !== 'all' && tech.category !== activeCategory;
            const isMatch = activeCategory === tech.category;
            const isHovered = hoveredTechId === tech.id;

            return (
              <div
                key={tech.id}
                onMouseEnter={() => setHoveredTechId(tech.id)}
                onMouseLeave={() => setHoveredTechId(null)}
                style={{
                  left: tech.posDesktop.left,
                  right: tech.posDesktop.right,
                  top: tech.posDesktop.top,
                  bottom: tech.posDesktop.bottom,
                }}
                className={`absolute z-30 transition-all duration-500 cursor-pointer ${tech.floatClass} ${
                  isFiltered
                    ? 'opacity-25 grayscale scale-90 pointer-events-none'
                    : isMatch
                    ? 'opacity-100 scale-105 z-40'
                    : 'opacity-100 scale-100'
                }`}
              >
                {/* Badge Card Container */}
                <div
                  className={`group relative flex items-center gap-2 sm:gap-2.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border transition-all duration-300 shadow-[0_3px_14px_rgba(0,0,0,0.06)] ${
                    isMatch || isHovered
                      ? 'border-portfolio-gold bg-[#fffaf5] shadow-[0_6px_24px_rgba(234,112,8,0.25)] ring-1 ring-portfolio-gold/30 scale-105'
                      : 'border-[#ebe5df] hover:border-portfolio-gold hover:bg-white hover:shadow-[0_8px_24px_rgba(234,112,8,0.22)] hover:scale-105'
                  }`}
                >
                  {/* Glowing Icon Frame */}
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

                  {/* Micro Pulse Dot */}
                  <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    isMatch || isHovered ? 'bg-[#ea7008] animate-ping' : 'bg-portfolio-gold/70 group-hover:bg-portfolio-gold group-hover:animate-ping'
                  }`} />
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default TechStackGlobeServerVisual;
