import { motion } from 'framer-motion';
import { MessageCircle, Globe, Smartphone, Settings, Cpu, Handshake, Zap, Shield, TrendingUp, HeadphonesIcon, Building2 } from 'lucide-react';

const AssociateProgramPage = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="max-w-[1280px] mx-auto px-8 md:px-16 pt-16 pb-32 bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-portfolio-gold font-bold mb-3 text-xs tracking-widest uppercase block"
        >
          Associate Partner Program
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Refer a client.<br />
          We close it.<br />
          <span className="text-portfolio-gold">You get paid.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base text-portfolio-muted max-w-xl leading-relaxed mb-8"
        >
          No technical skills needed. No targets. No pressure. Just bring us the right conversation — we'll handle everything else and share the revenue with you.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a 
            href="https://wa.me/917588713909"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-portfolio-dark text-sm font-bold uppercase tracking-widest border border-portfolio-dark/20 px-8 py-3 rounded-full hover:bg-portfolio-dark hover:text-white transition-all cursor-target group"
          >
            <MessageCircle size={16} />
            Join on WhatsApp
          </a>
          <div className="flex items-center text-sm text-portfolio-muted font-medium border border-portfolio-dark/20 px-8 py-3 rounded-full cursor-target">
            Message us at <span className="text-portfolio-dark font-bold ml-1">+91 75887 13909</span>
          </div>
        </motion.div>
      </div>

      {/* What We Build Section */}
      <div className="mb-32">
        <motion.div {...fadeUp} className="mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-portfolio-dark mb-4 block">
            What We Build
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl leading-tight mb-6">
            We turn business ideas into digital products.
          </h2>
          <p className="text-base text-portfolio-muted max-w-xl leading-relaxed">
            Foremark Technologies is a Mumbai-based tech company. We build websites, apps, and automation tools for businesses of all sizes — startups to established brands.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { icon: Globe, title: "Websites & Landing Pages", desc: "Professional business websites, portfolios, and high-converting landing pages built to impress." },
            { icon: Smartphone, title: "Web & Mobile Apps", desc: "Custom platforms, dashboards, marketplaces, and mobile apps tailored to your client's exact needs." },
            { icon: Settings, title: "Business Automation", desc: "Automate repetitive workflows — CRMs, invoicing, lead management, and more — saving time and money." },
            { icon: Cpu, title: "AI-Powered Tools", desc: "Chatbots, AI integrations, and smart tools that give businesses a competitive edge." }
          ].map((service, i) => (
            <motion.div key={i} variants={staggerItem} className="bg-white border border-gray-100 rounded-[2rem] px-6 py-8 md:px-8 md:py-10 flex flex-col shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-gray-200/60 hover:-translate-y-1 transition-all duration-500 cursor-target group">
              <div className="mb-6 text-portfolio-dark group-hover:text-portfolio-gold transition-colors duration-300">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">{service.title}</h3>
              <p className="text-base text-portfolio-muted leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* How it Works Section */}
      <div className="mb-32">
        <motion.div {...fadeUp} className="mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-portfolio-dark mb-4 block">
            The Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl leading-tight">
            Simple as 3 steps.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-0 border-t border-portfolio-dark/10">
          {[
            { num: "01", title: "You bring the lead", desc: "Know a business owner, startup, or brand that needs a website, app, or automation? Just introduce us. A WhatsApp forward or a quick intro call is enough." },
            { num: "02", title: "We pitch, build & close", desc: "We take it from there — the proposal, the demo, the negotiation, the project delivery. You don't have to know anything about tech. We'll even help you pitch if you want to be involved." },
            { num: "03", title: "Contract signs → You get paid", desc: "The moment the contract is signed, your commission is settled. No waiting for project completion. Clean and simple." }
          ].map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="py-12 border-b border-portfolio-dark/10 flex flex-col md:flex-row gap-8 md:gap-16 items-start group cursor-target"
            >
              <span className="text-portfolio-gold font-bold text-sm tracking-widest uppercase shrink-0 pt-1">
                {step.num}
              </span>
              <div className="flex-1 max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-portfolio-gold transition-colors duration-300">{step.title}</h3>
                <p className="text-base text-portfolio-muted leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Earnings Section */}
      <div className="mb-32">
        <motion.div {...fadeUp} className="mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-portfolio-dark mb-4 block">
            Your Earnings
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl leading-tight mb-6">
            The more the deal,<br />the more you earn.
          </h2>
          <p className="text-base text-portfolio-muted max-w-xl leading-relaxed">
            No cap on earnings. Every closed deal puts money in your pocket — on contract signing, not after delivery.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { range: "Deals under ₹20K", pct: "8" },
            { range: "₹20K – ₹1 Lakh", pct: "12" },
            { range: "Above ₹1 Lakh", pct: "12" }
          ].map((tier, i) => (
            <motion.div key={i} variants={staggerItem} className="border-t border-portfolio-dark/10 pt-8 flex flex-col group cursor-target">
              <span className="text-sm font-bold uppercase tracking-widest text-portfolio-dark mb-4 group-hover:text-portfolio-gold transition-colors duration-300">
                {tier.range}
              </span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold tracking-tight text-portfolio-dark">{tier.pct}</span>
                <span className="text-xl font-bold text-[#ff5c00]">%</span>
              </div>
              <span className="text-sm text-portfolio-muted font-medium">of deal value</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Example Earnings */}
        <motion.div {...fadeUp} className="border-t border-portfolio-dark/10 pt-12">
          <h4 className="text-sm font-bold uppercase tracking-widest text-portfolio-dark mb-8">Example Earnings</h4>
          <div className="flex flex-col gap-0 max-w-3xl">
            {[
              { client: "₹15,000", pct: "8%", earn: "+₹1,200" },
              { client: "₹50,000", pct: "12%", earn: "+₹6,000" },
              { client: "₹1,00,000", pct: "12%", earn: "+₹12,000" },
              { client: "₹2,00,000", pct: "12%", earn: "+₹24,000" }
            ].map((row, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex flex-row items-center justify-between py-6 border-b border-portfolio-dark/10 last:border-0 hover:bg-portfolio-dark/[0.02] transition-colors -mx-4 px-4 rounded-xl cursor-target"
              >
                <span className="text-base text-portfolio-muted group-hover:text-portfolio-gold transition-colors duration-300">Client pays {row.client}</span>
                <div className="flex items-center gap-12 md:gap-24">
                  <span className="text-sm text-portfolio-muted uppercase tracking-widest group-hover:text-portfolio-gold transition-colors duration-300">{row.pct}</span>
                  <span className="text-lg font-bold text-portfolio-dark w-24 text-right group-hover:text-portfolio-gold transition-colors duration-300">{row.earn}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Why Partner With Us Section */}
      <div className="mb-32">
        <motion.div {...fadeUp} className="mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-portfolio-dark mb-4 block">
            Why Partner With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl leading-tight">
            We make you look good.
          </h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
        >
          {[
            { icon: Handshake, title: "You bring, we close", desc: "No sales pressure on you. We'll handle the entire pitch and negotiation process ourselves." },
            { icon: Zap, title: "Paid on contract", desc: "Your commission is settled the moment the contract is signed — not after months of project delivery." },
            { icon: Shield, title: "Team of 15", desc: "A dedicated team of professionals handles every project with a dedicated project manager assigned." },
            { icon: TrendingUp, title: "No cap on income", desc: "Refer 1 client or 10 — there's no limit. Every deal you bring closes is money in your pocket." },
            { icon: HeadphonesIcon, title: "We support you", desc: "Not sure how to pitch? We'll get on a call with you and your client together if needed." },
            { icon: Building2, title: "Any industry", desc: "Retail, education, food, healthcare, finance — we build for any industry, so any business is a potential client." }
          ].map((item, i) => (
            <motion.div key={i} variants={staggerItem} className="bg-white border border-gray-100 rounded-[2rem] px-6 py-8 md:px-8 md:py-10 flex flex-col shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-gray-200/60 hover:-translate-y-1 transition-all duration-500 cursor-target group">
              <div className="mb-4 text-portfolio-dark group-hover:text-portfolio-gold transition-colors duration-300">
                <item.icon size={20} strokeWidth={2} />
              </div>
              <h4 className="text-lg font-bold tracking-tight mb-2">{item.title}</h4>
              <p className="text-base text-portfolio-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer CTA */}
      <motion.div 
        {...fadeUp}
        className="mt-32 pt-32 border-t border-portfolio-dark/10 flex flex-col items-center text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl leading-tight mb-6">
          Ready to start earning?
        </h2>
        <p className="text-base text-portfolio-muted max-w-xl leading-relaxed mb-12">
          Message us on WhatsApp and we'll set everything up in minutes.
        </p>
        <a 
          href="https://wa.me/917588713909"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-portfolio-dark text-sm font-bold uppercase tracking-widest border border-portfolio-dark/20 px-8 py-3 rounded-full hover:bg-portfolio-dark hover:text-white transition-all cursor-target group mb-12"
        >
          <MessageCircle size={16} />
          Chat on WhatsApp
        </a>
        <div className="text-portfolio-muted text-[10px] font-bold uppercase tracking-widest flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <span>foremark.in</span>
          <span className="hidden md:block w-1 h-1 rounded-full bg-portfolio-dark/20"></span>
          <span>Mumbai, India</span>
          <span className="hidden md:block w-1 h-1 rounded-full bg-portfolio-dark/20"></span>
          <span>+91 75887 13909</span>
        </div>
        <p className="text-sm text-portfolio-muted mt-6 italic">
          Payment settled on contract signing. No experience needed. IST hours.
        </p>
      </motion.div>
    </div>
  );
};

export default AssociateProgramPage;
