import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    ArrowRight,
    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { SEO } from '../components/SEO';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
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

    const otherServices = Array.from(
        new Map(Object.values(servicesData).map((s) => [s.slug, s])).values()
    ).filter((s) => s.slug !== service.slug);

    return (
        <>
            <SEO title={service.seo.title} description={service.seo.description} />
            <main className="relative w-full overflow-hidden bg-white text-[#1a1816] selection:bg-[#ea7008] selection:text-white">

                {/* ─── Breadcrumb ──────────────────────────────────────── */}
                <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pt-8 sm:pt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-xs font-medium text-[#8a8077] tracking-wide"
                    >
                        <Link
                            to="/services"
                            className="hover:text-[#121110] flex items-center gap-1 transition-colors cursor-target"
                        >
                            <ArrowLeft size={13} />
                            <span>Services</span>
                        </Link>
                        <span className="text-[#d4cfc9]">/</span>
                        <span className="text-[#121110] font-semibold">{service.title}</span>
                    </motion.div>
                </div>

                {/* ─── Hero ────────────────────────────────────────────── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pt-10 sm:pt-14 pb-16 sm:pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left: Copy */}
                        <div className="flex flex-col">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest mb-4"
                            >
                                {service.heroTag}
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.04 }}
                                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121110] leading-[1.1] mb-6"
                            >
                                {service.title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.08 }}
                                className="text-[#5c544d] text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
                            >
                                {service.tagline}
                            </motion.p>

                            {/* Capability list */}
                            <motion.div
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.12 }}
                                className="flex flex-wrap gap-2 mb-10"
                            >
                                {service.deliverables.slice(0, 4).map((feat) => (
                                    <span
                                        key={feat.title}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#ebe5df] text-xs font-medium text-[#3d3832]"
                                    >
                                        <CheckCircle2 size={13} className="text-[#ea7008]" />
                                        {feat.title}
                                    </span>
                                ))}
                            </motion.div>

                            {/* CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.16 }}
                                className="flex items-center gap-3 flex-wrap"
                            >
                                <Link
                                    to={`/contact?service=${service.slug}`}
                                    className="btn-primary inline-flex items-center gap-2 px-8 py-4 font-bold cursor-target"
                                >
                                    Start this project <ArrowRight size={15} />
                                </Link>
                                <Link
                                    to="/projects"
                                    className="btn-ghost inline-flex items-center gap-2 px-8 py-4 font-medium cursor-target"
                                >
                                    Explore Portfolio
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right: Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.12, duration: 0.6 }}
                            className="relative"
                        >
                            <div className="w-full aspect-[4/3] rounded-2xl bg-[#faf8f5] border border-[#ebe5df] overflow-hidden flex items-center justify-center">
                                <div className="w-full h-full flex items-center justify-center scale-95 sm:scale-100 p-4">
                                    <Visual />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ─── Metrics Strip ──────────────────────────────────── */}
                <section className="border-y border-[#ebe5df] py-14 sm:py-16">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-[#ebe5df]">
                            {service.metrics.map((metric, i) => (
                                <motion.div
                                    key={metric.label}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={i}
                                    className="flex flex-col md:px-8 first:md:pl-0 last:md:pr-0"
                                >
                                    <span className="text-3xl sm:text-4xl font-bold text-[#ea7008] tracking-tight mb-1">
                                        {metric.value}
                                    </span>
                                    <span className="text-sm font-semibold text-[#121110] mb-1">
                                        {metric.label}
                                    </span>
                                    <span className="text-xs text-[#8a8077] leading-relaxed">
                                        {metric.description}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── How We Do It ───────────────────────────────────── */}
                <section className="py-20 sm:py-28">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16">
                        <div className="max-w-2xl mb-14">
                            <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-3">
                                Our Approach
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121110] tracking-tight leading-tight mb-4">
                                {service.howWeDoItTitle}
                            </h2>
                            <p className="text-[#5c544d] text-base leading-relaxed">
                                {service.howWeDoItSubtitle}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {service.philosophy.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-40px' }}
                                    custom={i}
                                    className="p-7 rounded-2xl border border-[#ebe5df] hover:border-[#ea7008]/30 transition-all duration-300 group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[#faf8f5] border border-[#ebe5df] flex items-center justify-center mb-5 text-[#ea7008] group-hover:bg-[#ea7008] group-hover:text-white group-hover:border-[#ea7008] transition-all duration-300">
                                        <item.icon size={18} />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#121110] mb-2 tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#5c544d] text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Deliverables ───────────────────────────────────── */}
                <section className="py-20 sm:py-28 border-t border-[#ebe5df]">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16">
                        <div className="max-w-2xl mb-14">
                            <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-3">
                                Deliverables
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121110] tracking-tight leading-tight mb-4">
                                What We Build & Deliver
                            </h2>
                            <p className="text-[#5c544d] text-base leading-relaxed">
                                Production-grade assets, scalable architectures, and fully documented systems engineered for your business.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {service.deliverables.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-40px' }}
                                    custom={i}
                                    className="p-7 rounded-2xl border border-[#ebe5df] hover:border-[#ea7008]/30 transition-all duration-300 group flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="w-10 h-10 rounded-xl bg-[#faf8f5] border border-[#ebe5df] flex items-center justify-center mb-5 text-[#ea7008] group-hover:bg-[#ea7008] group-hover:text-white group-hover:border-[#ea7008] transition-all duration-300">
                                            <item.icon size={18} />
                                        </div>
                                        <h3 className="text-lg font-bold text-[#121110] mb-2 tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#5c544d] text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Technology Stack ───────────────────────────────── */}
                <section className="py-20 sm:py-28 border-t border-[#ebe5df]">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16">
                        <div className="max-w-2xl mb-14">
                            <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-3">
                                Technology
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121110] tracking-tight leading-tight mb-4">
                                Technology Stack
                            </h2>
                            <p className="text-[#5c544d] text-base leading-relaxed">
                                Modern, battle-tested technologies selected to eliminate vendor lock-in and optimize for velocity.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {service.techStack.map((category, i) => (
                                <motion.div
                                    key={category.category}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={i}
                                    className="p-6 rounded-2xl border border-[#ebe5df] hover:border-[#ea7008]/30 transition-all duration-300"
                                >
                                    <h3 className="text-sm font-bold text-[#121110] mb-4 tracking-tight">
                                        {category.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-1.5">
                                        {category.items.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 rounded-md bg-[#faf8f5] text-[#3d3832] text-xs font-medium border border-[#ebe5df]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Delivery Process ───────────────────────────────── */}
                <section className="py-20 sm:py-28 border-t border-[#ebe5df]">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16">
                        <div className="max-w-2xl mb-14">
                            <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-3">
                                Process
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121110] tracking-tight leading-tight mb-4">
                                How We Deliver
                            </h2>
                            <p className="text-[#5c544d] text-base leading-relaxed">
                                A transparent, phased lifecycle with constant feedback loops and zero surprises.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {service.processSteps.map((step, i) => (
                                <motion.div
                                    key={step.step}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-40px' }}
                                    custom={i}
                                    className="p-7 rounded-2xl border border-[#ebe5df] hover:border-[#ea7008]/30 transition-all duration-300 flex flex-col"
                                >
                                    <span className="text-[#ea7008] text-2xl font-bold mb-4">
                                        {step.step}
                                    </span>
                                    <h3 className="text-lg font-bold text-[#121110] mb-2 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#5c544d] text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── FAQs ───────────────────────────────────────────── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 py-20 sm:py-28 relative z-10">
                    <div className="bg-white border border-portfolio-gold/35 hover:border-portfolio-gold/60 shadow-[0_4px_30px_rgba(234,112,8,0.06)] rounded-3xl md:rounded-4xl p-5 sm:p-8 md:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 transition-all duration-500">
                        {/* Left Column */}
                        <div className="lg:col-span-4 flex flex-col justify-start pt-2">
                            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-portfolio-gold border border-portfolio-gold/30 bg-portfolio-gold/5 rounded-full px-3 py-1 mb-6 md:mb-8 w-fit font-mono">
                                FAQs
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-[#121110] mb-4 md:mb-6 leading-tight">
                                Frequently asked <br />
                                <span className="text-portfolio-gold">questions</span>
                            </h2>
                            <p className="text-[#5c544d] text-sm leading-relaxed max-w-xs">
                                Everything you need to know before we start building together.
                            </p>
                        </div>

                        {/* Right Column — Accordion */}
                        <div className="lg:col-span-8 flex flex-col gap-3 sm:gap-4">
                            {service.faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className={`transition-all duration-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 border ${
                                        openFaqIndex === i
                                            ? 'bg-portfolio-gold/[0.05] border-portfolio-gold/50 shadow-[0_4px_20px_rgba(234,112,8,0.1)]'
                                            : 'bg-[#faf8f5] border-[#ebe5df] hover:border-portfolio-gold/45 hover:bg-portfolio-gold/[0.02]'
                                    }`}
                                >
                                    <button
                                        onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                                        className="w-full flex items-center justify-between gap-4 sm:gap-6 text-left group cursor-target"
                                    >
                                        <span
                                            className={`text-sm md:text-base font-semibold leading-snug transition-colors duration-300 ${
                                                openFaqIndex === i ? 'text-portfolio-gold' : 'text-[#121110] group-hover:text-portfolio-gold'
                                            }`}
                                        >
                                            {faq.question}
                                        </span>
                                        <div
                                            className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                                                openFaqIndex === i
                                                    ? 'border-portfolio-gold bg-portfolio-gold/15 rotate-45'
                                                    : 'border-portfolio-gold/30 group-hover:border-portfolio-gold'
                                            }`}
                                        >
                                            <span
                                                className={`text-lg leading-none font-light transition-colors duration-300 ${
                                                    openFaqIndex === i ? 'text-portfolio-gold' : 'text-[#5c544d]'
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
                                        <p className="text-[#4b453f] text-xs sm:text-sm leading-relaxed pr-4 sm:pr-12">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Explore Other Services ─────────────────────────── */}
                <section className="py-16 sm:py-24 border-t border-[#ebe5df]">
                    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16">
                        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10">
                            <div>
                                <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-3">
                                    More Services
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#121110]">
                                    Explore Other Services
                                </h2>
                            </div>
                            <Link
                                to="/services"
                                className="text-sm font-medium text-[#5c544d] hover:text-[#ea7008] flex items-center gap-1 mt-4 sm:mt-0 transition-colors cursor-target"
                            >
                                View all <ArrowRight size={14} />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {otherServices.map((other) => (
                                <Link
                                    key={other.slug}
                                    to={`/services/${other.slug}`}
                                    className="p-8 rounded-2xl border border-[#ebe5df] hover:border-[#ea7008]/30 hover:shadow-sm transition-all duration-300 group flex flex-col justify-between cursor-target"
                                >
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-[#faf8f5] border border-[#ebe5df] flex items-center justify-center text-[#ea7008]">
                                                <other.icon size={18} />
                                            </div>
                                            <span className="text-xs font-semibold uppercase tracking-widest text-[#ea7008]">
                                                {other.heroTag}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#121110] mb-2 group-hover:text-[#ea7008] transition-colors">
                                            {other.title}
                                        </h3>
                                        <p className="text-[#5c544d] text-sm leading-relaxed mb-6 line-clamp-2">
                                            {other.shortDesc}
                                        </p>
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[#8a8077] group-hover:text-[#ea7008] transition-colors pt-4 border-t border-[#f0ece7]">
                                        Learn more <ArrowRight size={14} />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Bottom CTA ─────────────────────────────────────── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pb-20 sm:pb-32">
                    <div className="bg-[#faf8f5] border border-portfolio-gold/35 hover:border-portfolio-gold/60 shadow-[0_4px_30px_rgba(234,112,8,0.08)] rounded-3xl md:rounded-4xl p-8 sm:p-12 md:p-24 text-[#121110] relative overflow-hidden flex flex-col items-center text-center transition-all duration-500 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/40 before:to-transparent">
                        <div className="absolute inset-0 opacity-15 pointer-events-none">
                            <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
                                <path d="M0 200C100 150 200 180 300 120C400 60 500 100 600 80C700 60 800 120 1000 100" stroke="#ea7008" strokeWidth="0.8" strokeDasharray="4 4" />
                            </svg>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-portfolio-gold/[0.08] blur-[120px] rounded-full pointer-events-none" />
                        <div className="relative z-10 max-w-3xl">
                            <span className="text-portfolio-gold font-bold mb-4 md:mb-6 text-[11px] tracking-[0.2em] block uppercase font-mono">// COMMISSIONS &amp; PARTNERSHIPS</span>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display tracking-tight mb-5 md:mb-8 text-[#121110] leading-tight">Let's build something extraordinary together.</h2>
                            <p className="text-sm sm:text-base md:text-lg text-[#5c544d] mb-8 md:mb-12 leading-relaxed">Whether you need a high-performance web platform built from scratch or want to explore how intelligent automation can transform your operations.</p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-9 py-4 uppercase tracking-[0.16em] text-xs sm:text-sm cursor-target rounded-full font-bold text-white bg-[#121110] hover:bg-[#252320] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.18)] border border-[#121110] group"
                            >
                                Start A Project <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ServiceDetail;
