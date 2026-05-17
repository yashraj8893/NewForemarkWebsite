import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from "../lib/utils";
import { ArrowUpRight, Code, Server, Zap } from 'lucide-react';

const ServiceCard = ({ title, desc, children, className }: { title: string, desc: string, children: React.ReactNode, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
    className={cn("bg-white border border-portfolio-dark/15 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[1.5rem] p-6 lg:p-8 flex flex-col h-full group hover:shadow-2xl hover:border-portfolio-gold/50 transition-all duration-500 cursor-target", className)}
  >
    <div className="flex-1 mb-8 overflow-hidden rounded-[1rem] bg-portfolio-dark/[0.02] border border-portfolio-dark/5 relative min-h-[240px] lg:min-h-[260px] flex items-center justify-center">
      {children}
    </div>
    <div className="mt-auto">
      <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-portfolio-gold transition-colors">{title}</h3>
      <p className="text-portfolio-muted text-base leading-relaxed">{desc}</p>
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
        <div className="w-full h-full bg-gradient-to-br from-slate-50 to-blue-50/50 p-4">
          <div className="flex items-center gap-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-red-300" />
            <div className="w-2 h-2 rounded-full bg-yellow-300" />
            <div className="w-2 h-2 rounded-full bg-green-300" />
          </div>
          <div className="w-full h-20 bg-gradient-to-br from-blue-100/80 to-indigo-100/60 rounded-lg mb-3" />
          <div className="space-y-2 mb-3">
            <div className="w-full h-1.5 bg-portfolio-dark/8 rounded-full" />
            <div className="w-4/5 h-1.5 bg-portfolio-dark/6 rounded-full" />
            <div className="w-3/5 h-1.5 bg-portfolio-dark/4 rounded-full" />
          </div>
          <div className="flex gap-2 mt-4">
            <div className="w-12 h-5 bg-blue-200/60 rounded-md" />
            <div className="w-12 h-5 bg-portfolio-dark/5 rounded-md" />
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
        <div className="w-full h-full p-4">
          <div className="flex justify-between items-center mb-5">
            <div className="w-10 h-3 bg-portfolio-dark/10 rounded" />
            <div className="flex gap-1">
              <div className="w-2.5 h-2.5 bg-red-400 rounded-full" />
              <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
            </div>
          </div>
          <div className="w-full h-28 bg-gradient-to-tr from-portfolio-gold/20 via-orange-100/80 to-amber-50 rounded-xl mb-4 relative overflow-hidden">
            <div className="absolute bottom-3 left-3 space-y-1">
              <div className="w-16 h-2 bg-white/60 rounded" />
              <div className="w-10 h-1.5 bg-white/40 rounded" />
            </div>
          </div>
          <div className="space-y-2.5">
            <div className="w-full h-2 bg-portfolio-dark/10 rounded-full" />
            <div className="w-3/4 h-2 bg-portfolio-dark/8 rounded-full" />
            <div className="w-1/2 h-2 bg-portfolio-gold/25 rounded-full" />
          </div>
          <div className="mt-4 w-16 h-5 bg-portfolio-gold/20 rounded-md" />
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
        <div className="w-full h-full bg-gradient-to-br from-emerald-50/50 to-teal-50/30 p-4">
          <div className="flex items-center gap-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-red-300" />
            <div className="w-2 h-2 rounded-full bg-yellow-300" />
            <div className="w-2 h-2 rounded-full bg-green-300" />
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="h-14 bg-emerald-100/60 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-emerald-200/80" />
            </div>
            <div className="h-14 bg-teal-100/50 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-teal-200/80" />
            </div>
          </div>
          <div className="w-full h-16 bg-gradient-to-r from-emerald-100/40 to-teal-100/40 rounded-lg mb-3 p-2">
            <div className="flex items-end gap-1 h-full">
              {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                <div key={i} className="flex-1 bg-emerald-300/50 rounded-t-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="w-full h-1.5 bg-portfolio-dark/6 rounded-full" />
            <div className="w-2/3 h-1.5 bg-portfolio-dark/4 rounded-full" />
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
  const [activeLine, setActiveLine] = useState(-1);

  const codeLines = [
    { num: 1, keyword: 'import', rest: ' { createApp }', trail: " from 'vue';", color: 'text-[#c678dd]' },
    { num: 2, keyword: 'import', rest: ' { Router }', trail: " from './router';", color: 'text-[#c678dd]' },
    { num: 3, keyword: '', rest: '', trail: '', color: '' },
    { num: 4, keyword: 'const', rest: ' app', trail: ' = createApp({', color: 'text-[#c678dd]' },
    { num: 5, keyword: '  name:', rest: '', trail: " 'ForemarkApp',", color: 'text-[#e06c75]' },
    { num: 6, keyword: '  setup', rest: '()', trail: ' {', color: 'text-[#61afef]' },
    { num: 7, keyword: '    const', rest: ' state', trail: ' = reactive({', color: 'text-[#c678dd]' },
    { num: 8, keyword: '      users:', rest: '', trail: ' [],', color: 'text-[#e06c75]' },
    { num: 9, keyword: '      loading:', rest: '', trail: ' false,', color: 'text-[#e06c75]' },
    { num: 10, keyword: '    });', rest: '', trail: '', color: 'text-white/50' },
    { num: 11, keyword: '', rest: '', trail: '', color: '' },
    { num: 12, keyword: '    return', rest: '', trail: ' { ...state };', color: 'text-[#c678dd]' },
    { num: 13, keyword: '  }', rest: '', trail: '', color: 'text-white/50' },
    { num: 14, keyword: '});', rest: '', trail: '', color: 'text-white/50' },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relativeY = e.clientY - rect.top;
    const lineHeight = rect.height / codeLines.length;
    const line = Math.floor(relativeY / lineHeight);
    setActiveLine(Math.min(Math.max(line, 0), codeLines.length - 1));
  };

  return (
    <div 
      className="w-full h-full flex items-center justify-center p-6 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setActiveLine(-1); }}
    >
      <motion.div 
        animate={{ 
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -4 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full max-w-[320px] bg-[#1e1e2e] rounded-2xl overflow-hidden border border-white/[0.06] relative"
        style={{
          boxShadow: isHovered
            ? '0 32px 64px -16px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04), 0 0 80px -20px rgba(249,115,22,0.08)'
            : '0 8px 24px -4px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.03)',
        }}
      >
        {/* Editor Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[10px] text-white/25 font-mono tracking-wide">app.ts</span>
          <div className="flex gap-2">
            <motion.div 
              animate={{ opacity: isHovered ? [0.4, 1, 0.4] : 0.3 }} 
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-green-400"
              style={{ boxShadow: isHovered ? '0 0 8px rgba(74,222,128,0.6)' : 'none' }}
            />
          </div>
        </div>

        {/* Code Body */}
        <div 
          className="px-2 py-3 font-mono text-[11px] leading-[1.7] relative"
          onMouseMove={handleMouseMove}
        >
          {codeLines.map((line, i) => (
            <div 
              key={i}
              className="flex items-center px-2 rounded-md transition-all duration-200 relative"
              style={{
                backgroundColor: activeLine === i && isHovered 
                  ? 'rgba(249,115,22,0.08)' 
                  : 'transparent',
              }}
            >
              {/* Active line indicator */}
              {activeLine === i && isHovered && (
                <motion.div
                  layoutId="code-line-indicator"
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#f97316] rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              
              <span className="w-6 text-right mr-4 text-white/15 select-none text-[10px] shrink-0">
                {line.num}
              </span>
              {line.keyword ? (
                <span className="whitespace-pre">
                  <span className={line.color}>{line.keyword}</span>
                  <span className="text-[#e5c07b]">{line.rest}</span>
                  <span className="text-[#98c379]">{line.trail}</span>
                </span>
              ) : (
                <span className="text-transparent select-none">&nbsp;</span>
              )}
            </div>
          ))}

          {/* Blinking cursor at bottom */}
          <div className="flex items-center px-2 mt-1">
            <span className="w-6 text-right mr-4 text-white/15 select-none text-[10px]">~</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-[7px] h-[14px] bg-[#f97316]/80"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ServerAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full h-full flex items-center justify-center p-8 cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Background Ambient Glow */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0.3,
            scale: isHovered ? 1.5 : 1,
          }}
          transition={{ duration: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-portfolio-gold/10 blur-[50px] rounded-full pointer-events-none"
        />

        {/* Central Data Beam / Connection */}
        <motion.div 
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-portfolio-gold/30 to-transparent"
        >
          {/* Moving packet */}
          <motion.div
            animate={{
              y: isHovered ? [0, 100] : 0,
              opacity: isHovered ? [0, 1, 0] : 0
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            className="w-full h-8 bg-portfolio-gold shadow-[0_0_8px_rgba(249,115,22,0.8)] rounded-full"
          />
        </motion.div>

        {/* Server Stack */}
        <motion.div 
          animate={{ 
            y: isHovered ? 0 : [0, -6, 0],
            gap: isHovered ? '24px' : '10px'
          }}
          transition={{ 
             y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
             gap: { type: "spring", stiffness: 300, damping: 25 }
          }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Server Unit 1 */}
          <motion.div 
            animate={{ 
               scale: isHovered ? 1.05 : 1,
               boxShadow: isHovered ? '0 20px 40px -10px rgba(0,0,0,0.5), 0 0 0 1px rgba(249,115,22,0.3)' : '0 10px 15px -3px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.06)'
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0 }}
            className="w-48 h-12 bg-[#1a1a1a] rounded-xl px-4 flex items-center gap-3 relative overflow-hidden bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-md"
          >
            <motion.div animate={{ opacity: isHovered ? 1 : 0 }} className="absolute inset-0 bg-portfolio-gold/5 pointer-events-none" />
            <Server size={14} className={isHovered ? "text-portfolio-gold shrink-0 transition-colors" : "text-portfolio-gold shrink-0 transition-colors"} />
            <div className="flex-1 flex flex-col gap-1.5 z-10">
              <div className="h-1 w-20 bg-white/10 rounded-full overflow-hidden">
                <motion.div animate={{ x: isHovered ? ['-100%', '200%'] : '-100%' }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-1/2 h-full bg-white/40" />
              </div>
              <div className="h-1 w-12 bg-white/5 rounded-full" />
            </div>
            <motion.div 
              animate={{ opacity: isHovered ? [1, 0.2, 1] : [0.3, 1, 0.3] }} 
              transition={{ duration: isHovered ? 0.4 : 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-400 z-10"
              style={{ boxShadow: '0 0 8px rgba(74,222,128,0.6)' }}
            />
          </motion.div>

          {/* Server Unit 2 */}
          <motion.div 
            animate={{ 
               scale: isHovered ? 1.05 : 1,
               boxShadow: isHovered ? '0 20px 40px -10px rgba(0,0,0,0.5), 0 0 0 1px rgba(249,115,22,0.3)' : '0 10px 15px -3px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.06)'
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.05 }}
            className="w-48 h-12 bg-[#1a1a1a] rounded-xl px-4 flex items-center gap-3 relative overflow-hidden bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-md"
          >
            <motion.div animate={{ opacity: isHovered ? 1 : 0 }} className="absolute inset-0 bg-portfolio-gold/5 pointer-events-none" />
            <Server size={14} className={isHovered ? "text-portfolio-gold shrink-0 transition-colors" : "text-white/30 shrink-0 transition-colors"} />
            <div className="flex-1 flex flex-col gap-1.5 z-10">
              <div className="h-1 w-16 bg-white/10 rounded-full overflow-hidden">
                <motion.div animate={{ x: isHovered ? ['-100%', '200%'] : '-100%' }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="w-1/2 h-full bg-white/40" />
              </div>
              <div className="h-1 w-8 bg-white/5 rounded-full" />
            </div>
            <motion.div 
              animate={{ opacity: isHovered ? [1, 0.2, 1] : [0.3, 1, 0.3] }} 
              transition={{ duration: isHovered ? 0.4 : 2, repeat: Infinity, delay: 0.5 }}
              className="w-2 h-2 rounded-full bg-green-400 z-10"
              style={{ boxShadow: '0 0 8px rgba(74,222,128,0.6)' }}
            />
          </motion.div>

          {/* Server Unit 3 */}
          <motion.div 
            animate={{ 
               scale: isHovered ? 1.05 : 1,
               boxShadow: isHovered ? '0 20px 40px -10px rgba(0,0,0,0.5), 0 0 0 1px rgba(249,115,22,0.3)' : '0 10px 15px -3px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.06)'
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.1 }}
            className="w-48 h-12 bg-[#1a1a1a] rounded-xl px-4 flex items-center gap-3 relative overflow-hidden bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-md"
          >
            <motion.div animate={{ opacity: isHovered ? 1 : 0 }} className="absolute inset-0 bg-portfolio-gold/5 pointer-events-none" />
            <Server size={14} className={isHovered ? "text-portfolio-gold shrink-0 transition-colors" : "text-white/30 shrink-0 transition-colors"} />
            <div className="flex-1 flex flex-col gap-1.5 z-10">
              <div className="h-1 w-14 bg-white/10 rounded-full overflow-hidden">
                <motion.div animate={{ x: isHovered ? ['-100%', '200%'] : '-100%' }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }} className="w-1/2 h-full bg-white/40" />
              </div>
              <div className="h-1 w-12 bg-white/5 rounded-full" />
            </div>
            <motion.div 
              animate={{ opacity: isHovered ? [1, 0.2, 1] : [0.3, 1, 0.3], backgroundColor: isHovered ? '#4ade80' : '#60a5fa' }} 
              transition={{ duration: isHovered ? 0.4 : 2, repeat: Infinity, delay: 1 }}
              className="w-2 h-2 rounded-full z-10"
              style={{ boxShadow: isHovered ? '0 0 8px rgba(74,222,128,0.6)' : '0 0 8px rgba(96,165,250,0.4)' }}
            />
          </motion.div>

          {/* Status bar */}
          <div className="mt-2 flex items-center justify-between px-2 w-full">
            <div className="flex items-center gap-1.5">
              <motion.div 
                animate={{ backgroundColor: isHovered ? '#f97316' : '#4ade80' }}
                className="w-1.5 h-1.5 rounded-full" 
              />
              <span className="text-[9px] font-mono text-portfolio-dark/40 transition-colors">
                {isHovered ? 'Syncing...' : '3 active'}
              </span>
            </div>
            <span className="text-[9px] font-mono text-portfolio-dark/30">99.9% uptime</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const AutomationAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeNode, setActiveNode] = useState(-1);

  const nodes = [
    { 
      icon: <Zap size={14} />, 
      label: 'Trigger', 
      sublabel: 'New form submission',
      bgColor: 'bg-[#1a1a1a]',
      activeGlow: 'rgba(249,115,22,0.15)',
      activeBorder: 'rgba(249,115,22,0.5)',
    },
    { 
      icon: <Code size={14} />, 
      label: 'Process', 
      sublabel: 'Validate & transform',
      bgColor: 'bg-[#f97316]',
      activeGlow: 'rgba(249,115,22,0.2)',
      activeBorder: 'rgba(249,115,22,0.6)',
    },
    { 
      icon: <Server size={14} />, 
      label: 'Store', 
      sublabel: 'Save to database',
      bgColor: 'bg-[#1a1a1a]',
      activeGlow: 'rgba(59,130,246,0.15)',
      activeBorder: 'rgba(59,130,246,0.5)',
    },
    { 
      icon: <ArrowUpRight size={14} />, 
      label: 'Notify', 
      sublabel: 'Send confirmation',
      bgColor: 'bg-blue-500',
      activeGlow: 'rgba(59,130,246,0.2)',
      activeBorder: 'rgba(59,130,246,0.6)',
    },
  ];

  return (
    <div 
      className="w-full h-full flex items-center justify-center p-8 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setActiveNode(-1); }}
    >
      <div className="flex flex-col items-center gap-0 relative w-full max-w-[220px]">
        {nodes.map((node, i) => (
          <div key={i} className="flex flex-col items-center w-full">
            {/* Connecting line above (not for first node) */}
            {i > 0 && (
              <div className="relative w-px h-6 flex items-center justify-center">
                <motion.div
                  animate={{
                    height: isHovered ? '100%' : '60%',
                    opacity: isHovered ? 0.6 : 0.15,
                    backgroundColor: activeNode >= i ? '#f97316' : 'rgba(255,255,255,0.3)',
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-px rounded-full"
                />
                {/* Flowing dot */}
                {isHovered && (
                  <motion.div
                    animate={{ y: [-12, 12] }}
                    transition={{ 
                      duration: 1.2, 
                      repeat: Infinity, 
                      delay: i * 0.3,
                      ease: "easeInOut" 
                    }}
                    className="absolute w-1 h-1 rounded-full bg-[#f97316]"
                    style={{ boxShadow: '0 0 6px rgba(249,115,22,0.6)' }}
                  />
                )}
              </div>
            )}

            {/* Node */}
            <motion.div
              animate={{
                scale: activeNode === i ? 1.05 : isHovered ? 1 : 0.97,
                y: activeNode === i ? -2 : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onMouseEnter={() => setActiveNode(i)}
              className="relative z-10 w-full px-5 py-3.5 bg-white rounded-2xl flex items-center gap-3 transition-all duration-300"
              style={{
                border: `1px solid ${activeNode === i ? node.activeBorder : 'rgba(0,0,0,0.06)'}`,
                boxShadow: activeNode === i
                  ? `0 8px 32px -4px ${node.activeGlow}, 0 0 0 1px ${node.activeBorder}`
                  : isHovered
                    ? '0 4px 16px -2px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)'
                    : '0 2px 8px -1px rgba(0,0,0,0.04)',
              }}
            >
              <motion.div 
                animate={{
                  scale: activeNode === i ? 1.1 : 1,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                className={`w-8 h-8 rounded-xl ${node.bgColor} flex items-center justify-center text-white shrink-0`}
                style={{
                  boxShadow: activeNode === i 
                    ? `0 4px 12px -2px ${node.activeGlow}` 
                    : 'none',
                }}
              >
                {node.icon}
              </motion.div>
              
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-[#1a1a1a] leading-tight">{node.label}</span>
                <motion.span 
                  animate={{ 
                    opacity: activeNode === i || isHovered ? 1 : 0,
                    height: activeNode === i || isHovered ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="text-[10px] text-[#1a1a1a]/40 font-medium overflow-hidden"
                >
                  {node.sublabel}
                </motion.span>
              </div>

              {/* Active indicator dot */}
              <motion.div
                animate={{
                  scale: activeNode === i ? 1 : 0,
                  opacity: activeNode === i ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                className="ml-auto w-2 h-2 rounded-full bg-[#f97316] shrink-0"
                style={{ boxShadow: '0 0 8px rgba(249,115,22,0.5)' }}
              />
            </motion.div>
          </div>
        ))}

        {/* Completion badge */}
        <div className="relative w-px h-6 flex items-center justify-center">
          <motion.div
            animate={{
              height: isHovered ? '100%' : '60%',
              opacity: isHovered ? 0.4 : 0.1,
            }}
            transition={{ duration: 0.4 }}
            className="w-px bg-green-400 rounded-full"
          />
        </div>
        <motion.div
          animate={{
            scale: isHovered ? 1 : 0.9,
            opacity: isHovered ? 1 : 0.5,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="px-4 py-1.5 rounded-full bg-green-50 border border-green-200/60 flex items-center gap-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: '0 0 6px rgba(74,222,128,0.5)' }} />
          <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider">Complete</span>
        </motion.div>
      </div>
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
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
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