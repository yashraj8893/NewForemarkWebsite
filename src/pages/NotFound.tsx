import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, MessageSquare, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist or has been moved."
        canonicalUrl="https://foremark.in/404"
        noindex
      />
      <main className="relative w-full overflow-hidden bg-white text-[#1a1816] selection:bg-[#ea7008] selection:text-white min-h-[78vh] flex items-center justify-center px-4">
        {/* Ambient orange glows */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-[#ea7008]/[0.07] blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-[#ea7008]/[0.05] blur-[150px] rounded-full pointer-events-none" />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 bg-[radial-gradient(rgba(234,112,8,0.18)_1.2px,transparent_1.2px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none opacity-60"
          aria-hidden="true"
        />

        <div className="relative z-10 text-center max-w-2xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.28em] text-portfolio-gold border border-portfolio-gold/35 bg-portfolio-gold/[0.06] rounded-full px-4 py-2 mb-8">
              <Compass size={13} /> Error 404
            </span>

            <h1 className="text-[5.5rem] sm:text-[8rem] md:text-[10rem] leading-[0.85] font-bold font-display tracking-tight text-[#121110] mb-6 select-none">
              4<span className="text-portfolio-gold">0</span>4
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display tracking-tight text-[#121110] mb-4">
              This page doesn't exist.
            </h2>

            <p className="text-sm sm:text-base text-portfolio-muted leading-relaxed max-w-md mx-auto mb-10">
              The link may be broken, or the page may have been moved. Let's get you
              back on track — or tell us what you were looking for.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                to="/"
                className="rounded-full inline-flex items-center justify-center gap-2 px-8 py-3 text-sm cursor-target font-semibold text-white bg-[#121110] hover:bg-[#252320] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.18)] border border-[#121110]"
              >
                Back to Home <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="btn-ghost rounded-full inline-flex items-center justify-center gap-2 px-8 py-3 text-sm cursor-target font-semibold"
              >
                <MessageSquare size={16} /> Contact Us
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-[#a8a29e]">
              <span className="w-8 h-px bg-[#ebe5df]" />
              foremark.in
              <span className="w-8 h-px bg-[#ebe5df]" />
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
