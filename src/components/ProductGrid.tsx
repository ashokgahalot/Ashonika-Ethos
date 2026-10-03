import React, { useState } from 'react';
import { Product } from '../types/product';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/products';

interface ProductGridProps {
  onNotifyProduct: (product: Product) => void;
  onOpenGeneralNotify: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  onNotifyProduct,
  onOpenGeneralNotify,
}) => {
  const [filter, setFilter] = useState<'all' | 'pure' | 'blends'>('all');

  const filteredProducts = PRODUCTS.filter((item) => {
    if (filter === 'pure') return item.id === 'pure-multani-mitti';
    if (filter === 'blends') return item.id !== 'pure-multani-mitti';
    return true;
  });

  return (
    <section id="collection" className="py-20 sm:py-28 bg-[#FCFDFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C81E1E] mb-3">
            <span className="w-6 h-px bg-[#FECACA]" />
            <span>The First Collection</span>
            <span className="w-6 h-px bg-[#FECACA]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0F1E36] font-normal tracking-tight mb-4">
            Pure earth, thoughtfully blended with nature's most timeless ingredients.
          </h2>

          <p className="text-sm sm:text-base text-[#475569] font-light leading-relaxed max-w-2xl mx-auto">
            Discover our debut array of five intentional formulations. Each formulation is rooted in indigenous Indian earth clay, crafted without artificial fragrances, parabens, or unnecessary synthetic binders.
          </p>

          {/* Interactive filter controls adhering to zero-pill discipline */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex max-w-full overflow-x-auto items-center gap-1.5 p-1 bg-[#F1F5F9] rounded-full border border-[#E2E8F0] scrollbar-none">
              <button
                onClick={() => setFilter('all')}
                className={`min-h-[38px] px-3.5 sm:px-4 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                  filter === 'all'
                    ? 'bg-white text-[#C81E1E] shadow-2xs'
                    : 'text-[#475569] hover:text-[#0F1E36]'
                }`}
              >
                All Formulations ({PRODUCTS.length})
              </button>
              <button
                onClick={() => setFilter('pure')}
                className={`min-h-[38px] px-3.5 sm:px-4 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                  filter === 'pure'
                    ? 'bg-white text-[#C81E1E] shadow-2xs'
                    : 'text-[#475569] hover:text-[#0F1E36]'
                }`}
              >
                Pure Foundation
              </button>
              <button
                onClick={() => setFilter('blends')}
                className={`min-h-[38px] px-3.5 sm:px-4 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                  filter === 'blends'
                    ? 'bg-white text-[#C81E1E] shadow-2xs'
                    : 'text-[#475569] hover:text-[#0F1E36]'
                }`}
              >
                Botanical Blends
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards Grid: 3 columns on large screens, 2 on tablets, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onNotifyClick={onNotifyProduct}
            />
          ))}
        </div>

        {/* Bottom invitation card */}
        <div className="mt-16 p-8 sm:p-10 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C81E1E] font-bold block mb-1">
              Curated Production
            </span>
            <h4 className="text-xl sm:text-2xl font-serif text-[#0F1E36] tracking-tight">
              Looking for a custom ritual blend or pre-launch gifting?
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 max-w-xl">
              We welcome thoughtful conversations with individuals, boutique stockists, and conscious living enthusiasts.
            </p>
          </div>
          <button
            onClick={onOpenGeneralNotify}
            className="shrink-0 px-6 py-3 bg-[#122348] text-white text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#0A1428] transition-colors"
          >
            Join the Launch Circle
          </button>
        </div>
      </div>
    </section>
  );
};
