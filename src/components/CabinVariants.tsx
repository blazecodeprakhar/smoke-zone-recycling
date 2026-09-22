import React from 'react';
import { CABIN_VARIANTS } from '../data/projectData';
import { Layout, Fan, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const CabinVariants: React.FC<{ onOpenInquiry: () => void }> = ({ onOpenInquiry }) => {
  const images = [
    "/media/pavilion-canopy.jpg",
    "/media/modular-cabin-white.jpg",
    "/media/outdoor-installation-wide.jpg",
    "/media/matte-black-booth.jpg"
  ];

  return (
    <section id="cabins" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-sky-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Layout className="w-3.5 h-3.5 text-brand-teal" />
              Architectural Product Range
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Smoking Zone Cabins & Solutions
            </h2>
          </div>
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-brand-teal font-bold text-xs border border-slate-200 shadow-xs transition-colors self-start md:self-auto"
          >
            <span>Custom Dimensions Request</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </AnimatedSection>

        {/* 4 Variant Cards Grid with Visual Image Previews */}
        <div className="grid md:grid-cols-2 gap-8">
          {CABIN_VARIANTS.map((variant, idx) => (
            <AnimatedSection key={idx} delay={idx * 100}>
              <div
                className="h-full rounded-3xl bg-white border border-slate-200 hover:border-brand-teal/80 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl overflow-hidden"
              >
                {/* Visual Image Header */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={images[idx % images.length]}
                    alt={variant.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-center text-brand-teal shadow-xs">
                    <Fan className="w-5 h-5" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-teal transition-colors">
                      {variant.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                      {variant.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                      Technical Highlights
                    </h4>
                    <div className="grid grid-cols-2 gap-2.5">
                      {variant.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
