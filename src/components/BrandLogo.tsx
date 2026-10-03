import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
}) => {
  if (size === 'sm') {
    return (
      <div className={`flex flex-col items-start select-none ${className}`}>
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className="text-xl sm:text-2xl font-serif font-semibold tracking-tight text-[#C81E1E]">
            Ashonika
          </span>
          <span className="text-[10px] font-sans tracking-[0.3em] text-[#122348] font-bold uppercase">
            Ethos
          </span>
        </div>
      </div>
    );
  }

  if (size === 'hero') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <div className="flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-[#64748B] mb-2 font-sans font-medium">
          <span className="w-8 h-px bg-[#E2E6EE]" />
          <span>Conscious Skincare & Living</span>
          <span className="w-8 h-px bg-[#E2E6EE]" />
        </div>

        {/* Flourished Brand Mark Display matching the uploaded logo */}
        <div className="relative font-serif py-1">
          <div className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#C81E1E] drop-shadow-2xs">
            Ashonika
          </div>
          <div className="text-xs sm:text-base md:text-lg tracking-[0.45em] uppercase text-[#122348] font-sans font-bold mt-1 sm:mt-2">
            E T H O S
          </div>
        </div>

        {showSubtitle && (
          <p className="mt-3 text-xs sm:text-sm italic tracking-widest text-[#64748B] font-serif">
            Conscious choices, beautifully made.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col select-none ${className}`}>
      <div className="flex items-baseline gap-2 leading-tight">
        <span className="text-2xl sm:text-3xl tracking-tight font-serif font-semibold text-[#C81E1E]">
          Ashonika
        </span>
        <span className="text-xs font-sans tracking-[0.35em] text-[#122348] font-bold uppercase">
          Ethos
        </span>
      </div>
    </div>
  );
};
