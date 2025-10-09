/**
 * Componente para agregar Structured Data (JSON-LD) según Schema.org
 * Mejora el SEO y permite rich snippets en Google
 */

export default function StructuredData({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Schemas predefinidos para cada página

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mario Hernández",
  jobTitle: "Desarrollador Web Full-Stack",
  description:
    "Desarrollador Web Full-Stack con +5 años de experiencia especializado en Next.js, React, Node.js, y tecnologías modernas",
  url: "https://mariowebdesign.vercel.app",
  image: "https://mariowebdesign.vercel.app/opengraph-image.png",
  email: "marioalf200216@gmail.com",
  telephone: "+573247773515",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sabaneta",
    addressRegion: "Antioquia",
    addressCountry: "CO",
  },
  sameAs: [
    "https://github.com/Marioalf2002",
    "https://linkedin.com/in/mariohernandez",
    "https://wa.me/573247773515",
  ],
  knowsAbout: [
    "Desarrollo Web",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Laravel",
    "PostgreSQL",
    "MongoDB",
    "SEO",
    "Full-Stack Development",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Institución Universitaria Pascual Bravo",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MarioWebDesign",
  description:
    "Portafolio profesional de Mario Hernández - Desarrollador Web Full-Stack",
  url: "https://mariowebdesign.vercel.app",
  author: {
    "@type": "Person",
    name: "Mario Hernández",
  },
  potentialAction: {
    "@type": "SearchAction",
    target:
      "https://mariowebdesign.vercel.app/work?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MarioWebDesign - Servicios de Desarrollo Web",
  description:
    "Servicios profesionales de desarrollo web: Full-Stack, SEO, mantenimiento y soporte técnico",
  url: "https://mariowebdesign.vercel.app/services",
  provider: {
    "@type": "Person",
    name: "Mario Hernández",
  },
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  serviceType: [
    "Desarrollo Web",
    "Desarrollo Full-Stack",
    "SEO",
    "Mantenimiento Web",
  ],
};

export const servicesOfferedSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Desarrollo Web Personalizado",
    description:
      "Diseño y desarrollo personalizado de interfaces de usuario y experiencias de usuario envolventes, utilizando tecnologías modernas y escalables",
    provider: {
      "@type": "Person",
      name: "Mario Hernández",
    },
    serviceType: "Desarrollo Web",
    areaServed: "Colombia",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Desarrollo Full-Stack",
    description:
      "Desarrollo integral de aplicaciones web desde el frontend hasta el backend, ofreciendo soluciones completas adaptadas a las necesidades del cliente",
    provider: {
      "@type": "Person",
      name: "Mario Hernández",
    },
    serviceType: "Full-Stack Development",
    areaServed: "Colombia",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Optimización SEO",
    description:
      "Optimización de sitios web para mejorar su visibilidad y posicionamiento en motores de búsqueda mediante estrategias probadas",
    provider: {
      "@type": "Person",
      name: "Mario Hernández",
    },
    serviceType: "SEO",
    areaServed: "Colombia",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mantenimiento Web",
    description:
      "Servicio de mantenimiento continuo de sitios web, asegurando funcionamiento óptimo, seguridad y estabilidad",
    provider: {
      "@type": "Person",
      name: "Mario Hernández",
    },
    serviceType: "Mantenimiento Web",
    areaServed: "Colombia",
  },
];

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto - MarioWebDesign",
  description: "Contacta a Mario Hernández para tu proyecto de desarrollo web",
  url: "https://mariowebdesign.vercel.app/contact",
  mainEntity: {
    "@type": "Person",
    name: "Mario Hernández",
    email: "marioalf200216@gmail.com",
    telephone: "+573247773515",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+573247773515",
      contactType: "Customer Service",
      email: "marioalf200216@gmail.com",
      availableLanguage: ["Spanish", "English"],
      areaServed: "CO",
    },
  },
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
