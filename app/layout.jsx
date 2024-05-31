// Global styles
import "./globals.css";

// Dependencias
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
// import Head from "next/head";

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

export const metadata = {
  title: "MarioWebDesign",
  description:
    "Hola! Soy Mario Hernandez, Un desarrollador web Full-Stack con amplia experiencia en diversas tecnologías, apasionado por crear soluciones web innovadoras y funcionales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        {/* <meta property="og:image" content={pageImage} /> */}
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
