import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, Server, Workflow } from 'lucide-react';
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
const Certificate = () => <div className="fc-certificate"><img src="/startup-india-badge.webp" alt="Startup India recognised startup" loading="lazy" /><span><b>Startup India</b><small>Recognised startup</small></span></div>;
const SocialIcon = ({ name }: { name: string }) => {
  if (name === 'LinkedIn') return <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M5.2 3.3a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3.4 9h3.5v11.5H3.4V9Zm5.7 0h3.3v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5v6.3h-3.5v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.7H9.1V9Z" /></svg>;
  if (name === 'Instagram') return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 11.6a8.5 8.5 0 0 1-12.7 7.4L3.5 20l1.2-4.1a8.5 8.5 0 1 1 15.8-4.3Z" /><path d="M8.5 8.1c.2-.4.6-.4.9-.4l.8 1.8c.1.2 0 .4-.2.6l-.5.6c.6 1.3 1.6 2.2 2.9 2.8l.6-.7c.2-.2.4-.2.7-.1l1.7.8c.1.2.1.5 0 .8-.3.7-1.1 1.2-1.8 1.2-2.8-.2-6-3.3-6.2-6.1 0-.5.5-1.1 1.1-1.3Z" /></svg>;
};
const SocialIconLinks = () => <div className="fc-icon-social" aria-label="Social links">{social.map(item => <a key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noopener noreferrer"><span className="fc-icon-social-mark"><SocialIcon name={item.label} /></span><span className="fc-icon-social-name">{item.label}</span></a>)}</div>;
const CompanyLinks = () => <div className="fc-link-list">{company.map(item => <Link to={item.href} key={item.href}>{item.label}</Link>)}</div>;
const Address = () => <address>Innov8 Times Square, Unit No. 2, 4th Floor, A-Wing, Marol, Andheri East, Mumbai – 400059<br /><a className="fc-map" href="https://maps.app.goo.gl/KruJhjPSm2YM46zp8" target="_blank" rel="noopener noreferrer">View on Google Maps <ArrowUpRight size={13} aria-hidden="true" /></a></address>;
const Legal = () => <div className="fc-legal"><span>© {new Date().getFullYear()} Foremark Technologies LLP. All rights reserved.</span></div>;

const BandsFooter = () => <footer className="fc fc-bands">
  <div className="fc-container">
    <div className="fc-bands-head"><h2>Our services<span>.</span></h2><Link to="/services" className="fc-overview">View all services <ArrowUpRight size={15} /></Link></div>
    <div className="fc-service-row">{services.map((item, index) => {
      const Icon = [Code2, Server, Workflow][index];
      const category = ['Development', 'Hosting', 'Automation'][index];
      return <Link key={item.href} to={item.href} className="fc-service-tile">
        <span className="fc-service-icon" aria-hidden="true"><Icon size={17} strokeWidth={1.7} /></span>
        <span className="fc-service-copy"><span className="fc-service-num" aria-hidden="true">0{index + 1} <i /> {category}</span><span className="fc-service-name">{item.label}</span></span>
        <span className="fc-service-arrow" aria-hidden="true"><ArrowUpRight size={16} /></span>
      </Link>;
    })}</div>
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
