import React from 'react';
import logoImg from '../assets/images/logo.png';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showTagline?: boolean;
  showBrackets?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Height sizing to fit different header / hero / footer placements
  const sizeClasses = {
    sm: 'h-9 sm:h-10 w-auto object-contain',
    md: 'h-14 sm:h-16 w-auto object-contain',
    lg: 'h-20 sm:h-24 w-auto object-contain',
    hero: 'h-24 sm:h-32 md:h-36 w-auto object-contain max-w-full',
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
