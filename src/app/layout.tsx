import type { Metadata } from 'next';
import '@/app/styles/global.css';
import { Providers } from '@/app/providers';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'NeoPay Marketplace - Безопасная торговая площадка для геймеров',
  description: 'NeoPay - современный маркетплейс для безопасной торговли игровыми предметами. CS2, Dota 2, WoW и другие игры. Гарантия безопасных сделок и мгновенные выплаты.',
  keywords: 'NeoPay, маркетплейс, игровые предметы, CS2, Dota 2, WoW, безопасные сделки, буст аккаунтов',
  authors: [{ name: 'NeoPay Team' }],
  openGraph: {
    title: 'NeoPay Marketplace - Безопасная торговая площадка для геймеров',
    description: 'Торговая площадка для геймеров с гарантией безопасных сделок и мгновенными выплатами',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'NeoPay Marketplace',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeoPay Marketplace',
    description: 'Безопасная торговая площадка для геймеров',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://neopay.com'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 