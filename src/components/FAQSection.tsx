import { useState } from 'react';

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

interface FAQSectionProps {
  className?: string;
  withOuterContainer?: boolean;
}

export const FAQSection = ({
  className = "py-16 md:py-24",
  withOuterContainer = false,
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const content = (
    <div className="bg-[#121110] border border-portfolio-gold/35 hover:border-portfolio-gold/60 shadow-[0_4px_30px_rgba(234,112,8,0.12)] rounded-3xl md:rounded-4xl p-5 sm:p-8 md:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 transition-all duration-500 relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/40 before:to-transparent">
      {/* Left Column */}
      <div className="lg:col-span-4 flex flex-col justify-start pt-2">
        <span className="text-portfolio-gold text-xs font-semibold uppercase tracking-widest block mb-4 md:mb-6">
          Inquiries &amp; FAQ
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display tracking-tight text-white mb-4 md:mb-6 leading-tight">
          Frequently asked <br />
          <span className="text-portfolio-gold">questions</span>
        </h2>
        <p className="text-[#a89f91] text-sm leading-relaxed max-w-xs font-normal">
          Everything you need to know about our engineering standards, timelines, and engagement structure.
        </p>
      </div>

      {/* Right Column — Accordion */}
      <div className="lg:col-span-8 flex flex-col gap-3 sm:gap-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`transition-all duration-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 border ${
              openIndex === i
                ? 'bg-portfolio-gold/[0.08] border-portfolio-gold/50 shadow-[0_4px_20px_rgba(234,112,8,0.12)]'
                : 'bg-white/[0.03] border-white/10 hover:border-portfolio-gold/45 hover:bg-white/[0.06]'
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 sm:gap-6 text-left group cursor-target"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="font-mono text-xs text-portfolio-gold/80 shrink-0 font-semibold">0{i + 1}</span>
                <span
                  className={`text-sm md:text-base font-semibold leading-snug transition-colors duration-300 ${
                    openIndex === i ? 'text-portfolio-gold' : 'text-white group-hover:text-portfolio-gold'
                  }`}
                >
                  {faq.q}
                </span>
              </div>
              <div
                className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                  openIndex === i
                    ? 'border-portfolio-gold bg-portfolio-gold/20 rotate-45'
                    : 'border-white/20 group-hover:border-portfolio-gold'
                }`}
              >
                <span
                  className={`text-lg leading-none font-light transition-colors duration-300 ${
                    openIndex === i ? 'text-portfolio-gold' : 'text-[#a89f91] group-hover:text-portfolio-gold'
                  }`}
                >
                  +
                </span>
              </div>
            </button>

            {/* Answer — animated open/close */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.21,0.45,0.32,0.9)] ${
                openIndex === i ? 'max-h-[500px] opacity-100 mt-3 sm:mt-4' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-[#a89f91] text-xs sm:text-sm leading-relaxed pr-4 sm:pr-12 pl-7 sm:pl-8">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (withOuterContainer) {
    return (
      <section className={`${className} max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 relative z-10`}>
        {content}
      </section>
    );
  }

  return (
    <section className={className}>
      {content}
    </section>
  );
};

export default FAQSection;
