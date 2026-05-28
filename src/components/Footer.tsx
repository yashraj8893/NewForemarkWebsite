import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Globe, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-dark text-white pt-20 pb-10 mt-auto w-full">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex flex-col cursor-pointer mb-6">
              <span className="text-white font-bold tracking-tighter text-2xl">Foremark</span>
              <span className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Engineering First</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-8">
              We design and engineer intelligent digital systems that help companies build, scale, and automate modern technology platforms.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:hello@foremark.in" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-portfolio-gold hover:border-portfolio-gold transition-all duration-300">
                <Mail size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-portfolio-gold hover:border-portfolio-gold transition-all duration-300">
                <MessageSquare size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-portfolio-gold hover:border-portfolio-gold transition-all duration-300">
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-portfolio-gold mb-6">Quick Links</h4>
            <div className="flex flex-col gap-4">
              <Link to="/projects" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Projects</Link>
              <Link to="/careers" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Careers</Link>
              <Link to="/" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Services</Link>
              <Link to="/about" className="text-white/60 hover:text-white text-sm font-medium transition-colors">About</Link>
            </div>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-portfolio-gold mb-6">Company</h4>
            <div className="flex flex-col gap-4">
              <Link to="/contact" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Contact Us</Link>
              <Link to="/associate-program" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Associate Program</Link>
              <a href="#" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-portfolio-gold mb-6">Get in touch</h4>
            <div className="flex flex-col gap-4">
              <p className="text-white/60 text-sm font-medium">Cyber Hub, DLF Phase 3<br />Gurgaon, India 122002</p>
              <p className="text-white/60 text-sm font-medium mt-2">hello@foremark.in<br />+91 98765 43210</p>
              
              <Link to="/contact" className="inline-flex items-center gap-2 text-white text-sm font-bold mt-4 hover:text-portfolio-gold transition-colors group w-max">
                Start a project <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-medium">© {new Date().getFullYear()} Foremark Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-xs font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-portfolio-green animate-pulse"></span> All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
