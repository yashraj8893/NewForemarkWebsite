import { motion } from 'framer-motion';

// ─── Section A: About Hero ───────────────────────────────────────────────────

const AboutHero = () => (
  <section className="relative pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden">

    {/* Background effects */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[320px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse, #ff5c00 0%, transparent 70%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-portfolio-bg" />
    </div>

    <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">

      {/* Plain text label — no box, no border */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-portfolio-muted mb-6"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5c00] inline-block" />
        About Us
      </motion.p>

      {/* Heading — smaller, tighter, like KloudMate */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-[2.6rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-black tracking-tight leading-[1.08] text-portfolio-dark mb-6"
      >
        Hi. We're Foremark.
      </motion.h1>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.22 }}
        className="w-14 h-[2px] bg-[#ff5c00] mb-8 rounded-full"
      />

      {/* Para 1 */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-portfolio-muted text-[14px] md:text-[15px] max-w-[520px] text-center leading-[1.8] font-medium mb-4"
      >
        We are a team of passionate developers, solution architects, and automation
        specialists who leverage the power of modern software to transform how businesses
        operate.{' '}
        <span className="text-portfolio-dark font-bold">#EngineeringFirst.</span>
      </motion.p>

      {/* Para 2 */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-portfolio-muted text-[14px] md:text-[15px] max-w-[520px] text-center leading-[1.8] font-medium"
      >
        Foremark is our endeavor to help{' '}
        <span className="text-portfolio-dark font-bold">Developers</span> spend less time
        debugging, so they can do more of what they do best —{' '}
        <span className="text-portfolio-dark font-bold">Write Quality Code</span>. The
        platform also empowers{' '}
        <span className="text-portfolio-dark font-bold">SREs</span> and{' '}
        <span className="text-portfolio-dark font-bold">DevOps engineers</span> who build,
        deploy &amp; manage applications on modern cloud architecture.
      </motion.p>

    </div>
  </section>
);

// ─── Section B: Our Story ────────────────────────────────────────────────────

const OurStory = () => (
  <section className="pt-4 md:pt-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center mb-24 md:mb-36"
    >
      <div className="relative rounded-[2rem] overflow-hidden cursor-target group w-full max-w-[600px] md:max-w-[760px] aspect-[16/10] shadow-xl hover:shadow-2xl transition-shadow duration-500">
        <img
          src="/Hexture-10-1.webp"
          alt="Foremark team at work"
          className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
        />
      </div>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-start pb-20 md:pb-28">
      <div className="lg:col-span-5 flex flex-col">
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#ff5c00] font-bold mb-5 block">
          How It Started
        </span>
        <h2 className="text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-black tracking-tighter text-portfolio-text leading-[0.9]">
          Our <br className="hidden lg:block" />
          Story
        </h2>
      </div>

      <motion.div
        className="lg:col-span-7 flex flex-col gap-8 md:gap-10 max-w-[650px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <p className="text-gray-500 text-[15px] md:text-[17px] leading-[1.85] font-medium">
          Foremark was born from a simple observation: too many businesses are held back by
          technology that doesn't scale, doesn't perform, and doesn't solve real problems. We
          saw teams struggling with bloated codebases, unreliable systems, and agencies that
          prioritized speed over quality. We set out to change that.
        </p>
        <p className="text-gray-500 text-[15px] md:text-[17px] leading-[1.85] font-medium">
          Soon, we set out to build what we believe will eventually go on to become
          synonymous with everything{' '}
          <span className="text-portfolio-text font-bold">Observability</span> — for
          intricate, scalable technologies of the future. Be it modern web platforms,
          scalable APIs, or cloud-native architecture.
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
    <div className="flex items-center gap-6 mb-16 opacity-70">
      <div className="w-8 md:w-20 h-[1px] bg-gray-200" />
      <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
        By The Numbers
      </span>
      <div className="flex-1 h-[1px] bg-gray-200" />
    </div>

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
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-[#f97316] font-bold mb-3">
            {stat.label}
          </p>
          <p className="text-gray-500 text-[13px] md:text-[14px] leading-[1.7] font-medium">
            {stat.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

// ─── Page ────────────────────────────────────────────────────────────────────

const About = () => (
  <div className="max-w-[1280px] mx-auto px-6 md:px-12">
    <AboutHero />
    <OurStory />
    <StatsGrid />
  </div>
);

export default About;