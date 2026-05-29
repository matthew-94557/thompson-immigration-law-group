import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenLeads: () => void;
  leadCount: number;
}

export default function Header({ onOpenConsultation, onOpenLeads, leadCount }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#footer-form' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800/60 py-3' 
          : 'bg-gradient-to-b from-slate-950/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Elegant Logo Design based on Thompson Group Mockup */}
          <a href="#home" id="brand-logo-link" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 border border-teal-400/25 rounded-md bg-slate-900/40 p-1">
              {/* Custom SVG reflecting the 'T' with legal scales/horizontal design */}
              <svg viewBox="0 0 100 100" className="w-8 h-8 text-teal-400 group-hover:scale-105 transition-transform" fill="none" stroke="currentColor" strokeWidth="6">
                <line x1="15" y1="20" x2="85" y2="20" />
                <line x1="50" y1="20" x2="50" y2="85" />
                <line x1="30" y1="85" x2="70" y2="85" />
                <path d="M25 45 C 38 45, 38 60, 50 60 C 62 60, 62 45, 75 45" strokeWidth="4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-[0.18em] text-white leading-none">THOMPSON</span>
              <span className="font-sans text-[10px] font-semibold tracking-[0.25em] text-teal-400 mt-1 uppercase leading-none">IMMIGRATION</span>
              <span className="font-sans text-[8px] font-normal tracking-[0.12em] text-slate-400 mt-0.5 uppercase">LAW GROUP</span>
            </div>
          </a>

          {/* Desktop Navigation Link Cluster */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                id={`nav-link-${link.name.toLowerCase()}`}
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-teal-400 text-sm font-medium tracking-wide transition duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call-to-Actions */}
          <div id="desktop-actions" className="hidden md:flex items-center space-x-4">
            {/* Leads Dashboard Quick Link indicator */}
            <button
              id="header-leads-dashboard-btn"
              onClick={onOpenLeads}
              className="relative p-2 text-slate-400 hover:text-teal-300 hover:bg-slate-800/40 rounded-lg transition"
              title="View consultation database"
            >
              <ShieldCheck className="w-5 h-5" />
              {leadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-500 text-slate-900 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-slate-900 animate-pulse">
                  {leadCount}
                </span>
              )}
            </button>

            <a
              id="header-cta-btn"
              href="#footer-form"
              className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold tracking-wider uppercase rounded font-sans transition-all duration-300 shadow-md shadow-teal-500/10 hover:shadow-teal-400/20 active:translate-y-0.5"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Actions Overlay */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              id="header-leads-mobile-btn"
              onClick={onOpenLeads}
              className="relative p-2 text-slate-400 hover:text-teal-300 rounded"
            >
              <ShieldCheck className="w-5 h-5" />
              {leadCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-teal-500 text-slate-900 text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center border border-slate-900">
                  {leadCount}
                </span>
              )}
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-teal-400 transition focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 animate-none" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div id="mobile-menu-dropdown" className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 absolute top-full left-0 right-0 py-6 px-6 shadow-2xl animate-none transition-all">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                id={`mobile-nav-link-${link.name.toLowerCase()}`}
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-teal-400 text-[15px] font-semibold tracking-wide py-1.5 transition duration-150 border-b border-slate-900"
              >
                {link.name}
              </a>
            ))}
            
            {/* Quick Consultation Book Form Button */}
            <a
              id="mobile-cta-btn"
              href="#footer-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full mt-4 text-center py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold tracking-wider uppercase text-xs rounded transition duration-200 block"
            >
              Book My Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
