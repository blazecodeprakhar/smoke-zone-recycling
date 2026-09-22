import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

interface HeaderProps {
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Air Filtration', href: '#filtration' },
    { name: 'Circular Economy', href: '#buddybin' },
    { name: 'Cabins & Lounges', href: '#cabins' },
    { name: 'Installations', href: '#gallery' },
    { name: 'Clients', href: '#clients' },
    { name: 'Specifications', href: '#specs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-2.5 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/60 py-3.5'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 max-w-[1500px] mx-auto">
        
        {/* Left: Brand Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 rounded-lg p-1">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 flex items-center gap-1 whitespace-nowrap">
              SMOKE<span className="text-brand-teal">ZONE</span>
            </span>
            <span className="text-[9px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-300 tracking-wider whitespace-nowrap shadow-2xs">
              ECO
            </span>
          </div>
          <span className="hidden 2xl:inline-block text-[10px] text-slate-500 font-semibold tracking-wider uppercase pl-2 border-l border-slate-200 whitespace-nowrap">
            {PROJECT_INFO.company}
          </span>
        </a>

        {/* Center: Desktop Navigation Bar (shown on XL+ screens) */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-100/80 border border-slate-200 rounded-full px-3 py-1 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 text-[11px] 2xl:text-xs font-semibold text-slate-700 hover:text-brand-teal hover:bg-white rounded-full transition-all whitespace-nowrap shadow-2xs"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Actions & Phone & Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Phone Number */}
          <a
            href={`tel:${PROJECT_INFO.contact.phone[0]}`}
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-brand-teal px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-brand-teal shrink-0" />
            <span className="whitespace-nowrap">{PROJECT_INFO.contact.phone[0]}</span>
          </a>

          {/* Request Proposal Button */}
          <button
            onClick={onOpenInquiry}
            className="relative group overflow-hidden px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-brand-teal hover:to-brand-cyan text-white text-xs font-bold shadow-sm transition-all duration-300 hover:scale-[1.02] whitespace-nowrap shrink-0"
          >
            <span className="relative z-10 flex items-center gap-1 whitespace-nowrap">
              Request Proposal
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0 text-brand-teal group-hover:text-white" />
            </span>
          </button>

          {/* Mobile & Laptop Drawer Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-teal xl:hidden shrink-0 border border-slate-200"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile & Medium Display Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[60px] bg-white border-b border-slate-200 p-6 shadow-xl animate-in slide-in-from-top duration-200 max-h-[calc(100vh-70px)] overflow-y-auto">
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl text-slate-800 hover:text-brand-teal hover:bg-slate-50 border border-slate-100 transition-colors font-semibold text-sm whitespace-nowrap"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-3">
              <a
                href={`tel:${PROJECT_INFO.contact.phone[0]}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 text-slate-800 text-xs font-semibold border border-slate-200"
              >
                <Phone className="w-4 h-4 text-brand-teal" />
                <span>Call Us: {PROJECT_INFO.contact.phone[0]}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-brand-teal text-white font-bold text-sm shadow-md text-center whitespace-nowrap transition-colors"
              >
                Request Proposal & Quote
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
