import { f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, e as createAstro, h as addAttribute, o as renderSlot, p as renderHead, u as unescapeHTML } from './astro/server_CymLUfwh.mjs';
import 'piccolore';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
/* empty css                          */
import 'clsx';

const whatsappNumber = "51997307782"; // Número de WhatsApp con código de país (Perú: +51)
const clinicName = "Clínica Pediátrica";

const siteConfig = {
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
    weekdays: "Lunes a Viernes: 08:00 AM - 08:00 PM"},

  // Redes Sociales
  socials: {
    facebook: "https://facebook.com/clinica",
    instagram: "https://instagram.com/clinica",
    linkedin: "https://linkedin.com/company/clinica"},

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

// Services data for the pediatric clinic
const services = [
  {
    slug: "control-crecimiento",
    title: "Control de Crecimiento",
    category: "Crecimiento",
    shortDesc: "Evaluación integral del desarrollo psicomotor para asegurar un crecimiento saludable desde el primer mes.",

    fullDesc: "El control de crecimiento y desarrollo es fundamental para monitorear la salud integral de los niños. Nuestro servicio incluye evaluaciones periódicas que permiten detectar oportunamente cualquier alteración en el crecimiento físico, motor, cognitivo o emocional.",
    image: "/images/service-growth.jpg",
    icon: "baby",
    color: "green",
    features: [
      "Evaluación antropométrica completa (peso, talla, perímetro cefálico)",
      "Gráficas de crecimiento percentilares",
      "Evaluación del desarrollo psicomotor",
      "Detección temprana de trastornos del crecimiento",
      "Asesoría nutricional personalizada",
      "Seguimiento de hitos del desarrollo"
    ],
    benefits: [
      "Detección temprana de problemas de crecimiento",
      "Prevención de complicaciones a largo plazo",
      "Tranquilidad para los padres",
      "Plan de cuidado personalizado",
      "Seguimiento continuo del desarrollo"
    ],
    process: [
      {
        step: 1,
        title: "Evaluación Inicial",
        desc: "Realizamos una evaluación completa del estado actual del niño, incluyendo medidas antropométricas y evaluación del desarrollo."
      },
      {
        step: 2,
        title: "Análisis de Resultados",
        desc: "Analizamos los resultados comparándolos con las curvas de crecimiento estándar y evaluamos el progreso."
      },
      {
        step: 3,
        title: "Plan de Seguimiento",
        desc: "Establecemos un plan de seguimiento personalizado con fechas de control y recomendaciones específicas."
      },
      {
        step: 4,
        title: "Controles Periódicos",
        desc: "Realizamos controles periódicos para monitorear el progreso y ajustar el plan según sea necesario."
      }
    ],
    faq: [
      {
        question: "¿Con qué frecuencia debe realizarse el control de crecimiento?",
        answer: "Durante el primer año de vida, se recomienda realizar controles mensuales. Entre el año y los 2 años, cada 2-3 meses. Después de los 2 años, controles semestrales o anuales según la indicación médica."
      },
      {
        question: "¿Qué pasa si mi hijo no sigue la curva de crecimiento normal?",
        answer: "Si detectamos desviaciones en la curva de crecimiento, realizamos evaluaciones adicionales para determinar la causa y establecer un plan de tratamiento oportuno."
      },
      {
        question: "¿El control incluye evaluación del desarrollo mental?",
        answer: "Sí, nuestro control integral incluye evaluación del desarrollo cognitivo, motor, del lenguaje y socio-emocional."
      }
    ],
    price: "Desde S/ 80.00",
    duration: "30-45 minutos",
    schedule: "Lunes a Sábado",
    doctor: "Dr. Ricardo Santos"
  },
  {
    slug: "vacunacion-integral",
    title: "Vacunación Integral",
    category: "Vacunación",
    shortDesc: "Disponemos de todos los esquemas de vacunación nacionales e internacionales en un ambiente seguro.",

    fullDesc: "La vacunación es la herramienta más efectiva para prevenir enfermedades infecciosas. Contamos con un completo esquema de vacunación que sigue estrictamente las recomendaciones del Ministerio de Salud y la OMS.",
    image: "/images/service-vaccine.jpg",
    icon: "syringe",
    color: "blue",
    features: [
      "Esquema completo de vacunación nacional",
      "Vacunas internacionales disponibles",
      "Control de carné de vacunación",
      "Recordatorio de próximas dosis",
      "Ambiente seguro y esterilizado",
      "Personal capacitado en administración de vacunas"
    ],
    benefits: [
      "Protección contra enfermedades prevenibles",
      "Inmunidad colectiva para la comunidad",
      "Prevención de complicaciones graves",
      "Certificación internacional disponible",
      "Tranquilidad para toda la familia"
    ],
    process: [
      {
        step: 1,
        title: "Evaluación Pre-vacunación",
        desc: "Evaluamos el estado de salud del niño y revisamos el carné de vacunación para determinar las vacunas pendientes."
      },
      {
        step: 2,
        title: "Administración de Vacunas",
        desc: "Aplicamos las vacunas correspondientes siguiendo todos los protocolos de bioseguridad."
      },
      {
        step: 3,
        title: "Observación Post-vacunación",
        desc: "Mantenemos al niño en observación durante 15-30 minutos para detectar cualquier reacción adversa inmediata."
      },
      {
        step: 4,
        title: "Registro y Seguimiento",
        desc: "Actualizamos el carné de vacunación y programamos las próximas dosis correspondientes."
      }
    ],
    faq: [
      {
        question: "¿Las vacunas son seguras?",
        answer: "Sí, todas las vacunas utilizadas están aprobadas por el Ministerio de Salud y la OMS. Los beneficios de la vacunación superan ampliamente los riesgos mínimos de efectos secundarios."
      },
      {
        question: "¿Puedo vacunar a mi hijo si está resfriado?",
        answer: "Las vacunas pueden aplicarse con un resfriado leve sin fiebre. Si el niño tiene fiebre o una enfermedad más grave, se recomienda posponer la vacunación."
      },
      {
        question: "¿Tienen vacunas para viajes internacionales?",
        answer: "Sí, contamos con vacunas internacionales y emitimos certificados de vacunación válidos para viajes al extranjero."
      }
    ],
    price: "Desde S/ 40.00",
    duration: "20-30 minutos",
    schedule: "Lunes a Sábado",
    doctor: "Dra. Elena Martínez"
  },
  {
    slug: "nutricion-infantil",
    title: "Nutrición Infantil",
    category: "Nutrición",
    shortDesc: "Asesoría especializada en lactancia y alimentación complementaria para un desarrollo óptimo.",

    fullDesc: "La nutrición adecuada es fundamental para el crecimiento y desarrollo saludable de los niños. Nuestro servicio de nutrición infantil ofrece asesoría personalizada para cada etapa del desarrollo.",
    image: "/images/service-nutrition.jpg",
    icon: "apple",
    color: "yellow",
    features: [
      "Asesoría en lactancia materna",
      "Introducción de alimentación complementaria",
      "Plan nutricional personalizado",
      "Manejo de alergias alimentarias",
      "Control de peso y talla",
      "Talleres de nutrición para padres"
    ],
    benefits: [
      "Hábitos alimentarios saludables desde temprana edad",
      "Prevención de obesidad infantil",
      "Desarrollo óptimo del niño",
      "Solución de problemas de alimentación",
      "Tranquilidad para los padres"
    ],
    process: [
      {
        step: 1,
        title: "Evaluación Nutricional",
        desc: "Realizamos una evaluación completa del estado nutricional, hábitos alimentarios y antecedentes familiares."
      },
      {
        step: 2,
        title: "Plan Alimentario",
        desc: "Diseñamos un plan alimentario personalizado según la edad, necesidades y preferencias del niño."
      },
      {
        step: 3,
        title: "Educación Nutricional",
        desc: "Brindamos educación a los padres sobre hábitos alimentarios saludables y técnicas de alimentación."
      },
      {
        step: 4,
        title: "Seguimiento",
        desc: "Realizamos controles periódicos para evaluar el progreso y ajustar el plan según sea necesario."
      }
    ],
    faq: [
      {
        question: "¿Cuándo debo iniciar la alimentación complementaria?",
        answer: "La OMS recomienda iniciar la alimentación complementaria a los 6 meses de edad, manteniendo la lactancia materna hasta los 2 años o más."
      },
      {
        question: "¿Cómo sé si mi hijo está comiendo lo suficiente?",
        answer: "Durante la consulta evaluamos el crecimiento, el desarrollo y los hábitos alimentarios para determinar si la nutrición es adecuada."
      },
      {
        question: "¿Atienden casos de niños quisquillosos con la comida?",
        answer: "Sí, tenemos experiencia en manejar niños selectivos con la comida y ofrecemos estrategias para ampliar su repertorio alimentario."
      }
    ],
    price: "Desde S/ 100.00",
    duration: "45-60 minutos",
    schedule: "Lunes a Viernes",
    doctor: "Dr. Ricardo Santos"
  },
  {
    slug: "atencion-recien-nacidos",
    title: "Atención de Recién Nacidos",
    category: "Recién Nacidos",
    shortDesc: "Cuidado experto y preventivo diseñado para los primeros y más importantes días de vida de tu bebé.",

    fullDesc: "Los primeros días de vida son cruciales para la adaptación del bebé al mundo exterior. Ofrecemos atención especializada y cuidados preventivos para garantizar el mejor inicio de vida.",
    image: "/images/service-newborn.jpg",
    icon: "heart-pulse",
    color: "pink",
    features: [
      "Evaluación neonatal completa",
      "Tamizaje neonatal",
      "Control del cordón umbilical",
      "Asesoría en lactancia",
      "Control de ictericia",
      "Seguimiento del peso y crecimiento"
    ],
    benefits: [
      "Detección temprana de problemas de salud",
      "Apoyo en la adaptación a la paternidad",
      "Prevención de complicaciones",
      "Tranquilidad para los padres primerizos",
      "Vínculo saludable padres-hijo"
    ],
    process: [
      {
        step: 1,
        title: "Evaluación Inicial",
        desc: "Realizamos una evaluación completa del recién nacido incluyendo examen físico, reflejos y tamizajes."
      },
      {
        step: 2,
        title: "Educación a Padres",
        desc: "Brindamos educación sobre cuidados básicos: alimentación, higiene, sueño y señales de alarma."
      },
      {
        step: 3,
        title: "Controles de Seguimiento",
        desc: "Programamos controles frecuentes durante las primeras semanas para monitorear el crecimiento y desarrollo."
      },
      {
        step: 4,
        title: "Apoyo Continuo",
        desc: "Ofrecemos línea de consulta para resolver dudas y apoyo en la lactancia materna."
      }
    ],
    faq: [
      {
        question: "¿Con qué frecuencia debo llevar a mi recién nacido al médico?",
        answer: "Durante el primer mes, se recomienda controles semanales o cada 15 días. Después, según la indicación médica."
      },
      {
        question: "¿Qué incluye el tamizaje neonatal?",
        answer: "El tamizaje incluye pruebas para detectar enfermedades metabólicas, endocrinas y otros trastornos que pueden tratarse si se detectan temprano."
      },
      {
        question: "¿Atienden emergencias con recién nacidos?",
        answer: "Sí, contamos con atención de urgencias especializada para recién nacidos las 24 horas."
      }
    ],
    price: "Desde S/ 120.00",
    duration: "45-60 minutos",
    schedule: "Lunes a Domingo (24h)",
    doctor: "Dra. Elena Martínez"
  },
  {
    slug: "psicologia-infantil",
    title: "Psicología Infantil",
    category: "Psicología",
    shortDesc: "Apoyo profesional enfocado en el bienestar emocional y el desarrollo conductual saludable.",

    fullDesc: "La salud mental infantil es tan importante como la salud física. Nuestro servicio de psicología infantil ofrece evaluación y tratamiento de problemas emocionales, conductuales y del desarrollo.",
    image: "/images/service-psychology.jpg",
    icon: "brain",
    color: "purple",
    features: [
      "Evaluación psicológica integral",
      "Terapia individual infantil",
      "Terapia familiar",
      "Manejo de problemas de conducta",
      "Apoyo en trastornos del desarrollo",
      "Orientación a padres"
    ],
    benefits: [
      "Desarrollo emocional saludable",
      "Mejora en las relaciones familiares",
      "Herramientas para manejar emociones",
      "Detección temprana de dificultades",
      "Mejor calidad de vida para toda la familia"
    ],
    process: [
      {
        step: 1,
        title: "Evaluación Inicial",
        desc: "Realizamos una evaluación completa del desarrollo emocional, conductual y social del niño."
      },
      {
        step: 2,
        title: "Diagnóstico",
        desc: "Establecemos un diagnóstico preciso y explicamos a los padres la situación y opciones de tratamiento."
      },
      {
        step: 3,
        title: "Plan de Intervención",
        desc: "Diseñamos un plan de intervención personalizado que puede incluir terapia individual, familiar o orientación parental."
      },
      {
        step: 4,
        title: "Seguimiento Terapéutico",
        desc: "Realizamos sesiones de seguimiento para evaluar el progreso y ajustar el tratamiento según sea necesario."
      }
    ],
    faq: [
      {
        question: "¿Cómo sé si mi hijo necesita ayuda psicológica?",
        answer: "Algunas señales incluyen: cambios persistentes en el comportamiento, dificultades para socializar, regresiones en el desarrollo, o problemas emocionales que afectan el día a día."
      },
      {
        question: "¿A qué edad pueden iniciar la terapia?",
        answer: "La terapia puede iniciarse desde muy temprana edad, incluso en bebés, adaptando las técnicas según la edad y necesidades del niño."
      },
      {
        question: "¿Los padres participan en la terapia?",
        answer: "Sí, la participación de los padres es fundamental. Dependiendo del caso, pueden participar en sesiones familiares o recibir orientación parental."
      }
    ],
    price: "Desde S/ 100.00",
    duration: "50-60 minutos",
    schedule: "Lunes a Sábado",
    doctor: "Dr. Carlos Ruiz"
  },
  {
    slug: "nebulizaciones",
    title: "Nebulizaciones",
    category: "Respiratorio",
    shortDesc: "Equipamiento de última generación para el tratamiento inmediato de cuadros respiratorios y asma.",

    fullDesc: "Contamos con equipos modernos de nebulización para el tratamiento efectivo de problemas respiratorios en niños. Ofrecemos un ambiente cómodo y seguro para las sesiones de nebulización.",
    image: "/images/service-nebulization.jpg",
    icon: "wind",
    color: "teal",
    features: [
      "Equipos de nebulización modernos",
      "Medicamentos de calidad",
      "Ambiente cómodo y seguro",
      "Monitoreo durante la sesión",
      "Personal capacitado",
      "Disponibilidad inmediata"
    ],
    benefits: [
      "Alivio rápido de síntomas respiratorios",
      "Administración efectiva de medicamentos",
      "Ambiente tranquilo para el niño",
      "Atención sin cita previa para urgencias",
      "Seguimiento del tratamiento"
    ],
    process: [
      {
        step: 1,
        title: "Evaluación",
        desc: "Evaluamos el estado respiratorio del niño y determinamos el medicamento y frecuencia adecuados."
      },
      {
        step: 2,
        title: "Preparación",
        desc: "Preparamos el medicamento y el equipo de nebulización, explicando el procedimiento al niño y padres."
      },
      {
        step: 3,
        title: "Nebulización",
        desc: "Realizamos la sesión de nebulización monitoreando constantemente al paciente."
      },
      {
        step: 4,
        title: "Evaluación Post-tratamiento",
        desc: "Evaluamos la respuesta al tratamiento y proporcionamos indicaciones para el cuidado en casa."
      }
    ],
    faq: [
      {
        question: "¿Qué es una nebulización y cuándo se necesita?",
        answer: "La nebulización es un método para administrar medicamentos directamente a los pulmones. Se usa en casos de asma, bronquitis, neumonía y otros problemas respiratorios."
      },
      {
        question: "¿Es doloroso el tratamiento?",
        answer: "No, la nebulización es indolora. El niño solo necesita respirar normalmente mientras recibe el medicamento en forma de vapor."
      },
      {
        question: "¿Cuánto dura una sesión de nebulización?",
        answer: "Cada sesión dura aproximadamente 10-15 minutos, dependiendo del medicamento y la condición del paciente."
      }
    ],
    price: "Desde S/ 30.00",
    duration: "15-20 minutos",
    schedule: "Lunes a Domingo (24h)",
    doctor: "Dr. Ricardo Santos"
  }
];

