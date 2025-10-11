"use client";

import React from "react";
import RootLayout from "../layout";
import { motion } from "framer-motion";
import Link from "next/link";

const Privacy = () => {
  return (
    <RootLayout page="privacy">
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
                Política de Privacidad<span className="text-accent">.</span>
              </h1>
            </header>

            <article className="text-white/90 space-y-6">
              {/* 1. Responsable del Tratamiento */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  1. Responsable del Tratamiento de Datos Personales
                </h2>
                <p className="mb-2">
                  <strong className="text-white">Responsable:</strong> Mario
                  Hernandez
                </p>
                <p className="mb-2">
                  <strong className="text-white">Domicilio:</strong> Sabaneta,
                  Antioquia, Colombia
                </p>
                <p className="mb-2">
                  <strong className="text-white">Email de contacto:</strong>{" "}
                  <a
                    href="mailto:marioalf200216@gmail.com"
                    className="text-accent hover:text-accent-hover underline"
                  >
                    marioalf200216@gmail.com
                  </a>
                </p>
                <p className="mb-2">
                  <strong className="text-white">Teléfono:</strong>{" "}
                  <a
                    href="https://wa.me/573247773515"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover underline"
                  >
                    +57 324 777 3515
                  </a>
                </p>
              </section>

              {/* 2. Marco Legal */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  2. Marco Legal Aplicable
                </h2>
                <p>
                  Esta Política de Privacidad se rige por la legislación
                  colombiana en materia de protección de datos personales,
                  específicamente:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>
                    <strong className="text-white">
                      Ley Estatutaria 1581 de 2012
                    </strong>{" "}
                    - Protección de Datos Personales
                  </li>
                  <li>
                    <strong className="text-white">Decreto 1377 de 2013</strong>{" "}
                    - Reglamentario de la Ley 1581
                  </li>
                  <li>
                    <strong className="text-white">Decreto 1074 de 2015</strong>{" "}
                    - Decreto Único Reglamentario del Sector Comercio
                  </li>
                </ul>
              </section>

              {/* 3. Datos Recopilados */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  3. Datos Personales que Recopilamos
                </h2>
                <p className="mb-3">
                  A través del formulario de contacto de este sitio web,
                  recopilamos los siguientes datos personales:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-white">Nombre y Apellido:</strong>{" "}
                    Para identificar y personalizar la comunicación
                  </li>
                  <li>
                    <strong className="text-white">Correo electrónico:</strong>{" "}
                    Para responder a tus consultas y enviar información
                    solicitada
                  </li>
                  <li>
                    <strong className="text-white">
                      Número de teléfono (opcional):
                    </strong>{" "}
                    Para contacto directo si es necesario
                  </li>
                  <li>
                    <strong className="text-white">Mensaje/Consulta:</strong>{" "}
                    Para entender tu solicitud y brindarte una respuesta
                    adecuada
                  </li>
                  <li>
                    <strong className="text-white">Servicio de interés:</strong>{" "}
                    Para dirigir tu consulta al área correspondiente
                  </li>
                </ul>
                <p className="mt-4">
                  <strong className="text-white">Nota importante:</strong> NO
                  recopilamos datos sensibles (origen racial, orientación
                  política, convicciones religiosas, afiliación sindical, datos
                  de salud, biométricos, etc.).
                </p>
              </section>

              {/* 4. Finalidad del Tratamiento */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  4. Finalidad del Tratamiento de Datos
                </h2>
                <p className="mb-3">
                  Los datos personales recopilados serán utilizados
                  exclusivamente para las siguientes finalidades:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Responder a tus consultas, solicitudes o mensajes enviados a
                    través del formulario de contacto
                  </li>
                  <li>
                    Brindarte información sobre los servicios de desarrollo web
                    solicitados
                  </li>
                  <li>
                    Enviar cotizaciones, propuestas comerciales o información
                    relacionada con tu consulta
                  </li>
                  <li>
                    Mantener comunicación contigo durante el proceso de
                    desarrollo de proyectos
                  </li>
                  <li>
                    Mejorar la calidad de nuestros servicios mediante el
                    análisis de consultas recibidas
                  </li>
                </ul>
                <p className="mt-4">
                  <strong className="text-white">
                    NO utilizaremos tus datos para:
                  </strong>{" "}
                  Enviar publicidad no solicitada (spam), compartir con terceros
                  con fines comerciales, o cualquier finalidad no autorizada
                  expresamente por ti.
                </p>
              </section>

              {/* 5. Procesadores Externos */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  5. Encargados del Tratamiento y Procesadores Externos
                </h2>
                <p className="mb-3">
                  Para cumplir con las finalidades descritas, compartimos tus
                  datos con los siguientes procesadores externos que actúan como{" "}
                  <strong className="text-white">
                    Encargados del Tratamiento
                  </strong>
                  :
                </p>
                <div className="space-y-4 ml-4">
                  <div>
                    <h3 className="text-xl text-white font-semibold mb-2">
                      Resend (Servicio de envío de correos electrónicos)
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        <strong className="text-white">Función:</strong> Envío
                        de correos electrónicos desde el formulario de contacto
                      </li>
                      <li>
                        <strong className="text-white">
                          Datos compartidos:
                        </strong>{" "}
                        Nombre, email, mensaje
                      </li>
                      <li>
                        <strong className="text-white">
                          Política de Privacidad:
                        </strong>{" "}
                        <a
                          href="https://resend.com/legal/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent-hover underline"
                        >
                          https://resend.com/legal/privacy-policy
                        </a>
                      </li>
                      <li>
                        <strong className="text-white">Ubicación:</strong>{" "}
                        Estados Unidos (cumple con estándares de protección de
                        datos)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl text-white font-semibold mb-2">
                      Vercel (Hosting y Analítica)
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        <strong className="text-white">Función:</strong>{" "}
                        Alojamiento del sitio web y análisis de tráfico
                      </li>
                      <li>
                        <strong className="text-white">
                          Datos compartidos:
                        </strong>{" "}
                        Dirección IP, navegador, país, páginas visitadas
                        (anónimos)
                      </li>
                      <li>
                        <strong className="text-white">
                          Política de Privacidad:
                        </strong>{" "}
                        <a
                          href="https://vercel.com/legal/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent-hover underline"
                        >
                          https://vercel.com/legal/privacy-policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4">
                  Todos los procesadores externos cuentan con medidas de
                  seguridad adecuadas y se comprometen a cumplir con las
                  normativas de protección de datos aplicables.
                </p>
              </section>

              {/* 6. Derechos ARCO */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  6. Tus Derechos como Titular de Datos Personales (Derechos
                  ARCO)
                </h2>
                <p className="mb-3">
                  De conformidad con la Ley 1581 de 2012, como titular de los
                  datos personales, tienes derecho a:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-white">Acceso (Conocer):</strong>{" "}
                    Solicitar información sobre los datos personales que tenemos
                    almacenados sobre ti
                  </li>
                  <li>
                    <strong className="text-white">
                      Rectificación (Actualizar):
                    </strong>{" "}
                    Solicitar la corrección de tus datos si están incompletos,
                    inexactos o desactualizados
                  </li>
                  <li>
                    <strong className="text-white">
                      Cancelación (Suprimir):
                    </strong>{" "}
                    Solicitar la eliminación de tus datos cuando consideres que
                    no están siendo tratados conforme a la normativa
                  </li>
                  <li>
                    <strong className="text-white">Oposición:</strong> Solicitar
                    que no se realice el tratamiento de tus datos cuando no haya
                    autorización previa o se cause un perjuicio
                  </li>
                  <li>
                    <strong className="text-white">
                      Revocación de la autorización:
                    </strong>{" "}
                    Retirar el consentimiento otorgado para el tratamiento de
                    tus datos en cualquier momento
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-primary/50 rounded-lg border border-accent/20">
                  <h3 className="text-xl text-accent font-semibold mb-2">
                    ¿Cómo ejercer tus derechos?
                  </h3>
                  <p className="mb-2">
                    Para ejercer cualquiera de estos derechos, puedes
                    contactarnos mediante:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong className="text-white">Email:</strong>{" "}
                      <a
                        href="mailto:marioalf200216@gmail.com"
                        className="text-accent hover:text-accent-hover underline"
                      >
                        marioalf200216@gmail.com
                      </a>
                    </li>
                    <li>
                      <strong className="text-white">WhatsApp:</strong>{" "}
                      <a
                        href="https://wa.me/573247773515"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-hover underline"
                      >
                        +57 324 777 3515
                      </a>
                    </li>
                  </ul>
                  <p className="mt-3 text-sm">
                    <strong className="text-white">Plazo de respuesta:</strong>{" "}
                    Responderemos tu solicitud dentro de los 10 días hábiles
                    siguientes a su recepción. Si tu solicitud es procedente, la
                    haremos efectiva dentro de los 15 días hábiles siguientes a
                    la respuesta.
                  </p>
                </div>
              </section>

              {/* 7. Seguridad */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  7. Medidas de Seguridad
                </h2>
                <p className="mb-3">
                  Implementamos medidas técnicas, administrativas y físicas para
                  proteger tus datos personales contra pérdida, uso indebido,
                  acceso no autorizado, divulgación o alteración:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong className="text-white">Cifrado HTTPS:</strong> Todas
                    las comunicaciones entre tu navegador y nuestro servidor
                    están cifradas con SSL/TLS
                  </li>
                  <li>
                    <strong className="text-white">
                      Almacenamiento seguro:
                    </strong>{" "}
                    Los datos se almacenan en servidores con protección de
                    acceso y respaldos regulares
                  </li>
                  <li>
                    <strong className="text-white">Acceso restringido:</strong>{" "}
                    Solo personal autorizado tiene acceso a tus datos personales
                  </li>
                  <li>
                    <strong className="text-white">Monitoreo continuo:</strong>{" "}
                    Supervisamos nuestros sistemas para detectar
                    vulnerabilidades y ataques
                  </li>
                </ul>
              </section>

              {/* 8. Retención */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  8. Tiempo de Retención de Datos
                </h2>
                <p>
                  Conservaremos tus datos personales únicamente durante el
                  tiempo necesario para cumplir con las finalidades descritas,
                  salvo que la ley exija o permita un período de retención más
                  prolongado.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                  <li>
                    <strong className="text-white">
                      Consultas sin contratación:
                    </strong>{" "}
                    1 año desde la última comunicación
                  </li>
                  <li>
                    <strong className="text-white">
                      Clientes con proyectos activos:
                    </strong>{" "}
                    Durante la vigencia del proyecto + 5 años (conforme a
                    obligaciones fiscales y comerciales)
                  </li>
                </ul>
                <p className="mt-3">
                  Una vez cumplido el plazo de retención, procederemos a
                  eliminar o anonimizar tus datos de forma segura.
                </p>
              </section>

              {/* 9. Cookies */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  9. Uso de Cookies
                </h2>
                <p className="mb-3">
                  Este sitio web utiliza cookies y tecnologías similares para
                  mejorar tu experiencia de navegación y analizar el tráfico del
                  sitio. Para más información, consulta nuestra{" "}
                  <Link
                    href="/cookies"
                    className="text-accent hover:text-accent-hover underline font-semibold"
                  >
                    Política de Cookies
                  </Link>
                  .
                </p>
              </section>

              {/* 10. Cambios */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  10. Modificaciones a esta Política
                </h2>
                <p>
                  Nos reservamos el derecho de actualizar esta Política de
                  Privacidad en cualquier momento para reflejar cambios en
                  nuestras prácticas de tratamiento de datos o en la legislación
                  aplicable. Cualquier modificación será publicada en esta
                  página con la fecha de actualización correspondiente.
                </p>
                <p className="mt-3">
                  Te recomendamos revisar periódicamente esta política para
                  estar informado sobre cómo protegemos tu información personal.
                </p>
              </section>

              {/* 11. Contacto */}
              <section>
                <h2 className="text-2xl text-accent font-semibold mb-3">
                  11. Contacto
                </h2>
                <p className="mb-3">
                  Si tienes preguntas, inquietudes o deseas ejercer tus derechos
                  sobre tus datos personales, no dudes en contactarnos:
                </p>
                <div className="p-4 bg-primary/50 rounded-lg border border-accent/20">
                  <p className="mb-2">
                    <strong className="text-white">Responsable:</strong> Mario
                    Hernandez
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

              {/* Footer */}
              <footer className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-white/60">
                <p>
                  Al utilizar este sitio web y proporcionar tus datos
                  personales, confirmas que has leído, entendido y aceptado esta
                  Política de Privacidad conforme a la Ley 1581 de 2012 de
                  Colombia.
                </p>
              </footer>
            </article>
          </div>
        </div>
      </motion.section>
    </RootLayout>
  );
};

export default Privacy;
