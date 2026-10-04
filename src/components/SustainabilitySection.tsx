import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Package, Recycle, RefreshCw, Feather, Check } from 'lucide-react';
import { getSectionHeaderVariants, getStaggerContainerVariants, getStaggerItemVariants } from '../utils/motion';

export const SustainabilitySection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const headerVariants = getSectionHeaderVariants(shouldReduceMotion);
  const containerVariants = getStaggerContainerVariants(shouldReduceMotion, 0.12, 0.05);
  const itemVariants = getStaggerItemVariants(shouldReduceMotion);

  const pillars = [
    {
      title: 'Minimal Packaging',
      description:
        'Eliminating secondary plastic wraps and gratuitous boxes. We aim to keep packaging as minimal and essential as possible.',
      icon: <Package className="w-5 h-5 text-[#EF2626]" />,
    },
    {
      title: 'Paper-Based Materials',
      description:
        'Prioritizing high-yield unbleached kraft and recyclable paper components where practical and protective for fine powders.',
      icon: <Recycle className="w-5 h-5 text-[#169A38]" />,
    },
    {
      title: 'Reduced Excess',
      description:
        'Refusing ornamental plastic spatulas, excessive flyers, and disposable inserts. Every design decision serves an intentional utility.',
      icon: <Feather className="w-5 h-5 text-[#EF2626]" />,
    },
    {
      title: 'Reusable Vessels',
      description:
        'Developing durable amber glass jars and ceramic containers meant to be refilled, repurposed, or kept on your vanity.',
      icon: <RefreshCw className="w-5 h-5 text-[#169A38]" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FBFDFB] border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={headerVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#169A38] mb-3">
            <span className="w-6 h-px bg-[#BBF7D0]" />
            <span>Responsible Development</span>
            <span className="w-6 h-px bg-[#BBF7D0]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111F15] font-normal tracking-tight mb-4">
            Better choices, thoughtfully considered.
          </h2>

          <p className="text-sm sm:text-base text-[#47554A] font-light leading-relaxed">
            Conscious living is not about perfection or trendy buzzwords; it is about continuous, responsible choices. As we prepare our launch, we are interrogating every material choice with intention.
          </p>
        </motion.div>

        {/* Animated 4 Pillars Grid with Staggered Entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-7 bg-white border border-[#E5E7EB] rounded-2xl flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="p-3 bg-[#F0FDF4] rounded-xl w-fit mb-5 border border-[#BBF7D0]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-serif text-[#111F15] font-bold tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#47554A] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center gap-2 text-[11px] text-[#6B7280]">
                <Check className="w-3.5 h-3.5 text-[#169A38]" />
                <span>In Prototype Evaluation</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Responsible Stewardship Note */}
        <div className="mt-12 text-center max-w-xl mx-auto text-xs text-[#47554A] bg-white p-4 rounded-xl border border-[#E5E7EB]">
          We believe in honest transparency: we are testing practical, recyclable, and reusable materials without making unverified sweeping claims.
        </div>
      </div>
    </section>
  );
};