// Helper function to get a service by slug
function getServiceBySlug(slug) {
  return services.find(service => service.slug === slug);
}

// Helper function to get related services
function getRelatedServices(currentSlug, count = 3) {
  const currentService = getServiceBySlug(currentSlug);
  if (!currentService) return [];
  
  return services
    .filter(service => service.slug !== currentSlug)
    .slice(0, count);
}

const Icon$1 = ({ name, className = "w-4 h-4", ariaHidden = true, color }) => {
  const icons = {
    clock: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ jsx("polyline", { points: "12 6 12 12 16 14" })
    ] }),
    x: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("path", { d: "M18 6 6 18" }),
      /* @__PURE__ */ jsx("path", { d: "m6 6 12 12" })
    ] }),
    "trending-up": /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }),
      /* @__PURE__ */ jsx("polyline", { points: "16 7 22 7 22 13" })
    ] }),
    layers: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
      /* @__PURE__ */ jsx("polyline", { points: "2 17 12 22 22 17" }),
      /* @__PURE__ */ jsx("polyline", { points: "2 12 12 17 22 12" })
    ] }),
    stethoscope: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("path", { d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" }),
      /* @__PURE__ */ jsx("path", { d: "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" }),
      /* @__PURE__ */ jsx("circle", { cx: "20", cy: "10", r: "2" })
    ] }),
    "book-open": /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
      /* @__PURE__ */ jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
    ] }),
    "file-text": /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      /* @__PURE__ */ jsx("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }),
      /* @__PURE__ */ jsx("path", { d: "M10 9H8" }),
      /* @__PURE__ */ jsx("path", { d: "M16 13H8" }),
      /* @__PURE__ */ jsx("path", { d: "M16 17H8" })
    ] }),
    tag: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" }),
      /* @__PURE__ */ jsx("circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" })
    ] }),
    hash: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("line", { x1: "4", x2: "20", y1: "9", y2: "9" }),
      /* @__PURE__ */ jsx("line", { x1: "4", x2: "20", y1: "15", y2: "15" }),
      /* @__PURE__ */ jsx("line", { x1: "10", x2: "8", y1: "3", y2: "21" }),
      /* @__PURE__ */ jsx("line", { x1: "16", x2: "14", y1: "3", y2: "21" })
    ] }),
    "arrow-right": /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
      /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
    ] }),
    "search-x": /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("path", { d: "m13.5 8.5-5 5" }),
      /* @__PURE__ */ jsx("path", { d: "m8.5 8.5 5 5" }),
      /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ jsx("path", { d: "m21 21-4.3-4.3" })
    ] }),
    zap: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: /* @__PURE__ */ jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }) }),
    search: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": ariaHidden, children: [
      /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ jsx("path", { d: "m21 21-4.3-4.3" })
    ] })
  };
  const icon = icons[name] || icons.search;
  if (color) {
    return /* @__PURE__ */ jsx("span", { style: { color }, children: icon });
  }
  return icon;
};
function SearchSuggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchHistory, setSearchHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const suggestionsRef = useRef([]);
  const selectedIndexRef = useRef(-1);
  const isVisibleRef = useRef(false);
  const inputValueRef = useRef("");
  useEffect(() => {
    suggestionsRef.current = suggestions;
  }, [suggestions]);
  useEffect(() => {
    selectedIndexRef.current = selectedIndex;
  }, [selectedIndex]);
  useEffect(() => {
    isVisibleRef.current = isVisible;
  }, [isVisible]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("searchHistory");
        if (saved) {
          const parsed = JSON.parse(saved);
          const unique = parsed.filter(
            (item, index, self) => index === self.findIndex((t) => t.query === item.query)
          ).slice(0, 10);
          setSearchHistory(unique);
        }
      } catch (e) {
        console.error("Error loading search history:", e);
      }
    }
  }, []);
  const saveToHistory = (query) => {
    if (!query || query.length < 2) return;
    const newEntry = {
      query: query.trim(),
      timestamp: Date.now(),
      type: "history"
    };
    setSearchHistory((prev) => {
      const filtered = prev.filter((h) => h.query !== newEntry.query);
      const updated = [newEntry, ...filtered].slice(0, 10);
      if (typeof window !== "undefined") {
        localStorage.setItem("searchHistory", JSON.stringify(updated));
      }
      return updated;
    });
  };
  const getSearchData = () => {
    if (typeof window !== "undefined" && window.searchData) {
      return window.searchData;
    }
    return [];
  };
  const getPopularSearches = () => {
    return [
      { query: "vacunación", count: 150, type: "popular" },
      { query: "nutrición infantil", count: 120, type: "popular" },
      { query: "control de crecimiento", count: 95, type: "popular" },
      { query: "psicología", count: 80, type: "popular" },
      { query: "recién nacido", count: 75, type: "popular" }
    ];
  };
  const getTrendingSearches = () => {
    return [
      { query: "alergias", trend: "+25%", type: "trending" },
      { query: "desarrollo psicomotor", trend: "+15%", type: "trending" },
      { query: "alimentación complementaria", trend: "+12%", type: "trending" }
    ];
  };
  const expandWithSynonyms = (term) => {
    const synonyms = {
      "bebe": ["bebé", "recién nacido", "infante"],
      "vacuna": ["vacunación", "inmunización"],
      "medico": ["médico", "doctor", "pediatra"],
      "nutricion": ["nutrición", "alimentación"],
      "desarrollo": ["crecimiento", "evolución"]
    };
    const expanded = [term];
    for (const [key, values] of Object.entries(synonyms)) {
      if (term.toLowerCase().includes(key)) {
        expanded.push(...values);
      }
    }
    return expanded;
  };
  const generateSuggestions = (query) => {
    const searchTerm = query.toLowerCase().trim();
    const searchData = getSearchData();
    const expandedTerms = expandWithSynonyms(searchTerm);
    const scoredItems = searchData.map((item) => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const categoryLower = item.category ? item.category.toLowerCase() : "";
      for (const term of expandedTerms) {
        if (titleLower === term) score += 100;
        else if (titleLower.startsWith(term)) score += 80;
        else if (titleLower.includes(term)) score += 60;
        if (categoryLower.includes(term)) score += 30;
      }
      if (item.type === "service") score += 10;
      else if (item.type === "blog") score += 5;
      return { ...item, score };
    }).filter((item) => item.score > 0).sort((a, b) => b.score - a.score).slice(0, 12);
    const categorized = {
      exact: [],
      services: [],
      blogs: [],
      pages: [],
      categories: [],
      tags: []
    };
    const seen = /* @__PURE__ */ new Set();
    scoredItems.forEach((item) => {
      if (seen.has(item.title)) return;
      seen.add(item.title);
      const titleLower = item.title.toLowerCase();
      if (titleLower.includes(searchTerm)) {
        if (titleLower.startsWith(searchTerm)) {
          categorized.exact.push({ ...item, matchType: "exact" });
        } else {
          if (item.type === "service") categorized.services.push(item);
          else if (item.type === "blog") categorized.blogs.push(item);
          else categorized.pages.push(item);
        }
      }
      if (item.category && !seen.has(`cat:${item.category}`)) {
        const catLower = item.category.toLowerCase();
        if (expandedTerms.some((t) => catLower.includes(t))) {
          categorized.categories.push({
            title: item.category,
            type: "category",
            category: item.category,
            url: `/busqueda?category=${encodeURIComponent(item.category)}&q=${encodeURIComponent(query)}`,
            icon: "tag"
          });
          seen.add(`cat:${item.category}`);
        }
      }
      if (item.tags) {
        item.tags.forEach((tag) => {
          if (!seen.has(`tag:${tag}`) && expandedTerms.some((t) => tag.toLowerCase().includes(t))) {
            categorized.tags.push({
              title: tag,
              type: "tag",
              category: tag,
              url: `/busqueda?q=${encodeURIComponent(tag)}`,
              icon: "hash"
            });
            seen.add(`tag:${tag}`);
          }
        });
      }
    });
    let finalSuggestions = [];
    if (activeCategory === "all") {
      finalSuggestions = [
        ...categorized.exact.slice(0, 3),
        ...categorized.services.slice(0, 2),
        ...categorized.blogs.slice(0, 2),
        ...categorized.pages.slice(0, 2),
        ...categorized.categories.slice(0, 2),
        ...categorized.tags.slice(0, 2)
      ];
    } else if (activeCategory === "services") {
      finalSuggestions = categorized.services;
    } else if (activeCategory === "blogs") {
      finalSuggestions = categorized.blogs;
    } else if (activeCategory === "pages") {
      finalSuggestions = categorized.pages;
    }
    return finalSuggestions.map((item) => ({
      title: item.title,
      type: item.type,
      category: item.category,
      url: item.url,
      icon: getIconForType(item.type),
      matchType: item.matchType || "partial"
    }));
  };
  const getIconForType = (type) => {
    const icons = {
      page: "file-text",
      service: "stethoscope",
      blog: "book-open",
      category: "tag",
      tag: "hash",
      popular: "trending-up",
      trending: "zap",
      history: "clock"
    };
    return icons[type] || "search";
  };
  const highlightMatch = (text, query) => {
    if (!text || !query) return text;
    const expandedTerms = expandWithSynonyms(query.toLowerCase());
    let highlighted = text;
    for (const term of expandedTerms) {
      if (term.length < 2) continue;
      const regex = new RegExp(`(${escapeRegex(term)})`, "gi");
      highlighted = highlighted.replace(
        regex,
        '<mark class="bg-blue-50 text-blue-700 px-0.5 rounded">$1</mark>'
      );
    }
    return highlighted;
  };
  const escapeRegex = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };
  const handleSuggestionClick = (url, title) => {
    if (url) {
      saveToHistory(title || inputValueRef.current);
      window.location.href = url;
    }
  };
  useEffect(() => {
    if (typeof document === "undefined") return;
    const handleClickOutside = (e) => {
      const wrapper = document.getElementById("search-wrapper");
      if (wrapper && !wrapper.contains(e.target)) {
        setIsVisible(false);
        setSelectedIndex(-1);
        setShowHistory(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  useEffect(() => {
    window.searchSuggestions = {
      hide: () => {
        setIsVisible(false);
        setSelectedIndex(-1);
        setShowHistory(false);
      },
      show: () => {
        if (suggestionsRef.current.length > 0) {
          setIsVisible(true);
        }
      },
      clearHistory: () => {
        setSearchHistory([]);
        if (typeof window !== "undefined") {
          localStorage.removeItem("searchHistory");
        }
      }
    };
    return () => {
      delete window.searchSuggestions;
    };
  }, []);
  useEffect(() => {
    if (typeof document === "undefined") return;
    const searchInput = document.getElementById("search-input");
    if (!searchInput) return;
    const handleInput = (e) => {
      const query = e.target.value.trim();
      inputValueRef.current = query;
      if (!query || query.length < 2) {
        setSuggestions([]);
        setIsVisible(false);
        setSelectedIndex(-1);
        if (query.length === 0 && searchHistory.length > 0) {
          setShowHistory(true);
          setIsVisible(true);
        }
        return;
      }
      setShowHistory(false);
      const newSuggestions = generateSuggestions(query);
      setSuggestions(newSuggestions);
      setIsVisible(newSuggestions.length > 0);
      setSelectedIndex(-1);
    };
    const handleFocus = () => {
      const query = searchInput.value.trim();
      if (query.length === 0 && searchHistory.length > 0) {
        setShowHistory(true);
        setIsVisible(true);
      }
    };
    const handleKeyDown = (e) => {
      const currentSuggestions = suggestionsRef.current;
      const currentSelectedIndex = selectedIndexRef.current;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (!isVisibleRef.current && currentSuggestions.length > 0) {
          setIsVisible(true);
        }
        setSelectedIndex((prev) => {
          const newIndex = Math.min(prev + 1, currentSuggestions.length - 1);
          const element = document.querySelector(`[data-suggestion-index="${newIndex}"]`);
          if (element) {
            element.scrollIntoView({ block: "nearest", behavior: "smooth" });
          }
          return newIndex;
        });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => {
          const newIndex = Math.max(prev - 1, -1);
          const element = document.querySelector(`[data-suggestion-index="${newIndex}"]`);
          if (element) {
            element.scrollIntoView({ block: "nearest", behavior: "smooth" });
          }
          return newIndex;
        });
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (currentSelectedIndex >= 0 && currentSuggestions[currentSelectedIndex]) {
          const selected = currentSuggestions[currentSelectedIndex];
          saveToHistory(selected.title);
          window.location.href = selected.url;
        } else {
          saveToHistory(inputValueRef.current);
          const form = document.getElementById("search-form");
          if (form) form.submit();
        }
      } else if (e.key === "Escape") {
        setIsVisible(false);
        setSelectedIndex(-1);
        setShowHistory(false);
        searchInput.blur();
      } else if (e.key === "Tab" && isVisibleRef.current) {
        if (currentSuggestions.length > 0 && currentSelectedIndex === -1) {
          e.preventDefault();
          const firstSuggestion = currentSuggestions[0];
          searchInput.value = firstSuggestion.title;
          setIsVisible(false);
        }
      }
    };
    searchInput.addEventListener("input", handleInput);
    searchInput.addEventListener("focus", handleFocus);
    searchInput.addEventListener("keydown", handleKeyDown);
    return () => {
      searchInput.removeEventListener("input", handleInput);
      searchInput.removeEventListener("focus", handleFocus);
      searchInput.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchHistory, activeCategory]);
  const getCurrentInputValue = () => {
    if (typeof document === "undefined") return "";
    const searchInput = document.getElementById("search-input");
    return searchInput ? searchInput.value : "";
  };
  const renderHistory = () => {
    if (!showHistory || searchHistory.length === 0) return null;
    return /* @__PURE__ */ jsxs("div", { className: "suggestion-section", children: [
      /* @__PURE__ */ jsx("div", { className: "px-4 py-2 bg-gray-50 border-b border-gray-100", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-gray-500 uppercase tracking-wide", children: "Búsquedas recientes" }) }),
      searchHistory.map((item, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: `suggestion-item px-4 py-3 cursor-pointer border-b border-gray-100 last:border-0 ${index === selectedIndex ? "selected" : ""}`,
          onClick: () => handleSuggestionClick(`/busqueda?q=${encodeURIComponent(item.query)}`, item.query),
          onMouseEnter: () => setSelectedIndex(index),
          "data-suggestion-index": index,
          role: "option",
          "aria-selected": index === selectedIndex,
          style: {
            backgroundColor: index === selectedIndex ? "#E0F2FE" : "transparent",
            borderLeft: index === selectedIndex ? "3px solid #38BDF8" : "3px solid transparent"
          },
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 shrink-0", children: /* @__PURE__ */ jsx(Icon$1, { name: "clock", className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-900 truncate", children: item.query }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: new Date(item.timestamp).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "short",
                hour: "2-digit",
                minute: "2-digit"
              }) })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: (e) => {
                  e.stopPropagation();
                  const updated = searchHistory.filter((_, i) => i !== index);
                  setSearchHistory(updated);
                  localStorage.setItem("searchHistory", JSON.stringify(updated));
                },
                className: "p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-gray-600",
                "aria-label": "Eliminar de historial",
                children: /* @__PURE__ */ jsx(Icon$1, { name: "x", className: "w-4 h-4" })
              }
            )
          ] })
        },
        `history-${index}`
      )),
      /* @__PURE__ */ jsx("div", { className: "px-4 py-2 bg-gray-50 border-t border-gray-100", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setSearchHistory([]);
            localStorage.removeItem("searchHistory");
          },
          className: "text-xs text-gray-500 hover:text-blue-600 transition-colors",
          children: "Limpiar historial"
        }
      ) })
    ] });
  };
  const renderPopularSearches = () => {
    if (!showHistory) return null;
    const popular = getPopularSearches();
    return /* @__PURE__ */ jsxs("div", { className: "suggestion-section mt-2", children: [
      /* @__PURE__ */ jsx("div", { className: "px-4 py-2 bg-gray-50 border-b border-gray-100", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-gray-500 uppercase tracking-wide", children: "Búsquedas populares" }) }),
      /* @__PURE__ */ jsx("div", { className: "p-3 flex flex-wrap gap-2", children: popular.map((item, index) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => handleSuggestionClick(`/busqueda?q=${encodeURIComponent(item.query)}`, item.query),
          className: "px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full text-sm transition-colors flex items-center gap-1.5",
          children: [
            /* @__PURE__ */ jsx(Icon$1, { name: "trending-up", className: "w-3 h-3" }),
            item.query
          ]
        },
        `popular-${index}`
      )) })
    ] });
  };
  const renderCategoryTabs = () => {
    if (showHistory) return null;
    const categories = [
      { id: "all", label: "Todo", icon: "layers" },
      { id: "services", label: "Servicios", icon: "stethoscope" },
      { id: "blogs", label: "Artículos", icon: "book-open" },
      { id: "pages", label: "Páginas", icon: "file-text" }
    ];
    return /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 px-3 py-2 bg-gray-50 border-b border-gray-100 overflow-x-auto", children: categories.map((cat) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => {
          setActiveCategory(cat.id);
          const query = getCurrentInputValue();
          if (query.length >= 2) {
            const newSuggestions = generateSuggestions(query);
            setSuggestions(newSuggestions);
          }
        },
        className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${activeCategory === cat.id ? "bg-blue-100 text-blue-700" : "bg-white text-gray-600 hover:bg-blue-50"}`,
        children: [
          /* @__PURE__ */ jsx(Icon$1, { name: cat.icon, className: "w-3.5 h-3.5" }),
          cat.label
        ]
      },
      cat.id
    )) });
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "search-suggestions",
      className: `search-suggestions ${isVisible ? "" : "hidden"} absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50 max-h-96 overflow-y-auto`,
      style: { animation: "slideDown 0.2s ease-out" },
      role: "listbox",
      "aria-label": "Sugerencias de búsqueda",
      children: [
        renderCategoryTabs(),
        renderHistory(),
        renderPopularSearches(),
        !showHistory && suggestions.length > 0 && /* @__PURE__ */ jsx("div", { className: "suggestions-list", id: "suggestions-list", children: suggestions.map((suggestion, index) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "suggestion-item px-4 py-3 cursor-pointer border-b border-gray-100 last:border-0",
            onClick: () => handleSuggestionClick(suggestion.url, suggestion.title),
            onMouseEnter: () => setSelectedIndex(index),
            role: "option",
            "aria-selected": index === selectedIndex,
            "data-suggestion-index": index,
            style: {
              transition: "all 0.15s ease",
              backgroundColor: index === selectedIndex ? "#E0F2FE" : "transparent",
              borderLeft: index === selectedIndex ? "3px solid #38BDF8" : "3px solid transparent"
            },
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${suggestion.matchType === "exact" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"}`, children: /* @__PURE__ */ jsx(Icon$1, { name: suggestion.icon, className: "w-4 h-4" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "text-sm font-medium text-gray-900 truncate",
                    dangerouslySetInnerHTML: {
                      __html: highlightMatch(suggestion.title, getCurrentInputValue())
                    }
                  }
                ),
                suggestion.category && /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 mt-0.5 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Icon$1, { name: "tag", className: "w-3 h-3" }),
                  suggestion.category
                ] })
              ] }),
              suggestion.matchType === "exact" && /* @__PURE__ */ jsx("span", { className: "text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded", children: "Exacto" }),
              /* @__PURE__ */ jsx(Icon$1, { name: "arrow-right", className: "w-4 h-4 text-gray-300" })
            ] })
          },
          `sugg-${index}`
        )) }),
        !showHistory && suggestions.length === 0 && getCurrentInputValue().length >= 2 && /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 text-center", children: [
          /* @__PURE__ */ jsx(Icon$1, { name: "search-x", className: "w-8 h-8 text-gray-300 mx-auto mb-2" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "No se encontraron sugerencias" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 mt-1", children: "Presiona Enter para buscar" })
        ] }),
        !showHistory && getCurrentInputValue().length === 0 && /* @__PURE__ */ jsx("div", { className: "px-4 py-3 bg-gray-50 border-t border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-gray-500", children: [
          /* @__PURE__ */ jsx(Icon$1, { name: "zap", className: "w-3.5 h-3.5", color: "#eab308" }),
          /* @__PURE__ */ jsx("span", { children: "Tendencias:" }),
          getTrendingSearches().slice(0, 3).map((trend, i) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleSuggestionClick(`/busqueda?q=${encodeURIComponent(trend.query)}`, trend.query),
              className: "text-blue-600 hover:text-blue-700 font-medium",
              children: trend.query
            },
            i
          ))
        ] }) })
      ]
    }
  );
}

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<div class="search-container relative flex items-center" id="search-wrapper" data-astro-cid-otpdt6jm> <form id="search-form" class="search-form flex items-center overflow-hidden transition-all duration-300 ease-in-out relative z-10" action="/busqueda" method="GET" data-astro-cid-otpdt6jm> <input type="text" id="search-input" name="q" class="search-input w-0 opacity-0 bg-transparent outline-none placeholder:text-gray-400 text-gray-800 text-sm transition-all duration-300 ease-in-out focus:ring-0" placeholder="Buscar servicios, art\xEDculos..." autocomplete="off" aria-label="Buscar en el sitio" data-astro-cid-otpdt6jm> <button type="button" id="voice-search-btn" class="voice-btn hidden absolute left-2 z-20 p-1.5 text-gray-400 hover:text-[#BAE6FD] transition-colors rounded-full" aria-label="Buscar por voz" data-astro-cid-otpdt6jm> <i data-lucide="mic" class="w-4 h-4 pointer-events-none" data-astro-cid-otpdt6jm></i> </button> <button type="button" id="clear-search-btn" class="clear-btn hidden absolute right-12 z-20 p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-full" aria-label="Limpiar b\xFAsqueda" data-astro-cid-otpdt6jm> <i data-lucide="x" class="w-4 h-4 pointer-events-none" data-astro-cid-otpdt6jm></i> </button> <button type="button" id="search-btn" class="search-btn relative z-20 p-2.5 text-gray-500 hover:text-[#BAE6FD] hover:bg-blue-50 lg:hover:bg-[#BAE6FD]/10 lg:bg-white lg:border lg:border-gray-100 lg:shadow-sm rounded-xl lg:rounded-full transition-all duration-300 shrink-0 cursor-pointer" aria-label="Buscar" data-astro-cid-otpdt6jm> <i data-lucide="search" class="w-5 h-5 pointer-events-none" data-astro-cid-otpdt6jm></i> </button> </form> <!-- Search Suggestions Dropdown --> <div class="absolute top-full left-0 right-0 mt-2 z-30" data-astro-cid-otpdt6jm> ', ` </div> <!-- Keyboard shortcut hint --> <div class="hidden lg:block absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300" id="search-hint" data-astro-cid-otpdt6jm> <span class="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded" data-astro-cid-otpdt6jm>Ctrl + K</span> </div> <div id="voice-modal" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden items-center justify-center" data-astro-cid-otpdt6jm> <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform scale-95 opacity-0 transition-all duration-300" id="voice-modal-content" data-astro-cid-otpdt6jm> <div class="text-center" data-astro-cid-otpdt6jm> <div class="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 relative" data-astro-cid-otpdt6jm> <div class="absolute inset-0 bg-[#BAE6FD] rounded-full animate-ping opacity-30" data-astro-cid-otpdt6jm></div> <i data-lucide="mic" class="w-10 h-10 text-[#BAE6FD]" data-astro-cid-otpdt6jm></i> </div> <h3 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-otpdt6jm>B\xFAsqueda por voz</h3> <p class="text-gray-500 mb-6" id="voice-status" data-astro-cid-otpdt6jm>Habla ahora...</p> <div class="flex items-center justify-center gap-2 mb-6" data-astro-cid-otpdt6jm> <div class="voice-wave w-1 h-8 bg-[#BAE6FD] rounded-full animate-pulse" style="animation-delay: 0s" data-astro-cid-otpdt6jm></div> <div class="voice-wave w-1 h-8 bg-[#BAE6FD] rounded-full animate-pulse" style="animation-delay: 0.1s" data-astro-cid-otpdt6jm></div> <div class="voice-wave w-1 h-8 bg-[#BAE6FD] rounded-full animate-pulse" style="animation-delay: 0.2s" data-astro-cid-otpdt6jm></div> <div class="voice-wave w-1 h-8 bg-[#BAE6FD] rounded-full animate-pulse" style="animation-delay: 0.3s" data-astro-cid-otpdt6jm></div> <div class="voice-wave w-1 h-8 bg-[#BAE6FD] rounded-full animate-pulse" style="animation-delay: 0.4s" data-astro-cid-otpdt6jm></div> </div> <button id="close-voice-modal" class="px-6 py-2 bg-gray-50 hover:bg-blue-50 hover:text-[#BAE6FD] text-gray-700 rounded-lg transition-colors font-medium" data-astro-cid-otpdt6jm>
Cancelar
</button> </div> </div> </div> </div>  <script>
  // Search functionality
  document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchHint = document.getElementById('search-hint');
    const voiceBtn = document.getElementById('voice-search-btn');
    const clearBtn = document.getElementById('clear-search-btn');
    const voiceModal = document.getElementById('voice-modal');
    const voiceModalContent = document.getElementById('voice-modal-content');
    const closeVoiceModal = document.getElementById('close-voice-modal');
    const voiceStatus = document.getElementById('voice-status');
    
    let isExpanded = false;
    let recognition = null;
    
    // Initialize speech recognition if available
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition();
      recognition.lang = 'es-ES';
      recognition.continuous = false;
      recognition.interimResults = true;
      
      recognition.onstart = function() {
        voiceStatus.textContent = 'Escuchando...';
        voiceModal.classList.add('active');
      };
      
      recognition.onresult = function(event) {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        
        if (event.results[0].isFinal) {
          searchInput.value = transcript;
          voiceStatus.textContent = 'Buscando: "' + transcript + '"';
          setTimeout(() => {
            voiceModal.classList.remove('active');
            searchForm.submit();
          }, 1000);
        } else {
          voiceStatus.textContent = 'Escuchando: ' + transcript;
        }
      };
      
      recognition.onerror = function(event) {
        voiceStatus.textContent = 'Error: ' + event.error;
        setTimeout(() => {
          voiceModal.classList.remove('active');
        }, 2000);
      };
      
      recognition.onend = function() {
        if (!voiceStatus.textContent.includes('Buscando')) {
          voiceModal.classList.remove('active');
        }
      };
    } else {
      // Hide voice button if not supported
      if (voiceBtn) voiceBtn.style.display = 'none';
    }
    
    // Toggle search expansion
    function toggleSearch() {
      isExpanded = !isExpanded;
      
      if (isExpanded) {
        searchForm.classList.add('expanded');
        searchInput.focus();
        searchHint.classList.remove('opacity-0');
        
        // Check if input has content
        if (searchInput.value.length > 0) {
          searchForm.classList.add('has-content');
        }
      } else {
        searchForm.classList.remove('expanded', 'has-content');
        searchInput.blur();
        searchHint.classList.add('opacity-0');
        
        // Hide suggestions
        if (window.searchSuggestions) {
          window.searchSuggestions.hide();
        }
      }
    }
    
    // Search button click
    searchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      if (isExpanded && searchInput.value.trim()) {
        searchForm.submit();
      } else {
        toggleSearch();
      }
    });
    
    // Voice search button
    if (voiceBtn && recognition) {
      voiceBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        try {
          recognition.start();
        } catch (e) {
          console.error('Voice recognition error:', e);
        }
      });
    }
    
    // Close voice modal
    if (closeVoiceModal) {
      closeVoiceModal.addEventListener('click', function() {
        voiceModal.classList.remove('active');
        if (recognition) {
          try {
            recognition.stop();
          } catch (e) {}
        }
      });
    }
    
    // Clear button
    if (clearBtn) {
      clearBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        searchInput.value = '';
        searchForm.classList.remove('has-content');
        searchInput.focus();
        
        // Show history if available
        if (window.searchSuggestions) {
          // Trigger input event to show history
          searchInput.dispatchEvent(new Event('input'));
        }
      });
    }
    
    // Input change handler
    searchInput.addEventListener('input', function() {
      if (this.value.length > 0) {
        searchForm.classList.add('has-content');
      } else {
        searchForm.classList.remove('has-content');
      }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
      // Ctrl/Cmd + K to toggle search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleSearch();
      }
      
      // Ctrl/Cmd + Shift + V for voice search
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'V') {
        e.preventDefault();
        if (recognition && voiceBtn) {
          voiceBtn.click();
        }
      }
      
      // Escape to close
      if (e.key === 'Escape' && isExpanded) {
        toggleSearch();
      }
      
      // Slash to focus search
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        if (!isExpanded) toggleSearch();
        searchInput.focus();
      }
    });
    
    // Close when clicking outside
    document.addEventListener('click', function(e) {
      const wrapper = document.getElementById('search-wrapper');
      if (wrapper && !wrapper.contains(e.target) && isExpanded) {
        toggleSearch();
      }
    });
    
    // Prevent form submission on empty search
    searchForm.addEventListener('submit', function(e) {
      if (!searchInput.value.trim()) {
        e.preventDefault();
        searchInput.focus();
      }
    });
    
    // Mobile: Close search when scrolling
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function() {
      if (window.innerWidth < 1024 && isExpanded) {
        const currentScrollY = window.scrollY;
        if (Math.abs(currentScrollY - lastScrollY) > 50) {
          toggleSearch();
        }
        lastScrollY = currentScrollY;
      }
    }, { passive: true });
    
    // Mobile logo animation trigger
    const mobileLogo = document.querySelector('.mobile-logo');
    if (mobileLogo && searchBtn) {
      searchBtn.addEventListener('click', function() {
        if (window.innerWidth < 1024 && !isExpanded) {
          mobileLogo.classList.add('bounce-animation');
          setTimeout(function() { 
            mobileLogo.classList.remove('bounce-animation'); 
          }, 500);
        }
      });
    }
    
    // Focus search input on page load if URL has search param
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('q') && searchInput) {
      searchInput.value = urlParams.get('q');
      if (!isExpanded) toggleSearch();
    }
  });
  
  // Load search data for suggestions
  (function loadSearchData() {
    // Make search data available globally for suggestions
    window.searchData = [
      { title: "Inicio", type: "page", url: "/", category: "General" },
      { title: "Nosotros", type: "page", url: "/nosotros", category: "General" },
      { title: "Servicios", type: "page", url: "/servicios", category: "General" },
      { title: "Equipo", type: "page", url: "/equipo", category: "General" },
      { title: "Blogs", type: "page", url: "/blogs", category: "General" },
      { title: "Contacto", type: "page", url: "/contacto", category: "General" },
      { title: "Control de Crecimiento", type: "service", url: "/servicios/control-crecimiento", category: "Crecimiento" },
      { title: "Vacunaci\xF3n Integral", type: "service", url: "/servicios/vacunacion-integral", category: "Vacunaci\xF3n" },
      { title: "Nutrici\xF3n Infantil", type: "service", url: "/servicios/nutricion-infantil", category: "Nutrici\xF3n" },
      { title: "Atenci\xF3n de Reci\xE9n Nacidos", type: "service", url: "/servicios/atencion-recien-nacidos", category: "Reci\xE9n Nacidos" },
      { title: "Psicolog\xEDa Infantil", type: "service", url: "/servicios/psicologia-infantil", category: "Psicolog\xEDa" },
      { title: "Nebulizaciones", type: "service", url: "/servicios/nebulizaciones", category: "Respiratorio" },
      { title: "La Importancia de la Vacunaci\xF3n Infantil", type: "blog", url: "/blog/importancia-vacunacion-infantil", category: "Vacunaci\xF3n" },
      { title: "Gu\xEDa de Alimentaci\xF3n Complementaria", type: "blog", url: "/blog/alimentacion-complementaria", category: "Nutrici\xF3n" },
      { title: "Hitos del Desarrollo Psicomotor", type: "blog", url: "/blog/desarrollo-psicomotor", category: "Desarrollo" },
      { title: "Cuidados Esenciales del Reci\xE9n Nacido", type: "blog", url: "/blog/cuidado-recien-nacido", category: "Reci\xE9n Nacidos" },
      { title: "Salud Emocional en la Infancia", type: "blog", url: "/blog/salud-emocional-infantil", category: "Psicolog\xEDa" },
      { title: "Prevenci\xF3n de Infecciones Respiratorias", type: "blog", url: "/blog/prevencion-respiratoria", category: "Respiratorio" },
      { title: "Gu\xEDa Completa sobre Alergias en Ni\xF1os", type: "blog", url: "/blog/alergias-infantiles", category: "Alergias" }
    ];
  })();
