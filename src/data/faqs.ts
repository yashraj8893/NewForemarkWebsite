export interface FAQItem {
  q: string;
  a: string;
}

export const faqs: FAQItem[] = [
  {
    q: "What kind of projects does Foremark take on?",
    a: "We architect custom web applications, SaaS platforms, and enterprise automation systems. From venture-backed teams requiring an MVP with production-grade foundations to mature enterprises modernizing legacy architecture."
  },
  {
    q: "How long does a typical project take?",
    a: "A marketing flagship or bespoke site typically ships in 1–3 weeks. Full-scale SaaS applications and custom software platforms range between 4–12 weeks. We specify explicit milestones upfront with zero scope ambiguity."
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. Our client footprint spans India, North America, the UK, and the UAE. We operate with structured async engineering cadences, weekly demo builds, and transparent Slack/Linear channels."
  },
  {
    q: "What technologies do you use?",
    a: "Our core engineering stack comprises React, Next.js, Node.js, TypeScript, PostgreSQL, and Redis, deployed across AWS and Vercel infrastructure. We select tooling strictly based on reliability and scale."
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Yes. We regularly conduct deep architectural audits on inherited codebases to eliminate performance bottlenecks, enforce CI/CD rigor, and remediate technical debt before shipping new features."
  },
];
