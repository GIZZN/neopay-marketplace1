import type { Metadata } from 'next';
import '@/app/styles/global.css';
import { Providers } from '@/app/providers';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'NeoPay Marketplace',
  description: 'Быстрый и SEO-оптимизированный маркетплейс для игровых предметов',
  keywords: 'маркетплейс, игровые предметы, торговля, NeoPay',
  openGraph: {
    title: 'NeoPay Marketplace',
    description: 'Быстрый и SEO-оптимизированный маркетплейс для игровых предметов',
    url: 'https://neopay.com',
    siteName: 'NeoPay Marketplace',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ваш-код-верификации',
    yandex: 'ваш-код-верификации',
  },
  metadataBase: new URL('https://neopay.com'),
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
} 