import React from 'react';
import Folder from './Folder';
import {
  Search,
  Sliders,
  GitMerge,
  ShieldAlert,
  Activity,
  CheckCircle2,
  Sparkles,
  MousePointerClick
} from 'lucide-react';

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

export const AutomationDeliveryFolder: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#faf8f5]/60 border-t border-[#ebe5df]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16">
        
        {/* ─── Header ────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-3 font-mono">
              PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121110] tracking-tight leading-tight mb-4">
              How We Deliver: The Automation Playbook
            </h2>
            <p className="text-[#5c544d] text-base leading-relaxed">
              A transparent, phased lifecycle with constant feedback loops, live sandbox simulations, and zero surprises.
            </p>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-[#5c544d] font-mono bg-white px-4 py-2.5 rounded-full border border-[#ebe5df] shadow-2xs self-start md:self-auto">
            <MousePointerClick size={14} className="text-[#ea7008] animate-bounce" />
            <span>Click folder to open • Click sheets to zoom in</span>
          </div>
        </div>

        {/* ─── Interactive 3D Folder Container ───────────────── */}
        <div className="relative w-full rounded-3xl bg-white border border-[#ebe5df] p-8 sm:p-14 shadow-xs overflow-hidden flex flex-col items-center justify-center min-h-[580px]">
          {/* Subtle Ambient Background */}
          <div className="absolute inset-0 bg-radial from-[#ea7008]/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 my-4 flex items-center justify-center">
            <Folder
              label="DELIVERY PHASES"
              tabPosition="right"
              mode="flap"
              variant="solid"
              color="#ea7008"
              paperColor="#ffffff"
              layout="spread"
              size={1.35}
              openOn="click"
              draggable={true}
              zoomOnClick={true}
              peek={true}
              intro={true}
              speed={1}
              bounce={0.35}
              theme="light"
            >
              {deliveryPhases.map((phase) => {
                const Icon = phase.icon;
                return (
                  <div
                    key={phase.step}
                    className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-white select-none box-border"
                  >
                    {/* Sheet Top Header */}
                    <div>
                      <div className="flex items-center justify-between border-b border-[#ebe5df] pb-2.5 mb-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#ea7008]" />
                          <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#ea7008]">
                            PHASE {phase.step}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#8a8077]">
                          {phase.category}
                        </span>
                      </div>

                      {/* Title & Icon */}
                      <div className="flex items-start gap-2.5 mb-2.5">
                        <div className="w-7 h-7 rounded-lg bg-[#faf8f5] border border-[#ebe5df] flex items-center justify-center text-[#ea7008] shrink-0">
                          <Icon size={14} />
                        </div>
                        <h4 className="text-xs sm:text-[13px] font-bold text-[#121110] tracking-tight leading-snug">
                          {phase.title}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-[10px] sm:text-[10.5px] text-[#5c544d] leading-relaxed mb-3">
                        {phase.description}
                      </p>
                    </div>

                    {/* Sheet Deliverable Bullets */}
                    <div className="space-y-1.5 pt-2 border-t border-[#ebe5df]/70 bg-[#faf8f5]/50 -mx-1 px-2 py-1.5 rounded-md">
                      <span className="text-[9px] font-mono font-semibold uppercase text-[#8a8077] block">
                        Deliverables:
                      </span>
                      {phase.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-1.5 text-[9.5px] text-[#3d3832]">
                          <CheckCircle2 size={11} className="text-[#ea7008] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Status Stamp */}
                    <div className="flex items-center justify-between text-[8.5px] font-mono text-[#8a8077] pt-2 border-t border-[#ebe5df]">
                      <span>FOREMARK STANDARD</span>
                      <span className="text-[#ea7008] font-bold">VERIFIED SPEC</span>
                    </div>
                  </div>
                );
              })}
            </Folder>
          </div>

          {/* Quick Phase Timeline Bar */}
          <div className="mt-8 pt-6 border-t border-[#ebe5df]/80 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-5 gap-3">
            {deliveryPhases.map((phase) => (
              <div
                key={phase.step}
                className="p-3 rounded-xl bg-[#faf8f5] border border-[#ebe5df] flex flex-col"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold text-[#ea7008]">
                    {phase.step}
                  </span>
                  <Sparkles size={11} className="text-[#8a8077]" />
                </div>
                <span className="text-xs font-bold text-[#121110] leading-tight mb-1">
                  {phase.title}
                </span>
                <span className="text-[10.5px] text-[#8a8077] line-clamp-1">
                  {phase.category}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AutomationDeliveryFolder;

