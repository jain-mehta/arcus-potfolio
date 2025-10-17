/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Enable SWC minification for better performance
  swcMinify: true,
}

module.exports = nextConfig