<\/script>`])), maybeRenderHead(), renderComponent($$result, "SearchSuggestions", SearchSuggestions, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Astro Clinica Pedriatia/Pediatria-Web/src/components/SearchSuggestions.jsx", "client:component-export": "default", "data-astro-cid-otpdt6jm": true }));
}, "C:/Astro Clinica Pedriatia/Pediatria-Web/src/components/Search.astro", void 0);

const Icon = ({ name, className = "w-4 h-4" }) => {
  const icons = {
    "check-lg": /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", className, children: /* @__PURE__ */ jsx("path", { d: "M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" }) }),
    "exclamation-circle": /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", className, children: [
      /* @__PURE__ */ jsx("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
      /* @__PURE__ */ jsx("path", { d: "M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" })
    ] }),
    "whatsapp": /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", className, children: /* @__PURE__ */ jsx("path", { d: "M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" }) }),
    "telephone": /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", className, children: /* @__PURE__ */ jsx("path", { d: "M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" }) }),
    "envelope": /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", className, children: /* @__PURE__ */ jsx("path", { d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" }) }),
    "send": /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", className, children: /* @__PURE__ */ jsx("path", { d: "M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" }) })
  };
  return icons[name] || null;
};
function ContactForm({
  email = "jhonbeck860@gmail.com",
  whatsappNumber = "+51997307782"
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "whatsapp"
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMethod, setSubmitMethod] = useState(null);
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "El nombre es requerido";
        if (value.trim().length < 2) return "El nombre debe tener al menos 2 caracteres";
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) return "El nombre solo debe contener letras";
        return "";
      case "email":
        if (!value.trim()) return "El email es requerido";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Ingresa un email válido";
        return "";
      case "phone":
        if (!value.trim()) return "El teléfono es requerido";
        if (!/^[0-9\s\-\+\(\)]+$/.test(value)) return "Ingresa un teléfono válido";
        if (value.replace(/\D/g, "").length < 8) return "El teléfono debe tener al menos 8 dígitos";
        return "";
      case "subject":
        if (!value.trim()) return "El asunto es requerido";
        if (value.trim().length < 5) return "El asunto debe tener al menos 5 caracteres";
        return "";
      case "message":
        if (!value.trim()) return "El mensaje es requerido";
        if (value.trim().length < 20) return "El mensaje debe tener al menos 20 caracteres";
        if (value.trim().length > 1e3) return "El mensaje no puede exceder 1000 caracteres";
        return "";
      default:
        return "";
    }
  };
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "preferredContact") {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    return newErrors;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error
      }));
    }
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error
    }));
  };
  const buildWhatsAppMessage = () => {
    return `*Nuevo mensaje de contacto - Clínica Pediátrica*%0A%0A*Nombre:* ${formData.name}%0A*Email:* ${formData.email}%0A*Teléfono:* ${formData.phone}%0A*Asunto:* ${formData.subject}%0A*Método de contacto preferido:* ${formData.preferredContact.toUpperCase()}%0A%0A*Mensaje:*%0A${formData.message}%0A%0A---%0AEnviado desde el formulario de contacto web`;
  };
  const buildMailtoLink = () => {
    const subject = encodeURIComponent(`Contacto Web: ${formData.subject}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Método de contacto preferido: ${formData.preferredContact.toUpperCase()}

