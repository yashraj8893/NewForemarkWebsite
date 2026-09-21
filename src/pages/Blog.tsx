import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ArrowUpRight, Search, Mail, Sparkles, SlidersHorizontal, ArrowRight, X } from 'lucide-react';
import { cn } from "../lib/utils";
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '../data/blogPosts';
import type { BlogPost } from '../data/blogPosts';

// Refined Editorial Subcomponents
import {
    LeadStoryCard,
    FieldNoteCard,
    WideEditorialCard,
    EditorialGridCard
} from '../components/blog/BlogCard';
import { BlogReader } from '../components/blog/BlogReader';

const BlogPage = () => {
    const [activeCategory, setActiveCategory] = useState("View all");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [isReaderOpen, setIsReaderOpen] = useState(false);

    // Cover story: index 0 (or marked featured)
    const leadPost = useMemo(() => blogPosts.find(p => p.featured) || blogPosts[0], []);

    // Field notes for hero right column: 3 curated dispatches (indices 1, 2, 3)
    const fieldNotesPosts = useMemo(() => blogPosts.filter(p => p.id !== leadPost.id).slice(0, 3), [leadPost]);

    // Compute post counts per category for masthead tags
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { "View all": blogPosts.length };
        blogPosts.forEach(post => {
            counts[post.category] = (counts[post.category] || 0) + 1;
        });
        return counts;
    }, []);

    // Filtered archive posts based on active category and search query
    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const categoryMatch = activeCategory === "View all" || post.category === activeCategory;
            const query = searchQuery.toLowerCase().trim();
            const searchMatch =
                !query ||
                post.title.toLowerCase().includes(query) ||
                post.excerpt.toLowerCase().includes(query) ||
                post.author.toLowerCase().includes(query) ||
                post.category.toLowerCase().includes(query);
            return categoryMatch && searchMatch;
        });
    }, [activeCategory, searchQuery]);

    // Handle opening slide-over reader
    const handlePostClick = (post: BlogPost) => {
        setSelectedPost(post);
        setIsReaderOpen(true);
    };

    // Stagger animation helpers
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            }
        }
    };

    const itemFade = {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
    };

    return (
        <>
            {/* Search Engine Optimization meta information */}
            <SEO
                title="The Journal | Insights & Ideas | Foremark Technologies"
                description="Insights on engineering first principles, observability, infrastructure, and product design from the Foremark Technologies team."
                canonicalUrl="https://foremark.in/blog"
            />

            <main className="relative w-full overflow-hidden bg-portfolio-bg selection:bg-portfolio-gold/30">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pt-8 sm:pt-12 pb-20 sm:pb-32">


                    {/* ─── HERO HEADER ─────────────────────────────────────────── */}
                    <motion.header
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col mb-12"
                    >
                        {/* Eyebrow Label - EXACT STYLING PRESERVED */}
                        <motion.span
                            variants={itemFade}
                            className="text-portfolio-gold font-bold mb-3 text-xs tracking-widest uppercase block"
                        >
                            The Foremark Journal
                        </motion.span>

                        {/* Heading - EXACT STYLING PRESERVED */}
                        <motion.h1
                            variants={itemFade}
                            className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-portfolio-dark mb-4 sm:mb-6"
                        >
                            Stories, Insights <br /> & Inspiration
                        </motion.h1>

                        {/* Paragraph - EXACT STYLING PRESERVED */}
                        <motion.p
                            variants={itemFade}
                            className="text-base text-portfolio-muted max-w-xl leading-relaxed mb-8"
                        >
                            Thoughts on building with an engineering first mentality, designing scalable platforms,
                            and creating robust technology solutions that drive digital transformation.
                        </motion.p>
                    </motion.header>

                    {/* ─── THE EDITORIAL SPREAD (7:5 ASYMMETRIC HERO LAYOUT) ───── */}
                    <section className="mb-20 sm:mb-28">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                            {/* Left Column (7 cols): Dominant Cover Story */}
                            <div className="lg:col-span-7 flex flex-col">
                                {leadPost && (
                                    <LeadStoryCard post={leadPost} onClick={handlePostClick} />
                                )}
                            </div>

                            {/* Right Column (5 cols): Curated Field Notes Stack */}
                            <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-portfolio-dark/10 rounded-[2rem] p-6 sm:p-8 shadow-sm">
                                <div>
                                    <div className="flex items-center justify-between pb-4 mb-2 border-b border-portfolio-dark/10">
                                        <div className="flex items-center gap-2">
                                            <Sparkles size={14} className="text-portfolio-gold" />
                                            <h2 className="text-xs font-bold uppercase tracking-widest text-portfolio-dark">
                                                Curated Field Notes
                                            </h2>
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-portfolio-muted">
                                            Editor's Selection
                                        </span>
                                    </div>

                                    {/* Stacked Field Notes with Hairline Dividers */}
                                    <div className="divide-y divide-portfolio-dark/10">
                                        {fieldNotesPosts.map((post, index) => (
                                            <FieldNoteCard
                                                key={post.id}
                                                post={post}
                                                indexNumber={`0${index + 2}`}
                                                onClick={handlePostClick}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-5 mt-4 border-t border-portfolio-dark/10 flex items-center justify-between text-xs">
                                    <span className="text-portfolio-muted font-medium">
                                        Deep technical articles & case notes
                                    </span>
                                    <a
                                        href="#dispatches-archive"
                                        className="inline-flex items-center gap-1 font-bold text-portfolio-gold hover:text-portfolio-dark transition-colors cursor-target"
                                    >
                                        Jump to archive <ArrowRight size={12} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ─── ARCHITECTURAL MASTHEAD FILTER & SEARCH BAR ─────────── */}
                    <section id="dispatches-archive" className="scroll-mt-8 mb-12 sm:mb-16">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-y border-portfolio-dark/10">

                            {/* Category Filter Tabs with Live Counters */}
                            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
                                {blogCategories.map((category) => {
                                    const isSelected = activeCategory === category;
                                    const count = categoryCounts[category] || 0;
                                    return (
                                        <button
                                            key={category}
                                            onClick={() => setActiveCategory(category)}
                                            className={cn(
                                                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-target shrink-0",
                                                isSelected
                                                    ? "bg-portfolio-dark text-white shadow-sm"
                                                    : "text-portfolio-muted hover:text-portfolio-dark hover:bg-portfolio-dark/5"
                                            )}
                                        >
                                            <span>{category}</span>
                                            <span className={cn(
                                                "text-[10px] px-1.5 py-0.5 rounded-full font-mono",
                                                isSelected
                                                    ? "bg-white/20 text-white"
                                                    : "bg-portfolio-dark/5 text-portfolio-muted"
                                            )}>
                                                {count}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Minimalist Inline Search */}
                            <div className="relative w-full md:w-72 shrink-0">
                                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-portfolio-muted" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search articles, tags..."
                                    className="w-full pl-10 pr-8 py-2 rounded-full border border-portfolio-dark/15 bg-white text-xs text-portfolio-dark placeholder:text-portfolio-muted focus:outline-none focus:border-portfolio-gold transition-all cursor-target"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-portfolio-muted hover:text-portfolio-dark"
                                    >
                                        <X size={13} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* ─── DYNAMIC DISPATCHES ARCHIVE GRID ─────────────────────── */}
                    <section className="mb-24 sm:mb-32">
                        {filteredPosts.length > 0 ? (
                            <div className="space-y-8">
                                {/* If there are multiple articles and no active tight query, showcase the first as a Wide Spotlight */}
                                {filteredPosts.length >= 2 && activeCategory === "View all" && !searchQuery ? (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <WideEditorialCard
                                                post={filteredPosts[1]}
                                                onClick={handlePostClick}
                                            />
                                        </motion.div>

                                        {/* Remaining articles in 3-column refined bookbinding grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                            {filteredPosts.slice(2).map((post, index) => (
                                                <motion.div
                                                    key={post.id}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true, margin: "-40px" }}
                                                    transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                                                >
                                                    <EditorialGridCard post={post} onClick={handlePostClick} />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    /* Filtered or search results grid */
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                        {filteredPosts.map((post, index) => (
                                            <motion.div
                                                key={post.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                                            >
                                                <EditorialGridCard post={post} onClick={handlePostClick} />
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* Empty Search State */
                            <div className="text-center py-20 bg-white border border-portfolio-dark/10 rounded-3xl p-8 max-w-xl mx-auto">
                                <SlidersHorizontal size={28} className="mx-auto text-portfolio-muted mb-4" />
                                <h3 className="text-lg font-bold text-portfolio-dark mb-2">No publications matched your filter</h3>
                                <p className="text-portfolio-muted text-sm mb-6">
                                    Try broadening your search term or selecting another category.
                                </p>
                                <button
                                    onClick={() => { setActiveCategory("View all"); setSearchQuery(""); }}
                                    className="inline-flex items-center gap-2 bg-portfolio-dark text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-portfolio-gold transition-colors cursor-target"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </section>

                    {/* ─── EDITORIAL DISPATCH TERMINAL (NEWSLETTER) ───────────── */}
                    <section className="mb-20 sm:mb-28">
                        <div className="bg-[#0e0e11] text-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 relative overflow-hidden border border-white/10 shadow-2xl">
                            {/* Blueprint grid background */}
                            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
                            <div className="absolute top-0 right-1/4 w-[400px] h-[250px] bg-portfolio-gold/10 rounded-full blur-[100px] pointer-events-none" />

                            <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
                                <div className="w-12 h-12 rounded-2xl bg-portfolio-gold/10 border border-portfolio-gold/20 flex items-center justify-center mb-6 text-portfolio-gold">
                                    <Mail size={20} />
                                </div>

                                <span className="text-[10px] font-bold uppercase tracking-widest text-portfolio-gold mb-2 block">
                                    The Foremark Dispatch
                                </span>

                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                                    Engineering Notes Delivered Monthly
                                </h2>

                                <p className="text-white/60 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
                                    Direct architectural analyses, performance case studies, and modern tooling breakdowns. No fluff, no sponsored spam.
                                </p>

                                <form
                                    className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
                                    onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to The Foremark Dispatch."); }}
                                >
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email address"
                                        className="flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-white/15 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-portfolio-gold transition-colors cursor-target"
                                    />
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center gap-2 bg-portfolio-gold text-white font-bold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-target whitespace-nowrap"
                                    >
                                        Subscribe <ArrowRight size={14} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>

                    {/* ─── PROJECT INQUIRY CLOSER ─────────────────────────────── */}
                    <section className="pt-12 sm:pt-16 border-t border-portfolio-dark/10 text-center">
                        <div className="max-w-xl mx-auto flex flex-col items-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-portfolio-dark mb-4">
                                Have a project in mind?
                            </h2>
                            <p className="text-portfolio-muted text-sm sm:text-base leading-relaxed mb-8">
                                Let’s partner up to build, optimize, or scale your digital platforms with engineering excellence.
                            </p>
                            <Link
                                to="/contact"
                                className="btn-primary inline-flex items-center gap-2 uppercase tracking-widest text-xs cursor-target border border-transparent hover:border-portfolio-gold shadow-lg"
                            >
                                Start a project <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </section>

                </div>
            </main>

            {/* Slide-over article drawer */}
            <BlogReader
                post={selectedPost}
                isOpen={isReaderOpen}
                onClose={() => setIsReaderOpen(false)}
            />
        </>
    );
};

export default BlogPage;