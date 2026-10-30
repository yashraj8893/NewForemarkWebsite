import { useState, useRef, useLayoutEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    Code2,
    Server,
    Workflow,
    ArrowRight,
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
import { WebAndSoftwareAnimation, ServerAnimation, AutomationAnimation } from '../components/ServicesGrid';
import { FAQSection } from '../components/FAQSection';
import { SEO } from '../components/SEO';
import HaloCardsBlocks from '../components/blocks/HaloCardsBlocks';

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
        slug: 'website-software-development',
        title: 'Website & Software Development',
        description:
            'From bespoke, brand-defining websites to full-stack web applications and scalable software platforms, we engineer high-performance digital systems that streamline operations, elevate your brand, and convert visitors into loyal customers.',
        tag: 'Core Engineering',
        icon: Code2,
        animation: WebAndSoftwareAnimation,
    },
    {
        slug: 'cloud-hosting',
        title: 'Web Servers & Hosting',
        description:
            "We deploy and manage secure, high-availability cloud infrastructure and managed hosting architectures tailored to your application's needs. With robust security monitoring, scalable designs, and reliable backups, we ensure your platforms remain online and performant under load.",
        tag: 'Reliable & secure',
        icon: Server,
        animation: ServerAnimation,
    },
    {
        slug: 'business-automation',
        title: 'Business Automation',
        description:
            'We audit your existing workflows and identify where manual, repetitive work is costing you time. Then we build intelligent automations — integrating your tools and systems — so your team can focus on the work that actually needs a human.',
        tag: 'High impact',
        icon: Workflow,
        animation: AutomationAnimation,
    },
];

