export const seo = {
  site: {
    name: "Dharma Pediatría - Dra. Amalia Luque",
    url: "https://pediatria-web.vercel.app",
    locale: "es_PE",
    language: "es",
    languageAlternate: "en"
  },
  meta: {
    title: {
      default: "Dharma Pediatría | Dra. Amalia Luque | Pediatría de Vanguardia en Ayacucho",
      home: "Dharma Pediatría | Cuidado Integral y Especializado en Ayacucho - Dra. Amalia Luque",
      services: "Servicios Pediátricos Especializados | Control y Desarrollo | Dharma",
      contact: "Agenda tu Cita Pediátrica | Contacto | Dharma Pediatría"
    },
    description: {
      default: "Dharma Pediatría: Medicina pediátrica de vanguardia con la Dra. Amalia Luque. Especialistas en crecimiento, desarrollo y bienestar infantil integral en Ayacucho.",
      home: "Líderes en pediatría especializada en Ayacucho. En Dharma Pediatría ofrecemos control de niño sano, neonatología y tratamientos avanzados con calidez y ciencia.",
      services: "Descubre nuestros servicios: Control de crecimiento (CRED), vacunación, nutrición pediátrica y atención de enfermedades agudas con tecnología médica.",
      contact: "Solicita una consulta en Dharma Pediatría. Atención profesional para tus hijos en el corazón de Ayacucho. Tu pediatra de confianza."
    },
    keywords: [
      "dharma pediatria",
      "pediatria dharma ayacucho",
      "dra amalia luque huancapaza",
      "pediatra en ayacucho",
      "clinica pediatrica huamanga",
      "control de crecimiento y desarrollo cred",
      "neonatologia ayacucho",
      "mejor pediatra ayacucho",
      "medicina infantil de vanguardia",
      "vacunas para niños ayacucho",
      "bienestar infantil",
      "pediatria integral"
    ],
    author: "Dra. Amalia Luque Huancapaza - Dharma Pediatría",
    publisher: "Dharma Pediatría",
    copyright: `© ${new Date().getFullYear()} Dharma Pediatría. Todos los derechos reservados.`,
    robots: {
      index: true,
      follow: true,
      noarchive: false,
      nosnippet: false,
      noimageindex: false
    }
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    localeAlternate: ["en_US"], 
    siteName: "Dharma Pediatría",
    ogImage: "/og-image-dharma.jpg" 
  },
  twitter: {
    card: "summary_large_image",
    site: "@dharmapediatria",
    creator: "@draamalialuque"
  },
  schema: {
    organization: {
      name: "Dharma Pediatría",
      url: "https://pediatria-web.vercel.app",
      logo: "https://pediatria-web.vercel.app/icon.png",
      description: "Centro pediátrico de vanguardia especializado en la salud integral infantil en Ayacucho.",
      sameAs: [
        "https://facebook.com/dharmapediatria",
        "https://instagram.com/dharmapediatria"
      ]
    },
    medicalBusiness: {
      name: "Dharma Pediatría - Dra. Amalia Luque",
      description: "Clínica pediátrica especializada bajo la dirección de la Dra. Amalia Luque. Cuidado avanzado en pediatría y neonatología.",
      priceRange: "$$",
      paymentAccepted: ["Cash", "Credit Card", "Yape", "Plin"],
      currenciesAccepted: "PEN",
      medicalSpecialty: "Pediatrics",
      address: {
        "@type": "PostalAddress",
        "streetAddress": "Av. Independencia 123", // Cambiar por la real
        "addressLocality": "Huamanga",
        "addressRegion": "Ayacucho",
        "addressCountry": "PE"
      }
    }
  },
  sitemap: {
    priority: {
      home: "1.0",
      services: "0.9",
      contact: "0.8"
    },
    changefreq: {
      home: "weekly",
      services: "monthly",
      contact: "monthly"
    }
  }
};