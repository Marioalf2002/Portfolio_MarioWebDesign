import { renderAsync } from "@react-email/components";
import Contact from "@/emails/Contact";
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

    // Renderizar el componente Contact a HTML
    const contactComponent = Contact({
      formData: { firstname, lastname, email, phone, service, message },
    });

    const html = await renderAsync(contactComponent);

    await resend.emails.send({
      from: "MarioWebDesign <contacto@mariowebdesigns.com>",
      to: [email, "contacto@mariowebdesigns.com"],
      subject: `Contacto de ${firstname} ${lastname} para MarioWebDesign`,
      html: html,
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
