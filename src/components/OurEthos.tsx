import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ETHOS_PRINCIPLES } from '../data/ethos';
import { Compass, Sparkles, Feather, HeartHandshake } from 'lucide-react';
import { getSectionHeaderVariants, getStaggerContainerVariants, getStaggerItemVariants } from '../utils/motion';

export const OurEthos: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const headerVariants = getSectionHeaderVariants(shouldReduceMotion);
  const containerVariants = getStaggerContainerVariants(shouldReduceMotion, 0.12, 0.05);
  const itemVariants = getStaggerItemVariants(shouldReduceMotion);

  const icons = [
    <HeartHandshake key="heart" className="w-5 h-5 text-[#EF2626]" />,
    <Compass key="compass" className="w-5 h-5 text-[#169A38]" />,
    <Feather key="feather" className="w-5 h-5 text-[#EF2626]" />,
    <Sparkles key="sparkles" className="w-5 h-5 text-[#169A38]" />,
  ];

  return (
    <section id="ethos" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={headerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#169A38] mb-3">
            <span className="w-6 h-px bg-[#BBF7D0]" />
            <span>Guiding Philosophy</span>
            <span className="w-6 h-px bg-[#BBF7D0]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111F15] font-normal tracking-tight mb-4">
            Our Ethos
          </h2>

          <p className="text-sm sm:text-base text-[#47554A] font-light leading-relaxed max-w-xl mx-auto">
            Ashonika Ethos was born from a desire to harmonize daily personal care with intentional, ancestral wisdom and respect for the earth.
          </p>
        </motion.div>

        {/* Animated Staggered 4 Principles Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {ETHOS_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.number}
              variants={itemVariants}
              className="relative p-8 bg-white border border-[#E5E7EB] rounded-2xl flex flex-col justify-between hover:border-[#169A38]/50 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Header with Number and Line Art Icon */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E7EB]">
                  <span className="font-serif text-2xl text-[#169A38] font-bold">
                    {principle.number}
                  </span>
                  <div className="p-2.5 rounded-full bg-[#F0FDF4] border border-[#BBF7D0]">
                    {icons[index % icons.length]}
                  </div>
                </div>

                {/* Principle Title */}
                <h3 className="text-2xl font-serif text-[#111F15] tracking-tight mb-3">
                  {principle.title}
                </h3>

                {/* Direct Quote from User Brief */}
                <blockquote className="text-sm italic font-serif text-[#111F15]/90 leading-relaxed mb-4 border-l-2 border-[#EF2626] pl-3">
                  “{principle.quote}”
                </blockquote>

                {/* Nuanced description */}
                <p className="text-xs sm:text-sm text-[#47554A] leading-relaxed">
                  {principle.description}
                </p>
              </div>

              {/* Subdued anchor label */}
              <div className="mt-8 pt-4 border-t border-[#E5E7EB] text-[11px] uppercase tracking-wider text-[#9CA3AF]">
                Principle {principle.number} of 04
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
