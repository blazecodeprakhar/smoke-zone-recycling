import React from 'react';
import { CLIENTS } from '../data/projectData';
import { Building2, MapPin, Award } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const ClientsInstallations: React.FC = () => {
  return (
    <section id="clients" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            Proven Corporate Track Record
          </div>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Premier Commercial Parks & SEZs
          </h2>
          <p className="mt-3 text-sm text-slate-600 font-medium">
            Deployed across leading IT parks, shopping malls, and corporate headquarter campuses across India.
          </p>
        </AnimatedSection>

        {/* Centered Client Badges Flex Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 max-w-6xl mx-auto">
          {CLIENTS.map((client, idx) => (
            <AnimatedSection key={idx} delay={idx * 40} className="w-[calc(50%-10px)] sm:w-48 lg:w-52">
              <div
                className="p-5 h-full rounded-2xl bg-white border border-slate-200 hover:border-brand-teal transition-all text-center group shadow-xs hover:shadow-md flex flex-col items-center justify-center"
              >
                <Building2 className="w-6 h-6 text-brand-teal mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-slate-900 text-sm tracking-tight mb-1">{client.name}</h3>
                <span className="text-[11px] font-bold text-slate-500 flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                  {client.city}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
