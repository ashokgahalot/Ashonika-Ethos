import React, { useState } from 'react';
import { Bell, Info } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Product } from '../types/product';
import { getStaggerItemVariants } from '../utils/motion';

interface ProductCardProps {
  product: Product;
  onNotifyClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onNotifyClick }) => {
  const [showDetails, setShowDetails] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const itemVariants = getStaggerItemVariants(shouldReduceMotion);

  return (
    <motion.div
      variants={itemVariants}
      className="group relative flex flex-col bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-2xs hover:shadow-lg hover:border-[#169A38]/50 transition-shadow duration-300"
    >
      {/* Top Image Showcase */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#FBFDFB]">
        <img
          src={product.image}
          alt={`Packaging prototype for ${product.name}`}
          className="w-full h-full object-cover img-zoom"
          referrerPolicy="no-referrer"
        />

        {/* Subtle Dark Gradient Overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111F15]/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

        {/* Top Status Tag */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-sans font-bold tracking-wider uppercase text-[#EF2626] border border-[#FECACA] shadow-2xs">
            {product.status}
          </span>
        </div>

        {/* Conceptual Prototype Label */}
        <div className="absolute top-3.5 right-3.5">
          <span className="px-2.5 py-1 rounded-md bg-[#111F15]/80 backdrop-blur-xs text-[10px] font-sans tracking-widest uppercase text-white/90">
            Prototype
          </span>
        </div>

        {/* Quick Details Toggle */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          aria-label={`Toggle details for ${product.name}`}
          className="absolute bottom-3 right-3 p-2 rounded-full bg-white/95 backdrop-blur-xs text-[#111F15] hover:bg-white hover:text-[#169A38] transition-colors border border-[#E5E7EB] shadow-xs"
        >
          <Info className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Card Content Area */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          {/* Subtitle / Kicker */}
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#169A38] font-bold mb-1.5">
            {product.subtitle}
          </div>

          {/* Product Name */}
          <h3 className="text-xl sm:text-2xl font-serif text-[#111F15] tracking-tight mb-2.5 leading-snug">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-[#47554A] leading-relaxed mb-4 line-clamp-3">
            {product.description}
          </p>

          {/* Expandable Ritual & Packaging Details */}
          {showDetails && (
            <div className="mt-2 mb-4 p-3.5 bg-[#F0FDF4] rounded-xl text-xs space-y-2 border border-[#BBF7D0] animate-in fade-in duration-200">
              <div>
                <span className="font-semibold text-[#111F15] block">Ingredients:</span>
                <span className="text-[#47554A]">{product.ingredients.join(', ')}</span>
              </div>
              {product.packagingNote && (
                <div>
                  <span className="font-semibold text-[#111F15] block">Packaging Design:</span>
                  <span className="text-[#47554A]">{product.packagingNote}</span>
                </div>
              )}
              {product.weight && (
                <div>
                  <span className="font-semibold text-[#111F15] block">Net Quantity:</span>
                  <span className="text-[#47554A]">{product.weight}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Action Area */}
        <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between gap-3">
          <div className="text-xs text-[#6B7280] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF2626]" />
            <span className="italic font-serif">Inaugural batch</span>
          </div>

          {/* If the product status is Launching Soon, show Notify Me */}
          {product.status === 'Launching Soon' ? (
            <button
              onClick={() => onNotifyClick(product)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#169A38] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#11772B] active:scale-[0.98] transition-all shadow-2xs"
            >
              <Bell className="w-3.5 h-3.5 text-white" />
              <span>Notify Me</span>
            </button>
          ) : (
            <button
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#EF2626] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#D61B1B] transition-all shadow-2xs"
            >
              <span>Add to Bag</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
