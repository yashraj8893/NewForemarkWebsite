import React from 'react';
import { Cpu, Palette, Layers, Cloud, Users, ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

interface CategoryCardProps {
  category: string;
  onSelect: (category: string) => void;
}

// Maps category name to Lucide icons
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Engineering':
      return <Cpu size={24} className="text-portfolio-blue" />;
    case 'Product & Design':
      return <Palette size={24} className="text-portfolio-gold" />;
    case 'Case Studies':
      return <Layers size={24} className="text-portfolio-green" />;
    case 'DevOps & Cloud':
      return <Cloud size={24} className="text-portfolio-blue" />;
    case 'Company Culture':
      return <Users size={24} className="text-portfolio-gold" />;
    default:
      return <Cpu size={24} className="text-portfolio-gold" />;
  }
};

// Maps category name to short description
const getCategoryDesc = (category: string) => {
  switch (category) {
    case 'Engineering':
      return 'Technical deep dives, observability telemetry, and backend architectures built to scale.';
    case 'Product & Design':
      return 'Modern design systems, workflow integrations, design handoffs, and product strategies.';
    case 'Case Studies':
      return 'Real-world business outcomes, client digital infrastructure rebuilds, and audits.';
    case 'DevOps & Cloud':
      return 'Infrastructure as Code, automated deployment pipelines, Terraform, and cloud management.';
    case 'Company Culture':
      return 'The Foremark philosophy, remote collaboration rules, and our Engineering First ethos.';
    default:
      return 'Read detailed insights and strategies straight from the Foremark Technologies team.';
  }
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onSelect }) => {
  // Calculate dynamic article count
  const articleCount = blogPosts.filter(post => post.category === category).length;

  return (
    <div
      onClick={() => onSelect(category)}
      className="group relative flex flex-col justify-between border border-portfolio-dark/10 bg-white hover:border-portfolio-gold/30 hover:shadow-xl hover:-translate-y-1 rounded-3xl p-6 sm:p-8 cursor-target transition-all duration-500 select-none"
    >
      <div>
        {/* Icon & Count Row */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-portfolio-bg flex items-center justify-center transition-colors group-hover:bg-portfolio-dark/5">
            {getCategoryIcon(category)}
          </div>
          <span className="text-[10px] font-bold text-portfolio-muted bg-portfolio-bg px-2.5 py-1 rounded-full group-hover:bg-portfolio-dark group-hover:text-white transition-colors duration-300">
            {articleCount} {articleCount === 1 ? 'article' : 'articles'}
          </span>
        </div>

        {/* Category Header */}
        <h4 className="text-base sm:text-lg font-bold tracking-tight text-portfolio-dark mb-2 group-hover:text-portfolio-gold transition-colors duration-300">
          {category}
        </h4>

        {/* Category Description */}
        <p className="text-portfolio-muted text-xs leading-relaxed mb-6">
          {getCategoryDesc(category)}
        </p>
      </div>

      {/* Action Footer */}
      <span className="inline-flex items-center gap-1.5 text-portfolio-dark font-bold text-xs uppercase tracking-widest pt-4 border-t border-portfolio-dark/5 mt-auto group-hover:text-portfolio-gold transition-colors duration-300">
        Browse articles
        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </div>
  );
};
export default CategoryCard;
