/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logodownload.org',
      },
    ],
  },
}

module.exports = nextConfig
