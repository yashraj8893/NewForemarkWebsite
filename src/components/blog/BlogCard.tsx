import React from 'react';
import { ArrowUpRight, Calendar, Clock, User } from 'lucide-react';
import type { BlogPost } from '../../data/blogPosts';
import { BlogCover } from './BlogCover';

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

// ─── 1. HERO FEATURED ARTICLE (Horizontal Dark Card) ───────────────────────────
export const FeaturedBlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <div
      onClick={() => onClick(post)}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 border border-portfolio-dark/10 rounded-3xl md:rounded-4xl overflow-hidden bg-portfolio-dark text-white hover:shadow-deep transition-all duration-500 cursor-target select-none"
    >
      {/* Decorative Warm Accent Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-portfolio-gold/[0.04] blur-[100px] rounded-full pointer-events-none" />

      {/* Visual Cover (Right on desktop, Top on mobile) */}
      <div className="lg:col-span-5 order-1 lg:order-2 relative aspect-[16/10] lg:aspect-auto min-h-[260px] lg:min-h-full overflow-hidden border-b lg:border-b-0 lg:border-l border-white/10">
        <BlogCover
          theme={post.coverTheme}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-portfolio-dark via-transparent to-transparent opacity-80 lg:opacity-60 pointer-events-none" />
      </div>

      {/* Content Column */}
      <div className="lg:col-span-7 order-2 lg:order-1 p-6 sm:p-10 md:p-14 flex flex-col justify-between relative z-10">
        <div>
          {/* Category Tag */}
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-portfolio-gold border border-portfolio-gold/30 px-3.5 py-1.5 rounded-full mb-6">
            {post.category}
          </span>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3.5xl font-bold tracking-tight mb-4 group-hover:text-portfolio-gold transition-colors duration-300 leading-tight">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            {post.excerpt}
          </p>
        </div>

        {/* Footer Meta & CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10 mt-auto">
          {/* Author and Readtime Info */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-white/55 font-semibold uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <User size={12} className="text-portfolio-gold" />
              {post.author}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {post.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          {/* Pill CTA button */}
          <button className="self-start sm:self-center inline-flex items-center gap-2 bg-white text-portfolio-dark font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-portfolio-gold hover:text-white transition-all duration-300 shadow-md">
            Read Article <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── 2. SECONDARY FEATURED CARD (Mid-size Grid Card) ──────────────────────────
export const SecondaryBlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <div
      onClick={() => onClick(post)}
      className="group flex flex-col border border-portfolio-dark/10 rounded-3xl overflow-hidden bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 cursor-target select-none"
    >
      {/* Cover Image Block */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-portfolio-dark/5">
        <BlogCover
          theme={post.coverTheme}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Details */}
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        {/* Category tag */}
        <span className="text-[10px] font-bold uppercase tracking-widest text-portfolio-gold mb-3 block">
          {post.category}
        </span>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-3 group-hover:text-portfolio-gold transition-colors duration-300 line-clamp-2 leading-tight">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-portfolio-muted text-sm leading-relaxed mb-6 flex-1 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Footer info */}
        <div className="flex items-center justify-between text-xs text-portfolio-muted font-semibold uppercase tracking-widest pt-4 border-t border-portfolio-dark/10 mt-auto">
          <div className="flex items-center gap-1.5">
            <User size={12} className="text-portfolio-gold/75" />
            <span>{post.author.split(' ').pop()}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>{post.date.split(',')[0]}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-muted/30" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── 3. STANDARD LATEST CARD (Classic list/grid card) ──────────────────────────
export const StandardBlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <div
      onClick={() => onClick(post)}
      className="group flex flex-col border border-portfolio-dark/10 rounded-3xl overflow-hidden bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 cursor-target select-none h-full"
    >
      {/* Cover SVG */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-portfolio-dark/5">
        <BlogCover
          theme={post.coverTheme}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Category Badge overlay */}
        <div className="absolute top-4 left-4">
          <span className="text-[9px] font-bold uppercase tracking-widest bg-white/95 border border-portfolio-dark/10 text-portfolio-dark px-3 py-1 rounded-full backdrop-blur-sm">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-6 flex flex-col flex-1">
        {/* Top meta */}
        <div className="flex items-center gap-4 text-[10px] text-portfolio-muted font-bold uppercase tracking-widest mb-3">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-portfolio-muted/30" />
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold tracking-tight mb-3 group-hover:text-portfolio-gold transition-colors duration-300 line-clamp-2 leading-tight">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-portfolio-muted text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Action button at bottom */}
        <div className="pt-4 border-t border-portfolio-dark/10 flex items-center justify-between mt-auto">
          <span className="text-xs text-portfolio-muted font-bold flex items-center gap-1">
            <User size={11} className="text-portfolio-gold" />
            {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5 text-portfolio-dark font-bold text-xs uppercase tracking-widest group-hover:text-portfolio-gold transition-colors">
            Read More
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-portfolio-dark group-hover:text-portfolio-gold" />
          </span>
        </div>
      </div>
    </div>
  );
};
