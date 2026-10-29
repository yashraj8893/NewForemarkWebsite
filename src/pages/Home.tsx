import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react';
import { HeroAbstractLines } from '../components/HeroAbstractLines';
import ServicesGrid from '../components/ServicesGrid';
import { FAQSection } from '../components/FAQSection';
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
    image: "/projects/project1.webp",
    accent: "#4a3728"
  },
  {
    title: "Regius Care",
    category: "HEALTHCARE PLATFORM",
    desc: "Enterprise health operations portal designed for complex clinical workflows, secure patient records, and real-time operational telemetry.",
    client: "Regius Care",
    date: "2024",
    stack: ["Full-Stack", "Cloud SQL", "Automated Ops"],
    image: "/projects/project11.webp",
    accent: "#b45309"
  },
  {
    title: "PDR",
    category: "ARCHITECTURAL PORTFOLIO",
    desc: "A minimalist digital presence featuring fluid spatial transitions, curated typography, and responsive media delivery pipelines.",
    client: "PDR",
    date: "2024",
    stack: ["Interactive UI", "Performance", "SSR"],
    image: "/projects/project9.webp",
    accent: "#1e3a8a"
  }
];

const carouselImages = [
  { src: "/projects/project1.webp", alt: "Nappa Dori", domain: "nappadori.com" },
  { src: "/projects/project11.webp", alt: "Regius Care", domain: "regiuscare.com" },
  { src: "/projects/project12.webp", alt: "Center Spread", domain: "thecenterspread.com" },
  { src: "/projects/project9.webp", alt: "PDR", domain: "pdr.studio" },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen -mt-24 sm:-mt-28 pt-28 sm:pt-36 pb-16 sm:pb-20 flex flex-col items-center justify-between overflow-hidden">
      {/* Handcrafted Retro-Modern Geometric Shaded Lines Background */}
      <HeroAbstractLines />

      <div className="relative z-10 flex flex-col items-center text-center mt-4 sm:mt-8 md:mt-10 mb-8 sm:mb-10 max-w-5xl mx-auto px-4 w-full">

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.6rem] font-bold font-display tracking-tight mb-5 sm:mb-6 text-[#121110] leading-[1.1]"
        >
          <span className="inline-block">We build digital products</span> <br />
          <span className="inline-block">that drive growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#5c544d] text-sm sm:text-base md:text-lg max-w-2xl mb-8 sm:mb-10 leading-relaxed font-normal px-2"
        >
          From high-throughput web applications to resilient cloud architectures, <br className="hidden sm:inline" />
          we engineer software that transforms ambitious businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3.5 mb-8 sm:mb-10"
        >
          <Link to="/contact" className="rounded-full flex items-center justify-center gap-2 px-8 py-3 text-sm sm:text-base cursor-target font-semibold text-white bg-[#121110] hover:bg-[#252320] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.18)] border border-[#121110]">
            <MessageSquare size={17} /> Let's Talk
          </Link>
          <a href="mailto:hello@foremark.in" className="btn-ghost flex items-center justify-center gap-2 px-8 py-3 text-sm sm:text-base cursor-target">
            <Mail size={17} /> Email Us
          </a>
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
              className="w-[85vw] sm:w-[440px] md:w-[620px] aspect-[16/10] rounded-2xl overflow-hidden border border-portfolio-gold/35 hover:border-portfolio-gold/70 shrink-0 bg-white transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.06)] flex flex-col group/slide relative z-30 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/40 before:to-transparent before:z-20"
            >
              {/* Browser window header bar */}
              <div className="h-8 sm:h-9 bg-[#f8f6f3] border-b border-[#ebe5df] px-3.5 flex items-center justify-between shrink-0 z-10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#dcd4cc]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#dcd4cc]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#dcd4cc]" />
                </div>
                <div className="flex items-center gap-1 px-3 py-0.5 rounded-md bg-white border border-[#e5e0da] text-[11px] font-mono text-[#5c544d]">
                  <span className="text-portfolio-gold font-bold">https://</span>
                  <span>{item.domain}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-portfolio-gold">
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-gold animate-pulse" />
                  <span className="hidden sm:inline">LIVE</span>
                </div>
              </div>

              {/* Product Viewport */}
              <div className="relative flex-1 w-full overflow-hidden bg-[#f8f6f3]">
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
        <span className="text-portfolio-gold text-xs font-semibold uppercase tracking-widest block mb-4 sm:mb-6">Curated Work</span>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display tracking-tight mb-4 sm:mb-6 text-[#121110] leading-tight">
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
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-portfolio-gold/35 group-hover:border-portfolio-gold/60 bg-[#f8f6f3] lg:[direction:ltr] transition-all duration-500 shadow-[0_4px_30px_rgba(234,112,8,0.08)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/40 before:to-transparent before:z-10">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            {/* Project number */}
            <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/95 border border-portfolio-gold/30 backdrop-blur-sm flex items-center justify-center shadow-md z-20">
              <span className="text-xs font-bold text-[#121110] font-mono">0{i + 1}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center lg:[direction:ltr]">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-portfolio-gold font-bold font-mono px-2.5 py-0.5 rounded-full border border-portfolio-gold/25 bg-portfolio-gold/5">
                {p.category}
              </span>
              <span className="text-[11px] font-mono text-[#6b635b]">{p.date}</span>
            </div>

            <h3 className="text-2xl md:text-4xl font-bold font-display tracking-tight mb-4 text-[#121110]">
              {p.title}
            </h3>

            <p className="text-[#5c544d] text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mb-6 sm:mb-8 font-normal">
              {p.desc}
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
              {p.stack.map((tech) => (
                <span key={tech} className="text-[11px] font-mono px-3 py-1 rounded-full border border-[#e5e0da] bg-[#f8f6f3] text-[#4b453f]">
                  {tech}
                </span>
              ))}
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-4 self-start group/btn cursor-target"
            >
              <div className="w-12 h-12 rounded-full border border-[#e5e0da] bg-white flex items-center justify-center group-hover/btn:bg-[#ea7008] group-hover/btn:border-[#ea7008] transition-all duration-500 shadow-sm">
                <ArrowUpRight size={18} className="text-[#121110] group-hover/btn:text-white transition-colors duration-500" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5c544d] group-hover/btn:text-portfolio-gold transition-colors font-mono">
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
    <div className="bg-[#121110] border border-portfolio-gold/35 hover:border-portfolio-gold/60 shadow-[0_4px_30px_rgba(234,112,8,0.12)] rounded-3xl md:rounded-4xl p-8 sm:p-12 md:p-24 text-white relative overflow-hidden flex flex-col items-center text-center transition-all duration-500 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/40 before:to-transparent">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-portfolio-gold/[0.08] blur-[120px] rounded-full pointer-events-none" />
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display tracking-tight mb-5 md:mb-8 text-white leading-tight">Let's build something extraordinary together.</h2>
        <p className="text-sm sm:text-base md:text-lg text-[#a89f91] mb-8 md:mb-12 leading-relaxed">Whether you need a high-performance web platform built from scratch or want to explore how intelligent automation can transform your operations.</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-9 py-4 uppercase tracking-[0.16em] text-xs sm:text-sm cursor-target rounded-full font-bold text-[#121110] bg-white hover:bg-[#f7f5f2] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_25px_rgba(255,255,255,0.12)] border border-white group"
        >
          Start A Project <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
  <div className="relative overflow-hidden bg-white border border-[#ebe5df] rounded-2xl p-7 mb-6 flex flex-col gap-4 hover:bg-[#fcfbf9] hover:border-portfolio-gold/40 transition-all duration-700 shadow-md shadow-black/[0.03] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/25 before:to-transparent">
    <p className="text-[#2b2723] text-[14px] leading-[1.7] font-normal tracking-wide">"{t.text}"</p>
    <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#f0ece7]">
      <div className="flex items-center gap-3">
        <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover grayscale opacity-80 shrink-0 border border-[#e5e0da]" />
        <div>
          <p className="text-[#121110] font-semibold text-[13px] leading-tight">{t.name}</p>
          <p className="text-[#6b635b] text-[11px] font-mono leading-tight mt-0.5">{t.role}</p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const col1 = testimonials.filter((_, i) => i % 4 === 0);
  const col2 = testimonials.filter((_, i) => i % 4 === 1);
  const col3 = testimonials.filter((_, i) => i % 4 === 2);
  const col4 = testimonials.filter((_, i) => i % 4 === 3);

  return (
    <section className="py-20 sm:py-28 md:py-36 w-screen relative left-1/2 -translate-x-1/2 flex items-center justify-center bg-transparent">

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
          <div className="bg-white/95 backdrop-blur-3xl border border-portfolio-gold/30 rounded-2xl sm:rounded-3xl px-6 py-5 sm:px-9 sm:py-7 flex items-center gap-4 sm:gap-7 shadow-xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/40 before:to-transparent">
            <span className="text-3xl sm:text-5xl font-bold text-[#121110] leading-none tabular-nums tracking-tight font-mono">4.9</span>
            <div className="flex flex-col gap-1.5">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-portfolio-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[#5c544d] text-[11px] font-semibold tracking-wider uppercase font-mono">VERIFIED CLIENT REVIEWS</span>
            </div>
          </div>
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
      <div className="bg-[#121110] border border-portfolio-gold/35 hover:border-portfolio-gold/60 shadow-[0_4px_30px_rgba(234,112,8,0.12)] rounded-3xl md:rounded-4xl p-8 sm:p-14 md:p-20 text-white relative flex flex-col items-center text-center transition-all duration-500 overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/40 before:to-transparent">
        <div className="relative z-10 flex flex-col items-center max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-portfolio-gold text-xs font-semibold uppercase tracking-widest block mb-8 sm:mb-10 text-center"
          >
            Our Mission
          </motion.span>

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
            className="text-[#a89f91] text-sm md:text-base max-w-[560px] leading-relaxed font-normal mb-8 sm:mb-10"
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

      {/* Content sections */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10">
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
