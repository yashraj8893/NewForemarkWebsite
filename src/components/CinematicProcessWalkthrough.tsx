import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Plus, X } from 'lucide-react';
import './DeliveryLifecycle.css';

const phases = [
  { name: 'Discovery', title: 'Discovery & technical scoping', description: 'We learn about your goals, users, and technical needs, then define a clear plan for the project.', outcome: 'A shared plan for what we’re building and why.', details: [
    ['Project goals and scope', 'We define the priorities, requirements, and boundaries that guide the project.'],
    ['System architecture', 'We plan how the application and its services will work together.'],
    ['Data and integration requirements', 'We map the information and external systems your project needs.'],
    ['Security considerations', 'We identify security needs and risks early in the process.'],
  ] },
  { name: 'Design', title: 'Wireframes & design', description: 'We map the experience and create responsive designs you can review before development begins.', outcome: 'A clear, reviewable design direction.', details: [
    ['User flows and wireframes', 'We map the journeys and structure of key screens.'],
    ['Interactive prototype', 'We turn the main screens into a prototype your team can explore and review.'],
    ['Visual design system', 'We establish the visual language and reusable interface elements.'],
    ['Responsive layouts', 'We design the experience to work across screen sizes.'],
  ] },
  { name: 'Build', title: 'Full-stack development', description: 'We build the interface, backend, and integrations in focused stages, sharing progress along the way.', outcome: 'Working software you can see and test.', details: [
    ['Frontend components', 'We build reusable interface components for a consistent user experience.'],
    ['Backend and integrations', 'We develop the application logic and connect the services it needs.'],
    ['Database implementation', 'We create the data structures that support your application.'],
    ['Staging builds and reviews', 'We share working builds for feedback throughout development.'],
  ] },
  { name: 'Test', title: 'Testing & refinement', description: 'We check the experience, performance, and functionality, then refine the details before launch.', outcome: 'A more reliable, polished product.', details: [
    ['Functional testing', 'We check key flows and features against the agreed requirements.'],
    ['Responsive review', 'We review layouts and interactions across screen sizes.'],
    ['Performance checks', 'We identify and address issues that could slow the experience.'],
    ['Final refinements', 'We resolve feedback and prepare the project for launch.'],
  ] },
  { name: 'Launch', title: 'Launch & support', description: 'We prepare the release, launch your software, and help your team move forward with confidence.', outcome: 'A smooth launch and a foundation for what comes next.', details: [
    ['Deployment preparation', 'We prepare the production environment and release checklist.'],
    ['Launch and verification', 'We deploy the project and check the essential experiences.'],
    ['Handover', 'We share the information your team needs to manage the product.'],
    ['Ongoing support', 'We remain available to support improvements after launch.'],
  ] },
];
const number = (n: number) => String(n).padStart(2, '0');
export const CinematicProcessWalkthrough = () => {
  const [active, setActive] = useState(0);
  const [detail, setDetail] = useState<number | null>(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const tabs = useRef<HTMLDivElement>(null);
  const phase = phases[active];
  const select = (i: number) => {
    setActive(i); setDetail(0);
    const strip = tabs.current;
    const button = strip?.children[i] as HTMLElement | undefined;
    if (strip && button && strip.scrollWidth > strip.clientWidth) {
      const left = strip.scrollLeft + button.getBoundingClientRect().left - strip.getBoundingClientRect().left - (strip.clientWidth - button.offsetWidth) / 2;
      strip.scrollTo({ left: Math.max(0, Math.min(left, strip.scrollWidth - strip.clientWidth)), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  };
  return <section className="delivery-lifecycle" aria-labelledby="dl-title">
    <div className="dl-wrap">
      <div className="dl-eyebrow">Delivery lifecycle</div>
      <h2 id="dl-title">How we deliver<br />your software<span>.</span></h2>
      <p className="dl-lead">A clear process from the first conversation to launch and beyond. Explore what happens at each stage.</p>
      <div className="dl-tabs" ref={tabs} aria-label="Delivery phases">
        {phases.map((p, i) => <button className={`dl-phase-button ${active === i ? 'is-active' : ''}`} key={p.name} type="button" aria-pressed={active === i} onClick={() => select(i)}><span>{number(i + 1)}</span>{p.name}</button>)}
      </div>
      <div className="dl-main">
        <div className="dl-intro">
          <div className="dl-intro-top"><span>The Foremark process</span><span>{number(active + 1)} / 05</span></div>
          <div className="dl-intro-body" key={active}><span className="dl-phase-label">Phase {number(active + 1)}</span><h3>{phase.title}</h3><p>{phase.description}</p></div>
          <div className="dl-outcome"><span>The outcome</span><p>{phase.outcome}</p></div>
          <button className="dl-mobile-toggle" type="button" aria-expanded={mobileOpen} aria-controls="dl-details" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? 'Hide phase details' : 'Explore phase details'} {mobileOpen ? <X size={18}/> : <Plus size={18}/>}</button>
        </div>
        <div className={`dl-brief ${mobileOpen ? 'is-open' : ''}`} id="dl-details">
          <div className="dl-sheet">
            <div className="dl-sheet-head"><div><span>Phase brief</span><h3>What this stage covers</h3></div><span className="dl-sheet-count">{number(active + 1)} / 05</span></div>
            <p className="dl-hint">Select an item to explore</p>
            <div className="dl-details">{phase.details.map(([title, text], i) => <div className="dl-detail" key={title}>
              <button type="button" className="dl-detail-button" aria-expanded={detail === i} onClick={() => setDetail(detail === i ? null : i)}><span className="dl-detail-no">{number(i + 1)}</span><span className="dl-detail-title">{title}</span>{detail === i ? <X size={18}/> : <Plus size={20}/>}</button>
              {detail === i && <p className="dl-detail-copy">{text}</p>}
            </div>)}</div>
            <div className="dl-sheet-footer"><span>Foremark / process</span><span>{number(active + 1)} — 05</span></div>
          </div>
        </div>
      </div>
      <div className="dl-navigation"><button type="button" disabled={active === 0} onClick={() => select(active - 1)}><ArrowLeft size={18}/> Previous phase</button><span>{number(active + 1)} / 05</span><button type="button" disabled={active === phases.length - 1} onClick={() => select(active + 1)}>Next phase <ArrowRight size={18}/></button></div>
    </div>
  </section>;
};
export default CinematicProcessWalkthrough;