const getHexPoints = (hx: number, hy: number, r: number, alpha: number) => {
    const pts: string[] = [];
    for (let k = 0; k < 6; k++) {
        const a = alpha + k * (Math.PI / 3);
        const x = hx + r * Math.cos(a);
        const y = hy - r * Math.sin(a);
        pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(' ');
};

const getChevronPoints = (hx: number, hy: number, r: number, alpha: number, gap = 7, th = 8) => {
    const p1_x = hx + (r + gap) * Math.cos(alpha - Math.PI / 3);
    const p1_y = hy - (r + gap) * Math.sin(alpha - Math.PI / 3);
    const p2_x = hx + (r + gap) * Math.cos(alpha);
    const p2_y = hy - (r + gap) * Math.sin(alpha);
    const p3_x = hx + (r + gap) * Math.cos(alpha + Math.PI / 3);
    const p3_y = hy - (r + gap) * Math.sin(alpha + Math.PI / 3);

    const p4_x = hx + (r + gap + th) * Math.cos(alpha + Math.PI / 3);
    const p4_y = hy - (r + gap + th) * Math.sin(alpha + Math.PI / 3);
    const p5_x = hx + (r + gap + th) * Math.cos(alpha);
    const p5_y = hy - (r + gap + th) * Math.sin(alpha);
    const p6_x = hx + (r + gap + th) * Math.cos(alpha - Math.PI / 3);
    const p6_y = hy - (r + gap + th) * Math.sin(alpha - Math.PI / 3);

    return `${p1_x.toFixed(1)},${p1_y.toFixed(1)} ${p2_x.toFixed(1)},${p2_y.toFixed(1)} ${p3_x.toFixed(1)},${p3_y.toFixed(1)} ${p4_x.toFixed(1)},${p4_y.toFixed(1)} ${p5_x.toFixed(1)},${p5_y.toFixed(1)} ${p6_x.toFixed(1)},${p6_y.toFixed(1)}`;
};

const whyChooseUsNodes = [
    {
        id: 'technical-excellence',
        title: 'Technical Excellence',
        description: 'Every build follows rigorous engineering standards, from architecture to code review.',
        type: 'orange' as const,
        color: '#ea7008',
        borderColor: '#ea7008',
        accentClass: 'text-[#ea7008]',
        angle: 120,
        side: 'left' as const,
        icon: ShieldCheck,
    },
    {
        id: 'dedicated-team',
        title: 'Dedicated Team',
        description: 'A senior team stays with your project end-to-end — no hand-offs, no lost context.',
        type: 'white' as const,
        color: '#ffffff',
        borderColor: '#e5e0da',
        accentClass: 'text-[#121110]',
        angle: 180,
        side: 'left' as const,
        icon: Users,
    },
    {
        id: 'reliable-delivery',
        title: 'Reliable Delivery',
        description: 'Clear timelines, honest updates, and milestones we actually hit.',
        type: 'orange' as const,
        color: '#ea7008',
        borderColor: '#ea7008',
        accentClass: 'text-[#ea7008]',
        angle: 240,
        side: 'left' as const,
        icon: Clock,
    },
    {
        id: 'tailored-solutions',
        title: 'Tailored Solutions',
        description: 'We design around your workflow, not the other way around. Nothing off-the-shelf.',
        type: 'white' as const,
        color: '#ffffff',
        borderColor: '#e5e0da',
        accentClass: 'text-[#121110]',
        angle: 60,
        side: 'right' as const,
        icon: Sparkles,
    },
    {
        id: 'innovation-led',
        title: 'Innovation-Led',
        description: 'We bring modern tooling and automation into every engagement, not just the trendy ones.',
        type: 'orange' as const,
        color: '#ea7008',
        borderColor: '#ea7008',
        accentClass: 'text-[#ea7008]',
        angle: 0,
        side: 'right' as const,
        icon: Rocket,
    },
    {
        id: 'long-term-partnership',
        title: 'Long-Term Partnership',
        description: 'We stay on after launch — supporting, maintaining, and scaling what we build together.',
        type: 'white' as const,
        color: '#ffffff',
        borderColor: '#e5e0da',
        accentClass: 'text-[#121110]',
        angle: 300,
        side: 'right' as const,
        icon: HeartHandshake,
    },
];

const getCubicPath = (x1: number, y1: number, x2: number, y2: number, side: 'left' | 'right') => {
    const dx = Math.max(30, Math.abs(x2 - x1) * 0.52);
    if (side === 'left') {
        return `M ${x1.toFixed(1)} ${y1.toFixed(1)} C ${(x1 + dx).toFixed(1)} ${y1.toFixed(1)}, ${(x2 - dx * 0.45).toFixed(1)} ${y2.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`;
    } else {
        return `M ${x1.toFixed(1)} ${y1.toFixed(1)} C ${(x1 - dx).toFixed(1)} ${y1.toFixed(1)}, ${(x2 + dx * 0.45).toFixed(1)} ${y2.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`;
    }
};

const fallbackWhyCoords: Record<string, { x1: number; y1: number; x2: number; y2: number }> = {
    'technical-excellence': { x1: 360, y1: 75, x2: 498, y2: 124 },
    'dedicated-team': { x1: 360, y1: 250, x2: 419, y2: 250 },
    'reliable-delivery': { x1: 360, y1: 425, x2: 498, y2: 376 },
    'tailored-solutions': { x1: 792, y1: 75, x2: 654, y2: 124 },
    'innovation-led': { x1: 792, y1: 250, x2: 733, y2: 250 },
    'long-term-partnership': { x1: 792, y1: 425, x2: 654, y2: 376 },
};

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


const ServicesPage = () => {
    const [hoveredWhyNode, setHoveredWhyNode] = useState<string | null>(null);
    const hasAnyHover = hoveredWhyNode !== null;

    const whyStageRef = useRef<HTMLDivElement>(null);
    const whyCardRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const whyPinRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const whyHexTipRefs = useRef<Record<string, SVGElement | null>>({});
    const [whyCoords, setWhyCoords] = useState<Record<string, { x1: number; y1: number; x2: number; y2: number }>>(fallbackWhyCoords);

    const updateWhyCoords = useCallback(() => {
        if (!whyStageRef.current) return;
        const stageRect = whyStageRef.current.getBoundingClientRect();
        if (stageRect.width === 0 || stageRect.height === 0) return;

        const newCoords: Record<string, { x1: number; y1: number; x2: number; y2: number }> = {};

        whyChooseUsNodes.forEach((node) => {
            const pinEl = whyPinRefs.current[node.id] || whyCardRefs.current[node.id];
            const hexTipEl = whyHexTipRefs.current[node.id];

            if (pinEl && hexTipEl) {
                const pinRect = pinEl.getBoundingClientRect();
                const hexTipRect = hexTipEl.getBoundingClientRect();

                const x1 = node.side === 'left'
                    ? pinRect.right - stageRect.left
                    : pinRect.left - stageRect.left;
                const y1 = pinRect.top + pinRect.height / 2 - stageRect.top;

                const x2 = hexTipRect.left + hexTipRect.width / 2 - stageRect.left;
                const y2 = hexTipRect.top + hexTipRect.height / 2 - stageRect.top;

                newCoords[node.id] = { x1, y1, x2, y2 };
            }
        });

        if (Object.keys(newCoords).length === whyChooseUsNodes.length) {
            setWhyCoords(newCoords);
        }
    }, []);

    useLayoutEffect(() => {
        updateWhyCoords();
        const handleResize = () => updateWhyCoords();
        window.addEventListener('resize', handleResize);

        let ro: ResizeObserver | null = null;
        if (whyStageRef.current && typeof ResizeObserver !== 'undefined') {
            ro = new ResizeObserver(() => updateWhyCoords());
            ro.observe(whyStageRef.current);
        }

        const timer = setTimeout(updateWhyCoords, 100);
        return () => {
            window.removeEventListener('resize', handleResize);
            if (ro) ro.disconnect();
            clearTimeout(timer);
        };
    }, [updateWhyCoords]);
    return (
        <main className="relative w-full overflow-clip bg-white text-[#1a1816]">
            <SEO
                title="Services"
                description="Foremark delivers website & software development, managed web servers & hosting, and business automation — three core services engineered for modern businesses."
                canonicalUrl="https://foremark.in/services"
            />
            {/* ─── Hero ─────────────────────────────────────────────── */}
            <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pt-12 sm:pt-16 pb-20 sm:pb-32">
                <div className="flex flex-col mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-3"
                    >
                        Capabilities &amp; Systems
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold font-display tracking-tight mb-4 sm:mb-6 text-[#121110] leading-tight"
                    >
                        Services engineered for <br /> modern enterprises
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg text-[#5c544d] max-w-xl leading-relaxed"
                    >
                        From architecture to production code, we design, build, and maintain the mission-critical
                        digital platforms that help modern companies scale with velocity.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-4 flex-wrap mt-8"
                    >
                        <Link to="/contact" className="btn-primary flex items-center gap-2 px-10 cursor-target">
                            Start a project
                        </Link>
                        <Link to="/projects" className="btn-ghost flex items-center gap-2 px-10 cursor-target">
                            View our work
                        </Link>
                    </motion.div>

                    {/* Why-us blocks — Concept 10: Halo Cards (1: IsometricBlocks, 2: CircuitPulseBlocks, 3: SpotlightConsoleBlocks, 4: FoundryLineBlocks, 5: FoundryStage3D, 6: JourneyLineBlocks, 7: JourneyNightBlocks, 8: DarkBandBlocks, 9: PrismBlocks) */}
                    <HaloCardsBlocks />
                </div>
            </section>

            {/* ─── Our Services ─────────────────────────────────────── */}
            <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pb-28 sm:pb-36 relative z-10">
                <div className="text-center mb-16 sm:mb-20">
                    <span className="section-label text-portfolio-gold">Our services</span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-[#121110] max-w-3xl mx-auto mt-2 leading-[1.1]">
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
                                className="group relative bg-white border border-portfolio-gold/35 hover:border-portfolio-gold/65 rounded-[2.5rem] overflow-hidden shadow-[0_4px_30px_rgba(234,112,8,0.08)] hover:shadow-[0_4px_45px_rgba(234,112,8,0.18)] cursor-target transition-all duration-500"
                            >
                                {/* Subtle inner glow gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-gold/5 via-transparent to-transparent pointer-events-none" />

                                <div className={`flex flex-col lg:flex-row items-stretch ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                                    {/* Text Content Area */}
                                    <div className="flex-1 lg:flex-[1.2] p-8 sm:p-12 md:p-16 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-portfolio-gold shrink-0">
                                                <service.icon size={18} />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-portfolio-gold opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-portfolio-gold"></span>
                                                </span>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-portfolio-gold font-mono">
                                                    {service.tag}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="text-3xl sm:text-4xl font-bold text-[#121110] mb-6 tracking-tight">
                                            <Link to={`/services/${service.slug}`} className="hover:text-portfolio-gold transition-colors">
                                                {service.title}
                                            </Link>
                                        </h3>

                                        <p className="text-[#5c544d] text-base leading-relaxed mb-10 max-w-xl">
                                            {service.description}
                                        </p>

                                        <div className="flex items-center gap-4 flex-wrap">
                                            <Link
                                                to={`/services/${service.slug}`}
                                                className="btn-primary inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest rounded-full px-8 py-4 w-max cursor-target"
                                            >
                                                Explore Service <ArrowRight size={16} />
                                            </Link>
                                            <Link
                                                to={`/contact?service=${service.slug}`}
                                                className="btn-ghost inline-flex items-center gap-2 text-[#121110] text-sm font-bold uppercase tracking-widest rounded-full px-8 py-4 w-max cursor-target"
                                            >
                                                Get a quote
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Live Animation side */}
                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="flex-1 lg:flex-[0.8] bg-[#faf8f5] border-t lg:border-t-0 lg:border-l border-[#ebe5df] relative flex items-center justify-center p-6 min-h-[300px] md:min-h-[380px] overflow-hidden group/visual cursor-target"
                                    >
                                        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                                        <div className="w-full h-full flex items-center justify-center scale-90 sm:scale-100 group-hover/visual:scale-105 transition-transform duration-500">
                                            <Visual />
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ─── Why Choose Us (Radial Hexagon Matrix) ─────────────── */}
            <section className="bg-white relative z-10 overflow-hidden">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 py-20 sm:py-28 relative z-10">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-3">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#121110] max-w-3xl mx-auto tracking-tight leading-[1.15]">
                            Engineering you can actually depend on
                        </h2>
                    </div>

                    {/* Desktop Radial Layout (with Interactive Sleek Strings & Spotlight Pop-Up) */}
                    <div
                        ref={whyStageRef}
                        className="relative hidden lg:grid lg:grid-cols-12 items-center gap-6 max-w-6xl mx-auto min-h-[500px]"
                    >
                        {/* Connecting Strings SVG Overlay */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
                            aria-hidden="true"
                        >
                            <defs>
                                <filter id="why-string-glow" x="-30%" y="-30%" width="160%" height="160%">
                                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {whyChooseUsNodes.map((item) => {
                                const c = whyCoords[item.id] || fallbackWhyCoords[item.id];
                                if (!c) return null;
                                const isHovered = hoveredWhyNode === item.id;
                                const isOtherHovered = hasAnyHover && !isHovered;
                                const pathD = getCubicPath(c.x1, c.y1, c.x2, c.y2, item.side);
                                const isOrange = item.type === 'orange';

                                return (
                                    <g
                                        key={`string-${item.id}`}
                                        style={{
                                            opacity: isHovered ? 1 : isOtherHovered ? 0.2 : 0.88,
                                            filter: isOtherHovered ? 'blur(1.2px)' : 'none',
                                            transition: 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)',
                                        }}
                                    >
                                        {/* Invisible wide hit area for hovering the string directly */}
                                        <path
                                            d={pathD}
                                            fill="none"
                                            stroke="transparent"
                                            strokeWidth="24"
                                            className="pointer-events-auto cursor-pointer"
                                            onMouseEnter={() => setHoveredWhyNode(item.id)}
                                            onMouseLeave={() => setHoveredWhyNode(null)}
                                        />

                                        {/* Outer soft glow stroke on hover */}
                                        {isHovered && (
                                            <path
                                                d={pathD}
                                                fill="none"
                                                stroke={isOrange ? '#ea7008' : '#9c9489'}
                                                strokeWidth="6"
                                                strokeOpacity="0.3"
                                                filter="url(#why-string-glow)"
                                            />
                                        )}

                                        {/* Main sleek line - 100% SOLID (no dotted strokeDasharray) */}
                                        <path
                                            d={pathD}
                                            fill="none"
                                            stroke={isHovered ? '#ea7008' : isOrange ? '#ea7008' : '#b0a89f'}
                                            strokeWidth={isHovered ? 2.6 : 1.8}
                                            strokeLinecap="round"
                                            className="transition-all duration-300"
                                        />

                                        {/* Terminal anchor pin at Card - EXACTLY ONE PIN */}
                                        <g>
                                            {isHovered && (
                                                <circle
                                                    cx={c.x1}
                                                    cy={c.y1}
                                                    r="12"
                                                    fill={isOrange ? 'rgba(234,112,8,0.22)' : 'rgba(107,99,91,0.18)'}
                                                />
                                            )}
                                            <circle
                                                cx={c.x1}
                                                cy={c.y1}
                                                r="7"
                                                fill="#ffffff"
                                                stroke={isHovered ? '#ea7008' : isOrange ? '#ea7008' : '#b0a89f'}
                                                strokeWidth="1.5"
                                                className="transition-all duration-300"
                                            />
                                            <circle
                                                cx={c.x1}
                                                cy={c.y1}
                                                r={isHovered ? 4 : 3}
                                                fill={isOrange ? '#ea7008' : '#8c8275'}
                                                className="transition-all duration-300"
                                            />
                                        </g>

                                        {/* Animated energy pulse traveling along the string when hovered */}
                                        {isHovered && (
                                            <circle r="3.5" fill="#ffffff" stroke="#ea7008" strokeWidth="2">
                                                <animateMotion
                                                    dur="1.5s"
                                                    repeatCount="indefinite"
                                                    path={pathD}
                                                />
                                            </circle>
                                        )}
                                    </g>
                                );
                            })}
                        </svg>

                        {/* Left 3 items */}
                        <div className="lg:col-span-4 flex flex-col justify-between h-[480px] text-right pr-4 z-20">
                            {whyChooseUsNodes.filter((n) => n.side === 'left').map((item) => {
                                const isHovered = hoveredWhyNode === item.id;
                                const isOtherHovered = hasAnyHover && !isHovered;

                                return (
                                    <div
                                        key={item.id}
                                        ref={(el) => { whyCardRefs.current[item.id] = el; }}
                                        onMouseEnter={() => setHoveredWhyNode(item.id)}
                                        onMouseLeave={() => setHoveredWhyNode(null)}
                                        className={`relative cursor-pointer p-5 rounded-2xl transition-all duration-300 ${
                                            isHovered
                                                ? 'bg-white shadow-[0_20px_45px_-10px_rgba(234,112,8,0.25),0_6px_18px_rgba(0,0,0,0.06)] border border-[#ea7008]/60 scale-[1.05] -translate-y-1 z-30'
                                                : isOtherHovered
                                                ? 'bg-white/40 border border-transparent scale-[0.98] opacity-40'
                                                : 'bg-white hover:bg-white border border-[#ebe5df] shadow-[0_4px_20px_rgba(0,0,0,0.03)] scale-100 opacity-100'
                                        }`}
                                        style={{
                                            filter: isOtherHovered ? 'blur(1.5px)' : 'none',
                                            transition: 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)',
                                        }}
                                    >
                                        {/* Invisible anchor connector pin measurement point */}
                                        <div
                                            ref={(el) => { whyPinRefs.current[item.id] = el; }}
                                            className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1 pointer-events-none opacity-0"
                                        />

                                        <h3 className={`text-xl font-bold font-display mb-1.5 transition-colors ${item.accentClass}`}>
                                            {item.title}
                                        </h3>
                                        <p className="text-[#5c544d] text-sm leading-relaxed max-w-xs ml-auto">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Center Hexagonal Wheel */}
                        <div className="lg:col-span-4 flex items-center justify-center relative z-20">
                            {/* Ambient glowing core */}
                            <div
                                className="absolute w-[240px] h-[240px] rounded-full pointer-events-none transition-all duration-500"
                                style={{
                                    background: hasAnyHover
                                        ? 'radial-gradient(circle, rgba(234,112,8,0.38) 0%, rgba(234,112,8,0.12) 45%, transparent 70%)'
                                        : 'radial-gradient(circle, rgba(234,112,8,0.22) 0%, rgba(234,112,8,0.06) 45%, transparent 70%)',
                                    filter: 'blur(24px)',
                                }}
                            />

                            <svg width="440" height="440" viewBox="0 0 460 460" className="w-full h-auto select-none overflow-visible">
                                <defs>
                                    {/* Orange Hexagon Gradient */}
                                    <linearGradient id="why-hex-orange" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#f77810" />
                                        <stop offset="50%" stopColor="#ea7008" />
                                        <stop offset="100%" stopColor="#cf5e02" />
                                    </linearGradient>

                                    {/* White Hexagon 3D Faceted Gradient */}
                                    <linearGradient id="why-hex-white" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" />
                                        <stop offset="50%" stopColor="#fdfbf9" />
                                        <stop offset="100%" stopColor="#ebe4db" />
                                    </linearGradient>

                                    {/* Orange Chevron Gradient */}
                                    <linearGradient id="why-chev-orange" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ff8a29" />
                                        <stop offset="100%" stopColor="#ea7008" />
                                    </linearGradient>

                                    {/* White Chevron Gradient */}
                                    <linearGradient id="why-chev-white" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" />
                                        <stop offset="100%" stopColor="#f2ede6" />
                                    </linearGradient>

                                    {/* 3D Drop Shadows */}
                                    <filter id="why-hex-shadow-white" x="-30%" y="-30%" width="160%" height="160%">
                                        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#1a1816" floodOpacity="0.09" />
                                    </filter>
                                    <filter id="why-hex-shadow-orange" x="-30%" y="-30%" width="160%" height="160%">
                                        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#ea7008" floodOpacity="0.4" />
                                    </filter>
                                </defs>

                                {whyChooseUsNodes.map((item) => {
                                    const alpha = (item.angle * Math.PI) / 180;
                                    const hx = 230 + 98 * Math.cos(alpha);
                                    const hy = 230 - 98 * Math.sin(alpha);
                                    const hexPts = getHexPoints(hx, hy, 44, alpha);
                                    const chevPts = getChevronPoints(hx, hy, 44, alpha, 7, 8);
                                    const isHovered = hoveredWhyNode === item.id;
                                    const isOtherHovered = hasAnyHover && !isHovered;
                                    const isOrange = item.type === 'orange';

                                    const tip_x = hx + 59 * Math.cos(alpha);
                                    const tip_y = hy - 59 * Math.sin(alpha);

                                    return (
                                        <g
                                            key={item.id}
                                            onMouseEnter={() => setHoveredWhyNode(item.id)}
                                            onMouseLeave={() => setHoveredWhyNode(null)}
                                            className="cursor-pointer"
                                            style={{
                                                transform: isHovered ? 'scale(1.15)' : isOtherHovered ? 'scale(0.96)' : 'scale(1)',
                                                transformOrigin: `${hx}px ${hy}px`,
                                                opacity: isOtherHovered ? 0.35 : 1,
                                                transition: 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)',
                                            }}
                                        >
                                            {/* Outer Chevron Bracket Accent */}
                                            <polygon
                                                points={chevPts}
                                                fill={isOrange ? 'url(#why-chev-orange)' : 'url(#why-chev-white)'}
                                                stroke={isHovered ? '#ea7008' : isOrange ? '#ea7008' : '#ded6cb'}
                                                strokeWidth={isHovered ? '2.5' : '1.5'}
                                                filter={isOrange ? 'url(#why-hex-shadow-orange)' : 'url(#why-hex-shadow-white)'}
                                                className="transition-all duration-300"
                                            />

                                            {/* Hexagon Body with 3D gradient fill and shadow */}
                                            <polygon
                                                points={hexPts}
                                                fill={isOrange ? 'url(#why-hex-orange)' : 'url(#why-hex-white)'}
                                                stroke={isHovered ? '#ea7008' : isOrange ? '#ea7008' : '#ded6cb'}
                                                strokeWidth={isHovered ? '2.5' : '1.5'}
                                                filter={isOrange ? 'url(#why-hex-shadow-orange)' : 'url(#why-hex-shadow-white)'}
                                                className="transition-all duration-300"
                                            />

                                            {/* Subtle 3D Center Facet Ridge Line */}
                                            <line
                                                x1={hx}
                                                y1={hy}
                                                x2={tip_x}
                                                y2={tip_y}
                                                stroke={isOrange ? '#ffffff' : '#d2c9bd'}
                                                strokeWidth="1.2"
                                                strokeOpacity={isHovered ? 0.5 : 0.28}
                                                pointerEvents="none"
                                            />

                                            {/* Chevron tip ref for exact string connection */}
                                            <circle
                                                ref={(el) => { whyHexTipRefs.current[item.id] = el; }}
                                                cx={tip_x}
                                                cy={tip_y}
                                                r="2"
                                                opacity="0"
                                                className="pointer-events-none"
                                            />
                                        </g>
                                    );
                                })}
                            </svg>
                        </div>

                        {/* Right 3 items */}
                        <div className="lg:col-span-4 flex flex-col justify-between h-[480px] text-left pl-4 z-20">
                            {whyChooseUsNodes.filter((n) => n.side === 'right').map((item) => {
                                const isHovered = hoveredWhyNode === item.id;
                                const isOtherHovered = hasAnyHover && !isHovered;

                                return (
                                    <div
                                        key={item.id}
                                        ref={(el) => { whyCardRefs.current[item.id] = el; }}
                                        onMouseEnter={() => setHoveredWhyNode(item.id)}
                                        onMouseLeave={() => setHoveredWhyNode(null)}
                                        className={`relative cursor-pointer p-5 rounded-2xl transition-all duration-300 ${
                                            isHovered
                                                ? 'bg-white shadow-[0_20px_45px_-10px_rgba(234,112,8,0.25),0_6px_18px_rgba(0,0,0,0.06)] border border-[#ea7008]/60 scale-[1.05] -translate-y-1 z-30'
                                                : isOtherHovered
                                                ? 'bg-white/40 border border-transparent scale-[0.98] opacity-40'
                                                : 'bg-white hover:bg-white border border-[#ebe5df] shadow-[0_4px_20px_rgba(0,0,0,0.03)] scale-100 opacity-100'
                                        }`}
                                        style={{
                                            filter: isOtherHovered ? 'blur(1.5px)' : 'none',
                                            transition: 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)',
                                        }}
                                    >
                                        {/* Invisible anchor connector pin measurement point */}
                                        <div
                                            ref={(el) => { whyPinRefs.current[item.id] = el; }}
                                            className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-1 pointer-events-none opacity-0"
                                        />

                                        <h3 className={`text-xl font-bold font-display mb-1.5 transition-colors ${item.accentClass}`}>
                                            {item.title}
                                        </h3>
                                        <p className="text-[#5c544d] text-sm leading-relaxed max-w-xs">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile & Tablet Layout */}
                    <div className="lg:hidden flex flex-col items-center gap-10">
                        <div className="w-full max-w-[340px] flex justify-center relative">
                            {/* Ambient glow */}
                            <div
                                className="absolute w-[200px] h-[200px] rounded-full pointer-events-none"
                                style={{
                                    background: 'radial-gradient(circle, rgba(234,112,8,0.25) 0%, rgba(234,112,8,0.06) 45%, transparent 70%)',
                                    filter: 'blur(20px)',
                                }}
                            />

                            <svg width="340" height="340" viewBox="0 0 460 460" className="w-full h-auto select-none overflow-visible relative z-10">
                                <defs>
                                    <linearGradient id="why-m-hex-orange" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#f77810" />
                                        <stop offset="50%" stopColor="#ea7008" />
                                        <stop offset="100%" stopColor="#cf5e02" />
                                    </linearGradient>
                                    <linearGradient id="why-m-hex-white" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" />
                                        <stop offset="50%" stopColor="#fdfbf9" />
                                        <stop offset="100%" stopColor="#ebe4db" />
                                    </linearGradient>
                                    <linearGradient id="why-m-chev-orange" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ff8a29" />
                                        <stop offset="100%" stopColor="#ea7008" />
                                    </linearGradient>
                                    <linearGradient id="why-m-chev-white" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" />
                                        <stop offset="100%" stopColor="#f2ede6" />
                                    </linearGradient>
                                </defs>

                                {whyChooseUsNodes.map((item) => {
                                    const alpha = (item.angle * Math.PI) / 180;
                                    const hx = 230 + 98 * Math.cos(alpha);
                                    const hy = 230 - 98 * Math.sin(alpha);
                                    const hexPts = getHexPoints(hx, hy, 44, alpha);
                                    const chevPts = getChevronPoints(hx, hy, 44, alpha, 7, 8);
                                    const isHovered = hoveredWhyNode === item.id;
                                    const isOtherHovered = hasAnyHover && !isHovered;
                                    const isOrange = item.type === 'orange';

                                    const tip_x = hx + 59 * Math.cos(alpha);
                                    const tip_y = hy - 59 * Math.sin(alpha);

                                    return (
                                        <g
                                            key={item.id}
                                            onClick={() => setHoveredWhyNode(hoveredWhyNode === item.id ? null : item.id)}
                                            className="cursor-pointer"
                                            style={{
                                                transform: isHovered ? 'scale(1.15)' : isOtherHovered ? 'scale(0.96)' : 'scale(1)',
                                                transformOrigin: `${hx}px ${hy}px`,
                                                opacity: isOtherHovered ? 0.35 : 1,
                                                transition: 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)',
                                            }}
                                        >
                                            <polygon
                                                points={chevPts}
                                                fill={isOrange ? 'url(#why-m-chev-orange)' : 'url(#why-m-chev-white)'}
                                                stroke={isHovered ? '#ea7008' : isOrange ? '#ea7008' : '#ded6cb'}
                                                strokeWidth={isHovered ? '2' : '1.5'}
                                                filter="drop-shadow(0 4px 8px rgba(0,0,0,0.08))"
                                            />
                                            <polygon
                                                points={hexPts}
                                                fill={isOrange ? 'url(#why-m-hex-orange)' : 'url(#why-m-hex-white)'}
                                                stroke={isHovered ? '#ea7008' : isOrange ? '#ea7008' : '#ded6cb'}
                                                strokeWidth={isHovered ? '2' : '1.5'}
                                                filter="drop-shadow(0 4px 10px rgba(0,0,0,0.08))"
                                            />
                                            <line
                                                x1={hx}
                                                y1={hy}
                                                x2={tip_x}
                                                y2={tip_y}
                                                stroke={isOrange ? '#ffffff' : '#d2c9bd'}
                                                strokeWidth="1.2"
                                                strokeOpacity={isHovered ? 0.5 : 0.28}
                                                pointerEvents="none"
                                            />
                                        </g>
                                    );
                                })}
                            </svg>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                            {whyChooseUsNodes.map((item) => {
                                const isHovered = hoveredWhyNode === item.id;
                                const isOtherHovered = hasAnyHover && !isHovered;
                                return (
                                    <div
                                        key={item.id}
                                        onClick={() => setHoveredWhyNode(hoveredWhyNode === item.id ? null : item.id)}
                                        className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                                            isHovered
                                                ? 'bg-white border-[#ea7008]/60 shadow-lg scale-[1.02]'
                                                : isOtherHovered
                                                ? 'bg-white/40 border-transparent opacity-35 blur-[1.5px]'
                                                : 'bg-white/80 border-[#ebe5df]'
                                        }`}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="w-3 h-3 rounded-full border border-[#e5e0da]" style={{ backgroundColor: item.color }}></span>
                                            <h3 className={`text-lg font-bold font-display ${item.accentClass}`}>
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-[#5c544d] text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Our Process ──────────────────────────────────────── */}
            <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 py-24 sm:py-32 relative z-10">
                <div className="text-center mb-20">
                    <span className="section-label text-portfolio-gold">Our process</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#121110] max-w-2xl mx-auto mt-2 leading-[1.15]">
                        How an engagement with us works
                    </h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Connecting Timeline Line */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-portfolio-gold/35 to-transparent pointer-events-none" />

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
                                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-portfolio-gold border-4 border-white z-20 shadow-[0_0_15px_rgba(234,112,8,0.5)]" />

                                    {/* timeline card */}
                                    <div className={`w-full md:w-[45%] pl-14 md:pl-0 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                                        <div className="bg-white border border-[#ebe5df] p-8 rounded-3xl shadow-md hover:border-amber-500/30 transition-all duration-300 group cursor-target">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-2xl bg-[#faf8f5] border border-amber-500/20 flex items-center justify-center shrink-0">
                                                    <step.icon size={18} className="text-portfolio-gold" />
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-portfolio-gold font-mono">
                                                        Step 0{i + 1}
                                                    </span>
                                                    <h3 className="text-xl font-bold text-[#121110] mt-0.5">{step.title}</h3>
                                                </div>
                                            </div>
                                            <p className="text-[#5c544d] text-sm leading-relaxed">{step.description}</p>
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

            {/* ─── Frequently Asked Questions ────── */}
            <FAQSection withOuterContainer className="py-20 sm:py-28" />

            {/* ─── Final CTA ─────────────────────────────────────────── */}
            <section className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pb-24 sm:pb-32 relative z-10">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="relative bg-[#faf8f5] border border-portfolio-gold/35 hover:border-portfolio-gold/60 rounded-[2.5rem] px-8 sm:px-16 py-20 sm:py-28 text-center overflow-hidden shadow-[0_4px_30px_rgba(234,112,8,0.08)] transition-all duration-500"
                >
                    {/* Enhanced background glow layers */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-portfolio-gold/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#121110] mb-6 tracking-tight leading-none">
                            Ready to build something that lasts?
                        </h2>

                        <p className="text-[#5c544d] text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                            Tell us about your project and we&rsquo;ll get back to you with next steps — no
                            obligation, just a conversation.
                        </p>

                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <Link
                                to="/contact"
                                className="btn-primary inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest rounded-full px-8 py-4 cursor-target"
                            >
                                Request a quote <ArrowRight size={16} />
                            </Link>

                            <Link
                                to="/contact"
                                className="btn-ghost inline-flex items-center gap-2 text-[#121110] text-sm font-bold uppercase tracking-widest rounded-full px-8 py-4 cursor-target"
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