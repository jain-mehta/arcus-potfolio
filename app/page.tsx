'use client'

import { useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import ProductCard from '@/components/ProductCard'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'
import { products } from '@/lib/data'
import {
  pageVariants,
  heroVariants,
  heroTextVariants,
  gradientVariants,
  particleVariants,
  containerVariants,
  scrollVariants,
  fadeInDirection
} from '@/lib/animations'

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen"
      >
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
        >
          {/* Bold Geometric Background */}
          <div className="absolute inset-0 -z-10">
            {/* Sharp gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900" />

            {/* Bold accent lines */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>

            {/* Modern geometric shapes */}
            <div className="absolute top-20 right-20 w-64 h-64 border border-white/5 rotate-45" />
            <div className="absolute bottom-20 left-20 w-48 h-48 border border-white/5 rotate-12" />
          </div>

          {/* Bold floating elements */}
          <div className="absolute inset-0 -z-5 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${15 + i * 25}%`,
                  top: `${20 + i * 15}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 1.5,
                }}
              >
                <div className={`w-3 h-3 ${
                  i === 0 ? 'bg-white' :
                  i === 1 ? 'bg-zinc-400' :
                  i === 2 ? 'bg-zinc-600' : 'bg-zinc-800'
                } rounded-full`} />
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <motion.div
            className="container mx-auto px-6 text-center text-white relative z-10"
            variants={heroVariants}
            initial="initial"
            animate="animate"
            style={{ y, opacity }}
          >
            <motion.div variants={heroTextVariants} className="mb-8">
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tight"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.25, 0, 1] }}
              >
                <span className="block text-white">ENGINEERING</span>
                <motion.span
                  className="block text-white font-black"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.25, 0, 1] }}
                >
                  EXCELLENCE
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div
              variants={heroTextVariants}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.25, 0, 1] }}
            >
              <p className="text-lg md:text-xl font-medium text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed uppercase tracking-wide">
                Building scalable solutions that impact millions of users worldwide
              </p>
            </motion.div>

            <motion.button
              onClick={scrollToProducts}
              className="group relative px-10 py-5 bg-white text-black font-bold text-lg uppercase tracking-wider hover:bg-zinc-200 transition-all duration-300 border-2 border-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4, ease: [0.25, 0.25, 0, 1] }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                EXPLORE PORTFOLIO
                <motion.div
                  className="w-6 h-6 bg-black rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M6 1L6 11M6 1L2 5M6 1L10 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </span>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            onClick={scrollToProducts}
          >
            <motion.div
              className="flex flex-col items-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, 10, 0] }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <span className="text-sm mb-2 font-light">Scroll</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* Products Section */}
        <section
          ref={productsRef}
          className="relative min-h-screen py-20 overflow-hidden bg-zinc-50"
        >
          {/* Bold Grid Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}
            />

            {/* Bold geometric elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-black opacity-5 rotate-45" />
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-zinc-800 opacity-10 rotate-12" />
            <div className="absolute top-1/2 left-1/2 w-1 h-40 bg-zinc-300 -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <motion.div
              className="text-center mb-20"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={scrollVariants}
            >
              <motion.div
                className="inline-block mb-6"
                variants={fadeInDirection('up', 30)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <span className="px-6 py-3 bg-black text-white font-bold text-sm uppercase tracking-widest border-2 border-black">
                  Portfolio
                </span>
              </motion.div>

              <motion.h2
                className="text-6xl md:text-7xl lg:text-8xl font-black text-black mb-8 tracking-tight"
                variants={fadeInDirection('up', 50)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="block">FEATURED</span>
                <span className="block">WORK</span>
              </motion.h2>

              <motion.div
                className="w-20 h-1 bg-black mx-auto mb-8"
                variants={fadeInDirection('up', 30)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              />

              <motion.p
                className="text-lg text-zinc-600 max-w-2xl mx-auto font-medium tracking-wide"
                variants={fadeInDirection('up', 30)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Discover production-ready applications that demonstrate expertise in modern web technologies, scalable architecture, and user-centered design principles.
              </motion.p>
            </motion.div>

            {/* Products Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
            >
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </motion.div>

            {/* Key Metrics & Technologies */}
            <motion.div
              className="mt-24 mb-16"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={scrollVariants}
            >
              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {[
                  { number: "50K+", label: "Daily Users Served" },
                  { number: "200+", label: "Companies Using My Code" },
                  { number: "3M+", label: "Content Pieces Generated" },
                  { number: "1TB+", label: "Daily Traffic Handled" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="text-3xl md:text-4xl font-black text-black mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm font-medium text-zinc-600 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-black text-black mb-8 uppercase tracking-wider">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                  {[
                    "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS",
                    "MongoDB", "PostgreSQL", "Docker", "Kubernetes", "Redis", "GraphQL"
                  ].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-black text-white font-bold text-sm uppercase tracking-wider border-2 border-black hover:bg-zinc-800 transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              className="text-center mt-20"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={scrollVariants}
            >
              <motion.button
                onClick={scrollToContact}
                className="px-10 py-5 bg-black text-white font-bold uppercase tracking-wider border-2 border-black hover:bg-zinc-800 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-3">
                  START A PROJECT
                  <motion.div
                    className="w-6 h-6 bg-white text-black flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 6H10M10 6L6 2M10 6L6 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <div ref={contactRef}>
          <ContactForm />
        </div>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 z-50 group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ delay: 2 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:-translate-y-0.5 transition-transform duration-300"
          >
            <path
              d="M10 15V5M10 5L6 9M10 5L14 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  )
}