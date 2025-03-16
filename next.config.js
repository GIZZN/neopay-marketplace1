/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // Включаем генерацию статических страниц
  output: 'hybrid',
  // Оптимизация для поисковых роботов
  poweredByHeader: false,
  compress: true,
  // Оптимизация производительности
  swcMinify: true,
  reactStrictMode: true,
  // Оптимизация изображений
  optimizeImages: true,
  // Кэширование
  generateEtags: true,
  // Оптимизация шрифтов
  optimizeFonts: true,
  // Конфигурация для роботов
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 