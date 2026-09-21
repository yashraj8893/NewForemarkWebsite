import {
    Code2,
    Cpu,
    Server,
    Workflow,
    Globe,
    Layout,
    Smartphone,
    Search,
    Database,
    Layers,
    Zap,
    Lock,
    Terminal,
    Cloud,
    Sliders,
    GitBranch,
    FileCheck,
    Bot,
    ShieldCheck,
    Sparkles,
    Shield,
    MessageSquare,
    DollarSign,
    FileText,
    Activity,
    Repeat,
    type LucideIcon,
} from 'lucide-react';
import { WebsiteAnimation, WebAppAnimation, ServerAnimation, AutomationAnimation } from '../components/ServicesGrid';

export interface DeliverableItem {
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface MetricItem {
    value: string;
    label: string;
    description: string;
}

export interface TechStackCategory {
    category: string;
    items: string[];
}

export interface ProcessStep {
    step: string;
    title: string;
    description: string;
}

export interface FaqItemData {
    question: string;
    answer: string;
}

export interface PhilosophyItem {
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface ServiceData {
    slug: string;
    title: string;
    heroTag: string;
    tagline: string;
    shortDesc: string;
    overview: string;
    icon: LucideIcon;
    animation: React.ComponentType;
    howWeDoItTitle: string;
    howWeDoItSubtitle: string;
    philosophy: PhilosophyItem[];
    deliverables: DeliverableItem[];
    metrics: MetricItem[];
    techStack: TechStackCategory[];
    processSteps: ProcessStep[];
    faqs: FaqItemData[];
    seo: {
        title: string;
        description: string;
    };
}

export const servicesData: Record<string, ServiceData> = {
    'website-development': {
        slug: 'website-development',
        title: 'Website Development',
        heroTag: 'Core Service',
        tagline: 'Bespoke digital flagships engineered for speed, conversion, and enduring brand prestige.',
        shortDesc:
            "We design and build bespoke, high-performance websites that capture your brand's essence and drive meaningful user action. Our sites are engineered for speed, responsiveness, and SEO optimization to convert visitors into customers.",
        overview:
            'At Foremark, a website is never treated as a static digital brochure. It is the primary engine of your brand’s digital presence, authority, and revenue. We build custom-engineered web experiences from the ground up — zero bloat, no generic templates, and obsessively tuned for performance, responsive beauty, and technical SEO.',
        icon: Code2,
        animation: WebsiteAnimation,
        howWeDoItTitle: 'The Foremark Standard: How We Build Websites',
        howWeDoItSubtitle:
            'We combine Swiss-style typographic precision with modern frontend engineering to deliver websites that outperform your competition on every dimension.',
        philosophy: [
            {
                icon: Layout,
                title: 'Component-Driven Architecture',
                description:
                    'We craft bespoke design systems and modular React/Next.js components that guarantee visual cohesion, fluid responsive scaling across every screen, and effortless maintainability.',
            },
            {
                icon: Zap,
                title: 'Sub-Second Performance SLA',
                description:
                    'Every asset, script, and font is optimized with server-side caching, edge delivery, and modern image compression to achieve 98+ Google Lighthouse scores and instant user responsiveness.',
            },
            {
                icon: Search,
                title: 'Search Engine Dominance',
                description:
                    'Semantic HTML5, automated dynamic OpenGraph cards, schema.org structured data, and edge-rendered metadata ensure search engines rank and understand your site effortlessly.',
            },
            {
                icon: Layers,
                title: 'Headless CMS Flexibility',
                description:
                    'We integrate client-friendly headless CMS platforms (Sanity, Strapi, Contentful) so your marketing team can publish updates in seconds without breaking design integrity.',
            },
        ],
        deliverables: [
            {
                icon: Globe,
                title: 'Custom Corporate Websites',
                description:
                    'Brand-defining digital flagships crafted with custom typography, bespoke layouts, and interactive brand storytelling.',
            },
            {
                icon: Smartphone,
                title: 'Responsive Web Experiences',
                description:
                    'Flawless cross-device touch interactions, adaptive mobile viewports, and native-feeling gesture support.',
            },
            {
                icon: DollarSign,
                title: 'Headless E-Commerce',
                description:
                    'High-converting storefronts built on Shopify Plus or custom engines with sub-second checkout speeds.',
            },
            {
                icon: Sparkles,
                title: 'Interactive Landing Pages',
                description:
                    'High-impact campaign pages with dynamic 3D elements, micro-interactions, and targeted conversion funnels.',
            },
            {
                icon: FileText,
                title: 'Technical SEO & Schema',
                description:
                    'Complete structured data setup, XML sitemaps, semantic hierarchy, and crawl budget optimization.',
            },
            {
                icon: Sliders,
                title: 'CMS Setup & Client Training',
                description:
                    'Tailored editor dashboards with role permissions, preview environments, and step-by-step team training.',
            },
        ],
        metrics: [
            {
                value: '<1.0s',
                label: 'LCP Load Time',
                description: 'Industry-leading Core Web Vitals across mobile & desktop devices',
            },
            {
                value: '98+',
                label: 'Lighthouse Score',
                description: 'Audited across performance, accessibility, SEO, and engineering standards',
            },
            {
                value: '2x+',
                label: 'Avg. Conversion Uplift',
                description: 'Measured across client redesigns within the first 60 days of launch',
            },
            {
                value: '100%',
                label: 'Codebase Ownership',
                description: 'Complete intellectual property transfer with clean, documented TypeScript repository',
            },
        ],
        techStack: [
            {
                category: 'Frontend & UI',
                items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
            },
            {
                category: 'Headless CMS',
                items: ['Sanity.io', 'Strapi', 'Contentful', 'MDX'],
            },
            {
                category: 'Edge & Infrastructure',
                items: ['Vercel Edge Network', 'Cloudflare CDN', 'AWS S3', 'GitHub Actions CI/CD'],
            },
            {
                category: 'Analytics & Optimization',
                items: ['Google Tag Manager', 'PostHog', 'Schema.org', 'Lighthouse CI'],
            },
        ],
        processSteps: [
            {
                step: '01',
                title: 'Discovery & Brand Positioning',
                description:
                    'We unpack your target audience, commercial positioning, conversion objectives, and competitive landscape before touching Figma or code.',
            },
            {
                step: '02',
                title: 'Wireframing & UI/UX Design',
                description:
                    'Iterative design sprints crafting interactive layout prototypes, design tokens, typography, and micro-interactions in Figma.',
            },
            {
                step: '03',
                title: 'Modern Full-Stack Engineering',
                description:
                    'Writing clean, typed TypeScript and React components with atomic CSS, headless CMS schema hooks, and smooth animation triggers.',
            },
            {
                step: '04',
                title: 'Cross-Device QA & Core Web Vitals',
                description:
                    'Rigorous cross-browser, responsive, accessibility (WCAG 2.1), and Core Web Vitals stress tests under simulated throttled networks.',
            },
            {
                step: '05',
                title: 'Launch & Hypercare Support',
                description:
                    'Zero-downtime DNS deployment, team CMS onboarding, production analytics verification, and 30-day dedicated hypercare support.',
            },
        ],
        faqs: [
            {
                question: 'How long does a website development project take?',
                answer:
                    'Most marketing websites take between 3 to 6 weeks from kickoff to final launch. Larger multi-page portals or headless e-commerce builds typically take 6 to 10 weeks depending on custom integrations.',
            },
            {
                question: 'Do we get full ownership of the code and design?',
                answer:
                    'Yes, 100%. Once completed and launched, all intellectual property, Figma design files, source code repositories, and deployment configurations are fully transferred to your organization.',
            },
            {
                question: 'Can our team update content without developer assistance?',
                answer:
                    'Absolutely. We integrate visual headless CMS setups like Sanity or Strapi, configured so your marketing and editorial team members can easily edit copy, update images, and publish blog posts without breaking layouts.',
            },
            {
                question: 'Will the site be optimized for mobile devices and search engines?',
                answer:
                    'Mobile responsiveness and technical SEO are built into our core engineering standards. Every site we ship adheres to mobile-first UX, Core Web Vitals targets, and schema markup best practices.',
            },
            {
                question: 'What happens after the website is launched?',
                answer:
                    'We provide a 30-day warranty and hypercare period post-launch. Following that, we offer ongoing maintenance and continuous improvement retainers to support your growth.',
            },
        ],
        seo: {
            title: 'Website Development Services | Foremark Technologies',
            description:
                'Bespoke, high-performance websites engineered for speed, SEO, and conversion by Foremark Technologies.',
        },
    },

    'software-development': {
        slug: 'software-development',
        title: 'Web App / Software Development',
        heroTag: 'Most Requested',
        tagline: 'Scalable full-stack software, custom SaaS platforms, and high-concurrency internal systems.',
        shortDesc:
            'From internal tools to customer-facing platforms, we design and engineer full-stack software that streamlines operations and scales with demand. Our team handles everything from system architecture to deployment, so your product is fast, secure, and built to last.',
        overview:
            'Foremark builds mission-critical web applications and software systems designed to solve complex business bottlenecks. Whether engineering a multi-tenant SaaS application, a bespoke client portal, or an internal operational platform, our software is architected with enterprise-grade type safety, high concurrency, and zero-compromise security.',
        icon: Cpu,
        animation: WebAppAnimation,
        howWeDoItTitle: 'The Foremark Standard: How We Build Software',
        howWeDoItSubtitle:
            'We adhere to rigorous architectural design patterns, end-to-end type safety, and clean domain boundaries to create platforms that scale without technical debt.',
        philosophy: [
            {
                icon: Database,
                title: 'Domain-Driven System Architecture',
                description:
                    'We decouple frontends, APIs, and background job workers using modular architectures, ensuring each layer can scale independently without cascading failures.',
            },
            {
                icon: ShieldCheck,
                title: 'End-to-End Type Safety',
                description:
                    'From database schemas to API contracts and frontend views, full TypeScript/tRPC typing prevents runtime regressions and accelerates feature velocity.',
            },
            {
                icon: Lock,
                title: 'Zero-Trust Security & RBAC',
                description:
                    'Granular role-based access control, encrypted sessions, strict data isolation, and automated security checks protect your company and user data.',
            },
            {
                icon: GitBranch,
                title: 'Automated CI/CD & Staging',
                description:
                    'Every pull request triggers automated linting, unit tests, and ephemeral staging previews, ensuring production deployments are completely predictable.',
            },
        ],
        deliverables: [
            {
                icon: Layers,
                title: 'Custom SaaS Platforms',
                description:
                    'Multi-tenant subscription web applications with integrated payment billing, team seats, and analytics dashboards.',
            },
            {
                icon: Lock,
                title: 'Client & Vendor Portals',
                description:
                    'Secure authenticated workspaces for document sharing, automated workflows, and customer onboarding.',
            },
            {
                icon: Sliders,
                title: 'Internal Operations Systems',
                description:
                    'Custom ERPs, inventory managers, and dispatch dashboards tailored to your exact operational workflows.',
            },
            {
                icon: Terminal,
                title: 'REST & GraphQL APIs',
                description:
                    'High-throughput API services with rate limiting, Swagger/OpenAPI documentation, and webhooks.',
            },
            {
                icon: Database,
                title: 'Database Architecture & Cache',
                description:
                    'Normalized relational and NoSQL databases with indexing, replication, Redis caching, and backup strategies.',
            },
            {
                icon: Zap,
                title: 'Third-Party Integrations',
                description:
                    'Deep two-way integrations with payment gateways, banking APIs, CRMs, and accounting software.',
            },
        ],
        metrics: [
            {
                value: '99.9%',
                label: 'Crash-Free Sessions',
                description: 'Rigorous test coverage and defensive error boundaries in production',
            },
            {
                value: '2-Week',
                label: 'Sprint Cadence',
                description: 'Transparent progress demos and rapid incremental feature shipping',
            },
            {
                value: '10x',
                label: 'Concurrency Scalability',
                description: 'Architected to handle sudden traffic spikes without degraded latency',
            },
            {
                value: '100%',
                label: 'Clean IP Transfer',
                description: 'Fully documented code, Dockerized environments, and architecture diagrams',
            },
        ],
        techStack: [
            {
                category: 'Frontend & State',
                items: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Zustand'],
            },
            {
                category: 'Backend & Services',
                items: ['Node.js', 'Express / NestJS', 'Go', 'Python', 'tRPC', 'GraphQL', 'REST'],
            },
            {
                category: 'Databases & Storage',
                items: ['PostgreSQL', 'Supabase', 'Redis', 'Prisma ORM', 'AWS S3'],
            },
            {
                category: 'DevOps & Auth',
                items: ['Docker', 'AWS ECS', 'Clerk Auth', 'NextAuth', 'GitHub Actions'],
            },
        ],
        processSteps: [
            {
                step: '01',
                title: 'Technical Scoping & Architecture',
                description:
                    'We define domain entities, database schemas, API specs, authentication rules, and technical constraints.',
            },
            {
                step: '02',
                title: 'Interactive Prototyping',
                description:
                    'Clickable prototypes and user journey validation to confirm UX flows before writing backend code.',
            },
            {
                step: '03',
                title: 'Agile Development Sprints',
                description:
                    'Two-week sprints with bi-weekly staging builds, code reviews, and transparent demo walkthroughs.',
            },
            {
                step: '04',
                title: 'Security Audit & Stress QA',
                description:
                    'Penetration audits, stress load testing, database query optimization, and user acceptance testing.',
            },
            {
                step: '05',
                title: 'Production Cutover & Handover',
                description:
                    'Orchestrated database migration, production cutover, observability setup, and team documentation.',
            },
        ],
        faqs: [
            {
                question: 'How do you handle project management and communication?',
                answer:
                    'We run in 2-week sprints with weekly or bi-weekly video check-ins. You get direct Slack/WhatsApp access to our engineers and staging environments to test features as they are built.',
            },
            {
                question: 'Can you modernize or rebuild our existing legacy software?',
                answer:
                    'Yes. We frequently audit and refactor existing legacy applications, either incrementally replacing components with modern microservices or engineering clean greenfield rebuilds.',
            },
            {
                question: 'How do you ensure data security and privacy?',
                answer:
                    'We implement industry-standard encryption in transit (TLS 1.3) and at rest (AES-256), strict role-based authorization, sanitization against SQL injection/XSS, and audit logs.',
            },
            {
                question: 'What is your typical engagement model?',
                answer:
                    'We work on fixed-scope milestone projects for well-defined specifications, or dedicated monthly retainer squads for evolving software roadmaps.',
            },
            {
                question: 'Who owns the software and intellectual property?',
                answer:
                    'You retain 100% ownership of all source code, database architectures, and assets from day one.',
            },
        ],
        seo: {
            title: 'Custom Web App & Software Development | Foremark Technologies',
            description:
                'Full-stack web application and software development services built for scale, performance, and security by Foremark.',
        },
    },

    'cloud-hosting': {
        slug: 'cloud-hosting',
        title: 'Web Servers & Hosting',
        heroTag: 'Reliable & Secure',
        tagline: 'High-availability cloud infrastructure, managed hosting, and proactive security monitoring.',
        shortDesc:
            "We deploy and manage secure, high-availability cloud infrastructure and managed hosting architectures tailored to your application's needs. With robust security monitoring, scalable designs, and reliable backups, we ensure your platforms remain online and performant under load.",
        overview:
            'Uptime and performance are the bedrock of digital credibility. Foremark plans, provisions, and maintains enterprise-grade cloud environments on AWS, Google Cloud, and edge networks. We eliminate infrastructure headaches with automated scaling, zero-downtime deployments, real-time security alerts, and continuous database backups.',
        icon: Server,
        animation: ServerAnimation,
        howWeDoItTitle: 'The Foremark Standard: How We Host & Manage Infrastructure',
        howWeDoItSubtitle:
            'We engineer resilient, self-healing cloud architectures that absorb traffic surges, deflect security threats, and keep your business online 24/7.',
        philosophy: [
            {
                icon: Cloud,
                title: 'Infrastructure as Code (IaC)',
                description:
                    'Every server, subnet, firewall, and container is defined declaratively using Terraform and Docker, allowing repeatable, version-controlled disaster recovery.',
            },
            {
                icon: Shield,
                title: 'Global Edge CDN & Caching',
                description:
                    'We deploy Cloudflare Enterprise and edge compute layers to terminate SSL in single-digit milliseconds and protect origins from DDoS attacks.',
            },
            {
                icon: Database,
                title: 'Automated Redundancy & Backups',
                description:
                    'Point-in-time database recovery, multi-AZ database clustering, and isolated offsite snapshot backups ensure zero data loss.',
            },
            {
                icon: Activity,
                title: 'Proactive 24/7 Observability',
                description:
                    'Real-time metrics, log aggregation, and threshold alerting catch anomalies before they impact your users.',
            },
        ],
        deliverables: [
            {
                icon: Cloud,
                title: 'Cloud Architecture Design',
                description:
                    'Custom multi-tier VPC topologies engineered for high resilience, security isolation, and cost efficiency.',
            },
            {
                icon: Server,
                title: 'Managed Server Hosting',
                description:
                    'Dedicated or containerized Linux server environments tuned specifically for your application stack.',
            },
            {
                icon: Database,
                title: 'Database Clustering & Failover',
                description:
                    'High-availability PostgreSQL, MySQL, and Redis clusters with automated failover and read-replicas.',
            },
            {
                icon: GitBranch,
                title: 'Zero-Downtime CI/CD Pipelines',
                description:
                    'Automated deployment pipelines with blue/green or rolling updates that eliminate downtime during releases.',
            },
            {
                icon: ShieldCheck,
                title: 'DDoS Protection & WAF',
                description:
                    'Enterprise Web Application Firewall (WAF), bot mitigation, and rate-limiting rules protecting origins.',
            },
            {
                icon: Repeat,
                title: 'Disaster Recovery & Backup',
                description:
                    'Automated snapshot lifecycle policies with automated restoration tests ensuring data safety.',
            },
        ],
        metrics: [
            {
                value: '99.99%',
                label: 'Guaranteed Uptime',
                description: 'High-availability multi-zone cloud architecture with zero single points of failure',
            },
            {
                value: '<50ms',
                label: 'Global Edge Latency',
                description: 'Optimized CDN caching, DNS routing, and HTTP/3 multiplexing',
            },
            {
                value: '24/7/365',
                label: 'Health Monitoring',
                description: 'Real-time alerting for CPU, memory, error rates, and disk thresholds',
            },
            {
                value: '15-Min',
                label: 'Incident SLA',
                description: 'Dedicated emergency escalation paths for critical infrastructure issues',
            },
        ],
        techStack: [
            {
                category: 'Cloud Providers',
                items: ['Amazon Web Services (AWS)', 'Google Cloud (GCP)', 'DigitalOcean', 'Hetzner'],
            },
            {
                category: 'Containerization & IaC',
                items: ['Docker', 'Docker Compose', 'Terraform', 'Kubernetes', 'Ansible'],
            },
            {
                category: 'Edge & Security',
                items: ['Cloudflare', 'Nginx', "Let's Encrypt SSL", 'AWS WAF', 'Fail2ban'],
            },
            {
                category: 'Monitoring & Logs',
                items: ['Prometheus', 'Grafana', 'UptimeRobot', 'Sentry', 'AWS CloudWatch'],
            },
        ],
        processSteps: [
            {
                step: '01',
                title: 'Infrastructure Audit & Sizing',
                description:
                    'We analyze your workload demands, traffic patterns, security requirements, and budget constraints.',
            },
            {
                step: '02',
                title: 'Topology & Security Architecture',
                description:
                    'Designing VPCs, security groups, subnets, firewall rules, and automated deployment pipelines.',
            },
            {
                step: '03',
                title: 'Staging Provisioning & Dry Run',
                description:
                    'Deploying the staging cluster with automated database seeding, SSL certificates, and rollback tests.',
            },
            {
                step: '04',
                title: 'Zero-Downtime Production Cutover',
                description:
                    'Executing DNS migration, origin locking, and live health verification with zero disruption to active users.',
            },
            {
                step: '05',
                title: 'Ongoing Management & Patching',
                description:
                    'Continuous operating system security updates, backup verification, and 24/7 health monitoring.',
            },
        ],
        faqs: [
            {
                question: 'Can you migrate our existing servers without downtime?',
                answer:
                    'Yes. We plan and rehearse database replication and DNS TTL warm-ups in advance to perform seamless cutovers with zero user disruption.',
            },
            {
                question: 'Which cloud provider do you recommend?',
                answer:
                    'We select the provider that best fits your scale and budget — typically AWS for complex microservices or DigitalOcean/Hetzner for cost-efficient dedicated setups.',
            },
            {
                question: 'How do you handle backups and disaster recovery?',
                answer:
                    'We configure automated daily and hourly database snapshots stored across separate geographical regions, with tested 1-click restore capabilities.',
            },
            {
                question: 'What kind of monitoring and alerting is included?',
                answer:
                    'Our monitoring stack tracks CPU, RAM, disk I/O, network bandwidth, SSL expiry, HTTP 5xx error spikes, and endpoint responsiveness around the clock.',
            },
            {
                question: 'Who pays the cloud hosting bills?',
                answer:
                    'You maintain direct billing ownership of your AWS/Cloud accounts. Foremark manages the technical operations, ensuring you have complete transparent control.',
            },
        ],
        seo: {
            title: 'Managed Web Servers & Cloud Hosting | Foremark Technologies',
            description:
                'Enterprise-grade cloud infrastructure, managed hosting, and 24/7 uptime monitoring by Foremark Technologies.',
        },
    },

    'business-automation': {
        slug: 'business-automation',
        title: 'Business Automation',
        heroTag: 'High Impact',
        tagline: 'Intelligent workflow automations, custom API integrations, and AI-driven business operations.',
        shortDesc:
            'We audit your existing workflows and identify where manual, repetitive work is costing you time. Then we build intelligent automations — integrating your tools and systems — so your team can focus on the work that actually needs a human.',
        overview:
            'Manual data entry, fragmented spreadsheets, and repetitive human handoffs drain productivity and introduce costly errors. Foremark maps your organization’s operational bottlenecks and engineers resilient, automated bridges across your software stack — connecting CRMs, payment gateways, internal databases, and AI assistants.',
        icon: Workflow,
        animation: AutomationAnimation,
        howWeDoItTitle: 'The Foremark Standard: How We Automate Workflows',
        howWeDoItSubtitle:
            'We eliminate operational friction by building intelligent, fail-safe event pipelines that automate repetitive tasks and guarantee data accuracy.',
        philosophy: [
            {
                icon: Search,
                title: 'Comprehensive Workflow Audit',
                description:
                    'We analyze your operational processes step by step to identify the exact hours lost to repetitive tasks and calculate automation ROI before writing code.',
            },
            {
                icon: Zap,
                title: 'Fail-Safe Automation Architecture',
                description:
                    'Automations are built with retry queues, dead-letter logging, and instant notification alerts so no lead or transaction ever slips through unnoticed.',
            },
            {
                icon: Bot,
                title: 'AI-Powered Document & Text Parsing',
                description:
                    'We incorporate LLM pipelines to extract structured data from unstructured PDF invoices, emails, and contracts with high accuracy.',
            },
            {
                icon: Lock,
                title: 'Self-Hosted & Enterprise Privacy',
                description:
                    'Deploying self-hosted n8n or custom microservices ensures your proprietary business data never leaves your secure infrastructure.',
            },
        ],
        deliverables: [
            {
                icon: Workflow,
                title: 'CRM & Lead Pipeline Automation',
                description:
                    'Instant lead capture, AI qualification, routing to sales reps, and automated calendar scheduling.',
            },
            {
                icon: DollarSign,
                title: 'Billing & Invoicing Workflows',
                description:
                    'Automated Stripe, Razorpay, or QuickBooks invoice generation, reconciliation, and payment reminders.',
            },
            {
                icon: FileCheck,
                title: 'AI Document Processing',
                description:
                    'Extraction of key data from vendor PDFs, receipts, and client intake forms directly into your database.',
            },
            {
                icon: Database,
                title: 'Cross-Platform Sync Engines',
                description:
                    'Two-way data synchronizations between ERPs, databases, spreadsheets, and third-party SaaS apps.',
            },
            {
                icon: MessageSquare,
                title: 'Slack & Teams Operations Bots',
                description:
                    'Interactive chat bots for team approvals, daily metric summaries, and automated alert triage.',
            },
            {
                icon: Terminal,
                title: 'Custom Webhook Microservices',
                description:
                    'Lightweight Node.js or Python background microservices for complex custom business logic.',
            },
        ],
        metrics: [
            {
                value: '80%+',
                label: 'Manual Tasks Reduced',
                description: 'Freeing your operational staff to focus on high-value business work',
            },
            {
                value: 'Zero',
                label: 'Data Duplication',
                description: 'Single source of truth synchronizations across all business software tools',
            },
            {
                value: 'Instant',
                label: 'Event Processing',
                description: 'Real-time webhook triggers replacing delayed end-of-day batch processing',
            },
            {
                value: '100%',
                label: 'Audit Trail',
                description: 'Full execution logs, error traces, and retry mechanisms for total transparency',
            },
        ],
        techStack: [
            {
                category: 'Automation Engines',
                items: ['n8n (Self-hosted & Cloud)', 'Make.com', 'Zapier', 'Temporal.io'],
            },
            {
                category: 'Code & Queues',
                items: ['Node.js / TypeScript', 'Python', 'BullMQ', 'FastAPI', 'Webhooks'],
            },
            {
                category: 'AI & Document Parsing',
                items: ['OpenAI API', 'Anthropic Claude API', 'LangChain', 'Tesseract OCR'],
            },
            {
                category: 'Integrations',
                items: ['HubSpot', 'Salesforce', 'Stripe', 'Google Workspace', 'Slack', 'Airtable'],
            },
        ],
        processSteps: [
            {
                step: '01',
                title: 'Workflow Audit & Mapping',
                description:
                    'We interview your team, map existing processes, and identify top automation opportunities.',
            },
            {
                step: '02',
                title: 'Logic Spec & Error Fallbacks',
                description:
                    'Defining data schemas, edge cases, error fallbacks, and human-in-the-loop approvals.',
            },
            {
                step: '03',
                title: 'Integration & Pipeline Build',
                description:
                    'Connecting APIs, creating webhook listeners, and structuring transformation logic.',
            },
            {
                step: '04',
                title: 'Sandbox Simulation & Stress Test',
                description:
                    'Testing with live edge scenarios, failed webhooks, boundary data, and simulated downtime.',
            },
            {
                step: '05',
                title: 'Deployment, Logging & Training',
                description:
                    'Deploying with observability dashboards and training your staff on how to monitor triggers.',
            },
        ],
        faqs: [
            {
                question: 'What tools can you connect and automate?',
                answer:
                    'Almost any tool with an API or webhook support — including HubSpot, Salesforce, Stripe, QuickBooks, Google Workspace, Slack, Notion, Airtable, and custom SQL databases.',
            },
            {
                question: 'What happens if a third-party service experiences downtime?',
                answer:
                    'Our automations are engineered with exponential backoff retries and dead-letter queues. If an external API is down, events are safely queued and retried automatically once restored.',
            },
            {
                question: 'Is our company data secure during automations?',
                answer:
                    'Yes. We prioritize self-hosted engines like n8n or direct microservices running on your private cloud, ensuring your sensitive business data is never exposed to third-party shared runners.',
            },
            {
                question: 'Can automation include human approvals?',
                answer:
                    'Absolutely. We routinely build workflows with human-in-the-loop checkpoints (e.g., Slack or email interactive approval buttons before high-value actions are dispatched).',
            },
            {
                question: 'How quickly can we see results from an automation project?',
                answer:
                    'Most focused automation workflows can be mapped, built, tested, and deployed within 1 to 3 weeks.',
            },
        ],
        seo: {
            title: 'Business Automation & Workflow Engineering | Foremark Technologies',
            description:
                'Streamline operations, connect APIs, and eliminate manual work with custom business automation solutions by Foremark.',
        },
    },
};

export const serviceSlugs = Object.keys(servicesData);
