'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { socialLinks } from '@/lib/data'
import { fadeInDirection, staggerContainer } from '@/lib/animations'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-black text-white overflow-hidden border-t-4 border-white">
      {/* Bold geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bold grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.2) 2px, transparent 2px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.2) 2px, transparent 2px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Bold accent shapes */}
        <div className="absolute top-10 right-10 w-20 h-20 border-4 border-white/10 rotate-45" />
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/5" />
        <div className="absolute top-1/2 left-1/4 w-2 h-32 bg-white/10 rotate-12" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          className="text-center"
          variants={staggerContainer(0.3, 0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Logo/Brand */}
          <motion.div
            className="mb-12"
            variants={fadeInDirection('up', 30)}
          >
            <motion.h3
              className="text-4xl md:text-5xl font-black text-white uppercase tracking-wider"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              PORTFOLIO
            </motion.h3>
            <motion.div
              className="w-16 h-1 bg-white mx-auto mt-4 mb-4"
              variants={fadeInDirection('up', 20)}
            />
            <motion.p
              className="text-zinc-400 mt-2 max-w-lg mx-auto font-medium tracking-wide text-sm"
              variants={fadeInDirection('up', 20)}
            >
              Full-stack engineer passionate about creating scalable solutions that drive business growth and enhance user experiences across diverse industries.
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            variants={fadeInDirection('up', 40)}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white text-black border-2 border-white hover:bg-zinc-100 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.1,
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                aria-label={link.name}
              >
                <div className="text-black transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox={link.viewBox || "0 0 24 24"}>
                    <path d={link.iconPath} />
                  </svg>
                </div>

                {/* Bold tooltip */}
                <motion.div
                  className="absolute -top-14 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white text-black text-sm font-bold uppercase tracking-wider border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  {link.name}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-12 text-sm"
            variants={fadeInDirection('up', 30)}
          >
            {[
              { name: 'Portfolio', href: '#products' },
              { name: 'Contact', href: '#contact' },
              { name: 'Technologies', href: '#technologies' },
              { name: 'About', href: '#about' },
            ].map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => {
                  if (link.href.startsWith('#')) {
                    scrollToSection(link.href)
                  } else {
                    window.open(link.href, '_blank')
                  }
                }}
                className="text-zinc-400 hover:text-white transition-colors duration-300 relative group font-bold uppercase tracking-wider text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </motion.div>

          {/* Bold Divider */}
          <motion.div
            className="w-full h-1 bg-white mb-8"
            variants={fadeInDirection('up', 20)}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Copyright and Back to Top */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            variants={fadeInDirection('up', 30)}
          >
            <motion.p
              className="text-zinc-500 text-sm font-medium tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              © {currentYear} Engineering Portfolio • Built with Next.js, TypeScript & Framer Motion • Available for new opportunities
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              className="group flex items-center space-x-3 text-zinc-400 hover:text-white text-sm transition-colors duration-300 font-bold uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              whileHover={{ y: -2 }}
            >
              <span>BACK TO TOP</span>
              <motion.div
                className="w-6 h-6 bg-white text-black flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
    </footer>
  )
}