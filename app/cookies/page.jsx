"use client";

import React from "react";
import RootLayout from "../layout";
import { motion } from "framer-motion";
import Link from "next/link";

const Cookies = () => {
  return (
    <RootLayout page="cookies">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[calc(100vh-7rem)] py-6"
      >
        <div className="container mx-auto z-20">
          <div className="gap-6 p-7 bg-secondary rounded-xl">
            <header className="mb-6">
              <h1 className="text-4xl xl:text-5xl text-white font-secondary flex justify-center mb-2">
                Política de Cookies<span className="text-accent">.</span>
              </h1>
            </header>

            <article className="text-white/90 space-y-6">
              {/* 1. Qué son las cookies */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  1. ¿Qué son las Cookies?
                </h2>
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en
                  tu dispositivo (ordenador, tablet o móvil) cuando visitas un
                  sitio web. Permiten al sitio web recordar tus acciones y
                  preferencias durante un período de tiempo, para que no tengas
                  que volver a configurarlas cada vez que regreses al sitio o
                  navegues entre páginas.
                </p>
                <p className="mt-3">
                  Las cookies NO contienen virus ni programas maliciosos y NO
                  pueden acceder a información personal almacenada en tu
                  dispositivo, salvo la información que tú mismo proporciones.
                </p>
              </section>

              {/* 2. Cookies que usamos */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  2. Cookies que Utiliza este Sitio Web
                </h2>
                <p className="mb-4">
                  En{" "}
                  <strong className="text-white">
                    mariowebdesign.vercel.app
                  </strong>{" "}
                  utilizamos las siguientes cookies:
                </p>

                {/* Vercel Analytics */}
                <div className="space-y-4">
                  <div className="p-4 bg-primary/50 rounded-lg border border-accent/20">
                    <h3 className="text-xl text-white font-semibold mb-3">
                      Cookies de Analítica (Vercel Analytics)
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong className="text-white">Nombre:</strong>{" "}
                        <code className="text-accent">_va</code>,{" "}
                        <code className="text-accent">__va_id</code>
                      </div>
                      <div>
                        <strong className="text-white">Proveedor:</strong>{" "}
                        Vercel Inc.
                      </div>
                      <div>
                        <strong className="text-white">Tipo:</strong> Primera
                        parte (First-party)
                      </div>
                      <div>
                        <strong className="text-white">Finalidad:</strong>{" "}
                        Analizar el tráfico del sitio web de forma anónima
                        (páginas visitadas, tiempo en el sitio, país de origen,
                        dispositivo utilizado)
                      </div>
                      <div>
                        <strong className="text-white">
                          Datos recopilados:
                        </strong>{" "}
                        URL de la página, referrer, User-Agent, país (mediante
                        IP anonimizada), información del dispositivo
                      </div>
                      <div>
                        <strong className="text-white">Duración:</strong> 1 año
                      </div>
                      <div>
                        <strong className="text-white">
                          Privacidad de datos:
                        </strong>{" "}
                        Vercel Analytics NO recopila ni almacena direcciones IP
                        completas, cumple con GDPR y NO vende datos a terceros
                      </div>
                      <div>
                        <strong className="text-white">Más información:</strong>{" "}
                        <a
                          href="https://vercel.com/docs/analytics/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent-hover underline"
                        >
                          Política de Privacidad de Vercel Analytics
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Next.js cookies */}
                  <div className="p-4 bg-primary/50 rounded-lg border border-accent/20">
                    <h3 className="text-xl text-white font-semibold mb-3">
                      Cookies Técnicas Esenciales (Next.js)
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong className="text-white">Nombre:</strong>{" "}
                        <code className="text-accent">__next_session</code>,{" "}
                        <code className="text-accent">__csrf</code>
                      </div>
                      <div>
                        <strong className="text-white">Proveedor:</strong>{" "}
                        Next.js (framework del sitio)
                      </div>
                      <div>
                        <strong className="text-white">Tipo:</strong> Primera
                        parte (First-party)
                      </div>
                      <div>
                        <strong className="text-white">Finalidad:</strong>{" "}
                        Garantizar el correcto funcionamiento del sitio web y
                        protección contra ataques CSRF (Cross-Site Request
                        Forgery)
                      </div>
                      <div>
                        <strong className="text-white">Duración:</strong> Sesión
                        (se eliminan al cerrar el navegador)
                      </div>
                      <div>
                        <strong className="text-white">Necesarias para:</strong>{" "}
                        Navegación segura, envío de formularios, gestión de
                        sesión
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/30">
                  <p className="text-sm">
                    <strong className="text-white">
                      ✓ NO utilizamos cookies de:
                    </strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-sm">
                    <li>Publicidad o marketing de terceros</li>
                    <li>Redes sociales (Facebook Pixel, Google Ads, etc.)</li>
                    <li>Rastreo invasivo de usuarios</li>
                    <li>Venta o compartición de datos con terceros</li>
                  </ul>
                </div>
              </section>

              {/* 3. Clasificación */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  3. Clasificación de Cookies por Finalidad
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl text-white font-semibold mb-2">
                      Cookies Técnicas (Esenciales)
                    </h3>
                    <p className="text-sm">
                      Son necesarias para el funcionamiento básico del sitio web
                      y NO se pueden desactivar. Permiten la navegación segura y
                      el uso de funciones básicas como el formulario de
                      contacto. Sin estas cookies, el sitio NO funcionaría
                      correctamente.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl text-white font-semibold mb-2">
                      Cookies de Analítica
                    </h3>
                    <p className="text-sm">
                      Nos ayudan a entender cómo los visitantes interactúan con
                      el sitio web, qué páginas son más visitadas y si hay
                      errores. Esta información se utiliza para mejorar el sitio
                      y la experiencia del usuario. Los datos recopilados son
                      ANÓNIMOS y NO se utilizan para identificarte
                      personalmente.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. Duración */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  4. Duración de las Cookies
                </h2>
                <div className="space-y-2">
                  <div>
                    <strong className="text-white">Cookies de Sesión:</strong>{" "}
                    Se eliminan automáticamente cuando cierras el navegador
                  </div>
                  <div>
                    <strong className="text-white">
                      Cookies Persistentes:
                    </strong>{" "}
                    Permanecen en tu dispositivo durante un período específico
                    (máximo 1 año) o hasta que las elimines manualmente
                  </div>
                </div>
              </section>

              {/* 5. Cómo gestionar cookies */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  5. Cómo Gestionar y Deshabilitar Cookies
                </h2>
                <p className="mb-4">
                  Puedes controlar y/o eliminar las cookies según desees. Puedes
                  eliminar todas las cookies que ya están en tu dispositivo y
                  configurar la mayoría de los navegadores para que no se
                  instalen.
                </p>

                <div className="mb-4 p-4 bg-amber-900/20 rounded-lg border border-amber-500/30">
                  <p className="text-sm">
                    <strong className="text-amber-400">⚠️ Advertencia:</strong>{" "}
                    Si deshabilitas las cookies técnicas esenciales, es posible
                    que algunas funciones del sitio NO funcionen correctamente
                    (como el formulario de contacto).
                  </p>
                </div>

                <h3 className="text-xl text-white font-semibold mb-3">
                  Configuración por Navegador:
                </h3>

                <div className="space-y-3">
                  <div className="p-3 bg-primary/30 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">
                      🌐 Google Chrome
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm ml-4">
                      <li>
                        Haz clic en el menú (⋮) &gt; Configuración &gt;
                        Privacidad y seguridad
                      </li>
                      <li>Haz clic en "Cookies y otros datos de sitios"</li>
                      <li>
                        Selecciona "Bloquear cookies de terceros" o "Bloquear
                        todas las cookies"
                      </li>
                    </ol>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover underline text-sm mt-2 inline-block"
                    >
                      Más información →
                    </a>
                  </div>

                  <div className="p-3 bg-primary/30 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">
                      🦊 Mozilla Firefox
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm ml-4">
                      <li>
                        Haz clic en el menú (≡) &gt; Configuración &gt;
                        Privacidad y seguridad
                      </li>
                      <li>
                        En "Cookies y datos del sitio", haz clic en "Gestionar
                        datos..."
                      </li>
                      <li>
                        Elimina las cookies del sitio o configura el nivel de
                        protección
                      </li>
                    </ol>
                    <a
                      href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover underline text-sm mt-2 inline-block"
                    >
                      Más información →
                    </a>
                  </div>

                  <div className="p-3 bg-primary/30 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">
                      🧭 Safari (macOS/iOS)
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm ml-4">
                      <li>
                        En macOS: Safari &gt; Preferencias &gt; Privacidad
                      </li>
                      <li>
                        En iOS: Ajustes &gt; Safari &gt; Privacidad y seguridad
                      </li>
                      <li>Selecciona "Bloquear todas las cookies"</li>
                    </ol>
                    <a
                      href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover underline text-sm mt-2 inline-block"
                    >
                      Más información →
                    </a>
                  </div>

                  <div className="p-3 bg-primary/30 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">
                      🌊 Microsoft Edge
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm ml-4">
                      <li>
                        Haz clic en el menú (⋯) &gt; Configuración &gt; Cookies
                        y permisos del sitio
                      </li>
                      <li>Haz clic en "Cookies y datos del sitio"</li>
                      <li>
                        Configura "Bloquear cookies de terceros" o elimina
                        cookies específicas
                      </li>
                    </ol>
                    <a
                      href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover underline text-sm mt-2 inline-block"
                    >
                      Más información →
                    </a>
                  </div>
                </div>
              </section>

              {/* 6. Consentimiento */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  6. Consentimiento para el Uso de Cookies
                </h2>
                <p>
                  Al continuar navegando por este sitio web, aceptas el uso de
                  cookies conforme a esta Política de Cookies.
                </p>
                <p className="mt-3">
                  Puedes retirar tu consentimiento en cualquier momento
                  eliminando las cookies de tu navegador mediante las
                  instrucciones anteriores.
                </p>
              </section>

              {/* 7. Protección de datos */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  7. Protección de Datos Personales
                </h2>
                <p className="mb-3">
                  El uso de cookies está sujeto a nuestra{" "}
                  <Link
                    href="/privacy"
                    className="text-accent hover:text-accent-hover underline font-semibold"
                  >
                    Política de Privacidad
                  </Link>
                  , la cual cumple con la Ley 1581 de 2012 de Colombia sobre
                  protección de datos personales.
                </p>
                <p>
                  Las cookies de analítica que utilizamos NO recopilan
                  información personal identificable. Los datos se agregan de
                  forma anónima y se utilizan únicamente para mejorar la
                  experiencia del usuario.
                </p>
              </section>

              {/* 8. Modificaciones */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  8. Modificaciones a esta Política
                </h2>
                <p>
                  Nos reservamos el derecho de modificar esta Política de
                  Cookies en cualquier momento para reflejar cambios en las
                  cookies que utilizamos o por razones operativas, legales o
                  reglamentarias.
                </p>
                <p className="mt-3">
                  Te recomendamos revisar periódicamente esta página para estar
                  informado sobre cómo utilizamos las cookies. La fecha de
                  "Última actualización" al inicio indica cuándo se realizaron
                  las modificaciones más recientes.
                </p>
              </section>

              {/* 9. Contacto */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  9. Más Información y Contacto
                </h2>
                <p className="mb-3">
                  Si tienes preguntas sobre cómo utilizamos las cookies o deseas
                  más información, puedes contactarnos:
                </p>
                <div className="p-4 bg-primary/50 rounded-lg border border-accent/20">
                  <p className="mb-2">
                    <strong className="text-white">Responsable:</strong> Mario
                    Alfredo Hernández Cardona
                  </p>
                  <p className="mb-2">
                    <strong className="text-white">Email:</strong>{" "}
                    <a
                      href="mailto:mariowebdesing@proton.me"
                      className="text-accent hover:text-accent-hover underline"
                    >
                      mariowebdesing@proton.me
                    </a>
                  </p>
                  <p className="mb-2">
                    <strong className="text-white">WhatsApp:</strong>{" "}
                    <a
                      href="https://wa.me/573247773515"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover underline"
                    >
                      +57 324 777 3515
                    </a>
                  </p>
                  <p>
                    <strong className="text-white">Sitio web:</strong>{" "}
                    <a
                      href="https://mariowebdesign.vercel.app"
                      className="text-accent hover:text-accent-hover underline"
                    >
                      https://mariowebdesign.vercel.app
                    </a>
                  </p>
                </div>
              </section>

              {/* Footer */}
              <footer className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-white/60">
                <p>
                  Esta Política de Cookies complementa nuestros{" "}
                  <Link
                    href="/terms"
                    className="text-accent hover:text-accent-hover underline"
                  >
                    Términos y Condiciones
                  </Link>{" "}
                  y nuestra{" "}
                  <Link
                    href="/privacy"
                    className="text-accent hover:text-accent-hover underline"
                  >
                    Política de Privacidad
                  </Link>
                  .
                </p>
              </footer>
            </article>
          </div>
        </div>
      </motion.section>
    </RootLayout>
  );
};

export default Cookies;
