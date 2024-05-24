import React from "react";
import Contact from "@/emails/Contact";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { firstname, lastname, email, phone, service, message } =
      await request.json();

    await resend.emails.send({
      from: "MarioWebDesign <contacto@mariowebdesigns.com>",
      to: [email, "contacto@mariowebdesigns.com"],
      subject: `Contacto de ${firstname} ${lastname} para MarioWebDesign`,
      react: (
        <Contact
          formData={{ firstname, lastname, email, phone, service, message }}
        />
      ),
    });

    return new Response(JSON.stringify({ status: "success" }), { status: 200 });
  } catch (error) {
    console.error("Error al enviar el correo:", error.message);
    return new Response(
      JSON.stringify({ status: "error", message: error.message }),
      { status: 500 }
    );
  }
}
