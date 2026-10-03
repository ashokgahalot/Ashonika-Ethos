import React from 'react';
import { Package, Recycle, RefreshCw, Feather, Check } from 'lucide-react';

export const SustainabilitySection: React.FC = () => {
  const pillars = [
    {
      title: 'Minimal Packaging',
      description:
        'Eliminating secondary plastic wraps and gratuitous boxes. We aim to keep packaging as minimal and essential as possible.',
      icon: <Package className="w-5 h-5 text-[#C81E1E]" />,
    },
    {
      title: 'Paper-Based Materials',
      description:
        'Prioritizing high-yield unbleached kraft and recyclable paper components where practical and protective for fine powders.',
      icon: <Recycle className="w-5 h-5 text-[#122348]" />,
    },
    {
      title: 'Reduced Excess',
      description:
        'Refusing ornamental plastic spatulas, excessive flyers, and disposable inserts. Every design decision serves an intentional utility.',
      icon: <Feather className="w-5 h-5 text-[#C81E1E]" />,
    },
    {
      title: 'Reusable Vessels',
      description:
        'Developing durable amber glass jars and ceramic containers meant to be refilled, repurposed, or kept on your vanity.',
      icon: <RefreshCw className="w-5 h-5 text-[#122348]" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C81E1E] mb-3">
            <span className="w-6 h-px bg-[#FECACA]" />
            <span>Responsible Development</span>
            <span className="w-6 h-px bg-[#FECACA]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0F1E36] font-normal tracking-tight mb-4">
            Better choices, thoughtfully considered.
          </h2>

          <p className="text-sm sm:text-base text-[#475569] font-light leading-relaxed">
            Conscious living is not about perfection or trendy buzzwords; it is about continuous, responsible choices. As we prepare our launch, we are interrogating every material choice with intention.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-7 bg-white border border-[#E2E8F0] rounded-2xl flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all"
            >
              <div>
                <div className="p-3 bg-[#F8FAFC] rounded-xl w-fit mb-5 border border-[#E2E8F0]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-serif text-[#0F1E36] font-medium tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-[11px] text-[#64748B]">
                <Check className="w-3.5 h-3.5 text-[#C81E1E]" />
                <span>In Prototype Evaluation</span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Stewardship Note */}
        <div className="mt-12 text-center max-w-xl mx-auto text-xs text-[#475569] bg-white p-4 rounded-xl border border-[#E2E8F0]">
          We believe in honest transparency: we are testing practical, recyclable, and reusable materials without making unverified sweeping claims.
        </div>
      </div>
    </section>
  );
};
