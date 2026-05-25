import { motion } from 'framer-motion';

// ─── Section A: About Hero ───────────────────────────────────────────────────

const AboutHero = () => (
  <section className="pt-4 md:pt-6">
    <div className="bg-portfolio-dark rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden flex flex-col items-center justify-center py-20 md:py-24 lg:py-32 px-6 md:px-12 border border-white/[0.03]">
      
      {/* Subtle Atmosphere — Faint warm radial glow and soft vignette */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(249, 115, 22, 0.02) 0%, rgba(0, 0, 0, 0) 50%)',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0d0d0d_120%)] pointer-events-none" />

      {/* Pill label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-8 md:mb-10"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]/80 shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
        About Us
      </motion.div>

      {/* Large heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-black tracking-tighter leading-[0.95] text-white text-center mb-8 md:mb-10"
      >
        Hi. We're <br /> Foremark.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 text-white/50 text-[14px] md:text-[16px] max-w-[560px] text-center leading-[1.8] font-medium"
      >
        We are a team of passionate developers, solution architects, and
        automation specialists who leverage the power of modern software
        to transform how businesses operate. <span className="text-white/90 font-semibold">Engineering-first.</span>
      </motion.p>
    </div>
  </section>
);

// ─── Section B: What We Build & Our Story ───────────────────────────────────

const OurStory = () => (
  <section className="pt-20 md:pt-28">
    {/* Graphic / Image Container */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center mb-24 md:mb-36"
    >
      <div className="relative rounded-[2rem] overflow-hidden cursor-target group w-full max-w-[600px] md:max-w-[800px] aspect-[16/10] shadow-2xl hover:shadow-3xl transition-shadow duration-500">
        <img 
          src="/Hexture-10-1.webp" 
          alt="Foremark Platform" 
          className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-all duration-700 hover:scale-105"
        />
      </div>
    </motion.div>

    {/* HOW IT STARTED Divider & Content */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-start pb-20 md:pb-28">
      {/* Left — Label & Heading */}
      <div className="lg:col-span-5 flex flex-col">
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-5 block">
          How It Started
        </span>

        <h2 className="text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-black tracking-tighter text-[#111] leading-[0.9]">
          Our <br className="hidden lg:block" />
          Story
        </h2>
      </div>

      {/* Right — Narrative */}
      <motion.div
        className="lg:col-span-7 flex flex-col gap-8 md:gap-10 max-w-[650px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <p className="text-gray-500 text-[15px] md:text-[17px] leading-[1.85] font-medium">
          Foremark was born from a simple observation: too many businesses are held back by
          technology that doesn't scale, doesn't perform, and doesn't solve real problems. We saw
          teams struggling with bloated codebases, unreliable systems, and agencies that prioritized
          speed over quality. We set out to change that.
        </p>

        <p className="text-gray-500 text-[15px] md:text-[17px] leading-[1.85] font-medium">
          We started as a small team of engineers who believed in doing things right — writing clean
          code, building scalable architectures, and putting engineering quality above everything else.
          Today, we continue to build on that foundation, partnering with companies across industries to
          modernize their technology stack, automate their operations, and build digital products that
          their users genuinely love.
        </p>
        
        <p className="text-gray-500 text-[15px] md:text-[17px] leading-[1.85] font-medium">
          We don't just build software. We engineer <span className="text-gray-900 font-bold">systems, reliability,</span> and <span className="text-gray-900 font-bold">growth</span> — the kind that
          compounds over time.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Section C: Stats ────────────────────────────────────────────────────────

const statsData = [
  { value: '100', accent: '%', label: 'Client Retention', desc: 'We build long-term partnerships through consistent quality and technical excellence.', accentColor: 'text-[#f97316]' },
  { value: '15', accent: '+', label: 'Projects Delivered', desc: 'Successful delivery of web and mobile applications across various industries.', accentColor: 'text-[#111]' },
  { value: '3', accent: 'x', label: 'Avg. Client Growth', desc: 'Our systems are designed to scale and drive measurable business impact.', accentColor: 'text-[#111]' },
  { value: '5', accent: '+', label: 'Industries Served', desc: 'Expertise across different domains from startups to established businesses.', accentColor: 'text-[#111]' },
];

const StatsGrid = () => (
  <section className="pb-24 md:pb-40">
    {/* BY THE NUMBERS Divider */}
    <div className="flex items-center gap-6 mb-16 opacity-70">
      <div className="w-8 md:w-20 h-[1px] bg-gray-200" />
      <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
        By The Numbers
      </span>
      <div className="flex-1 h-[1px] bg-gray-200" />
    </div>

    {/* Stat cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
      {statsData.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white border border-gray-100 rounded-[2rem] px-8 py-10 md:px-10 md:py-12 flex flex-col shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-gray-200/60 hover:-translate-y-1 transition-all duration-500 cursor-target"
        >
          <h3 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-black tracking-tighter text-[#111] leading-none mb-8">
            {stat.value}
            <span className={stat.accentColor}>{stat.accent}</span>
          </h3>
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-[#f97316] font-bold mb-3">{stat.label}</p>
          <p className="text-gray-500 text-[13px] md:text-[14px] leading-[1.7] font-medium">
            {stat.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

// ─── Page ────────────────────────────────────────────────────────────────────

const About = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-12">
      <AboutHero />
      <OurStory />
      <StatsGrid />
    </div>
  );
};

export default About;
