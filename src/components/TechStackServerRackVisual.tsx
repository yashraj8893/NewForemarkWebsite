import React, { useState } from 'react';

// --- Technology Definition ---
interface TechItem {
  id: string;
  name: string;
  category: 'engine' | 'code' | 'ai' | 'integration';
  role: string;
  floatClass: string;
  posDesktop: { left?: string; right?: string; top?: string; bottom?: string };
  posMobile: { left?: string; right?: string; top?: string; bottom?: string };
  icon: (props: { className?: string }) => React.ReactNode;
}

// Custom SVGs in strictly Foremark Orange (#ea7008), White (#ffffff), and Obsidian Black (#121110)

const N8nIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="26" cy="50" r="14" fill="#ea7008" />
    <circle cx="74" cy="28" r="14" fill="#ffffff" />
    <circle cx="74" cy="72" r="14" fill="#ea7008" />
    <path d="M38 44L62 34" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
    <path d="M38 56L62 66" stroke="#ea7008" strokeWidth="6" strokeLinecap="round" />
    <circle cx="50" cy="50" r="5" fill="#121110" stroke="#ffffff" strokeWidth="2" />
  </svg>
);

const TemporalIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#181614" stroke="#ffffff" strokeWidth="2" />
    <path d="M50 16L80 50L50 84L20 50L50 16Z" stroke="#ea7008" strokeWidth="5" strokeLinejoin="round" />
    <path d="M50 30L68 50L50 70L32 50L50 30Z" fill="#ea7008" fillOpacity="0.2" stroke="#ffffff" strokeWidth="3" />
    <circle cx="50" cy="50" r="5" fill="#ffffff" />
  </svg>
);

const MakeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="46" fill="#121110" stroke="#ea7008" strokeWidth="3" />
    <path d="M28 66L42 34L56 52L72 34" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="28" cy="66" r="5" fill="#ea7008" />
    <circle cx="72" cy="34" r="5" fill="#ea7008" />
  </svg>
);

const ZapierIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#ea7008" />
    <path d="M50 18V82M18 50H82M27 27L73 73M27 73L73 27" stroke="#121110" strokeWidth="9" strokeLinecap="round" />
    <circle cx="50" cy="50" r="8" fill="#ffffff" />
  </svg>
);

const NodeJSIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 14L82 32V68L50 86L18 68V32L50 14Z" fill="#181614" stroke="#ea7008" strokeWidth="3" />
    <path d="M36 40V62M36 40L64 62M64 40V62" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="50" cy="51" r="5" fill="#ea7008" />
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

const BullMQIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#181614" stroke="#ffffff" strokeWidth="2" />
    <path d="M22 34C28 22 42 24 50 36C58 24 72 22 78 34" stroke="#ea7008" strokeWidth="6" strokeLinecap="round" />
    <rect x="25" y="46" width="50" height="8" rx="4" fill="#ffffff" />
    <rect x="28" y="58" width="44" height="8" rx="4" fill="#ea7008" />
    <rect x="32" y="70" width="36" height="8" rx="4" fill="#ffffff" opacity="0.6" />
  </svg>
);

const FastAPIIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="46" fill="#121110" stroke="#ffffff" strokeWidth="3" />
    <path d="M54 18L26 52H48L44 82L74 46H50L54 18Z" fill="#ea7008" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

const WebhookIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#181614" stroke="#ea7008" strokeWidth="2.5" />
    <circle cx="50" cy="74" r="8" fill="#ffffff" />
    <circle cx="28" cy="30" r="8" fill="#ea7008" />
    <circle cx="72" cy="30" r="8" fill="#ea7008" />
    <path d="M50 66V46M50 46L28 38M50 46L72 38" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

const OpenAIIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#121110" stroke="#ea7008" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="10" stroke="#ea7008" strokeWidth="3" />
    <path d="M50 26C56 26 62 30 65 35L50 44L35 35C38 30 44 26 50 26Z" stroke="#ffffff" strokeWidth="3.5" />
    <path d="M72 40C75 45 75 52 72 58L57 49L57 32C63 33 69 36 72 40Z" stroke="#ea7008" strokeWidth="3.5" />
    <path d="M72 60C69 65 63 68 57 69L57 52L72 43C75 49 75 55 72 60Z" stroke="#ffffff" strokeWidth="3.5" />
    <path d="M50 74C44 74 38 70 35 65L50 56L65 65C62 70 56 74 50 74Z" stroke="#ea7008" strokeWidth="3.5" />
    <path d="M28 60C25 55 25 48 28 42L43 51L43 68C37 67 31 64 28 60Z" stroke="#ffffff" strokeWidth="3.5" />
    <path d="M28 40C31 35 37 32 43 31L43 48L28 57C25 51 25 45 28 40Z" stroke="#ea7008" strokeWidth="3.5" />
  </svg>
);

const ClaudeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="46" fill="#181614" stroke="#ea7008" strokeWidth="3" />
    <path d="M50 18L54 42L78 46L54 50L50 74L46 50L22 46L46 42L50 18Z" fill="#ea7008" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="50" cy="46" r="3.5" fill="#ffffff" />
  </svg>
);

const LangChainIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#121110" stroke="#ffffff" strokeWidth="2.5" />
    <circle cx="38" cy="38" r="14" stroke="#ea7008" strokeWidth="5" />
    <circle cx="62" cy="62" r="14" stroke="#ffffff" strokeWidth="5" />
    <path d="M46 46L54 54" stroke="#ea7008" strokeWidth="7" strokeLinecap="round" />
    <circle cx="34" cy="34" r="3" fill="#ffffff" />
  </svg>
);

const HubSpotIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="46" fill="#121110" stroke="#ea7008" strokeWidth="3" />
    <circle cx="50" cy="50" r="12" fill="#ea7008" />
    <circle cx="76" cy="36" r="6" fill="#ffffff" />
    <circle cx="28" cy="70" r="6" fill="#ffffff" />
    <path d="M76 36L58 44M28 70L42 56" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M50 20V38" stroke="#ea7008" strokeWidth="4.5" strokeLinecap="round" />
    <circle cx="50" cy="18" r="4" fill="#ea7008" />
  </svg>
);

const SalesforceIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#181614" stroke="#ffffff" strokeWidth="2" />
    <path d="M36 68H68C76 68 82 62 82 54C82 47 77 41 70 40C69 31 61 24 51 24C43 24 36 28 33 35C26 36 20 42 20 50C20 60 27 68 36 68Z" fill="#ea7008" fillOpacity="0.25" stroke="#ea7008" strokeWidth="4" strokeLinejoin="round" />
    <path d="M42 48C45 44 54 44 58 48M36 56H64" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const StripeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#121110" stroke="#ea7008" strokeWidth="2.5" />
    <path d="M58 35C58 29 53 26 46 26C38 26 33 30 32 35" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
    <path d="M32 44C34 50 42 52 50 54C58 56 66 59 66 67C66 75 58 80 48 80C38 80 32 74 31 67" stroke="#ea7008" strokeWidth="6.5" strokeLinecap="round" />
  </svg>
);

const SlackIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="46" fill="#181614" stroke="#ffffff" strokeWidth="2.5" />
    <rect x="24" y="44" width="22" height="10" rx="5" fill="#ea7008" />
    <circle cx="54" cy="32" r="5" fill="#ffffff" />
    <rect x="44" y="24" width="10" height="22" rx="5" fill="#ffffff" />
    <circle cx="68" cy="54" r="5" fill="#ea7008" />
    <rect x="54" y="46" width="22" height="10" rx="5" fill="#ea7008" />
    <circle cx="46" cy="68" r="5" fill="#ffffff" />
    <rect x="46" y="54" width="10" height="22" rx="5" fill="#ffffff" />
    <circle cx="32" cy="46" r="5" fill="#ea7008" />
  </svg>
);

