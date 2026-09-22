import React from 'react';
import { Recycle, Layers, ShieldAlert, ArrowRight, Check } from 'lucide-react';
import { BUDDY_BIN_PROCESS } from '../data/projectData';
import { AnimatedSection } from './AnimatedSection';

export const BuddyBinProcess: React.FC = () => {
  return (
    <section id="buddybin" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Recycle className="w-3.5 h-3.5 text-emerald-600" />
            The BUDDY BIN Circular Initiative
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            From Waste to Resource: The Circular Process
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal">
            A structured cigarette-butt waste management pathway that routes every component through responsible recycling, recovery, or contained treatment.
          </p>
        </AnimatedSection>

        {/* 6 Step Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {BUDDY_BIN_PROCESS.map((step, idx) => (
            <AnimatedSection key={step.step} delay={idx * 80}>
              <div
                className="h-full p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500/60 hover:bg-white transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 text-xs font-bold">
                      0{step.step}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-brand-teal">
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  <span>Output: {step.output}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Repurposing Output Matrix Box */}
        <AnimatedSection delay={200} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-md">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-600" />
            End-Use Material Pathways
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Cellulose Acetate */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <span className="text-xs font-bold text-brand-teal uppercase tracking-wider block mb-1">
                Filter Material Stream
              </span>
              <h4 className="text-base font-bold text-slate-900 mb-2">Cellulose Acetate Fiber</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3 font-medium">
                Decontaminated, washed, dried, and shredded fibers evaluated for approved non-food utility craft and cushion stuffing applications.
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-bold">
                <Check className="w-3.5 h-3.5" /> Craft & Stuffing Utility
              </span>
            </div>

            {/* Tobacco & Paper */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                Organic Fraction
              </span>
              <h4 className="text-base font-bold text-slate-900 mb-2">Tobacco & Paper Wrap</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3 font-medium">
                Biodegradable organic matter segregated and routed through authorized composting routes for soil enhancement.
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-bold">
                <Check className="w-3.5 h-3.5" /> Organic Compost Route
              </span>
            </div>

            {/* Nicotine & Fines */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
                Contaminant Stream
              </span>
              <h4 className="text-base font-bold text-slate-900 mb-2">Nicotine Wash & Fines</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3 font-medium">
                Contained wash water isolated in designated tanks for testing, characterization, and authorized waste treatment.
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] text-amber-700 font-bold">
                <ShieldAlert className="w-3.5 h-3.5" /> Contained Treatment
              </span>
            </div>

          </div>

          <p className="text-[11px] text-slate-500 mt-6 pt-4 border-t border-slate-200 italic font-medium">
            * Note: All specific reuse claims comply with standard environmental testing and applicable regulatory permissions.
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
};
