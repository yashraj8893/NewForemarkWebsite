import { motion } from 'framer-motion';
import { cn } from "../lib/utils";
import { Terminal, Database, Activity, Server, Zap, Cpu, Code2, Globe2, Layers, Workflow } from 'lucide-react';


const ServiceCard = ({ title, desc, children, className }: { title: string, desc: string, children: React.ReactNode, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
    className={cn("bg-white border border-portfolio-dark/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[1.5rem] p-5 lg:p-6 flex flex-col h-full group hover:shadow-2xl hover:border-portfolio-gold/40 transition-all duration-700 cursor-default", className)}
  >
    <div className="flex-1 mb-8 overflow-hidden rounded-[1rem] bg-[#09090b] border border-white/10 relative min-h-[240px] lg:min-h-[280px] flex items-center justify-center isolate ring-1 ring-white/5 shadow-inner">
      {/* Global dark mode inner ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-dark/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {children}
    </div>
    <div className="mt-auto">
      <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight group-hover:text-portfolio-gold transition-colors duration-500">{title}</h3>
      <p className="text-portfolio-muted text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const WebsiteAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 perspective-[1000px]">
      {/* Ambient Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />
      
      <motion.div 
        className="relative w-full max-w-[280px] h-[180px] group-hover:rotate-x-[10deg] group-hover:rotate-y-[-10deg] group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Main Browser Window */}
        <motion.div 
          animate={{
            width: ["100%", "60%", "100%"],
            x: ["0%", "-20%", "0%"]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 bg-[#18181b]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col z-20"
        >
          {/* Browser Header */}
          <div className="h-6 bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5 shrink-0">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
          {/* Browser Content */}
          <div className="flex-1 p-3 flex flex-col gap-3 relative overflow-hidden">
            <div className="w-full h-20 bg-white/5 rounded-lg flex items-center justify-center overflow-hidden relative border border-white/5">
               <motion.div 
                 animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute inset-0 bg-gradient-to-tr from-portfolio-gold/20 to-transparent" 
               />
               <Layers className="w-6 h-6 text-portfolio-gold/50" />
            </div>
            <div className="flex gap-2">
              <motion.div 
                animate={{ width: ["40%", "100%", "40%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="h-2 bg-white/20 rounded-full" 
              />
              <div className="h-2 flex-1 bg-white/10 rounded-full" />
            </div>
            <div className="space-y-1.5 mt-auto">
              <div className="w-full h-1.5 bg-white/10 rounded-full" />
              <div className="w-4/5 h-1.5 bg-white/10 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Floating Component Layer (Parallax) */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-4 top-12 w-24 h-32 bg-[#27272a]/90 backdrop-blur-xl border border-white/15 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.5)] p-2 flex flex-col gap-2 z-30 group-hover:translate-z-[40px] transition-transform duration-700"
        >
          <div className="w-full h-12 bg-white/5 rounded border border-white/5 flex items-center justify-center">
            <Globe2 className="w-4 h-4 text-white/40" />
          </div>
          <div className="w-3/4 h-1.5 bg-white/20 rounded-full" />
          <div className="w-1/2 h-1.5 bg-white/10 rounded-full" />
          
          {/* Active indicator */}
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-2 h-2 bg-portfolio-gold rounded-full"
          />
        </motion.div>

      </motion.div>

      {/* Hover ambient glow enhancement */}
      <div className="absolute inset-0 bg-portfolio-gold/0 group-hover:bg-portfolio-gold/5 transition-colors duration-700 rounded-[1rem] pointer-events-none mix-blend-screen" />
    </div>
  );
};

const WebAppAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 perspective-[1000px] overflow-hidden">
      {/* Moving Background Data Streams */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-portfolio-gold to-transparent"
            style={{ top: `${20 + i * 15}%` }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
          />
        ))}
      </div>

      <motion.div 
        className="relative w-full max-w-[300px] h-[190px] group-hover:rotate-x-[5deg] group-hover:rotate-y-[10deg] group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu flex gap-3"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Terminal Window */}
        <div className="flex-[3] bg-[#0c0c0e] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col relative z-20 group-hover:border-portfolio-gold/30 transition-colors duration-700">
          <div className="h-5 bg-white/5 border-b border-white/5 flex items-center px-2 gap-1.5 shrink-0">
            <Terminal className="w-3 h-3 text-white/40" />
            <span className="text-[9px] text-white/40 font-mono">bash ~ npm run dev</span>
          </div>
          <div className="p-3 font-mono text-[8px] flex flex-col gap-1.5 relative h-full">
             <div className="text-white/40">&gt; executing build sequence...</div>
             {[...Array(4)].map((_, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: -5 }}
                 animate={{ opacity: [0, 1, 0.5], x: 0 }}
                 transition={{ duration: 2, repeat: Infinity, delay: i * 0.4, repeatType: "reverse" }}
                 className="flex items-center gap-2"
               >
                 <span className="text-portfolio-gold">✓</span>
                 <span className="text-white/60">module_{i + 1}.js loaded</span>
                 <motion.span 
                   animate={{ width: ["0%", "40%"] }} 
                   transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
                   className="h-px bg-portfolio-gold/40 ml-auto block" 
                 />
               </motion.div>
             ))}
             <motion.div 
               animate={{ opacity: [0, 1, 0] }}
               transition={{ duration: 0.8, repeat: Infinity }}
               className="w-1.5 h-2.5 bg-portfolio-gold mt-1"
             />
          </div>
        </div>

        {/* Status Dashboard Stack */}
        <div className="flex-[2] flex flex-col gap-2 z-10 group-hover:translate-z-[30px] transition-transform duration-700">
          <div className="flex-1 bg-[#18181b]/80 backdrop-blur-md border border-white/10 rounded-xl p-2.5 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-portfolio-gold/20 blur-xl rounded-full" />
            <div className="flex items-center justify-between">
              <Activity className="w-3.5 h-3.5 text-white/50" />
              <motion.div 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-green-500 rounded-full" 
              />
            </div>
            <div className="flex items-end gap-1 h-8 mt-2">
              {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8].map((h, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: [`${h * 50}%`, `${(h + 0.2 > 1 ? h - 0.2 : h + 0.2) * 100}%`, `${h * 50}%`] }}
                  transition={{ duration: 2 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex-1 bg-portfolio-gold/60 rounded-t-sm"
                />
              ))}
            </div>
          </div>
          
          <div className="h-12 bg-[#18181b]/80 backdrop-blur-md border border-white/10 rounded-xl p-2 shadow-xl flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
              <Database className="w-3 h-3 text-portfolio-gold" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-portfolio-gold to-transparent"
                />
              </div>
              <div className="w-1/2 h-1 bg-white/5 rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ServerAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 overflow-hidden">
      {/* Deep Background Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-64 h-64 bg-portfolio-gold/20 rounded-full blur-[80px]"
      />

      <div className="relative w-full max-w-[260px] h-[180px] group-hover:scale-105 transition-transform duration-700 ease-out z-10">
        <svg viewBox="0 0 260 180" className="w-full h-full absolute inset-0 overflow-visible">
          {/* Network Paths */}
          <path d="M130,90 L40,50 L40,130 Z" className="stroke-white/10 stroke-[1.5] fill-none" />
          <path d="M130,90 L220,50 L220,130 Z" className="stroke-white/10 stroke-[1.5] fill-none" />
          <path d="M130,90 L130,20" className="stroke-white/10 stroke-[1.5] fill-none" />
          <path d="M40,50 L130,20 L220,50" className="stroke-white/10 stroke-[1.5] fill-none" />
          <path d="M40,130 L130,160 L220,130" className="stroke-white/10 stroke-[1.5] fill-none" />
          <path d="M130,90 L130,160" className="stroke-white/10 stroke-[1.5] fill-none" />

          {/* Animated Data Packets (Beams) */}
          <motion.circle r="3" fill="#f97316" className="filter blur-[1px]">
            <animateMotion dur="3s" repeatCount="indefinite" path="M130,90 L40,50" />
          </motion.circle>
          <motion.circle r="2" fill="#fff" className="filter blur-[1px]">
            <animateMotion dur="2s" repeatCount="indefinite" path="M40,130 L130,90" />
          </motion.circle>
          <motion.circle r="3" fill="#f97316" className="filter blur-[1px]">
            <animateMotion dur="4s" repeatCount="indefinite" path="M130,90 L220,130" />
          </motion.circle>
          <motion.circle r="2" fill="#fff" className="filter blur-[1px]">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M220,50 L130,90" />
          </motion.circle>
          <motion.circle r="2.5" fill="#f97316" className="filter blur-[1px]">
            <animateMotion dur="3.5s" repeatCount="indefinite" path="M130,160 L130,90" />
          </motion.circle>
        </svg>

        {/* Nodes */}
        <div className="absolute inset-0">
          {/* Central Node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div 
              animate={{ boxShadow: ['0 0 0 0 rgba(249,115,22,0.4)', '0 0 0 15px rgba(249,115,22,0)', '0 0 0 0 rgba(249,115,22,0)'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-10 h-10 bg-[#18181b] border border-portfolio-gold/50 rounded-xl flex items-center justify-center relative z-20 group-hover:border-portfolio-gold transition-colors"
            >
              <Server className="w-4 h-4 text-portfolio-gold" />
              <div className="absolute inset-0 bg-portfolio-gold/20 rounded-xl blur-md -z-10" />
            </motion.div>
          </div>
          
          {/* Perimeter Nodes */}
          {[
            { top: '20px', left: '130px', icon: Code2 },
            { top: '50px', left: '40px', icon: Globe2 },
            { top: '130px', left: '40px', icon: Database },
            { top: '50px', left: '220px', icon: Activity },
            { top: '130px', left: '220px', icon: Cpu },
            { top: '160px', left: '130px', icon: Layers },
          ].map((pos, i) => {
            const Icon = pos.icon;
            return (
              <motion.div 
                key={i}
                className="absolute w-8 h-8 bg-[#18181b] border border-white/10 rounded-lg flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-10 group-hover:border-white/20 transition-colors"
                style={{ top: pos.top, left: pos.left }}
                animate={{ y: ["-50%", `calc(-50% - 3px)`, "-50%"] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
              >
                <Icon className="w-3 h-3 text-white/50" />
                <motion.div 
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="absolute inset-0 bg-portfolio-gold/10 rounded-lg blur -z-10"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

const AutomationAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 overflow-hidden">
      {/* Intelligent Background Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-portfolio-gold/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -40 - 20],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-[280px] h-[180px] group-hover:scale-105 transition-transform duration-700 ease-out z-10">
        {/* Animated Workflow Graph Lines */}
        <svg viewBox="0 0 280 180" className="absolute inset-0 w-full h-full overflow-visible z-0">
           <defs>
             <linearGradient id="flow-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
               <stop offset="50%" stopColor="#f97316" />
               <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
             </linearGradient>
           </defs>
           
           {/* Connecting bezier curves */}
           <path d="M50,90 C90,90 90,40 140,40" className="stroke-white/10 stroke-[2] fill-none" />
           <path d="M50,90 C90,90 90,140 140,140" className="stroke-white/10 stroke-[2] fill-none" />
           <path d="M140,40 C190,40 190,90 230,90" className="stroke-white/10 stroke-[2] fill-none" />
           <path d="M140,140 C190,140 190,90 230,90" className="stroke-white/10 stroke-[2] fill-none" />
           
           {/* Moving dashed flow lines overlaid */}
           <motion.path 
             d="M50,90 C90,90 90,40 140,40" 
             className="stroke-[url(#flow-gradient-1)] stroke-[2] fill-none"
             strokeDasharray="20 40"
             animate={{ strokeDashoffset: [60, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
           />
           <motion.path 
             d="M50,90 C90,90 90,140 140,140" 
             className="stroke-[url(#flow-gradient-1)] stroke-[2] fill-none"
             strokeDasharray="20 40"
             animate={{ strokeDashoffset: [60, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
           />
           <motion.path 
             d="M140,40 C190,40 190,90 230,90" 
             className="stroke-[url(#flow-gradient-1)] stroke-[2] fill-none"
             strokeDasharray="20 40"
             animate={{ strokeDashoffset: [60, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
           />
           <motion.path 
             d="M140,140 C190,140 190,90 230,90" 
             className="stroke-[url(#flow-gradient-1)] stroke-[2] fill-none"
             strokeDasharray="20 40"
             animate={{ strokeDashoffset: [60, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }}
           />
        </svg>

        {/* Workflow Nodes */}
        <div className="absolute inset-0 z-10">
          {/* Start Node */}
          <div className="absolute top-1/2 left-[50px] -translate-x-1/2 -translate-y-1/2">
             <div className="w-10 h-10 bg-[#18181b] border border-white/20 rounded-xl flex items-center justify-center relative overflow-hidden shadow-lg group-hover:border-white/40 transition-colors">
                <Zap className="w-4 h-4 text-white/70" />
                <motion.div 
                  animate={{ left: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                />
             </div>
          </div>
          
          {/* Process Node 1 */}
          <div className="absolute top-[40px] left-[140px] -translate-x-1/2 -translate-y-1/2">
             <motion.div 
               animate={{ y: [-2, 2, -2] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="w-12 h-10 bg-[#18181b] border border-portfolio-gold/40 rounded-xl flex items-center justify-center relative shadow-[0_0_15px_rgba(249,115,22,0.15)] group-hover:border-portfolio-gold/70 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all"
             >
                <Code2 className="w-4 h-4 text-portfolio-gold" />
             </motion.div>
          </div>

          {/* Process Node 2 */}
          <div className="absolute top-[140px] left-[140px] -translate-x-1/2 -translate-y-1/2">
             <motion.div 
               animate={{ y: [2, -2, 2] }}
               transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
               className="w-12 h-10 bg-[#18181b] border border-portfolio-gold/40 rounded-xl flex items-center justify-center relative shadow-[0_0_15px_rgba(249,115,22,0.15)] group-hover:border-portfolio-gold/70 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all"
             >
                <Database className="w-4 h-4 text-portfolio-gold" />
             </motion.div>
          </div>

          {/* End Node */}
          <div className="absolute top-1/2 left-[230px] -translate-x-1/2 -translate-y-1/2">
             <motion.div 
               animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 0 0 rgba(249,115,22,0)', '0 0 0 10px rgba(249,115,22,0.1)', '0 0 0 0 rgba(249,115,22,0)'] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-10 h-10 bg-[#18181b] border border-portfolio-gold/60 rounded-full flex items-center justify-center relative z-20 group-hover:border-portfolio-gold transition-colors"
             >
                <Workflow className="w-4 h-4 text-portfolio-gold" />
                <div className="absolute inset-0 bg-portfolio-gold/20 rounded-full blur-sm -z-10" />
             </motion.div>
          </div>
        </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1050px] mx-auto">
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