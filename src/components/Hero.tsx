import React from 'react';
import { ArrowDown, Sparkles, Feather } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { BrandLogo } from './BrandLogo';
import heroImage from '../assets/images/hero_girl_multani_clay_1791122200427.jpg';
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
      {/* Subtle organic ambient gradients matching brand colors */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#169A38]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#EF2626]/5 rounded-full blur-3xl pointer-events-none" />

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
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#169A38] mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#169A38] animate-pulse" />
              <span>First Collection — Launching Soon</span>
            </motion.div>

            {/* Official Logo Image */}
            <motion.div variants={itemVariants} className="mb-6 self-start max-w-xs sm:max-w-sm">
              <BrandLogo size="lg" />
            </motion.div>

            {/* Editorial Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#111F15] font-normal tracking-tight leading-[1.15] mb-4 sm:mb-5 max-w-xl editorial-text"
            >
              Conscious living, rooted in Indian earth & botanicals.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-lg text-[#47554A] font-light leading-relaxed max-w-lg mb-6 sm:mb-8"
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
                className="min-h-[46px] inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-[#169A38] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-full hover:bg-[#11772B] active:scale-[0.98] transition-all shadow-md group"
              >
                <span>Explore the Collection</span>
                <ArrowDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-0.5" />
              </a>

              <button
                onClick={onOpenNotify}
                className="min-h-[46px] inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 bg-white text-[#EF2626] text-xs sm:text-sm font-bold tracking-wider uppercase rounded-full border border-[#FECACA] hover:bg-[#FEF2F2] hover:border-[#EF2626] active:scale-[0.98] transition-all"
              >
                <Sparkles className="w-4 h-4 mr-2 text-[#EF2626]" />
                <span>Notify Me</span>
              </button>
            </motion.div>

            {/* Subtle natural ingredient references bar */}
            <motion.div
              variants={itemVariants}
              className="pt-5 sm:pt-6 border-t border-[#E5E7EB] flex flex-wrap items-center gap-y-2 gap-x-2.5 sm:gap-x-4 text-[11px] sm:text-xs text-[#6B7280]"
            >
              <span className="font-bold text-[#111F15] flex items-center gap-1.5">
                <Feather className="w-3.5 h-3.5 text-[#169A38]" />
                Featured Botanicals:
              </span>
              <span>Multani Mitti</span>
              <span aria-hidden="true" className="text-[#D1D5DB]">·</span>
              <span>Rose</span>
              <span aria-hidden="true" className="text-[#D1D5DB]">·</span>
              <span>Haldi</span>
              <span aria-hidden="true" className="text-[#D1D5DB]">·</span>
              <span>Neem</span>
              <span aria-hidden="true" className="text-[#D1D5DB]">·</span>
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
              <div className="relative aspect-16/9 lg:aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-[#E5E7EB] bg-[#FBFDFB] group">
                <img
                  src={heroImage}
                  alt="A beautiful woman gently applying natural golden Multani Mitti clay powder mask to her face and hair"
                  className="w-full h-full object-cover img-zoom"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F10]/50 via-transparent to-transparent opacity-50 pointer-events-none" />

                {/* Floating caption card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E5E7EB] text-[#111F15] shadow-sm">
                  <div className="flex items-center justify-between text-[11px] font-sans tracking-widest uppercase text-[#6B7280] mb-1 font-bold">
                    <span>Face & Hair Clay Ritual</span>
                    <span className="text-[#169A38] font-bold">Volume 01</span>
                  </div>
                  <p className="font-serif text-base sm:text-lg leading-snug">
                    Ancient Indian Earth. Reimagined for Face & Hair.
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
