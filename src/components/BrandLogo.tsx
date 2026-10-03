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
      <div className={`inline-flex items-baseline select-none ${className}`}>
        <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#D81A27]">
          Ashonika
        </span>
        <span className="text-[10px] font-sans tracking-[0.32em] text-[#0C2D79] font-bold uppercase ml-2">
          Ethos
        </span>
      </div>
    );
  }

  if (size === 'hero') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <div className="flex items-baseline">
          <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#D81A27]">
            Ashonika
          </span>
          <span className="text-sm sm:text-base font-sans tracking-[0.35em] text-[#0C2D79] font-bold uppercase ml-3">
            Ethos
          </span>
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
    <div className={`inline-flex items-baseline select-none ${className}`}>
      <span className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#D81A27]">
        Ashonika
      </span>
      <span className="text-xs font-sans tracking-[0.35em] text-[#0C2D79] font-bold uppercase ml-2.5">
        Ethos
      </span>
    </div>
  );
};
