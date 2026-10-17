import React, { useState } from 'react';

// --- Technology Definition ---
interface TechItem {
  id: string;
  name: string;
  category: 'engine' | 'code' | 'ai' | 'integration';
  role: string;
  floatClass: string;
  // Position percentages inside the visual canvas
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
    {/* Bull horns + queue layers */}
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
    {/* Swirling Rosette Geometry */}
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
    {/* Sparkle starburst */}
    <path d="M50 18L54 42L78 46L54 50L50 74L46 50L22 46L46 42L50 18Z" fill="#ea7008" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="50" cy="46" r="3.5" fill="#ffffff" />
  </svg>
);

const LangChainIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="20" fill="#121110" stroke="#ffffff" strokeWidth="2.5" />
    {/* Parrot / chain link motif */}
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
    {/* Stylized Cloud */}
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
    {/* 4 Slack lozenges */}
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

// --- 16 Automation Technology Stack Items ---
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

  const categories = [
    { id: 'all', label: 'All Stacks (16)' },
    { id: 'engine', label: 'Automation Engines' },
    { id: 'code', label: 'Code & Queues' },
    { id: 'ai', label: 'AI & Document Parsing' },
    { id: 'integration', label: 'Integrations & APIs' },
  ] as const;

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden bg-transparent">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        {/* Header Block matching Site Style */}
        <div className="flex flex-col items-center max-w-3xl mb-4 sm:mb-6 relative z-20">
          <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-3 font-mono">
            Technology Stack
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#121110] mb-2.5 leading-tight">
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

        {/* ─── VISUAL STAGE (Server Rack + Datacenter Glow + Floating Badges) ─── */}
        <div className="relative w-full max-w-[960px] h-[480px] sm:h-[530px] md:h-[570px] flex items-center justify-center select-none overflow-hidden my-2">
          
          {/* 1. Datacenter Amber Core Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[280px] sm:h-[380px] bg-portfolio-gold/[0.09] blur-[110px] rounded-full pointer-events-none" />

          {/* 2. Rotating Automation Circuit Rings & Nodes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40">
            <svg
              width="540"
              height="540"
              viewBox="0 0 640 640"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-tech-spin-slow w-[340px] sm:w-[480px] h-[340px] sm:h-[480px]"
            >
              <circle cx="320" cy="320" r="190" stroke="#ea7008" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.45" />
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
              <circle cx="250" cy="250" r="160" stroke="#121110" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.25" />
              <path d="M250 40 V460 M40 250 H460" stroke="#ea7008" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.4" />
              <circle cx="250" cy="90" r="3" fill="#ea7008" />
              <circle cx="410" cy="250" r="3" fill="#121110" opacity="0.4" />
              <circle cx="250" cy="410" r="3" fill="#ea7008" />
              <circle cx="90" cy="250" r="3" fill="#121110" opacity="0.4" />
            </svg>
          </div>

          {/* 3. 42U DATACENTER SERVER RACK CHASSIS (Centerpiece) */}
          <div className="relative z-20 flex flex-col items-center scale-[0.72] sm:scale-[0.82] md:scale-[0.92] transition-transform duration-500">
            
            {/* Server Rack Cabinet Body */}
            <div className="w-[310px] sm:w-[340px] md:w-[360px] h-[400px] sm:h-[430px] md:h-[450px] bg-gradient-to-b from-[#181614] via-[#121110] to-[#0d0c0b] border-2 border-[#2b2723] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.45),0_0_40px_rgba(234,112,8,0.12)] p-3 relative overflow-hidden flex flex-col justify-between before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/60 before:to-transparent">
              
              {/* Top Fan Ventilation & Header */}
              <div className="border-b border-white/10 pb-2 mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ea7008] animate-pulse" />
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="text-[10px] font-mono font-bold text-[#a89f91] ml-1 tracking-wider">RACK 42U</span>
                </div>
                
                {/* Datacenter Status Badge */}
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-2.5 py-0.5 rounded text-[9.5px] font-mono text-portfolio-gold">
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-gold animate-ping" />
                  <span>CLUSTER ONLINE</span>
                </div>

                {/* Ventilation fan vents */}
                <div className="flex gap-1 opacity-50">
                  <div className="w-1 h-3 bg-portfolio-gold/50 rounded-full" />
                  <div className="w-1 h-3 bg-portfolio-gold/50 rounded-full" />
                  <div className="w-1 h-3 bg-portfolio-gold/50 rounded-full" />
                </div>
              </div>

              {/* Server Mounting Rails with U-Height Tick Marks */}
              <div className="flex-1 flex flex-col justify-between gap-2.5 relative">
                
                {/* Left & Right Rack Mounting Rails */}
                <div className="absolute inset-y-0 left-0 w-2.5 flex flex-col justify-around py-1 pointer-events-none opacity-40">
                  {['42', '36', '28', '18', '08', '01'].map((u) => (
                    <span key={u} className="text-[7px] font-mono text-portfolio-gold leading-none">U{u}</span>
                  ))}
                </div>
                <div className="absolute inset-y-0 right-0 w-1.5 flex flex-col justify-around py-1 pointer-events-none opacity-30">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-white/60" />
                  ))}
                </div>

                {/* ─── BLADE 1: AUTOMATION DISPATCH ENGINE (n8n & Temporal) ─── */}
                <div className="ml-3.5 mr-2.5 bg-[#0a0805] border border-white/10 hover:border-portfolio-gold/40 rounded-lg p-2.5 relative overflow-hidden flex flex-col justify-between transition-colors shadow-inner">
                  {/* Subtle sweep line */}
                  <div className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-portfolio-gold/15 to-transparent pointer-events-none animate-tech-scan" />
                  
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ea7008]" />
                      <span className="text-[10px] font-mono font-bold text-white tracking-wider">BLADE 01 // ORCHESTRATOR</span>
                    </div>
                    <span className="text-[9px] font-mono text-[#a89f91]">n8n &amp; Temporal</span>
                  </div>

                  {/* OLED Mini Telemetry Screen */}
                  <div className="bg-[#121110] rounded border border-white/5 p-1.5 font-mono text-[9.5px] leading-tight text-left">
                    <p className="text-white flex items-center justify-between">
                      <span className="text-portfolio-gold">[PIPELINE]</span>
                      <span className="text-[#a89f91]">ACTIVE: <strong className="text-white">142 FLOWS</strong></span>
                    </p>
                    <p className="text-[#a89f91] truncate mt-0.5">
                      LATENCY: <strong className="text-portfolio-gold">1.8ms</strong> | ERRORS: <strong className="text-[#4ade80]">0.00%</strong>
                    </p>
                  </div>

                  {/* Activity LEDs */}
                  <div className="flex items-center justify-between mt-1.5 pt-1 border-t border-white/5 text-[9px] font-mono text-[#6e665d]">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea7008] animate-ping" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span className="ml-1 text-[8.5px] text-[#a89f91]">EVENT LOOP</span>
                    </div>
                    <span className="text-portfolio-gold font-bold text-[8.5px]">SYNC OK</span>
                  </div>
                </div>

                {/* ─── BLADE 2: DISTRIBUTED QUEUES & STREAM MATRIX (BullMQ & Redis) ─── */}
                <div className="ml-3.5 mr-2.5 bg-[#0a0805] border border-white/10 hover:border-portfolio-gold/40 rounded-lg p-2.5 relative overflow-hidden flex flex-col justify-between transition-colors shadow-inner">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ffffff]" />
                      <span className="text-[10px] font-mono font-bold text-white tracking-wider">BLADE 02 // TASK QUEUES</span>
                    </div>
                    <span className="text-[9px] font-mono text-portfolio-gold">BullMQ &amp; Redis</span>
                  </div>

                  {/* Live VU Throughput Meter Bar */}
                  <div className="space-y-1 text-left">
                    <div className="flex items-center justify-between text-[9px] font-mono text-[#a89f91]">
                      <span>THROUGHPUT</span>
                      <span className="text-white font-bold">4,820 JOBS/S</span>
                    </div>
                    <div className="grid grid-cols-10 gap-0.5 h-2 bg-black/40 p-0.5 rounded border border-white/5">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-full rounded-xs transition-opacity duration-300 ${
                            i < 8
                              ? i < 5
                                ? 'bg-portfolio-gold opacity-90'
                                : 'bg-[#ea7008] opacity-80'
                              : 'bg-white/30 opacity-40'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* 4 Optical SFP+ Transceiver Ports */}
                  <div className="flex items-center justify-between mt-1.5 pt-1 border-t border-white/5">
                    <div className="flex items-center gap-1.5">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-4 h-2.5 rounded-xs bg-[#161412] border border-white/15 flex items-center justify-center">
                          <span className={`w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-portfolio-gold animate-ping' : 'bg-white/60'}`} />
                        </div>
                      ))}
                    </div>
                    <span className="text-[8.5px] font-mono text-[#a89f91]">10G FIBER BUS</span>
                  </div>
                </div>

                {/* ─── BLADE 3: NEURAL & DOCUMENT INFERENCE (AI & OCR Unit) ─── */}
                <div className="ml-3.5 mr-2.5 bg-[#0a0805] border border-white/10 hover:border-portfolio-gold/40 rounded-lg p-2.5 relative overflow-hidden flex flex-col justify-between transition-colors shadow-inner">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ea7008]" />
                      <span className="text-[10px] font-mono font-bold text-white tracking-wider">BLADE 03 // AI INFERENCE</span>
                    </div>
                    <span className="text-[9px] font-mono text-[#a89f91]">Claude &amp; GPT-4o</span>
                  </div>

                  {/* AI Extraction Status */}
                  <div className="bg-[#121110] rounded border border-white/5 p-1.5 font-mono text-[9px] leading-tight text-left flex items-center justify-between">
                    <div>
                      <p className="text-white">OCR ACCURACY: <strong className="text-portfolio-gold">99.9%</strong></p>
                      <p className="text-[#a89f91] mt-0.5">PARSING: <strong className="text-white">PDFs / INVOICES</strong></p>
                    </div>
                    <div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-portfolio-gold text-[10px] font-bold">
                      AI
                    </div>
                  </div>

                  {/* Heatsink dissipation cooling grill */}
                  <div className="flex items-center justify-between mt-1 pt-1 border-t border-white/5">
                    <div className="flex gap-1 opacity-70">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-[#ea7008]/40 rounded-xs" />
                      ))}
                    </div>
                    <span className="text-[8.5px] font-mono text-portfolio-gold">ZERO DRIFT</span>
                  </div>
                </div>

                {/* ─── BLADE 4: REDUNDANT POWER & ENTERPRISE BUS ─── */}
                <div className="ml-3.5 mr-2.5 bg-[#0a0805] border border-white/10 rounded-lg p-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* Hot-Swap PSU Handle 1 */}
                    <div className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                      <span className="text-[8px] font-mono text-white font-bold">PSU-A</span>
                    </div>
                    {/* Hot-Swap PSU Handle 2 */}
                    <div className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-portfolio-gold animate-pulse" />
                      <span className="text-[8px] font-mono text-[#a89f91] font-bold">PSU-B</span>
                    </div>
                  </div>
                  
                  {/* Brand Laser Inscription */}
                  <div className="text-[8.5px] font-mono tracking-widest text-portfolio-gold font-bold">
                    FOREMARK // D-CENTER
                  </div>
                </div>

              </div>

              {/* Bottom Chassis Bevel & Footers */}
              <div className="border-t border-white/10 pt-1.5 mt-2 flex items-center justify-between text-[8px] font-mono text-[#6e665d]">
                <span>ENCLOSURE 19-INCH</span>
                <span className="text-white/60">HOT-SWAPPABLE</span>
                <span>FAILOVER: 0MS</span>
              </div>

              {/* Subtle CRT Screen Scanlines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_3px] pointer-events-none" />
            </div>

            {/* Datacenter Floor Ambient Reflection & Drop Shadow */}
            <div className="w-[280px] sm:w-[320px] md:w-[340px] h-5 bg-portfolio-gold/20 blur-lg -mt-1 pointer-events-none rounded-full" />
            <div className="w-[310px] sm:w-[360px] md:w-[390px] h-7 bg-[#121110]/15 blur-xl -mt-2 pointer-events-none rounded-full" />
          </div>

          {/* 4. FLOATING AUTOMATION TECH BADGES (Compact Symmetrical Ring) */}
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
                <div className={`${tech.floatClass}`}>
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

        {/* Bottom Subtitle / SLA Guarantee */}
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
