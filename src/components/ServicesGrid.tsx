import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from "../lib/utils";


const ServiceCard = ({ title, desc, children, className }: { title: string, desc: string, children: React.ReactNode, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
    className={cn("bg-white border border-portfolio-dark/15 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[1.5rem] p-5 lg:p-6 flex flex-col h-full group hover:shadow-2xl hover:border-portfolio-gold/50 transition-all duration-500 cursor-target", className)}
  >
    <div className="flex-1 mb-8 overflow-hidden rounded-[1rem] bg-portfolio-dark/[0.02] border border-portfolio-dark/5 relative min-h-[180px] lg:min-h-[200px] flex items-center justify-center">
      {children}
    </div>
    <div className="mt-auto">
      <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-portfolio-gold transition-colors">{title}</h3>
      <p className="text-portfolio-muted text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const WebsiteAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const springTransition = {
    type: "spring" as const,
    stiffness: 260,
    damping: 24,
    mass: 0.8,
  };

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center p-8 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card 1 — Back Left (Blog/Article layout) */}
      <motion.div
        animate={{
          x: isHovered ? -80 : 0,
          y: isHovered ? -10 : 8,
          rotate: isHovered ? -12 : -3,
          scale: isHovered ? 0.92 : 0.88,
        }}
        transition={springTransition}
        className="absolute w-44 h-60 bg-white rounded-2xl border border-portfolio-dark/8 overflow-hidden"
        style={{ 
          zIndex: 1,
          boxShadow: isHovered 
            ? '0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.03)' 
            : '0 4px 12px -2px rgba(0,0,0,0.06)',
          transformOrigin: 'center bottom',
        }}
      >
        <div className="w-full h-full bg-white flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 border-b border-gray-200">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <div className="ml-2 h-3 flex-1 bg-white rounded shadow-sm border border-gray-200" />
          </div>
          {/* Content */}
          <div className="p-4 flex-1">
            <div className="w-full h-20 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-300" />
              <div className="w-12 h-12 rounded-full bg-white/50 z-10" />
            </div>
            <div className="w-3/4 h-3 bg-portfolio-dark rounded-full mb-3" />
            <div className="space-y-2 mb-4">
              <div className="w-full h-1.5 bg-gray-200 rounded-full" />
              <div className="w-5/6 h-1.5 bg-gray-200 rounded-full" />
              <div className="w-4/6 h-1.5 bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Card 2 — Center Front (Hero/Landing page — dominant) */}
      <motion.div
        animate={{
          y: isHovered ? -16 : 0,
          scale: isHovered ? 1.04 : 1,
        }}
        transition={springTransition}
        className="relative w-48 h-64 bg-white rounded-2xl border border-portfolio-dark/10 overflow-hidden"
        style={{ 
          zIndex: 10,
          boxShadow: isHovered 
            ? '0 32px 64px -16px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04)' 
            : '0 8px 24px -4px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)',
          transformOrigin: 'center bottom',
        }}
      >
        <div className="w-full h-full bg-white flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 border-b border-gray-200">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <div className="ml-2 h-3 flex-1 bg-white rounded shadow-sm border border-gray-200" />
          </div>
          {/* Content */}
          <div className="flex-1">
            <div className="w-full h-24 bg-portfolio-dark relative overflow-hidden flex flex-col justify-center px-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-portfolio-gold/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="w-3/4 h-4 bg-white rounded-full mb-3 z-10" />
              <div className="w-1/2 h-2 bg-white/50 rounded-full z-10" />
            </div>
            <div className="p-4">
              <div className="space-y-2 mb-4">
                <div className="w-full h-1.5 bg-gray-200 rounded-full" />
                <div className="w-5/6 h-1.5 bg-gray-200 rounded-full" />
                <div className="w-4/6 h-1.5 bg-gray-200 rounded-full" />
              </div>
              <div className="w-20 h-6 bg-[#f97316] rounded-md" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Card 3 — Back Right (Dashboard/Analytics layout) */}
      <motion.div
        animate={{
          x: isHovered ? 80 : 0,
          y: isHovered ? -10 : 8,
          rotate: isHovered ? 12 : 3,
          scale: isHovered ? 0.92 : 0.88,
        }}
        transition={springTransition}
        className="absolute w-44 h-60 bg-white rounded-2xl border border-portfolio-dark/8 overflow-hidden"
        style={{ 
          zIndex: 1,
          boxShadow: isHovered 
            ? '0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.03)' 
            : '0 4px 12px -2px rgba(0,0,0,0.06)',
          transformOrigin: 'center bottom',
        }}
      >
        <div className="w-full h-full bg-white flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 border-b border-gray-200">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <div className="ml-2 h-3 flex-1 bg-white rounded shadow-sm border border-gray-200" />
          </div>
          {/* Sidebar & Content */}
          <div className="flex flex-1 overflow-hidden">
            <div className="w-10 bg-gray-50 border-r border-gray-200 p-2 space-y-2">
              <div className="w-full aspect-square bg-gray-200 rounded" />
              <div className="w-full aspect-square bg-gray-200 rounded" />
              <div className="w-full aspect-square bg-gray-200 rounded" />
            </div>
            <div className="flex-1 p-3">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="h-12 bg-white border border-gray-200 rounded-lg p-2 flex flex-col justify-between">
                  <div className="w-1/2 h-1.5 bg-gray-300 rounded-full" />
                  <div className="w-3/4 h-3 bg-portfolio-dark rounded-full" />
                </div>
                <div className="h-12 bg-white border border-gray-200 rounded-lg p-2 flex flex-col justify-between">
                  <div className="w-1/2 h-1.5 bg-gray-300 rounded-full" />
                  <div className="w-full h-3 bg-[#63c58f] rounded-full" />
                </div>
              </div>
              <div className="w-full h-16 border border-gray-200 rounded-lg mb-2 p-2 flex items-end gap-1">
                {[40, 65, 45, 80, 55, 70, 90, 60].map((h, i) => (
                  <div key={i} className="flex-1 bg-[#7f98fa]/40 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Ambient glow on hover */}
      <motion.div
        animate={{ 
          opacity: isHovered ? 0.15 : 0,
          scale: isHovered ? 1.1 : 0.8,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute w-48 h-48 bg-portfolio-gold rounded-full blur-[80px] pointer-events-none"
        style={{ zIndex: 0 }}
      />
    </div>
  );
};

const WebAppAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const logs = [
    { symbol: '▶', text: 'Building project...', symbolColor: 'text-[#f97316]' },
    { symbol: '✓', text: 'Dependencies resolved', symbolColor: 'text-[#4ade80]' },
    { symbol: '✓', text: 'TypeScript compiled', symbolColor: 'text-[#4ade80]' },
    { symbol: '▶', text: 'Running tests...', symbolColor: 'text-[#f97316]' },
    { symbol: '✓', text: '12/12 tests passed', symbolColor: 'text-[#4ade80]' },
    { symbol: '▶', text: 'Deploying to production', symbolColor: 'text-[#f97316]' },
    { symbol: '✓', text: 'Live at foremark.app', symbolColor: 'text-[#4ade80]', pulse: true },
  ];

  return (
    <div 
      className="w-full h-full flex items-center justify-center p-6 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        animate={{ 
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -4 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full max-w-[320px] bg-[#0d0d0d] rounded-2xl overflow-hidden border border-white/[0.08] relative shadow-xl"
        style={{
          boxShadow: isHovered
            ? '0 32px 64px -16px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06), 0 0 80px -20px rgba(249,115,22,0.1)'
            : '0 8px 24px -4px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04)',
        }}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[10px] text-white/40 font-mono tracking-wide">deploy.sh</span>
          <div className="w-4" /> {/* Spacer for centering */}
        </div>

        {/* Terminal Body */}
        <div className="px-4 py-4 font-mono text-[11px] md:text-[12px] leading-relaxed relative min-h-[180px]">
          {logs.map((log, i) => {
            const isVisibleIdle = i < 3;
            
            return (
              <motion.div 
                key={i}
                initial={{ opacity: isVisibleIdle ? 0.3 : 0, x: isVisibleIdle ? 0 : -10 }}
                animate={{ 
                  opacity: isHovered ? 1 : (isVisibleIdle ? 0.4 : 0),
                  x: isHovered ? 0 : (isVisibleIdle ? 0 : -10)
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: isHovered ? i * 0.15 : 0 
                }}
                className="flex items-center gap-3 mb-2"
              >
                <span className={log.symbolColor}>{log.symbol}</span>
                <span className="text-white/80">{log.text}</span>
                {log.pulse && isHovered && (
                  <motion.div 
                    animate={{ opacity: [1, 0.2, 1] }} 
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-[#4ade80] ml-1"
                    style={{ boxShadow: '0 0 8px rgba(74,222,128,0.8)' }}
                  />
                )}
              </motion.div>
            );
          })}

          {/* Blinking cursor */}
          <motion.div 
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-[8px] h-[15px] bg-white/60 mt-2 ml-1"
          />
        </div>
      </motion.div>
    </div>
  );
};

const ServerAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full h-full flex items-center justify-center p-6 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        animate={{ 
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -4 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full max-w-[320px] bg-[#0d0d0d] rounded-2xl overflow-hidden border border-white/[0.08] relative shadow-xl font-mono"
        style={{
          boxShadow: isHovered
            ? '0 32px 64px -16px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06), 0 0 80px -20px rgba(74,222,128,0.08)'
            : '0 8px 24px -4px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04)',
        }}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
          <span className="text-[10px] text-white/40 tracking-wide">system.monitor</span>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-[#4ade80] tracking-wider uppercase">Live</span>
            <motion.div 
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#4ade80]"
              style={{ boxShadow: '0 0 8px rgba(74,222,128,0.6)' }}
            />
          </div>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col gap-5">
          {/* CPU Metric */}
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-white/50 w-10">CPU</span>
            <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                animate={{ 
                  width: isHovered ? '67%' : '12%',
                  backgroundColor: isHovered ? '#f97316' : '#4ade80'
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full rounded-full"
              />
            </div>
            <span className="text-[10px] text-white/80 w-8 text-right">{isHovered ? '67%' : '12%'}</span>
          </div>

          {/* Memory Metric */}
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-white/50 w-10">MEM</span>
            <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: isHovered ? '43%' : '20%' }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                className="h-full bg-[#4ade80] rounded-full"
              />
            </div>
            <span className="text-[10px] text-white/80 w-8 text-right">{isHovered ? '43%' : '20%'}</span>
          </div>

          {/* Uptime */}
          <div className="flex items-center justify-between border-t border-white/5 pt-4">
            <span className="text-[10px] text-white/50">UPTIME</span>
            <motion.span 
              className="text-xl md:text-2xl text-white tracking-tight"
            >
              99.97%
            </motion.span>
          </div>

          {/* Sparkline (REQ/S) */}
          <div className="flex items-end justify-between gap-1 h-6">
            <div className="text-[10px] text-white/50 flex-1">REQ/S</div>
            <div className="flex gap-1 items-end h-full">
              {[30, 45, 25, 60, 80, 40, 70, 90].map((h, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: isHovered ? `${h}%` : '20%' }}
                  transition={{ 
                    duration: 0.5, 
                    delay: isHovered ? i * 0.05 : 0,
                    ease: "easeOut" 
                  }}
                  className="w-1.5 bg-[#4ade80] rounded-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const AutomationAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate fake events for scrolling log
  const fakeEvents = [
    { time: "12:04:31", id: "evt_082", status: "processed" },
    { time: "12:04:33", id: "evt_083", status: "synced" },
    { time: "12:04:35", id: "evt_084", status: "processed" },
    { time: "12:04:36", id: "evt_085", status: "synced" },
    { time: "12:04:38", id: "evt_086", status: "processed" },
  ];
  // Duplicate for seamless scroll
  const scrollingEvents = [...fakeEvents, ...fakeEvents, ...fakeEvents];

  return (
    <div 
      className="w-full h-full flex items-center justify-center p-6 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        animate={{ 
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -4 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full max-w-[340px] bg-[#0d0d0d] rounded-2xl overflow-hidden border border-white/[0.08] relative shadow-xl font-mono flex flex-col"
        style={{
          boxShadow: isHovered
            ? '0 32px 64px -16px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06), 0 0 80px -20px rgba(59,130,246,0.1)'
            : '0 8px 24px -4px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04)',
        }}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
          <span className="text-[10px] text-white/40 tracking-wide">event.pipeline</span>
          <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>

        <div className="p-4 md:p-5 flex flex-col">
          {/* Horizontal Pipeline */}
          <div className="flex items-center justify-between mb-6">
            <motion.div 
              className="px-2 py-1.5 border border-[#f97316] rounded-md bg-[#f97316]/10 flex flex-col items-center flex-1"
              style={{ boxShadow: isHovered ? '0 0 12px rgba(249,115,22,0.3)' : 'none' }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-[9px] text-[#f97316] uppercase tracking-wider mb-1">Input</span>
              <span className="text-[8px] text-[#f97316]/70 truncate max-w-full">webhook.receive</span>
            </motion.div>
            
            <div className="text-white/20 px-1">→</div>

            <motion.div 
              className="px-2 py-1.5 border border-white rounded-md bg-white/10 flex flex-col items-center flex-1"
              style={{ boxShadow: isHovered ? '0 0 12px rgba(255,255,255,0.2)' : 'none' }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-[9px] text-white uppercase tracking-wider mb-1">Transform</span>
              <span className="text-[8px] text-white/70 truncate max-w-full">data.normalize</span>
            </motion.div>

            <div className="text-white/20 px-1">→</div>

            <motion.div 
              className="px-2 py-1.5 border border-[#4ade80] rounded-md bg-[#4ade80]/10 flex flex-col items-center flex-1"
              style={{ boxShadow: isHovered ? '0 0 12px rgba(74,222,128,0.3)' : 'none' }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-[9px] text-[#4ade80] uppercase tracking-wider mb-1">Output</span>
              <span className="text-[8px] text-[#4ade80]/70 truncate max-w-full">crm.sync</span>
            </motion.div>
          </div>

          {/* Scrolling Event Log */}
          <div className="h-[72px] overflow-hidden relative rounded bg-white/[0.02] border border-white/[0.05] p-2">
            {/* Top/Bottom Fade Masks */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
            
            <motion.div 
              animate={{ 
                y: [0, -120] 
              }}
              transition={{ 
                duration: isHovered ? 4 : 8, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex flex-col gap-1.5"
            >
              {scrollingEvents.map((evt, i) => (
                <div key={i} className="text-[9px] text-white/50 flex gap-2">
                  <span className="text-white/30">[{evt.time}]</span>
                  <span className="text-white/70">{evt.id}</span>
                  <span className="text-white/30">→</span>
                  <span className={evt.status === 'synced' ? 'text-[#4ade80]' : 'text-white/50'}>
                    {evt.status}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ServicesGrid = () => {
  return (
    <section id="services-grid" className="py-32">
      <div className="text-center mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          What We Offer
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
        >
          Premium engineering <br /> for modern businesses
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-portfolio-muted text-lg max-w-2xl mx-auto"
        >
          From concept to code, we craft functional, high-performing websites and digital products.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <ServiceCard 
          title="Website Development" 
          desc="Crafting responsive, stunning websites tailored perfectly to your business goals."
        >
          <WebsiteAnimation />
        </ServiceCard>

        <ServiceCard 
          title="Web App / Software Development" 
          desc="Creating powerful web apps streamlining workflows, enhancing experiences."
        >
          <WebAppAnimation />
        </ServiceCard>

        <ServiceCard 
          title="Web Servers & Hosting" 
          desc="Secure, scalable infrastructure and managed hosting for high-performance applications."
        >
          <ServerAnimation />
        </ServiceCard>

        <ServiceCard 
          title="Business Automation" 
          desc="We map your business processes and build intelligent automations that save time."
        >
          <AutomationAnimation />
        </ServiceCard>
      </div>
    </section>
  );
};

export default ServicesGrid;