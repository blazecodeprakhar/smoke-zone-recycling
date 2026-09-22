import React, { useState } from 'react';
import { INSTALLATIONS, Installation } from '../data/projectData';
import { Maximize2, X, MapPin, Eye, Play } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Gallery: React.FC = () => {
  const [activeMedia, setActiveMedia] = useState<Installation | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Eye className="w-3.5 h-3.5 text-brand-teal" />
              Real Site Installations
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Architectural Gallery & Case Studies
            </h2>
          </div>

          <button
            onClick={() => setShowVideoModal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-brand-teal border border-slate-800 font-bold text-xs shadow-md transition-all duration-300 self-start md:self-auto"
          >
            <Play className="w-4 h-4 fill-white text-white" />
            <span>Play Site Footage Video</span>
          </button>
        </AnimatedSection>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTALLATIONS.map((item, idx) => (
            <AnimatedSection key={item.id} delay={idx * 100}>
              <div
                onClick={() => setActiveMedia(item)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 cursor-pointer shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* Aspect ratio frame */}
                <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-900 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-[11px] font-bold text-slate-900 shadow-xs">
                    {item.type}
                  </div>

                  {/* Expand Icon Hover Overlay */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Caption */}
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-brand-teal transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>

      {/* Image Lightbox Modal */}
      {activeMedia && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl">
            
            <button
              onClick={() => setActiveMedia(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900 text-white hover:bg-red-600 flex items-center justify-center shadow-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-96 sm:h-[500px] w-full bg-slate-950">
              <img
                src={activeMedia.image}
                alt={activeMedia.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-white">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-teal uppercase tracking-wider mb-1">
                {activeMedia.type}
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{activeMedia.name}</h3>
              <p className="text-xs text-emerald-700 font-bold mb-3 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {activeMedia.location}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {activeMedia.description}
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900 text-white hover:bg-red-600 flex items-center justify-center shadow-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 bg-slate-900">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Play className="w-5 h-5 text-brand-teal" />
                Smoke Zone Site Video Demonstration
              </h3>
              <video controls autoPlay className="w-full rounded-2xl max-h-[70vh] bg-black">
                <source src="/media/smoke-zone-video.mp4" type="video/mp4" />
                Your browser does not support HTML5 video playback.
              </video>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
