import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import flatlayImage from '../assets/images/collection_flatlay_1791042464692.jpg';
import { getSectionHeaderVariants } from '../utils/motion';

export const CollectionVisual: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const headerVariants = getSectionHeaderVariants(shouldReduceMotion);

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-y border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Presentation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={headerVariants}
            className="lg:col-span-7"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0] bg-white group">
              <img
                src={flatlayImage}
                alt="Overhead flatlay composition of Multani Mitti clay powder in ceramic bowl, rose petals, turmeric, neem, and sandalwood"
                className="w-full aspect-16/10 sm:aspect-16/9 object-cover img-zoom"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428]/50 via-transparent to-transparent opacity-40 pointer-events-none" />

              {/* In-image caption tag */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-[#E2E8F0] text-[#0B172B] flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D81A27] font-bold block">
                    Botanical Still Life
                  </span>
                  <span className="font-serif text-sm sm:text-base font-medium">
                    Ceramic, Linen, Clay & Earth
                  </span>
                </div>
                <span className="text-xs text-[#0C2D79] font-bold font-sans">
                  Batch 01 Study
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Story & Breakdown */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={headerVariants}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#D81A27] mb-3">
              Botanical Symphony
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif text-[#0B172B] tracking-tight leading-tight mb-5">
              Five elements. One timeless earthen foundation.
            </h3>

            <p className="text-sm sm:text-base text-[#4B5563] font-light leading-relaxed mb-6">
              Our inaugural collection celebrates the raw, unaltered character of Fuller’s Earth (Multani Mitti) — revered in Indian traditions for centuries for its gentle cleansing and purifying balance.
            </p>

            {/* Ingredient Harmony Grid */}
            <div className="space-y-4 pt-4 border-t border-[#E2E8F0]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#FECACA] flex items-center justify-center shrink-0 text-[#D81A27] font-serif text-sm font-bold shadow-2xs">
                  01
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0B172B]">Sun-Cured Earth</div>
                  <div className="text-xs text-[#4B5563] leading-relaxed">
                    Sedimentary clay filtered through natural geological strata, gently sun-cured and fine-milled.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#BFDBFE] flex items-center justify-center shrink-0 text-[#0C2D79] font-serif text-sm font-bold shadow-2xs">
                  02
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0B172B]">Indigenous Flora</div>
                  <div className="text-xs text-[#4B5563] leading-relaxed">
                    Fresh Indian damask rose, wild golden turmeric, garden-shade neem, and Mysore-style sandalwood.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#FECACA] flex items-center justify-center shrink-0 text-[#D81A27] font-serif text-sm font-bold shadow-2xs">
                  03
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0B172B]">Sensory Simplicity</div>
                  <div className="text-xs text-[#4B5563] leading-relaxed">
                    A tactile skincare ritual that invites you to slow down, mix naturally, and breathe deeply.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
