// Global styles
import "./globals.css";

// Dependencias
import { metadata } from "./metadata";
import React, { Suspense } from "react";

// Componentes
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";
import ErrorBoundary from "@/components/ErrorBoundary";
const SpaceLayer = React.lazy(() => import("@/components/SpaceLayer"));
import AnalyticsNext from "@/components/AnalyticsNext";

// Tipografia
import { Poppins, Galada } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const galada = Galada({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-galada",
  weight: ["400"],
});

export default function RootLayout({ children, page }) {
  const title = metadata.title[page] || metadata.title.default;
  const description =
    metadata.description[page] || metadata.description.default;
  const keywords = metadata.keywords[page] || metadata.keywords.default;
  const url = metadata.url[page] || metadata.url.default;
  const image = metadata.image[page] || metadata.image.default;

  // Si se llama con prop 'page', es desde una página individual - renderizar componentes UI
  // Si NO tiene 'page', es el layout root de Next.js - solo wrapper
  const isPageLayout = !!page;

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Meta tags básicos */}
        <meta name="author" content="Mario Hernández" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Resource Hints para mejorar performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Open Graph para redes sociales */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content={description} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="MarioWebDesign" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Canonical URL */}
        <link rel="canonical" href={url} />

        {/* Robots meta - permitir indexación */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
      </head>
      <body className={`${poppins.variable} ${galada.variable}`}>
        <ErrorBoundary>
          <Suspense fallback={<div className="bg-primary min-h-screen" />}>
            <SpaceLayer />
          </Suspense>
          {isPageLayout ? (
            <>
              <Header />
              <StairTransition />
              <PageTransition>{children}</PageTransition>
            </>
          ) : (
            children
          )}
          <AnalyticsNext />
        </ErrorBoundary>
      </body>
    </html>
  );
}
