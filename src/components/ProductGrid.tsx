import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Product } from '../types/product';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/products';
import { getSectionHeaderVariants, getStaggerContainerVariants } from '../utils/motion';

interface ProductGridProps {
  onNotifyProduct: (product: Product) => void;
  onOpenGeneralNotify: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  onNotifyProduct,
  onOpenGeneralNotify,
}) => {
  const [filter, setFilter] = useState<'all' | 'pure' | 'blends'>('all');
  const shouldReduceMotion = useReducedMotion();

  const headerVariants = getSectionHeaderVariants(shouldReduceMotion);
  const containerVariants = getStaggerContainerVariants(shouldReduceMotion, 0.12, 0.05);

  const filteredProducts = PRODUCTS.filter((item) => {
    if (filter === 'pure') return item.id === 'pure-multani-mitti';
    if (filter === 'blends') return item.id !== 'pure-multani-mitti';
    return true;
  });

  return (
    <section id="collection" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={headerVariants}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#D81A27] mb-3">
            <span className="w-6 h-px bg-[#FECACA]" />
            <span>The First Collection</span>
            <span className="w-6 h-px bg-[#FECACA]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0B172B] font-normal tracking-tight mb-4">
            Pure earth, thoughtfully blended with nature's most timeless ingredients.
          </h2>

          <p className="text-sm sm:text-base text-[#4B5563] font-light leading-relaxed max-w-2xl mx-auto">
            Discover our debut array of five intentional formulations. Each formulation is rooted in indigenous Indian earth clay, crafted without artificial fragrances, parabens, or unnecessary synthetic binders.
          </p>

          {/* Interactive filter controls */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex max-w-full overflow-x-auto items-center gap-1.5 p-1 bg-[#F8FAFC] rounded-full border border-[#E2E8F0] scrollbar-none shadow-2xs">
              <button
                onClick={() => setFilter('all')}
                className={`min-h-[38px] px-4 py-1.5 text-xs font-bold rounded-full transition-all whitespace-nowrap ${
                  filter === 'all'
                    ? 'bg-[#D81A27] text-white shadow-2xs'
                    : 'text-[#4B5563] hover:text-[#0B172B]'
                }`}
              >
                All Formulations ({PRODUCTS.length})
              </button>
              <button
                onClick={() => setFilter('pure')}
                className={`min-h-[38px] px-4 py-1.5 text-xs font-bold rounded-full transition-all whitespace-nowrap ${
                  filter === 'pure'
                    ? 'bg-[#D81A27] text-white shadow-2xs'
                    : 'text-[#4B5563] hover:text-[#0B172B]'
                }`}
              >
                Pure Foundation
              </button>
              <button
                onClick={() => setFilter('blends')}
                className={`min-h-[38px] px-4 py-1.5 text-xs font-bold rounded-full transition-all whitespace-nowrap ${
                  filter === 'blends'
                    ? 'bg-[#D81A27] text-white shadow-2xs'
                    : 'text-[#4B5563] hover:text-[#0B172B]'
                }`}
              >
                Botanical Blends
              </button>
            </div>
          </div>
        </motion.div>

        {/* Animated Staggered Product Cards Grid */}
        <motion.div
          key={filter}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onNotifyClick={onNotifyProduct}
            />
          ))}
        </motion.div>

        {/* Bottom invitation card with subtle entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={headerVariants}
          className="mt-16 p-8 sm:p-10 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-2xs"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#D81A27] font-bold block mb-1">
              Curated Production
            </span>
            <h4 className="text-xl sm:text-2xl font-serif text-[#0B172B] tracking-tight">
              Looking for a custom ritual blend or pre-launch gifting?
            </h4>
            <p className="text-xs sm:text-sm text-[#4B5563] mt-1 max-w-xl">
              We welcome thoughtful conversations with individuals, boutique stockists, and conscious living enthusiasts.
            </p>
          </div>

          <button
            onClick={onOpenGeneralNotify}
            className="min-h-[46px] px-6 py-2.5 bg-[#0C2D79] text-white text-xs uppercase font-bold tracking-wider rounded-full hover:bg-[#081F54] transition-all whitespace-nowrap shrink-0 shadow-xs"
          >
            Direct Inquiries
          </button>
        </motion.div>
      </div>
    </section>
  );
};
