import { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ArrowUpRight, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from "../lib/utils";
import { jobs } from '../data/jobs';

const jobCategories = [
  "View all",
  "Development",
  "Design",
  "Marketing",
  "Customer Service",
  "Operations",
  "Finance",
  "Management"
];

const jobTypes = [
  "All Types",
  "Full-time",
  "Part-time",
  "Internship"
];

const CareersPage = () => {
  const [activeCategory, setActiveCategory] = useState("View all");
  const [activeType, setActiveType] = useState("All Types");

  const filteredJobs = jobs.filter(job => {
    const categoryMatch = activeCategory === "View all" || job.category === activeCategory;
    const typeMatch = activeType === "All Types" || job.type === activeType;
    return categoryMatch && typeMatch;
  });

  return (
    <>
      <SEO title="Careers" description="Join Foremark. We're always looking for talented engineers and designers who care about their craft." canonicalUrl="https://foremark.in/careers" />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pt-12 sm:pt-16 pb-20 sm:pb-32 bg-[#0a0805] text-[#f9f5f1]">

        {/* Hero Section */}
        <div className="flex flex-col mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-portfolio-gold font-bold mb-3 text-xs tracking-widest uppercase block font-mono"
          >
            We're hiring
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-white"
          >
            Be part of <br /> our mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#a3998e] max-w-xl leading-relaxed"
          >
            We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.
          </motion.p>
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap gap-3 mb-6">
          {jobTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={cn(
                "px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm rounded-full font-bold transition-all duration-300 cursor-target font-mono",
                activeType === type
                  ? "bg-portfolio-gold text-white shadow-[0_0_15px_rgba(234,112,8,0.3)]"
                  : "border border-white/10 text-[#a3998e] hover:text-white hover:bg-white/5"
              )}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-16">
          {jobCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm rounded-full font-bold transition-all duration-300 cursor-target font-mono",
                activeCategory === category
                  ? "bg-portfolio-gold text-white shadow-[0_0_15px_rgba(234,112,8,0.3)]"
                  : "border border-white/10 text-[#a3998e] hover:text-white hover:bg-white/5"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Jobs List */}
        <div className="space-y-0">
          {filteredJobs.map((job) => (
            <div key={job.id} className="border-t border-white/10 first:border-t-0">
              <div className="py-8 sm:py-12 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex-1">
                    <Link to={`/careers/${job.slug}`} className="inline-block w-fit mb-4">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white hover:text-portfolio-gold transition-colors">
                        {job.title}
                      </h3>
                    </Link>
                    <p className="text-[#a3998e] text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl">
                      {job.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1.5 text-portfolio-gold font-semibold text-[10px] uppercase tracking-widest border border-amber-500/20 px-2.5 py-1 rounded-full bg-amber-500/5 font-mono">
                        <MapPin size={12} /> {job.location}
                      </div>
                      <div className="flex items-center gap-1.5 text-[#a3998e] font-semibold text-[10px] uppercase tracking-widest border border-white/10 px-2.5 py-1 rounded-full bg-white/5 font-mono">
                        <Clock size={12} /> {job.type}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <a
                      href={(job as any).applyLink} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-portfolio-gold font-bold text-lg group/apply whitespace-nowrap cursor-target hover:brightness-125 transition-all font-mono"
                    >
                      Apply <ArrowUpRight size={20} className="transition-transform group-hover/apply:translate-x-0.5 group-hover/apply:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="flex flex-col items-center text-center px-4 md:px-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl leading-tight text-white">
              <span className="text-portfolio-gold font-serif">“</span>
              Foremark truly values work-life balance. We work hard and deliver, but at the end of the day you can switch off.
              <span className="text-portfolio-gold font-serif">”</span>
            </h2>
          </div>
        </div>

        {/* Drop Resume Section */}
        <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-white/10 mb-8">
          <div className="flex flex-col items-center text-center px-4 md:px-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">
              Don't see a perfect fit?
            </h2>
            <p className="text-[#a3998e] text-lg max-w-2xl mb-8">
              Drop your resume and portfolio if you think you can join our team. We're always on the lookout for talented individuals.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2 text-sm uppercase tracking-widest px-8 py-4 rounded-full cursor-target"
            >
              Submit Resume <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default CareersPage;