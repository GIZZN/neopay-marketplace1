import type { Metadata } from "next";
import "@/app/global.css";
import type { PropsWithChildren } from "react";
import { ImageResponse } from "next/og";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "NeoPay Marketplace - Безопасная торговая площадка для геймеров",
  description:
    "NeoPay - современный маркетплейс для безопасной торговли игровыми предметами. CS2, Dota 2, WoW и другие игры. Гарантия безопасных сделок и мгновенные выплаты.",
  keywords:
    "NeoPay, маркетплейс, игровые предметы, CS2, Dota 2, WoW, безопасные сделки, буст аккаунтов",
  authors: [{ name: "NeoPay Team" }],
  openGraph: {
    title: "NeoPay Marketplace - Безопасная торговая площадка для геймеров",
    description:
      "Торговая площадка для геймеров с гарантией безопасных сделок и мгновенными выплатами",
    type: "website",
    locale: "ru_RU",
    siteName: "NeoPay Marketplace",
    images: [
      {
        url: "/api/og?title=Моя%20страница22424",
        width: 1200,
        height: 630,
        alt: "Описание изображения",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoPay Marketplace",
    description: "Безопасная торговая площадка для геймеров",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://neopay.com"),
  alternates: {
    canonical: "/",
  },
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return (
    <html lang="ru">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        {/* <meta
          property="og:image"
          content={`/api/screenshot?url=${encodeURIComponent(baseUrl)}`}
        /> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  );
}
