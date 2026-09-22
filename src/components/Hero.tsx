import React, { useEffect, useState } from 'react';
import { ShieldCheck, ArrowRight, Play, Recycle, Building2, Wind } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger hero entrance animations immediately on initial render
    const timer = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50 bg-grid-pattern">
      {/* Soft Light Backdrop Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-sky-200/40 blur-[130px] rounded-full pointer-events-none transition-opacity duration-1000" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-emerald-200/30 blur-[110px] rounded-full pointer-events-none animate-float-slow" />

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Top Badge - Delay 100ms */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-6 hover:border-emerald-500/50 transition-all duration-700 transform ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold text-slate-800 tracking-wide uppercase whitespace-nowrap">
                ASHRAE Isolated Zone Compliant
              </span>
            </div>

            {/* Main Headline - Delay 250ms */}
            <h1
              style={{ transitionDelay: '150ms' }}
              className={`font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6 transition-all duration-700 transform ${
                loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'
              }`}
            >
              Engineering <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-teal via-sky-600 to-emerald-600">Cleaner Spaces</span> & Circular Recycling.
            </h1>

            {/* Supporting Paragraph - Delay 350ms */}
            <p
              style={{ transitionDelay: '300ms' }}
              className={`text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl transition-all duration-700 transform ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Shravni's <strong className="text-slate-900 font-semibold">Smoke Zone</strong> delivers architectural smoking cabins powered by 3-stage HEPA air purification and the pioneer <strong className="text-slate-900 font-semibold">BUDDY BIN</strong> circular waste program - eliminating butt litter and containing smoke in premier corporate hubs.
            </p>

            {/* Action Buttons - Delay 450ms */}
            <div
              style={{ transitionDelay: '450ms' }}
              className={`flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto transition-all duration-700 transform ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <a
                href="#overview"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-brand-teal text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 group whitespace-nowrap"
              >
                <span>Explore Project Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#gallery"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-300 hover:border-slate-400 shadow-xs hover:scale-[1.02] transition-all duration-300 whitespace-nowrap"
              >
                <Play className="w-4 h-4 text-brand-teal fill-brand-teal/20" />
                <span>View Real Installations</span>
              </a>
            </div>

            {/* Key Metrics Strip - Delay 600ms */}
            <div
              style={{ transitionDelay: '600ms' }}
              className={`grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-slate-200 transition-all duration-700 transform ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {PROJECT_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight group-hover:text-brand-teal transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-brand-teal mt-0.5 whitespace-nowrap">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {stat.detail}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Hero Visual Showcase - Delay 350ms */}
          <div
            style={{ transitionDelay: '350ms' }}
            className={`lg:col-span-5 relative transition-all duration-1000 transform ${
              loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-[0.96]'
            }`}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Shadow Frame */}
              <div className="relative rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                
                {/* Main Hero Photo */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-900 group">
                  <img
                    src="/media/pavilion-canopy.jpg"
                    alt="Smoke Zone Canopy Pavilion Installation"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  
                  {/* Floating Tag over Image */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-bold text-slate-900 shadow-sm">
                    <Building2 className="w-3.5 h-3.5 text-brand-teal" />
                    <span>Grand Highstreet Mall, Pune</span>
                  </div>
                </div>

                {/* Card Content & Features Callout */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <Wind className="w-4 h-4 text-brand-teal animate-pulse" />
                      <span>Negative Pressure Airflow</span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-300">
                      Active Installation
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Architectural canopy smoking pavilion integrated with illuminated bamboo planters, continuous stainless steel counter bars, and high-efficiency filtration.
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
                    <span className="text-slate-500 font-medium">Coverage across:</span>
                    <span className="text-slate-900 font-bold">Pune, Mumbai, Hyderabad, Bangalore</span>
                  </div>
                </div>

              </div>

              {/* Floating BUDDY BIN Badge */}
              <div
                style={{ transitionDelay: '700ms' }}
                className={`absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl z-20 max-w-xs animate-float-slow transition-all duration-700 transform ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0">
                  <Recycle className="w-5 h-5 text-emerald-700 animate-spin" style={{ animationDuration: '12s' }} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">BUDDY BIN Initiative</h4>
                  <p className="text-[11px] text-slate-600 font-medium">100% Cigarette butt segregation & material repurposing</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
