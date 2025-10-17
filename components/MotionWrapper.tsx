'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionWrapperProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
}

const directions = {
  up: { y: 20 },
  down: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
}

export const MotionWrapper = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 20,
  className = '',
  ...motionProps
}: MotionWrapperProps) => {
  const directionOffset = directions[direction]
  const customDistance = direction === 'up' || direction === 'down'
    ? { y: direction === 'up' ? distance : -distance }
    : { x: direction === 'left' ? distance : -distance }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...customDistance
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0, 1],
      }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}

// Preset variants for common use cases
export const FadeIn = ({ children, delay = 0, className = '' }: { children: ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

export const SlideUp = ({ children, delay = 0, className = '' }: { children: ReactNode, delay?: number, className?: string }) => (
  <MotionWrapper direction="up" delay={delay} className={className}>
    {children}
  </MotionWrapper>
)

export const ScaleIn = ({ children, delay = 0, className = '' }: { children: ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
)