// --- 16 Restored Automation Technology Stack Items ---
const automationTechItems: TechItem[] = [
  // ─── LEFT FLANK (8 ITEMS) ───
  {
    id: 'n8n',
    name: 'n8n Workflow',
    category: 'engine',
    role: 'Self-Hosted Orchestration',
    floatClass: 'animate-tech-float-1',
    posDesktop: { left: '1%', top: '6%' },
    posMobile: { left: '2%', top: '6%' },
    icon: N8nIcon,
  },
  {
    id: 'temporal',
    name: 'Temporal.io',
    category: 'engine',
    role: 'Durable State Machine',
    floatClass: 'animate-tech-float-3',
    posDesktop: { left: '12%', top: '18%' },
    posMobile: { left: '13%', top: '19%' },
    icon: TemporalIcon,
  },
  {
    id: 'make',
    name: 'Make.com',
    category: 'engine',
    role: 'Multi-Step Pipelines',
    floatClass: 'animate-tech-float-5',
    posDesktop: { left: '2%', top: '31%' },
    posMobile: { left: '3%', top: '32%' },
    icon: MakeIcon,
  },
  {
    id: 'zapier',
    name: 'Zapier',
    category: 'engine',
    role: 'SaaS Event Triggers',
    floatClass: 'animate-tech-float-2',
    posDesktop: { left: '13%', top: '44%' },
    posMobile: { left: '14%', top: '45%' },
    icon: ZapierIcon,
  },
  {
    id: 'nodejs',
    name: 'Node.js / TS',
    category: 'code',
    role: 'Event Microservices',
    floatClass: 'animate-tech-float-4',
    posDesktop: { left: '1%', top: '57%' },
    posMobile: { left: '2%', top: '58%' },
    icon: NodeJSIcon,
  },
  {
    id: 'python',
    name: 'Python',
    category: 'code',
    role: 'Data Transforms & ETL',
    floatClass: 'animate-tech-float-6',
    posDesktop: { left: '12%', top: '70%' },
    posMobile: { left: '13%', top: '71%' },
    icon: PythonIcon,
  },
  {
    id: 'bullmq',
    name: 'BullMQ',
    category: 'code',
    role: 'Redis Persistent Queues',
    floatClass: 'animate-tech-float-1',
    posDesktop: { left: '2%', top: '83%' },
    posMobile: { left: '3%', top: '84%' },
    icon: BullMQIcon,
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'code',
    role: 'Sub-MS Webhook Ingestion',
    floatClass: 'animate-tech-float-3',
    posDesktop: { left: '13%', top: '93%' },
    posMobile: { left: '14%', top: '93%' },
    icon: FastAPIIcon,
  },

  // ─── RIGHT FLANK (8 ITEMS) ───
  {
    id: 'openai',
    name: 'OpenAI API',
    category: 'ai',
    role: 'GPT-4o Reasoning & Vision',
    floatClass: 'animate-tech-float-2',
    posDesktop: { right: '1%', top: '6%' },
    posMobile: { right: '2%', top: '6%' },
    icon: OpenAIIcon,
  },
  {
    id: 'claude',
    name: 'Claude API',
    category: 'ai',
    role: 'Document & Legal Extraction',
    floatClass: 'animate-tech-float-4',
    posDesktop: { right: '12%', top: '18%' },
    posMobile: { right: '13%', top: '19%' },
    icon: ClaudeIcon,
  },
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'ai',
    role: 'RAG & AI Agent Tools',
    floatClass: 'animate-tech-float-6',
    posDesktop: { right: '2%', top: '31%' },
    posMobile: { right: '3%', top: '32%' },
    icon: LangChainIcon,
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'integration',
    role: 'CRM & Deal Automation',
    floatClass: 'animate-tech-float-1',
    posDesktop: { right: '13%', top: '44%' },
    posMobile: { right: '14%', top: '45%' },
    icon: HubSpotIcon,
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    category: 'integration',
    role: 'Enterprise Sync Engine',
    floatClass: 'animate-tech-float-3',
    posDesktop: { right: '1%', top: '57%' },
    posMobile: { right: '2%', top: '58%' },
    icon: SalesforceIcon,
  },
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'integration',
    role: 'Billing & Payment Webhooks',
    floatClass: 'animate-tech-float-5',
    posDesktop: { right: '12%', top: '70%' },
    posMobile: { right: '13%', top: '71%' },
    icon: StripeIcon,
  },
  {
    id: 'slack',
    name: 'Slack',
    category: 'integration',
    role: 'Operations Chatbots',
    floatClass: 'animate-tech-float-2',
    posDesktop: { right: '2%', top: '83%' },
    posMobile: { right: '3%', top: '84%' },
    icon: SlackIcon,
  },
  {
    id: 'webhooks',
    name: 'Webhooks Bus',
    category: 'integration',
    role: 'Bi-Directional Event Bus',
    floatClass: 'animate-tech-float-4',
    posDesktop: { right: '13%', top: '93%' },
    posMobile: { right: '14%', top: '93%' },
    icon: WebhookIcon,
  },
];

