"use client";

// Componente wrapper para páginas que necesitan Header, Transitions, etc.
// Reemplaza el uso de RootLayout en las páginas individuales

import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";

export default function PageWrapper({ children }) {
  return (
    <>
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </>
  );
}
