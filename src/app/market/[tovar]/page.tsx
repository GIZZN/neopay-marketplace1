import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import type { Metadata, ResolvingMetadata } from "next";
import { PageProps } from "../../../../.next/types/app/layout";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
export async function generateMetadata(
  { params }: PageProps, // Используем тип PageProps
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Получаем базовый URL из переменных окружения

  const { tovar } = await params;
  // Формируем полный URL для текущей страницы
  const pageUrl = `${baseUrl}/market/${tovar}`;

  // Получаем изображения из родительских метаданных (если есть)
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: tovar, // Динамический заголовок
    openGraph: {
      title: tovar, // Заголовок для OpenGraph
      description: "Описание страницы", // Добавьте описание, если нужно
      images: [
        `/api/screenshot?url=${encodeURIComponent(pageUrl)}`, // Динамическое изображение
        ...previousImages, // Сохраняем предыдущие изображения (если есть)
      ],
    },
  };
}

export default async function Page({ params }: any) {
  const { tovar } = await params;
  const pageUrl = `${baseUrl}/market/${tovar}`;
  return (
    <>
      <head>
        <meta
          property="og:image"
          content={`/api/screenshot?url=${encodeURIComponent(pageUrl)}`}
        />
      </head>
      <Header />
      <Footer />
      <p className="">asdasd + {tovar}</p>
    </>
  );
}
