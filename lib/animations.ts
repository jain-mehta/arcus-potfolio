import { Variants } from 'framer-motion'

// Page transition variants
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.25, 0, 1] }
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.4, ease: [0.25, 0.25, 0, 1] }
  }
}

// Hero section animations
export const heroVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

export const heroTextVariants: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1]
    }
  }
}

// Product card animations
export const cardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 60,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1]
    }
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0, 1]
    }
  }
}

export const cardImageVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.25, 0, 1]
    }
  }
}

export const cardOverlayVariants: Variants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.3 }
  }
}

// Container stagger animations
export const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

// Form animations
export const formVariants: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const inputVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 }
  },
  focus: {
    scale: 1.02,
    transition: { duration: 0.2 }
  }
}

// Button animations
export const buttonVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 }
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.25, 0, 1]
    }
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  }
}

// Scroll-based animations
export const scrollVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8
    }
  }
}

// Background particle animation
export const particleVariants: Variants = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Gradient background animation
export const gradientVariants: Variants = {
  animate: {
    background: [
      "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)",
      "linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(45deg, #667eea 0%, #764ba2 100%)"
    ],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Stagger children utility
export const staggerContainer = (delayChildren = 0.3, staggerChildren = 0.15): Variants => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren,
      staggerChildren
    }
  }
})

// Fade in from direction utility
export const fadeInDirection = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  distance = 60
): Variants => {
  const offset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  }

  return {
    initial: { opacity: 0, ...offset[direction] },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  }
}