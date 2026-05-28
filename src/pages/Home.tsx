import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react';
import { InteractiveGridPattern } from "../components/magicui/interactive-grid-pattern";
import ServicesGrid from '../components/ServicesGrid';
import { SEO } from '../components/SEO';
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
  { src: "/projects/project1.png", alt: "Nappa Dori" },
  { src: "/projects/project11.png", alt: "Regius" },
  { src: "/projects/project12.png", alt: "Center Spread" },
  { src: "/projects/project9.png", alt: "PDR" },
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

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8"
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

      <div className="w-full relative overflow-hidden mt-8 pb-16 [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)] no-cursor">
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
          {[...carouselImages, ...carouselImages].map((item, i) => (
            <div
              key={i}
              className="w-[400px] md:w-[600px] aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-portfolio-dark/5 shrink-0 bg-white"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CuratedWork = () => (
  <section id="projects" className="py-32">
    {/* Section Header */}
    <div className="flex justify-between items-end mb-24">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-portfolio-gold mb-6 block">PROJECTS</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          A curated collection of <br /> websites designed with care
        </h2>
      </div>
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
          className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center cursor-target ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''
            }`}
        >
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg lg:[direction:ltr]">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            {/* Project number */}
            <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
              <span className="text-xs font-bold text-portfolio-dark">0{i + 1}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center lg:[direction:ltr]">
            <div className="mb-6">
              <span className="text-xxs uppercase tracking-widest text-portfolio-dark/35 font-bold">CLIENT</span>
              <p className="text-sm font-semibold text-portfolio-dark/70 mt-1">{p.client}</p>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 group-hover:text-portfolio-gold transition-colors duration-500">
              {p.title}
            </h3>

            <p className="text-portfolio-dark/55 text-base md:text-lg leading-relaxed max-w-lg mb-10">
              {p.desc}
            </p>

            <Link
              to="/projects"
              className="inline-flex items-center gap-4 self-start group/btn cursor-target"
            >
              <div className="w-14 h-14 rounded-full border-2 border-portfolio-dark/10 flex items-center justify-center group-hover/btn:bg-portfolio-dark group-hover/btn:border-portfolio-dark transition-all duration-500">
                <ArrowUpRight size={20} className="text-portfolio-dark/60 group-hover/btn:text-white transition-colors duration-500" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-portfolio-dark/50 group-hover/btn:text-portfolio-dark transition-colors">
                View Project
              </span>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>


  </section>
);

const CTASection = () => (
  <section className="py-32">
    <div className="bg-portfolio-dark rounded-4xl p-12 md:p-24 text-white relative overflow-hidden flex flex-col items-center text-center">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path d="M0 200C100 150 200 180 300 120C400 60 500 100 600 80C700 60 800 120 1000 100" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      </div>
      <div className="relative z-10 max-w-3xl">
        <span className="text-portfolio-gold font-bold mb-6 text-xs tracking-widest block uppercase">Ready to start?</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Let's build something extraordinary together.</h2>
        <p className="text-lg text-white/60 mb-12">Whether you need a full application built from scratch or just want to explore how we can help your business grow.</p>
        <Link
          to="/contact"
          className="btn-primary inline-flex items-center gap-2 px-10 py-5 uppercase tracking-widest text-sm cursor-target border border-transparent hover:border-portfolio-gold/50"
        >
          Contact Us <ArrowUpRight size={18} />
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
  <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-7 mb-6 flex flex-col gap-4 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-700">
    <p className="text-white/75 text-[14px] leading-[1.7] font-normal tracking-wide">"{t.text}"</p>
    <div className="flex items-center gap-4 pt-3 border-t border-white/[0.06]">
      <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover grayscale opacity-80 shrink-0" />
      <div>
        <p className="text-white/90 text-[12px] font-bold leading-tight">{t.name}</p>
        <p className="text-white/50 text-[11px] font-medium leading-tight mt-0.5">{t.role}</p>
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
    <section className="py-36 w-screen relative left-1/2 -translate-x-1/2 flex items-center justify-center bg-portfolio-dark/95">

      {/* Subconscious ambient warmth — highly transparent and wide */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-portfolio-gold/[0.02] blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Container — subtle card fade at the very edges to hide scrolling clip, no background fade */}
      <div className="relative w-full max-w-[1280px] mx-auto overflow-hidden h-[750px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)]">

        {/* Scroll grid — slightly wider gap for more air */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 px-6 md:px-12 h-full opacity-100">
          {/* Col 1 */}
          <div className="overflow-hidden">
            <div className="animate-scroll-slow flex flex-col pt-12">
              {[...col1, ...col1, ...col1].map((t, i) => <TestimonialCard key={i} t={t} />)}
            </div>
          </div>
          {/* Col 2 */}
          <div className="overflow-hidden">
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

        {/* Rating badge — maintains sharp contrast hierarchy */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="bg-portfolio-dark/80 backdrop-blur-3xl border border-white/[0.08] rounded-3xl px-9 py-7 flex items-center gap-7 shadow-deep">
            <span className="text-5xl font-bold text-white leading-none tabular-nums tracking-tight">4.9</span>
            <div className="flex flex-col gap-1.5">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-portfolio-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/50 text-[11px] font-semibold tracking-wider uppercase">Based on 15+ projects</span>
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
    a: "We build custom websites, web applications, SaaS platforms, and automation systems. From early-stage startups that need an MVP to established businesses modernizing their tech stack — if it involves serious engineering, we're in."
  },
  {
    q: "How long does a typical project take?",
    a: "A landing site or marketing website typically takes 1–2 weeks. A full web application or SaaS product ranges from 4–12 weeks depending on scope. We give you a clear timeline upfront — no surprises."
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We work with clients across India, the US, UK, UAE, and beyond. Our team is fully remote-capable and used to async collaboration across timezones."
  },
  {
    q: "What technologies do you use?",
    a: "Our primary stack is React / Next.js on the frontend, Node.js / Python on the backend, PostgreSQL and MongoDB for databases, and AWS / Vercel for infrastructure. We choose the right tool for each job — not the trendy one."
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Absolutely. We've stepped into messy codebases before and cleaned them up. We'll audit the existing code first, flag risks, and propose a clear path forward before touching anything."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  return (
    <section className="py-24">
      <div className="bg-portfolio-dark rounded-4xl p-8 md:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col justify-start pt-2">
          <span className="inline-block text-xxs font-bold uppercase tracking-widest text-white/40 border border-white/10 rounded-full px-3 py-1 mb-8 w-fit">
            FAQs
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Frequently asked <br />
            <span className="text-portfolio-gold">questions</span>
          </h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Everything you need to know before we start building together.
          </p>
        </div>

        {/* Right Column — Accordion */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.05] transition-colors duration-300 rounded-2xl p-6 md:p-7">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 text-left group cursor-target"
              >
                <span className={`text-sm md:text-base font-semibold leading-snug transition-colors duration-300 ${openIndex === i ? 'text-white' : 'text-white/60 group-hover:text-white/90'}`}>
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === i ? 'border-portfolio-gold bg-portfolio-gold/10 rotate-45' : 'border-white/20 group-hover:border-white/40'}`}>
                  <span className={`text-lg leading-none font-light transition-colors duration-300 ${openIndex === i ? 'text-portfolio-gold' : 'text-white/50'}`}>+</span>
                </div>
              </button>

              {/* Answer — animated open/close */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.21,0.45,0.32,0.9)] ${openIndex === i ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-white/45 text-sm leading-relaxed pr-12">
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
    <section className="w-screen relative left-1/2 -translate-x-1/2 bg-portfolio-dark py-20 md:py-28 flex flex-col items-center text-center px-6">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-portfolio-gold/[0.05] blur-[140px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xxs font-bold uppercase tracking-widest text-white/40 mb-10"
        >
          Our Mission
        </motion.div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-[900px] mb-10 flex flex-wrap justify-center gap-x-[0.28em] gap-y-[0.08em]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1 + i * 0.07,
                duration: 0.55,
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
          transition={{ delay: 0.1 + words.length * 0.07 + 0.1, duration: 0.6 }}
          className="text-white/40 text-[14px] md:text-[16px] max-w-[520px] leading-[1.75] font-medium mb-10"
        >
          We solve complex technical problems through thoughtful engineering, modern software
          architecture, and intelligent automation. Building technology that scales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + words.length * 0.07 + 0.25, duration: 0.5 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-portfolio-gold font-semibold text-[15px] hover:opacity-60 transition-opacity cursor-target group"
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
    </section>
  );
};

const Home = () => {
  return (
    <>
      <SEO />
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <Hero />
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
