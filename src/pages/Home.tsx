import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react';
import { HeroAbstractLines } from '../components/HeroAbstractLines';
import ServicesGrid from '../components/ServicesGrid';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

// --- Data ---

const curatedProjects = [
  {
    title: "Nappa Dori",
    category: "LUXURY E-COMMERCE",
    desc: "A high-concurrency digital flagship engineered with sub-second page transitions, global currency routing, and bespoke headless checkout architecture.",
    client: "Nappa Dori",
    date: "2024",
    stack: ["React", "Headless Commerce", "Edge Routing"],
    image: "/projects/project1.png",
    accent: "#4a3728"
  },
  {
    title: "Regius Care",
    category: "HEALTHCARE PLATFORM",
    desc: "Enterprise health operations portal designed for complex clinical workflows, secure patient records, and real-time operational telemetry.",
    client: "Regius Care",
    date: "2024",
    stack: ["Full-Stack", "Cloud SQL", "Automated Ops"],
    image: "/projects/project11.png",
    accent: "#b45309"
  },
  {
    title: "PDR",
    category: "ARCHITECTURAL PORTFOLIO",
    desc: "A minimalist digital presence featuring fluid spatial transitions, curated typography, and responsive media delivery pipelines.",
    client: "PDR",
    date: "2024",
    stack: ["Interactive UI", "Performance", "SSR"],
    image: "/projects/project9.png",
    accent: "#1e3a8a"
  }
];

