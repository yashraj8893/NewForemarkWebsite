import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    Code2,
    Server,
    Workflow,
    Cpu,
    ArrowRight,
    ChevronDown,
    ShieldCheck,
    Users,
    Sparkles,
    Clock,
    HeartHandshake,
    Search,
    PenTool,
    LifeBuoy,
    Rocket,
} from 'lucide-react';
import { WebsiteAnimation, WebAppAnimation, ServerAnimation, AutomationAnimation } from '../components/ServicesGrid';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
};

const services = [
    {
        title: 'Website Development',
        description:
            "We design and build bespoke, high-performance websites that capture your brand's essence and drive meaningful user action. Our sites are engineered for speed, responsiveness, and SEO optimization to convert visitors into customers.",
        tag: 'Core service',
        icon: Code2,
        animation: WebsiteAnimation,
    },
    {
        title: 'Web App / Software Development',
        description:
            'From internal tools to customer-facing platforms, we design and engineer full-stack software that streamlines operations and scales with demand. Our team handles everything from system architecture to deployment, so your product is fast, secure, and built to last.',
        tag: 'Most requested',
        icon: Cpu,
        animation: WebAppAnimation,
    },
    {
        title: 'Web Servers & Hosting',
        description:
            "We deploy and manage secure, high-availability cloud infrastructure and managed hosting architectures tailored to your application's needs. With robust security monitoring, scalable designs, and reliable backups, we ensure your platforms remain online and performant under load.",
        tag: 'Reliable & secure',
        icon: Server,
        animation: ServerAnimation,
    },
    {
        title: 'Business Automation',
        description:
            'We audit your existing workflows and identify where manual, repetitive work is costing you time. Then we build intelligent automations — integrating your tools and systems — so your team can focus on the work that actually needs a human.',
        tag: 'High impact',
        icon: Workflow,
        animation: AutomationAnimation,
    },
];

const whyChooseUs = [
    {
        icon: ShieldCheck,
        title: 'Technical Excellence',
        description: 'Every build follows rigorous engineering standards, from architecture to code review.',
    },
    {
        icon: Users,
        title: 'Dedicated Team',
        description: 'A senior team stays with your project end-to-end — no hand-offs, no lost context.',
    },
    {
        icon: Sparkles,
        title: 'Tailored Solutions',
        description: 'We design around your workflow, not the other way around. Nothing off-the-shelf.',
    },
    {
        icon: Rocket,
        title: 'Innovation-Led',
        description: 'We bring modern tooling and automation into every engagement, not just the trendy ones.',
    },
    {
        icon: Clock,
        title: 'Reliable Delivery',
        description: 'Clear timelines, honest updates, and milestones we actually hit.',
    },
    {
        icon: HeartHandshake,
        title: 'Long-Term Partnership',
        description: 'We stay on after launch — supporting, maintaining, and scaling what we build together.',
    },
];

const process = [
    {
        icon: Search,
        title: 'Discovery',
        description: 'We start by understanding your business, users, and goals before writing a single line of code.',
    },
    {
        icon: PenTool,
        title: 'Planning & Architecture',
        description: 'We map the technical approach, timeline, and system design so nothing is left to guesswork.',
    },
    {
        icon: Code2,
        title: 'Design & Development',
        description: 'Our team builds in focused sprints, with regular check-ins so you always know where things stand.',
    },
    {
        icon: ShieldCheck,
        title: 'Testing & QA',
        description: 'Every feature is tested across devices and edge cases before it ever reaches your users.',
    },
    {
        icon: LifeBuoy,
        title: 'Launch & Support',
        description: 'We deploy, monitor, and stay on hand for ongoing support as your product grows.',
    },
];

export const testimonials = [
    {
        name: 'Rohan Mehta',
        role: 'Founder, Northbridge Logistics',
        quote:
            'Foremark rebuilt our internal dispatch platform from the ground up. What used to take our team hours now happens in minutes.',
    },
    {
        name: 'Ayesha Kapoor',
        role: 'COO, Larkspur Retail Group',
        quote:
            'The website they delivered didn\u2019t just look premium — it converted. Our inquiry rate doubled within the first month.',
    },
    {
        name: 'Daniel Fernandes',
        role: 'CTO, Vantage Health Systems',
        quote:
            'Clear communication, solid architecture decisions, and a team that actually understood our constraints. Rare combination.',
    },
];

