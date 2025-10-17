'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Product } from '../lib/data'
import { cardVariants, cardImageVariants, cardOverlayVariants, buttonVariants } from '../lib/animations'

interface ProductCardProps {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  // Mouse tracking for tilt effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring animations for smooth tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 100,
    damping: 30
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 100,
    damping: 30
  })

  // Handle mouse move for tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXPos = e.clientX - rect.left
    const mouseYPos = e.clientY - rect.top

    const xPct = mouseXPos / width - 0.5
    const yPct = mouseYPos / height - 0.5

    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const handleViewLive = () => {
    window.open(product.liveUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="group relative bg-white border-2 border-black overflow-hidden cursor-pointer shadow-[8px_8px_0px_0px_#000]"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
          variants={cardImageVariants}
          initial="initial"
          whileHover="hover"
        />

        {/* Bold overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-black/80"
          variants={cardOverlayVariants}
          initial="initial"
          whileHover="hover"
        />

        {/* Category Badge */}
        <motion.div
          className="absolute top-4 left-4 px-4 py-2 bg-black text-white font-bold text-xs uppercase tracking-wider border-2 border-black"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {product.category}
        </motion.div>

        {/* Hover Overlay with CTA */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.button
            onClick={handleViewLive}
            className="px-8 py-4 bg-white text-black font-black uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 border-2 border-white hover:bg-zinc-100"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="flex items-center gap-3">
              VIEW LIVE
              <div className="w-5 h-5 bg-black text-white flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6L9 6M9 6L6 3M9 6L6 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </span>
          </motion.button>
        </motion.div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"
          style={{ transform: "skewX(-20deg)" }}
        />
      </div>

      {/* Content */}
      <div className="p-8" style={{ transform: "translateZ(50px)" }}>
        <motion.h3
          className="text-2xl font-black text-black mb-3 uppercase tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          {product.title}
        </motion.h3>

        <motion.p
          className="text-zinc-600 text-sm mb-6 font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {product.tagline}
        </motion.p>

        {/* Technologies */}
        <motion.div
          className="flex flex-wrap gap-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.6 }}
        >
          {product.technologies.slice(0, 3).map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider border-2 border-black"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.7 + techIndex * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
          {product.technologies.length > 3 && (
            <motion.span
              className="px-3 py-1 bg-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider border-2 border-zinc-200"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 1 }}
            >
              +{product.technologies.length - 3}
            </motion.span>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.button
          onClick={handleViewLive}
          className="w-full py-4 bg-black text-white font-bold text-sm uppercase tracking-wider border-2 border-black hover:bg-zinc-800 transition-all duration-300 group/btn"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="flex items-center justify-center gap-3">
            EXPLORE PROJECT
            <motion.div
              className="w-4 h-4 bg-white text-black flex items-center justify-center group-hover/btn:translate-x-1 transition-transform duration-300"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5H8M8 5L5 2M8 5L5 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </span>
        </motion.button>
      </div>

      {/* Bold hover effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: "12px 12px 0px 0px #000"
        }}
        whileHover={{
          x: -4,
          y: -4
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}