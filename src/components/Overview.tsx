import React from 'react';
import { ShieldCheck, Leaf, Building, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Overview: React.FC = () => {
  return (
    <section id="overview" className="py-20 lg:py-28 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Building className="w-3.5 h-3.5 text-brand-teal" />
            Project Overview & Mission
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Transforming Smoking Infrastructure for Modern Corporate Hubs.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Shravni’s Smoking Solutions is a premier Indian organization dedicated to designing, supplying, installing, and maintaining turnkey smoking cabins, cubicles, and circular cigarette butt management systems.
          </p>
        </AnimatedSection>

        {/* 2-Column Challenge vs Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* The Challenge Card */}
          <AnimatedSection delay={100} className="p-8 rounded-2xl bg-red-50/40 border border-red-200 relative overflow-hidden group shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center text-red-600 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">The Corporate Dilemma</h3>
                <span className="text-xs text-red-700 font-semibold">Unmanaged Smoking Areas & Butt Litter</span>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-0.5">•</span>
                <span><strong className="text-slate-900">Environmental Pollution:</strong> Discarded cigarette butts contain non-biodegradable micro-resins that pollute storm drains, urban soil, and public grounds.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-0.5">•</span>
                <span><strong className="text-slate-900">Indoor Air Intrusion:</strong> Unfiltered smoke leaks into office entrances and lobbies, exposing non-smokers to secondhand odors.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold mt-0.5">•</span>
                <span><strong className="text-slate-900">Safety & Compliance Risk:</strong> Improperly extinguished butts pose fire hazards and degrade green building aesthetics.</span>
              </li>
            </ul>
          </AnimatedSection>

          {/* The Solution Card */}
          <AnimatedSection delay={200} className="p-8 rounded-2xl bg-emerald-50/40 border border-emerald-200 relative overflow-hidden group shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">The Smoke Zone Solution</h3>
                <span className="text-xs text-emerald-800 font-semibold">Turnkey Cabins & Circular Recycling</span>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-emerald-700 font-bold mt-0.5">•</span>
                <span><strong className="text-slate-900">3-Stage Air Purification:</strong> Negative pressure air handling equipped with G3 pre-filters, HEPA H13, and activated coconut carbon.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-700 font-bold mt-0.5">•</span>
                <span><strong className="text-slate-900">BUDDY BIN Segregation:</strong> Dedicated source-collection bins paired with a task force for 100% material recovery and decontamination.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-700 font-bold mt-0.5">•</span>
                <span><strong className="text-slate-900">Architectural Elegance:</strong> Contemporary weather-proof booths that transform dead spaces into clean, dignified facilities.</span>
              </li>
            </ul>
          </AnimatedSection>

        </div>

        {/* 3 Core Value Columns */}
        <div className="grid md:grid-cols-3 gap-6">
          <AnimatedSection delay={100} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-sky-300 transition-colors">
            <ShieldCheck className="w-8 h-8 text-brand-teal mb-4" />
            <h4 className="text-lg font-bold text-slate-900 mb-2">ASHRAE Standard Compliance</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Designed according to international guidelines for Isolated Indoor Smoking Zones set by the American Society of Heating, Refrigerating and Air-Conditioning Engineers.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-emerald-300 transition-colors">
            <Leaf className="w-8 h-8 text-emerald-600 mb-4" />
            <h4 className="text-lg font-bold text-slate-900 mb-2">Zero-Litter Circular Goal</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Keeps cigarette filters, paper wrapping, and tobacco residue out of municipal landfills by converting them into non-food craft materials and organic compost.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-sky-300 transition-colors">
            <Building className="w-8 h-8 text-sky-600 mb-4" />
            <h4 className="text-lg font-bold text-slate-900 mb-2">18 Operational Branches</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Active management across major IT parks, Special Economic Zones (SEZs), shopping malls, and corporate campuses in Pune, Mumbai, Bangalore, and Hyderabad.
            </p>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
};
