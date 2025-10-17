export interface Product {
  id: string
  title: string
  tagline: string
  image: string
  liveUrl: string
  technologies: string[]
  category: string
}

export const products: Product[] = [
  {
    id: '1',
    title: 'FinTech Analytics Hub',
    tagline: 'Real-time financial data visualization platform serving 50K+ daily users',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
    liveUrl: 'https://github.com/yourusername/fintech-analytics',
    technologies: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'Redis'],
    category: 'FinTech'
  },
  {
    id: '2',
    title: 'DevFlow Project Manager',
    tagline: 'AI-powered sprint planning that reduced team delivery time by 40%',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center',
    liveUrl: 'https://github.com/yourusername/devflow-manager',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'OpenAI', 'Vercel'],
    category: 'SaaS'
  },
  {
    id: '3',
    title: 'ContentCraft AI Studio',
    tagline: 'Multi-platform content generator achieving 3M+ monthly content pieces',
    image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=600&fit=crop&crop=center',
    liveUrl: 'https://github.com/yourusername/contentcraft-ai',
    technologies: ['Vue.js', 'FastAPI', 'MongoDB', 'OpenAI', 'Docker'],
    category: 'AI Tool'
  },
  {
    id: '4',
    title: 'CryptoVault Pro',
    tagline: 'Secure portfolio management with automated trading strategies',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center',
    liveUrl: 'https://github.com/yourusername/cryptovault-pro',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Binance API', 'AWS'],
    category: 'Mobile'
  },
  {
    id: '5',
    title: 'Quantum UI Framework',
    tagline: 'High-performance component library adopted by 200+ companies',
    image: 'https://images.unsplash.com/photo-1558655146-364adce68608?w=800&h=600&fit=crop&crop=center',
    liveUrl: 'https://github.com/yourusername/quantum-ui',
    technologies: ['React', 'TypeScript', 'Rollup', 'Storybook', 'Chromatic'],
    category: 'Library'
  },
  {
    id: '6',
    title: 'StreamVerse Platform',
    tagline: 'Enterprise video streaming infrastructure handling 1TB+ daily traffic',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop&crop=center',
    liveUrl: 'https://github.com/yourusername/streamverse',
    technologies: ['Next.js', 'AWS', 'FFmpeg', 'Redis', 'Kubernetes'],
    category: 'Platform'
  }
]

export interface SocialLink {
  name: string
  url: string
  iconPath: string
  viewBox?: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    iconPath: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z',
    viewBox: '0 0 24 24'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    iconPath: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    viewBox: '0 0 24 24'
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    iconPath: 'M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z',
    viewBox: '0 0 20 20'
  },
  {
    name: 'Resume',
    url: '/resume.pdf',
    iconPath: 'M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L16 11.586V5a4 4 0 00-4-4H8a4 4 0 00-4 4v10a4 4 0 004 4h4a1 1 0 100-2H8a2 2 0 01-2-2V5z',
    viewBox: '0 0 20 20'
  }
]