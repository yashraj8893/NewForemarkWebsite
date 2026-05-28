import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ArrowUpRight, ChevronDown, MapPin, Clock } from 'lucide-react';
import { cn } from "../lib/utils";

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

const jobs = [
  {
    id: 1,
    title: "Product Designer",
    shortDesc: "We're looking for a mid-level product designer to join our team.",
    fullDesc: "As a Product Designer at Foremark, you will be responsible for creating beautiful, intuitive, and functional interfaces. You'll work closely with engineering and product teams to define the user experience and visual language of our projects. We value designers who are detail-oriented, have a strong sense of typography, and can think systematically about design.",
    category: "Design",
    location: "100% remote",
    type: "Full-time"
  },
  {
    id: 2,
    title: "Engineering Manager",
    shortDesc: "We're looking for an experienced engineering manager to join our team.",
    fullDesc: "Our Engineering Managers lead high-performing teams of software engineers. You'll be responsible for project delivery, technical strategy, and most importantly, the growth and development of your team members. You should have a strong technical background and a passion for building scalable, high-quality software systems.",
    category: "Development",
    location: "100% remote",
    type: "Full-time"
  },
  {
    id: 3,
    title: "Customer Success Manager",
    shortDesc: "We're looking for a customer success manager to join our team.",
    fullDesc: "The Customer Success Manager ensures our clients achieve their business goals through our services. You will build strong relationships, manage onboarding, and act as a strategic advisor. Excellent communication skills and a deep understanding of customer needs are essential for this role.",
    category: "Customer Service",
    location: "100% remote",
    type: "Full-time"
  },
  {
    id: 4,
    title: "Account Executive",
    shortDesc: "We're looking for an account executive to join our team.",
    fullDesc: "As an Account Executive, you will drive growth by identifying and winning new business opportunities. You'll manage the entire sales cycle, from prospecting to closing. We're looking for someone with a proven track record in sales and a passion for technology.",
    category: "Sales",
    location: "100% remote",
    type: "Full-time"
  },
  {
    id: 5,
    title: "SEO Marketing Manager",
    shortDesc: "We're looking for an experienced SEO marketing manager to join our team.",
    fullDesc: "The SEO Marketing Manager will lead our organic growth strategies. You'll optimize our digital presence, conduct keyword research, and manage content strategies to drive high-quality traffic. Experience with modern SEO tools and data-driven decision making is required.",
    category: "Marketing",
    location: "100% remote",
    type: "Full-time"
  }
];

const CareersPage = () => {
  const [activeCategory, setActiveCategory] = useState("View all");
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);

  const filteredJobs = activeCategory === "View all" 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory);

  const toggleJob = (id: number) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

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
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{job.title}</h3>
                      <button 
                        onClick={() => toggleJob(job.id)}
                        className={cn(
                          "w-8 h-8 rounded-full border border-portfolio-dark/10 flex items-center justify-center hover:bg-portfolio-dark/5 transition-all duration-300 cursor-target",
                          expandedJobId === job.id && "bg-portfolio-dark text-white border-portfolio-dark"
                        )}
                      >
                        <ChevronDown 
                          size={16} 
                          className={cn("transition-transform duration-300", expandedJobId === job.id && "rotate-180")} 
                        />
                      </button>
                    </div>
                    <p className="text-portfolio-muted text-lg mb-6 max-w-2xl leading-relaxed">{job.shortDesc}</p>
                    
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
                    <button className="flex items-center gap-2 text-portfolio-dark font-bold text-lg group/apply whitespace-nowrap cursor-target">
                      Apply <ArrowUpRight size={20} className="transition-transform group-hover/apply:translate-x-0.5 group-hover/apply:-translate-y-0.5" />
                    </button>
                  </div>
                </div>

                {/* Expandable Description */}
                <AnimatePresence>
                  {expandedJobId === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.21, 0.45, 0.32, 0.9] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 pb-4">
                        <div className="h-px w-full bg-portfolio-dark/5 mb-8" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                          <div className="md:col-span-2">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-portfolio-dark mb-4">About the role</h4>
                            <p className="text-portfolio-muted leading-relaxed text-lg">
                              {job.fullDesc}
                            </p>
                          </div>
                          <div className="space-y-8">
                            <div>
                              <h4 className="text-sm font-bold uppercase tracking-widest text-portfolio-dark mb-4">Requirements</h4>
                              <ul className="space-y-3 text-portfolio-muted text-sm">
                                <li>• 3+ years of professional experience</li>
                                <li>• Strong portfolio or GitHub presence</li>
                                <li>• Excellent communication skills</li>
                                <li>• Passion for engineering excellence</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-sm font-bold uppercase tracking-widest text-portfolio-dark mb-4">Benefits</h4>
                              <ul className="space-y-3 text-portfolio-muted text-sm">
                                <li>• Competitive salary + Equity</li>
                                <li>• Fully remote work policy</li>
                                <li>• Health & wellness allowance</li>
                                <li>• Learning & development budget</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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