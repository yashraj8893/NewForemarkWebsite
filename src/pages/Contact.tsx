import { motion } from 'framer-motion';
import { Mail, MessageSquare, Globe, Share2, Info } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-8 md:px-16 pt-16 pb-32">
      {/* Hero Section */}
      <div className="flex flex-col mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-label text-portfolio-gold font-bold mb-3 text-xs tracking-widest uppercase block"
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
        {/* Map Background Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
            <path d="M0 200C100 150 200 180 300 120C400 60 500 100 600 80C700 60 800 120 1000 100" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
            <path d="M100 0C150 100 120 200 180 300C240 400 200 500 220 600C240 700 180 800 200 1000" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
            <path d="M400 0C450 150 420 300 480 450C540 600 500 750 520 900" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
            <path d="M0 500C200 450 400 550 600 480C800 410 1000 450" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="200" cy="300" r="2" fill="white" />
            <circle cx="480" cy="450" r="2" fill="white" />
            <circle cx="700" cy="200" r="2" fill="white" />
            <circle cx="300" cy="700" r="2" fill="white" />
            <path d="M200 300L480 450L700 200" stroke="white" strokeWidth="0.2" opacity="0.5" />
          </svg>
        </div>

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Info */}
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
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
            >
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-portfolio-gold rounded-tl-xl opacity-40" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-portfolio-gold rounded-br-xl opacity-40" />
              
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-bold uppercase tracking-widest">Contact form</h3>
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
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-portfolio-gold transition-colors placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">EMAIL *</label>
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-portfolio-gold transition-colors placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">MESSAGE *</label>
                  <textarea 
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-portfolio-gold transition-colors placeholder:text-white/20 resize-none"
                  />
                </div>
                <button className="w-full bg-portfolio-gold text-portfolio-dark font-bold py-5 rounded-2xl hover:scale-[1.02] transition-all shadow-lg shadow-portfolio-gold/10 uppercase tracking-widest text-sm mt-4">
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