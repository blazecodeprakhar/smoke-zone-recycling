import React from 'react';
import { Sliders, CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Specifications: React.FC = () => {
  const specs = [
    { label: "Air Filtration Standard", value: "3-Stage: G3 Pre-Filter + HEPA H13 + Activated Coconut Carbon" },
    { label: "Particulate Capture Efficiency", value: "99.95% down to 0.3 microns (smoke aerosols & fine dust)" },
    { label: "Airflow Direction Control", value: "Negative pressure room differential preventing smoke escape" },
    { label: "ASHRAE Compliance", value: "Guidelines for Isolated Indoor Smoking Zone Ventilation" },
    { label: "Cigarette Butt Recycling", value: "BUDDY BIN 4-stage fractioning & cellulose acetate recovery" },
    { label: "Structural Framing", value: "Powder-coated heavy gauge aluminum & weatherproof steel" },
    { label: "Glazing & Insulation", value: "Safety tempered architectural glass with sound dampening" },
    { label: "Ashtray System", value: "Vandal-proof stainless steel BUDDY BINS with auto-extinguish" },
    { label: "Lighting & Power", value: "Low-voltage warm LED perimeter strips & HVAC power bus" },
    { label: "Operating Regional Hubs", value: "Pune, Mumbai, Bangalore, Hyderabad (18 Active Branches)" }
  ];

  return (
    <section id="specs" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Sliders className="w-3.5 h-3.5 text-brand-teal" />
            Engineering Specifications
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical At-A-Glance
          </h2>
          <p className="mt-3 text-base text-slate-600 font-medium">
            Verified engineering standards and material specifications for Smoke Zone cabin installations.
          </p>
        </AnimatedSection>

        {/* Specs Table */}
        <AnimatedSection delay={150} className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-md">
          <div className="divide-y divide-slate-100">
            {specs.map((item, idx) => (
              <div
                key={idx}
                className="grid sm:grid-cols-12 p-5 sm:px-8 items-center gap-4 hover:bg-slate-50 transition-colors"
              >
                <div className="sm:col-span-5 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.label}
                  </span>
                </div>
                <div className="sm:col-span-7">
                  <span className="text-xs sm:text-sm text-slate-700 font-semibold">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
