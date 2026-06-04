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

const CareersPage = () => {
  const [activeCategory, setActiveCategory] = useState("View all");

  const filteredJobs = activeCategory === "View all"
    ? jobs
    : jobs.filter(job => job.category === activeCategory);

  return (
    <>
      <SEO title="Careers" description="Join Foremark. We're always looking for talented engineers and designers who care about their craft." canonicalUrl="https://foremark.in/careers" />
      <div className="max-w-[1280px] mx-auto px-8 md:px-16 pt-16 pb-32">

        {/* Hero Section */}
        <div className="flex flex-col mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-portfolio-gold font-bold mb-3 text-xs tracking-widest uppercase block"
          >
            We're hiring
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Be part of <br /> our mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-portfolio-muted max-w-xl leading-relaxed"
          >
            We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.
          </motion.p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-16">
          {jobCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-target",
                activeCategory === category
                  ? "bg-portfolio-dark text-white"
                  : "border border-portfolio-dark/10 text-portfolio-muted hover:bg-portfolio-dark/5"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Jobs List */}
        <div className="space-y-0">
          {filteredJobs.map((job) => (
            <div key={job.id} className="border-t border-portfolio-dark/10 first:border-t-0">
              <div className="py-12 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex-1">
                    <Link to={`/careers/${job.slug}`}>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 hover:text-portfolio-gold transition-colors cursor-target">
                        {job.title}
                      </h3>
                    </Link>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-1.5 text-portfolio-muted font-bold text-xxs uppercase tracking-widest border border-portfolio-dark/10 px-3 py-1 rounded-full bg-portfolio-dark/[0.02]">
                        <MapPin size={10} /> {job.location}
                      </div>
                      <div className="flex items-center gap-1.5 text-portfolio-muted font-bold text-xxs uppercase tracking-widest border border-portfolio-dark/10 px-3 py-1 rounded-full bg-portfolio-dark/[0.02]">
                        <Clock size={10} /> {job.type}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Link
                      to={`/careers/${job.slug}`}
                      className="flex items-center gap-2 text-portfolio-dark font-bold text-lg group/apply whitespace-nowrap cursor-target hover:text-portfolio-gold transition-colors"
                    >
                      Apply <ArrowUpRight size={20} className="transition-transform group-hover/apply:translate-x-0.5 group-hover/apply:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-16 pt-16 border-t border-portfolio-dark/10">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 max-w-4xl leading-tight">
              Foremark truly values work-life balance. We work hard and deliver, but at the end of the day you can switch off.
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 grayscale">
                <img src="https://i.pravatar.cc/150?u=acc9" alt="Employee" className="w-full h-full object-cover" />
              </div>
              <p className="font-bold text-portfolio-dark">Rahul Sharma</p>
              <p className="text-sm text-portfolio-muted font-medium">Lead Developer, Foremark</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default CareersPage;