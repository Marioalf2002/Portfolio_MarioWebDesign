"use client";

// Error UI global para Next.js 15
// Mejora el manejo de errores según las recomendaciones de Vercel

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary">
      <div className="text-center p-8 max-w-md">
        <h1 className="h1 text-accent mb-4">¡Oops!</h1>
        <h2 className="h2 mb-4">Algo salió mal</h2>
        <p className="text-white/80 mb-2">
          Ha ocurrido un error inesperado. No te preocupes, estamos trabajando
          en ello.
        </p>
        {error?.message && (
          <p className="text-white/60 text-sm mb-6 font-mono bg-secondary p-3 rounded">
            {error.message}
          </p>
        )}
        <button
          onClick={() => reset()}
          className="button-gradient px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform mr-3"
        >
          Intentar de nuevo
        </button>
        <a
          href="/"
          className="inline-block px-6 py-3 rounded-full font-semibold border border-accent text-accent hover:bg-accent hover:text-white transition-all"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
