export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
    featured?: boolean;
    content: string[];
    coverTheme: 'engineering' | 'design' | 'case-studies' | 'cloud' | 'culture';
    coverAccent: string; // e.g. gradient colors or classes
}

export const blogCategories = [
    "View all",
    "Engineering",
    "Product & Design",
    "Case Studies",
    "DevOps & Cloud",
    "Company Culture",
];

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "building-scalable-web-apps-2026",
        title: "Building Scalable Web Applications in 2026",
        excerpt: "A deep dive into the architecture patterns we use to build systems that scale from day one, without over-engineering or unnecessary bloat.",
        category: "Engineering",
        date: "Jun 18, 2026",
        readTime: "6 min read",
        author: "Foremark Engineering",
        featured: true,
        coverTheme: "engineering",
        coverAccent: "from-[#1e1b4b] via-[#311042] to-portfolio-dark",
        content: [
            "Scaling is often misunderstood as a problem of pure capacity. In reality, modern scaling is a design challenge: it is about managing complexity, reducing coordination overhead between services, and ensuring the application remains maintainable as your customer base grows. Over the past year, our team has refined a template architecture that allows startups to launch quickly while laying down the exact foundations needed to support millions of requests.",
            "First, we embrace strict boundary isolation. Instead of deploying a sprawling mesh of microservices on day one, we design our application as a modular monolith. This keeps development speed high and deployment pipelines simple, while keeping database schemas clean and logical boundaries strict. Should a specific module face high load later on, it can be seamlessly extracted into a separate service without requiring database migrations or full rewrites.",
            "Second, we treat caching not as an optimization layer added at the end, but as a core architectural tier. By using stale-while-revalidate patterns at the edge and a robust Redis database layer for session and read caching, we offload up to 90% of requests from our primary transactional databases. This ensures high response speeds globally and drastically reduces server costs.",
            "Finally, database connection pooling and query optimization remain the unsung heroes of scalability. By utilizing connection pooling proxies like PgBouncer and enforcing strict query timeout limits, we prevent database lockups. When combined with carefully placed indexes and read-replicas, our systems remain responsive even under intense concurrent loads."
        ]
    },
    {
        id: "2",
        slug: "design-systems-that-actually-scale",
        title: "Design Systems That Actually Scale",
        excerpt: "Why most design systems fail after six months, and how we structure ours to foster product alignment, speed, and design longevity.",
        category: "Product & Design",
        date: "Jun 10, 2026",
        readTime: "5 min read",
        author: "Foremark Design",
        coverTheme: "design",
        coverAccent: "from-[#451a03] via-[#1a0f02] to-portfolio-dark",
        content: [
            "We have all seen it happen: a company spends three months building a comprehensive design system, only for it to be completely abandoned six months later. Designers start creating one-off components in Figma, developers write custom CSS overrides, and inconsistency creeps back in. Why does this happen? The answer is simple: design systems often focus on rigid constraints rather than workflow integration.",
            "At Foremark, we believe a design system is a living product. To ensure longevity, we build design tokens as the source of truth. Rather than hardcoding hex values or layouts, we establish a semantic layer (e.g., semantic tokens like 'background-primary' or 'border-interactive'). This allows us to update the styling of the entire product—including dark mode support—by changing a single config file.",
            "Furthermore, we bridge the gap between design and engineering by enforcing component parity. If a component is created in Figma, it must exist as a clean React component with matching props and names. This avoids translation errors and reduces developer handoff time to minutes.",
            "Ultimately, adoption is the true measure of a design system's success. We integrate automated linting in our repositories to catch styling overrides, and hold weekly reviews to refine the design library based on real product needs. A design system should feel like a accelerator, not a set of handcuffs."
        ]
    },
    {
        id: "3",
        slug: "observability-first-engineering",
        title: "Observability-First Engineering",
        excerpt: "How building with observability from the start changes the way teams ship, debug, and maintain production applications.",
        category: "Engineering",
        date: "Jun 02, 2026",
        readTime: "7 min read",
        author: "Foremark DevOps",
        coverTheme: "engineering",
        coverAccent: "from-[#022c22] via-[#061c16] to-portfolio-dark",
        content: [
            "Historically, monitoring was an afterthought. A system was built, deployed, and only when users started reporting errors would developers start inserting log lines. Observability-First Engineering flips this outdated model. It demands that telemetry is designed alongside your business logic, ensuring you have total visibility into your application from day one.",
            "True observability is built on three core pillars: metrics, logs, and traces. Instead of standard log lines, we implement structured logging with context-rich JSON objects. This allows log aggregation engines to parse and query errors dynamically based on user IDs, request paths, and session tokens.",
            "Tracing is where the real magic happens. By propagating trace IDs across database calls, external API requests, and microservice boundaries, we can visualize the complete lifecycle of a single request. When an API endpoint slows down, distributed tracing tells us exactly which database query or third-party service is causing the bottleneck.",
            "By implementing alerting thresholds based on real user experience metrics—such as latency percentiles and error rates—our team catches bugs before they impact customers. We build with observability first because a feature isn't complete until it is observable."
        ]
    },
    {
        id: "4",
        slug: "case-study-nappa-dori-ecommerce",
        title: "Case Study: Rebuilding Nappa Dori's Platform",
        excerpt: "A deep dive into how we re-engineered a legacy e-commerce platform into a lightning-fast, conversion-focused global checkout experience.",
        category: "Case Studies",
        date: "May 22, 2026",
        readTime: "8 min read",
        author: "Solutions Team",
        coverTheme: "case-studies",
        coverAccent: "from-[#1e1b4b] via-[#0f172a] to-portfolio-dark",
        content: [
            "Nappa Dori is a premium global lifestyle brand. When they approached us, their legacy e-commerce platform was struggling with slow load times, high checkout abandonment, and poor mobile performance. Our mandate was clear: re-engineer their online presence to deliver a fluid, high-fidelity experience worthy of their physical craft.",
            "We started by decoupling the frontend from the monolithic backend, moving to a headless commerce architecture. Using a modern React framework deployed to the edge, we built a fully static catalog page system that updates incrementally. Page load times dropped from over 4.5 seconds to a blazing-fast 0.6 seconds.",
            "Next, we overhauled the checkout experience. By reducing form fields, implementing Google Pay / Apple Pay integrations, and optimizing cart state management, we minimized friction. This single change resulted in a 40% increase in checkout completions within the first month.",
            "Finally, we integrated a custom content management system that allows Nappa Dori's editorial team to build rich media pages without engineering support. The result is a robust, lightning-fast platform that matches their exquisite physical brand."
        ]
    },
    {
        id: "5",
        slug: "infrastructure-as-code-best-practices",
        title: "Infrastructure as Code: Best Practices for Scale",
        excerpt: "Stop managing environments manually. How we use Terraform and GitOps to deploy client infrastructure reliably and securely.",
        category: "DevOps & Cloud",
        date: "May 18, 2026",
        readTime: "6 min read",
        author: "Cloud Team",
        coverTheme: "cloud",
        coverAccent: "from-[#082f49] via-[#021b2b] to-portfolio-dark",
        content: [
            "Deploying infrastructure by clicking buttons in a cloud console is a recipe for disaster. It leads to configuration drift, security holes, and environments that are impossible to replicate. Infrastructure as Code (IaC) solves this by treating your servers, databases, and networks as software code.",
            "Our team standardizes on Terraform for provisioning infrastructure. We write clean, reusable modules for common configurations, ensuring that testing, staging, and production environments are identical. To prevent drift, we run automated dry-runs (Terraform Plans) daily to verify that our live resources match our git configurations.",
            "We leverage a strict GitOps model for changes. Developers do not have direct write access to cloud environments. Instead, any changes to infrastructure are proposed via Pull Requests. Automated pipelines run security scanners (like tfsec) to check for open ports, missing encryption, or over-privileged roles before the plan can be merged.",
            "By locking down our pipelines and storing state files securely with state locking in AWS S3 and DynamoDB, we keep our clients' systems safe, reproducible, and fully documented in code."
        ]
    },
    {
        id: "6",
        slug: "why-we-chose-engineering-first",
        title: "Why We Chose 'Engineering First'",
        excerpt: "The core philosophy behind Foremark: why we focus on technical craftsmanship and refuse to cut corners on code quality.",
        category: "Company Culture",
        date: "May 14, 2026",
        readTime: "4 min read",
        author: "Founder's Journal",
        coverTheme: "culture",
        coverAccent: "from-[#311042] via-[#1a052e] to-portfolio-dark",
        content: [
            "The technology agency landscape is crowded with firms that prioritize speed, sales pitches, and templates over engineering quality. At Foremark, we decided to take a different path. We built our entire business model on the principle of 'Engineering First.' This is not a marketing tagline—it is the operational compass for every decision we make.",
            "Engineering First means we value clean architecture over fast shortcuts. We refuse to install bloated, unmaintained third-party libraries simply to finish a feature an hour sooner. Instead, we spend the time to write native, optimized solutions that keep page weights low and long-term maintenance costs close to zero.",
            "It also means our developers interact directly with clients. By removing layers of account managers, we ensure that technical requirements are understood perfectly and implementation proceeds without communication overhead. Our clients speak to the builders, not the sellers.",
            "We believe that great code is a competitive advantage. It makes products faster, more secure, and cheaper to operate. By choosing quality at the start, we build digital assets that stand the test of time."
        ]
    },
    {
        id: "7",
        slug: "product-thinking-for-engineers",
        title: "Product Thinking for Engineers",
        excerpt: "A practical guide to help developers understand business goals and build better product features with less guidance.",
        category: "Product & Design",
        date: "May 05, 2026",
        readTime: "6 min read",
        author: "Foremark Product",
        coverTheme: "design",
        coverAccent: "from-[#1c1917] via-[#292524] to-portfolio-dark",
        content: [
            "The best engineers do not just write code that complies; they write code that solves problems. Product thinking is the ability to look past the immediate ticketing requirements and understand the business goals, user frustrations, and product metrics that drive a feature request.",
            "When engineers lack product context, they build exactly what is written, even if the requirements are flawed. We encourage our team to ask three questions before writing a single line of code: Who is this for? What problem does it solve? And how will we measure its success?",
            "For instance, when building an onboarding flow, a developer with product thinking will recognize that every additional field increases signup friction. Instead of just adding a requested field, they might propose autocompleting data or making it optional. They become active contributors to the user experience.",
            "Developing product thinking transforms developers from task-takers into innovators. It aligns development with customer value and ensures we build products that users love."
        ]
    },
    {
        id: "8",
        slug: "the-cost-of-technical-debt",
        title: "The Real Cost of Technical Debt",
        excerpt: "How to identify, monitor, and systematically pay down legacy technical debt before it stalls your engineering roadmap.",
        category: "Engineering",
        date: "Apr 28, 2026",
        readTime: "7 min read",
        author: "Foremark Engineering",
        coverTheme: "engineering",
        coverAccent: "from-[#111827] via-[#030712] to-portfolio-dark",
        content: [
            "Technical debt is like financial debt: taking a shortcut helps you deliver today, but you accrue interest. If you never pay it down, the interest payments eventually take over. Soon, simple features that should take two days start taking two weeks, and developer morale plummets.",
            "We manage technical debt by making it visible. We maintain a technical debt log right alongside our project roadmap. When we make a conscious decision to write a shortcut, we document the compromise, the reason, and the estimated effort required to refactor it properly.",
            "Additionally, we allocate a consistent 20% of every development sprint to maintenance, tooling, and refactoring. This keeps our codebases fresh and ensures we are continuously improving our developer experience.",
            "Ignoring technical debt is a silent killer of tech startups. By managing it actively, we keep our systems robust and our teams shipping features at maximum velocity."
        ]
    }
];