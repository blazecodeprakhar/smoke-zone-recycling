import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Send, CheckCircle2, X, Building2 } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';
import { AnimatedSection } from './AnimatedSection';

export const ContactCTA: React.FC<{ onOpenInquiry: () => void }> = ({ onOpenInquiry }) => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <AnimatedSection className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 px-3.5 py-1 rounded-full bg-emerald-900/60 border border-emerald-700/60 inline-block mb-4">
                Turnkey Implementation & Service
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Upgrade Your Campus Smoking Infrastructure?
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                Contact our engineering team to schedule a site audit, discuss custom modular cabin dimensions, or implement the BUDDY BIN circular recycling program.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={onOpenInquiry}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-teal via-sky-600 to-emerald-600 text-white font-bold text-sm shadow-xl hover:scale-[1.02] transition-all"
                >
                  Schedule Site Survey & Proposal
                </button>
                <a
                  href={`tel:${PROJECT_INFO.contact.phone[0]}`}
                  className="px-6 py-3.5 rounded-xl bg-slate-800 text-white hover:text-sky-300 font-semibold text-sm border border-slate-700 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  Call: {PROJECT_INFO.contact.phone[0]}
                </a>
              </div>
            </div>

            {/* Official Contact Info Card */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white pb-4 border-b border-slate-800 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-sky-400" />
                Direct Corporate Contact
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-medium">Direct Line:</span>
                    <span className="text-white font-semibold">{PROJECT_INFO.contact.phone.join(' / ')}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-medium">Official Email:</span>
                    <a href={`mailto:${PROJECT_INFO.contact.email}`} className="text-white hover:text-sky-300 font-semibold transition-colors">
                      {PROJECT_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-medium">Headquarters Address:</span>
                    <span className="text-slate-200">{PROJECT_INFO.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-medium">Official Portal:</span>
                    <a href={`https://${PROJECT_INFO.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:underline">
                      {PROJECT_INFO.contact.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export const InquiryModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative max-w-lg w-full bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl text-slate-900">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 flex items-center justify-center border border-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Proposal Request Received</h3>
            <p className="text-xs text-slate-600 mb-6 font-medium">
              Our engineering team will review your project requirements and contact you at the provided email/phone.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-1">Request Project Proposal</h3>
            <p className="text-xs text-slate-600 mb-6 font-medium">
              Submit your campus details for modular cabin specifications and BUDDY BIN setup.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Rajesh Sharma"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-brand-teal"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Company / Organization</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Tech Park Facility Ops"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-brand-teal"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-brand-teal"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-brand-teal"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Required Solution Type</label>
                <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-brand-teal">
                  <option>Outdoor Canopy Smoking Zone</option>
                  <option>Indoor Self-Contained Modular Cabin</option>
                  <option>BUDDY BIN Recycling Setup Only</option>
                  <option>Full Campus Turnkey Audit</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Notes / Installation City</label>
                <textarea
                  rows={3}
                  placeholder="Mention target location (Pune, Mumbai, Hyderabad, Bangalore, etc.)"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-brand-teal"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-brand-teal text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                Submit Proposal Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
