import React, { useState } from 'react';
import CircularCarousel from './CircularCarousel';
import type { CircularCarouselItem } from './CircularCarousel';
import { Search, Zap, Bot, Lock, RefreshCw, MessageSquare } from 'lucide-react';

export interface AutomationApproachItem extends CircularCarouselItem {
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

export const AutomationApproachCarousel: React.FC = () => {
  const [, setActiveIdx] = useState<number>(0);

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-white border-t border-[#ebe5df]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16">
        
        {/* ─── Header ────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-3 font-mono">
              OUR APPROACH
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121110] tracking-tight leading-tight mb-4">
              The Foremark Standard: How We Automate Workflows
            </h2>
            <p className="text-[#5c544d] text-base leading-relaxed">
              We eliminate operational friction by building intelligent, fail-safe event pipelines that automate repetitive tasks and guarantee data accuracy.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-[#8a8077] font-mono bg-[#faf8f5] px-4 py-2 rounded-full border border-[#ebe5df] self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#ea7008] animate-pulse" />
            Drag or use arrows to navigate • Click card to center
          </div>
        </div>

        {/* ─── 3D Circular Information Carousel (No Images, Option B Light Cards) ─── */}
        <div 
          data-lenis-prevent
          className="relative w-full overflow-hidden select-none" 
          style={{ height: '560px' }}
        >
          <CircularCarousel<AutomationApproachItem>
            items={automationApproachItems}
            preset="cylinder"
            intro="rise"
            cardWidth={330}
            aspectRatio={0.78}
            speed={10}
            gap={32}
            fadeColor="#ffffff"
            depthFade={0.55}
            captions={false}
            showArrows={true}
            showDots={true}
            focusOnClick={true}
            pauseOnHover={true}
            onChange={(index) => {
              setActiveIdx(index);
            }}
            renderCard={(item, _index, isActive) => {
              const Icon = item.icon;
              return (
                <div
                  className={`w-full h-full p-6 sm:p-7 rounded-[22px] bg-white border flex flex-col justify-between transition-all duration-300 relative select-none cursor-pointer ${
                    isActive
                      ? 'border-[#ea7008] shadow-[0_16px_36px_-12px_rgba(234,112,8,0.18),0_4px_12px_-2px_rgba(18,17,16,0.06)] ring-1 ring-[#ea7008]/30'
                      : 'border-[#ebe5df] hover:border-[#ea7008]/40 shadow-[0_10px_28px_-12px_rgba(18,17,16,0.06),0_2px_8px_-2px_rgba(18,17,16,0.03)]'
                  }`}
                >
                  {/* Top Bar: Icon + Category Badge + Step Number */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#faf8f5] border border-[#ebe5df] flex items-center justify-center text-[#ea7008] shrink-0 shadow-2xs">
                        <Icon size={19} />
                      </div>
                      <span className="text-[11px] font-bold font-mono tracking-wider uppercase text-[#ea7008] bg-[#ea7008]/10 px-2.5 py-1 rounded-md">
                        {item.category}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#8a8077] bg-[#faf8f5] px-2 py-0.5 rounded border border-[#ebe5df]">
                      {item.phase} / 06
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="my-auto py-3">
                    <h3 className="text-lg sm:text-[19px] font-bold text-[#121110] tracking-tight leading-snug mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-[#5c544d] leading-relaxed line-clamp-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Tags */}
                  <div className="pt-3 border-t border-[#ebe5df]/70 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#faf8f5] text-[#3d3832] text-[11px] font-medium border border-[#ebe5df]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default AutomationApproachCarousel;