Mensaje:
${formData.message}

---
Enviado desde el formulario de contacto web`
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = Object.keys(formData).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {});
    setTouched(allTouched);
    const formErrors = validateForm();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      if (formData.preferredContact === "whatsapp") {
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${buildWhatsAppMessage()}`;
        window.open(whatsappUrl, "_blank");
        setSubmitMethod("whatsapp");
      } else if (formData.preferredContact === "email") {
        window.location.href = buildMailtoLink();
        setSubmitMethod("email");
      } else {
        setSubmitMethod("phone");
      }
      setSubmitStatus("success");
      setIsSubmitting(false);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          preferredContact: "whatsapp"
        });
        setTouched({});
        setSubmitStatus(null);
        setSubmitMethod(null);
      }, 5e3);
    }
  };
  const getInputClassName = (fieldName) => {
    const baseClass = "w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-100";
    if (touched[fieldName] && errors[fieldName]) {
      return `${baseClass} border-red-200 bg-red-50/70 text-red-800 placeholder-red-400`;
    }
    if (touched[fieldName] && !errors[fieldName]) {
      return `${baseClass} border-green-200 bg-green-50/70 text-green-800`;
    }
    return `${baseClass} border-gray-200 bg-white text-gray-900 placeholder-gray-400 hover:border-pink-200`;
  };
  const messageLength = formData.message.length;
  const messageProgress = Math.min(messageLength / 1e3 * 100, 100);
  const getSuccessMessage = () => {
    switch (submitMethod) {
      case "whatsapp":
        return "Se abrió WhatsApp con tu mensaje. ¡Envíalo para completar el contacto!";
      case "email":
        return "Se abrió tu cliente de correo. ¡Envía el email para completar el contacto!";
      case "phone":
        return "¡Mensaje recibido! Te llamaremos pronto al número proporcionado.";
      default:
        return "¡Mensaje enviado! Te contactaremos pronto.";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-1 md:p-2", children: [
    submitStatus === "success" && /* @__PURE__ */ jsxs("div", { className: "mb-6 p-4 bg-green-50/70 border border-green-200 rounded-xl flex items-start gap-3 animate-fade-in", children: [
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Icon, { name: "check-lg", className: "w-6 h-6 text-green-600" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-semibold text-green-700", children: "¡Mensaje preparado!" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-green-600", children: getSuccessMessage() })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { htmlFor: "name", className: "block text-sm font-semibold text-gray-700 mb-2", children: [
          "Nombre completo ",
          /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "name",
            name: "name",
            value: formData.name,
            onChange: handleChange,
            onBlur: handleBlur,
            placeholder: "Ej: María González",
            className: getInputClassName("name"),
            disabled: isSubmitting
          }
        ),
        touched.name && errors.name && /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-red-600 flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Icon, { name: "exclamation-circle", className: "w-4 h-4" }),
          errors.name
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { htmlFor: "email", className: "block text-sm font-semibold text-gray-700 mb-2", children: [
          "Correo electrónico ",
          /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            id: "email",
            name: "email",
            value: formData.email,
            onChange: handleChange,
            onBlur: handleBlur,
            placeholder: "Ej: maria@email.com",
            className: getInputClassName("email"),
            disabled: isSubmitting
          }
        ),
        touched.email && errors.email && /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-red-600 flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Icon, { name: "exclamation-circle", className: "w-4 h-4" }),
          errors.email
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { htmlFor: "phone", className: "block text-sm font-semibold text-gray-700 mb-2", children: [
          "Teléfono ",
          /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "tel",
            id: "phone",
            name: "phone",
            value: formData.phone,
            onChange: handleChange,
            onBlur: handleBlur,
            placeholder: "Ej: +51 999 888 777",
            className: getInputClassName("phone"),
            disabled: isSubmitting
          }
        ),
        touched.phone && errors.phone && /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-red-600 flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Icon, { name: "exclamation-circle", className: "w-4 h-4" }),
          errors.phone
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { htmlFor: "subject", className: "block text-sm font-semibold text-gray-700 mb-2", children: [
          "Asunto ",
          /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "subject",
            name: "subject",
            value: formData.subject,
            onChange: handleChange,
            onBlur: handleBlur,
            placeholder: "Ej: Consulta sobre vacunación",
            className: getInputClassName("subject"),
            disabled: isSubmitting
          }
        ),
        touched.subject && errors.subject && /* @__PURE__ */ jsxs("p", { className: "mt-1 text-sm text-red-600 flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Icon, { name: "exclamation-circle", className: "w-4 h-4" }),
          errors.subject
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-3", children: "¿Cómo prefieres que te contactemos?" }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: [
          { value: "whatsapp", label: "WhatsApp", icon: "whatsapp" },
          { value: "phone", label: "Llamada", icon: "telephone" },
          { value: "email", label: "Email", icon: "envelope" }
        ].map((option) => /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => setFormData((prev) => ({ ...prev, preferredContact: option.value })),
            className: `flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 transition-all ${formData.preferredContact === option.value ? "border-pink-300 bg-pink-50/70 text-pink-700" : "border-gray-200 bg-white text-gray-600 hover:border-pink-200"}`,
            disabled: isSubmitting,
            children: [
              /* @__PURE__ */ jsx(Icon, { name: option.icon, className: "w-5 h-5" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: option.label })
            ]
          },
          option.value
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("label", { htmlFor: "message", className: "block text-sm font-semibold text-gray-700 mb-2", children: [
          "Mensaje ",
          /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "message",
            name: "message",
            value: formData.message,
            onChange: handleChange,
            onBlur: handleBlur,
            placeholder: "Describe tu consulta o mensaje detalladamente...",
            rows: 5,
            className: `${getInputClassName("message")} resize-none`,
            disabled: isSubmitting,
            maxLength: 1e3
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-2", children: [
          touched.message && errors.message ? /* @__PURE__ */ jsxs("p", { className: "text-sm text-red-500 flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Icon, { name: "exclamation-circle", className: "w-4 h-4" }),
            errors.message
          ] }) : /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Mínimo 20 caracteres" }),
          /* @__PURE__ */ jsxs("span", { className: `text-sm ${messageLength > 900 ? "text-amber-500" : "text-gray-400"}`, children: [
            messageLength,
            "/1000"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 h-1 bg-gray-200 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: `h-full transition-all duration-300 ${messageLength < 20 ? "bg-red-300" : messageLength < 100 ? "bg-yellow-300" : "bg-green-300"}`,
            style: { width: `${messageProgress}%` }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: isSubmitting,
          className: `w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-linear-to-r from-pink-300 to-pink-400 text-white hover:from-pink-400 hover:to-pink-500 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"}`,
          children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
            "Preparando mensaje..."
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Icon, { name: "send", className: "w-5 h-5" }),
            formData.preferredContact === "whatsapp" ? "Enviar por WhatsApp" : formData.preferredContact === "email" ? "Enviar por Email" : "Solicitar llamada"
          ] })
        }
      ),
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-400 text-center", children: [
        formData.preferredContact === "whatsapp" && "Se abrirá WhatsApp con tu mensaje pre-escrito",
        formData.preferredContact === "email" && "Se abrirá tu cliente de correo electrónico",
        formData.preferredContact === "phone" && "Te llamaremos al número proporcionado"
      ] })
    ] })
  ] });
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("http://localhost:4321");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const pathname = new URL(Astro2.request.url).pathname;
  const currentPath = pathname.slice(1);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Skip Link para accesibilidad (oculto por defecto, visible al navegar con tab) -->", '<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50" data-astro-cid-3ef6ksr2>Saltar a contenido principal</a> <!--\n<div class="bg-[linear-gradient(to_right,#F9A8D4,#FEF08A,#BAE6FD)] text-gray-700 py-1.5 text-[10px] sm:text-[11px] md:text-sm font-bold uppercase tracking-wider relative z-50 border-b border-white/40 shadow-sm">\n  <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">\n    \n    <div class="flex gap-3 sm:gap-6">\n      <a href={`tel:${siteConfig.contact.phone.replace(/\\s/g, "")}`} class="flex items-center gap-1.5 hover:text-pink-600 transition-colors duration-300 group">\n        <i data-lucide="phone" class="w-3.5 h-3.5 group-hover:rotate-12 transition-transform"></i>\n        <span class="truncate">{siteConfig.contact.phone}</span>\n      </a>\n\n      <a href={siteConfig.location.googleMapsLink} target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-300 group">\n        <i data-lucide="map-pin" class="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform"></i>\n        <span>{siteConfig.location.city}</span>\n      </a>\n    </div>\n\n    <div class="flex items-center gap-3 border-l border-gray-400/20 pl-4">\n      <a href={siteConfig.socials.facebook} target="_blank" class="hover:text-pink-600 transition-all hover:scale-120">\n        <i data-lucide="facebook" class="w-4 h-4"></i>\n      </a>\n      <a href={siteConfig.socials.instagram} target="_blank" class="hover:text-pink-600 transition-all hover:scale-120">\n        <i data-lucide="instagram" class="w-4 h-4"></i>\n      </a>\n      <a href={`mailto:${siteConfig.contact.email}`} class="hidden sm:block hover:text-blue-600 transition-all hover:scale-120">\n        <i data-lucide="mail" class="w-4 h-4"></i>\n      </a>\n    </div>\n\n  </div>\n</div>\n--> <!-- Header Principal --> <header class="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b shadow-amber-440 border-gray-200" data-astro-cid-3ef6ksr2> <div class="max-w-8xl h-16 sm:h-20 mx-auto px-3 py-10 sm:px-4 lg:px-6 flex items-center justify-between" data-astro-cid-3ef6ksr2> <div class="hidden lg:flex items-center flex-1 justify-start" data-astro-cid-3ef6ksr2> <!-- Bot\xF3n para abrir modal de contacto --> <button id="contact-modal-btn" class="group flex items-center gap-0 bg-linear-to-r from-[#F9A8D4] to-[#F472B6] text-white px-4 py-3 rounded-full shadow-md hover:shadow-pink-200/50 hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-[#F9A8D4]/50 overflow-hidden" aria-label="Abrir formulario de contacto" data-astro-cid-3ef6ksr2> <i data-lucide="send" class="w-5 h-5 shrink-0 drop-shadow-sm" data-astro-cid-3ef6ksr2></i> <span class="text-sm font-bold tracking-wide max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-35.5 group-hover:ml-2 transition-all duration-500 ease-out" data-astro-cid-3ef6ksr2>\nCont\xE1ctanos\n</span> </button> </div> <div class="flex items-center justify-center lg:flex-none" data-astro-cid-3ef6ksr2> <a href="/" class="lg:hidden flex flex-col items-center justify-center mobile-logo-link" aria-label="Ir a inicio" data-astro-cid-3ef6ksr2> <img src="/images/logo-text.png"', ' class="h-7 sm:h-8 w-auto object-contain mobile-logo-img" data-astro-cid-3ef6ksr2> <span class="text-center text-[8px] font-bold tracking-[0.2em] text-gray-400 uppercase mt-1 leading-none mobile-logo-text" data-astro-cid-3ef6ksr2> ', " \xB7 ", ' </span> </a> <nav class="hidden lg:flex items-center gap-12 text-[13px] font-bold uppercase tracking-widest text-gray-500" role="navigation" data-astro-cid-3ef6ksr2> <a href="/"', ' data-astro-cid-3ef6ksr2>Inicio</a> <a href="/nosotros"', ' data-astro-cid-3ef6ksr2>Nosotros</a> <!-- Dropdown de Servicios --> <div class="relative group" data-astro-cid-3ef6ksr2> <a href="/servicios"', ' data-astro-cid-3ef6ksr2>\nServicios\n<svg class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-3ef6ksr2></path> </svg> </a> <!-- Dropdown Menu --> <div class="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible transform -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50" data-astro-cid-3ef6ksr2> <div class="py-2" data-astro-cid-3ef6ksr2> <a href="/servicios" class="flex items-center gap-3 px-4 py-3 text-sm font-bold text-[#F9A8D4] hover:bg-pink-50 transition-colors border-b border-gray-50" data-astro-cid-3ef6ksr2> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg>\nVer Todos los Servicios\n</a> ', ' </div> </div> </div> <a href="/" class="flex items-center px-6 transition-transform duration-300 hover:scale-105" aria-label="Ir a inicio" data-astro-cid-3ef6ksr2> <img src="/images/logo-text.png"', ' class="h-10 w-auto object-contain" data-astro-cid-3ef6ksr2> </a> <a href="/equipo"', ' data-astro-cid-3ef6ksr2>Equipo</a> <a href="/blogs"', ' data-astro-cid-3ef6ksr2>Blogs</a> <a href="/contacto"', ' data-astro-cid-3ef6ksr2>Contacto</a> </nav> </div> <div class="flex items-center flex-1 justify-end gap-2" data-astro-cid-3ef6ksr2> <div class="lg:block" data-astro-cid-3ef6ksr2> ', ' </div> <button id="menu-btn" class="lg:hidden p-2 sm:p-3 text-[#BAE6FD] hover:bg-blue-50 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#BAE6FD]" aria-label="Abrir men\xFA m\xF3vil" data-astro-cid-3ef6ksr2> <div class="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-around items-center" data-astro-cid-3ef6ksr2> <span class="w-5 sm:w-6 h-0.5 bg-current rounded-full" data-astro-cid-3ef6ksr2></span> <span class="w-5 sm:w-6 h-0.5 bg-current rounded-full" data-astro-cid-3ef6ksr2></span> <span class="w-5 sm:w-6 h-0.5 bg-current rounded-full" data-astro-cid-3ef6ksr2></span> </div> </button> </div> </div> </header> <!-- Overlay M\xF3vil --> <div id="mobile-overlay" class="fixed inset-0 bg-black/40 z-998 opacity-0 pointer-events-none transition-all duration-400 ease-in-out lg:hidden backdrop-blur-sm hidden" aria-hidden="true" data-astro-cid-3ef6ksr2></div> <!-- Panel de Contacto (deslizable desde la izquierda) --> <div id="contact-modal" class="fixed inset-0 z-999 hidden" role="dialog" aria-modal="true" aria-hidden="true" data-astro-cid-3ef6ksr2> <!-- Backdrop --> <div id="contact-modal-backdrop" class="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-300" data-astro-cid-3ef6ksr2></div> <!-- Panel Content (desliza desde la izquierda) --> <div id="contact-modal-content" class="absolute left-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-y-auto -translate-x-full transition-transform duration-300 ease-out" data-astro-cid-3ef6ksr2> <!-- Header del Panel --> <div class="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between z-10" data-astro-cid-3ef6ksr2> <div data-astro-cid-3ef6ksr2> <h3 class="text-xl font-bold text-gray-900" data-astro-cid-3ef6ksr2>Env\xEDanos un mensaje</h3> <p class="text-sm text-gray-500" data-astro-cid-3ef6ksr2>Te responderemos lo antes posible</p> </div> <button id="close-contact-modal" class="p-2 bg-gray-100 text-gray-500 rounded-full hover:bg-red-50 hover:text-red-500 transition-all active:scale-90 focus:ring-2 focus:ring-red-300" aria-label="Cerrar formulario" data-astro-cid-3ef6ksr2> <i data-lucide="x" class="w-5 h-5" data-astro-cid-3ef6ksr2></i> </button> </div> <!-- Formulario --> <div class="p-6" data-astro-cid-3ef6ksr2> ', ' </div> </div> </div> <div id="mobile-menu" class="fixed top-0 right-0 w-[85%] max-w-sm h-screen bg-[#FDFCFD] z-999 translate-x-full transition-transform duration-500 ease-in-out lg:hidden flex flex-col shadow-2xl overflow-hidden" role="dialog" aria-modal="true" aria-hidden="true" data-astro-cid-3ef6ksr2> <div class="p-6 bg-white border-b border-gray-50 flex items-center justify-between" data-astro-cid-3ef6ksr2> <div class="flex items-center gap-3" data-astro-cid-3ef6ksr2> <div class="flex flex-col" data-astro-cid-3ef6ksr2> <img src="/images/logo-text.png"', ' class="h-10 w-auto object-contain" data-astro-cid-3ef6ksr2> <span class="text-center text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mt-1 leading-none" data-astro-cid-3ef6ksr2> ', " \xB7 ", ' </span> </div> </div> <button id="close-menu" class="p-2 bg-gray-50 text-gray-400 rounded-full hover:bg-pink-50 hover:text-[#F9A8D4] transition-all active:scale-90" aria-label="Cerrar men\xFA m\xF3vil" data-astro-cid-3ef6ksr2> <i data-lucide="x" class="w-6 h-6" data-astro-cid-3ef6ksr2></i> </button> </div> <nav class="flex flex-col p-6 gap-3 overflow-y-auto bg-[#FDFCFD]" role="navigation" aria-label="Navegaci\xF3n m\xF3vil" data-astro-cid-3ef6ksr2> ', ' </nav> <!-- Lista de Servicios en Men\xFA M\xF3vil --> <div class="px-6 pb-4" data-astro-cid-3ef6ksr2> <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" data-astro-cid-3ef6ksr2> <div class="bg-gradient-to-r from-[#F9A8D4]/10 to-[#F472B6]/10 px-4 py-3 border-b border-gray-50" data-astro-cid-3ef6ksr2> <span class="text-xs font-bold uppercase tracking-wider text-[#F9A8D4]" data-astro-cid-3ef6ksr2>Nuestros Servicios</span> </div> <div class="p-2" data-astro-cid-3ef6ksr2> ', ' </div> </div> </div> <div class="mt-auto p-6 bg-white border-t border-gray-50" data-astro-cid-3ef6ksr2> <a', ` target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-3 bg-[#F9A8D4] text-white py-4 rounded-2xl shadow-lg shadow-pink-100 font-bold text-lg active:scale-95 transition-all uppercase tracking-wider" aria-label="Pedir cita por WhatsApp" data-astro-cid-3ef6ksr2> <i data-lucide="calendar-check" class="w-6 h-6" data-astro-cid-3ef6ksr2></i> <span data-astro-cid-3ef6ksr2>Pedir Cita</span> </a> </div> </div>  <script>
  const initHeader = () => {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileOverlay = document.getElementById("mobile-overlay");
    
    // Contact Modal Elements
    const contactModalBtn = document.getElementById("contact-modal-btn");
    const contactModal = document.getElementById("contact-modal");
    const contactModalBackdrop = document.getElementById("contact-modal-backdrop");
    const contactModalContent = document.getElementById("contact-modal-content");
    const closeContactModal = document.getElementById("close-contact-modal");

    // Verificar si Lucide est\xE1 disponible
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    if (!menuBtn || !mobileMenu || !closeBtn || !mobileOverlay) return;

    let isOpen = false; // Estado para evitar toggles m\xFAltiples

    const toggle = (open) => {
      if (isOpen === open) return; // Evitar repeticiones
      isOpen = open;

      if (open) {
        mobileMenu.classList.remove("translate-x-full");
        mobileOverlay.classList.remove("hidden");
        mobileOverlay.setAttribute("aria-hidden", "false");
        mobileMenu.setAttribute("aria-hidden", "false");
        setTimeout(() => mobileOverlay.classList.add("opacity-100"), 10);
        document.body.style.overflow = "hidden";
        menuBtn.classList.add("open");
        menuBtn.setAttribute("aria-expanded", "true");
      } else {
        mobileMenu.classList.add("translate-x-full");
        mobileOverlay.classList.remove("opacity-100");
        mobileOverlay.setAttribute("aria-hidden", "true");
        mobileMenu.setAttribute("aria-hidden", "true");
        setTimeout(() => mobileOverlay.classList.add("hidden"), 500);
        document.body.style.overflow = "";
        menuBtn.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    };

    menuBtn.addEventListener('click', () => toggle(true));
    closeBtn.addEventListener('click', () => toggle(false));
    mobileOverlay.addEventListener('click', () => toggle(false));
    mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener('click', () => toggle(false)));
    
    // Contact Modal Logic
    if (contactModalBtn && contactModal && closeContactModal && contactModalBackdrop && contactModalContent) {
      
      function openContactModal() {
        // Mostrar el modal primero (quitar hidden)
        contactModal.classList.remove("hidden");
        contactModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        
        // Forzar reflow para que la transici\xF3n funcione
        void contactModalContent.offsetWidth;
        
        // Mostrar backdrop y deslizar panel
        contactModalBackdrop.classList.remove("opacity-0");
        contactModalContent.classList.remove("-translate-x-full");
        contactModalContent.classList.add("translate-x-0");
      }
      
      function closeContactModalFn() {
        // Ocultar backdrop y deslizar panel fuera
        contactModalBackdrop.classList.add("opacity-0");
        contactModalContent.classList.remove("translate-x-0");
        contactModalContent.classList.add("-translate-x-full");
        
        // Esperar a que termine la animaci\xF3n antes de ocultar el modal
        setTimeout(() => {
          contactModal.classList.add("hidden");
          contactModal.setAttribute("aria-hidden", "true");
          document.body.style.overflow = "";
        }, 300);
      }

      // Event listeners
      contactModalBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openContactModal();
      });
      
      closeContactModal.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeContactModalFn();
      });
      
      contactModalBackdrop.addEventListener('click', function(e) {
        if (e.target === contactModalBackdrop) {
          closeContactModalFn();
        }
      });
      
      // Cerrar con tecla Escape
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !contactModal.classList.contains('hidden')) {
          closeContactModalFn();
        }
      });
    }

  };

  document.addEventListener("astro:page-load", initHeader);
  initHeader();
