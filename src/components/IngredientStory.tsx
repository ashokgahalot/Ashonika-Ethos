import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { INGREDIENTS_STORY } from '../data/ethos';
import { Mountain, Flower2, Sun, Leaf, TreePine } from 'lucide-react';
import { getSectionHeaderVariants, getStaggerContainerVariants, getStaggerItemVariants } from '../utils/motion';

export const IngredientStory: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(INGREDIENTS_STORY[0].id);
  const shouldReduceMotion = useReducedMotion();

  const headerVariants = getSectionHeaderVariants(shouldReduceMotion);
  const containerVariants = getStaggerContainerVariants(shouldReduceMotion, 0.1, 0.05);
  const itemVariants = getStaggerItemVariants(shouldReduceMotion);

  const activeIngredient = INGREDIENTS_STORY.find((i) => i.id === activeId) || INGREDIENTS_STORY[0];

  const ingredientIcons: Record<string, React.ReactNode> = {
    'multani-mitti': <Mountain className="w-5 h-5 text-[#EF2626]" />,
    rose: <Flower2 className="w-5 h-5 text-[#EF2626]" />,
    haldi: <Sun className="w-5 h-5 text-[#EF2626]" />,
    neem: <Leaf className="w-5 h-5 text-[#169A38]" />,
    sandalwood: <TreePine className="w-5 h-5 text-[#169A38]" />,
  };

  return (
    <section id="ingredients" className="py-20 sm:py-28 bg-white overflow-hidden">
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
            <span>Botanical Heritage</span>
            <span className="w-6 h-px bg-[#BBF7D0]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#111F15] font-normal tracking-tight mb-4">
            Ingredients with a story.
          </h2>

          <p className="text-sm sm:text-base text-[#47554A] font-light leading-relaxed max-w-xl mx-auto">
            Honest botanicals celebrated in traditional Indian wellness. We choose each element for its sensory character, ancestral heritage, and natural affinity with the earth.
          </p>
        </motion.div>

        {/* Animated Botanical Explorer Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Ingredient Selector Tabs with stagger item animation */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {INGREDIENTS_STORY.map((item) => (
              <motion.button
                key={item.id}
                variants={itemVariants}
                onClick={() => setActiveId(item.id)}
                className={`p-4 rounded-xl text-left transition-all border shrink-0 lg:shrink flex items-center justify-between gap-4 ${
                  activeId === item.id
                    ? 'bg-[#F0FDF4] border-[#BBF7D0] shadow-2xs'
                    : 'bg-white border-[#E5E7EB] hover:bg-[#FBFDFB] text-[#47554A]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white border border-[#E5E7EB]">
                    {ingredientIcons[item.id]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#111F15] flex items-center gap-2">
                      <span>{item.name}</span>
                      {item.hindiName && (
                        <span className="text-xs text-[#6B7280] font-serif font-normal">
                          ({item.hindiName})
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[#6B7280] font-sans font-medium">
                      {item.role}
                    </div>
                  </div>
                </div>

                <span className="hidden lg:block text-xs font-mono font-bold text-[#169A38]">
                  →
                </span>
              </motion.button>
            ))}
          </div>

          {/* Active Ingredient Spotlight Detail Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8 p-8 sm:p-10 bg-[#FBFDFB] border border-[#E5E7EB] rounded-2xl relative shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#E5E7EB] pb-6 mb-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#169A38] font-bold block mb-1">
                  {activeIngredient.role}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif text-[#111F15] tracking-tight">
                  {activeIngredient.name}{' '}
                  {activeIngredient.hindiName && (
                    <span className="font-light text-[#6B7280] text-2xl">
                      · {activeIngredient.hindiName}
                    </span>
                  )}
                </h3>
              </div>

              <div className="text-xs italic text-[#6B7280] font-serif">
                {activeIngredient.botanicalName}
              </div>
            </div>

            <p className="text-base text-[#47554A] font-light leading-relaxed mb-8">
              {activeIngredient.story}
            </p>

            {/* Heritage Characteristic Tags */}
            <div className="pt-6 border-t border-[#E5E7EB]">
              <div className="text-xs uppercase tracking-wider text-[#111F15] font-bold mb-3">
                Traditional Sensory Characteristics:
              </div>
              <div className="flex flex-wrap gap-2">
                {activeIngredient.notes.map((note, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-[#BBF7D0] text-xs text-[#111F15] font-semibold"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Neutral Transparency Note */}
            <div className="mt-8 pt-4 border-t border-[#E5E7EB] text-[11px] text-[#9CA3AF]">
              Sourced with care from Indian agriculture and ethical mineral quarry partners. No synthetic fragrances or artificial dyes.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
