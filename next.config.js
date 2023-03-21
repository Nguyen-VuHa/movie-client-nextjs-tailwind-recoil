/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    domains: ['www.tiendauroi.com'],
  },
  future: {
    webpack5: true,
  },
}

module.exports = nextConfig