const carouselImages = [
  { src: "/projects/project1.png", alt: "Nappa Dori", domain: "nappadori.com" },
  { src: "/projects/project11.png", alt: "Regius Care", domain: "regiuscare.com" },
  { src: "/projects/project12.png", alt: "Center Spread", domain: "thecenterspread.com" },
  { src: "/projects/project9.png", alt: "PDR", domain: "pdr.studio" },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen -mt-24 sm:-mt-28 pt-28 sm:pt-36 pb-16 sm:pb-20 flex flex-col items-center justify-between overflow-hidden">
      {/* Handcrafted Retro-Modern Geometric Shaded Lines Background */}
      <HeroAbstractLines />

      <div className="relative z-10 flex flex-col items-center text-center mb-8 sm:mb-10 max-w-4xl mx-auto px-4 w-full">

        {/* Handcrafted Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-portfolio-gold/30 bg-portfolio-gold/5 mb-6 text-[11px] font-mono uppercase tracking-[0.2em] text-portfolio-gold shadow-[0_0_20px_rgba(234,112,8,0.12)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-portfolio-gold animate-pulse" />
          <span>Systems Architecture &amp; Digital Engineering</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold font-display tracking-tight mb-5 sm:mb-6 text-white leading-[1.12]"
        >
          We build digital products <br />
          <span className="text-portfolio-gold">that drive growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#a89d91] text-sm sm:text-base md:text-lg max-w-2xl mb-8 sm:mb-10 leading-relaxed font-normal px-2"
        >
          From high-throughput web applications to resilient cloud architectures, <br className="hidden sm:inline" />
          we engineer software that transforms ambitious businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3.5 mb-8 sm:mb-10"
        >
          <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 px-8 py-3 text-sm sm:text-base cursor-target">
            <MessageSquare size={17} /> Let's Talk
          </Link>
          <a href="mailto:hello@foremark.in" className="btn-ghost flex items-center justify-center gap-2 px-8 py-3 text-sm sm:text-base cursor-target">
            <Mail size={17} /> Email Us
          </a>
        </motion.div>

        {/* Technical stack credibility ticker */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}
          className="flex items-center gap-3 sm:gap-6 text-[11px] font-mono uppercase tracking-[0.16em] text-[#a3998e]/70 flex-wrap justify-center px-4"
        >
          <span>REACT / NEXT.JS</span>
          <span className="text-portfolio-gold/50">·</span>
          <span>DISTRIBUTED SYSTEMS</span>
          <span className="text-portfolio-gold/50">·</span>
          <span>CLOUD ARCHITECTURE</span>
          <span className="text-portfolio-gold/50">·</span>
          <span>ENTERPRISE AUTOMATION</span>
        </motion.div>
      </div>

      {/* The Signature: Real Product Showcase Carousel */}
      <div className="w-full relative z-20 overflow-hidden mt-8 sm:mt-12 pb-12 [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)] no-cursor">
        <motion.div
          className="flex gap-6 whitespace-nowrap will-change-transform"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ width: "fit-content", transform: "translateZ(0)" }}
        >
          {[...carouselImages, ...carouselImages].map((item, i) => (
            <div
              key={i}
              className="w-[85vw] sm:w-[440px] md:w-[620px] aspect-[16/10] rounded-2xl overflow-hidden border border-portfolio-gold/35 hover:border-portfolio-gold/70 shrink-0 bg-[#120e09] transition-all duration-300 shadow-[0_0_35px_rgba(234,112,8,0.12)] flex flex-col group/slide relative z-30 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/40 before:to-transparent before:z-20"
            >
              {/* Browser window header bar */}
              <div className="h-8 sm:h-9 bg-[#17120c] border-b border-portfolio-gold/25 px-3.5 flex items-center justify-between shrink-0 z-10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className="flex items-center gap-1 px-3 py-0.5 rounded-md bg-[#0a0805]/70 border border-white/10 text-[11px] font-mono text-[#a3998e]">
                  <span className="text-portfolio-gold font-bold">https://</span>
                  <span>{item.domain}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-portfolio-gold">
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-gold animate-pulse" />
                  <span className="hidden sm:inline">LIVE</span>
                </div>
              </div>

              {/* Product Viewport */}
              <div className="relative flex-1 w-full overflow-hidden bg-[#0a0805]">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/slide:scale-105 opacity-90 group-hover/slide:opacity-100"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CuratedWork = () => (
  <section id="projects" className="py-16 sm:py-24 md:py-32">
    {/* Section Header */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16 md:mb-24">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-portfolio-gold mb-4 sm:mb-6 block font-mono">// 02 · CURATED WORK</span>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display tracking-tight mb-4 sm:mb-6 text-white leading-tight">
          A curated collection of <br /> websites designed with care
        </h2>
      </div>
    </div>

    {/* Editorial Project List */}
    <div className="flex flex-col gap-12 sm:gap-16 lg:gap-28">
      {curatedProjects.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.21, 0.45, 0.32, 0.9] }}
          className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center cursor-target ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''
            }`}
        >
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-portfolio-gold/35 group-hover:border-portfolio-gold/60 bg-[#140f0a] lg:[direction:ltr] transition-all duration-500 shadow-[0_0_35px_rgba(234,112,8,0.08)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/40 before:to-transparent before:z-10">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0805]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            {/* Project number */}
            <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-[#140f0a]/90 border border-portfolio-gold/30 backdrop-blur-sm flex items-center justify-center shadow-lg z-20">
              <span className="text-xs font-bold text-white font-mono">0{i + 1}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center lg:[direction:ltr]">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-portfolio-gold font-bold font-mono px-2.5 py-0.5 rounded-full border border-portfolio-gold/25 bg-portfolio-gold/5">
                {p.category}
              </span>
              <span className="text-[11px] font-mono text-[#a3998e]">{p.date}</span>
            </div>

            <h3 className="text-2xl md:text-4xl font-bold font-display tracking-tight mb-4 text-white group-hover:text-portfolio-gold transition-colors duration-500">
              {p.title}
            </h3>

            <p className="text-[#a3998e] text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mb-6 sm:mb-8 font-normal">
              {p.desc}
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
              {p.stack.map((tech) => (
                <span key={tech} className="text-[11px] font-mono px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/70">
                  {tech}
                </span>
              ))}
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-4 self-start group/btn cursor-target"
            >
              <div className="w-12 h-12 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center group-hover/btn:bg-[#ea7008] group-hover/btn:border-[#ea7008] transition-all duration-500 shadow-md">
                <ArrowUpRight size={18} className="text-white/70 group-hover/btn:text-[#0a0805] transition-colors duration-500" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60 group-hover/btn:text-portfolio-gold transition-colors font-mono">
                View Project Case
              </span>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-16 md:py-32">
    <div className="bg-[#0a0805] border border-portfolio-gold/35 hover:border-portfolio-gold/60 shadow-[0_0_50px_rgba(234,112,8,0.12)] rounded-3xl md:rounded-4xl p-8 sm:p-12 md:p-24 text-white relative overflow-hidden flex flex-col items-center text-center transition-all duration-500 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/40 before:to-transparent">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path d="M0 200C100 150 200 180 300 120C400 60 500 100 600 80C700 60 800 120 1000 100" stroke="#ea7008" strokeWidth="0.8" strokeDasharray="4 4" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-portfolio-gold/[0.08] blur-[120px] rounded-full pointer-events-none" />
      <div className="relative z-10 max-w-3xl">
        <span className="text-portfolio-gold font-bold mb-4 md:mb-6 text-[11px] tracking-[0.2em] block uppercase font-mono">// COMMISSIONS &amp; PARTNERSHIPS</span>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display tracking-tight mb-5 md:mb-8 text-white leading-tight">Let's build something extraordinary together.</h2>
        <p className="text-sm sm:text-base md:text-lg text-[#a3998e] mb-8 md:mb-12 leading-relaxed">Whether you need a high-performance web platform built from scratch or want to explore how intelligent automation can transform your operations.</p>
        <Link
          to="/contact"
          className="btn-primary inline-flex items-center gap-2 px-9 py-4 uppercase tracking-[0.16em] text-xs sm:text-sm cursor-target"
        >
          Start A Project <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

// --- Testimonials Data ---

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "CTO, Regius Care",
    avatar: "https://i.pravatar.cc/150?u=arjun1",
    text: "Foremark didn't just build us a website — they engineered a system. The attention to performance and detail was unlike any agency we'd worked with before."
  },
  {
    name: "Priya Nair",
    role: "Founder, CenterSpread",
    avatar: "https://i.pravatar.cc/150?u=priya2",
    text: "Our content platform went from a slow WordPress nightmare to a blazing-fast React app in under 6 weeks. The team communicates like engineers, not salespeople."
  },
  {
    name: "Rohan Kapoor",
    role: "Managing Partner, Sharma & Associates",
    avatar: "https://i.pravatar.cc/150?u=rohan3",
    text: "We needed a secure client portal for our law firm. Foremark understood the compliance requirements without us having to over-explain. Delivered exactly what we asked."
  },
  {
    name: "Sneha Iyer",
    role: "Product Lead, FinTrack",
    avatar: "https://i.pravatar.cc/150?u=sneha4",
    text: "The dashboard they built handles real-time data for thousands of users without breaking a sweat. I was skeptical of a smaller team, but they proved me wrong on every metric."
  },
  {
    name: "Dev Anand",
    role: "CEO, Luxe Wear",
    avatar: "https://i.pravatar.cc/150?u=dev5",
    text: "Our conversion rate went up 40% after the redesign. They didn't just make it pretty — they thought about the checkout flow, the load times, everything."
  },
  {
    name: "Kavya Reddy",
    role: "Operations Head, DataFlow",
    avatar: "https://i.pravatar.cc/150?u=kavya6",
    text: "The automation workflows Foremark built have saved us 20+ hours a week. It's not magic — it's just really good engineering. They understand business, not just code."
  },
  {
    name: "Nikhil Sharma",
    role: "Startup Founder",
    avatar: "https://i.pravatar.cc/150?u=nikhil7",
    text: "I came in with a rough idea and a tight deadline. They scoped it properly, pushed back on what didn't make sense, and shipped a clean MVP in 3 weeks. 10/10."
  },
  {
    name: "Aisha Khan",
    role: "Marketing Director, Aurora Legal",
    avatar: "https://i.pravatar.cc/150?u=aisha8",
    text: "Every other agency gave us templates. Foremark gave us something we actually own. The site feels like us — not like a theme someone slapped our logo on."
  },
  {
    name: "Vikram Joshi",
    role: "Tech Lead, SaaS Startup",
    avatar: "https://i.pravatar.cc/150?u=vikram9",
    text: "They inherited our messy codebase and didn't complain once. Cleaned it up, added proper CI/CD, and now our deploys take 2 minutes instead of 2 hours."
  },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="relative overflow-hidden bg-[#120e09] border border-white/[0.08] rounded-2xl p-7 mb-6 flex flex-col gap-4 hover:bg-[#16110b] hover:border-portfolio-gold/40 transition-all duration-700 shadow-xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/25 before:to-transparent">
    <p className="text-[#d4c9bf] text-[14px] leading-[1.7] font-normal tracking-wide">"{t.text}"</p>
    <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/[0.06]">
      <div className="flex items-center gap-3">
        <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover grayscale opacity-80 shrink-0 border border-white/10" />
        <div>
          <p className="text-white font-semibold text-[13px] leading-tight">{t.name}</p>
          <p className="text-[#a3998e] text-[11px] font-mono leading-tight mt-0.5">{t.role}</p>
        </div>
      </div>
      <span className="text-[9px] font-mono uppercase tracking-[0.16em] text-portfolio-gold bg-portfolio-gold/5 px-2 py-0.5 rounded-full border border-portfolio-gold/20 shrink-0">
        VERIFIED
      </span>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const col1 = testimonials.filter((_, i) => i % 4 === 0);
  const col2 = testimonials.filter((_, i) => i % 4 === 1);
  const col3 = testimonials.filter((_, i) => i % 4 === 2);
  const col4 = testimonials.filter((_, i) => i % 4 === 3);

  return (
    <section className="py-20 sm:py-28 md:py-36 w-screen relative left-1/2 -translate-x-1/2 flex items-center justify-center bg-[#0a0805] border-y border-white/[0.04]">

      {/* Subconscious ambient warmth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-portfolio-gold/[0.04] blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Container */}
      <div className="relative w-full max-w-[1280px] mx-auto overflow-hidden h-[500px] sm:h-[600px] md:h-[750px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)]">

        {/* Scroll grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-7 px-4 sm:px-6 md:px-12 h-full opacity-100">
          {/* Col 1 */}
          <div className="overflow-hidden">
            <div className="animate-scroll-slow flex flex-col pt-12">
              {[...col1, ...col1, ...col1].map((t, i) => <TestimonialCard key={i} t={t} />)}
            </div>
          </div>
          {/* Col 2 */}
          <div className="overflow-hidden hidden sm:block">
            <div className="animate-scroll-medium flex flex-col -mt-24">
              {[...col2, ...col2, ...col2].map((t, i) => <TestimonialCard key={i} t={t} />)}
            </div>
          </div>
          {/* Col 3 */}
          <div className="overflow-hidden hidden md:block">
            <div className="animate-scroll-fast flex flex-col -mt-12">
              {[...col3, ...col3, ...col3].map((t, i) => <TestimonialCard key={i} t={t} />)}
            </div>
          </div>
          {/* Col 4 */}
          <div className="overflow-hidden hidden md:block">
            <div className="animate-scroll-medium-alt flex flex-col -mt-32">
              {[...col4, ...col4, ...col4].map((t, i) => <TestimonialCard key={i} t={t} />)}
            </div>
          </div>
        </div>

        {/* Rating badge */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="bg-[#130f0a]/90 backdrop-blur-3xl border border-portfolio-gold/30 rounded-2xl sm:rounded-3xl px-6 py-5 sm:px-9 sm:py-7 flex items-center gap-4 sm:gap-7 shadow-2xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/40 before:to-transparent">
            <span className="text-3xl sm:text-5xl font-bold text-white leading-none tabular-nums tracking-tight font-mono">4.9</span>
            <div className="flex flex-col gap-1.5">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-portfolio-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[#d4c9bf] text-[11px] font-semibold tracking-wider uppercase font-mono">VERIFIED CLIENT REVIEWS · 15+ COMMISSIONS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- FAQ Data ---

const faqs = [
  {
    q: "What kind of projects does Foremark take on?",
    a: "We architect custom web applications, SaaS platforms, and enterprise automation systems. From venture-backed teams requiring an MVP with production-grade foundations to mature enterprises modernizing legacy architecture."
  },
  {
    q: "How long does a typical project take?",
    a: "A marketing flagship or bespoke site typically ships in 1–3 weeks. Full-scale SaaS applications and custom software platforms range between 4–12 weeks. We specify explicit milestones upfront with zero scope ambiguity."
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. Our client footprint spans India, North America, the UK, and the UAE. We operate with structured async engineering cadences, weekly demo builds, and transparent Slack/Linear channels."
  },
  {
    q: "What technologies do you use?",
    a: "Our core engineering stack comprises React, Next.js, Node.js, TypeScript, PostgreSQL, and Redis, deployed across AWS and Vercel infrastructure. We select tooling strictly based on reliability and scale."
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Yes. We regularly conduct deep architectural audits on inherited codebases to eliminate performance bottlenecks, enforce CI/CD rigor, and remediate technical debt before shipping new features."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24">
      <div className="bg-[#0a0805] border border-portfolio-gold/35 hover:border-portfolio-gold/60 shadow-[0_0_50px_rgba(234,112,8,0.12)] rounded-3xl md:rounded-4xl p-5 sm:p-8 md:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 transition-all duration-500 relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/40 before:to-transparent">

        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col justify-start pt-2">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-portfolio-gold border border-portfolio-gold/30 bg-portfolio-gold/5 rounded-full px-3.5 py-1 mb-6 md:mb-8 w-fit font-mono">
            // 03 · INQUIRIES &amp; FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display tracking-tight text-white mb-4 md:mb-6 leading-tight">
            Frequently asked <br />
            <span className="text-portfolio-gold">questions</span>
          </h2>
          <p className="text-[#a3998e] text-sm leading-relaxed max-w-xs">
            Everything you need to know about our engineering standards, timelines, and engagement structure.
          </p>
        </div>

        {/* Right Column — Accordion */}
        <div className="lg:col-span-8 flex flex-col gap-3 sm:gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`transition-all duration-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 border ${
                openIndex === i
                  ? 'bg-portfolio-gold/[0.06] border-portfolio-gold/50 shadow-[0_0_20px_rgba(234,112,8,0.12)]'
                  : 'bg-white/[0.02] border-portfolio-gold/20 hover:border-portfolio-gold/45 hover:bg-white/[0.04]'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 sm:gap-6 text-left group cursor-target"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="font-mono text-xs text-portfolio-gold/70 shrink-0 font-semibold">0{i + 1}</span>
                  <span className={`text-sm md:text-base font-semibold leading-snug transition-colors duration-300 ${openIndex === i ? 'text-portfolio-gold' : 'text-white/90 group-hover:text-white'}`}>
                    {faq.q}
                  </span>
                </div>
                <div className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === i ? 'border-portfolio-gold bg-portfolio-gold/20 rotate-45' : 'border-portfolio-gold/30 group-hover:border-portfolio-gold'}`}>
                  <span className={`text-lg leading-none font-light transition-colors duration-300 ${openIndex === i ? 'text-portfolio-gold' : 'text-white/50'}`}>+</span>
                </div>
              </button>

              {/* Answer — animated open/close */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.21,0.45,0.32,0.9)] ${openIndex === i ? 'max-h-[500px] opacity-100 mt-3 sm:mt-4' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-[#d4c9bf] text-xs sm:text-sm leading-relaxed pr-4 sm:pr-12 pl-7 sm:pl-8">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const MissionSection = () => {
  const words = [
    { text: 'We', orange: false },
    { text: 'Drive', orange: false },
    { text: 'Businesses', orange: true },
    { text: 'To', orange: false },
    { text: 'The', orange: false },
    { text: 'Forefront', orange: true },
    { text: 'Of', orange: false },
    { text: 'The', orange: false },
    { text: 'Industries', orange: false },
    { text: 'Through', orange: false },
    { text: 'Comprehensive', orange: false },
    { text: 'Development', orange: true },
    { text: '&', orange: false },
    { text: 'Automation.', orange: true },
  ];

  return (
    <section className="py-16 md:py-28">
      <div className="bg-[#0a0805] border border-portfolio-gold/35 hover:border-portfolio-gold/60 shadow-[0_0_50px_rgba(234,112,8,0.12)] rounded-3xl md:rounded-4xl p-8 sm:p-14 md:p-20 text-white relative flex flex-col items-center text-center transition-all duration-500 overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/40 before:to-transparent">
        <div className="relative z-10 flex flex-col items-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-portfolio-gold/30 bg-portfolio-gold/5 text-[11px] font-bold uppercase tracking-[0.2em] text-portfolio-gold mb-8 sm:mb-10 font-mono shadow-[0_0_15px_rgba(234,112,8,0.1)]"
          >
            // 01 · OUR MISSION
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight max-w-[850px] mb-8 sm:mb-10 flex flex-wrap justify-center gap-x-[0.28em] gap-y-[0.08em] leading-tight">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1 + i * 0.05,
                  duration: 0.5,
                  ease: [0.21, 0.45, 0.32, 0.9],
                }}
                className={word.orange ? 'text-portfolio-gold' : 'text-white'}
              >
                {word.text}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + words.length * 0.05 + 0.1, duration: 0.5 }}
            className="text-[#a3998e] text-sm md:text-base max-w-[560px] leading-relaxed font-normal mb-8 sm:mb-10"
          >
            We solve complex technical problems through thoughtful engineering, modern software
            architecture, and intelligent automation. Building technology that scales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + words.length * 0.05 + 0.2, duration: 0.5 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-portfolio-gold font-semibold text-sm sm:text-base hover:brightness-125 transition-all cursor-target group font-mono border border-portfolio-gold/30 hover:border-portfolio-gold/60 bg-portfolio-gold/5 px-6 py-2.5 rounded-full"
            >
              Book A Call{' '}
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <SEO />
      {/* Full-bleed Hero section spanning 100% of viewport width end-to-end */}
      <Hero />

      {/* Content sections contained within max-w-[1280px] */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16">
        <MissionSection />
        <ServicesGrid />
        <CuratedWork />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </div>
    </>
  );
};

export default Home;
