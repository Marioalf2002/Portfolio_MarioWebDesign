// Robots.txt dinámico para Next.js 15
// Optimizado según las recomendaciones de Google para crawling eficiente

export default function robots() {
  const baseUrl = "https://mariowebdesign.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/static/", "/_next/image/"],
      },
      {
        // Googlebot específico - permitir todo excepto rutas de API
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // Bingbot
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
