import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
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
  const [gifKey, setGifKey] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const src = "/ar-vr-motion-graphics.gif";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const img = new Image();
    img.src = src;
    img.onload = () => {
      canvas.width = img.naturalWidth || img.width;
      canvas.height = img.naturalHeight || img.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);
    };
  }, []);

  return (
    <div 
      className="w-full h-full flex items-center justify-center p-4 cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        setGifKey(prev => prev + 1); // Forces the GIF to restart from frame 0
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        animate={{ 
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -4 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full rounded-2xl overflow-hidden relative shadow-xl bg-white"
        style={{
          boxShadow: isHovered
            ? '0 32px 64px -16px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)'
            : '0 8px 24px -4px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)',
        }}
      >
        <img 
          key={gifKey}
          src={isHovered ? `${src}?v=${gifKey}` : src} 
          alt="AR/VR Motion Graphics" 
          className="w-full h-auto object-cover block"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300"
          style={{ opacity: isHovered ? 0 : 1 }}
        />
      </motion.div>
    </div>
  );
};

const ServerAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div 
      className="w-full h-full flex items-center justify-center p-4 cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(e => console.log(e));
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <motion.div 
        animate={{ 
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -4 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full rounded-2xl overflow-hidden relative shadow-xl bg-white"
        style={{
          boxShadow: isHovered
            ? '0 32px 64px -16px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)'
            : '0 8px 24px -4px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)',
        }}
      >
        <video 
          ref={videoRef}
          src="/web-server-animation.mp4#t=0.001"
          className="w-full h-auto object-cover block pointer-events-none"
          muted
          loop
          playsInline
        />
      </motion.div>
    </div>
  );
};

const AutomationAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div 
      className="w-full h-full flex items-center justify-center p-4 cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(e => console.log(e));
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <motion.div 
        animate={{ 
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -4 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full rounded-2xl overflow-hidden relative shadow-xl bg-white"
        style={{
          boxShadow: isHovered
            ? '0 32px 64px -16px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)'
            : '0 8px 24px -4px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)',
        }}
      >
        <video 
          ref={videoRef}
          src="/project-management-animation.mp4#t=0.001"
          className="w-full h-auto object-cover block pointer-events-none"
          muted
          loop
          playsInline
        />
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