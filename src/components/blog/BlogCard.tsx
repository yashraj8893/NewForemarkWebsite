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
      className="group relative flex flex-col justify-between h-full bg-[#140f0a] text-white border border-portfolio-gold/35 hover:border-portfolio-gold/65 rounded-[2rem] p-6 sm:p-8 md:p-10 overflow-hidden shadow-[0_0_40px_rgba(234,112,8,0.1)] hover:shadow-[0_0_55px_rgba(234,112,8,0.2)] transition-all duration-500 cursor-target select-none"
    >
      {/* Subtle atmospheric gold ambient warmth */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-portfolio-gold/10 blur-[100px] rounded-full pointer-events-none" />

      <div>
        {/* Top Masthead Line */}
        <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-portfolio-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-portfolio-gold"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-portfolio-gold font-mono">
              01 · Cover Story
            </span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-portfolio-gold font-mono">
            {post.category}
          </span>
        </div>

        {/* Visual Frame */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-white/10 bg-[#070503]">
          <BlogCover
            theme={post.coverTheme}
            className="transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140f0a]/90 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white group-hover:text-portfolio-gold transition-colors duration-300 leading-[1.15]">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-[#a3998e] text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      {/* Footer Meta & Action */}
      <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/10 mt-auto">
        <div className="flex items-center gap-4 text-xs text-white/50 font-semibold uppercase tracking-wider font-mono">
          <span className="flex items-center gap-1.5 text-white/80">
            <User size={13} className="text-portfolio-gold" />
            {post.author}
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {post.readTime}
          </span>
        </div>

        <button className="btn-primary inline-flex items-center gap-2 text-xs uppercase tracking-widest px-5 py-2.5 rounded-full cursor-target">
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
          <span className="text-xs font-mono font-bold text-portfolio-gold group-hover:brightness-125 transition-all">
            № {indexNumber}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-portfolio-gold/70 font-mono">
            {post.category}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-[#a3998e] font-medium font-mono">
          <Clock size={12} className="text-portfolio-gold" />
          <span>{post.readTime}</span>
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-portfolio-gold transition-colors duration-300 mb-2 leading-snug">
        {post.title}
      </h3>

      <p className="text-[#a3998e] text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between text-xs text-[#a3998e]">
        <span className="font-semibold text-white/80 text-[11px] uppercase tracking-wider font-mono">
          {post.author}
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-portfolio-gold hover:brightness-125 transition-all font-mono">
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
      className="group grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 p-6 sm:p-8 bg-[#140f0a] border border-portfolio-gold/35 hover:border-portfolio-gold/65 rounded-3xl shadow-[0_0_35px_rgba(234,112,8,0.08)] hover:shadow-[0_0_50px_rgba(234,112,8,0.18)] transition-all duration-500 cursor-target select-none"
    >
      {/* Visual Cover */}
      <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-[#070503]">
        <BlogCover
          theme={post.coverTheme}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="text-[9px] font-bold uppercase tracking-widest bg-[#140f0a]/90 backdrop-blur-sm text-portfolio-gold border border-amber-500/20 px-2.5 py-1 rounded-full font-mono">
            {post.category}
          </span>
        </div>
      </div>

      {/* Text Details */}
      <div className="lg:col-span-7 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-[#a3998e] font-bold uppercase tracking-widest mb-3 font-mono">
            <span className="text-portfolio-gold">Editorial Spotlight</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>{post.date}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-portfolio-gold transition-colors duration-300 mb-3 leading-tight">
            {post.title}
          </h3>

          <p className="text-[#a3998e] text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] mt-auto">
          <div className="flex items-center gap-3 text-xs text-[#a3998e] font-semibold font-mono">
            <span className="flex items-center gap-1.5 text-white font-bold">
              <User size={12} className="text-portfolio-gold" />
              {post.author}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>{post.readTime}</span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-portfolio-gold font-bold text-xs uppercase tracking-widest group-hover:brightness-125 transition-all font-mono">
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
      className="group flex flex-col h-full bg-[#140f0a] border border-portfolio-gold/35 hover:border-portfolio-gold/65 rounded-3xl p-5 sm:p-6 overflow-hidden hover:-translate-y-1 shadow-[0_0_30px_rgba(234,112,8,0.08)] hover:shadow-[0_0_45px_rgba(234,112,8,0.18)] transition-all duration-400 cursor-target select-none"
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 mb-5 bg-[#070503]">
        <BlogCover
          theme={post.coverTheme}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="text-[9px] font-bold uppercase tracking-widest bg-[#140f0a]/90 backdrop-blur-sm text-portfolio-gold border border-amber-500/20 px-2.5 py-1 rounded-full font-mono">
            {post.category}
          </span>
        </div>
      </div>

      {/* Meta Top */}
      <div className="flex items-center gap-2.5 text-[10px] text-[#a3998e] font-bold uppercase tracking-widest mb-2.5 font-mono">
        <span>{post.date}</span>
        <span className="w-1 h-1 rounded-full bg-white/20" />
        <span>{post.readTime}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-portfolio-gold transition-colors duration-300 mb-3 leading-snug line-clamp-2">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-[#a3998e] text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
        {post.excerpt}
      </p>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] text-xs mt-auto">
        <span className="text-[#a3998e] font-semibold flex items-center gap-1.5 text-[11px] font-mono">
          <User size={12} className="text-portfolio-gold" />
          {post.author.split(' ')[0]}
        </span>
        <span className="inline-flex items-center gap-1 font-bold text-xs uppercase tracking-widest text-portfolio-gold group-hover:brightness-125 transition-all font-mono">
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
