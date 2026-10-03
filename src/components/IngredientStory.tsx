import React, { useState } from 'react';
import { INGREDIENTS_STORY } from '../data/ethos';
import { Mountain, Flower2, Sun, Leaf, TreePine } from 'lucide-react';

export const IngredientStory: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(INGREDIENTS_STORY[0].id);

  const activeIngredient = INGREDIENTS_STORY.find((i) => i.id === activeId) || INGREDIENTS_STORY[0];

  const ingredientIcons: Record<string, React.ReactNode> = {
    'multani-mitti': <Mountain className="w-5 h-5 text-[#C81E1E]" />,
    rose: <Flower2 className="w-5 h-5 text-[#C81E1E]" />,
    haldi: <Sun className="w-5 h-5 text-[#C81E1E]" />,
    neem: <Leaf className="w-5 h-5 text-[#122348]" />,
    sandalwood: <TreePine className="w-5 h-5 text-[#122348]" />,
  };

  return (
    <section id="ingredients" className="py-20 sm:py-28 bg-[#FCFDFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C81E1E] mb-3">
            <span className="w-6 h-px bg-[#FECACA]" />
            <span>Botanical Heritage</span>
            <span className="w-6 h-px bg-[#FECACA]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0F1E36] font-normal tracking-tight mb-4">
            Ingredients with a story.
          </h2>

          <p className="text-sm sm:text-base text-[#475569] font-light leading-relaxed max-w-xl mx-auto">
            Honest botanicals celebrated in traditional Indian wellness. We choose each element for its sensory character, ancestral heritage, and natural affinity with the earth.
          </p>
        </div>

        {/* Interactive Botanical Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Ingredient Selector Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {INGREDIENTS_STORY.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`p-4 rounded-xl text-left transition-all border shrink-0 lg:shrink flex items-center justify-between gap-4 ${
                  activeId === item.id
                    ? 'bg-[#FEF2F2] border-[#FECACA] shadow-2xs'
                    : 'bg-white border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#475569]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white border border-[#E2E8F0]">
                    {ingredientIcons[item.id]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0F1E36] flex items-center gap-2">
                      <span>{item.name}</span>
                      {item.hindiName && (
                        <span className="text-xs text-[#64748B] font-serif font-normal">
                          ({item.hindiName})
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[#64748B] font-sans font-light">
                      {item.role}
                    </div>
                  </div>
                </div>

                <span className="hidden lg:block text-xs font-mono text-[#C81E1E]">
                  →
                </span>
              </button>
            ))}
          </div>

          {/* Active Ingredient Spotlight Detail Card */}
          <div className="lg:col-span-8 p-8 sm:p-10 bg-white border border-[#E2E8F0] rounded-2xl relative shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#E2E8F0] pb-6 mb-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C81E1E] font-bold block mb-1">
                  {activeIngredient.role}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif text-[#0F1E36] tracking-tight">
                  {activeIngredient.name}{' '}
                  {activeIngredient.hindiName && (
                    <span className="font-light text-[#64748B] text-2xl">
                      · {activeIngredient.hindiName}
                    </span>
                  )}
                </h3>
              </div>

              <div className="text-xs italic text-[#64748B] font-serif">
                {activeIngredient.botanicalName}
              </div>
            </div>

            <p className="text-base text-[#475569] font-light leading-relaxed mb-8">
              {activeIngredient.story}
            </p>

            {/* Heritage Characteristic Tags */}
            <div className="pt-6 border-t border-[#E2E8F0]">
              <div className="text-xs uppercase tracking-wider text-[#0F1E36] font-semibold mb-3">
                Traditional Sensory Characteristics:
              </div>
              <div className="flex flex-wrap gap-2">
                {activeIngredient.notes.map((note, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F1E36] font-medium"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Neutral Transparency Note */}
            <div className="mt-8 pt-4 border-t border-[#E2E8F0] text-[11px] text-[#94A3B8]">
              Sourced with care from Indian agriculture and ethical mineral quarry partners. No synthetic fragrances or artificial dyes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
