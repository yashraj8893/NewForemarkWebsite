import React from 'react';
import { ArrowUpRight, Clock, User, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../../data/blogPosts';
import { BlogCover } from './BlogCover';

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

interface FieldNoteCardProps extends BlogCardProps {
  indexNumber: string; // e.g. "02", "03"
}

// ─── 1. LEAD STORY CARD (Hero Dominant Editorial Card) ───────────────────────
export const LeadStoryCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <article
      onClick={() => onClick(post)}
      className="group relative flex flex-col justify-between h-full bg-[#0d0d0f] text-white border border-white/10 rounded-[2rem] p-6 sm:p-8 md:p-10 overflow-hidden shadow-2xl hover:border-portfolio-gold/40 transition-all duration-500 cursor-target select-none"
    >
      {/* Subtle atmospheric gold ambient warmth */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-portfolio-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div>
        {/* Top Masthead Line */}
        <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-portfolio-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-portfolio-gold"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-portfolio-gold">
              01 · Cover Story
            </span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/70">
            {post.category}
          </span>
        </div>

        {/* Visual Frame */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-white/10 bg-[#070708]">
          <BlogCover
            theme={post.coverTheme}
            className="transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 group-hover:text-portfolio-gold transition-colors duration-300 leading-[1.15]">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      {/* Footer Meta & Action */}
      <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/10 mt-auto">
        <div className="flex items-center gap-4 text-xs text-white/50 font-semibold uppercase tracking-wider">
          <span className="flex items-center gap-1.5 text-white/70">
            <User size={13} className="text-portfolio-gold" />
            {post.author}
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {post.readTime}
          </span>
        </div>

        <button className="inline-flex items-center gap-2 bg-portfolio-gold text-white font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
          Read Dispatch <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </article>
  );
};

// ─── 2. FIELD NOTE CARD (Hero Right Column Stack) ───────────────────────────
export const FieldNoteCard: React.FC<FieldNoteCardProps> = ({ post, indexNumber, onClick }) => {
  return (
    <article
      onClick={() => onClick(post)}
      className="group py-6 first:pt-0 last:pb-0 flex flex-col justify-between transition-all duration-300 cursor-target select-none"
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-mono font-bold text-portfolio-gold/70 group-hover:text-portfolio-gold transition-colors">
            № {indexNumber}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-portfolio-muted">
            {post.category}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-portfolio-muted font-medium">
          <Clock size={12} className="text-portfolio-gold" />
          <span>{post.readTime}</span>
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-portfolio-dark group-hover:text-portfolio-gold transition-colors duration-300 mb-2 leading-snug">
        {post.title}
      </h3>

      <p className="text-portfolio-muted text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between text-xs text-portfolio-muted/80">
        <span className="font-semibold text-portfolio-dark/70 text-[11px] uppercase tracking-wider">
          {post.author}
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-portfolio-dark group-hover:text-portfolio-gold transition-colors">
          Read <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </article>
  );
};

// ─── 3. WIDE EDITORIAL CARD (Feature row breaking grid monotony) ─────────────
export const WideEditorialCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <article
      onClick={() => onClick(post)}
      className="group grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 p-6 sm:p-8 bg-white border border-portfolio-dark/10 rounded-3xl hover:border-portfolio-gold/40 hover:shadow-xl transition-all duration-500 cursor-target select-none"
    >
      {/* Visual Cover */}
      <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden border border-portfolio-dark/5 bg-[#0e0e10]">
        <BlogCover
          theme={post.coverTheme}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="text-[9px] font-bold uppercase tracking-widest bg-white/90 backdrop-blur-sm text-portfolio-dark border border-portfolio-dark/10 px-2.5 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Text Details */}
      <div className="lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-portfolio-muted font-bold uppercase tracking-widest mb-3">
            <span className="text-portfolio-gold">Editorial Spotlight</span>
            <span className="w-1 h-1 rounded-full bg-portfolio-dark/20" />
            <span>{post.date}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-portfolio-dark group-hover:text-portfolio-gold transition-colors duration-300 mb-3 leading-tight">
            {post.title}
          </h3>

          <p className="text-portfolio-muted text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-portfolio-dark/10 mt-auto">
          <div className="flex items-center gap-3 text-xs text-portfolio-muted font-semibold">
            <span className="flex items-center gap-1.5 text-portfolio-dark font-bold">
              <User size={12} className="text-portfolio-gold" />
              {post.author}
            </span>
            <span className="w-1 h-1 rounded-full bg-portfolio-dark/20" />
            <span>{post.readTime}</span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-portfolio-dark font-bold text-xs uppercase tracking-widest group-hover:text-portfolio-gold transition-colors">
            Read Article <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </article>
  );
};

// ─── 4. EDITORIAL GRID CARD (Clean bookbinding cards for dispatches) ─────────
export const EditorialGridCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <article
      onClick={() => onClick(post)}
      className="group flex flex-col h-full bg-white border border-portfolio-dark/10 rounded-3xl p-5 sm:p-6 overflow-hidden hover:border-portfolio-gold/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-400 cursor-target select-none"
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-portfolio-dark/5 mb-5 bg-[#0e0e10]">
        <BlogCover
          theme={post.coverTheme}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="text-[9px] font-bold uppercase tracking-widest bg-white/95 backdrop-blur-sm text-portfolio-dark border border-portfolio-dark/10 px-2.5 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Meta Top */}
      <div className="flex items-center gap-2.5 text-[10px] text-portfolio-muted font-bold uppercase tracking-widest mb-2.5">
        <span>{post.date}</span>
        <span className="w-1 h-1 rounded-full bg-portfolio-muted/30" />
        <span>{post.readTime}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold tracking-tight text-portfolio-dark group-hover:text-portfolio-gold transition-colors duration-300 mb-3 leading-snug line-clamp-2">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-portfolio-muted text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
        {post.excerpt}
      </p>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-portfolio-dark/10 text-xs mt-auto">
        <span className="text-portfolio-muted font-semibold flex items-center gap-1.5 text-[11px]">
          <User size={12} className="text-portfolio-gold" />
          {post.author.split(' ')[0]}
        </span>
        <span className="inline-flex items-center gap-1 font-bold text-xs uppercase tracking-widest text-portfolio-dark group-hover:text-portfolio-gold transition-colors">
          Read More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </article>
  );
};

// Aliases for backwards compatibility
export const FeaturedBlogCard = LeadStoryCard;
export const SecondaryBlogCard = EditorialGridCard;
export const StandardBlogCard = EditorialGridCard;
