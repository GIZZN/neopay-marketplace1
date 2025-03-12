/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  }
};

module.exports = nextConfig; 