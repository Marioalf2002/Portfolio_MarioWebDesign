"use client";

import React from "react";
import RootLayout from "../layout";
import { motion } from "framer-motion";
import Link from "next/link";

const Terms = () => {
  return (
    <RootLayout page="terms">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto z-20">
          <div className="gap-6 p-7 bg-secondary rounded-xl">
            <header className="mb-6">
              <h1 className="text-4xl xl:text-5xl text-white font-secondary flex justify-center mb-2">
                Términos y Condiciones<span className="text-accent">.</span>
              </h1>
            </header>

            <article className="text-white/90 space-y-6">
              {/* 1. Aceptación */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  1. Aceptación de los Términos
                </h2>
                <p>
                  Al acceder y utilizar el sitio web{" "}
                  <span className="text-white font-semibold">
                    mariowebdesign.vercel.app
                  </span>{" "}
                  (en adelante, "el Sitio"), aceptas cumplir y estar sujeto a
                  los presentes Términos y Condiciones. Si no estás de acuerdo
                  con estos términos, por favor, abstente de utilizar el Sitio.
                </p>
                <p className="mt-3">
                  Estos términos se aplican a todos los visitantes, usuarios y
                  cualquier persona que acceda o use el Sitio.
                </p>
              </section>

              {/* 2. Descripción del Servicio */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  2. Descripción del Servicio
                </h2>
                <p className="mb-3">
                  <span className="text-white font-semibold">
                    MarioWebDesign
                  </span>{" "}
                  es un sitio web de portafolio profesional que ofrece
                  información sobre servicios de desarrollo web, incluyendo:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Desarrollo de aplicaciones web Full-Stack</li>
                  <li>Diseño y desarrollo de sitios web modernos</li>
                  <li>Optimización SEO</li>
                  <li>Mantenimiento y soporte técnico web</li>
                  <li>Consultoría en tecnologías web</li>
                </ul>
                <p className="mt-3">
                  El Sitio funciona como plataforma de presentación profesional
                  y punto de contacto para potenciales clientes interesados en
                  servicios de desarrollo web.
                </p>
              </section>

              {/* 3. Uso del Sitio */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  3. Uso Permitido del Sitio
                </h2>
                <p className="mb-3">
                  Al utilizar este Sitio, te comprometes a:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-white">Uso legítimo:</strong>{" "}
                    Utilizar el Sitio únicamente con fines lícitos y conforme a
                    la legislación colombiana vigente
                  </li>
                  <li>
                    <strong className="text-white">No interferencia:</strong> No
                    intentar acceder de forma no autorizada a ninguna parte del
                    Sitio, servidores o bases de datos conectadas
                  </li>
                  <li>
                    <strong className="text-white">No malware:</strong> No
                    transmitir virus, malware, código malicioso o cualquier
                    material que pueda dañar el Sitio o a terceros
                  </li>
                  <li>
                    <strong className="text-white">No spam:</strong> No enviar
                    comunicaciones comerciales no solicitadas a través del
                    formulario de contacto
                  </li>
                  <li>
                    <strong className="text-white">Veracidad:</strong>{" "}
                    Proporcionar información veraz y actualizada en el
                    formulario de contacto
                  </li>
                </ul>
              </section>

              {/* 4. Propiedad Intelectual */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  4. Propiedad Intelectual y Derechos de Autor
                </h2>
                <p className="mb-3">
                  Todo el contenido del Sitio, incluyendo pero no limitado a:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                  <li>Textos, gráficos, logotipos e imágenes</li>
                  <li>Código fuente, diseño y estructura del sitio</li>
                  <li>Proyectos y casos de estudio presentados</li>
                  <li>Marca "MarioWebDesign"</li>
                </ul>
                <p className="mb-3">
                  Está protegido por las leyes de derechos de autor y propiedad
                  intelectual de Colombia (Ley 23 de 1982, Decisión Andina 351
                  de 1993) y es propiedad exclusiva de{" "}
                  <strong className="text-white">
                    Mario Alfredo Hernández Cardona
                  </strong>
                  , salvo que se indique lo contrario.
                </p>
                <div className="p-4 bg-primary/50 rounded-lg border border-accent/20">
                  <h3 className="text-xl text-white font-semibold mb-2">
                    Prohibiciones:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>
                      Copiar, reproducir, distribuir o modificar cualquier
                      contenido del Sitio sin autorización expresa y por escrito
                    </li>
                    <li>
                      Utilizar el contenido con fines comerciales sin permiso
                      previo
                    </li>
                    <li>
                      Realizar ingeniería inversa del código fuente del Sitio
                    </li>
                    <li>
                      Eliminar avisos de derechos de autor o marcas registradas
                    </li>
                  </ul>
                </div>
                <p className="mt-3 text-sm">
                  <strong className="text-white">Nota:</strong> Los logos,
                  marcas y nombres de terceros mostrados en proyectos de
                  portafolio son propiedad de sus respectivos dueños y se
                  utilizan únicamente con fines demostrativos.
                </p>
              </section>

              {/* 5. Enlaces Externos */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  5. Enlaces a Sitios de Terceros
                </h2>
                <p>
                  El Sitio puede contener enlaces a sitios web de terceros
                  (GitHub, LinkedIn, proyectos desplegados, etc.). Estos enlaces
                  se proporcionan únicamente para tu conveniencia.
                </p>
                <p className="mt-3">
                  <strong className="text-white">
                    No nos responsabilizamos por:
                  </strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>
                    El contenido, exactitud o disponibilidad de sitios externos
                  </li>
                  <li>
                    Las políticas de privacidad o prácticas de sitios de
                    terceros
                  </li>
                  <li>
                    Daños o pérdidas derivados del uso de sitios enlazados
                  </li>
                </ul>
                <p className="mt-3">
                  Te recomendamos revisar los términos y políticas de privacidad
                  de cualquier sitio externo que visites.
                </p>
              </section>

              {/* 6. Limitación de Responsabilidad */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  6. Limitación de Responsabilidad
                </h2>
                <p className="mb-3">
                  El Sitio se proporciona "tal cual" y "según disponibilidad",
                  sin garantías de ningún tipo, ya sean expresas o implícitas.
                </p>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl text-white font-semibold mb-2">
                      No garantizamos:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        Que el Sitio estará disponible de forma ininterrumpida o
                        libre de errores
                      </li>
                      <li>
                        La exactitud, completitud o actualidad de la información
                        presentada
                      </li>
                      <li>
                        Que el Sitio esté libre de virus u otros componentes
                        dañinos
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl text-white font-semibold mb-2">
                      Exención de responsabilidad:
                    </h3>
                    <p>
                      En ningún caso seremos responsables por daños directos,
                      indirectos, incidentales, especiales, consecuentes o
                      punitivos derivados de:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>El uso o imposibilidad de uso del Sitio</li>
                      <li>
                        Acceso no autorizado a tus datos o información personal
                      </li>
                      <li>Errores u omisiones en el contenido del Sitio</li>
                      <li>Interrupciones o cese de funciones del Sitio</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 7. Privacidad de Datos */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  7. Protección de Datos Personales
                </h2>
                <p className="mb-3">
                  El tratamiento de tus datos personales proporcionados a través
                  del formulario de contacto se rige por nuestra{" "}
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
                  Al enviar el formulario de contacto, otorgas tu consentimiento
                  expreso e informado para el tratamiento de tus datos conforme
                  a las finalidades descritas en la Política de Privacidad.
                </p>
              </section>

              {/* 8. Cookies */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  8. Uso de Cookies
                </h2>
                <p>
                  Este Sitio utiliza cookies y tecnologías similares para
                  mejorar tu experiencia de usuario y analizar el tráfico. Para
                  más información sobre qué cookies utilizamos y cómo las
                  usamos, consulta nuestra{" "}
                  <Link
                    href="/cookies"
                    className="text-accent hover:text-accent-hover underline font-semibold"
                  >
                    Política de Cookies
                  </Link>
                  .
                </p>
              </section>

              {/* 9. Modificaciones */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  9. Modificaciones a los Términos
                </h2>
                <p>
                  Nos reservamos el derecho de modificar estos Términos y
                  Condiciones en cualquier momento. Cualquier cambio entrará en
                  vigor inmediatamente después de su publicación en esta página.
                </p>
                <p className="mt-3">
                  La fecha de "Última actualización" al inicio de este documento
                  indica cuándo se realizaron las modificaciones más recientes.
                  El uso continuado del Sitio después de cualquier modificación
                  constituye tu aceptación de los nuevos términos.
                </p>
              </section>

              {/* 10. Ley Aplicable */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  10. Ley Aplicable y Jurisdicción
                </h2>
                <p>
                  Estos Términos y Condiciones se rigen e interpretan de acuerdo
                  con las leyes de la República de Colombia.
                </p>
                <p className="mt-3">
                  Cualquier disputa, controversia o reclamación derivada de o
                  relacionada con estos Términos, o el incumplimiento, rescisión
                  o invalidez de los mismos, se resolverá ante los tribunales
                  competentes de{" "}
                  <strong className="text-white">
                    Sabaneta, Antioquia, Colombia
                  </strong>
                  , renunciando expresamente a cualquier otro fuero que pudiera
                  corresponder.
                </p>
              </section>

              {/* 11. Contacto */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  11. Información de Contacto
                </h2>
                <p className="mb-3">
                  Si tienes preguntas, comentarios o inquietudes sobre estos
                  Términos y Condiciones, puedes contactarnos a través de:
                </p>
                <div className="p-4 bg-primary/50 rounded-lg border border-accent/20">
                  <p className="mb-2">
                    <strong className="text-white">Responsable:</strong> Mario
                    Hernandez
                  </p>
                  <p className="mb-2">
                    <strong className="text-white">Sitio web:</strong>{" "}
                    <a
                      href="https://mariowebdesign.vercel.app"
                      className="text-accent hover:text-accent-hover underline"
                    >
                      https://mariowebdesign.vercel.app
                    </a>
                  </p>
                  <p className="mb-2">
                    <strong className="text-white">Email:</strong>{" "}
                    <a
                      href="mailto:marioalf200216@gmail.com"
                      className="text-accent hover:text-accent-hover underline"
                    >
                      marioalf200216@gmail.com
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
                    <strong className="text-white">Ubicación:</strong> Sabaneta,
                    Antioquia, Colombia
                  </p>
                </div>
              </section>

              {/* 12. Divisibilidad */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  12. Divisibilidad de Cláusulas
                </h2>
                <p>
                  Si cualquier disposición de estos Términos y Condiciones es
                  declarada inválida o inaplicable por un tribunal competente,
                  dicha disposición se modificará e interpretará para cumplir
                  con los objetivos de la disposición original en la máxima
                  medida posible bajo la ley aplicable, y las demás
                  disposiciones seguirán en pleno vigor y efecto.
                </p>
              </section>

              {/* Footer */}
              <footer className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-white/60">
                <p className="mb-2">
                  Al utilizar este sitio web, confirmas que has leído, entendido
                  y aceptado estos Términos y Condiciones en su totalidad.
                </p>
              </footer>
            </article>
          </div>
        </div>
      </motion.section>
    </RootLayout>
  );
};

export default Terms;
