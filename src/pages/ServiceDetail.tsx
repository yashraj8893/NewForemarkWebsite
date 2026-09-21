import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    ArrowRight,
    ChevronDown,
    CheckCircle2,
    ArrowLeft,
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

    // Get other 3 services for bottom switcher
    const otherServices = Object.values(servicesData).filter((s) => s.slug !== activeSlug);

    return (
        <>
            <SEO title={service.seo.title} description={service.seo.description} />
            <main className="relative w-full overflow-hidden bg-portfolio-bg selection:bg-portfolio-gold/30">
                {/* ─── Hero Section ────────────────────────────────────────── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pt-8 sm:pt-12 pb-16 sm:pb-24">
                    {/* Breadcrumbs & Back */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-portfolio-muted mb-8"
                    >
                        <Link to="/services" className="hover:text-portfolio-dark flex items-center gap-1.5 transition-colors cursor-target">
                            <ArrowLeft size={14} /> Services
                        </Link>
                        <span className="text-portfolio-muted/40">/</span>
                        <span className="text-portfolio-gold">{service.title}</span>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                        {/* Hero Text */}
                        <div className="lg:col-span-7 flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-3 mb-4"
                            >
                                <div className="w-9 h-9 rounded-xl bg-portfolio-gold/10 border border-portfolio-gold/30 flex items-center justify-center text-portfolio-gold shrink-0">
                                    <service.icon size={18} />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-portfolio-gold opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-portfolio-gold"></span>
                                    </span>
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-portfolio-gold">
                                        {service.heroTag}
                                    </span>
                                </div>
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
                                    className="btn-primary inline-flex items-center gap-2 px-8 py-4 cursor-target border border-transparent hover:border-portfolio-gold transition-colors shadow-lg hover:shadow-xl"
                                >
                                    Get a quote <ArrowRight size={16} />
                                </Link>
                                <Link
                                    to="/projects"
                                    className="btn-ghost inline-flex items-center gap-2 px-8 py-4 cursor-target hover:bg-portfolio-dark/5 transition-all"
                                >
                                    View our work
                                </Link>
                            </motion.div>
                        </div>

                        {/* Interactive Hero Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="lg:col-span-5 relative"
                        >
                            <div className="relative w-full aspect-[4/3] rounded-[2rem] bg-[#0c0c0e] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center isolate group cursor-target">
                                {/* Subtle internal glow */}
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
                <section className="bg-portfolio-dark text-white py-16 sm:py-20 relative z-10 border-y border-white/10">
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
                                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-portfolio-gold tracking-tight mb-1">
                                        {metric.value}
                                    </span>
                                    <span className="text-sm sm:text-base font-bold text-white mb-1">{metric.label}</span>
                                    <span className="text-xs text-white/50 leading-relaxed">{metric.description}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── How Foremark Does It ─────────────────────────────────── */}
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {service.philosophy.map((item, i) => (
                            <motion.div
                                key={item.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }}
                                custom={i}
                                className="p-8 sm:p-10 rounded-3xl bg-white border border-portfolio-dark/5 hover:border-portfolio-gold/40 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group cursor-target"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-portfolio-gold/10 border border-portfolio-gold/20 flex items-center justify-center mb-6 text-portfolio-gold group-hover:scale-110 transition-transform duration-300">
                                    <item.icon size={22} />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-portfolio-dark mb-3 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-portfolio-muted text-sm sm:text-base leading-relaxed">
                                    {item.description}
                                </p>
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
                                    className="p-8 rounded-3xl bg-white border border-portfolio-dark/5 hover:border-portfolio-gold/30 hover:-translate-y-1 transition-all duration-300 group cursor-target shadow-sm hover:shadow-md flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="w-12 h-12 rounded-2xl bg-[#0d0d0d] flex items-center justify-center mb-6 text-portfolio-gold group-hover:bg-portfolio-gold group-hover:text-white transition-colors duration-300">
                                            <item.icon size={22} />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-portfolio-dark mb-2.5 tracking-tight">
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
                                className="p-6 rounded-2xl bg-white border border-portfolio-dark/5 shadow-sm"
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

                {/* ─── Delivery Process ─────────────────────────────────────── */}
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

                {/* ─── Frequently Asked Questions ───────────────────────────── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 py-20 sm:py-28 relative z-10">
                    <div className="text-center mb-14 max-w-2xl mx-auto">
                        <span className="section-label text-portfolio-gold">Clarity First</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-dark mt-2 leading-[1.15]">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto divide-y divide-portfolio-dark/10">
                        {service.faqs.map((faq, index) => {
                            const isOpen = openFaqIndex === index;
                            return (
                                <div key={faq.question} className="py-6">
                                    <button
                                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                                        className="w-full flex items-center justify-between text-left gap-4 cursor-target group"
                                    >
                                        <span className="text-base sm:text-lg font-bold text-portfolio-dark group-hover:text-portfolio-gold transition-colors">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            size={20}
                                            className={`flex-shrink-0 text-portfolio-gold transition-transform duration-300 ${
                                                isOpen ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-portfolio-muted text-sm sm:text-base leading-relaxed pt-4 pr-8">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
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

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {otherServices.map((other) => (
                                <Link
                                    key={other.slug}
                                    to={`/services/${other.slug}`}
                                    className="p-6 rounded-3xl bg-white border border-portfolio-dark/5 hover:border-portfolio-gold/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between cursor-target"
                                >
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-portfolio-gold/10 border border-portfolio-gold/20 flex items-center justify-center text-portfolio-gold shrink-0">
                                                <other.icon size={18} />
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-portfolio-gold">
                                                {other.heroTag}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-portfolio-dark mb-2 group-hover:text-portfolio-gold transition-colors">
                                            {other.title}
                                        </h3>
                                        <p className="text-portfolio-muted text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                                            {other.shortDesc}
                                        </p>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-portfolio-dark group-hover:text-portfolio-gold transition-colors">
                                        Explore details <ArrowRight size={14} />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Bottom CTA ───────────────────────────────────────────── */}
                <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 py-20 sm:py-28 relative z-10">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="relative bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] px-8 sm:px-16 py-16 sm:py-24 text-center overflow-hidden shadow-2xl"
                    >
                        {/* Glow blur background */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-portfolio-gold/15 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="text-portfolio-gold text-xs font-bold uppercase tracking-widest block mb-3">
                                Start Your Project
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Ready to build your {service.title}?
                            </h2>
                            <p className="text-white/60 text-base sm:text-lg mb-10 leading-relaxed">
                                Let's discuss your scope, timeline, and architectural requirements. No commitment, just an honest technical conversation.
                            </p>

                            <div className="flex items-center justify-center gap-4 flex-wrap">
                                <Link
                                    to={`/contact?service=${service.slug}`}
                                    className="inline-flex items-center gap-2 bg-portfolio-gold text-white text-sm font-bold uppercase tracking-widest rounded-full px-8 py-4 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-target"
                                >
                                    Get a quote <ArrowRight size={16} />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-bold uppercase tracking-widest rounded-full px-8 py-4 hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-target"
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
