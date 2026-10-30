import React from 'react';
import { CircularGallery } from './CircularGallery';
import type { GalleryItem } from './CircularGallery';
import {
  Cloud,
  Shield,
  Database,
  Activity,
  Server,
  Lock,
  GitBranch,
  Layers,
} from 'lucide-react';

export const hostingApproachItems: (GalleryItem & {
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
})[] = [
  {
    image: '/hosting/iac.jpg',
    text: 'Infrastructure as Code (IaC)',
    description:
      'Every server, subnet, firewall, and container is defined declaratively using Terraform and Docker, allowing repeatable, version-controlled disaster recovery.',
    alt: 'Infrastructure as Code and Terraform automation',
    category: 'Architecture',
    icon: Cloud
  },
  {
    image: '/hosting/cdn.jpg',
    text: 'Global Edge CDN & Caching',
    description:
      'We deploy Cloudflare Enterprise and edge compute layers to terminate SSL in single-digit milliseconds and protect origins from DDoS attacks.',
    alt: 'Global Edge CDN and low latency caching network',
    category: 'Performance',
    icon: Shield
  },
  {
    image: '/hosting/redundancy.jpg',
    text: 'Automated Redundancy & Backups',
    description:
      'Point-in-time database recovery, multi-AZ database clustering, and isolated offsite snapshot backups ensure zero data loss.',
    alt: 'Automated redundancy and multi-region backups',
    category: 'Reliability',
    icon: Database
  },
  {
    image: '/hosting/observability.jpg',
    text: 'Proactive 24/7 Observability',
    description:
      'Real-time metrics, log aggregation, and threshold alerting catch anomalies before they impact your users.',
    alt: 'Real-time monitoring and telemetry dashboards',
    category: 'Monitoring',
    icon: Activity
  },
  {
    image: '/hosting/datacenter.jpg',
    text: 'Managed Server Hosting',
    description:
      'Dedicated or containerized Linux server environments tuned specifically for your application stack with automated vertical and horizontal scaling.',
    alt: 'Dedicated managed server hosting and bare-metal nodes',
    category: 'Compute',
    icon: Server
  },
  {
    image: '/hosting/security.jpg',
    text: 'DDoS Shield & Edge WAF',
    description:
      'Enterprise Web Application Firewall (WAF), intelligent bot mitigation, and custom rate-limiting rules protecting origin server clusters.',
    alt: 'DDoS protection and enterprise WAF defense',
    category: 'Security',
    icon: Lock
  },
  {
    image: '/hosting/cicd.jpg',
    text: 'Zero-Downtime CI/CD',
    description:
      'Automated deployment pipelines with blue/green or rolling updates that eliminate downtime during releases and database migrations.',
    alt: 'Zero-downtime CI/CD automation pipelines',
    category: 'DevOps',
    icon: GitBranch
  },
  {
    image: '/hosting/database.jpg',
    text: 'Database Clustering & Failover',
    description:
      'High-availability PostgreSQL, MySQL, and Redis clusters with automated instantaneous failover and synchronized read-replicas.',
    alt: 'High-availability database clusters and failover',
    category: 'Data Storage',
    icon: Layers
  }
];

export const HostingApproachGallery: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16">
        
        {/* ─── Header ────────────────────────────────────────── */}
        <div className="max-w-2xl mb-14">
          <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-3 font-mono">
            OUR APPROACH
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121110] tracking-tight leading-tight mb-4">
            The Foremark Standard: How We Host & Manage Infrastructure
          </h2>
          <p className="text-[#5c544d] text-base leading-relaxed">
            We engineer resilient, self-healing cloud architectures that absorb traffic surges, deflect security threats, and keep your business online 24/7.
          </p>
        </div>

        {/* ─── Circular Gallery Viewport (No Background Box) ──── */}
        <div 
          data-lenis-prevent
          className="relative w-full overflow-hidden" 
          style={{ height: '600px' }}
        >
          <CircularGallery
            items={hostingApproachItems}
            bend={3}
            textColor="#121110"
            borderRadius={0.06}
            scrollEase={0.05}
            scrollSpeed={1.8}
            itemSize={1.05}
            itemAspect={0.78}
            gap={0.38}
            shadow={0.3}
            wave={1.1}
            fadeEdges={0.12}
            font="bold 18px 'Plus Jakarta Sans', Figtree, sans-serif"
            onItemClick={(item, index) => {
              console.log('Opened card:', item.text, index);
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default HostingApproachGallery;
