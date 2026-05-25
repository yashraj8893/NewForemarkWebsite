import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Removed unused IndustryTag

const projectsData = [
  {
    title: "Revolutionizing Digital Healthcare",
    client: "Regius Care",
    meta: "Healthcare Automation",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
    url: "https://regiuscare.com",
    aspect: "aspect-[4/3]"
  },
  {
    title: "Next-Gen Media Distribution",
    client: "CenterSpread",
    meta: "Media Platform",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&q=80&w=800",
    url: "https://centerspread.in",
    aspect: "aspect-[4/3]"
  },
  {
    title: "Legal Tech Transformation",
    client: "Sharma & Associates",
    meta: "Secure Portal",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    url: "https://sharmalaw.in",
    aspect: "aspect-[4/3]"
  },
  {
    title: "Fintech Innovation Hub",
    client: "FinTrack Systems",
    meta: "SaaS Infrastructure",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    url: "https://fintrack.app",
    aspect: "aspect-[4/3]"
  },
  {
    title: "E-commerce Experience Design",
    client: "Luxe Wear",
    meta: "Retail Platform",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    url: "https://luxewear.com",
    aspect: "aspect-[4/3]"
  },
  {
    title: "SaaS Analytics Dashboard",
    client: "DataFlow",
    meta: "Enterprise Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    url: "https://dataflow.io",
    aspect: "aspect-[4/3]"
  }
];

const ProjectsPage = () => {
  return (
    <div className="relative w-full bg-[#f5f5f5] overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-8 md:px-16 pt-16 pb-40">
        
        {/* Section Header */}
        <div className="flex flex-col mb-10 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-portfolio-gold font-bold mb-6 text-xs tracking-widest uppercase"
          >
            Case Studies
          </motion.span>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 border-b border-[#1a1a1a]/10 pb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-[#1a1a1a] max-w-3xl leading-[1.0]"
            >
              Examples of our work
            </motion.h2>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-portfolio-muted max-w-xl leading-relaxed"
            >
              These are our projects done till now. Simple and clear.
            </motion.p>

            {/* Social Proof */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-[3px] border-[#f5f5f5] bg-white overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/150?u=acc${i}`} alt="Client" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-sm text-[#1a1a1a]">15+ happy clients!</p>
                <button className="text-[12px] text-portfolio-muted hover:text-portfolio-gold font-bold flex items-center gap-1 transition-colors cursor-target mt-0.5">
                  Join them now <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Brand Logos Row - Infinite Marquee */}
        <div className="w-full border-b border-[#1a1a1a]/10 pb-16 mb-24 overflow-hidden relative z-10">
          {/* Subtle fade edges for the marquee */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f5f5f5] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f5f5f5] to-transparent z-20 pointer-events-none" />
          
          <motion.div 
            className="flex gap-16 md:gap-24 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-16 md:gap-24 shrink-0">
                {[
                  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", h: "h-8" },
                  { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", h: "h-5" },
                  { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", h: "h-7" },
                  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", h: "h-8" },
                  { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", h: "h-6" },
                  { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg", h: "h-8" }
                ].map((brand, j) => (
                  <div key={j} className="flex items-center justify-center min-w-[120px]">
                    <img 
                      src={brand.url} 
                      alt={brand.name} 
                      className={`${brand.h} w-auto object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-400 cursor-target`} 
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-y-24 md:gap-x-12 lg:gap-x-16 items-start relative z-10 mt-10">
          {projectsData.map((project, i) => (
            <motion.a 
              key={i}
              href={project.url}
              target="_blank"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group/card flex flex-col cursor-target"
            >
              {/* Outer Container with padding */}
              <div className={`relative w-full ${project.aspect} rounded-[1.5rem] md:rounded-[2rem] bg-[#f0f0f0] mb-6 shadow-sm border border-black/[0.04] p-8 md:p-12 lg:p-16 overflow-hidden flex items-center justify-center`}>
                
                {/* Background decorative curved lines (similar to reference) */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 C30,80 70,80 100,50 L100,100 Z" fill="currentColor" />
                    <path d="M0,0 C30,30 70,30 100,0 L0,0 Z" fill="currentColor" />
                  </svg>
                </div>

                {/* Inner Image Container */}
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] group-hover/card:scale-105 group-hover/card:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] bg-white">
                  <img 
                    src={project.image} 
                    alt={project.client} 
                    className="w-full h-full object-cover object-top" 
                  />
                  {/* Soft inner depth */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.05] rounded-xl pointer-events-none" />
                </div>
              </div>

              {/* Minimal Metadata Section */}
              <div className="flex flex-row justify-between items-center gap-6 px-1 md:px-2">
                <h3 className="text-xl md:text-2xl lg:text-[1.75rem] font-bold text-[#1a1a1a] tracking-tight leading-[1.2] group-hover/card:text-portfolio-gold transition-colors duration-400">
                  {project.title}
                </h3>
                <span className="text-sm md:text-base font-medium text-portfolio-muted tracking-wide shrink-0">
                  © 2024
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
