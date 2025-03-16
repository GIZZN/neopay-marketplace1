// app/api/og/route.js
import { ImageResponse } from "next/og";

export const runtime = "edge"; // Используем edge runtime для быстрой генерации

export async function GET(request: Request) {
  try {
    // Параметры из запроса (например, заголовок страницы)
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "Заголовок по умолчанию";

    // Создаем изображение
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 60,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {title}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response("Ошибка генерации изображения", { status: 500 });
  }
}