export const TechStackServerRackVisual = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'engine' | 'code' | 'ai' | 'integration'>('all');
  const [hoveredTechId, setHoveredTechId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Stacks (16)' },
    { id: 'engine', label: 'Automation Engines' },
    { id: 'code', label: 'Code & Queues' },
    { id: 'ai', label: 'AI & Document Parsing' },
    { id: 'integration', label: 'Integrations & APIs' },
  ] as const;

  // 16 Symmetrical Fiber Optic Conduits connecting Core Platform to Badges
  const connectingConduits = [
    // LEFT FLANK
    { id: 'n8n', d: 'M 430 275 C 310 220, 230 95, 170 55', endX: 170, endY: 55, startX: 430, startY: 275 },
    { id: 'temporal', d: 'M 405 285 C 330 250, 300 170, 275 125', endX: 275, endY: 125, startX: 405, startY: 285 },
    { id: 'make', d: 'M 385 300 C 295 285, 225 230, 175 205', endX: 175, endY: 205, startX: 385, startY: 300 },
    { id: 'zapier', d: 'M 375 315 C 330 315, 300 295, 265 280', endX: 265, endY: 280, startX: 375, startY: 315 },
    { id: 'nodejs', d: 'M 385 330 C 295 335, 225 350, 175 360', endX: 175, endY: 360, startX: 385, startY: 330 },
    { id: 'python', d: 'M 405 345 C 345 365, 305 410, 265 440', endX: 265, endY: 440, startX: 405, startY: 345 },
    { id: 'bullmq', d: 'M 430 360 C 320 395, 225 480, 170 515', endX: 170, endY: 515, startX: 430, startY: 360 },
    { id: 'fastapi', d: 'M 455 375 C 380 430, 330 520, 265 570', endX: 265, endY: 570, startX: 455, startY: 375 },

    // RIGHT FLANK
    { id: 'openai', d: 'M 570 275 C 690 220, 770 95, 830 55', endX: 830, endY: 55, startX: 570, startY: 275 },
    { id: 'claude', d: 'M 595 285 C 670 250, 700 170, 725 125', endX: 725, endY: 125, startX: 595, startY: 285 },
    { id: 'langchain', d: 'M 615 300 C 705 285, 775 230, 825 205', endX: 825, endY: 205, startX: 615, startY: 300 },
    { id: 'hubspot', d: 'M 625 315 C 670 315, 700 295, 735 280', endX: 735, endY: 280, startX: 625, startY: 315 },
    { id: 'salesforce', d: 'M 615 330 C 705 335, 775 350, 825 360', endX: 825, endY: 360, startX: 615, startY: 330 },
    { id: 'stripe', d: 'M 595 345 C 655 365, 695 410, 735 440', endX: 735, endY: 440, startX: 595, startY: 345 },
    { id: 'slack', d: 'M 570 360 C 680 395, 775 480, 830 515', endX: 830, endY: 515, startX: 570, startY: 360 },
    { id: 'webhooks', d: 'M 545 375 C 620 430, 670 520, 735 570', endX: 735, endY: 570, startX: 545, startY: 375 },
  ];

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-transparent">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Header Block matching Site Style */}
        <div className="flex flex-col items-center max-w-3xl mb-4 sm:mb-6 relative z-20">
          <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-3 font-mono">
            Technology Stack
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display tracking-tight text-[#121110] mb-2.5 leading-tight">
            Intelligent Infrastructure For{' '}
            <span className="text-portfolio-gold">Business Automation</span>
          </h2>
          <p className="text-[#5c544d] text-xs sm:text-sm leading-relaxed max-w-lg font-normal">
            Fault-tolerant event pipelines, enterprise task queues, AI reasoning models, and zero-data-loss system integrations.
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

        {/* ─── VISUAL STAGE (Transparent Center 3D Datacenter Core + Connecting Light Orange Lines + 16 Real Technologies) ─── */}
        <div className="relative w-full max-w-[980px] h-[480px] sm:h-[530px] md:h-[580px] flex items-center justify-center select-none overflow-hidden my-2">
          
          {/* 1. Datacenter Amber Core Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] h-[280px] sm:h-[400px] bg-portfolio-gold/[0.12] blur-[110px] rounded-full pointer-events-none" />

          {/* 2. Rotating Automation Circuit Rings & Nodes (Transparent Background) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-45">
            <svg
              width="580"
              height="580"
              viewBox="0 0 640 640"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-tech-spin-slow w-[340px] sm:w-[500px] h-[340px] sm:h-[500px]"
            >
              <circle cx="320" cy="320" r="190" stroke="#ea7008" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.5" />
              <circle cx="320" cy="320" r="240" stroke="#121110" strokeWidth="1" strokeDasharray="3 14" opacity="0.25" />
              <circle cx="320" cy="320" r="285" stroke="#ea7008" strokeWidth="1.5" strokeDasharray="12 18" opacity="0.4" />
              <circle cx="320" cy="80" r="4" fill="#ea7008" />
              <circle cx="560" cy="320" r="4" fill="#121110" opacity="0.5" />
              <circle cx="320" cy="560" r="4" fill="#ea7008" />
              <circle cx="80" cy="320" r="4" fill="#121110" opacity="0.5" />
            </svg>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-35">
            <svg
              width="440"
              height="440"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-tech-spin-reverse w-[260px] sm:w-[380px] h-[260px] sm:h-[380px]"
            >
              <circle cx="250" cy="250" r="150" stroke="#121110" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.25" />
              <path d="M250 40 V460 M40 250 H460" stroke="#ea7008" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.35" />
              <circle cx="250" cy="100" r="3" fill="#ea7008" />
              <circle cx="400" cy="250" r="3" fill="#121110" opacity="0.4" />
              <circle cx="250" cy="400" r="3" fill="#ea7008" />
              <circle cx="100" cy="250" r="3" fill="#121110" opacity="0.4" />
            </svg>
          </div>

          {/* ─── 3. BEAUTIFUL LIGHT ORANGE CONDUIT LINES (CONNECTING TO CORE) ─── */}
          <div className="absolute inset-0 pointer-events-none z-15">
            <svg
              viewBox="0 0 1000 600"
              preserveAspectRatio="none"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Soft Orange Glow Filter */}
                <filter id="cableGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Light Orange Radiant Gradient */}
                <linearGradient id="lightOrangeConduit" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffb066" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#ea7008" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#ff9933" stopOpacity="0.95" />
                </linearGradient>

                {/* Animated Dash Keyframes */}
                <style>{`
                  @keyframes cablePulse {
                    from { stroke-dashoffset: 48; }
                    to { stroke-dashoffset: 0; }
                  }
                  .cable-pulse-flow {
                    animation: cablePulse 2.4s linear infinite;
                  }
                `}</style>
              </defs>

              {connectingConduits.map((conduit) => {
                const tech = automationTechItems.find((t) => t.id === conduit.id);
                const isFiltered = activeCategory !== 'all' && tech?.category !== activeCategory;
                const isHovered = hoveredTechId === conduit.id;
                const isDimmed = isFiltered || (hoveredTechId !== null && !isHovered);

                return (
                  <g
                    key={conduit.id}
                    className="transition-opacity duration-500"
                    opacity={isDimmed ? 0.12 : isHovered ? 1 : 0.75}
                  >
                    {/* Layer 1: Soft Ambient Light Orange Glow */}
                    <path
                      d={conduit.d}
                      stroke="#ea7008"
                      strokeWidth={isHovered ? 4.5 : 3}
                      strokeLinecap="round"
                      opacity={0.35}
                      filter="url(#cableGlow)"
                    />

                    {/* Layer 2: Radiant Light Orange Luminous Conduit */}
                    <path
                      d={conduit.d}
                      stroke="url(#lightOrangeConduit)"
                      strokeWidth={isHovered ? 2.2 : 1.5}
                      strokeLinecap="round"
                    />

                    {/* Layer 3: Animated Flowing Light Pulse */}
                    <path
                      d={conduit.d}
                      stroke="#ffffff"
                      strokeWidth={1.2}
                      strokeDasharray="6 22"
                      strokeLinecap="round"
                      className="cable-pulse-flow"
                      opacity={0.8}
                    />

                    {/* Terminal Connection Node at Badge End */}
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

                    {/* Terminal Connection Node at Core Platform End */}
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

          {/* 3. CENTERPIECE: TRANSPARENT 3D ISOMETRIC DATACENTER CLUSTER (NO BG) */}
          <div className="relative z-20 flex flex-col items-center transition-transform duration-500 scale-[0.72] sm:scale-[0.84] md:scale-[0.95]">
            
            {/* The 3D Datacenter Supercluster with Background 100% Removed */}
            <div className="relative flex items-center justify-center">
              <img
                src="/datacenter-server-core.png"
                alt="Foremark Enterprise Datacenter Server Infrastructure"
                className="w-[280px] sm:w-[340px] md:w-[390px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] select-none pointer-events-none"
                loading="eager"
              />

              {/* Glowing Amber Core Energy Flare on top cube */}
              <div className="absolute top-[16%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-portfolio-gold/35 blur-xl pointer-events-none animate-pulse" />

              {/* Central Server Core Holographic Badge */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#121110]/90 backdrop-blur-md border border-portfolio-gold/60 shadow-[0_4px_16px_rgba(0,0,0,0.35)] flex items-center gap-1.5 z-30 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                <span className="text-[9px] sm:text-[10px] font-mono text-portfolio-gold font-bold tracking-wider">
                  FOREMARK // CORE CLUSTER
                </span>
              </div>
            </div>

            {/* Datacenter Floor Ambient Reflection & Ground Drop Shadow */}
            <div className="w-[280px] sm:w-[340px] md:w-[380px] h-6 bg-portfolio-gold/25 blur-xl -mt-4 pointer-events-none rounded-full" />
            <div className="w-[320px] sm:w-[380px] md:w-[420px] h-8 bg-[#121110]/20 blur-2xl -mt-3 pointer-events-none rounded-full" />
          </div>

          {/* 4. RESTORED 16 REAL AUTOMATION TECH BADGES (Surrounding the central 3D cluster) */}
          {automationTechItems.map((tech) => {
            const IconComp = tech.icon;
            const isFiltered = activeCategory !== 'all' && tech.category !== activeCategory;
            const isMatch = activeCategory === tech.category;

            return (
              <div
                key={tech.id}
                style={{
                  ...tech.posDesktop,
                }}
                className={`absolute z-30 transition-all duration-500 ease-out ${
                  isFiltered ? 'opacity-20 scale-85 blur-[0.6px] pointer-events-none' : 'opacity-100 scale-100'
                }`}
              >
                <div
                  className={`${tech.floatClass}`}
                  onMouseEnter={() => setHoveredTechId(tech.id)}
                  onMouseLeave={() => setHoveredTechId(null)}
                >
                  <div
                    className={`group relative flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border backdrop-blur-md transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 ${
                      isMatch
                        ? 'bg-[#121110] border-portfolio-gold shadow-[0_4px_20px_rgba(234,112,8,0.35)] scale-105'
                        : 'bg-white/95 border-[#ebe5df] hover:border-portfolio-gold/60 hover:bg-[#121110]'
                    }`}
                  >
                    {/* Tech Icon */}
                    <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Tech Label & Role */}
                    <div className="flex flex-col text-left">
                      <span
                        className={`text-[11px] sm:text-[12px] font-bold font-display tracking-tight transition-colors duration-300 ${
                          isMatch ? 'text-white' : 'text-[#121110] group-hover:text-white'
                        }`}
                      >
                        {tech.name}
                      </span>
                      <span
                        className={`text-[9px] sm:text-[9.5px] font-mono leading-none transition-colors duration-300 ${
                          isMatch ? 'text-portfolio-gold' : 'text-[#7d746a] group-hover:text-portfolio-gold'
                        }`}
                      >
                        {tech.role}
                      </span>
                    </div>

                    {/* Subtle Orange Glow Dot on hover */}
                    <div className="w-1.5 h-1.5 rounded-full bg-portfolio-gold opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-0.5" />
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom SLA Guarantee */}
        <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs text-[#7d746a] font-mono mt-3">
          <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
          <span>ZERO-LOCKIN ARCHITECTURE</span>
          <span className="text-[#d4cfc9]">•</span>
          <span>ENTERPRISE RETRY QUEUES</span>
          <span className="text-[#d4cfc9]">•</span>
          <span>SELF-HOSTED CAPABLE</span>
        </div>

      </div>
    </section>
  );
};

export default TechStackServerRackVisual;
