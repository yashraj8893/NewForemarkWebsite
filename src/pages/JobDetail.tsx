import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ArrowLeft, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { jobs } from '../data/jobs';

const JobDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const job = jobs.find(j => j.slug === slug);

    if (!job) {
        return (
            <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pt-12 sm:pt-16 pb-20 sm:pb-32 bg-[#0a0805] text-[#f9f5f1]">
                <p className="text-[#a3998e]">Job not found.</p>
                <Link to="/careers" className="text-portfolio-gold font-bold underline mt-4 inline-block cursor-target font-mono">
                    Back to Careers
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-[#0a0805] text-[#f9f5f1]">
            <SEO
                title={job.title + " — Foremark"}
                description={job.shortDesc}
                canonicalUrl={"https://foremark.in/careers/" + job.slug}
            />
            <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pt-12 sm:pt-16 pb-20 sm:pb-32">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <Link
                        to="/careers"
                        className="inline-flex items-center gap-2 text-[#a3998e] text-sm font-bold uppercase tracking-widest hover:text-portfolio-gold transition-colors cursor-target font-mono"
                    >
                        <ArrowLeft size={14} /> Back to Careers
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="mb-16 pb-16 border-b border-white/10"
                >
                    <span className="text-portfolio-gold font-bold text-xs tracking-widest uppercase block mb-4 font-mono">
                        {job.category}
                    </span>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-8">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                                {job.title}
                            </h1>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-1.5 text-portfolio-gold font-bold text-[10px] uppercase tracking-widest border border-amber-500/20 px-2.5 py-1 rounded-full bg-amber-500/5 font-mono">
                                    <MapPin size={10} /> {job.location}
                                </div>
                                <div className="flex items-center gap-1.5 text-[#a3998e] font-bold text-[10px] uppercase tracking-widest border border-white/10 px-2.5 py-1 rounded-full bg-white/5 font-mono">
                                    <Clock size={10} /> {job.type}
                                </div>
                            </div>
                        </div>
                        <a
                            href={(job as any).applyLink} target="_blank" rel="noopener noreferrer"
                            className="btn-primary inline-flex justify-center items-center gap-2 font-bold text-xs md:text-sm uppercase tracking-widest px-6 py-3 md:px-8 md:py-4 rounded-full cursor-target whitespace-nowrap w-fit mt-2 md:mt-0 font-mono"
                        >
                            Apply Now <ArrowUpRight size={16} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="max-w-4xl space-y-16"
                >
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-portfolio-gold mb-6 font-mono">About the Role</h2>
                        <p className="text-[#a3998e] leading-relaxed text-lg">{job.about}</p>
                    </div>
                    
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-portfolio-gold mb-6 font-mono">Responsibilities</h2>
                        <ul className="space-y-4">
                            {job.responsibilities.map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-[#a3998e] text-lg leading-relaxed">
                                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-portfolio-gold shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-portfolio-gold mb-6 font-mono">Requirements</h2>
                        <ul className="space-y-4">
                            {job.requirements.map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-[#a3998e] text-lg leading-relaxed">
                                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-portfolio-gold shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-portfolio-gold mb-6 font-mono">Benefits</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {job.benefits.map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-white font-medium text-base p-5 border border-white/[0.08] rounded-2xl bg-[#140f0a] hover:border-amber-500/30 transition-all">
                                    <div className="w-2 h-2 rounded-full bg-portfolio-gold shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    id="apply"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mt-24 pt-16 border-t border-white/10"
                >
                    <div className="max-w-xl">
                        <span className="text-portfolio-gold font-bold text-xs tracking-widest uppercase block mb-4 font-mono">Apply</span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Interested in this role?</h2>
                        <p className="text-[#a3998e] text-base leading-relaxed mb-10">
                            We would love to hear from you. Send us your resume and a short note about why you would be a great fit.
                        </p>
                        <div className="border border-white/[0.08] rounded-2xl p-8 bg-[#140f0a] shadow-xl">
                            <p className="text-[#a3998e] text-sm font-medium mb-6">
                                Ready to take the next step? Fill out our application form directly.
                            </p>
                            <a
                                href={(job as any).applyLink} target="_blank" rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-2 text-sm uppercase tracking-widest px-8 py-4 rounded-full cursor-target font-mono"
                            >
                                Apply Here <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default JobDetail;