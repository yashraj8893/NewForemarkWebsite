import { motion, useInView, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { cn } from "../lib/utils";
import { Smartphone, Layout, MousePointer2, Terminal, Server, Database, Cloud, HardDrive, GitMerge, FileCheck, Zap, Mail, Bot, Network, ChevronRight } from 'lucide-react';

// Hook: true when viewport is ≤767px (mobile)
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);
  return isMobile;
};

const ServiceCard = ({ title, desc, children, className }: { title: string, desc: string, children: React.ReactNode, className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D Tilt physics - Gentle and refined
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 40 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
    
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn("flex flex-col h-full group cursor-default service-card-perf perspective-[1400px]", className)}
    >
      <motion.div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{ y: isHovering ? -6 : 0, scale: isHovering ? 1.01 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className="w-full aspect-[16/10] min-h-[220px] sm:min-h-[340px] lg:min-h-[380px] overflow-hidden rounded-[1.5rem] bg-[#FFFFFF] relative flex items-center justify-center isolate mb-4 sm:mb-6 service-anim-perf transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_8px_24px_rgba(0,0,0,0.04)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
      >
        {/* Subtle premium 1px light grey border with soft white-to-grey gradient */}
        <div 
          className="absolute inset-0 rounded-[1.5rem] p-[1px] bg-gradient-to-br from-white via-[#E5E7EB] to-[#D1D5DB] pointer-events-none z-40" 
          style={{ 
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', 
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', 
            maskComposite: 'exclude', 
            WebkitMaskComposite: 'xor' 
          }} 
        />

        {/* Elegant inner highlight */}
        <div className="absolute inset-0 rounded-[1.5rem] shadow-[inset_0_1px_2px_rgba(255,255,255,1)] pointer-events-none z-30" />

        {/* Soft shadow spotlight following cursor */}
        <motion.div 
          className="pointer-events-none absolute -inset-px rounded-[1.5rem] opacity-0 transition duration-500 group-hover:opacity-100 z-50 mix-blend-multiply"
          style={{
            background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0,0,0,0.03), transparent 40%)`
          }}
        />

        {children}
      </motion.div>
      <div className="mt-auto px-1 sm:px-0">
        <h3 className="text-lg md:text-2xl font-bold mb-1 sm:mb-2 tracking-tight group-hover:text-portfolio-gold transition-colors duration-500">{title}</h3>
        <p className="text-portfolio-muted text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
};

export const WebsiteAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 perspective-[1000px]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />

      <motion.div 
        className="relative w-full max-w-[340px] h-[220px] flex gap-4 z-10"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Toolbar sidebar */}
        <div className="w-16 h-full bg-white border border-[#E5E7EB] rounded-xl flex flex-col items-center py-4 gap-4 shadow-sm z-20 shrink-0">
           <Layout className="w-5 h-5 text-[#3A3A3A] mb-2" />
           <div className="w-10 h-8 rounded-md border border-[#D1D5DB] bg-[#F9FAFB] flex flex-col items-center justify-center gap-1">
             <div className="w-6 h-1 bg-[#D1D5DB] rounded-full" />
             <div className="w-4 h-1 bg-[#D1D5DB] rounded-full" />
           </div>
           <div className="w-10 h-8 rounded-md border border-[#D1D5DB] bg-[#F9FAFB] flex items-center justify-center">
             <div className="w-6 h-4 bg-[#D1D5DB] rounded-sm" />
           </div>
           <div className="w-10 h-8 rounded-md border border-[#D1D5DB] bg-[#F9FAFB] grid grid-cols-2 gap-1 p-1">
             <div className="bg-[#D1D5DB] rounded-sm" />
             <div className="bg-[#D1D5DB] rounded-sm" />
             <div className="bg-[#D1D5DB] rounded-sm" />
             <div className="bg-[#D1D5DB] rounded-sm" />
           </div>
        </div>

        {/* Builder Canvas (Responsive) */}
        <div className="flex-1 flex justify-center items-center relative">
           <motion.div 
             animate={{ width: ["100%", "45%", "100%"] }}
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             className="h-[90%] bg-white border border-[#E5E7EB] rounded-xl shadow-md flex flex-col p-3 overflow-hidden relative origin-left"
           >
              {/* Responsive Header */}
              <div className="w-full flex justify-between items-center mb-3 pb-2 border-b border-[#E5E7EB] shrink-0">
                 <div className="w-10 h-2 bg-[#D1D5DB] rounded-full" />
                 <div className="flex gap-1.5 hidden sm:flex">
                    <div className="w-2.5 h-2.5 bg-[#6B7280] rounded-full" />
                    <div className="w-2.5 h-2.5 bg-[#D1D5DB] rounded-full" />
                 </div>
              </div>
              
              {/* Layout Content */}
              <div className="flex-1 flex flex-col gap-3 min-w-[120px]">
                 {/* Hero section */}
                 <div className="w-full h-16 bg-[#1F1F1F] rounded-lg flex items-center p-3 relative overflow-hidden shrink-0 shadow-inner">
                    <div className="w-2/3 flex flex-col gap-1.5 z-10">
                      <div className="w-full h-2 bg-[#6B7280] rounded-full" />
                      <div className="w-2/3 h-1.5 bg-[#3A3A3A] rounded-full" />
                    </div>
                 </div>
                 
                 {/* Grid that reflows */}
                 <div className="flex flex-wrap gap-2">
                    <div className="flex-1 min-w-[40%] h-12 bg-[#F9FAFB] rounded-md border border-[#D1D5DB]" />
                    <div className="flex-1 min-w-[40%] h-12 bg-[#F9FAFB] rounded-md border border-[#D1D5DB]" />
                 </div>

                 {/* Dynamically placed block via cursor */}
                 <motion.div 
                   animate={{ opacity: [0.2, 0.2, 1, 1, 0.2], scale: [0.95, 0.95, 1, 1, 0.95], borderColor: ["#D1D5DB", "#D1D5DB", "#3A3A3A", "#3A3A3A", "#D1D5DB"] }}
                   transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                   className="w-full h-10 border-2 border-dashed rounded-md bg-[#F9FAFB]" 
                 />
              </div>
           </motion.div>

           {/* Animated Cursor Dragging Component */}
           <motion.div
             animate={{
               x: [-110, -110, -10, -10, -110],
               y: [30, 90, 90, 30, 30],
               scale: [1, 0.9, 1, 1, 1]
             }}
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             className="absolute z-30 pointer-events-none"
           >
             <MousePointer2 className="w-6 h-6 text-[#1F1F1F] drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]" fill="white" />
             {/* Dragged block attached to cursor */}
             <motion.div 
               animate={{ opacity: [0, 1, 1, 0, 0] }}
               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-6 left-4 w-20 h-10 border border-[#1F1F1F] bg-white rounded shadow-lg flex items-center justify-center"
             >
                <div className="w-12 h-2 bg-[#E5E7EB] rounded-full" />
             </motion.div>
           </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export const WebAppAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]" />

       {/* CI/CD Pipeline on the left */}
       <div className="absolute left-6 top-1/2 -translate-y-1/2 w-8 flex flex-col gap-3 z-10">
          {[1, 2, 3, 4].map((step, i) => (
             <motion.div 
               key={i}
               animate={{ 
                 backgroundColor: ["#FFFFFF", "#1F1F1F", "#FFFFFF"],
                 borderColor: ["#E5E7EB", "#1F1F1F", "#E5E7EB"]
               }}
               transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
               className="w-7 h-7 rounded-full border bg-white flex items-center justify-center shadow-sm"
             >
                <motion.div 
                  animate={{ backgroundColor: ["#D1D5DB", "#FFFFFF", "#D1D5DB"] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                  className="w-1.5 h-1.5 rounded-full"
                />
             </motion.div>
          ))}
       </div>

       {/* Architecture diagram */}
       <div className="w-[220px] h-[220px] ml-10 relative flex flex-col items-center justify-between z-10">
          {/* Client Application */}
          <div className="w-36 h-10 bg-white border border-[#D1D5DB] rounded-lg shadow-sm flex items-center justify-center gap-2 z-20 relative">
             <Smartphone className="w-4 h-4 text-[#3A3A3A]" />
             <span className="text-[10px] font-bold text-[#1F1F1F] uppercase tracking-widest">Client App</span>
             {/* Ping pulse */}
             <motion.div animate={{ opacity: [1, 0], scale: [1, 2] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -right-1 -top-1 w-2 h-2 bg-[#3A3A3A] rounded-full" />
          </div>

          {/* API Gateway */}
          <div className="w-48 h-10 bg-[#1F1F1F] border border-[#3A3A3A] rounded-lg shadow-lg flex items-center justify-center gap-2 z-20">
             <Network className="w-4 h-4 text-white" />
             <span className="text-[10px] font-bold text-white uppercase tracking-widest">API Gateway</span>
          </div>

          {/* Microservices */}
          <div className="w-full flex justify-between z-20 gap-2">
             <div className="w-[60px] h-[60px] bg-white border border-[#E5E7EB] rounded-xl shadow-sm flex flex-col items-center justify-center gap-1.5">
                <Database className="w-5 h-5 text-[#3A3A3A]" />
                <div className="w-8 h-1 bg-[#E5E7EB] rounded-full" />
             </div>
             <div className="w-[60px] h-[60px] bg-white border border-[#E5E7EB] rounded-xl shadow-sm flex flex-col items-center justify-center gap-1.5">
                <Server className="w-5 h-5 text-[#3A3A3A]" />
                <div className="w-8 h-1 bg-[#E5E7EB] rounded-full" />
             </div>
             <div className="w-[60px] h-[60px] bg-[#3A3A3A] border border-[#1F1F1F] rounded-xl shadow-lg flex flex-col items-center justify-center gap-1.5 relative overflow-hidden">
                <motion.div animate={{ y: ["-100%", "100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                <Terminal className="w-5 h-5 text-white" />
                <div className="w-8 h-1 bg-[#6B7280] rounded-full" />
             </div>
          </div>

          {/* SVG connecting paths & Data flow */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
             {/* Lines */}
             <path d="M110,40 L110,85" className="stroke-[#D1D5DB] stroke-[1.5] fill-none" strokeDasharray="4 4" />
             <path d="M110,125 L30,160" className="stroke-[#D1D5DB] stroke-[1.5] fill-none" />
             <path d="M110,125 L110,160" className="stroke-[#D1D5DB] stroke-[1.5] fill-none" />
             <path d="M110,125 L190,160" className="stroke-[#D1D5DB] stroke-[1.5] fill-none" />
             
             {/* Animated Request Down */}
             <motion.circle r="3" fill="#1F1F1F"
                animate={{ cy: [40, 85], cx: [110, 110], opacity: [0, 1, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
             />
             <motion.circle r="3" fill="#1F1F1F"
                animate={{ cy: [125, 160], cx: [110, 30], opacity: [0, 1, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 1.2 }}
             />
             <motion.circle r="3" fill="#1F1F1F"
                animate={{ cy: [125, 160], cx: [110, 110], opacity: [0, 1, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 1.4 }}
             />
             <motion.circle r="3" fill="#1F1F1F"
                animate={{ cy: [125, 160], cx: [110, 190], opacity: [0, 1, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 1.6 }}
             />

             {/* Animated Response Up */}
             <motion.circle r="3" fill="#6B7280"
                animate={{ cy: [160, 125], cx: [30, 110], opacity: [0, 1, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 2.4 }}
             />
             <motion.circle r="3" fill="#6B7280"
                animate={{ cy: [160, 125], cx: [110, 110], opacity: [0, 1, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 2.6 }}
             />
             <motion.circle r="3" fill="#6B7280"
                animate={{ cy: [160, 125], cx: [190, 110], opacity: [0, 1, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 2.8 }}
             />
          </svg>
       </div>
    </div>
  );
};

export const ServerAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 overflow-hidden">
       {/* Cloud Infrastructure Background */}
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#D1D5DB_1px,transparent_1px)] bg-[size:16px_16px] opacity-30" />

       <div className="w-full max-w-[280px] h-[220px] relative z-10 flex flex-col justify-between items-center">
          
          {/* Edge / CDN Layer */}
          <div className="w-full flex justify-center gap-12 z-20">
             <motion.div animate={{ y: [-2, 2, -2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-14 h-12 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm flex items-center justify-center relative">
               <Cloud className="w-6 h-6 text-[#3A3A3A]" />
               <motion.div className="absolute -right-1 -top-1 w-2.5 h-2.5 bg-[#D1D5DB] rounded-full border-2 border-white" animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
             </motion.div>
             <motion.div animate={{ y: [2, -2, 2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="w-14 h-12 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm flex items-center justify-center relative">
               <Cloud className="w-6 h-6 text-[#3A3A3A]" />
             </motion.div>
          </div>

          {/* Compute Core */}
          <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="w-[220px] h-[64px] bg-[#1F1F1F] rounded-xl shadow-xl border border-[#3A3A3A] flex items-center justify-evenly p-2 z-20 relative overflow-hidden">
             {/* Scanning light effect inside core */}
             <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]" />
             
             <div className="flex flex-col items-center gap-1">
               <Server className="w-5 h-5 text-white" />
               <div className="flex gap-1"><div className="w-1 h-1 bg-[#D1D5DB] rounded-full"/><div className="w-1 h-1 bg-[#6B7280] rounded-full"/></div>
             </div>
             <div className="flex flex-col items-center gap-1">
               <Server className="w-5 h-5 text-white" />
               <div className="flex gap-1"><div className="w-1 h-1 bg-[#D1D5DB] rounded-full"/><div className="w-1 h-1 bg-[#6B7280] rounded-full"/></div>
             </div>
             <div className="flex flex-col items-center gap-1">
               <Server className="w-5 h-5 text-white" />
               <div className="flex gap-1"><div className="w-1 h-1 bg-[#D1D5DB] rounded-full"/><div className="w-1 h-1 bg-[#6B7280] rounded-full"/></div>
             </div>
          </motion.div>

          {/* Data Storage Lake */}
          <div className="w-full flex justify-center gap-8 z-20">
             <div className="w-16 h-12 bg-white border border-[#D1D5DB] rounded-lg shadow-sm flex items-center justify-center">
               <HardDrive className="w-5 h-5 text-[#6B7280]" />
             </div>
             <div className="w-16 h-12 bg-white border border-[#D1D5DB] rounded-lg shadow-sm flex items-center justify-center">
               <Database className="w-5 h-5 text-[#6B7280]" />
             </div>
          </div>

          {/* SVG Data sync lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
             <path d="M85,24 L140,80" className="stroke-[#E5E7EB] stroke-2 fill-none" />
             <path d="M195,24 L140,80" className="stroke-[#E5E7EB] stroke-2 fill-none" />
             <path d="M140,144 L110,186" className="stroke-[#E5E7EB] stroke-2 fill-none" />
             <path d="M140,144 L170,186" className="stroke-[#E5E7EB] stroke-2 fill-none" />

             {/* Downward Request packets */}
             <motion.circle r="3" fill="#3A3A3A" animate={{ cx: [85, 140], cy: [24, 80], opacity: [0, 1, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} />
             <motion.circle r="3" fill="#3A3A3A" animate={{ cx: [195, 140], cy: [24, 80], opacity: [0, 1, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.6 }} />
             
             {/* Upward Response packets */}
             <motion.circle r="3" fill="#6B7280" animate={{ cx: [110, 140], cy: [186, 144], opacity: [0, 1, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.3 }} />
             <motion.circle r="3" fill="#6B7280" animate={{ cx: [170, 140], cy: [186, 144], opacity: [0, 1, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.9 }} />
          </svg>
       </div>
    </div>
  );
};

export const AutomationAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 overflow-hidden">
       {/* Pipeline canvas */}
       <div className="w-[320px] h-[180px] relative z-10">
          
          {/* Pipeline Vector Paths */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
             <path d="M30,90 L90,90" className="stroke-[#D1D5DB] stroke-2 fill-none" />
             <path d="M120,90 L160,90" className="stroke-[#D1D5DB] stroke-2 fill-none" />
             <path d="M190,90 L220,40 L260,40" className="stroke-[#D1D5DB] stroke-2 fill-none" />
             <path d="M190,90 L220,140 L260,140" className="stroke-[#D1D5DB] stroke-2 fill-none" />

             {/* Moving task signals */}
             <motion.circle r="4" fill="#6B7280" animate={{ cx: [30, 90], cy: [90, 90], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
             <motion.circle r="4" fill="#3A3A3A" animate={{ cx: [120, 160], cy: [90, 90], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1.5 }} />
             
             {/* Branching signals */}
             <motion.circle r="4" fill="#1F1F1F" animate={{ cx: [190, 220, 260], cy: [90, 40, 40], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 3 }} />
             <motion.circle r="4" fill="#D1D5DB" animate={{ cx: [190, 220, 260], cy: [90, 140, 140], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 3 }} />
          </svg>

          {/* Nodes */}
          {/* 1. Input Node */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-[#E5E7EB] rounded-lg shadow-sm flex items-center justify-center z-10">
             <Mail className="w-5 h-5 text-[#6B7280]" />
          </div>

          {/* 2. AI Processing Node */}
          <div className="absolute left-[90px] top-1/2 -translate-y-1/2 w-12 h-12 bg-[#1F1F1F] border border-[#3A3A3A] rounded-xl shadow-lg flex items-center justify-center z-10 relative">
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                <Bot className="w-6 h-6 text-white" />
             </motion.div>
             {/* Pulse ring */}
             <motion.div className="absolute inset-0 border border-[#1F1F1F] rounded-xl" animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
          </div>

          {/* 3. Decision Node (Diamond) */}
          <div className="absolute left-[160px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-[#D1D5DB] rounded transform rotate-45 shadow-sm flex items-center justify-center z-10">
             <GitMerge className="w-4 h-4 text-[#3A3A3A] -rotate-45" />
          </div>

          {/* 4. Action A: Approval (Top) */}
          <div className="absolute left-[260px] top-[20px] w-24 h-10 bg-white border border-[#1F1F1F] rounded-lg shadow-md flex items-center justify-center gap-1.5 z-10">
             <FileCheck className="w-4 h-4 text-[#1F1F1F]" />
             <span className="text-[10px] font-bold text-[#1F1F1F]">APPROVAL</span>
          </div>

          {/* 5. Action B: System (Bottom) */}
          <div className="absolute left-[260px] top-[120px] w-24 h-10 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg shadow-sm flex items-center justify-center gap-1.5 z-10">
             <Zap className="w-4 h-4 text-[#6B7280]" />
             <span className="text-[10px] font-bold text-[#6B7280]">PROCESS</span>
          </div>
       </div>
    </div>
  );
};

const ServicesGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "200px" });
  const isMobile = useIsMobile();

  // On mobile, pause all animations when section is off-screen
  const shouldPause = isMobile && !isInView;

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-16 md:py-32 w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-16 overflow-hidden"
    >
      <div className="text-center mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold tracking-widest uppercase text-portfolio-gold mb-4 block"
        >
          What We Offer
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
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

      <div className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1050px] mx-auto",
        shouldPause && "service-paused"
      )}>
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