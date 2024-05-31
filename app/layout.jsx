// Global styles
import "./globals.css";

// Dependencias
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

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

export default function RootLayout({ children, title, description, image }) {
  const defaultTitle = "MarioWebDesign";
  const pageTitle = title ? `MarioWebDesign | ${title}` : defaultTitle;
  const pageDescription =
    description ||
    "Hola! Soy Mario Hernandez, Un desarrollador web Full-Stack con amplia experiencia en diversas tecnologías, apasionado por crear soluciones web innovadoras y funcionales.";
  const pageImage = image || "/opengraph-home.png";

  return (
    <html lang="es">
      <head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mariowebdesign.com" />
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
