import React from 'react';
import logoImg from '../assets/images/logo.png';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero' | 'header';
  showTagline?: boolean;
  showBrackets?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'header',
}) => {
  // Height sizing to fit different header / hero / footer placements
  const sizeClasses = {
    sm: 'h-10 sm:h-12 w-auto object-contain',
    header: 'h-16 sm:h-20 md:h-24 w-auto object-contain max-w-[280px] sm:max-w-xs',
    md: 'h-16 sm:h-20 w-auto object-contain',
    lg: 'h-24 sm:h-28 w-auto object-contain',
    hero: 'h-28 sm:h-36 md:h-44 w-auto object-contain max-w-full',
  };

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={logoImg}
        alt="Ashonika Ethos - Conscious Choices, Beautifully Made"
        className={`${sizeClasses[size]} transition-transform duration-300`}
        loading="eager"
      />
    </div>
  );
};
