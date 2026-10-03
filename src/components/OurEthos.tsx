import React from 'react';
import { ETHOS_PRINCIPLES } from '../data/ethos';
import { Compass, Sparkles, Feather, HeartHandshake } from 'lucide-react';

export const OurEthos: React.FC = () => {
  const icons = [
    <HeartHandshake className="w-5 h-5 text-[#C81E1E]" />,
    <Compass className="w-5 h-5 text-[#122348]" />,
    <Feather className="w-5 h-5 text-[#C81E1E]" />,
    <Sparkles className="w-5 h-5 text-[#122348]" />,
  ];

  return (
    <section id="ethos" className="py-20 sm:py-28 bg-[#FCFDFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C81E1E] mb-3">
            <span className="w-6 h-px bg-[#FECACA]" />
            <span>Guiding Philosophy</span>
            <span className="w-6 h-px bg-[#FECACA]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0F1E36] font-normal tracking-tight mb-4">
            Our Ethos
          </h2>

          <p className="text-sm sm:text-base text-[#475569] font-light leading-relaxed max-w-xl mx-auto">
            Ashonika Ethos was born from a desire to harmonize daily personal care with intentional, ancestral wisdom and respect for the earth.
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ETHOS_PRINCIPLES.map((principle, index) => (
            <div
              key={principle.number}
              className="relative p-8 bg-white border border-[#E2E8F0] rounded-2xl flex flex-col justify-between hover:border-[#C81E1E]/40 hover:shadow-xs transition-all duration-300"
            >
              <div>
                {/* Header with Number and Line Art Icon */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E2E8F0]">
                  <span className="font-serif text-2xl text-[#C81E1E] font-medium">
                    {principle.number}
                  </span>
                  <div className="p-2.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0]">
                    {icons[index % icons.length]}
                  </div>
                </div>

                {/* Principle Title */}
                <h3 className="text-2xl font-serif text-[#0F1E36] tracking-tight mb-3">
                  {principle.title}
                </h3>

                {/* Direct Quote from User Brief */}
                <blockquote className="text-sm italic font-serif text-[#0F1E36]/90 leading-relaxed mb-4 border-l-2 border-[#C81E1E] pl-3">
                  “{principle.quote}”
                </blockquote>

                {/* Nuanced description */}
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {principle.description}
                </p>
              </div>

              {/* Subdued anchor label */}
              <div className="mt-8 pt-4 border-t border-[#E2E8F0] text-[11px] uppercase tracking-wider text-[#94A3B8]">
                Principle {principle.number} of 04
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
