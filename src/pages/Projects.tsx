import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndustryTag = ({ text }: { text: string }) => (
  <div className="absolute top-6 left-6 z-20">
    <span className="px-4 py-2 rounded-full bg-[#1a1a1a]/90 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest shadow-lg border border-white/10">
      {text}
    </span>
  </div>
);

const ProjectsPage = () => {
  return (
    <div className="relative w-full bg-[#f5f5f5] overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-32 pb-40">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 relative z-10">
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
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#1a1a1a] max-w-3xl leading-[1.05]"
            >
              Examples of our work
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/projects" className="flex items-center gap-2 text-sm font-bold text-[#1a1a1a] hover:text-portfolio-gold transition-colors cursor-target whitespace-nowrap group">
                ALL PROJECTS <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
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

        {/* Brand Logos Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full border-b border-[#1a1a1a]/10 pb-16 mb-24 flex flex-wrap justify-between items-center gap-10 md:gap-16 relative z-10"
        >
          {[
            { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", h: "h-8" },
            { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", h: "h-5" },
            { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", h: "h-7" },
            { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", h: "h-8" }
          ].map((brand, i) => (
            <div key={i} className="flex-1 flex items-center justify-center min-w-[120px]">
              <img 
                src={brand.url} 
                alt={brand.name} 
                className={`${brand.h} w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-70 transition-all duration-400 cursor-target`} 
              />
            </div>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
          
          {/* Card 1: Featured - Healthcare (Image Dominant) */}
          <motion.a 
            href="https://regiuscare.com" target="_blank"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0 }}
            className="group/card relative flex flex-col justify-end col-span-1 md:col-span-12 lg:col-span-8 h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-target bg-[#1a1a1a]"
          >
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" alt="Healthcare" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 opacity-80 group-hover/card:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent opacity-90 transition-opacity duration-500" />
            <IndustryTag text="Healthcare" />
            
            <div className="relative z-20 p-8 md:p-12 w-full flex flex-col">
              <div className="flex flex-col max-w-xl pr-16">
                <span className="text-[11px] uppercase tracking-widest text-white/70 font-bold mb-3 block">Client: Regius Care</span>
                <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-[1.1] group-hover/card:text-portfolio-gold transition-colors duration-400">Revolutionizing Digital Healthcare</h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">A comprehensive health management system focused on patient care and streamlined clinical workflows.</p>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center bg-[#1a1a1a] group-hover/card:bg-portfolio-gold group-hover/card:border-portfolio-gold transition-all duration-400 ease-out z-30 shadow-lg">
              <ArrowUpRight size={20} className="transform group-hover/card:scale-110 transition-transform duration-400" />
            </div>
          </motion.a>

          {/* Card 2: Media (Dark Type-Dominant) */}
          <motion.a 
            href="https://centerspread.in" target="_blank"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.1 }}
            className="group/card relative flex flex-col col-span-1 md:col-span-6 lg:col-span-4 h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-target bg-[#1a1a1a]"
          >
            <div className="relative h-[45%] w-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&q=80&w=800" alt="Media" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 opacity-90" />
              <div className="absolute inset-0 bg-[#1a1a1a]/20 group-hover/card:bg-transparent transition-colors duration-400" />
              <IndustryTag text="Media & Entertainment" />
            </div>
            <div className="relative z-20 p-8 flex flex-col flex-1 justify-center bg-[#1a1a1a] border-t border-white/10 pb-16">
              <div className="pr-12">
                <span className="text-[11px] uppercase tracking-widest text-white/50 font-bold mb-3 block">Client: CenterSpread</span>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover/card:text-portfolio-gold transition-colors duration-400">Next-Gen Media Distribution</h3>
                <p className="text-white/60 text-sm leading-relaxed">High-performance content platform delivering real-time news and media to millions of users globally.</p>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center bg-[#1a1a1a] group-hover/card:bg-portfolio-gold group-hover/card:border-portfolio-gold transition-all duration-400 ease-out z-30 shadow-lg">
              <ArrowUpRight size={20} className="transform group-hover/card:scale-110 transition-transform duration-400" />
            </div>
          </motion.a>

          {/* Card 3: Legal Tech (Image Dominant) */}
          <motion.a 
            href="https://sharmalaw.in" target="_blank"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}
            className="group/card relative flex flex-col justify-end col-span-1 md:col-span-6 lg:col-span-4 h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-target bg-[#1a1a1a]"
          >
            <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800" alt="Legal" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 opacity-80 group-hover/card:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent opacity-90 transition-opacity duration-400" />
            <IndustryTag text="Legal Tech" />
            <div className="relative z-20 p-8 w-full flex flex-col pt-16 pr-16">
              <span className="text-[11px] uppercase tracking-widest text-white/70 font-bold mb-3 block">Client: Sharma & Associates</span>
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover/card:text-portfolio-gold transition-colors duration-400">Legal Tech Transformation</h3>
              <p className="text-white/80 text-sm leading-relaxed">Automated legal document management and highly secure client portal for modern law practices.</p>
            </div>

            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center bg-[#1a1a1a] group-hover/card:bg-portfolio-gold group-hover/card:border-portfolio-gold transition-all duration-400 ease-out z-30 shadow-lg">
              <ArrowUpRight size={20} className="transform group-hover/card:scale-110 transition-transform duration-400" />
            </div>
          </motion.a>

          {/* Card 4: Fintech (Image Dominant) */}
          <motion.a 
            href="https://fintrack.app" target="_blank"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.3 }}
            className="group/card relative flex flex-col justify-end col-span-1 md:col-span-6 lg:col-span-4 h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-target bg-[#1a1a1a]"
          >
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Fintech" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 opacity-80 group-hover/card:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent opacity-90 transition-opacity duration-400" />
            <IndustryTag text="Fintech" />
            <div className="relative z-20 p-8 w-full flex flex-col pr-16">
              <span className="text-[11px] uppercase tracking-widest text-white/70 font-bold mb-3 block">Client: FinTrack Systems</span>
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover/card:text-portfolio-gold transition-colors duration-400">Fintech Innovation Hub</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">Secure financial dashboard with real-time analytics and cross-border payment integration.</p>
            </div>

            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center bg-[#1a1a1a] group-hover/card:bg-portfolio-gold group-hover/card:border-portfolio-gold transition-all duration-400 ease-out z-30 shadow-lg">
              <ArrowUpRight size={20} className="transform group-hover/card:scale-110 transition-transform duration-400" />
            </div>
          </motion.a>

          {/* Card 5: Retail (Image Dominant) */}
          <motion.a 
            href="https://luxewear.com" target="_blank"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.4 }}
            className="group/card relative flex flex-col justify-end col-span-1 md:col-span-6 lg:col-span-4 h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-target bg-[#1a1a1a]"
          >
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" alt="Retail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 opacity-80 group-hover/card:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent opacity-90 transition-opacity duration-400" />
            <IndustryTag text="Retail" />
            <div className="relative z-20 p-8 w-full flex flex-col pr-16">
              <span className="text-[11px] uppercase tracking-widest text-white/70 font-bold mb-3 block">Client: Luxe Wear</span>
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover/card:text-portfolio-gold transition-colors duration-400">E-commerce Experience Design</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">A luxury retail platform focused on immersive shopping experiences and high-conversion checkouts.</p>
            </div>

            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center bg-[#1a1a1a] group-hover/card:bg-portfolio-gold group-hover/card:border-portfolio-gold transition-all duration-400 ease-out z-30 shadow-lg">
              <ArrowUpRight size={20} className="transform group-hover/card:scale-110 transition-transform duration-400" />
            </div>
          </motion.a>

          {/* Card 6: Enterprise (Split Layout) */}
          <motion.a 
            href="https://dataflow.io" target="_blank"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.5 }}
            className="group/card relative flex flex-col md:flex-row col-span-1 md:col-span-12 lg:col-span-12 h-auto md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-target bg-white border border-gray-200/60"
          >
            <div className="relative w-full md:w-1/2 h-[350px] md:h-full overflow-hidden order-2 md:order-1">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Enterprise" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105" />
              <div className="absolute inset-0 bg-[#1a1a1a]/5 group-hover/card:bg-[#1a1a1a]/20 transition-colors duration-400" />
              <IndustryTag text="Enterprise" />
            </div>
            <div className="relative w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center order-1 md:order-2 bg-white pb-24 md:pb-24 pr-16 md:pr-20">
              <div className="flex flex-col h-full justify-center">
                <span className="text-[11px] uppercase tracking-widest text-portfolio-muted font-bold mb-6 block">Client: DataFlow</span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-8 leading-tight group-hover/card:text-portfolio-gold transition-colors duration-400">SaaS Analytics Dashboard</h3>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md">Powerful data visualization for enterprise-level marketing automation and lead tracking. Designed to handle millions of data points with zero latency.</p>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center bg-[#1a1a1a] group-hover/card:bg-portfolio-gold group-hover/card:border-portfolio-gold transition-all duration-400 ease-out z-30 shadow-lg">
              <ArrowUpRight size={20} className="transform group-hover/card:scale-110 transition-transform duration-400" />
            </div>
          </motion.a>

        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
