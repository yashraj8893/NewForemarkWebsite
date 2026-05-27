import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/Projects';
import CareersPage from './pages/Careers';
import ContactPage from './pages/Contact';
import SovereignCounselPage from './pages/SovereignCounsel';
import AboutPage from './pages/About';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import TargetCursor from './components/TargetCursor';

const navLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Careers', href: '/careers' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

const Navbar = () => {
  return (
    <nav className="relative z-50 flex items-center justify-between px-8 md:px-16 py-8 pointer-events-auto max-w-[1280px] mx-auto w-full">
      <Link to="/" className="flex flex-col cursor-pointer cursor-target">
        <span className="text-portfolio-dark font-bold tracking-tighter text-2xl">Foremark</span>
        <span className="text-portfolio-muted text-[10px] uppercase tracking-widest mt-1">Engineering First</span>
      </Link>
      
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-portfolio-muted text-sm font-medium w-max">
        {navLinks.map((link) => (
          <Link 
            key={link.label} 
            to={link.href} 
            className="hover:text-portfolio-dark transition-colors cursor-target"
          >
            {link.label}
          </Link>
        ))}
        {/* Dropdown for Products */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-portfolio-dark transition-colors py-2 cursor-target">
            Products <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
          </button>
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[340px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
            <div className="bg-white border border-portfolio-dark/10 rounded-2xl p-3 shadow-2xl">
              <Link to="/sovereign-counsel" className="flex flex-col p-4 rounded-xl hover:bg-portfolio-dark/5 transition-colors group/item cursor-target">
                <span className="text-portfolio-dark font-bold text-sm mb-1 group-hover/item:text-portfolio-gold transition-colors">Sovereign Counsel</span>
                <span className="text-portfolio-muted text-xs leading-relaxed">Case Management web app for Law firms</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <Link to="/contact" className="text-portfolio-dark text-sm font-bold uppercase tracking-widest border border-portfolio-dark/20 px-8 py-3 rounded-full hover:bg-portfolio-dark hover:text-white transition-all cursor-target">
          Contact us
        </Link>
      </div>
    </nav>
  );
};

function App() {
  const location = useLocation();
  return (
    <div className="relative min-h-screen bg-portfolio-bg selection:bg-portfolio-gold/30 font-geist">
      <TargetCursor 
        key={location.pathname} 
        targetSelector=".cursor-target, a, button, input, textarea"
        spinDuration={2} 
        hideDefaultCursor={true} 
        parallaxOn={true} 
        hoverDuration={0.5} 
      />
      <ScrollToHash />
      <div className="grainy-overlay" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sovereign-counsel" element={<SovereignCounselPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
