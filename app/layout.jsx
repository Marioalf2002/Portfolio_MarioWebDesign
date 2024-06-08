// Global styles
import "./globals.css";

// Dependencias
import { metadata } from "./metadata";
import React, { Suspense } from "react";

// Componentes
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";
const SpaceLayer = React.lazy(() => import("@/components/SpaceLayer"));
import AnalyticsNext from "@/components/AnalyticsNext";

// Tipografia
import { Poppins, Galada } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
  const url = metadata.url[page] || metadata.url.default;
  const image = metadata.image[page] || metadata.image.default;

  return (
    <html lang="es">
      <head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Mario Hernández" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
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
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8TP31QR28T"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8TP31QR28T');
          `}
        </script>
      </head>
      <body className={`${poppins.variable} ${galada.variable}`}>
        <Header />
        <Suspense>
          <SpaceLayer />
        </Suspense>
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <AnalyticsNext />
      </body>
    </html>
  );
}
