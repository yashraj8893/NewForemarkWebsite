import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './ProjectCTA.css';

/** Shared editorial project invitation used across the site. */
export const ProjectCTA = () => (
  <section className="project-cta mb-14 border-t border-[#dedbd5] pt-12 text-center sm:mb-20 sm:pt-16">
    <div className="mx-auto flex max-w-xl flex-col items-center">
      <h2 className="font-display mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
        Have a project in mind?
      </h2>
      <p className="mb-7 text-sm leading-6 text-[#625e58] sm:text-base">
        Let’s partner up to build, optimize, or scale your digital platforms with engineering excellence.
      </p>
      <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-xs uppercase tracking-[0.13em]">
        Start a project <ArrowUpRight size={15} />
      </Link>
    </div>
  </section>
);

export default ProjectCTA;
