import { useState, useEffect, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Globe, Share2, Info, ChevronDown, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';
import mapImage from '../assets/map.webp';
import { SEO } from '../components/SEO';

const serviceOptions = [
  { value: 'website-software-development', label: 'Website & Software Development' },
  { value: 'cloud-hosting', label: 'Web Servers & Hosting' },
  { value: 'business-automation', label: 'Business Automation' },
  { value: 'other', label: 'Other / General Inquiry' },
];

const normalizeServiceParam = (param: string) => {
  if (param === 'website-development' || param === 'software-development' || param === 'web-app-development') {
    return 'website-software-development';
  }
  return param;
};

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const rawServiceParam = searchParams.get('service') || '';
  const serviceParam = normalizeServiceParam(rawServiceParam);
  const [selectedService, setSelectedService] = useState(serviceParam);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [fallbackUrl, setFallbackUrl] = useState('');

  useEffect(() => {
    if (serviceParam) {
      setSelectedService(serviceParam);
    }
  }, [serviceParam]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const serviceLabel =
      serviceOptions.find((o) => o.value === data.get('service'))?.label ||
      'General inquiry';

    setStatus('sending');
    try {
      // Static site: deliver submissions to hello@foremark.in via FormSubmit
      const res = await fetch('https://formsubmit.co/ajax/hello@foremark.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New contact enquiry from ${data.get('name')} — foremark.in`,
          name: data.get('name'),
          email: data.get('email'),
          service: serviceLabel,
          message: data.get('message'),
          _honey: '', // spam honeypot
          _captcha: 'false',
        }),
      });
      if (!res.ok) throw new Error(`Submission failed: ${res.status}`);
      setStatus('sent');
      form.reset();
      setSelectedService('');
    } catch {
      // Provider outage / network failure — offer a prefilled email fallback
      // so the visitor never has to retype their message
      const subject = encodeURIComponent(`Contact enquiry from ${data.get('name')} — foremark.in`);
      const body = encodeURIComponent(
        `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${serviceLabel}\n\n${data.get('message')}`
      );
      setFallbackUrl(`mailto:hello@foremark.in?subject=${subject}&body=${body}`);
      setStatus('error');
    }
  };

  return (
    <>
      <SEO title="Contact Us" description="Have a question or want to work together? Leave us a message and we'll get back to you as soon as possible." canonicalUrl="https://foremark.in/contact" />
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 pt-8 pb-16 lg:pt-16 lg:pb-32 overflow-hidden">
        
        {/* Luminous Floating Ambient Orange Spots (Outer Background) */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.22, 0.38, 0.22],
            x: [0, 30, 0],
            y: [0, -25, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-16 left-12 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#ea7008]/30 via-[#ea7008]/15 to-transparent blur-[140px] pointer-events-none -z-10"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.18, 0.32, 0.18],
            x: [0, -35, 0],
            y: [0, 35, 0]
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#ea7008]/30 via-[#ea7008]/12 to-transparent blur-[150px] pointer-events-none -z-10"
        />
        <div className="absolute -bottom-32 left-1/4 w-[600px] h-[500px] rounded-full bg-[#ea7008]/18 blur-[140px] pointer-events-none -z-10" />

        {/* Ambient Technical Amber Matrix Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(234,112,8,0.2)_1.3px,transparent_1.3px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none opacity-50 -z-10" />

        <div className="flex flex-col mb-8 lg:mb-16 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-portfolio-gold font-bold mb-3 text-xs tracking-widest uppercase block"
          >
            CONTACT
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Let's talk about <br /> your project
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-portfolio-muted max-w-xl leading-relaxed"
          >
            Have a question or want to work together? Leave us a message below and we'll get back to you as soon as possible.
          </motion.p>
        </div>

        <div className="bg-[#121110] border border-portfolio-gold/35 hover:border-portfolio-gold/60 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_50px_rgba(234,112,8,0.12)] rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-8 md:p-16 lg:p-24 text-white relative overflow-hidden flex items-center transition-all duration-500 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/50 before:to-transparent">

          {/* Luminous Orange Spot Halos inside the container */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#ea7008]/25 via-[#ea7008]/10 to-transparent blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#ea7008]/20 via-[#ea7008]/05 to-transparent blur-[110px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#ea7008]/[0.08] blur-[100px] pointer-events-none" />

          {/* Dynamic Technical Grid inside the card */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(234,112,8,0.22)_1.2px,transparent_1.2px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)] pointer-events-none opacity-40" />

          {/* Map image with gradient fade — night mode dark street map */}
          <div
            className="absolute inset-y-0 left-0 pointer-events-none hidden lg:block overflow-hidden"
            style={{
              width: '66%',
              maskImage: 'radial-gradient(ellipse 95% 85% at 18% 50%, black 40%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,0.15) 85%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at 18% 50%, black 40%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,0.15) 85%, transparent 100%)',
            }}
          >
            <img loading="lazy" decoding="async"
              src={mapImage}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-left"
              style={{ opacity: 0.18, filter: 'invert(1) hue-rotate(180deg) brightness(0.85) contrast(1.2)' }}
            />
            {/* Subtle warm amber brand gradient over the map */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(234,112,8,0.14) 0%, rgba(245,158,11,0.04) 50%, transparent 100%)',
              }}
            />
          </div>

          {/* Subtle orange brand glow — hidden on mobile */}
          <div
            className="absolute inset-y-0 left-0 pointer-events-none hidden lg:block"
            style={{
              width: '40%',
              background: 'radial-gradient(ellipse at 20% 60%, rgba(234,112,8,0.12) 0%, transparent 70%)',
            }}
          />

          {/* Content */}
          <div className="relative z-30 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Left: Contact Info */}
            <div className="lg:col-span-5 flex flex-col pt-0 lg:pt-8">
              <div className="space-y-4 lg:space-y-10">
                {[
                  { icon: Mail, label: "MAIL US", value1: "hello@foremark.in", value2: "careers@foremark.in" },
                  { icon: MessageSquare, label: "CALL US", value1: "+91 7666809812", value2: "" },
                  {
                    icon: Globe,
                    label: "LOCATION",
                    value1: "Innov8 Times Square, Andheri East",
                    value2: "Unit No. 2, 4th Floor, A-Wing, Times Square Building, Marol, Andheri (E), Mumbai – 400059",
                    link: "https://maps.app.goo.gl/B9dZpsf7i1K1B54t7"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex gap-3 sm:gap-6 group items-start"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-portfolio-gold group-hover:bg-portfolio-gold group-hover:text-white group-hover:border-portfolio-gold transition-all duration-500 shrink-0 shadow-sm backdrop-blur-xs">
                      <item.icon size={22} />
                    </div>
                    <div className="flex flex-col min-w-0 pt-1">
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-portfolio-gold font-bold mb-1">{item.label}</span>
                      <p className="text-sm sm:text-base font-bold text-white group-hover:text-portfolio-gold transition-colors duration-300 break-all sm:break-normal">{item.value1}</p>
                      {item.value2 && (
                        <p className="text-sm font-normal text-[#a89f91] break-all sm:break-normal mt-1 leading-relaxed max-w-sm">{item.value2}</p>
                      )}
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-bold font-mono text-portfolio-gold hover:text-white transition-colors mt-2">
                          View on Google Maps →
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4 mt-6 lg:mt-16">
                {[Share2, Globe, Info].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -4 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-[#a89f91] hover:text-portfolio-gold hover:border-portfolio-gold hover:bg-white/10 transition-all duration-300 cursor-target shadow-xs"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 mt-2 lg:mt-0 relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#ea7008]/25 via-[#ea7008]/10 to-[#ea7008]/20 blur-2xl rounded-[3rem] -z-10 opacity-70 pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative bg-[#181512] border border-portfolio-gold/35 hover:border-portfolio-gold/60 shadow-[0_0_40px_rgba(234,112,8,0.12)] p-5 sm:p-8 md:p-12 rounded-[1.25rem] sm:rounded-[2.5rem] transition-all duration-500 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#ea7008]/40 before:to-transparent"
              >
                <div className="flex items-center justify-between mb-6 lg:mb-8">
                  <div>
                    <span className="text-[#ea7008] text-xs font-semibold uppercase tracking-widest block mb-2">
                      Direct Line
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-display tracking-tight text-white">Contact form</h3>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate={false}>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="contact-name" className="text-[11px] font-mono uppercase tracking-[0.18em] font-semibold text-portfolio-gold block ml-0.5">NAME *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={120}
                      autoComplete="name"
                      placeholder="Your full name"
                      className="w-full bg-[#201d19] border border-white/10 focus:border-portfolio-gold rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-portfolio-gold/50 transition-all placeholder:text-[#a89f91]/60 cursor-target shadow-inner"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="contact-email" className="text-[11px] font-mono uppercase tracking-[0.18em] font-semibold text-portfolio-gold block ml-0.5">EMAIL *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Your email address"
                      className="w-full bg-[#201d19] border border-white/10 focus:border-portfolio-gold rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-portfolio-gold/50 transition-all placeholder:text-[#a89f91]/60 cursor-target shadow-inner"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="contact-service" className="text-[11px] font-mono uppercase tracking-[0.18em] font-semibold text-portfolio-gold block ml-0.5">SERVICE OF INTEREST</label>
                    <div className="relative">
                      <select
                        id="contact-service"
                        name="service"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        style={{ colorScheme: 'dark' }}
                        className="w-full appearance-none bg-[#201d19] border border-white/10 focus:border-portfolio-gold rounded-xl sm:rounded-2xl pl-4 pr-12 sm:pl-6 sm:pr-14 py-3 sm:py-4 text-white text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-portfolio-gold/50 transition-all cursor-pointer [&>option]:bg-[#181512] [&>option]:text-white"
                      >
                        <option value="">Select a service (Optional)</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 pointer-events-none text-portfolio-gold/80 flex items-center justify-center">
                        <ChevronDown size={18} strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="contact-message" className="text-[11px] font-mono uppercase tracking-[0.18em] font-semibold text-portfolio-gold block ml-0.5">MESSAGE *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      minLength={10}
                      maxLength={5000}
                      placeholder="How can we help you?"
                      rows={4}
                      className="w-full bg-[#201d19] border border-white/10 focus:border-portfolio-gold rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-portfolio-gold/50 transition-all placeholder:text-[#a89f91]/60 resize-none cursor-target shadow-inner"
                    />
                  </div>

                  {/* Submission feedback */}
                  <AnimatePresence>
                    {status === 'sent' && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        role="status"
                        className="flex items-start gap-3 rounded-xl border border-[#16a34a]/40 bg-[#16a34a]/10 px-4 py-3 text-sm text-[#86efac]"
                      >
                        <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                        <span>
                          <strong className="block text-white font-semibold">Message sent!</strong>
                          Thanks for reaching out — we'll get back to you within one business day.
                        </span>
                      </motion.div>
                    )}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        role="alert"
                        className="flex items-start gap-3 rounded-xl border border-[#ea7008]/40 bg-[#ea7008]/10 px-4 py-3 text-sm text-[#fdba74]"
                      >
                        <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                        <span>
                          <strong className="block text-white font-semibold">Couldn't send your message.</strong>
                          Our form service is temporarily unavailable — your text is safe below. Either try again
                          in a minute, or open your email app (everything you typed is already filled in):
                          <a
                            href={fallbackUrl || 'mailto:hello@foremark.in'}
                            className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#ea7008] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#ff7e15] transition-colors"
                          >
                            <Mail size={14} /> Open email instead
                          </a>
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    whileHover={status === 'sending' ? undefined : { scale: 1.01 }}
                    whileTap={status === 'sending' ? undefined : { scale: 0.98 }}
                    type="submit"
                    disabled={status === 'sending' || status === 'sent'}
                    className="w-full bg-[#ea7008] text-white font-bold py-3.5 sm:py-4 rounded-xl sm:rounded-2xl mt-4 sm:mt-6 hover:bg-[#ff7e15] transition-all text-sm sm:text-base cursor-target shadow-[0_4px_20px_rgba(234,112,8,0.28)] border border-[#ea7008] tracking-wider font-mono disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'sending' && <Loader2 size={16} className="animate-spin" />}
                    {status === 'sending' ? 'SENDING…' : status === 'sent' ? 'MESSAGE SENT ✓' : 'SEND MESSAGE'}
                  </motion.button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;