<\/script>`], ["<!-- Skip Link para accesibilidad (oculto por defecto, visible al navegar con tab) -->", '<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50" data-astro-cid-3ef6ksr2>Saltar a contenido principal</a> <!--\n<div class="bg-[linear-gradient(to_right,#F9A8D4,#FEF08A,#BAE6FD)] text-gray-700 py-1.5 text-[10px] sm:text-[11px] md:text-sm font-bold uppercase tracking-wider relative z-50 border-b border-white/40 shadow-sm">\n  <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">\n    \n    <div class="flex gap-3 sm:gap-6">\n      <a href={\\`tel:\\${siteConfig.contact.phone.replace(/\\\\s/g, "")}\\`} class="flex items-center gap-1.5 hover:text-pink-600 transition-colors duration-300 group">\n        <i data-lucide="phone" class="w-3.5 h-3.5 group-hover:rotate-12 transition-transform"></i>\n        <span class="truncate">{siteConfig.contact.phone}</span>\n      </a>\n\n      <a href={siteConfig.location.googleMapsLink} target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-300 group">\n        <i data-lucide="map-pin" class="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform"></i>\n        <span>{siteConfig.location.city}</span>\n      </a>\n    </div>\n\n    <div class="flex items-center gap-3 border-l border-gray-400/20 pl-4">\n      <a href={siteConfig.socials.facebook} target="_blank" class="hover:text-pink-600 transition-all hover:scale-120">\n        <i data-lucide="facebook" class="w-4 h-4"></i>\n      </a>\n      <a href={siteConfig.socials.instagram} target="_blank" class="hover:text-pink-600 transition-all hover:scale-120">\n        <i data-lucide="instagram" class="w-4 h-4"></i>\n      </a>\n      <a href={\\`mailto:\\${siteConfig.contact.email}\\`} class="hidden sm:block hover:text-blue-600 transition-all hover:scale-120">\n        <i data-lucide="mail" class="w-4 h-4"></i>\n      </a>\n    </div>\n\n  </div>\n</div>\n--> <!-- Header Principal --> <header class="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b shadow-amber-440 border-gray-200" data-astro-cid-3ef6ksr2> <div class="max-w-8xl h-16 sm:h-20 mx-auto px-3 py-10 sm:px-4 lg:px-6 flex items-center justify-between" data-astro-cid-3ef6ksr2> <div class="hidden lg:flex items-center flex-1 justify-start" data-astro-cid-3ef6ksr2> <!-- Bot\xF3n para abrir modal de contacto --> <button id="contact-modal-btn" class="group flex items-center gap-0 bg-linear-to-r from-[#F9A8D4] to-[#F472B6] text-white px-4 py-3 rounded-full shadow-md hover:shadow-pink-200/50 hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-[#F9A8D4]/50 overflow-hidden" aria-label="Abrir formulario de contacto" data-astro-cid-3ef6ksr2> <i data-lucide="send" class="w-5 h-5 shrink-0 drop-shadow-sm" data-astro-cid-3ef6ksr2></i> <span class="text-sm font-bold tracking-wide max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-35.5 group-hover:ml-2 transition-all duration-500 ease-out" data-astro-cid-3ef6ksr2>\nCont\xE1ctanos\n</span> </button> </div> <div class="flex items-center justify-center lg:flex-none" data-astro-cid-3ef6ksr2> <a href="/" class="lg:hidden flex flex-col items-center justify-center mobile-logo-link" aria-label="Ir a inicio" data-astro-cid-3ef6ksr2> <img src="/images/logo-text.png"', ' class="h-7 sm:h-8 w-auto object-contain mobile-logo-img" data-astro-cid-3ef6ksr2> <span class="text-center text-[8px] font-bold tracking-[0.2em] text-gray-400 uppercase mt-1 leading-none mobile-logo-text" data-astro-cid-3ef6ksr2> ', " \xB7 ", ' </span> </a> <nav class="hidden lg:flex items-center gap-12 text-[13px] font-bold uppercase tracking-widest text-gray-500" role="navigation" data-astro-cid-3ef6ksr2> <a href="/"', ' data-astro-cid-3ef6ksr2>Inicio</a> <a href="/nosotros"', ' data-astro-cid-3ef6ksr2>Nosotros</a> <!-- Dropdown de Servicios --> <div class="relative group" data-astro-cid-3ef6ksr2> <a href="/servicios"', ' data-astro-cid-3ef6ksr2>\nServicios\n<svg class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-3ef6ksr2></path> </svg> </a> <!-- Dropdown Menu --> <div class="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible transform -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50" data-astro-cid-3ef6ksr2> <div class="py-2" data-astro-cid-3ef6ksr2> <a href="/servicios" class="flex items-center gap-3 px-4 py-3 text-sm font-bold text-[#F9A8D4] hover:bg-pink-50 transition-colors border-b border-gray-50" data-astro-cid-3ef6ksr2> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg>\nVer Todos los Servicios\n</a> ', ' </div> </div> </div> <a href="/" class="flex items-center px-6 transition-transform duration-300 hover:scale-105" aria-label="Ir a inicio" data-astro-cid-3ef6ksr2> <img src="/images/logo-text.png"', ' class="h-10 w-auto object-contain" data-astro-cid-3ef6ksr2> </a> <a href="/equipo"', ' data-astro-cid-3ef6ksr2>Equipo</a> <a href="/blogs"', ' data-astro-cid-3ef6ksr2>Blogs</a> <a href="/contacto"', ' data-astro-cid-3ef6ksr2>Contacto</a> </nav> </div> <div class="flex items-center flex-1 justify-end gap-2" data-astro-cid-3ef6ksr2> <div class="lg:block" data-astro-cid-3ef6ksr2> ', ' </div> <button id="menu-btn" class="lg:hidden p-2 sm:p-3 text-[#BAE6FD] hover:bg-blue-50 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#BAE6FD]" aria-label="Abrir men\xFA m\xF3vil" data-astro-cid-3ef6ksr2> <div class="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-around items-center" data-astro-cid-3ef6ksr2> <span class="w-5 sm:w-6 h-0.5 bg-current rounded-full" data-astro-cid-3ef6ksr2></span> <span class="w-5 sm:w-6 h-0.5 bg-current rounded-full" data-astro-cid-3ef6ksr2></span> <span class="w-5 sm:w-6 h-0.5 bg-current rounded-full" data-astro-cid-3ef6ksr2></span> </div> </button> </div> </div> </header> <!-- Overlay M\xF3vil --> <div id="mobile-overlay" class="fixed inset-0 bg-black/40 z-998 opacity-0 pointer-events-none transition-all duration-400 ease-in-out lg:hidden backdrop-blur-sm hidden" aria-hidden="true" data-astro-cid-3ef6ksr2></div> <!-- Panel de Contacto (deslizable desde la izquierda) --> <div id="contact-modal" class="fixed inset-0 z-999 hidden" role="dialog" aria-modal="true" aria-hidden="true" data-astro-cid-3ef6ksr2> <!-- Backdrop --> <div id="contact-modal-backdrop" class="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-300" data-astro-cid-3ef6ksr2></div> <!-- Panel Content (desliza desde la izquierda) --> <div id="contact-modal-content" class="absolute left-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-y-auto -translate-x-full transition-transform duration-300 ease-out" data-astro-cid-3ef6ksr2> <!-- Header del Panel --> <div class="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between z-10" data-astro-cid-3ef6ksr2> <div data-astro-cid-3ef6ksr2> <h3 class="text-xl font-bold text-gray-900" data-astro-cid-3ef6ksr2>Env\xEDanos un mensaje</h3> <p class="text-sm text-gray-500" data-astro-cid-3ef6ksr2>Te responderemos lo antes posible</p> </div> <button id="close-contact-modal" class="p-2 bg-gray-100 text-gray-500 rounded-full hover:bg-red-50 hover:text-red-500 transition-all active:scale-90 focus:ring-2 focus:ring-red-300" aria-label="Cerrar formulario" data-astro-cid-3ef6ksr2> <i data-lucide="x" class="w-5 h-5" data-astro-cid-3ef6ksr2></i> </button> </div> <!-- Formulario --> <div class="p-6" data-astro-cid-3ef6ksr2> ', ' </div> </div> </div> <div id="mobile-menu" class="fixed top-0 right-0 w-[85%] max-w-sm h-screen bg-[#FDFCFD] z-999 translate-x-full transition-transform duration-500 ease-in-out lg:hidden flex flex-col shadow-2xl overflow-hidden" role="dialog" aria-modal="true" aria-hidden="true" data-astro-cid-3ef6ksr2> <div class="p-6 bg-white border-b border-gray-50 flex items-center justify-between" data-astro-cid-3ef6ksr2> <div class="flex items-center gap-3" data-astro-cid-3ef6ksr2> <div class="flex flex-col" data-astro-cid-3ef6ksr2> <img src="/images/logo-text.png"', ' class="h-10 w-auto object-contain" data-astro-cid-3ef6ksr2> <span class="text-center text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mt-1 leading-none" data-astro-cid-3ef6ksr2> ', " \xB7 ", ' </span> </div> </div> <button id="close-menu" class="p-2 bg-gray-50 text-gray-400 rounded-full hover:bg-pink-50 hover:text-[#F9A8D4] transition-all active:scale-90" aria-label="Cerrar men\xFA m\xF3vil" data-astro-cid-3ef6ksr2> <i data-lucide="x" class="w-6 h-6" data-astro-cid-3ef6ksr2></i> </button> </div> <nav class="flex flex-col p-6 gap-3 overflow-y-auto bg-[#FDFCFD]" role="navigation" aria-label="Navegaci\xF3n m\xF3vil" data-astro-cid-3ef6ksr2> ', ' </nav> <!-- Lista de Servicios en Men\xFA M\xF3vil --> <div class="px-6 pb-4" data-astro-cid-3ef6ksr2> <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" data-astro-cid-3ef6ksr2> <div class="bg-gradient-to-r from-[#F9A8D4]/10 to-[#F472B6]/10 px-4 py-3 border-b border-gray-50" data-astro-cid-3ef6ksr2> <span class="text-xs font-bold uppercase tracking-wider text-[#F9A8D4]" data-astro-cid-3ef6ksr2>Nuestros Servicios</span> </div> <div class="p-2" data-astro-cid-3ef6ksr2> ', ' </div> </div> </div> <div class="mt-auto p-6 bg-white border-t border-gray-50" data-astro-cid-3ef6ksr2> <a', ` target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-3 bg-[#F9A8D4] text-white py-4 rounded-2xl shadow-lg shadow-pink-100 font-bold text-lg active:scale-95 transition-all uppercase tracking-wider" aria-label="Pedir cita por WhatsApp" data-astro-cid-3ef6ksr2> <i data-lucide="calendar-check" class="w-6 h-6" data-astro-cid-3ef6ksr2></i> <span data-astro-cid-3ef6ksr2>Pedir Cita</span> </a> </div> </div>  <script>
  const initHeader = () => {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileOverlay = document.getElementById("mobile-overlay");
    
    // Contact Modal Elements
    const contactModalBtn = document.getElementById("contact-modal-btn");
    const contactModal = document.getElementById("contact-modal");
    const contactModalBackdrop = document.getElementById("contact-modal-backdrop");
    const contactModalContent = document.getElementById("contact-modal-content");
    const closeContactModal = document.getElementById("close-contact-modal");

    // Verificar si Lucide est\xE1 disponible
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    if (!menuBtn || !mobileMenu || !closeBtn || !mobileOverlay) return;

    let isOpen = false; // Estado para evitar toggles m\xFAltiples

    const toggle = (open) => {
      if (isOpen === open) return; // Evitar repeticiones
      isOpen = open;

      if (open) {
        mobileMenu.classList.remove("translate-x-full");
        mobileOverlay.classList.remove("hidden");
        mobileOverlay.setAttribute("aria-hidden", "false");
        mobileMenu.setAttribute("aria-hidden", "false");
        setTimeout(() => mobileOverlay.classList.add("opacity-100"), 10);
        document.body.style.overflow = "hidden";
        menuBtn.classList.add("open");
        menuBtn.setAttribute("aria-expanded", "true");
      } else {
        mobileMenu.classList.add("translate-x-full");
        mobileOverlay.classList.remove("opacity-100");
        mobileOverlay.setAttribute("aria-hidden", "true");
        mobileMenu.setAttribute("aria-hidden", "true");
        setTimeout(() => mobileOverlay.classList.add("hidden"), 500);
        document.body.style.overflow = "";
        menuBtn.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    };

    menuBtn.addEventListener('click', () => toggle(true));
    closeBtn.addEventListener('click', () => toggle(false));
    mobileOverlay.addEventListener('click', () => toggle(false));
    mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener('click', () => toggle(false)));
    
    // Contact Modal Logic
    if (contactModalBtn && contactModal && closeContactModal && contactModalBackdrop && contactModalContent) {
      
      function openContactModal() {
        // Mostrar el modal primero (quitar hidden)
        contactModal.classList.remove("hidden");
        contactModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        
        // Forzar reflow para que la transici\xF3n funcione
        void contactModalContent.offsetWidth;
        
        // Mostrar backdrop y deslizar panel
        contactModalBackdrop.classList.remove("opacity-0");
        contactModalContent.classList.remove("-translate-x-full");
        contactModalContent.classList.add("translate-x-0");
      }
      
      function closeContactModalFn() {
        // Ocultar backdrop y deslizar panel fuera
        contactModalBackdrop.classList.add("opacity-0");
        contactModalContent.classList.remove("translate-x-0");
        contactModalContent.classList.add("-translate-x-full");
        
        // Esperar a que termine la animaci\xF3n antes de ocultar el modal
        setTimeout(() => {
          contactModal.classList.add("hidden");
          contactModal.setAttribute("aria-hidden", "true");
          document.body.style.overflow = "";
        }, 300);
      }

      // Event listeners
      contactModalBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openContactModal();
      });
      
      closeContactModal.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeContactModalFn();
      });
      
      contactModalBackdrop.addEventListener('click', function(e) {
        if (e.target === contactModalBackdrop) {
          closeContactModalFn();
        }
      });
      
      // Cerrar con tecla Escape
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !contactModal.classList.contains('hidden')) {
          closeContactModalFn();
        }
      });
    }

  };

  document.addEventListener("astro:page-load", initHeader);
  initHeader();
