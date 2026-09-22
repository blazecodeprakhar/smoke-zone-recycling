import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="font-display font-extrabold text-lg text-white">
                SMOKE<span className="text-brand-teal">ZONE</span>
              </span>
            </a>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mb-4 font-normal">
              Pioneering 3-stage HEPA air filtration smoking cabins and the BUDDY BIN circular cigarette butt recycling program across premier corporate hubs in India.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-bold">
              <Shield className="w-3.5 h-3.5" />
              <span>{PROJECT_INFO.standard}</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-xs">Quick Links</h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#overview" className="hover:text-white transition-colors">Project Overview</a></li>
              <li><a href="#filtration" className="hover:text-white transition-colors">Air Purification (HEPA H13)</a></li>
              <li><a href="#buddybin" className="hover:text-white transition-colors">BUDDY BIN Circular Recycling</a></li>
              <li><a href="#cabins" className="hover:text-white transition-colors">Cabin & Lounge Range</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Installation Gallery</a></li>
              <li><a href="#specs" className="hover:text-white transition-colors">Technical Specifications</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-xs">Headquarters</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-2 font-medium">
              {PROJECT_INFO.contact.address}
            </p>
            <p className="text-xs text-slate-300 mb-1 font-medium">
              <strong className="text-white">Phone:</strong> {PROJECT_INFO.contact.phone[0]}
            </p>
            <p className="text-xs text-slate-300 font-medium">
              <strong className="text-white">Email:</strong> {PROJECT_INFO.contact.email}
            </p>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-medium">
          <div>
            © {new Date().getFullYear()} {PROJECT_INFO.company} (SMOKE ZONE | BUDDY BIN Initiative). All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
