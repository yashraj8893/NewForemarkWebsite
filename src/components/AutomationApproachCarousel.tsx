import { useState } from 'react';
import { Bot, Lock, MessageSquare, RefreshCw, Search, Zap } from 'lucide-react';
import './AutomationSections.css';

interface AutomationApproachItem {
  id: string;
  phase: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const automationApproachItems: AutomationApproachItem[] = [
  {
    id: 'audit',
    phase: '01',
    category: 'Discovery & ROI',
    title: 'Workflow Audit & ROI Mapping',
    description:
      'We analyze operational bottlenecks step-by-step to calculate exact hours lost to repetitive tasks and determine payback ROI before writing code.',
    tags: ['Bottleneck Audit', 'Hours Reclaimed', 'Payback ROI'],
    icon: Search
  },
  {
    id: 'pipeline',
    phase: '02',
    category: 'Event Pipelines',
    title: 'Fail-Safe Event Pipelines',
    description:
      'Automations engineered with automated retry queues, dead-letter logging, and instant notification alerts so no transaction or lead slips through.',
    tags: ['Dead-Letter Queues', 'Instant Alerts', 'Zero Data Loss'],
    icon: Zap
  },
  {
    id: 'ai-parsing',
    phase: '03',
    category: 'Intelligent Extraction',
    title: 'AI Document & Data Parsing',
    description:
      'We integrate modern LLM pipelines to extract structured data from unstructured PDF invoices, vendor contracts, and client intake forms.',
    tags: ['PDF Invoices', 'Structured Extraction', 'Human-in-the-Loop'],
    icon: Bot
  },
  {
    id: 'privacy',
    phase: '04',
    category: 'Enterprise Security',
    title: 'Self-Hosted Data Sovereignty',
    description:
      'Deploying self-hosted n8n and isolated microservices on your private cloud guarantees sensitive proprietary business data never leaves your infrastructure.',
    tags: ['Private VPC', 'Self-Hosted n8n', '100% Data Privacy'],
    icon: Lock
  },
  {
    id: 'sync',
    phase: '05',
    category: 'Integration Mesh',
    title: 'Two-Way System Sync',
    description:
      'Real-time bidirectional synchronization bridges keeping ERPs, CRMs, accounting tools, and internal databases continuously unified.',
    tags: ['Bi-Directional Sync', 'Conflict Resolution', 'Single Truth'],
    icon: RefreshCw
  },
  {
    id: 'bots',
    phase: '06',
    category: 'Autonomous Ops',
    title: 'Operations Trigger Bots',
    description:
      'Interactive Slack and Microsoft Teams bots that empower staff to execute manager approvals, trigger batch synchronizations, and receive alerts.',
    tags: ['Slack & Teams Bots', 'One-Click Approvals', 'Alert Triage'],
    icon: MessageSquare
  }
];



const shapes = [
  { name: 'hex', radius: '0%', path: 'polygon(25% 2%,75% 2%,87.5% 26%,100% 50%,75% 98%,25% 98%,12.5% 74%,0% 50%)' },
  { name: 'oct', radius: '0%', path: 'polygon(29% 1%,71% 1%,99% 29%,99% 71%,71% 99%,29% 99%,1% 71%,1% 29%)' },
  { name: 'round', radius: '50%', path: 'polygon(0% 0%,50% 0%,100% 0%,100% 50%,100% 100%,50% 100%,0% 100%,0% 50%)' },
  { name: 'pent', radius: '0%', path: 'polygon(50% 1%,73.5% 18%,97% 35%,90% 66%,82% 97%,18% 97%,10% 66%,3% 35%)' },
  { name: 'bevel', radius: '0%', path: 'polygon(7% 1%,93% 1%,99% 9%,99% 91%,93% 99%,7% 99%,1% 91%,1% 9%)' },
  { name: 'diamond', radius: '0%', path: 'polygon(50% 1%,74.5% 25.5%,99% 50%,74.5% 74.5%,50% 99%,25.5% 74.5%,1% 50%,25.5% 25.5%)' },
];

export const AutomationApproachCarousel = () => {
  const [selected, setSelected] = useState(0);
  const item = automationApproachItems[selected];
  const Icon = item.icon;
  const next = (selected + 1) % automationApproachItems.length;
  const shape = shapes[selected];
  const shapeStyle = { '--shape': shape.path, '--shape-radius': shape.radius } as React.CSSProperties;
  return (
    <div className="automation-design">
      <section className="section approach" aria-labelledby="auto-approach-title">
        <div className="section-inner">
          <div className="eyebrow">Our Approach</div>
          <h2 id="auto-approach-title">The Foremark Standard:<br />How We Automate Workflows<em>.</em></h2>
          <p className="intro">We eliminate operational friction by building intelligent, fail-safe event pipelines that automate repetitive tasks and guarantee data accuracy.</p>
          <div className="a-layout">
            <div className="a-list" aria-label="Explore our approach">
              {automationApproachItems.map((entry, i) => {
                const RowIcon = entry.icon;
                return <button type="button" key={entry.id} className={`a-row ${selected === i ? 'active' : ''}`} onPointerEnter={e => { if (e.pointerType === 'mouse') setSelected(i); }} onFocus={() => setSelected(i)} onClick={() => setSelected(i)} aria-pressed={selected === i} aria-label={`${entry.phase}: ${entry.title}`}>
                  <span className="row-icon"><RowIcon size={19} /></span><span className="row-num" aria-hidden="true">{entry.phase}</span><span className="row-title">{entry.title}</span><span className="row-arrow" aria-hidden="true">→</span>
                </button>;
              })}
            </div>
            <div className="orbit-wrap">
              <div className="orbit">
                <svg className="rings" viewBox="0 0 500 500" aria-hidden="true">
                  <circle className="ring" cx="250" cy="250" r="235" /><circle className="ring-two" cx="250" cy="250" r="222" /><circle className="flow" cx="250" cy="250" r="235" />
                  {[[250,15],[454,132],[454,368],[250,485],[46,368],[46,132]].map(([cx,cy],i) => <circle key={i} className={`orbit-node ${selected === i ? 'active' : ''}`} cx={cx} cy={cy} r="4" />)}
                </svg>
                <div className="plates" data-shape={shape.name} style={shapeStyle}>
                  <div className="plate plate-back" /><div className="plate plate-mid" /><div className="plate plate-rim" /><div className="plate plate-face" />
                  <div className="plate-content changing" key={item.id} aria-live="polite">
                    <span className="stage-icon"><Icon size={23} /></span><span className="stage-label">{item.category}</span><h3>{item.title}</h3><p>{item.description}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </div>
                <button type="button" className="orbit-button" onClick={() => setSelected(next)} aria-label={`Next: ${automationApproachItems[next].title}`}>→</button>
              </div>
              <div className="mobile-description"><p>{item.description}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              <div className="stage-footer"><div className="counter"><b>{item.phase}</b> / 06</div><div className="dots" aria-label="Select a principle">{automationApproachItems.map((entry,i) => <button key={entry.id} type="button" className={i === selected ? 'active' : ''} onClick={() => setSelected(i)} aria-label={`Show ${entry.title}`} aria-pressed={i === selected} />)}</div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomationApproachCarousel;
