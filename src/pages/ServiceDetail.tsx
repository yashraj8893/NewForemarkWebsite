import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Terminal,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { SEO } from '../components/SEO';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
};

interface ServiceDetailProps {
    slug?: string;
}

const ServiceDetail = ({ slug: propSlug }: ServiceDetailProps) => {
    const params = useParams<{ slug: string }>();
    const activeSlug = propSlug || params.slug;

    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    if (!activeSlug || !servicesData[activeSlug]) {
        return <Navigate to="/services" replace />;
    }

    const service = servicesData[activeSlug];
    const Visual = service.animation;

    // Get other services (deduplicated by primary slug) for bottom switcher
    const otherServices = Array.from(
        new Map(Object.values(servicesData).map((s) => [s.slug, s])).values()
    ).filter((s) => s.slug !== service.slug);

    return (
        <>
            <SEO title={service.seo.title} description={service.seo.description} />
            <main className="relative w-full overflow-hidden bg-portfolio-bg selection:bg-portfolio-gold/30">
                {/* ─── Top Breadcrumb Navigation ────────────────────────────── */}
                <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pt-8 sm:pt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center pb-4 border-b border-portfolio-dark/10"
                    >
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-portfolio-muted">
                            <Link to="/services" className="hover:text-portfolio-dark flex items-center gap-1.5 transition-colors cursor-target">
                                <ArrowLeft size={14} /> Services
                            </Link>
                            <span className="text-portfolio-muted/40">/</span>
                            <span className="text-portfolio-gold">{service.title}</span>
                        </div>
                    </motion.div>
                </div>

                {/* ─── Hero Section ────────────────────────────────────────── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pt-8 sm:pt-12 pb-16 sm:pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                        {/* Hero Text */}
                        <div className="lg:col-span-6 flex flex-col">
                            {/* Brand Orange Badge with Pulsing Node */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2.5 mb-4"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-portfolio-gold opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-portfolio-gold" />
                                </span>
                                <span className="text-xs font-bold uppercase tracking-widest text-portfolio-gold">
                                    {service.heroTag}
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-portfolio-dark mb-4 leading-[1.08]"
                            >
                                {service.title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                                className="text-lg sm:text-xl font-medium text-portfolio-dark/80 mb-4 leading-snug"
                            >
                                {service.tagline}
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-base text-portfolio-muted leading-relaxed mb-8 max-w-xl"
                            >
                                {service.overview}
                            </motion.p>

                            {/* Dual CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                                className="flex items-center gap-4 flex-wrap"
                            >
                                <Link
                                    to={`/contact?service=${service.slug}`}
                                    className="btn-primary inline-flex items-center gap-2 px-8 py-4 cursor-target border border-transparent hover:border-portfolio-gold transition-colors shadow-lg hover:shadow-xl font-bold"
                                >
                                    Start a Project <ArrowRight size={16} />
                                </Link>
                                <Link
                                    to="/projects"
                                    className="btn-ghost inline-flex items-center gap-2 px-8 py-4 cursor-target hover:bg-portfolio-dark/5 transition-all font-semibold"
                                >
                                    Explore Portfolio
                                </Link>
                            </motion.div>
                        </div>

                        {/* Interactive Hero Visual Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="lg:col-span-6 relative"
                        >
                            <div className="relative w-full aspect-[4/3] rounded-[2rem] bg-[#0c0c0e] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center isolate group cursor-target">
                                {/* Subtle internal glow & background grid */}
                                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-gold/10 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                                <div className="w-full h-full flex items-center justify-center scale-95 sm:scale-100 p-4">
                                    <Visual />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ─── Metrics / SLAs ──────────────────────────────────────── */}
                <section className="bg-portfolio-dark text-white py-14 sm:py-18 relative z-10 border-y border-white/10">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                            {service.metrics.map((metric, i) => (
                                <motion.div
                                    key={metric.label}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={i}
                                    className="flex flex-col"
                                >
                                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-portfolio-gold tracking-tight mb-1 font-mono">
                                        {metric.value}
                                    </span>
                                    <span className="text-sm sm:text-base font-bold text-white mb-1">{metric.label}</span>
                                    <span className="text-xs text-white/50 leading-relaxed">{metric.description}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── How Foremark Does It (Philosophy / Standards) ────────── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 py-20 sm:py-32 relative z-10">
                    <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
                        <span className="section-label text-portfolio-gold">Engineering Discipline</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-portfolio-dark mt-2 mb-4 leading-tight">
                            {service.howWeDoItTitle}
                        </h2>
                        <p className="text-base sm:text-lg text-portfolio-muted leading-relaxed">
                            {service.howWeDoItSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {service.philosophy.map((item, i) => (
                            <motion.div
                                key={item.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }}
                                custom={i}
                                className="p-8 sm:p-9 rounded-3xl bg-white border border-portfolio-dark/5 hover:border-portfolio-gold/40 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group cursor-target flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-portfolio-gold/10 border border-portfolio-gold/20 flex items-center justify-center mb-6 text-portfolio-gold group-hover:scale-110 group-hover:bg-portfolio-gold group-hover:text-white transition-all duration-300">
                                        <item.icon size={22} />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-portfolio-dark mb-3 tracking-tight group-hover:text-portfolio-gold transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-portfolio-muted text-sm sm:text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ─── Key Deliverables & What We Build ─────────────────────── */}
                <section className="bg-portfolio-white/60 border-y border-portfolio-dark/5 py-20 sm:py-32 relative z-10">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16">
                        <div className="text-center mb-16 max-w-2xl mx-auto">
                            <span className="section-label text-portfolio-gold">Deliverables</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-dark mt-2 leading-[1.15]">
                                What We Build & Deliver
                            </h2>
                            <p className="text-portfolio-muted text-sm sm:text-base mt-4 leading-relaxed">
                                Production-grade assets, scalable architectures, and fully documented systems engineered for your business.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {service.deliverables.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-60px' }}
                                    custom={i}
                                    className="p-8 rounded-3xl bg-white border border-portfolio-dark/5 hover:border-portfolio-gold/40 hover:-translate-y-1 transition-all duration-300 group cursor-target shadow-sm hover:shadow-md flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="w-12 h-12 rounded-2xl bg-[#0d0d0d] flex items-center justify-center mb-6 text-portfolio-gold group-hover:bg-portfolio-gold group-hover:text-white transition-colors duration-300">
                                            <item.icon size={22} />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-portfolio-dark mb-2.5 tracking-tight group-hover:text-portfolio-gold transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-portfolio-muted text-sm leading-relaxed mb-6">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-portfolio-gold pt-4 border-t border-portfolio-dark/5">
                                        <CheckCircle2 size={14} /> Production Ready
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Technology Stack ─────────────────────────────────────── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 py-20 sm:py-28 relative z-10">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <span className="section-label text-portfolio-gold">Tooling & Infrastructure</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-dark mt-2 leading-[1.15]">
                            Technology Stack
                        </h2>
                        <p className="text-portfolio-muted text-sm sm:text-base mt-3 leading-relaxed">
                            We select modern, battle-tested technologies that eliminate vendor lock-in and optimize for developer velocity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.techStack.map((category, i) => (
                            <motion.div
                                key={category.category}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                className="p-6 rounded-2xl bg-white border border-portfolio-dark/5 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <h3 className="text-xs font-bold uppercase tracking-widest text-portfolio-gold mb-4 flex items-center gap-2">
                                    <Terminal size={14} /> {category.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 rounded-lg bg-portfolio-bg text-portfolio-dark text-xs font-semibold border border-portfolio-dark/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ─── Delivery Process (Original Central Timeline) ─────────── */}
                <section className="bg-portfolio-white/60 border-y border-portfolio-dark/5 py-24 sm:py-32 relative z-10">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16">
                        <div className="text-center mb-20 max-w-2xl mx-auto">
                            <span className="section-label text-portfolio-gold">Step-by-Step</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-dark mt-2 leading-[1.15]">
                                How We Deliver
                            </h2>
                            <p className="text-portfolio-muted text-sm sm:text-base mt-3 leading-relaxed">
                                A transparent, phased lifecycle with constant feedback loops and zero surprises.
                            </p>
                        </div>

                        <div className="relative max-w-4xl mx-auto">
                            {/* Central line */}
                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-portfolio-dark/5 via-portfolio-gold/40 to-portfolio-dark/5 pointer-events-none" />

                            <div className="flex flex-col gap-10 md:gap-14">
                                {service.processSteps.map((step, i) => {
                                    const isEven = i % 2 === 0;
                                    return (
                                        <motion.div
                                            key={step.step}
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, margin: '-60px' }}
                                            custom={i}
                                            className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                                                isEven ? 'md:flex-row-reverse' : ''
                                            }`}
                                        >
                                            {/* Pulse indicator */}
                                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-portfolio-gold border-4 border-portfolio-bg z-20 shadow-glow" />

                                            {/* Card */}
                                            <div className={`w-full md:w-[46%] pl-14 md:pl-0 ${isEven ? 'md:pr-6' : 'md:pl-6'}`}>
                                                <div className="bg-white border border-portfolio-dark/5 p-7 rounded-3xl shadow-sm hover:shadow-md hover:border-portfolio-gold/30 transition-all duration-300 group cursor-target">
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-portfolio-gold mb-1 block">
                                                        Phase {step.step}
                                                    </span>
                                                    <h3 className="text-lg sm:text-xl font-bold text-portfolio-dark mb-2">
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-portfolio-muted text-sm leading-relaxed">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Spacer */}
                                            <div className="hidden md:block w-[46%]" />
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── Frequently Asked Questions (Signature Dark Container) ── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 py-20 sm:py-28 relative z-10">
                    <div className="bg-[#1a1a1a] rounded-3xl md:rounded-4xl p-5 sm:p-8 md:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                        {/* Left Column */}
                        <div className="lg:col-span-4 flex flex-col justify-start pt-2">
                            <span className="text-xs font-bold tracking-widest uppercase text-portfolio-gold mb-4 block">
                                FAQs
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 md:mb-6">
                                Frequently asked <br />
                                <span className="text-portfolio-gold">questions</span>
                            </h2>
                            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                                Everything you need to know before we start building together.
                            </p>
                        </div>

                        {/* Right Column — Accordion */}
                        <div className="lg:col-span-8 flex flex-col gap-3 sm:gap-4">
                            {service.faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className="bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.05] transition-colors duration-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7"
                                >
                                    <button
                                        onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                                        className="w-full flex items-center justify-between gap-4 sm:gap-6 text-left group cursor-target"
                                    >
                                        <span
                                            className={`text-sm md:text-base font-semibold leading-snug transition-colors duration-300 ${
                                                openFaqIndex === i ? 'text-white' : 'text-white/60 group-hover:text-white/90'
                                            }`}
                                        >
                                            {faq.question}
                                        </span>
                                        <div
                                            className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                                                openFaqIndex === i
                                                    ? 'border-portfolio-gold bg-portfolio-gold/10 rotate-45'
                                                    : 'border-white/20 group-hover:border-white/40'
                                            }`}
                                        >
                                            <span
                                                className={`text-lg leading-none font-light transition-colors duration-300 ${
                                                    openFaqIndex === i ? 'text-portfolio-gold' : 'text-white/50'
                                                }`}
                                            >
                                                +
                                            </span>
                                        </div>
                                    </button>

                                    {/* Answer — animated open/close */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.21,0.45,0.32,0.9)] ${
                                            openFaqIndex === i ? 'max-h-[500px] opacity-100 mt-3 sm:mt-4' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <p className="text-white/45 text-xs sm:text-sm leading-relaxed pr-4 sm:pr-12">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Explore Other Services ───────────────────────────────── */}
                <section className="bg-portfolio-white/40 border-t border-portfolio-dark/5 py-16 sm:py-24 relative z-10">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16">
                        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10">
                            <div>
                                <span className="section-label text-portfolio-gold">Expand Your Capabilities</span>
                                <h2 className="text-2xl sm:text-3xl font-bold text-portfolio-dark mt-1">
                                    Explore Other Services
                                </h2>
                            </div>
                            <Link
                                to="/services"
                                className="text-xs font-bold uppercase tracking-widest text-portfolio-dark hover:text-portfolio-gold flex items-center gap-1 mt-4 sm:mt-0 transition-colors cursor-target"
                            >
                                View all services <ArrowRight size={14} />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {otherServices.map((other) => (
                                <Link
                                    key={other.slug}
                                    to={`/services/${other.slug}`}
                                    className="p-8 rounded-3xl bg-white border border-portfolio-dark/5 hover:border-portfolio-gold/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between cursor-target"
                                >
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-portfolio-gold/10 border border-portfolio-gold/20 flex items-center justify-center text-portfolio-gold shrink-0">
                                                <other.icon size={18} />
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-widest text-portfolio-gold">
                                                {other.heroTag}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-portfolio-dark mb-2 group-hover:text-portfolio-gold transition-colors">
                                            {other.title}
                                        </h3>
                                        <p className="text-portfolio-muted text-sm leading-relaxed mb-6 line-clamp-3">
                                            {other.shortDesc}
                                        </p>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-portfolio-dark group-hover:text-portfolio-gold transition-colors pt-4 border-t border-portfolio-dark/5">
                                        Explore details <ArrowRight size={14} />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Bottom CTA ───────────────────────────────────────────── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pb-20 sm:pb-28 relative z-10">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="bg-[#1a1a1a] border border-white/[0.08] rounded-3xl md:rounded-4xl p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl"
                    >
                        {/* Glow blur background */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-portfolio-gold/15 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="text-portfolio-gold text-xs font-bold uppercase tracking-widest block mb-4">
                                Start Your Project
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                                Ready to build your <br />
                                <span className="text-portfolio-gold">{service.title}?</span>
                            </h2>
                            <p className="text-white/60 text-sm sm:text-base mb-10 leading-relaxed max-w-lg mx-auto">
                                Let's discuss your scope, timeline, and architectural requirements. No commitment, just an honest technical conversation.
                            </p>

                            <div className="flex items-center justify-center gap-4 flex-wrap">
                                <Link
                                    to={`/contact?service=${service.slug}`}
                                    className="btn-primary inline-flex items-center gap-2 px-8 py-4 hover:scale-105 transition-all duration-300 cursor-target font-bold"
                                >
                                    Get a quote <ArrowRight size={16} />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full px-8 py-4 hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-target"
                                >
                                    Book consultation
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>
        </>
    );
};

export default ServiceDetail;
