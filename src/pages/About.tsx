import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

// ─── Section A: About Hero ───────────────────────────────────────────────────

const AboutHero = () => (
  <section className="relative pt-16 md:pt-20 pb-16 md:pb-20 overflow-hidden">

    {/* Background effects */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[320px] rounded-full opacity-[0.08]"
        style={{ background: 'radial-gradient(ellipse, var(--color-portfolio-gold) 0%, transparent 70%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0a0805]" />
    </div>

    <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">

      {/* Plain text label */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-portfolio-gold mb-6 font-mono"
      >
        // 01 · ABOUT FOREMARK
      </motion.p>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold font-display tracking-tight text-white mb-6 leading-tight"
      >
        Hi. We're Foremark.
      </motion.h1>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.22 }}
        className="w-14 h-[2px] bg-portfolio-gold mb-8 rounded-full"
      />

      {/* Para 1 */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-[#a3998e] text-[15px] md:text-[17px] max-w-[640px] text-center leading-[1.8] font-medium mb-4"
      >
        We are a team of passionate developers, solution architects, and automation
        specialists who leverage the power of modern software to transform how businesses
        operate.{' '}
        <span className="text-white font-bold">#EngineeringFirst.</span>
      </motion.p>

      {/* Para 2 */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-[#a3998e] text-[15px] md:text-[17px] max-w-[640px] text-center leading-[1.8] font-medium"
      >
        Foremark is our endeavor to help{' '}
        <span className="text-white font-bold">Developers</span> spend less time
        debugging, so they can do more of what they do best —{' '}
        <span className="text-white font-bold">Write Quality Code</span>. The
        platform also empowers{' '}
        <span className="text-white font-bold">SREs</span> and{' '}
        <span className="text-white font-bold">DevOps engineers</span> who build,
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
      className="flex justify-center mb-16 sm:mb-24 md:mb-36"
    >
      <div className="relative rounded-3xl overflow-hidden cursor-target group w-full max-w-[600px] md:max-w-[760px] aspect-[16/10] border border-portfolio-gold/35 group-hover:border-portfolio-gold/65 shadow-[0_0_35px_rgba(234,112,8,0.1)] bg-[#120e09] transition-all duration-500 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/40 before:to-transparent before:z-10">
        <img
          src="/Hexture-10-1.webp"
          alt="Foremark team at work"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
        />
      </div>
    </motion.div>

    <div className="pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-16 items-start w-full">
        <div className="md:col-span-4 flex flex-col md:pl-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-portfolio-gold mb-4 block font-mono">
            // OUR GENESIS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
            Our <br className="hidden md:block" />
            Story
          </h2>
        </div>

        <motion.div
          className="md:col-span-8 flex flex-col gap-8 md:gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-[#a3998e] text-[15px] md:text-[17px] leading-[1.85] font-medium">
            Foremark was born from a simple observation: too many businesses are held back by
            technology that doesn't scale, doesn't perform, and doesn't solve real problems. We
            saw teams struggling with bloated codebases, unreliable systems, and agencies that
            prioritized speed over quality. We set out to change that.
          </p>
          <p className="text-[#a3998e] text-[15px] md:text-[17px] leading-[1.85] font-medium">
            Soon, we set out to build what we believe will eventually go on to become
            synonymous with everything{' '}
            <span className="text-white font-bold">Observability</span> — for
            intricate, scalable technologies of the future. Be it modern web platforms,
            scalable APIs, or cloud-native architecture.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Section C: Stats ────────────────────────────────────────────────────────

const statsData = [
  { value: '100', accent: '%', label: 'Client Retention', desc: 'We build long-term partnerships through consistent quality and technical excellence.', accentColor: 'text-portfolio-gold' },
  { value: '50', accent: '+', label: 'Projects Delivered', desc: 'Successful delivery of web and mobile applications across various industries.', accentColor: 'text-white' },
  { value: '3', accent: 'x', label: 'Avg. Client Growth', desc: 'Our systems are designed to scale and drive measurable business impact.', accentColor: 'text-white' },
  { value: '12', accent: '+', label: 'Industries Served', desc: 'Expertise across different domains from startups to established businesses.', accentColor: 'text-white' },
];

const StatsGrid = () => (
  <section className="pb-16 sm:pb-24 md:pb-40">
    <div className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-16 opacity-70 md:pl-10">
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-portfolio-gold shrink-0 font-mono">
        // BY THE NUMBERS
      </span>
      <div className="flex-1 h-[1px] bg-white/10" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
      {statsData.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-[#120e09] border border-portfolio-gold/35 hover:border-portfolio-gold/65 rounded-2xl sm:rounded-3xl px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 flex flex-col shadow-[0_0_30px_rgba(234,112,8,0.08)] hover:shadow-[0_0_45px_rgba(234,112,8,0.18)] hover:-translate-y-1 transition-all duration-500 cursor-target relative overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/40 before:to-transparent before:z-10"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 sm:mb-8 font-mono">
            {stat.value}
            <span className={stat.accentColor}>{stat.accent}</span>
          </h3>
          <p className="text-[11px] uppercase tracking-[0.2em] text-portfolio-gold font-bold mb-3 font-mono">
            {stat.label}
          </p>
          <p className="text-[#a3998e] text-[13px] md:text-[14px] leading-[1.7] font-medium">
            {stat.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

// ─── Page ────────────────────────────────────────────────────────────────────

const About = () => (
  <>
    <SEO title="About Us" description="Foremark is a team of passionate developers, solution architects, and automation specialists who leverage modern software to transform how businesses operate." canonicalUrl="https://foremark.in/about" />
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 bg-[#0a0805] text-[#f9f5f1]">
      <AboutHero />
      <OurStory />
      <StatsGrid />
    </div>
  </>
);

export default About;