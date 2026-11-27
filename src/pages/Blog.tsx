import { useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight, Mail, Search, X } from 'lucide-react';
import { SEO } from '../components/SEO';
import { EditorialArtwork } from '../components/blog/EditorialArtwork';
import { BlogReader } from '../components/blog/BlogReader';
import { blogPosts, blogCategories } from '../data/blogPosts';
import type { BlogPost } from '../data/blogPosts';
import { cn } from '../lib/utils';
import './BlogDesktop.css';
import { ProjectCTA } from '../components/ProjectCTA';

const BlogPage = () => {
    const [activeCategory, setActiveCategory] = useState('View all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [isReaderOpen, setIsReaderOpen] = useState(false);

    const leadPost = useMemo(
        () => blogPosts.find((post) => post.featured) ?? blogPosts[0],
        [],
    );

    const filteredPosts = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        return blogPosts.filter((post) => {
            const categoryMatch = activeCategory === 'View all' || post.category === activeCategory;
            const searchMatch = !query ||
                `${post.title} ${post.excerpt} ${post.author} ${post.category}`.toLowerCase().includes(query);
            return categoryMatch && searchMatch;
        });
    }, [activeCategory, searchQuery]);

    const showLeadPost = activeCategory === 'View all'
        && !searchQuery.trim()
        && filteredPosts.some((post) => post.id === leadPost.id);
    const archivePosts = filteredPosts.filter((post) => !showLeadPost || post.id !== leadPost.id);

    const openPost = (post: BlogPost) => {
        setSelectedPost(post);
        setIsReaderOpen(true);
    };

    const resetFilters = () => {
        setActiveCategory('View all');
        setSearchQuery('');
    };

    return (
        <>
            <SEO
                title="The Journal | Insights & Ideas | Foremark Technologies"
                description="Insights on engineering first principles, observability, infrastructure, and product design from the Foremark Technologies team."
                canonicalUrl="https://foremark.in/blog"
            />

            <main className="blog-page relative w-full overflow-hidden bg-[#fbfaf8] text-[#201f1c] selection:bg-[#ea7008] selection:text-white">
                <div className="blog-content-shell mx-auto max-w-[1320px]">
                    {/* Editorial masthead */}
                    <header className="grid gap-8 border-b border-[#dedbd5] py-12 sm:py-16 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-16 lg:py-20">
                        <div>
                            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#ea7008]">
                                The Foremark Journal · 2026
                            </p>
                            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[82px]">
                                Stories, Insights
                                <br />
                                & Inspiration
                            </h1>
                        </div>
                        <p className="max-w-sm text-base leading-7 text-[#625e58] lg:pb-1">
                            Thoughts on building with an engineering first mentality, designing scalable platforms,
                            and creating robust technology solutions that drive digital transformation.
                        </p>
                    </header>

                    {/* Featured article */}
                    {showLeadPost && (
                        <button
                            type="button"
                            onClick={() => openPost(leadPost)}
                            className="group grid w-full gap-0 border-b border-[#dedbd5] text-left md:grid-cols-[1.05fr_0.95fr]"
                        >
                            <div className="order-2 flex flex-col justify-center py-8 md:order-1 md:py-12 md:pr-12 lg:pr-20">
                                <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.17em] text-[#ea7008]">
                                    <span className="h-px w-8 bg-[#ea7008]" />
                                    Editor’s pick
                                    <span className="text-[#9a948d]">/ {leadPost.category}</span>
                                </p>
                                <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-[-0.035em] transition-colors group-hover:text-[#b65305] sm:text-4xl lg:text-5xl">
                                    {leadPost.title}
                                </h2>
                                <p className="mt-5 max-w-xl text-base leading-7 text-[#625e58]">{leadPost.excerpt}</p>
                                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#dedbd5] pt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#77716a]">
                                    <span>{leadPost.author} <span className="px-2 text-[#c5c0b8]">/</span> {leadPost.date} <span className="px-2 text-[#c5c0b8]">/</span> {leadPost.readTime}</span>
                                    <span className="inline-flex shrink-0 items-center gap-2 text-[#201f1c] transition-colors group-hover:text-[#ea7008]">
                                        Read story <ArrowUpRight size={15} />
                                    </span>
                                </div>
                            </div>
                            <div className="blog-studio-artwork order-1 min-h-[230px] overflow-hidden bg-[#dedbd5] md:order-2 md:min-h-[360px] lg:min-h-[430px]">
                                <EditorialArtwork post={leadPost} />
                            </div>
                        </button>
                    )}

                    {/* Search and category navigation */}
                    <section id="journal-archive" className="scroll-mt-8 py-8 sm:py-10">
                        <div className="flex flex-col gap-6 border-b border-[#dedbd5] pb-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Filter articles by category">
                                {blogCategories.map((category) => (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => setActiveCategory(category)}
                                        aria-pressed={activeCategory === category}
                                        className={cn(
                                            'border-b pb-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors',
                                            activeCategory === category
                                                ? 'border-[#ea7008] text-[#201f1c]'
                                                : 'border-transparent text-[#77716a] hover:text-[#201f1c]',
                                        )}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                            <div role="search" aria-label="Search journal articles" className="flex w-full items-center gap-3 border-b border-[#c9c4bc] pb-2 text-[#77716a] lg:w-56">
                                <Search size={15} aria-hidden="true" />
                                <input
                                    type="search"
                                    value={searchQuery}
                                    onChange={(event) => setSearchQuery(event.target.value)}
                                    placeholder="Search the journal"
                                    aria-label="Search journal articles"
                                    className="w-full bg-transparent text-sm text-[#201f1c] outline-none placeholder:text-[#99938b]"
                                />
                                {searchQuery && (
                                    <button
                                        type="button"
                                        aria-label="Clear search"
                                        onClick={() => setSearchQuery('')}
                                        className="text-[#77716a] hover:text-[#ea7008]"
                                    >
                                        <X size={14} />
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="flex items-baseline justify-between py-6">
                            <h2 className="font-display text-xl font-semibold tracking-tight">
                                {activeCategory === 'View all' ? 'Latest writing' : activeCategory}
                            </h2>
                            <span className="text-[11px] uppercase tracking-[0.12em] text-[#77716a]">
                                {archivePosts.length} {archivePosts.length === 1 ? 'story' : 'stories'}
                            </span>
                        </div>

                        {archivePosts.length > 0 ? (
                            <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-9 lg:gap-y-14">
                                {archivePosts.map((post) => (
                                    <button
                                        key={post.id}
                                        type="button"
                                        onClick={() => openPost(post)}
                                        className="group text-left"
                                    >
                                        <div className="blog-studio-artwork mb-5 aspect-[1.55] overflow-hidden bg-[#e5e1da]">
                                            <EditorialArtwork post={post} />
                                        </div>
                                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#ea7008]">
                                            {post.category}<span className="px-2 text-[#c5c0b8]">/</span><span className="text-[#77716a]">{post.date}</span>
                                        </p>
                                        <h3 className="font-display text-xl font-semibold leading-snug tracking-[-0.025em] transition-colors group-hover:text-[#b65305]">
                                            {post.title}
                                        </h3>
                                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#625e58]">{post.excerpt}</p>
                                        <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.13em] text-[#201f1c] group-hover:text-[#ea7008]">
                                            Read story <ArrowUpRight size={14} />
                                        </span>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="py-16 text-center">
                                <p className="font-display text-xl font-semibold">No stories match that search.</p>
                                <p className="mt-2 text-sm text-[#77716a]">Try another term or category.</p>
                                <button
                                    type="button"
                                    onClick={resetFilters}
                                    className="mt-5 text-xs font-bold uppercase tracking-[0.13em] text-[#ea7008] hover:text-[#b65305]"
                                >
                                    Reset filters
                                </button>
                            </div>
                        )}
                    </section>

                    {/* Keep the existing newsletter sign-up */}
                    <section className="blog-newsletter mb-16 mt-10 sm:mb-20">
                        <div className="blog-newsletter-panel relative overflow-hidden border border-[#dedbd5] bg-[#f3f2ee] p-7 sm:p-10 lg:p-12">
                            <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
                                <div className="blog-newsletter-icon mb-5 flex h-11 w-11 items-center justify-center border border-[#d9d2c9] text-[#ea7008]">
                                    <Mail size={19} />
                                </div>
                                <span className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ea7008]">The Foremark Dispatch</span>
                                <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Engineering Notes Delivered Monthly</h2>
                                <p className="mt-3 max-w-md text-sm leading-6 text-[#625e58]">
                                    Direct architectural analyses, performance case studies, and modern tooling breakdowns. No fluff, no sponsored spam.
                                </p>
                                <form
                                    className="mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row"
                                    onSubmit={(event) => {
                                        event.preventDefault();
                                        alert('Thank you for subscribing to The Foremark Dispatch.');
                                    }}
                                >
                                    <input
                                        type="email"
                                        required
                                        aria-label="Email address"
                                        placeholder="Enter your email address"
                                        className="min-w-0 flex-1 border border-[#dedbd5] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#ea7008]"
                                    />
                                    <button type="submit" className="inline-flex items-center justify-center gap-2 bg-[#ea7008] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#b65305]">
                                        Subscribe <ArrowRight size={14} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>

                    <ProjectCTA />
                </div>
            </main>

            <BlogReader
                post={selectedPost}
                isOpen={isReaderOpen}
                onClose={() => setIsReaderOpen(false)}
            />
        </>
    );
};

export default BlogPage;
