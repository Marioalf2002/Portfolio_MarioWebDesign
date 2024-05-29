// Global styles
import "./globals.css";

// Dependencias
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  description: "Desarrollo Web Full Stack | MarioWeb Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${poppins.variable} ${galada.variable}`}>
        <Header />
        <SpaceLayer />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <SpeedInsights />
      </body>
    </html>
  );
}
