import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react';
import { InteractiveGridPattern } from "../components/magicui/interactive-grid-pattern";
import ServicesGrid from '../components/ServicesGrid';
import { cn } from "../lib/utils";
import { Link } from 'react-router-dom';

// --- Data ---

const curatedProjects = [
  {
    title: "Noto Café",
    desc: "A cozy digital home for a neighborhood café, featuring seasonal menus, event updates, and warm visual storytelling",
    client: "Noto Café & Bakery",
    date: "Apr 29, 2025",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200",
    accent: "#f59e0b"
  },
  {
    title: "Aurora Legal",
    desc: "A modern, trustworthy website for a boutique law firm, designed to convey professionalism with a human touch",
    client: "Aurora Legal Group",
    date: "May 3, 2025",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
    accent: "#7c3aed"
  },
  {
    title: "Field Journal Co.",
    desc: "A blog-meets-shop experience for a travel writer, combining editorial storytelling with a curated gear collection",
    client: "Lucy Rivera",
    date: "Apr 4, 2025",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200",
    accent: "#10b981"
  }
];

const carouselImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-12 overflow-hidden">
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[160%] skew-y-12",
        )}
      />
      <div className="relative z-10 flex flex-col items-center text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-portfolio-dark/10 bg-white/50 backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-portfolio-gold animate-pulse" />
          Building digital solutions that drive growth
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
        >
          We are a software <br /> 
          <span className="text-portfolio-muted">development company.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-portfolio-muted text-lg md:text-xl max-w-2xl mb-10"
        >
          We build scalable web applications, beautiful websites, <br /> and digital products that help businesses grow faster.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/contact" className="btn-primary flex items-center gap-2 px-10 border border-transparent hover:border-portfolio-gold transition-colors cursor-target">
            <MessageSquare size={18} /> Let's Talk
          </Link>
          <a href="mailto:hello@foremark.in" className="btn-ghost flex items-center gap-2 px-10 cursor-target">
            <Mail size={18} /> Email Us
          </a>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden mt-8 pb-16">
        <motion.div 
          className="flex gap-4 whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            duration: 45, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ width: "fit-content" }}
        >
          {[...carouselImages, ...carouselImages].map((img, i) => (
            <div 
              key={i} 
              className="w-[400px] md:w-[600px] aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-portfolio-dark/5 shrink-0 bg-white"
            >
              <img 
                src={img} 
                alt={`Project ${i}`} 
                className="w-full h-full object-cover transition-all duration-500" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-32 pb-36">
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/40 font-bold mb-8 block">ABOUT US</span>
      
      {/* Unified Hero Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="w-full bg-[#1a1a1a] text-white px-12 py-16 md:px-16 md:py-20 lg:px-24 lg:py-28 rounded-[3rem] flex flex-col lg:flex-row justify-between items-center gap-12 shadow-2xl relative overflow-hidden mb-6 lg:mb-8"
      >
        <div className="flex flex-col">
          <div className="mb-10 w-16 h-16 md:w-20 md:h-20">
            <img src="/Foremark_Logo_-removebg-preview.png" alt="Foremark Technologies" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]">
            Foremark <br/>
            <span className="text-[#f97316]">Technologies</span>
          </h2>
        </div>

        <div className="lg:w-[45%] flex flex-col">
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-[#f5f5f5]/80">
            We design and engineer intelligent digital systems that help companies build, scale, and automate modern technology platforms. Our expertise drives impactful gains and powerful results.
          </p>
        </div>
      </motion.div>
      
      {/* Clean 2x2 Stat Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr md:[grid-auto-rows:1fr]">
        
        {/* Card 1: 100% */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="bg-[#f5f5f5] p-10 md:p-12 lg:p-14 rounded-[3rem] flex flex-col justify-start group hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 cursor-target"
        >
          <h3 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-[#1a1a1a] leading-none mb-4">
            100<span className="text-[#f97316]">%</span>
          </h3>
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#f97316] font-bold mb-8 md:mb-12">Client Retention</p>
          <p className="text-[#1a1a1a]/70 text-lg md:text-xl leading-relaxed font-medium mt-auto">
            We build long-term partnerships through consistent quality and technical excellence.
          </p>
        </motion.div>

        {/* Card 2: 15+ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="bg-[#f5f5f5] p-10 md:p-12 lg:p-14 rounded-[3rem] flex flex-col justify-start group hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 cursor-target"
        >
          <h3 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-[#1a1a1a] leading-none mb-4">
            15<span className="text-[#f97316]">+</span>
          </h3>
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#f97316] font-bold mb-8 md:mb-12">Projects Delivered</p>
          <p className="text-[#1a1a1a]/70 text-lg md:text-xl leading-relaxed font-medium mt-auto">
            Successful delivery of web and mobile applications across various industries.
          </p>
        </motion.div>

        {/* Card 3: 3x */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="bg-[#f5f5f5] p-10 md:p-12 lg:p-14 rounded-[3rem] flex flex-col justify-start group hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 cursor-target"
        >
          <h3 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-[#1a1a1a] leading-none mb-4">
            3<span className="text-[#1a1a1a]">x</span>
          </h3>
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#f97316] font-bold mb-8 md:mb-12">Avg. Client Growth</p>
          <p className="text-[#1a1a1a]/70 text-lg md:text-xl leading-relaxed font-medium mt-auto">
            Our systems are designed to scale and drive measurable business impact.
          </p>
        </motion.div>

        {/* Card 4: 5+ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="bg-[#f5f5f5] p-10 md:p-12 lg:p-14 rounded-[3rem] flex flex-col justify-start group hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 cursor-target"
        >
          <h3 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-[#1a1a1a] leading-none mb-4">
            5<span className="text-[#f97316]">+</span>
          </h3>
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#f97316] font-bold mb-8 md:mb-12">Industries Served</p>
          <p className="text-[#1a1a1a]/70 text-lg md:text-xl leading-relaxed font-medium mt-auto">
            Expertise across different domains from startups to established businesses.
          </p>
        </motion.div>

      </div>
    </div>
  </section>
);

const CuratedWork = () => (
  <section id="projects" className="py-32">
    {/* Section Header */}
    <div className="flex justify-between items-end mb-24">
      <div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#f97316] font-bold mb-6 block">PROJECTS</span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
          A curated collection of <br /> websites designed with care
        </h2>
      </div>
      <Link 
        to="/projects" 
        className="hidden md:flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#1a1a1a]/60 hover:text-[#1a1a1a] border border-[#1a1a1a]/10 hover:border-[#1a1a1a]/30 rounded-full px-6 py-3 transition-all duration-400 group cursor-target"
      >
        All Projects 
        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>
    </div>

    {/* Editorial Project List */}
    <div className="flex flex-col gap-20 lg:gap-28">
      {curatedProjects.map((p, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.21, 0.45, 0.32, 0.9] }}
          className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center cursor-target ${
            i % 2 === 1 ? 'lg:[direction:rtl]' : ''
          }`}
        >
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg lg:[direction:ltr]">
            <img 
              src={p.image} 
              alt={p.title} 
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]" 
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            {/* Project number */}
            <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
              <span className="text-xs font-bold text-[#1a1a1a]">0{i + 1}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center lg:[direction:ltr]">
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/35 font-bold">CLIENT</span>
              <p className="text-sm font-semibold text-[#1a1a1a]/70 mt-1">{p.client}</p>
            </div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6 group-hover:text-[#f97316] transition-colors duration-500">
              {p.title}
            </h3>
            
            <p className="text-[#1a1a1a]/55 text-base md:text-lg leading-relaxed max-w-lg mb-10">
              {p.desc}
            </p>

            <Link 
              to="/projects"
              className="inline-flex items-center gap-4 self-start group/btn cursor-target"
            >
              <div className="w-14 h-14 rounded-full border-2 border-[#1a1a1a]/10 flex items-center justify-center group-hover/btn:bg-[#1a1a1a] group-hover/btn:border-[#1a1a1a] transition-all duration-500">
                <ArrowUpRight size={20} className="text-[#1a1a1a]/60 group-hover/btn:text-white transition-colors duration-500" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#1a1a1a]/50 group-hover/btn:text-[#1a1a1a] transition-colors">
                View Project
              </span>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Mobile "All Projects" link */}
    <div className="flex md:hidden justify-center mt-16">
      <Link 
        to="/projects" 
        className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#1a1a1a]/60 border border-[#1a1a1a]/10 rounded-full px-8 py-4 cursor-target"
      >
        All Projects <ArrowUpRight size={14} />
      </Link>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-32">
    <div className="bg-portfolio-dark rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden flex flex-col items-center text-center">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path d="M0 200C100 150 200 180 300 120C400 60 500 100 600 80C700 60 800 120 1000 100" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      </div>
      <div className="relative z-10 max-w-3xl">
        <span className="text-portfolio-gold font-bold mb-6 text-xs tracking-widest block uppercase">Ready to start?</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Let's build something extraordinary together.</h2>
        <p className="text-lg text-white/60 mb-12">Whether you need a full application built from scratch or just want to explore how we can help your business grow.</p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-portfolio-gold text-portfolio-dark font-bold px-10 py-5 rounded-full hover:scale-105 transition-transform uppercase tracking-widest text-sm shadow-xl shadow-portfolio-gold/20 cursor-target"
        >
          Contact Us <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-8 md:px-16">
      <Hero />
      <AboutSection />
      <ServicesGrid />
      <CuratedWork />
      <CTASection />
    </div>
  );
};

export default Home;
