import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Code2, Compass, PenTool, Plus, Rocket, X } from 'lucide-react';
import './AutomationSections.css';
import './AutomationDeliveryPlaybook.css';
import './SoftwareDeliveryPlaybook.css';

const phases = [
  { name: 'Discovery', icon: Compass, title: 'Discovery & technical scoping', description: 'We learn about your goals, users, and technical needs, then define a clear plan for the project.', outcome: 'A shared plan for what we’re building and why.', details: [
    ['Project goals and scope', 'We define the priorities, requirements, and boundaries that guide the project.'],
    ['System architecture', 'We plan how the application and its services will work together.'],
    ['Data and integration requirements', 'We map the information and external systems your project needs.'],
    ['Security considerations', 'We identify security needs and risks early in the process.'],
  ] },
  { name: 'Design', icon: PenTool, title: 'Wireframes & design', description: 'We map the experience and create responsive designs you can review before development begins.', outcome: 'A clear, reviewable design direction.', details: [
    ['User flows and wireframes', 'We map the journeys and structure of key screens.'],
    ['Interactive prototype', 'We turn the main screens into a prototype your team can explore and review.'],
    ['Visual design system', 'We establish the visual language and reusable interface elements.'],
    ['Responsive layouts', 'We design the experience to work across screen sizes.'],
  ] },
  { name: 'Build', icon: Code2, title: 'Full-stack development', description: 'We build the interface, backend, and integrations in focused stages, sharing progress along the way.', outcome: 'Working software you can see and test.', details: [
    ['Frontend components', 'We build reusable interface components for a consistent user experience.'],
    ['Backend and integrations', 'We develop the application logic and connect the services it needs.'],
    ['Database implementation', 'We create the data structures that support your application.'],
    ['Staging builds and reviews', 'We share working builds for feedback throughout development.'],
  ] },
  { name: 'Test', icon: CheckCircle2, title: 'Testing & refinement', description: 'We check the experience, performance, and functionality, then refine the details before launch.', outcome: 'A more reliable, polished product.', details: [
    ['Functional testing', 'We check key flows and features against the agreed requirements.'],
    ['Responsive review', 'We review layouts and interactions across screen sizes.'],
    ['Performance checks', 'We identify and address issues that could slow the experience.'],
    ['Final refinements', 'We resolve feedback and prepare the project for launch.'],
  ] },
  { name: 'Launch', icon: Rocket, title: 'Launch & support', description: 'We prepare the release, launch your software, and help your team move forward with confidence.', outcome: 'A smooth launch and a foundation for what comes next.', details: [
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
  const PhaseIcon = phase.icon;

  const select = (index: number) => {
    setActive(index);
    setDetail(0);
    const strip = tabs.current;
    const button = strip?.children[index] as HTMLElement | undefined;
    if (strip && button && strip.scrollWidth > strip.clientWidth) {
      const left = strip.scrollLeft + button.getBoundingClientRect().left - strip.getBoundingClientRect().left - (strip.clientWidth - button.offsetWidth) / 2;
      strip.scrollTo({ left: Math.max(0, Math.min(left, strip.scrollWidth - strip.clientWidth)), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  };

  return (
    <div className="automation-design website-delivery-design">
      <section className="section delivery" aria-labelledby="dl-title">
        <div className="section-inner">
          <div className="eyebrow">Delivery lifecycle</div>
          <h2 id="dl-title">How we deliver<br />your software<span>.</span></h2>
          <p className="intro">A clear process from the first conversation to launch and beyond. Explore what happens at each stage.</p>

          <div className="ad2-shell website-delivery-shell">
            <div className="ad2-sidebar">
              <div className="ad2-sidebar-header"><span>Delivery phases</span><span>01 — 05</span></div>
              <div className="ad2-step-list" ref={tabs} aria-label="Delivery phases">
                {phases.map((entry, index) => {
                  const Icon = entry.icon;
                  return (
                    <button
                      type="button"
                      key={entry.name}
                      className={`ad2-step ${active === index ? 'is-active' : ''}`}
                      aria-pressed={active === index}
                      aria-label={`${number(index + 1)}: ${entry.name}`}
                      onPointerEnter={(event) => { if (event.pointerType === 'mouse') select(index); }}
                      onFocus={() => select(index)}
                      onClick={() => select(index)}
                    >
                      <span className="ad2-step-number">{number(index + 1)}</span>
                      <span className="ad2-step-icon"><Icon size={18} aria-hidden="true" /></span>
                      <span className="ad2-step-name">{entry.name}</span>
                      <ArrowRight size={17} className="ad2-step-arrow" aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="ad2-stage">
              <div className="ad2-stage-top"><span>The Foremark process</span><span><b>{number(active + 1)}</b> / 05</span></div>
              <div key={phase.name} className="ad2-main website-delivery-main" aria-live="polite">
                <div className="ad2-headline">
                  <div className="ad2-phase-icon"><PhaseIcon size={24} aria-hidden="true" /></div>
                  <span>Phase {number(active + 1)}</span>
                </div>
                <h3>{phase.title}</h3>
                <p className="website-delivery-description">{phase.description}</p>

                <div className="website-delivery-outcome">
                  <span>The outcome</span>
                  <p>{phase.outcome}</p>
                </div>

                <button className="dl-mobile-toggle" type="button" aria-expanded={mobileOpen} aria-controls="dl-details" onClick={() => setMobileOpen(!mobileOpen)}>
                  {mobileOpen ? 'Hide phase details' : 'Explore phase details'} {mobileOpen ? <X size={18} /> : <Plus size={18} />}
                </button>

                <div className={`website-delivery-brief ${mobileOpen ? 'is-open' : ''}`} id="dl-details">
                  <div className="website-delivery-brief-head">
                    <div><span>Phase brief</span><h4>What this stage covers</h4></div>
                    <span>{number(active + 1)} / 05</span>
                  </div>
                  <p className="website-delivery-hint">Select an item to explore</p>
                  <div className="website-delivery-details">
                    {phase.details.map(([title, text], index) => (
                      <div className="website-delivery-detail" key={title}>
                        <button type="button" aria-expanded={detail === index} onClick={() => setDetail(detail === index ? null : index)}>
                          <span>{number(index + 1)}</span><span>{title}</span>{detail === index ? <X size={18} /> : <Plus size={20} />}
                        </button>
                        {detail === index && <p>{text}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="ad2-footer website-delivery-footer">
                <button type="button" disabled={active === 0} onClick={() => select(active - 1)} aria-label="Previous phase"><ArrowLeft size={18} /> Previous phase</button>
                <span>{number(active + 1)} / 05</span>
                <button type="button" disabled={active === phases.length - 1} onClick={() => select(active + 1)} aria-label="Next phase">Next phase <ArrowRight size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CinematicProcessWalkthrough;
