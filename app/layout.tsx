import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Product Portfolio | Digital Experiences Crafted with Passion',
  description: 'Discover a collection of thoughtfully crafted digital products, each designed to solve real problems with elegant solutions.',
  keywords: ['portfolio', 'products', 'web development', 'next.js', 'react', 'typescript', 'framer motion'],
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Product Portfolio | Digital Experiences Crafted with Passion',
    description: 'Discover a collection of thoughtfully crafted digital products, each designed to solve real problems with elegant solutions.',
    type: 'website',
    url: 'https://yourwebsite.com',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Product Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Portfolio | Digital Experiences Crafted with Passion',
    description: 'Discover a collection of thoughtfully crafted digital products, each designed to solve real problems with elegant solutions.',
    images: ['https://yourwebsite.com/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-black text-white overflow-x-hidden`}>
        {children}

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(15, 15, 35, 0.95)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            },
            success: {
              iconTheme: {
                primary: '#10B981',
                secondary: '#ffffff',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#ffffff',
              },
            },
          }}
        />
      </body>
    </html>
  )
}