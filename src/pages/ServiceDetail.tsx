import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    ArrowRight,
    ArrowLeft,
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
                                <ArrowLeft size={14} /> All Services
                            </Link>
                            <span className="text-portfolio-muted/40">/</span>
                            <span className="text-portfolio-dark font-bold">{service.title}</span>
                        </div>
                    </motion.div>
                </div>

                {/* ─── Hero Section ────────────────────────────────────────── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pt-8 sm:pt-14 pb-16 sm:pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                        {/* Hero Text */}
                        <div className="lg:col-span-7 flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-3 mb-4"
                            >
                                <span className="inline-block text-xxs font-bold uppercase tracking-widest text-portfolio-dark/70 border border-portfolio-dark/15 rounded-full px-3 py-1">
                                    {service.heroTag}
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-portfolio-dark mb-5 leading-[1.08]"
                            >
                                {service.title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                                className="text-lg sm:text-xl font-medium text-portfolio-dark/90 mb-5 leading-snug"
                            >
                                {service.tagline}
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-base text-portfolio-muted leading-relaxed mb-8 max-w-2xl"
                            >
                                {service.overview}
                            </motion.p>

                            {/* Clean Editorial Metadata Line */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.22 }}
                                className="flex flex-wrap items-center gap-x-6 gap-y-2 py-3.5 border-y border-portfolio-dark/10 text-xs text-portfolio-dark mb-8"
                            >
                                <span className="flex items-center gap-2 font-semibold">
                                    <span className="w-1.5 h-1.5 rounded-full bg-portfolio-gold" /> Sub-Second Core Web Vitals
                                </span>
                                <span className="flex items-center gap-2 font-semibold">
                                    <span className="w-1.5 h-1.5 rounded-full bg-portfolio-gold" /> 100% Code & IP Transfer
                                </span>
                                <span className="flex items-center gap-2 font-semibold">
                                    <span className="w-1.5 h-1.5 rounded-full bg-portfolio-gold" /> 30-Day Dedicated Hypercare
                                </span>
                            </motion.div>

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
                            className="lg:col-span-5 relative"
                        >
                            <div className="relative w-full aspect-[4/3] rounded-3xl md:rounded-4xl bg-[#1a1a1a] border border-white/[0.08] overflow-hidden shadow-2xl flex flex-col justify-between isolate group cursor-target">
                                {/* Browser Frame Header */}
                                <div className="h-10 px-5 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between shrink-0 z-20">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-portfolio-gold animate-pulse" />
                                        <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">
                                            LIVE SYSTEM PREVIEW
                                        </span>
                                    </div>
                                </div>

                                {/* Main Simulation Visual */}
                                <div className="flex-1 w-full flex items-center justify-center p-4 relative">
                                    <div className="w-full h-full flex items-center justify-center scale-95 sm:scale-100">
                                        <Visual />
                                    </div>
                                </div>

                                {/* Frame Footer */}
                                <div className="h-9 px-5 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between shrink-0 z-20">
                                    <span className="font-mono text-[9px] text-white/40 tracking-wider">
                                        TYPESCRIPT STRICT
                                    </span>
                                    <span className="font-mono text-[9px] text-portfolio-gold tracking-wider">
                                        200 OK • VERIFIED
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ─── Metrics / SLAs Bento ─────────────────────────────────── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 mb-20 sm:mb-28 relative z-10">
                    <div className="bg-[#1a1a1a] rounded-3xl md:rounded-4xl p-8 sm:p-12 md:p-14 border border-white/[0.08] shadow-2xl relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                            {service.metrics.map((metric, i) => (
                                <motion.div
                                    key={metric.label}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={i}
                                    className="flex flex-col justify-between"
                                >
                                    <div>
                                        <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-portfolio-gold tracking-tight mb-2 block font-mono">
                                            {metric.value}
                                        </span>
                                        <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
                                            {metric.label}
                                        </h3>
                                    </div>
                                    <p className="text-xs text-white/50 leading-relaxed">
                                        {metric.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Architectural Principles (Refined Editorial Layout) ───── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 py-16 sm:py-24 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-portfolio-dark/10">
                        <div className="max-w-2xl">
                            <span className="section-label text-portfolio-gold">Architectural Standards</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-portfolio-dark mt-2 leading-tight">
                                {service.howWeDoItTitle}
                            </h2>
                        </div>
                        <p className="text-base text-portfolio-muted leading-relaxed max-w-md">
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
                                className="p-8 sm:p-9 rounded-3xl bg-white border border-portfolio-dark/10 hover:border-portfolio-gold/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group cursor-target flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-portfolio-dark/5">
                                        <span className="font-mono text-xs font-bold text-portfolio-gold tracking-widest uppercase">
                                            Standard // 0{i + 1}
                                        </span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-portfolio-dark/20 group-hover:bg-portfolio-gold transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-portfolio-dark mb-3 tracking-tight group-hover:text-portfolio-gold transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-portfolio-muted text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ─── Production Deliverables Matrix (Refined Dark Box) ─────── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 py-16 sm:py-24 relative z-10">
                    <div className="bg-[#1a1a1a] rounded-3xl md:rounded-4xl p-8 sm:p-14 lg:p-16 border border-white/[0.08] shadow-2xl">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-white/[0.08]">
                            <div>
                                <span className="inline-block text-xxs font-bold uppercase tracking-widest text-white/40 border border-white/10 rounded-full px-3 py-1 mb-4">
                                    Deliverables Scope
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                                    What We Build & Deliver
                                </h2>
                            </div>
                            <p className="text-white/50 text-sm sm:text-base max-w-md leading-relaxed">
                                Production-ready architectures, fully typed codebases, and complete intellectual property ownership.
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
                                    className="p-8 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300 group cursor-target flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                                            <span className="font-mono text-xs font-bold text-portfolio-gold tracking-widest">
                                                DELIVERABLE 0{i + 1}
                                            </span>
                                            <span className="text-[10px] uppercase font-mono text-white/40 tracking-wider">
                                                ENTERPRISE
                                            </span>
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-portfolio-gold transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/50 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Technology Stack Matrix ──────────────────────────────── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 py-16 sm:py-24 relative z-10">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <span className="section-label text-portfolio-gold">Engineering Ecosystem</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-dark mt-2 leading-[1.15]">
                            Technology & Tooling Stack
                        </h2>
                        <p className="text-portfolio-muted text-sm sm:text-base mt-3 leading-relaxed">
                            Battle-tested, modern technologies selected for performance, type safety, and seamless maintenance.
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
                                className="p-7 rounded-3xl bg-white border border-portfolio-dark/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-portfolio-dark/5">
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-portfolio-dark">
                                            {category.category}
                                        </h3>
                                        <span className="w-1.5 h-1.5 rounded-full bg-portfolio-gold" />
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1.5 rounded-xl bg-portfolio-bg text-portfolio-dark text-xs font-semibold border border-portfolio-dark/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ─── Phased Delivery Roadmap ──────────────────────────────── */}
                <section className="bg-portfolio-white/60 border-y border-portfolio-dark/5 py-24 sm:py-32 relative z-10">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16">
                        <div className="text-center mb-20 max-w-2xl mx-auto">
                            <span className="section-label text-portfolio-gold">Step-by-Step Execution</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-dark mt-2 leading-[1.15]">
                                How We Deliver
                            </h2>
                            <p className="text-portfolio-muted text-sm sm:text-base mt-3 leading-relaxed">
                                A transparent, sprint-based delivery model with continuous staging builds, code reviews, and zero guesswork.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
                            {service.processSteps.map((step, i) => (
                                <motion.div
                                    key={step.step}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-60px' }}
                                    custom={i}
                                    className="p-8 rounded-3xl bg-white border border-portfolio-dark/10 shadow-sm hover:shadow-md hover:border-portfolio-gold/40 transition-all duration-300 group cursor-target flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-portfolio-dark/5">
                                            <span className="font-mono text-xs font-bold text-portfolio-gold tracking-widest uppercase">
                                                Phase // {step.step}
                                            </span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-dark/20" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-portfolio-dark mb-2.5">
                                            {step.title}
                                        </h3>
                                        <p className="text-portfolio-muted text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Frequently Asked Questions (Signature Home Style) ────── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 py-20 sm:py-28 relative z-10">
                    <div className="bg-[#1a1a1a] rounded-3xl md:rounded-4xl p-5 sm:p-8 md:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                        {/* Left Column */}
                        <div className="lg:col-span-4 flex flex-col justify-start pt-2">
                            <span className="inline-block text-xxs font-bold uppercase tracking-widest text-white/40 border border-white/10 rounded-full px-3 py-1 mb-6 md:mb-8 w-fit">
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
                                    className="p-8 rounded-3xl bg-white border border-portfolio-dark/10 hover:border-portfolio-gold/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-target"
                                >
                                    <div>
                                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-portfolio-dark/5">
                                            <span className="font-mono text-xs font-bold text-portfolio-gold tracking-widest uppercase">
                                                {other.heroTag}
                                            </span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-dark/20 group-hover:bg-portfolio-gold transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-bold text-portfolio-dark mb-2.5 group-hover:text-portfolio-gold transition-colors">
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

                {/* ─── Bottom CTA (Exact Black Container matching FAQ) ──────── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pb-20 sm:pb-28 relative z-10">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="bg-[#1a1a1a] border border-white/[0.08] rounded-3xl md:rounded-4xl p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl"
                    >
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="inline-block text-xxs font-bold uppercase tracking-widest text-white/40 border border-white/10 rounded-full px-3 py-1 mb-6">
                                Start Your Project
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                                Ready to build your <br />
                                <span className="text-portfolio-gold">{service.title}?</span>
                            </h2>
                            <p className="text-white/40 text-sm sm:text-base mb-10 leading-relaxed max-w-lg mx-auto">
                                Let's discuss your scope, timeline, and architectural requirements. No commitment, just an honest technical conversation with a senior engineer.
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
