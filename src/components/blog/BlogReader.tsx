import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, ArrowUpRight, ArrowLeft, Share2, Check } from 'lucide-react';
import type { BlogPost } from '../../data/blogPosts';
import { BlogCover } from './BlogCover';
import { Link } from 'react-router-dom';
import { useLenis } from '../SmoothScroll';

interface BlogReaderProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BlogReader: React.FC<BlogReaderProps> = ({ post, isOpen, onClose }) => {
  const { lenis } = useLenis();
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Lock body scroll, pause Lenis smooth scroll, and add Escape key listener
  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        lenis?.start();
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      lenis?.start();
      document.body.style.overflow = '';
      setScrollProgress(0);
      setCopied(false);
    }
  }, [isOpen, onClose, lenis]);

  // Track scroll position inside the modal for reading progress bar
  const handleScroll = () => {
    if (!contentRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
    const total = scrollHeight - clientHeight;
    if (total > 0) {
      setScrollProgress(Math.min(100, Math.max(0, (scrollTop / total) * 100)));
    }
  };

  const handleShare = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!post) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 lg:p-10">
          {/* Deep Cinematic Ambient Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
            className="fixed inset-0 bg-portfolio-dark/75 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Centered Cinematic Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{
              duration: 0.38,
              ease: [0.16, 1, 0.3, 1]
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[92vh] bg-portfolio-bg rounded-2xl sm:rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.08)] border border-portfolio-dark/10 flex flex-col overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-article-title"
          >
            {/* Live Reading Progress Indicator Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-portfolio-dark/5 z-30">
              <div
                className="h-full bg-portfolio-gold transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>

            {/* Frosted Glass Sticky HUD Controls */}
            <div className="sticky top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3.5 bg-portfolio-bg/85 backdrop-blur-md border-b border-portfolio-dark/10">
              {/* Left: Back Button */}
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-portfolio-dark/10 text-portfolio-dark text-[11px] font-bold uppercase tracking-wider hover:bg-portfolio-dark hover:text-white transition-all shadow-xs group cursor-pointer"
              >
                <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-0.5" />
                <span>Back</span>
              </button>

              {/* Center: Live Post Breadcrumb / Category */}
              <div className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-portfolio-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-portfolio-gold" />
                <span className="text-portfolio-dark">{post.category}</span>
                <span className="text-portfolio-dark/20">•</span>
                <span>{post.readTime}</span>
              </div>

              {/* Right: Actions (Share + Close + ESC badge) */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  title="Copy link"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-portfolio-dark/10 text-portfolio-muted hover:text-portfolio-dark text-[11px] font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-600" />
                      <span className="text-emerald-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 size={13} />
                      <span>Share</span>
                    </>
                  )}
                </button>

                <span className="hidden md:inline-block text-[10px] uppercase font-mono tracking-widest text-portfolio-muted/60 bg-portfolio-dark/5 px-2 py-1 rounded border border-portfolio-dark/5">
                  ESC
                </span>

                <button
                  onClick={onClose}
                  aria-label="Close reader"
                  className="w-8 h-8 rounded-full bg-white/90 border border-portfolio-dark/10 flex items-center justify-center text-portfolio-dark hover:bg-portfolio-dark hover:text-white transition-all shadow-xs cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Scrollable Document Container */}
            <div
              ref={contentRef}
              data-lenis-prevent="true"
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto overflow-x-hidden focus:outline-none"
              tabIndex={0}
            >
              {/* Cinematic Cover Banner */}
              <div className="relative w-full aspect-[21/9] sm:aspect-[24/8] md:aspect-[21/7] bg-portfolio-dark overflow-hidden flex items-center justify-center">
                <BlogCover theme={post.coverTheme} className="h-full w-full object-cover scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-bg via-portfolio-bg/25 to-transparent pointer-events-none" />

                {/* Floating category badge on banner */}
                <div className="absolute bottom-4 left-6 sm:left-10 md:left-14 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-portfolio-gold bg-portfolio-dark/90 backdrop-blur-md border border-portfolio-gold/30 px-3.5 py-1 rounded-full shadow-md">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Main Document Content */}
              <article className="px-6 py-8 sm:px-10 sm:py-10 md:px-14 lg:px-16 flex flex-col">
                {/* Article Headline */}
                <h1
                  id="modal-article-title"
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-portfolio-dark mb-6 leading-tight"
                >
                  {post.title}
                </h1>

                {/* Author & Publishing Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-portfolio-dark/10 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-portfolio-gold/15 border border-portfolio-gold/30 flex items-center justify-center text-portfolio-gold font-bold text-sm">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-portfolio-dark">{post.author}</div>
                      <div className="text-[11px] text-portfolio-muted uppercase tracking-wider font-semibold">Technical Dispatch</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-portfolio-muted font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-portfolio-gold" />
                      {post.date}
                    </span>
                    <span className="text-portfolio-dark/20">•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-portfolio-gold" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Pull-quote / Excerpt Lead */}
                <div className="bg-portfolio-card/50 rounded-2xl p-6 sm:p-7 border-l-4 border-portfolio-gold mb-10 shadow-xs">
                  <p className="text-portfolio-dark/85 text-base sm:text-lg italic font-medium leading-relaxed">
                    "{post.excerpt}"
                  </p>
                </div>

                {/* Formatted Article Body */}
                <div className="space-y-6 text-portfolio-text/90 text-[15px] sm:text-[17px] leading-[1.85] font-normal text-justify sm:text-left">
                  {post.content.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Bottom Architectural Callout Banner */}
                <div className="mt-14 pt-10 border-t border-portfolio-dark/10">
                  <div className="bg-portfolio-dark rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                      <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
                        <path d="M0 200C100 150 200 180 300 120C400 60 500 100 600 80C700 60 800 120 1000 100" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                      </svg>
                    </div>

                    <div className="relative z-10 text-center sm:text-left max-w-md">
                      <span className="text-portfolio-gold font-bold mb-2 text-[10px] tracking-widest block uppercase">
                        Engineering Partner
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold tracking-tight mb-2">
                        Let's build scalable digital systems together
                      </h4>
                      <p className="text-xs sm:text-sm text-white/60">
                        Have an engineering or product design challenge? Foremark creates performant software for ambitious teams.
                      </p>
                    </div>

                    <Link
                      to="/contact"
                      onClick={onClose}
                      className="relative z-10 inline-flex items-center gap-2 bg-portfolio-gold text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-white hover:text-portfolio-dark transition-all shrink-0 shadow-lg cursor-pointer"
                    >
                      <span>Start Conversation</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>

                  {/* Bottom Footer Action */}
                  <div className="flex items-center justify-between mt-8 pt-4">
                    <button
                      onClick={onClose}
                      className="inline-flex items-center gap-2 text-portfolio-muted hover:text-portfolio-dark text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <ArrowLeft size={13} /> Back to all dispatches
                    </button>

                    <button
                      onClick={() => {
                        contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-[11px] text-portfolio-gold hover:underline font-bold uppercase tracking-wider cursor-pointer"
                    >
                      Back to top ↑
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BlogReader;
