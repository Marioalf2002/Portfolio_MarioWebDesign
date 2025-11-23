"use client";

// Error Boundary para prevenir fallos completos de renderizado
// Según las recomendaciones de Vercel para Google SEO

import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log del error para debugging
    console.error("Error Boundary capturó un error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-primary">
          <div className="text-center p-8">
            <h1 className="h1 text-accent mb-4">Oops!</h1>
            <h2 className="h2 mb-4">Algo salió mal</h2>
            <p className="text-white/80 mb-6">
              Ha ocurrido un error inesperado. Por favor, intenta recargar la
              página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="button-gradient px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Recargar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