export const faqs = [
    {
        question: 'How long does a typical website or web app project take?',
        answer:
            'Most marketing websites take 3–5 weeks from kickoff to launch. Web applications vary more depending on scope, typically ranging from 6–16 weeks. We\u2019ll give you a concrete timeline after the discovery phase.',
    },
    {
        question: 'Do you offer support after the project launches?',
        answer:
            'Yes. Every engagement includes a post-launch support window, and most clients continue with us on an ongoing maintenance or retainer basis for updates, monitoring, and improvements.',
    },
    {
        question: 'What technologies do you work with?',
        answer:
            'We work primarily with modern JavaScript/TypeScript stacks — React, Next.js, and Node.js — alongside cloud infrastructure like AWS and Vercel. For automation, we integrate with the tools you already use.',
    },
    {
        question: 'Can you help scale or improve an existing product?',
        answer:
            'Absolutely. We regularly step into existing codebases to audit performance, fix technical debt, and extend functionality — you don\u2019t need to start from scratch.',
    },
    {
        question: 'How do you price a project?',
        answer:
            'Pricing depends on scope and complexity. After an initial consultation, we provide a fixed-scope quote or a retainer structure, whichever fits your engagement best.',
    },
];

export const FaqItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => (
    <div className="border-b border-portfolio-dark/10 py-6">
        <button
            onClick={onClick}
            className="w-full flex items-center justify-between text-left gap-4 cursor-target"
        >
            <span className="text-base sm:text-lg font-bold text-portfolio-dark">{question}</span>
            <ChevronDown
                size={20}
                className={`flex-shrink-0 text-portfolio-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
        </button>
        <motion.div
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
        >
            <p className="text-portfolio-muted text-sm sm:text-base leading-relaxed pt-4 pr-8">{answer}</p>
        </motion.div>
    </div>
);

export const RocketIcon = Rocket;

const ServicesPage = () => {
    return (
        <main className="relative w-full overflow-hidden bg-portfolio-bg">
            {/* ─── Hero ─────────────────────────────────────────────── */}
            <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pt-12 sm:pt-16 pb-20 sm:pb-32">
                <div className="flex flex-col mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-portfolio-gold font-bold mb-3 text-xs tracking-widest uppercase block"
                    >
                        What we do
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6"
                    >
                        Services built for <br /> modern businesses
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base text-portfolio-muted max-w-xl leading-relaxed"
                    >
                        From concept to code, we design, build, and maintain the digital systems that help
                        companies run better — websites, software, infrastructure, and automation.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-4 flex-wrap mt-8"
                    >
                        <Link to="/contact" className="btn-primary flex items-center gap-2 px-10 cursor-target border border-transparent hover:border-portfolio-gold transition-colors">
                            Start a project
                        </Link>
                        <Link to="/projects" className="btn-ghost flex items-center gap-2 px-10 cursor-target hover:bg-portfolio-dark/5 transition-all">
                            View our work
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-6xl"
                    >
                        {[
                            { icon: Rocket, title: 'Launch-ready builds', text: 'Not just prototypes — production-grade software .' },
                            { icon: ShieldCheck, title: 'Senior engineers', text: 'Every project is led by experienced hands, end to end.' },
                            { icon: Clock, title: 'Clear timelines', text: 'Honest scopes and dates you can actually plan around.' },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="p-4 flex items-center gap-4 rounded-2xl border border-portfolio-dark/10 bg-white/60 hover:bg-white hover:border-portfolio-gold/30 hover:-translate-y-1 transition-all duration-300 cursor-target"
                            >
                                <div className="w-11 h-11 rounded-xl bg-portfolio-gold/10 border border-portfolio-gold/20 flex items-center justify-center shrink-0">
                                    <item.icon size={18} className="text-portfolio-gold" />
                                </div>
                                <div>
                                    <p className="text-portfolio-dark text-sm font-bold mb-1">{item.title}</p>
                                    <p className="text-portfolio-muted text-xs leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── Our Services ─────────────────────────────────────── */}
            <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pb-28 sm:pb-36 relative z-10">
                <div className="text-center mb-16 sm:mb-20">
                    <span className="section-label text-portfolio-gold">Our services</span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-portfolio-dark max-w-3xl mx-auto mt-2 leading-[1.1]">
                        Everything you need to build and run modern software
                    </h2>
                </div>

                <div className="flex flex-col gap-10 max-w-[1150px] mx-auto">
                    {services.map((service, i) => {
                        const isEven = i % 2 === 0;
                        const Visual = service.animation;
                        return (
                            <motion.div
                                key={service.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-80px' }}
                                custom={i}
                                className="group relative bg-[#0e0e10]/95 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-deep cursor-target"
                            >
                                {/* Subtle inner glow gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-gold/5 via-transparent to-transparent pointer-events-none" />

                                <div className={`flex flex-col lg:flex-row items-stretch ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                                    {/* Text Content Area */}
                                    <div className="flex-1 lg:flex-[1.2] p-8 sm:p-12 md:p-16 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-10 h-10 rounded-xl bg-portfolio-gold/10 border border-portfolio-gold/30 flex items-center justify-center text-portfolio-gold shrink-0">
                                                <service.icon size={18} />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-portfolio-gold opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-portfolio-gold"></span>
                                                </span>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-portfolio-gold">
                                                    {service.tag}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
                                            {service.title}
                                        </h3>

                                        <p className="text-white/60 text-base leading-relaxed mb-10 max-w-xl">
                                            {service.description}
                                        </p>

                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center gap-2 bg-white text-portfolio-dark text-sm font-bold uppercase tracking-widest rounded-full px-8 py-4 w-max hover:scale-105 transition-transform duration-300 shadow-md"
                                        >
                                            Get a quote <ArrowRight size={16} />
                                        </Link>
                                    </div>

                                    {/* Live Animation side (45% split width) */}
                                    <div className="flex-1 lg:flex-[0.8] bg-[#070708] border-t lg:border-t-0 lg:border-l border-white/5 relative flex items-center justify-center p-6 min-h-[300px] md:min-h-[380px] overflow-hidden">
                                        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                                        <div className="w-full h-full flex items-center justify-center scale-90 sm:scale-100">
                                            <Visual />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ─── Why Choose Us ────────────────────────────────────── */}
            <section className="bg-portfolio-white/60 border-y border-portfolio-dark/5 relative z-10">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 py-24 sm:py-32">
                    <div className="text-center mb-16">
                        <span className="section-label text-portfolio-gold">Why choose us</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-dark max-w-2xl mx-auto mt-2 leading-[1.15]">
                            Engineering you can actually depend on
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {whyChooseUs.map((item, i) => (
                            <motion.div
                                key={item.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }}
                                custom={i}
                                className="p-8 rounded-3xl bg-white border border-portfolio-dark/5 hover:border-portfolio-gold/30 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group cursor-target"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-portfolio-gold/5 border border-portfolio-gold/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-portfolio-gold/10">
                                    <item.icon size={22} className="text-portfolio-gold" />
                                </div>
                                <h3 className="text-xl font-bold text-portfolio-dark mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-portfolio-muted text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Our Process ──────────────────────────────────────── */}
            <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 py-24 sm:py-32 relative z-10">
                <div className="text-center mb-20">
                    <span className="section-label">Our process</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-dark max-w-2xl mx-auto mt-2 leading-[1.15]">
                        How an engagement with us works
                    </h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Connecting Timeline Line */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-portfolio-dark/5 via-portfolio-gold/35 to-portfolio-dark/5 pointer-events-none" />

                    <div className="flex flex-col gap-12 md:gap-16">
                        {process.map((step, i) => {
                            const isEven = i % 2 === 0;
                            return (
                                <motion.div
                                    key={step.title}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-60px' }}
                                    custom={i}
                                    className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''
                                        }`}
                                >
                                    {/* timeline pulse indicator */}
                                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-portfolio-gold border-4 border-portfolio-bg z-20 shadow-glow" />

                                    {/* timeline card */}
                                    <div className={`w-full md:w-[45%] pl-14 md:pl-0 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                                        <div className="bg-white border border-portfolio-dark/5 p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-portfolio-gold/20 transition-all duration-300 group cursor-target">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-2xl bg-portfolio-dark flex items-center justify-center shrink-0">
                                                    <step.icon size={18} className="text-portfolio-gold" />
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-portfolio-gold">
                                                        Step 0{i + 1}
                                                    </span>
                                                    <h3 className="text-xl font-bold text-portfolio-dark mt-0.5">{step.title}</h3>
                                                </div>
                                            </div>
                                            <p className="text-portfolio-muted text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>

                                    {/* Spacer for layout spacing */}
                                    <div className="hidden md:block w-[45%]" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── Final CTA ─────────────────────────────────────────── */}
            <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pb-24 sm:pb-32 relative z-10">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="relative bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] px-8 sm:px-16 py-20 sm:py-28 text-center overflow-hidden shadow-deep"
                >
                    {/* Enhanced background glow layers */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-portfolio-gold/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-portfolio-blue/5 rounded-full blur-[80px] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-none">
                            Ready to build something that lasts?
                        </h2>

                        <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                            Tell us about your project and we&rsquo;ll get back to you with next steps — no
                            obligation, just a conversation.
                        </p>

                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-portfolio-gold text-white text-sm font-bold uppercase tracking-widest rounded-full px-8 py-4 hover:scale-105 hover:shadow-[0_0_30px_rgba(232,120,17,0.4)] transition-all duration-300 cursor-target"
                            >
                                Request a quote <ArrowRight size={16} />
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-bold uppercase tracking-widest rounded-full px-8 py-4 hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-target"
                            >
                                Book a consultation
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default ServicesPage;