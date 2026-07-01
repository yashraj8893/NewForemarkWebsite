import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, ArrowUpRight, ArrowLeft } from 'lucide-react';
import type { BlogPost } from '../../data/blogPosts';
import { BlogCover } from './BlogCover';
import { Link } from 'react-router-dom';

interface BlogReaderProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BlogReader: React.FC<BlogReaderProps> = ({ post, isOpen, onClose }) => {
  // Lock body scroll when reader is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!post) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Shadow Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-portfolio-dark/45 backdrop-blur-xs z-50 cursor-target"
          />

          {/* Slide-over Reader Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-portfolio-bg z-[60] shadow-deep flex flex-col border-l border-portfolio-dark/10 h-full overflow-hidden"
          >
            {/* Header controls (fixed top) */}
            <div className="absolute top-4 left-4 z-20">
              <button
                onClick={onClose}
                className="flex items-center gap-1.5 px-4 py-2 bg-white/90 backdrop-blur-md text-portfolio-dark font-bold text-xs uppercase tracking-widest rounded-full border border-portfolio-dark/10 shadow-sm hover:bg-portfolio-dark hover:text-white transition-all cursor-target"
              >
                <ArrowLeft size={14} /> Back
              </button>
            </div>

            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center border border-portfolio-dark/10 text-portfolio-dark shadow-sm hover:bg-portfolio-dark hover:text-white transition-all cursor-target"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Reader Core */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              {/* Cover Header Graphic */}
              <div className="relative w-full aspect-[16/8] sm:aspect-[16/7] md:aspect-[16/6] bg-portfolio-dark">
                <BlogCover theme={post.coverTheme} className="h-full w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-bg via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Document Body Area */}
              <div className="px-6 py-8 sm:px-12 sm:py-12 md:px-14 flex flex-col">
                {/* Category Badging */}
                <div className="mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-portfolio-gold bg-portfolio-gold/5 border border-portfolio-gold/20 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Main Article Title */}
                <h1 className="text-2xl sm:text-3xl md:text-3.5xl font-extrabold tracking-tight text-portfolio-dark mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Authoring & Publishing Meta */}
                <div className="flex flex-wrap items-center gap-y-2.5 gap-x-5 text-[10px] text-portfolio-muted font-bold uppercase tracking-widest pb-6 border-b border-portfolio-dark/10 mb-8">
                  <span className="flex items-center gap-1.5">
                    <User size={11} className="text-portfolio-gold" />
                    By {post.author}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-muted/20" />
                  <span className="flex items-center gap-1.5">
                    <Calendar size={11} />
                    {post.date}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-portfolio-muted/20" />
                  <span className="flex items-center gap-1.5">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>

                {/* Article Abstract Excerpt */}
                <div className="text-portfolio-muted text-[15px] sm:text-base leading-relaxed border-l-2 border-portfolio-gold pl-5 sm:pl-6 mb-8 italic font-medium">
                  {post.excerpt}
                </div>

                {/* Text paragraphs content */}
                <div className="space-y-6 text-portfolio-text text-[15px] sm:text-base leading-[1.8] font-medium text-justify">
                  {post.content.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Custom CTA Widget inside article */}
                <div className="mt-14 pt-10 border-t border-portfolio-dark/10">
                  <div className="bg-portfolio-dark rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden flex flex-col items-center text-center">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                      <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
                        <path d="M0 200C100 150 200 180 300 120C400 60 500 100 600 80C700 60 800 120 1000 100" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                      </svg>
                    </div>
                    <span className="text-portfolio-gold font-bold mb-3 text-[10px] tracking-widest block uppercase">Bring ideas to life</span>
                    <h4 className="text-lg sm:text-xl font-bold tracking-tight mb-4 max-w-md">
                      Let's build scalable digital systems together
                    </h4>
                    <p className="text-xs sm:text-sm text-white/50 mb-6 max-w-sm">
                      Have a product design or engineering challenge? Foremark Technologies creates performant software for ambitious firms.
                    </p>
                    <Link
                      to="/contact"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 bg-portfolio-gold text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-white hover:text-portfolio-dark transition-all cursor-target"
                    >
                      Contact Our Team <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default BlogReader;
