import { Variants } from 'framer-motion';

/**
 * Editorial motion variants respecting prefers-reduced-motion
 */

export const getSectionHeaderVariants = (shouldReduceMotion: boolean | null): Variants => {
  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0, transition: { duration: 0 } },
    };
  }
  return {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1], // refined editorial ease-out
      },
    },
  };
};

export const getStaggerContainerVariants = (
  shouldReduceMotion: boolean | null,
  staggerDelay = 0.12,
  delayChildren = 0.08
): Variants => {
  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1, transition: { duration: 0 } },
    };
  }
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };
};

export const getStaggerItemVariants = (shouldReduceMotion: boolean | null): Variants => {
  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0, transition: { duration: 0 } },
    };
  }
  return {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.21, 1, 0.36, 1],
      },
    },
  };
};
