import { useState } from 'react';
import { Activity, ArrowLeft, ArrowRight, Check, GitMerge, Search, ShieldAlert, Sliders } from 'lucide-react';
import './AutomationSections.css';
import './AutomationDeliveryPlaybook.css';

interface DeliveryPhaseDocument {
  step: string;
  category: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  deliverables: string[];
}

const deliveryPhases: DeliveryPhaseDocument[] = [
  {
    step: '01',
    category: 'Discovery & Audit',
    title: 'Workflow Audit & Mapping',
    description:
      'We interview your team, map existing operations step-by-step, and identify exact repetitive bottlenecks to calculate hard payback ROI.',
    icon: Search,
    deliverables: [
      'Bottleneck time-loss audit',
      'Data flow & system schema',
      'ROI & efficiency benchmark'
    ]
  },
  {
    step: '02',
    category: 'Architecture',
    title: 'Logic Spec & Error Fallbacks',
    description:
      'Designing strict JSON schemas, conditional retry paths, dead-letter logging, and human-in-the-loop approval gates before writing code.',
    icon: Sliders,
    deliverables: [
      'JSON schema validation rules',
      'Retry queues & dead-letter alarms',
      'Role-based approval triggers'
    ]
  },
  {
    step: '03',
    category: 'Engineering',
    title: 'Integration & Pipeline Build',
    description:
      'Connecting webhook listeners, building secure API bridges, and implementing custom microservices for heavy transformation workloads.',
    icon: GitMerge,
    deliverables: [
      'Bidirectional API sync engines',
      'Lightweight Node/Python services',
      'Encrypted credential storage'
    ]
  },
  {
    step: '04',
    category: 'Stress Testing',
    title: 'Sandbox Simulation & Edge Drill',
    description:
      'Executing simulated API downtime drills, burst loads, malformed payloads, and failed webhook retries with zero production risk.',
    icon: ShieldAlert,
    deliverables: [
      'Simulated partner outage drills',
      'Poison-pill message handling',
      'Zero-data-loss validation test'
    ]
  },
  {
    step: '05',
    category: 'Deployment & Ops',
    title: 'Deployment, Logging & Training',
    description:
      'Zero-downtime cutover into your secure VPC, live Grafana/Slack telemetry dashboards, and interactive staff training runbooks.',
    icon: Activity,
    deliverables: [
      'Zero-downtime cutover execution',
      'Real-time alert dashboards',
      'Staff video runbooks & handoff'
    ]
  }
];


export const AutomationDeliveryFolder = () => {
  const [selected, setSelected] = useState(0);
  const phase = deliveryPhases[selected];
  const PhaseIcon = phase.icon;
  return (
    <div className="automation-design">
      <section className="section delivery" aria-labelledby="auto-delivery-title">
        <div className="section-inner">
          <div className="eyebrow">Process</div>
          <h2 id="auto-delivery-title">How We Deliver:<br />The Automation Playbook<em>.</em></h2>
          <p className="intro">A transparent, phased lifecycle with constant feedback loops, live sandbox simulations, and zero surprises.</p>
          <div className="ad2-shell">
            <div className="ad2-sidebar">
              <div className="ad2-sidebar-header"><span>Delivery phases</span><span>01 — 05</span></div>
              <div className="ad2-step-list" aria-label="Delivery phases">
                {deliveryPhases.map((entry, index) => {
                  const Icon = entry.icon;
                  return <button type="button" key={entry.step} className={`ad2-step ${selected === index ? 'is-active' : ''}`} aria-pressed={selected === index} aria-label={`${entry.step}: ${entry.category}`} onPointerEnter={(event) => { if (event.pointerType === 'mouse') setSelected(index); }} onFocus={() => setSelected(index)} onClick={() => setSelected(index)}>
                    <span className="ad2-step-number">{entry.step}</span><span className="ad2-step-icon"><Icon size={18} aria-hidden="true" /></span><span className="ad2-step-name">{entry.category}</span><ArrowRight size={17} className="ad2-step-arrow" aria-hidden="true" />
                  </button>;
                })}
              </div>
              <div className="ad2-sidebar-footer"><span className="ad2-status-dot" />Foremark standard</div>
            </div>
            <div className="ad2-stage">
              <div className="ad2-stage-top"><span>FOREMARK STANDARD</span><span><b>{phase.step}</b> / 05</span></div>
              <div key={phase.step} className="ad2-main" aria-live="polite">
                <div className="ad2-headline"><div className="ad2-phase-icon"><PhaseIcon size={24} aria-hidden="true" /></div><span>PHASE {phase.step} — {phase.category}</span></div>
                <h3>{phase.title}</h3><p>{phase.description}</p>
                <div className="ad2-deliverables"><div className="ad2-deliverables-head"><span>Deliverables</span><span>0{phase.deliverables.length}</span></div><ul>{phase.deliverables.map((value, index) => <li key={value}><span className="ad2-deliverable-no">0{index + 1}</span><span>{value}</span><Check className="ad2-check" size={16} aria-hidden="true" /></li>)}</ul></div>
              </div>
              <div className="ad2-footer"><span>FOREMARK STANDARD · VERIFIED SPEC</span><div className="ad2-controls"><button type="button" disabled={selected === 0} onClick={() => setSelected(selected - 1)} aria-label="Previous phase"><ArrowLeft size={18} /></button><button type="button" disabled={selected === deliveryPhases.length - 1} onClick={() => setSelected(selected + 1)} aria-label="Next phase"><ArrowRight size={18} /></button></div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomationDeliveryFolder;
