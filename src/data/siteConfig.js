const whatsappNumber = "51997307782"; // Número de WhatsApp con código de país (Perú: +51)
const clinicName = "Clínica Pediátrica";

export const siteConfig = {
  // Información Básica
  name: clinicName,
  tagline: "Especialistas en la salud y bienestar de tus hijos en Ayacucho",
  siteUrl: "https://clinicapediatrica.com", // Añadí esto: URL base de tu sitio

  // Contacto Directo
  contact: {
    whatsapp: whatsappNumber,
    phone: "(066) 234 567", // Prefijo 066 de Ayacucho
    email: "jhonbeck860@gmail.com",
    whatsappUrl: `https://wa.me/${whatsappNumber}?text=Hola%2C%20deseo%20agendar%20una%20cita%20m%C3%A9dica%20en%20Huamanga`,
  },

  // Ubicación y Mapas
  location: {
    address: "Av. Arenales 123",
    district: "San Juan Bautista",
    city: "Huamanga",
    country: "Perú",
    fullAddress:
      "Av. Arenales 123, San Juan Bautista, Huamanga, Ayacucho, Perú",
    // Link directo para que el usuario abra Google Maps en su celular
    googleMapsLink: "https://maps.app.goo.gl/3wAAb2H3X8Y2H7r79",
    // URL del iframe (El src que pasaste en el iframe anterior)
    // En tu src/data/siteConfig.ts modifica esta línea:
    iframeUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.922114757053!2d-74.2327429!3d-13.1637775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91127e36692f8081%3A0x104446b744009ef!2sSan%20Juan%20Bautista%2C%20Ayacucho!5e0!3m2!1ses!2spe!4v1710000000000!5m2!1ses!2spe",
  },

  // Horarios (Para usarlos en Footer y Contacto)
  schedule: {
    weekdays: "Lunes a Viernes: 08:00 AM - 08:00 PM",
    saturdays: "Sábados: 09:00 AM - 02:00 PM",
    emergencies: "Emergencias: 24 Horas",
  },

  // Redes Sociales
  socials: {
    facebook: "https://facebook.com/clinica",
    instagram: "https://instagram.com/clinica",
    linkedin: "https://linkedin.com/company/clinica",
    tiktok: "https://tiktok.com/@clinica",
  },

  // SEO Global (Para los meta tags de tu Layout)
  seo: {
    description:
      "Atención pediátrica especializada con tecnología de vanguardia en Huamanga, Ayacucho. Crecimiento, desarrollo y emergencias 24h.",
    keywords: [
      "pediatría",
      "clínica infantil",
      "vacunas",
      "emergencias pediátricas",
      "Huamanga",
      "Ayacucho",
      "San Juan Bautista",
    ],
    ogImage: "/images/og-image.jpg", // Imagen que sale cuando compartes por WhatsApp
  },
};