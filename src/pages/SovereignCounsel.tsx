import { motion } from 'framer-motion';
import { InteractiveGridPattern } from '../components/magicui/interactive-grid-pattern';
import { cn } from '../lib/utils';
import { Hammer, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';

const SovereignCounselPage = () => {
  return (
    <>
      <SEO 
        title="Sovereign Counsel | Legal Case Management SaaS" 
        description="A comprehensive SaaS solution built to streamline legal workflows, manage cases with precision, and elevate client communication."
      />
      <div className="max-w-[1280px] mx-auto px-8 md:px-16 pt-16 pb-32">
        <div className="flex flex-col mb-16 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-portfolio-gold font-bold mb-3 text-xs tracking-widest uppercase block"
          >
            SOVEREIGN COUNSEL
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Case Management <br /> for Law Firms
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-portfolio-muted max-w-xl leading-relaxed"
          >
            A comprehensive SaaS solution built to streamline legal workflows, manage cases with precision, and elevate client communication.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative bg-[#1a1a1a] rounded-4xl p-12 md:p-24 text-white overflow-hidden flex flex-col items-center text-center min-h-[500px] justify-center"
        >
          <InteractiveGridPattern
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[160%] skew-y-12 opacity-30"
            )}
          />
          
          <div className="relative z-10 max-w-2xl flex flex-col items-center">
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-portfolio-gold mb-8 shadow-2xl shadow-portfolio-gold/10">
              <Hammer size={32} />
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-portfolio-gold/20 bg-portfolio-gold/10 text-portfolio-gold text-[10px] font-bold uppercase tracking-widest mb-6">
              <Clock size={12} /> In Development
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              We are crafting something extraordinary.
            </h2>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              Sovereign Counsel is currently in active development. We're engineering a state-of-the-art platform that will redefine how law firms operate and manage their digital ecosystem.
            </p>
            <button className="bg-white text-portfolio-dark font-bold px-8 py-4 rounded-full hover:bg-portfolio-gold hover:scale-105 transition-all shadow-xl shadow-white/5 uppercase tracking-widest text-sm cursor-target">
              Join Waitlist
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SovereignCounselPage;
