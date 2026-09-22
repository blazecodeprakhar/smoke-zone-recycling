import React, { useState } from 'react';
import { Wind, Filter, CheckCircle } from 'lucide-react';
import { FILTRATION_STAGES } from '../data/projectData';
import { AnimatedSection } from './AnimatedSection';

export const FiltrationSystem: React.FC = () => {
  const [activeStage, setActiveStage] = useState(1);

  return (
    <section id="filtration" className="py-20 lg:py-28 relative bg-slate-50 border-b border-slate-200 overflow-hidden">
      {/* Soft Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-100 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-sky-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Wind className="w-3.5 h-3.5 text-brand-teal" />
            Air Purification Technology
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Advanced 3-Stage Air Filtration System
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal">
            Delivering clean, breathable ambient air through multi-stage mechanical and chemical adsorption, eliminating smoke drift and harmful gaseous byproducts.
          </p>
        </AnimatedSection>

        {/* Interactive Filtration Pipeline */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Stage Buttons list */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {FILTRATION_STAGES.map((stage, idx) => {
              const isActive = activeStage === stage.stage;
              return (
                <AnimatedSection key={stage.stage} delay={idx * 100}>
                  <button
                    onClick={() => setActiveStage(stage.stage)}
                    className={`w-full p-6 rounded-2xl text-left transition-all duration-300 border ${
                      isActive
                        ? 'bg-white border-brand-teal shadow-lg shadow-brand-teal/10 scale-[1.02]'
                        : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        isActive ? 'bg-brand-teal text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        Stage 0{stage.stage}
                      </span>
                      <span className="text-xs font-bold text-emerald-700">
                        {stage.code}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{stage.name}</h3>
                    <p className="text-xs text-slate-600 line-clamp-2 font-medium">{stage.target}</p>
                  </button>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Active Stage Visual Showcase */}
          <AnimatedSection delay={200} className="lg:col-span-7">
            {FILTRATION_STAGES.filter(s => s.stage === activeStage).map((stage) => (
              <div
                key={stage.stage}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden transition-all duration-500 animate-fade-in"
              >
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Selected Filter Stage</span>
                    <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{stage.name}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-brand-teal shrink-0">
                    <Filter className="w-6 h-6" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs text-slate-500 font-semibold block mb-1">Filter Media Rating</span>
                    <span className="text-lg font-extrabold text-brand-teal">{stage.code}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs text-slate-500 font-semibold block mb-1">Efficiency Standard</span>
                    <span className="text-lg font-extrabold text-emerald-700">{stage.efficiency}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Target Contaminants</h4>
                  <p className="text-sm font-semibold text-slate-900 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    {stage.target}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Operational Process</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {stage.description}
                  </p>
                </div>

              </div>
            ))}
          </AnimatedSection>

        </div>

        {/* Air Flow Diagram Strip */}
        <AnimatedSection delay={300} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-brand-teal shrink-0">
              <Wind className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Negative Pressure Air Circulation</h4>
              <p className="text-xs text-slate-600 font-medium">Smoke is continuously pulled inwards, filtered 3x, and safely discharged.</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-4 py-2.5 rounded-xl border border-emerald-300 shrink-0">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>ASHRAE Standard Compliant</span>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
