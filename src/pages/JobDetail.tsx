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
            <div className="max-w-[1280px] mx-auto px-8 md:px-16 pt-16 pb-32">
                <p className="text-portfolio-muted">Job not found.</p>
                <Link to="/careers" className="text-portfolio-dark font-bold underline mt-4 inline-block cursor-target">
                    Back to Careers
                </Link>
            </div>
        );
    }

    return (
        <div>
            <SEO
                title={job.title + " — Foremark"}
                description={job.shortDesc}
                canonicalUrl={"https://foremark.in/careers/" + job.slug}
            />
            <div className="max-w-[1280px] mx-auto px-8 md:px-16 pt-16 pb-32">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <Link
                        to="/careers"
                        className="inline-flex items-center gap-2 text-portfolio-muted text-sm font-bold uppercase tracking-widest hover:text-portfolio-dark transition-colors cursor-target"
                    >
                        <ArrowLeft size={14} /> Back to Careers
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="mb-16 pb-16 border-b border-portfolio-dark/10"
                >
                    <span className="text-portfolio-gold font-bold text-xs tracking-widest uppercase block mb-4">
                        {job.category}
                    </span>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            {job.title}
                        </h1>
                        <a
                            href="#apply"
                            className="inline-flex items-center gap-2 bg-portfolio-dark text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-portfolio-dark/80 transition-all cursor-target whitespace-nowrap"
                        >
                            Apply Now <ArrowUpRight size={16} />
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-8">
                        <div className="flex items-center gap-1.5 text-portfolio-muted font-bold text-xxs uppercase tracking-widest border border-portfolio-dark/10 px-3 py-1 rounded-full bg-portfolio-dark/[0.02]">
                            <MapPin size={10} /> {job.location}
                        </div>
                        <div className="flex items-center gap-1.5 text-portfolio-muted font-bold text-xxs uppercase tracking-widest border border-portfolio-dark/10 px-3 py-1 rounded-full bg-portfolio-dark/[0.02]">
                            <Clock size={10} /> {job.type}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-16"
                >
                    <div className="md:col-span-2 space-y-14">
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-portfolio-dark mb-6">About the Role</h2>
                            <p className="text-portfolio-muted leading-relaxed text-lg">{job.about}</p>
                        </div>
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-portfolio-dark mb-6">Responsibilities</h2>
                            <ul className="space-y-4">
                                {job.responsibilities.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-portfolio-muted text-base leading-relaxed">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-portfolio-dark/30 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-14">
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-portfolio-dark mb-6">Requirements</h2>
                            <ul className="space-y-4">
                                {job.requirements.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-portfolio-muted text-sm leading-relaxed">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-portfolio-dark/30 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-portfolio-dark mb-6">Benefits</h2>
                            <ul className="space-y-4">
                                {job.benefits.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-portfolio-muted text-sm leading-relaxed">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-portfolio-dark/30 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    id="apply"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mt-24 pt-16 border-t border-portfolio-dark/10"
                >
                    <div className="max-w-xl">
                        <span className="text-portfolio-gold font-bold text-xs tracking-widest uppercase block mb-4">Apply</span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Interested in this role?</h2>
                        <p className="text-portfolio-muted text-base leading-relaxed mb-10">
                            We would love to hear from you. Send us your resume and a short note about why you would be a great fit.
                        </p>
                        <div className="border border-portfolio-dark/10 rounded-2xl p-8 bg-portfolio-dark/[0.02]">
                            <p className="text-portfolio-muted text-sm font-medium mb-6">
                                Application form coming soon. In the meantime, reach out to us directly.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-portfolio-dark text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-portfolio-dark/80 transition-all cursor-target"
                            >
                                Contact Us <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default JobDetail;