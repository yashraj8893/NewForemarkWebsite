import { motion } from 'framer-motion';
import { Mail, MessageSquare, Globe, Share2, Info } from 'lucide-react';
import mapImage from '../assets/map.png';

const ContactPage = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-8 md:px-16 pt-16 pb-32">
      <div className="flex flex-col mb-16">
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

      <div className="bg-portfolio-dark rounded-[3rem] p-8 md:p-16 lg:p-24 text-white relative overflow-hidden flex items-center">

        {/* Map image — left side only */}
        <div
          className="absolute inset-y-0 left-0 pointer-events-none"
          style={{ width: '58%' }}
        >
          <img
            src={mapImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.10 }}
          />
        </div>

        {/* Horizontal fade — map disappears before reaching the form */}
        <div
          className="absolute inset-y-0 left-0 pointer-events-none"
          style={{
            width: '65%',
            background: 'linear-gradient(to right, transparent 0%, transparent 40%, #0d0d0d 100%)',
          }}
        />

        {/* Top vignette */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: '35%',
            background: 'linear-gradient(to bottom, #0d0d0d 0%, transparent 100%)',
          }}
        />

        {/* Bottom vignette */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: '35%',
            background: 'linear-gradient(to top, #0d0d0d 0%, transparent 100%)',
          }}
        />

        {/* Subtle orange brand glow */}
        <div
          className="absolute inset-y-0 left-0 pointer-events-none"
          style={{
            width: '40%',
            background: 'radial-gradient(ellipse at 20% 60%, rgba(255,92,0,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col pt-8">
            <div className="space-y-10">
              {[
                { icon: Mail, label: "MAIL US", value1: "hello@foremark.in", value2: "support@foremark.in" },
                { icon: MessageSquare, label: "CALL US", value1: "+91 98765 43210", value2: "+91 98765 43211" },
                { icon: Globe, label: "LOCATION", value1: "Cyber Hub, DLF Phase 3", value2: "Gurgaon, India 122002" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-portfolio-gold group-hover:bg-portfolio-gold group-hover:text-portfolio-dark transition-all duration-500">
                    <item.icon size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">{item.label}</span>
                    <p className="text-base font-bold text-white/90">{item.value1}</p>
                    <p className="text-base font-bold text-white/90">{item.value2}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 mt-16">
              {[Share2, Globe, Info].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all cursor-target"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
            >
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-portfolio-gold rounded-tl-xl opacity-40" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-portfolio-gold rounded-br-xl opacity-40" />

              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Contact form</h3>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-portfolio-gold" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">NAME *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-portfolio-gold transition-colors placeholder:text-white/20 cursor-target"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">EMAIL *</label>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-portfolio-gold transition-colors placeholder:text-white/20 cursor-target"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">MESSAGE *</label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-portfolio-gold transition-colors placeholder:text-white/20 resize-none cursor-target"
                  />
                </div>
                <button className="w-full bg-portfolio-gold text-portfolio-dark font-bold py-5 rounded-2xl hover:scale-[1.02] transition-all shadow-lg shadow-portfolio-gold/10 uppercase tracking-widest text-sm mt-4 cursor-target">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;