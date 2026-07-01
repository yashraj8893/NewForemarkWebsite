import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ArrowUpRight, Search, Mail } from 'lucide-react';
import { cn } from "../lib/utils";
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '../data/blogPosts';
import type { BlogPost } from '../data/blogPosts';

// Subcomponents
import { FeaturedBlogCard, SecondaryBlogCard, StandardBlogCard } from '../components/blog/BlogCard';
import { CategoryCard } from '../components/blog/CategoryCard';
import { BlogReader } from '../components/blog/BlogReader';

const BlogPage = () => {
    const [activeCategory, setActiveCategory] = useState("View all");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [isReaderOpen, setIsReaderOpen] = useState(false);

    // Divide posts:
    // - Post index 0 is marked as 'featured: true' and rendered in the Hero featured card
    // - Post indices 1, 2, 3 are secondary featured articles
    // - The rest (including featured/secondary if not filtered out, or just all regular posts) are shown in the Latest grid.
    const featuredPost = useMemo(() => blogPosts.find(p => p.featured) || blogPosts[0], []);
    const secondaryFeaturedPosts = useMemo(() => blogPosts.filter(p => !p.featured).slice(0, 3), []);

    // Latest articles grid content (all articles, filtered by search query and category)
    const filteredLatestPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const categoryMatch = activeCategory === "View all" || post.category === activeCategory;
            const searchMatch =
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.author.toLowerCase().includes(searchQuery.toLowerCase());
            return categoryMatch && searchMatch;
        });
    }, [activeCategory, searchQuery]);

    // Browse categories grid content (exclude "View all" pill)
    const browseCategories = useMemo(() => {
        return blogCategories.filter(cat => cat !== "View all");
    }, []);

    const handlePostClick = (post: BlogPost) => {
        setSelectedPost(post);
        setIsReaderOpen(true);
    };

    const handleCategoryBrowseSelect = (category: string) => {
        setActiveCategory(category);
        // Smooth scroll down to the articles grid filter section
        const el = document.getElementById('articles-grid-section');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Stagger entry configurations
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    const itemFade = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] } }
    };

    return (
        <>
            {/* Search Engine Optimization meta information */}
            <SEO
                title="The Journal | Insights & Ideas"
                description="Insights on engineering first principles, observability, infrastructure, and product design from the Foremark Technologies team."
                canonicalUrl="https://foremark.in/blog"
            />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pt-12 sm:pt-16 pb-20 sm:pb-32">

                {/* ─── SECTION 1: HERO HEADER & FEATURED POST ───────────────────────── */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col mb-16"
                >
                    {/* Eyebrow Label */}
                    <motion.span
                        variants={itemFade}
                        className="text-portfolio-gold font-bold mb-3 text-xs tracking-[0.2em] uppercase block"
                    >
                        The Foremark Journal
                    </motion.span>

                    {/* Heading */}
                    <motion.h1
                        variants={itemFade}
                        className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-portfolio-dark mb-4 sm:mb-6 leading-none"
                    >
                        Stories, Insights <br /> & Inspiration
                    </motion.h1>

                    {/* Paragraph */}
                    <motion.p
                        variants={itemFade}
                        className="text-portfolio-muted text-base sm:text-lg max-w-2xl leading-relaxed mb-12"
                    >
                        Thoughts on building with an engineering first mentality, designing scalable platforms,
                        and creating robust technology solutions that drive digital transformation.
                    </motion.p>

                    {/* Core Featured Panel */}
                    {featuredPost && (
                        <motion.div variants={itemFade} className="w-full">
                            <FeaturedBlogCard post={featuredPost} onClick={handlePostClick} />
                        </motion.div>
                    )}
                </motion.div>

                {/* ─── SECTION 2: FEATURED INSIGHTS ─────────────────────────────────── */}
                <section className="pt-12 sm:pt-16 border-t border-portfolio-dark/10 mb-16 sm:mb-24">
                    <div className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-12">
                        <span className="text-xs font-bold uppercase tracking-widest text-portfolio-gold shrink-0">
                            Curated Insights
                        </span>
                        <div className="flex-1 h-[1px] bg-portfolio-dark/10" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {secondaryFeaturedPosts.map((post, i) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
                            >
                                <SecondaryBlogCard post={post} onClick={handlePostClick} />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ─── SECTION 3: BROWSE BY CATEGORY ────────────────────────────────── */}
                <section className="pt-12 sm:pt-16 border-t border-portfolio-dark/10 mb-16 sm:mb-24">
                    <div className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-12">
                        <span className="text-xs font-bold uppercase tracking-widest text-portfolio-gold shrink-0">
                            Browse By Category
                        </span>
                        <div className="flex-1 h-[1px] bg-portfolio-dark/10" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
                        {browseCategories.map((category, i) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                            >
                                <CategoryCard category={category} onSelect={handleCategoryBrowseSelect} />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ─── SECTION 4: SEARCH, FILTERS & LATEST GRID ─────────────────────── */}
                <section id="articles-grid-section" className="pt-12 sm:pt-16 border-t border-portfolio-dark/10 mb-20 sm:mb-28 scroll-mt-6">
                    <div className="flex flex-col mb-10 sm:mb-12">
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-portfolio-gold mb-4 block">
                            Latest Publications
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-portfolio-dark mb-8 leading-tight">
                            All Articles & Notes
                        </h2>

                        {/* Filter and Search Bar controls row */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-portfolio-dark/5">

                            {/* Categories Pills Row (Scrolls horizontally on small devices) */}
                            <div className="flex items-center gap-2 overflow-x-auto pb-3 md:pb-0 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
                                {blogCategories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={cn(
                                            "px-4 py-2 text-xs md:px-5 md:py-2.5 rounded-full font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-target shrink-0",
                                            activeCategory === category
                                                ? "bg-portfolio-dark text-white border border-portfolio-dark"
                                                : "border border-portfolio-dark/10 text-portfolio-muted hover:bg-portfolio-dark/5"
                                        )}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            {/* Search Bar Input */}
                            <div className="relative w-full md:max-w-xs shrink-0">
                                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-portfolio-muted" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search articles, tags..."
                                    className="w-full pl-11 pr-4 py-3 rounded-full border border-portfolio-dark/10 bg-white text-sm text-portfolio-dark placeholder:text-portfolio-muted focus:outline-none focus:border-portfolio-gold/50 focus:bg-portfolio-bg transition-all cursor-target"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Grid list of articles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {filteredLatestPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                            >
                                <StandardBlogCard post={post} onClick={handlePostClick} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Fallback if list is empty */}
                    {filteredLatestPosts.length === 0 && (
                        <div className="text-center py-20 bg-white border border-portfolio-dark/5 rounded-3xl">
                            <p className="text-portfolio-muted text-base mb-4 font-semibold">No publications matched your search criteria.</p>
                            <button
                                onClick={() => { setActiveCategory("View all"); setSearchQuery(""); }}
                                className="inline-flex items-center gap-1 text-portfolio-gold font-bold text-xs uppercase tracking-widest hover:opacity-70 transition-opacity cursor-target"
                            >
                                Reset Search Filters <ArrowUpRight size={14} />
                            </button>
                        </div>
                    )}
                </section>

                {/* ─── SECTION 5: PREMIUM NEWSLETTER FORM ───────────────────────────── */}
                <section className="pt-12 sm:pt-16 border-t border-portfolio-dark/10 mb-16 sm:mb-24">
                    <div className="bg-portfolio-dark text-white rounded-3xl md:rounded-4xl p-8 sm:p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center border border-white/5 shadow-deep">
                        {/* Background geometric mesh lines */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
                                <path d="M0 200C100 150 200 180 300 120C400 60 500 100 600 80C700 60 800 120 1000 100" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                                <path d="M1000 800C900 850 800 820 700 880C600 940 500 900 400 920C300 940 200 880 0 900" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                            </svg>
                        </div>

                        {/* Ambient gold glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-portfolio-gold/[0.04] blur-[120px] rounded-full pointer-events-none" />

                        <div className="relative z-10 max-w-2xl flex flex-col items-center">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                                <Mail size={22} className="text-portfolio-gold" />
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                                Stay Ahead of the Curve
                            </h2>

                            <p className="text-white/60 text-sm sm:text-base max-w-md mb-10 leading-relaxed">
                                Receive our latest insights on software architecture, DevOps scaling, and design patterns. No noise, just engineering.
                            </p>

                            {/* Form Input fields */}
                            <form
                                className="flex flex-col sm:flex-row gap-3.5 w-full max-w-md"
                                onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }}
                            >
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email address"
                                    className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/15 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-portfolio-gold/50 focus:bg-white/10 transition-colors cursor-target"
                                />
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 bg-portfolio-gold text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-portfolio-dark transition-all duration-300 shadow-md cursor-target whitespace-nowrap"
                                >
                                    Subscribe <ArrowUpRight size={14} />
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* ─── SECTION 6: CLOSING CTA SECTION ────────────────────────────────── */}
                <section className="pt-12 sm:pt-16 border-t border-portfolio-dark/10">
                    <div className="flex flex-col items-center text-center px-4 md:px-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-portfolio-dark mb-4 leading-tight">
                            Have a project in mind?
                        </h2>
                        <p className="text-portfolio-muted text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
                            Let's partner up to build, optimize, or scale your digital platforms.
                            We speak tech, not spreadsheets.
                        </p>

                        <Link
                            to="/contact"
                            className="btn-primary inline-flex items-center gap-2 uppercase tracking-widest text-xs cursor-target border border-transparent hover:border-portfolio-gold/50 shadow-lg"
                        >
                            Start a project <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </section>

            </div>

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