import React, { useRef } from 'react';
import { 
  Server, 
  Database, 
  GitBranch, 
  Activity,
  Sparkles,
  Lock
} from 'lucide-react';
import { DepthCarousel } from './DepthCarousel';
import type { DepthCarouselHandle, DepthCarouselItem } from './DepthCarousel';

export interface HostingProcessStep extends DepthCarouselItem {
  step: string;
  phaseBadge: string;
  title: string;
  shortTitle: string;
  description: string;
  detail: string;
  metric: string;
  metricLabel: string;
  guarantee: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  deliverables: string[];
}

export const hostingProcessSteps: HostingProcessStep[] = [
  {
    step: '01',
    phaseBadge: 'PHASE 01 · ASSESSMENT',
    title: 'Infrastructure Audit & Sizing',
    shortTitle: 'Audit & Sizing',
    description:
      'We analyze your workload demands, traffic patterns, security requirements, and budget constraints before touching code.',
    detail:
      'Our senior cloud architects run deep forensic analysis on current bottleneck metrics, request concurrency, database I/O profiles, and regional latency hotspots to produce a right-sized cloud topology blueprint.',
    image: '/hosting/servers.jpg',
    alt: 'Datacenter Server Infrastructure Audit',
    metric: '< 48 hrs',
    metricLabel: 'Blueprint Turnaround',
    guarantee: 'Comprehensive architecture blueprint and exact cost estimate before any migrations begin.',
    icon: Server,
    pills: ['Workload Profiling', 'Traffic Concurrency', 'Cost Optimization'],
    deliverables: [
      'Comprehensive compute & memory capacity profiling',
      'Database I/O stress & latency bottleneck audit',
      'Right-sized multi-tier VPC network topology plan',
      'Fixed-cost transparent cloud hosting forecast'
    ]
  },
  {
    step: '02',
    phaseBadge: 'PHASE 02 · ARCHITECTURE',
    title: 'Topology & Security Architecture',
    shortTitle: 'Topology & IaC',
    description:
      'Designing isolated VPCs, private subnets, security groups, edge firewall rules, and declarative Terraform pipelines.',
    detail:
      'Every server, subnet, firewall rule, and container runtime is codified as declarative Infrastructure as Code (IaC) using Terraform and Docker, eliminating configuration drift and enabling instant recovery.',
    image: '/hosting/iac.jpg',
    alt: 'Infrastructure as Code and Terraform Architecture',
    metric: '100% IaC',
    metricLabel: 'Version-Controlled',
    guarantee: 'Every resource defined declaratively with zero manual server configuration drift.',
    icon: Lock,
    pills: ['Terraform IaC', 'Multi-AZ Subnets', 'Zero-Trust Firewalls'],
    deliverables: [
      'Multi-AZ public & isolated private subnet segmentation',
      'Declarative Terraform scripts committed to your repository',
      'Cloudflare Enterprise edge WAF & intelligent bot defense',
      'Strict IAM role policies following principle of least privilege'
    ]
  },
  {
    step: '03',
    phaseBadge: 'PHASE 03 · SIMULATION',
    title: 'Staging Provisioning & Dry Run',
    shortTitle: 'Staging Dry Run',
    description:
      'Deploying the staging cluster with automated database seeding, SSL certificates, and zero-downtime rollback tests.',
    detail:
      'We simulate peak production traffic against staging infrastructure using synthetic load spikes, shadow replication, and automated disaster rollback drills before touching live user DNS.',
    image: '/hosting/database.jpg',
    alt: 'High Availability Database Clustering & Staging',
    metric: '0 Errors',
    metricLabel: 'Staging Pass Gate',
    guarantee: '100% dry-run cutover verification validated in staging prior to production cutover.',
    icon: Database,
    pills: ['Synthetic Spikes', 'Database Seeding', 'Rollback Drills'],
    deliverables: [
      'Full replica staging environment provisioned via IaC',
      'Automated database seeding & schema migration verification',
      'End-to-end SSL certificate issuance & renewal testing',
      'Automated rollback test ensuring zero operational data loss'
    ]
  },
  {
    step: '04',
    phaseBadge: 'PHASE 04 · DEPLOYMENT',
    title: 'Zero-Downtime Production Cutover',
    shortTitle: 'Production Cutover',
    description:
      'Executing DNS migration, origin locking, and live health verification with zero disruption to active users.',
    detail:
      'Using blue/green traffic shifting, DNS TTL warm-ups, and live health probes, your active users experience zero dropped requests or session disconnects during the production cutover.',
    image: '/hosting/cicd.jpg',
    alt: 'Zero Downtime CI/CD Blue Green Cutover',
    metric: '99.999%',
    metricLabel: 'Cutover Uptime',
    guarantee: 'Seamless traffic routing switch with immediate rollback triggers actively standing by.',
    icon: GitBranch,
    pills: ['DNS TTL Warm-Up', 'Blue/Green Shift', 'Instant Fallback'],
    deliverables: [
      'Gradual DNS TTL warm-up and origin IP locking',
      'Live canary or blue/green traffic cutover without dropped packets',
      'Continuous real-time database write synchronization',
      'Instant automated rollback trigger actively primed'
    ]
  },
  {
    step: '05',
    phaseBadge: 'PHASE 05 · RELIABILITY',
    title: 'Ongoing Management & Patching',
    shortTitle: '24/7 Management',
    description:
      'Continuous operating system security updates, backup verification, and 24/7 proactive health monitoring.',
    detail:
      'Our team maintains your production stack around the clock with real-time Prometheus/Grafana telemetry, weekly kernel security updates, continuous offsite snapshots, and guaranteed response SLAs.',
    image: '/hosting/observability.jpg',
    alt: '24/7 Monitoring and Infrastructure Observability',
    metric: '15-Min',
    metricLabel: 'Emergency SLA',
    guarantee: '24/7/365 active monitoring with direct escalation to senior infrastructure engineers.',
    icon: Activity,
    pills: ['Kernel Hotpatching', 'Offsite Snapshots', '15-Min SLA'],
    deliverables: [
      'Real-time metrics, anomaly alerting, and threshold monitoring',
      'Automated daily offsite snapshot backups with restore audits',
      'Continuous OS and security CVE hotpatching without downtime',
      'Dedicated 15-minute response SLA for critical priority incidents'
    ]
  }
];

