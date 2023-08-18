/** @type {import('next').NextConfig} */

const path = require('path');

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
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects() {
    return [
      {
        source: '/movie',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
