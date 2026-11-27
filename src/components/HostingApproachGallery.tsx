import React from 'react';
import type { LucideIcon } from 'lucide-react';
import type { ServiceData, PhilosophyItem } from '../data/servicesData';
import { WebsiteApproach } from './WebsiteApproach';
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

export const hostingApproachItems: {
  image: string;
  text: string;
  description: string;
  alt: string;
  category: string;
  icon: LucideIcon;
}[] = [
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

export const HostingApproachGallery: React.FC<{ service: ServiceData }> = ({ service }) => (
  <WebsiteApproach
    service={service}
    heading={service.howWeDoItTitle}
    items={hostingApproachItems.map(({ text, description, icon }): PhilosophyItem => ({ title: text, description, icon }))}
  />
);

export default HostingApproachGallery;
