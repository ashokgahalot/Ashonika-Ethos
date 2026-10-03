import React from 'react';
import { ArrowDown, Sparkles, Feather } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import heroImage from '../assets/images/hero_brand_campaign_1791042451409.jpg';
import { getSectionHeaderVariants, getStaggerContainerVariants, getStaggerItemVariants } from '../utils/motion';

interface HeroProps {
  onOpenNotify: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenNotify }) => {
  const shouldReduceMotion = useReducedMotion();
  const containerVariants = getStaggerContainerVariants(shouldReduceMotion, 0.14, 0.05);
  const itemVariants = getStaggerItemVariants(shouldReduceMotion);
  const imageVariants = getSectionHeaderVariants(shouldReduceMotion);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white"
    >
      {/* Subtle organic ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D81A27]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0C2D79]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Brand Typography with Staggered Entrance */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Status Kicker / Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#FEF2F2] border border-[#FECACA] text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#D81A27] mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D81A27] animate-pulse" />
              <span>First Collection — Launching Soon</span>
            </motion.div>

            {/* Editorial Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#0B172B] font-normal tracking-tight leading-[1.12] mb-4 sm:mb-6 max-w-xl editorial-text"
            >
              Conscious choices, beautifully made.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-lg text-[#4B5563] font-light leading-relaxed max-w-lg mb-6 sm:mb-8"
            >
              Rooted in nature. Inspired by Indian traditions. Designed for modern conscious living.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              <a
                href="#collection"
                className="min-h-[46px] inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-[#D81A27] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-full hover:bg-[#B8121D] active:scale-[0.98] transition-all shadow-md group"
              >
                <span>Explore the Collection</span>
                <ArrowDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-0.5" />
              </a>

              <button
                onClick={onOpenNotify}
                className="min-h-[46px] inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-white text-[#0C2D79] text-xs sm:text-sm font-bold tracking-wider uppercase rounded-full border border-[#CBD5E1] hover:bg-[#EFF6FF] hover:border-[#0C2D79] active:scale-[0.98] transition-all"
              >
                <Sparkles className="w-4 h-4 mr-2 text-[#D81A27]" />
                <span>Notify Me</span>
              </button>
            </motion.div>

            {/* Subtle natural ingredient references bar */}
            <motion.div
              variants={itemVariants}
              className="pt-5 sm:pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center gap-y-2 gap-x-2.5 sm:gap-x-4 text-[11px] sm:text-xs text-[#64748B]"
            >
              <span className="font-bold text-[#0B172B] flex items-center gap-1.5">
                <Feather className="w-3.5 h-3.5 text-[#D81A27]" />
                Featured Botanicals:
              </span>
              <span>Multani Mitti</span>
              <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
              <span>Rose</span>
              <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
              <span>Haldi</span>
              <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
              <span>Neem</span>
              <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
              <span>Sandalwood</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual Showcase with Smooth Entrance */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="relative aspect-16/9 lg:aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0] bg-[#F8FAFC] group">
                <img
                  src={heroImage}
                  alt="Editorial brand campaign visual of raw Multani Mitti clay, rose petals, turmeric, neem, and sandalwood"
                  className="w-full h-full object-cover img-zoom"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428]/60 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Floating caption card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] text-[#0B172B] shadow-sm">
                  <div className="flex items-center justify-between text-[11px] font-sans tracking-widest uppercase text-[#64748B] mb-1 font-bold">
                    <span>The Inaugural Ritual</span>
                    <span className="text-[#D81A27] font-bold">Volume 01</span>
                  </div>
                  <p className="font-serif text-base sm:text-lg leading-snug">
                    Ancient earth. Thoughtfully made.
                  </p>
                </div>
              </div>

              {/* Artisan stamp marker without any logo image */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 p-3.5 bg-white border border-[#E2E8F0] rounded-xl shadow-lg items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D81A27] animate-pulse" />
                <div className="text-[11px] text-[#64748B]">
                  <span className="block font-bold text-[#0B172B]">Inaugural Batch</span>
                  <span>Pure Natural Formulations</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
