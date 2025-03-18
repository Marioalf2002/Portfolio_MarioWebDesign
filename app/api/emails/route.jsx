import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

let lastEmailSentAt = {};

export async function POST(request) {
  try {
    const { firstname, lastname, email, phone, service, message } =
      await request.json();

    // Verificar si hay campos vacíos o sospechosos
    if (!firstname || !email || !message) {
      throw new Error("Los campos nombre, email & mensaje son obligatorios.");
    }

    // Comprobar si ha pasado suficiente tiempo desde el último correo electrónico enviado
    const now = Date.now();
    const thirtyMinutes = 30 * 60 * 1000; // 30 minutos en milisegundos
    if (
      lastEmailSentAt[email] &&
      now - lastEmailSentAt[email] < thirtyMinutes
    ) {
      throw new Error(
        "Has alcanzado el límite de envío de correos. Por favor, intenta de nuevo más tarde despues de 30 minutos. En caso de colocar mal tus datos, por favor responde el correo con la corrección."
      );
    }

    // Crear HTML directamente sin usar componentes React
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contacto desde MarioWebDesign</title>
        </head>
        <body style="background-color: white; margin: auto; font-family: sans-serif; padding: 8px;">
          <div style="border: 1px solid #dc2626; border-radius: 12px; margin: 40px auto; padding: 20px; max-width: 465px;">
            <div style="margin-top: 4px; text-align: center;">
              <img src="https://github.com/Marioalf2002/Marioalf2002/raw/main/img/banner_logo.png" width="600" height="300" alt="Logo" style="margin: 0 auto; border-radius: 12px;">
            </div>
            <div>
              <p style="color: black; font-size: 14px; line-height: 24px;">
                ¡Hola ${firstname} ${lastname}!
              </p>
              <p style="color: black; font-size: 14px; line-height: 24px;">
                Gracias por ponerte en contacto con nosotros. Nos sentimos
                honrados de recibir tu mensaje, te responderemos lo más pronto
                posible.
              </p>
              <p style="color: black; font-size: 14px; line-height: 24px;">
                Si tienes alguna pregunta adicional, no dudes en responder a
                este correo. Estamos aquí para ayudarte.
              </p>
              <p style="color: black; font-size: 14px; line-height: 24px;">
                A continuación, te compartimos la información que nos
                proporcionaste, por favor revísela y asegúrate de que sea
                correcta de lo contrario, no dudes en responder a este correo
                con la corrección:
              </p>
              <p style="color: black; font-size: 14px; line-height: 24px;">
                <span style="font-weight: 600;">Telefono:</span> 
                ${phone || "No proporcionado"}
              </p>
              <p style="color: black; font-size: 14px; line-height: 24px;">
                <span style="font-weight: 600;">Correo:</span> ${email}
              </p>
              <p style="color: black; font-size: 14px; line-height: 24px;">
                <span style="font-weight: 600;">Servicio Requerido: </span>
                ${service || "No especificado"}
              </p>
              <p style="color: black; font-size: 14px; line-height: 24px;">
                <span style="font-weight: 600;">Mensaje:</span> ${message}
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    await resend.emails.send({
      from: "MarioWebDesign <contacto@mariowebdesigns.com>",
      to: [email, "contacto@mariowebdesigns.com"],
      subject: `Contacto de ${firstname} ${lastname} para MarioWebDesign`,
      html: htmlContent,
    });

    // Actualizar la hora del último correo electrónico enviado
    lastEmailSentAt[email] = now;

    return new Response(JSON.stringify({ status: "success" }), { status: 200 });
  } catch (error) {
    console.error("Error al enviar el correo:", error.message);
    return new Response(
      JSON.stringify({ status: "error", message: error.message }),
      { status: 500 }
    );
  }
}
