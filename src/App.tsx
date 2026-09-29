import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/Projects';
import ServicesPage from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import CareersPage from './pages/Careers';
import JobDetail from './pages/JobDetail';
import ContactPage from './pages/Contact';
import SovereignCounselPage from './pages/SovereignCounsel';
import AboutPage from './pages/About';
import AssociateProgramPage from './pages/AssociateProgram';
import BlogPage from './pages/Blog';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SmoothScrollProvider, useLenis } from './components/SmoothScroll';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { lenis } = useLenis();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll and pause Lenis when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, lenis]);

  return (
    <>
      <nav className="relative z-50 flex items-center justify-between px-4 sm:px-8 md:px-16 py-6 sm:py-8 pointer-events-auto max-w-[1280px] mx-auto w-full">
        <Link to="/" className="flex flex-col cursor-pointer cursor-target z-50 -ml-2">
          <img src="/Foremark_Logo_-removebg-preview.png" alt="Foremark" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-portfolio-muted text-sm font-medium w-max">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="hover:text-portfolio-gold transition-colors cursor-target"
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdown for Products */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-portfolio-gold transition-colors py-2 cursor-target">
              Products <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[340px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-[#140f0a] border border-amber-500/20 rounded-2xl p-3 shadow-2xl backdrop-blur-xl">
                <Link to="/sovereign-counsel" className="flex flex-col p-4 rounded-xl hover:bg-amber-500/10 transition-colors group/item cursor-target">
                  <span className="text-white font-bold text-sm mb-1 group-hover/item:text-portfolio-gold transition-colors">Sovereign Counsel</span>
                  <span className="text-portfolio-muted text-xs leading-relaxed">Case Management web app for Law firms</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 z-50">
          <Link to="/contact" className="hidden md:inline-flex text-white text-sm font-bold uppercase tracking-widest border border-amber-500/30 bg-[#140f0a] px-8 py-3 rounded-full hover:bg-portfolio-gold hover:text-white transition-all cursor-target shadow-[0_0_20px_rgba(234,112,8,0.15)]">
            Contact us
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white cursor-target"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#0a0805]/98 backdrop-blur-2xl flex flex-col items-center justify-center pt-20 pb-10 px-8 text-white"
          >
            <div className="flex flex-col items-center gap-8 text-xl font-bold tracking-tight">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-portfolio-gold transition-colors cursor-target"
                >
                  {link.label}
                </Link>
              ))}
              <div className="w-12 h-px bg-white/10 my-2" />
              <span className="text-sm font-semibold text-portfolio-muted uppercase tracking-widest">Products</span>
              <Link
                to="/sovereign-counsel"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-portfolio-gold transition-colors cursor-target"
              >
                Sovereign Counsel
              </Link>
              <Link
                to="/associate-program"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-portfolio-gold transition-colors cursor-target"
              >
                Associate Program
              </Link>
              <div className="w-12 h-px bg-white/10 my-2" />
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 text-portfolio-gold uppercase tracking-widest text-sm hover:opacity-80 transition-opacity cursor-target"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

function App() {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#0a0805] text-[#f9f5f1] selection:bg-[#ea7008] selection:text-white font-geist overflow-x-hidden">
        <div className="grainy-overlay" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/services/website-software-development" element={<ServiceDetail slug="website-software-development" />} />
          <Route path="/services/website-development" element={<ServiceDetail slug="website-software-development" />} />
          <Route path="/services/software-development" element={<ServiceDetail slug="website-software-development" />} />
          <Route path="/services/web-app-development" element={<ServiceDetail slug="website-software-development" />} />
          <Route path="/services/web-software-development" element={<ServiceDetail slug="website-software-development" />} />
          <Route path="/services/cloud-hosting" element={<ServiceDetail slug="cloud-hosting" />} />
          <Route path="/services/business-automation" element={<ServiceDetail slug="business-automation" />} />
          <Route path="/services/web-servers-hosting" element={<ServiceDetail slug="cloud-hosting" />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:slug" element={<JobDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sovereign-counsel" element={<SovereignCounselPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/associate-program" element={<AssociateProgramPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
