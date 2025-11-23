import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import React from "react";

const Contact = ({ formData }) => {
  const { firstname, lastname, email, phone, service, message } = formData;

  return (
    <Html>
      <Head />
      <Preview>
        ¡Gracias por contactarnos, {firstname} {lastname}!
      </Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#dc2626] rounded-xl my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-1">
              <Img
                src="https://github.com/Marioalf2002/Marioalf2002/raw/main/img/banner_logo.png"
                width="600"
                height="300"
                alt="Logo"
                className="my-0 mx-auto rounded-xl"
              />
            </Section>
            <Section>
              <Text className="text-black text-[14px] leading-[24px]">
                ¡Hola {firstname} {lastname}!
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                Gracias por ponerte en contacto con nosotros. Nos sentimos
                honrados de recibir tu mensaje, te responderemos lo más pronto
                posible.
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                Si tienes alguna pregunta adicional, no dudes en responder a
                este correo. Estamos aquí para ayudarte.
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                A continuación, te compartimos la información que nos
                proporcionaste, por favor revísela y asegúrate de que sea
                correcta de lo contrario, no dudes en responder a este correo
                con la corrección:
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <span className="font-semibold">Telefono:</span>{" "}
                {phone || "No proporcionado"}
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <span className="font-semibold">Correo:</span> {email}
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <span className="font-semibold">Servicio Requerido: </span>
                {service || "No especificado"}
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <span className="font-semibold">Mensaje:</span> {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Contact;
