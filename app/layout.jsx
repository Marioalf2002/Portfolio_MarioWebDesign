// Global styles
import "./globals.css";

// Dependencias
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { metadata } from "./metadata";

// Componentes
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";

// Tipografia
import { Poppins, Galada } from "next/font/google";
import SpaceLayer from "@/components/SpaceLayer";

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
  // const image = metadata.image[page] || metadata.image.default;

  return (
    <html lang="es">
      <head>
        <title>{title}</title>
        <meta name="author" content="Mario Hernández" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        {/* <meta property="og:image" content={image} /> */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content={description} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="MarioWebDesign" />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${poppins.variable} ${galada.variable}`}>
        <Header />
        <SpaceLayer />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