<\/script>`])), maybeRenderHead(), addAttribute(`${siteConfig.name} logo`, "alt"), siteConfig.location.city, siteConfig.location.district, addAttribute(`nav-link transition-all duration-300 hover:text-[#F9A8D4] ${pathname === "/" ? "text-[#F9A8D4] border-b-2 border-[#F9A8D4]" : ""}`, "class"), addAttribute(`nav-link transition-all duration-300 hover:text-[#F9A8D4] ${currentPath.includes("nosotros") ? "text-[#F9A8D4] border-b-2 border-[#F9A8D4]" : ""}`, "class"), addAttribute(`nav-link transition-all duration-300 hover:text-[#F9A8D4] flex items-center gap-1 ${currentPath.includes("servicios") ? "text-[#F9A8D4] border-b-2 border-[#F9A8D4]" : ""}`, "class"), services.map((service) => renderTemplate`<a${addAttribute(`/servicios/${service.slug}`, "href")} class="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-pink-50 hover:text-[#F9A8D4] transition-colors" data-astro-cid-3ef6ksr2> <span class="w-2 h-2 rounded-full bg-[#F9A8D4]/30" data-astro-cid-3ef6ksr2></span> ${service.title} </a>`), addAttribute(`${siteConfig.name} logo`, "alt"), addAttribute(`nav-link transition-all duration-300 hover:text-[#F9A8D4] ${currentPath.includes("equipo") ? "text-[#F9A8D4] border-b-2 border-[#F9A8D4]" : ""}`, "class"), addAttribute(`nav-link transition-all duration-300 hover:text-[#F9A8D4] ${currentPath.includes("blog") ? "text-[#F9A8D4] border-b-2 border-[#F9A8D4]" : ""}`, "class"), addAttribute(`nav-link transition-all duration-300 hover:text-[#F9A8D4] ${currentPath.includes("contacto") ? "text-[#F9A8D4] border-b-2 border-[#F9A8D4]" : ""}`, "class"), renderComponent($$result, "Search", $$Search, { "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "ContactForm", ContactForm, { "email": siteConfig.contact.email, "whatsappNumber": siteConfig.contact.whatsapp, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Astro Clinica Pedriatia/Pediatria-Web/src/components/ContactForm.jsx", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true }), addAttribute(`${siteConfig.name} logo`, "alt"), siteConfig.location.city, siteConfig.location.district, [
    { name: "Inicio", href: "/", icon: "home" },
    { name: "Nosotros", href: "/nosotros", icon: "users" },
    { name: "Servicios", href: "/servicios", icon: "stethoscope" },
    { name: "Equipo", href: "/equipo", icon: "user-round-check" },
    { name: "Blogs", href: "/blogs", icon: "book-open" },
    { name: "Contacto", href: "/contacto", icon: "mail" }
  ].map((item, index) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`mobile-link flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group
        ${pathname === item.href || item.href !== "/" && currentPath.includes(item.href.slice(1)) ? "bg-[#F9A8D4] text-white border-[#F9A8D4] shadow-md shadow-pink-100 font-bold" : "bg-white text-gray-500 border-gray-100 hover:border-[#F9A8D4]/30 hover:bg-pink-50/50"}`, "class")}${addAttribute(`transition-delay: ${index * 70}ms;`, "style")} data-astro-cid-3ef6ksr2> <div${addAttribute(`p-2 rounded-lg ${pathname === item.href ? "bg-white/20" : "bg-gray-50 group-hover:bg-[#F9A8D4]/10 transition-colors"}`, "class")} data-astro-cid-3ef6ksr2> <i${addAttribute(item.icon, "data-lucide")} class="w-5 h-5" data-astro-cid-3ef6ksr2></i> </div> <span class="text-lg flex-1" data-astro-cid-3ef6ksr2>${item.name}</span> <i data-lucide="chevron-right" class="w-5 h-5 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" data-astro-cid-3ef6ksr2></i> </a>`), services.map((service, index) => renderTemplate`<a${addAttribute(`/servicios/${service.slug}`, "href")} class="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:bg-pink-50 hover:text-[#F9A8D4] rounded-xl transition-all duration-200" data-astro-cid-3ef6ksr2> <span class="w-1.5 h-1.5 rounded-full bg-[#F9A8D4]/40" data-astro-cid-3ef6ksr2></span> ${service.title} </a>`), addAttribute(siteConfig.contact.whatsappUrl, "href"));
}, "C:/Astro Clinica Pedriatia/Pediatria-Web/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#457B9D] text-white pt-16 pb-8" data-astro-cid-sz7xmlte> <div class="max-w-7xl mx-auto px-4" data-astro-cid-sz7xmlte> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16" data-astro-cid-sz7xmlte> <div class="flex flex-col gap-6" data-astro-cid-sz7xmlte> <div class="bg-white p-3 rounded-2xl inline-block w-fit" data-astro-cid-sz7xmlte> <img src="/images/logo-text.png" alt="Logo Clínica" class="h-10 w-auto" data-astro-cid-sz7xmlte> </div> <p class="text-sm leading-relaxed" data-astro-cid-sz7xmlte>
Dedicados a brinda salud integral y bienestar a los más pequeños de la casa, con la calidez y el profesionalismo que tu familia merece.
</p> <div class="flex justify-center md:justify-start gap-4" data-astro-cid-sz7xmlte> <a${addAttribute(siteConfig.socials.facebook, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-purple-300 rounded-xl flex items-center justify-center hover:bg-blue-300 hover:text-white transition-all hover:-translate-y-1 hover:scale-110" aria-label="Facebook" data-astro-cid-sz7xmlte> <i data-lucide="facebook" class="w-5 h-5" aria-hidden="true" data-astro-cid-sz7xmlte></i> </a> <a${addAttribute(siteConfig.socials.instagram, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-pink-200 rounded-xl flex items-center justify-center hover:bg-pink-300 hover:text-white transition-all hover:-translate-y-1 hover:scale-110" aria-label="Instagram" data-astro-cid-sz7xmlte> <i data-lucide="instagram" class="w-5 h-5" aria-hidden="true" data-astro-cid-sz7xmlte></i> </a> <a${addAttribute(siteConfig.contact.whatsappUrl, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-green-200 rounded-xl flex items-center justify-center hover:bg-green-300 hover:text-white transition-all hover:-translate-y-1 hover:scale-110" aria-label="WhatsApp" data-astro-cid-sz7xmlte> <i class="bi bi-whatsapp text-lg" aria-hidden="true" data-astro-cid-sz7xmlte></i> </a> <a${addAttribute(siteConfig.socials.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-blue-200 rounded-xl flex items-center justify-center hover:bg-blue-300 hover:text-white transition-all hover:-translate-y-1 hover:scale-110" aria-label="LinkedIn" data-astro-cid-sz7xmlte> <i data-lucide="linkedin" class="w-5 h-5" aria-hidden="true" data-astro-cid-sz7xmlte></i> </a> </div> </div> <div data-astro-cid-sz7xmlte> <h4 class="text-lg font-bold mb-6 border-l-4 border-[#98D8AA] pl-3" data-astro-cid-sz7xmlte>Navegación</h4> <ul class="space-y-4  text-sm" data-astro-cid-sz7xmlte> <li class="flex items-center gap-2" data-astro-cid-sz7xmlte> <!-- Icono de casa --> <svg class="w-4 h-4 text-[#98D8AA]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-sz7xmlte> <path stroke-linecap="round" stroke-linejoin="round" d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" data-astro-cid-sz7xmlte></path> </svg> <a href="/" class="hover:text-gray-700 transition-colors" data-astro-cid-sz7xmlte>Inicio</a> </li> <li class="flex items-center gap-2" data-astro-cid-sz7xmlte> <!-- Icono de información --> <svg class="w-4 h-4 text-[#98D8AA]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-sz7xmlte> <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" data-astro-cid-sz7xmlte></path> </svg> <a href="/nosotros" class="hover:text-gray-700 transition-colors" data-astro-cid-sz7xmlte>Sobre Nosotros</a> </li> <li class="flex items-center gap-2" data-astro-cid-sz7xmlte> <!-- Icono de corazón/servicios --> <svg class="w-4 h-4 text-[#98D8AA]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-sz7xmlte> <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" data-astro-cid-sz7xmlte></path> </svg> <a href="/servicios" class="hover:text-gray-700 transition-colors" data-astro-cid-sz7xmlte>Servicios Médicos</a> </li> <li class="flex items-center gap-2" data-astro-cid-sz7xmlte> <!-- Icono de usuarios/equipo --> <svg class="w-4 h-4 text-[#98D8AA]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-sz7xmlte> <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-1a4 4 0 00-3-3.87M9 20h5v-1a4 4 0 00-3-3.87M12 12a4 4 0 100-8 4 4 0 000 8z" data-astro-cid-sz7xmlte></path> </svg> <a href="/equipo" class="hover:text-gray-700 transition-colors" data-astro-cid-sz7xmlte>Nuestro Equipo</a> </li> <!-- NUEVO: Blogs --> <li class="flex items-center gap-2" data-astro-cid-sz7xmlte> <!-- Icono de blog (documento) --> <svg class="w-4 h-4 text-[#98D8AA]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-sz7xmlte> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6M9 16h6M14 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V8l-5-6z" data-astro-cid-sz7xmlte></path> <path stroke-linecap="round" stroke-linejoin="round" d="M14 2v6h6" data-astro-cid-sz7xmlte></path> </svg> <a href="/blogs" class="hover:text-gray-700 transition-colors" data-astro-cid-sz7xmlte>Blogs</a> </li> </ul> </div> <div data-astro-cid-sz7xmlte> <h4 class="text-lg font-bold mb-6 border-l-4 border-[#A8D8EA] pl-3" data-astro-cid-sz7xmlte>Contacto</h4> <ul class="space-y-4 text-sm" data-astro-cid-sz7xmlte> <li class="flex items-start gap-3" data-astro-cid-sz7xmlte> <i data-lucide="map-pin" class="w-5 h-5 text-[#A8D8EA] shrink-0" data-astro-cid-sz7xmlte></i> <span data-astro-cid-sz7xmlte>${siteConfig.location.address}, ${siteConfig.location.district}</span> </li> <li class="flex items-center gap-3" data-astro-cid-sz7xmlte> <i data-lucide="phone" class="w-5 h-5 text-[#A8D8EA] shrink-0" data-astro-cid-sz7xmlte></i> <span data-astro-cid-sz7xmlte>${siteConfig.contact.phone}</span> </li> <li class="flex items-center gap-3" data-astro-cid-sz7xmlte> <i data-lucide="mail" class="w-5 h-5 text-[#A8D8EA] shrink-0" data-astro-cid-sz7xmlte></i> <span data-astro-cid-sz7xmlte>${siteConfig.contact.email}</span> </li> </ul> </div> <div data-astro-cid-sz7xmlte> <h4 class="text-lg font-bold mb-6 border-l-4 border-[#FFB7C5] pl-3" data-astro-cid-sz7xmlte>Horario</h4> <div class="bg-purple-300/30 p-4 rounded-2xl border border-purple-300/50" data-astro-cid-sz7xmlte> <div class="flex justify-between text-sm mb-2" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>Lun - Vie:</span> <span data-astro-cid-sz7xmlte>8:00 - 20:00</span> </div> <div class="flex justify-between text-sm mb-2" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>Sábados:</span> <span data-astro-cid-sz7xmlte>9:00 - 14:00</span> </div> <div class="flex justify-between text-sm text-gray-700 font-bold" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>Domingos:</span> <span data-astro-cid-sz7xmlte>Cerrado</span> </div> </div> </div> </div> <div class="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" data-astro-cid-sz7xmlte> <p class="text-xs" data-astro-cid-sz7xmlte>
© ${(/* @__PURE__ */ new Date()).getFullYear()} Clínica Pediátrica. Todos los derechos reservados.
</p> <div class="flex gap-6 text-xs" data-astro-cid-sz7xmlte> <a href="/privacidad" class="hover:text-gray-700 transition-colors" data-astro-cid-sz7xmlte>Política de Privacidad</a> <a href="/terminos" class="hover:text-gray-700 transition-colors" data-astro-cid-sz7xmlte>Términos de Servicio</a> </div> </div> </div> <div class="h-1.5 w-full bg-[linear-gradient(to_right,#FFB7C5,#FFEAA7,#A8D8EA)] mt-8" data-astro-cid-sz7xmlte></div> </footer> `;
}, "C:/Astro Clinica Pedriatia/Pediatria-Web/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:4321");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = siteConfig.seo.description } = Astro2.props;
  const fullTitle = `${title} - ${siteConfig.name}`;
  const canonicalUrl = new URL(Astro2.url.pathname, Astro2.url.origin).href;
  return renderTemplate(_a || (_a = __template(['<html lang="es" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"><meta name="generator"', "><title>", '</title><meta name="description"', '><meta name="keywords"', '><link rel="icon" type="image/svg+xml" href="/icon.png"><link rel="canonical"', '><meta name="robots" content="index, follow"><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><!-- Schema Markup para cl\xEDnicas pedi\xE1tricas --><script type="application/ld+json">', '<\/script><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet">', '</head> <!-- Quitamos bg-white y ponemos fondo-nubes --> <body class=" text-gray-800 antialiased min-h-screen flex flex-col font-nunito overflow-x-hidden"> <!-- Skip link mejorado --> <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-500 text-white px-4 py-2 rounded-lg z-50 transition-all focus:ring-2 focus:ring-green-300" aria-label="Saltar al contenido principal">Saltar al contenido</a> ', ' <main id="main-content" class="grow" role="main"> ', " </main> ", " <!-- Script para lazy loading global y micro-interacciones --> <script src=\"https://unpkg.com/lucide@latest\"><\/script> <script>\n      function initIcons() {\n        if (window.lucide) {\n          window.lucide.createIcons();\n        }\n      }\n      initIcons();\n      document.addEventListener(\"astro:page-load\", initIcons);\n      document.addEventListener(\"astro:after-swap\", initIcons);\n\n      // Lazy loading de im\xE1genes\n      const images = document.querySelectorAll('img[data-src]');\n      const imageObserver = new IntersectionObserver((entries, observer) => {\n        entries.forEach(entry => {\n          if (entry.isIntersecting) {\n            const img = entry.target;\n            img.src = img.dataset.src;\n            img.classList.remove('lazy');\n            observer.unobserve(img);\n          }\n        });\n      });\n      images.forEach(img => imageObserver.observe(img));\n\n      // Micro-interacciones: Tooltips en hover\n      document.querySelectorAll('[data-tooltip]').forEach(el => {\n        el.addEventListener('mouseenter', (e) => {\n          const tooltip = document.createElement('div');\n          tooltip.textContent = e.target.dataset.tooltip;\n          tooltip.className = 'absolute bg-gray-800 text-white px-2 py-1 rounded text-sm z-50';\n          document.body.appendChild(tooltip);\n          tooltip.style.left = `${e.pageX + 10}px`;\n          tooltip.style.top = `${e.pageY + 10}px`;\n          e.target.addEventListener('mouseleave', () => tooltip.remove());\n        });\n      });\n    <\/script> </body> </html> "], ['<html lang="es" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"><meta name="generator"', "><title>", '</title><meta name="description"', '><meta name="keywords"', '><link rel="icon" type="image/svg+xml" href="/icon.png"><link rel="canonical"', '><meta name="robots" content="index, follow"><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><!-- Schema Markup para cl\xEDnicas pedi\xE1tricas --><script type="application/ld+json">', '<\/script><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet">', '</head> <!-- Quitamos bg-white y ponemos fondo-nubes --> <body class=" text-gray-800 antialiased min-h-screen flex flex-col font-nunito overflow-x-hidden"> <!-- Skip link mejorado --> <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-500 text-white px-4 py-2 rounded-lg z-50 transition-all focus:ring-2 focus:ring-green-300" aria-label="Saltar al contenido principal">Saltar al contenido</a> ', ' <main id="main-content" class="grow" role="main"> ', " </main> ", " <!-- Script para lazy loading global y micro-interacciones --> <script src=\"https://unpkg.com/lucide@latest\"><\/script> <script>\n      function initIcons() {\n        if (window.lucide) {\n          window.lucide.createIcons();\n        }\n      }\n      initIcons();\n      document.addEventListener(\"astro:page-load\", initIcons);\n      document.addEventListener(\"astro:after-swap\", initIcons);\n\n      // Lazy loading de im\xE1genes\n      const images = document.querySelectorAll('img[data-src]');\n      const imageObserver = new IntersectionObserver((entries, observer) => {\n        entries.forEach(entry => {\n          if (entry.isIntersecting) {\n            const img = entry.target;\n            img.src = img.dataset.src;\n            img.classList.remove('lazy');\n            observer.unobserve(img);\n          }\n        });\n      });\n      images.forEach(img => imageObserver.observe(img));\n\n      // Micro-interacciones: Tooltips en hover\n      document.querySelectorAll('[data-tooltip]').forEach(el => {\n        el.addEventListener('mouseenter', (e) => {\n          const tooltip = document.createElement('div');\n          tooltip.textContent = e.target.dataset.tooltip;\n          tooltip.className = 'absolute bg-gray-800 text-white px-2 py-1 rounded text-sm z-50';\n          document.body.appendChild(tooltip);\n          tooltip.style.left = \\`\\${e.pageX + 10}px\\`;\n          tooltip.style.top = \\`\\${e.pageY + 10}px\\`;\n          e.target.addEventListener('mouseleave', () => tooltip.remove());\n        });\n      });\n    <\/script> </body> </html> "])), addAttribute(Astro2.generator, "content"), fullTitle, addAttribute(description, "content"), addAttribute(siteConfig.seo.keywords.join(", "), "content"), addAttribute(canonicalUrl, "href"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(siteConfig.seo.ogImage, "content"), addAttribute(canonicalUrl, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": siteConfig.name,
    "description": siteConfig.tagline,
    "url": siteConfig.siteUrl,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.location.address,
      "addressLocality": siteConfig.location.city,
      "addressRegion": siteConfig.location.district,
      "postalCode": "00000",
      // Añade si tienes
      "addressCountry": siteConfig.location.country
    },
    "openingHours": [
      "Mo-Fr 08:00-20:00",
      "Sa 09:00-14:00"
    ],
    "medicalSpecialty": "Pediatrics",
    "image": siteConfig.seo.ogImage
  })), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Astro Clinica Pedriatia/Pediatria-Web/src/layouts/Layout.astro", void 0);

export { $$Layout as $, siteConfig as a, getRelatedServices as g, services as s };
