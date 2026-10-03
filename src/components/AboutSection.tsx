import React from 'react';
import aboutImage from '../assets/images/about_craft_editorial_1791042554505.jpg';
import { Flower2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with craftsmanship storytelling */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative aspect-4/3 sm:aspect-1/1 lg:aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0] bg-[#F1F5F9] group">
                <img
                  src={aboutImage}
                  alt="Artisan hands gently sifting soft Multani Mitti clay powder through a wooden sieve over a ceramic bowl"
                  className="w-full h-full object-cover img-zoom"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428]/50 via-transparent to-transparent opacity-40 pointer-events-none" />

                {/* Subdued overlay plaque */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] text-[#0F1E36] shadow-xs">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#C81E1E] font-bold mb-1">
                    Artisanal Patience
                  </div>
                  <p className="font-serif text-sm sm:text-base italic">
                    Sun-cured. Triple-sifted. Unadulterated.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C81E1E] mb-3">
              <span className="w-6 h-px bg-[#FECACA]" />
              <span>About Ashonika Ethos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0F1E36] font-normal tracking-tight leading-[1.15] mb-6">
              A new-age brand with an old-world connection.
            </h2>

            <div className="space-y-4 text-base text-[#475569] font-light leading-relaxed">
              <p>
                Ashonika Ethos brings together the simplicity of nature, the richness of Indian traditions and the sensibility of modern conscious living.
              </p>
              <p>
                We are beginning with a small collection inspired by Multani Mitti and timeless botanical ingredients — thoughtfully imagined, beautifully presented and created with intention.
              </p>
            </div>

            {/* Prominent secondary line as required */}
            <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
              <p className="text-xl sm:text-2xl font-serif text-[#C81E1E] italic">
                “This is only the beginning.”
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#122348] mt-1 font-sans font-bold">
                Volume 01 · Multani Mitti Collection
              </p>
            </div>

            {/* Heritage note */}
            <div className="mt-8 flex items-center gap-4 text-xs text-[#475569] bg-white p-4 rounded-xl border border-[#E2E8F0]">
              <Flower2 className="w-5 h-5 text-[#C81E1E] shrink-0" />
              <span>
                Rooted in authentic Indian wellness customs, formulated with restraint and packaged for modern living spaces.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
