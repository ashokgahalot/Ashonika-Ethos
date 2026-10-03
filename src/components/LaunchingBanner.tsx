import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

interface LaunchingBannerProps {
  onOpenNotify: () => void;
}

export const LaunchingBanner: React.FC<LaunchingBannerProps> = ({ onOpenNotify }) => {
  return (
    <section className="relative py-16 sm:py-20 bg-[#F8FAFC] border-y border-[#E2E8F0] overflow-hidden">
      {/* Decorative background radial pattern */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle pre-launch status badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs uppercase tracking-[0.2em] font-semibold text-[#122348] mb-6 shadow-2xs">
          <Clock className="w-3.5 h-3.5 text-[#C81E1E]" />
          <span>In Thoughtful Preparation</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0F1E36] font-normal tracking-tight mb-4">
          Something natural is coming.
        </h2>

        <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Our first collection is being thoughtfully prepared. We are taking the time to get every detail right — from ingredients to packaging.
        </p>

        {/* Large typography display for the inaugural collection */}
        <div className="my-8 py-6 px-6 sm:px-12 bg-white/90 backdrop-blur-xs border border-[#E2E8F0] rounded-2xl max-w-3xl mx-auto shadow-xs">
          <span className="block text-xs uppercase tracking-[0.35em] text-[#C81E1E] font-bold mb-2">
            Inaugural Release
          </span>
          <div className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#0F1E36] tracking-tight">
            MULTANI MITTI COLLECTION
          </div>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#E2E8F0]" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#122348]">
              Launching Soon
            </span>
            <span className="h-px w-10 bg-[#E2E8F0]" />
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <button
            onClick={onOpenNotify}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#122348] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#0A1428] active:scale-[0.98] transition-all shadow-sm group"
          >
            <Sparkles className="w-4 h-4 mr-2 text-[#C81E1E]" />
            <span>Be the first to know</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[#64748B]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C81E1E]" />
          <span>Curated pre-launch community · Invitation to the private debut</span>
        </div>
      </div>
    </section>
  );
};