export const HostingProcessDepthCarousel: React.FC = () => {
  const carouselRef = useRef<DepthCarouselHandle>(null);

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-white">
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#ea7008]/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#121110]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 relative z-10">
        
        {/* ─── Header ────────────────────────────────────────── */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-3 font-mono">
            PROCESS &amp; LIFECYCLE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121110] tracking-tight leading-tight mb-4 font-display">
            How We Deliver: Cloud &amp; Server Engineering
          </h2>
          <p className="text-[#5c544d] text-base leading-relaxed">
            A transparent, phased lifecycle with constant feedback loops, staging rehearsals, and zero downtime.
          </p>
        </div>

        {/* ─── 3D Depth Carousel Viewport (No Background Box) ── */}
        <div 
          data-lenis-prevent
          className="relative w-full overflow-hidden"
          style={{ height: '640px' }}
        >
          {/* Depth Carousel Component */}
          <DepthCarousel
            ref={carouselRef}
            items={hostingProcessSteps}
            cardWidth={420}
            cardHeight={530}
            radius={22}
            tint="#07080d"
            depth={230}
            spread={110}
            tilt={22}
            tiltDirection="right"
            perspective={1400}
            visibleCards={4}
            falloff={0.22}
            blur={6}
            duration={700}
            ease="power3.out"
            autoplay={false}
            loop={true}
            showControls={true}
            showIndicators={true}
            renderCard={(item) => {
              const step = item as HostingProcessStep;
              return (
                <div className="depth-carousel__card-overlay">
                  {/* Top Bar: Badge and Step number */}
                  <div className="flex items-center justify-between w-full">
                    <span className="depth-carousel__card-badge">
                      <Sparkles size={11} className="text-[#ea7008]" />
                      {step.phaseBadge}
                    </span>
                    <span className="text-white/60 font-mono text-xs font-bold px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-md">
                      {step.step} / 05
                    </span>
                  </div>

                  {/* Bottom Bar: Title, Description, and Pills */}
                  <div className="depth-carousel__card-body">
                    <h3 className="depth-carousel__card-title">
                      {step.title}
                    </h3>
                    <p className="depth-carousel__card-desc">
                      {step.description}
                    </p>
                    {step.pills && (
                      <div className="depth-carousel__card-pills">
                        {step.pills.map(pill => (
                          <span key={pill} className="depth-carousel__card-pill">
                            {pill}
                          </span>
                        ))}
                      </div>
                    )}
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

export default HostingProcessDepthCarousel;
