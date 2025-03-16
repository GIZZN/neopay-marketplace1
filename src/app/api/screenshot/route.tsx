// app/api/screenshot/route.js
import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url"); // URL страницы для скриншота

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
      width: 1920, // Ширина viewport
      height: 1080, // Высота viewport
      deviceScaleFactor: 2, // Увеличение плотности пикселей (для ретины)
    });
    await page.goto(url, { waitUntil: "networkidle2" }); // Ждем загрузки страницы

    // Делаем скриншот
    const screenshot = await page.screenshot();

    await browser.close();

    // Возвращаем изображение
    return new Response(screenshot, {
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to generate screenshot" },
      { status: 500 }
    );
  }
}
