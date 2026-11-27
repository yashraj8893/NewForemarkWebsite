import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

const services = [
  { label: 'Website & Software Development', href: '/services/website-software-development' },
  { label: 'Web Servers & Hosting', href: '/services/cloud-hosting' },
  { label: 'Business Automation', href: '/services/business-automation' },
];
const company = [
  { label: 'Projects', href: '/projects' },
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Associate Program', href: '/associate-program' },
];
const social = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/foremark-technologies/' },
  { label: 'Instagram', href: 'https://www.instagram.com/foremarktechnologies.official/' },
  { label: 'WhatsApp', href: 'https://wa.me/917666809812' },
];
const Logo = () => <Link className="fc-logo" to="/" aria-label="Foremark home"><img src="/foremark-logo-transparent.png" alt="Foremark Technologies" /></Link>;
const Certificate = () => <a className="fc-certificate" href="https://drive.google.com/file/d/1RkLsj7sFtWRxXtNRxXX5Qi1SrqmtaTJH/view" target="_blank" rel="noopener noreferrer" aria-label="View Foremark's Startup India certificate"><img src="/startup-india-badge.webp" alt="" loading="lazy" /><span><b>Startup India</b><small>Recognised startup</small></span></a>;
const SocialIconLinks = () => <div className="fc-icon-social" aria-label="Social links">{social.map(item => <a key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noopener noreferrer"><span>{item.label}</span><ArrowUpRight size={12} aria-hidden="true" /></a>)}</div>;
const CompanyLinks = () => <div className="fc-link-list">{company.map(item => <Link to={item.href} key={item.href}>{item.label}</Link>)}</div>;
const Address = () => <address>Innov8 Times Square, Unit No. 2, 4th Floor, A-Wing, Marol, Andheri East, Mumbai – 400059<br /><a className="fc-map" href="https://maps.app.goo.gl/KruJhjPSm2YM46zp8" target="_blank" rel="noopener noreferrer">View on Google Maps <ArrowUpRight size={13} aria-hidden="true" /></a></address>;
const Legal = () => <div className="fc-legal"><span>© {new Date().getFullYear()} Foremark Technologies LLP. All rights reserved.</span></div>;

const BandsFooter = () => <footer className="fc fc-bands">
  <div className="fc-services-block">
    <div className="fc-bands-head">
      <div className="fc-bands-title">
        <h2>Built for what&apos;s next<span className="fc-heading-dot">.</span></h2>
      </div>
      <Link to="/services" className="fc-overview">Explore all services <ArrowUpRight size={15} /></Link>
    </div>
    <div className="fc-service-row">{services.map((item, index) => (
      <Link key={item.href} to={item.href} className="fc-service-tile">
        <span className="fc-service-num" aria-hidden="true">0{index + 1} <i>/</i> Services</span>
        <span className="fc-service-name">{item.label}</span>
        <span className="fc-service-arrow" aria-hidden="true"><ArrowUpRight size={16} /></span>
      </Link>
    ))}</div>
  </div>
  <div className="fc-container">
    <div className="fc-bands-main">
      <div className="fc-bands-brand"><Logo /><p>We build, host and automate digital systems for growing businesses.</p><SocialIconLinks /></div>
      <div className="fc-col"><h2>Company</h2><CompanyLinks /></div>
      <div className="fc-col fc-contact"><h2>Get in touch</h2><a className="fc-email" href="mailto:hello@foremark.in">hello@foremark.in <ArrowUpRight size={15} /></a><a href="mailto:careers@foremark.in">careers@foremark.in</a><a href="tel:+917666809812">+91 76668 09812</a><Address /><Link className="fc-project" to="/contact">Start a project <ArrowUpRight size={15} /></Link></div>
      <Certificate />
    </div>
    <Legal />
  </div>
</footer>;

export default BandsFooter;
